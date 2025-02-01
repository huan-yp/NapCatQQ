import type { RequestHandler } from 'express';
import { sendError, sendSuccess } from '../utils/response';
import { WebUiConfigWrapper } from '../helper/config';
import { logSubscription } from '@/common/log';
import { terminalManager } from '../terminal/terminal_manager';

// 日志记录
export const LogHandler: RequestHandler = async (req, res) => {
    const filename = req.query.id as string;
    if (filename.includes('..')) {
        return sendError(res, 'ID不合法');
    }
    const logContent = await WebUiConfigWrapper.GetLogContent(filename);
    return sendSuccess(res, logContent);
};

// 日志列表
export const LogListHandler: RequestHandler = async (_, res) => {
    const logList = await WebUiConfigWrapper.GetLogsList();
    return sendSuccess(res, logList);
};

// 实时日志（SSE）
export const LogRealTimeHandler: RequestHandler = async (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');
    const listener = (log: string) => {
        try {
            res.write(`data: ${log}\n\n`);
        } catch (error) {
            console.error('向客户端写入日志数据时出错:', error);
        }
    };
    logSubscription.subscribe(listener);
    req.on('close', () => {
        logSubscription.unsubscribe(listener);
    });
};

// 终端相关处理器
export const CreateTerminalHandler: RequestHandler = async (req, res) => {
    try {
        const id = Math.random().toString(36).substring(2);
        terminalManager.createTerminal(id);
        return sendSuccess(res, { id });
    } catch (error) {
        console.error('Failed to create terminal:', error);
        return sendError(res, '创建终端失败');
    }
};

export const GetTerminalListHandler: RequestHandler = (req, res) => {
    const list = terminalManager.getTerminalList();
    return sendSuccess(res, list);
};

export const CloseTerminalHandler: RequestHandler = (req, res) => {
    const id = req.params.id;
    terminalManager.closeTerminal(id);
    return sendSuccess(res, {});
};

// 终端数据交换
export const TerminalHandler: RequestHandler = (req, res) => {
    const id = req.params.id;
    if (!terminalManager.getTerminal(id)) {
        return sendError(res, '终端不存在');
    }

    if (req.body.input) {
        terminalManager.writeTerminal(id, req.body.input);
    }

    return sendSuccess(res, {});
};

// 终端数据流（SSE）
export const TerminalStreamHandler: RequestHandler = (req, res) => {
    const id = req.params.id;
    const instance = terminalManager.getTerminal(id);

    if (!instance) {
        return sendError(res, '终端不存在');
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');

    const dataHandler = (data: string) => {
        if (!res.writableEnded) {
            res.write(`data: ${JSON.stringify({ type: 'output', data })}\n\n`);
        }
    };

    const dispose = terminalManager.onTerminalData(id, dataHandler);

    req.on('close', () => {
        dispose();
    });
};
