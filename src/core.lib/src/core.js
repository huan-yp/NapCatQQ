const _0x4e661f=_0x5bd4;(function(_0x2d4590,_0x19d872){const _0x35cb14=_0x5bd4,_0x582353=_0x2d4590();while(!![]){try{const _0x4dc31c=-parseInt(_0x35cb14(0x211))/0x1*(-parseInt(_0x35cb14(0x205))/0x2)+-parseInt(_0x35cb14(0x15e))/0x3*(-parseInt(_0x35cb14(0x17f))/0x4)+parseInt(_0x35cb14(0x1c5))/0x5+-parseInt(_0x35cb14(0x162))/0x6*(-parseInt(_0x35cb14(0x19b))/0x7)+-parseInt(_0x35cb14(0x1db))/0x8+parseInt(_0x35cb14(0x204))/0x9+-parseInt(_0x35cb14(0x1c9))/0xa;if(_0x4dc31c===_0x19d872)break;else _0x582353['push'](_0x582353['shift']());}catch(_0x440dac){_0x582353['push'](_0x582353['shift']());}}}(_0x2e4d,0x198b3));import _0x2beeba from'@/core/wrapper';import{BuddyListener,GroupListener,LoginListener,MsgListener,ProfileListener,SessionListener}from'@/core/listeners';import{DependsAdapter,DispatcherAdapter,GlobalAdapter}from'@/core/adapters';import _0x30471a from'node:path';import _0x5be5ac from'node:os';import _0x42e82e from'node:fs';import{appid,qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';function _0x5bd4(_0x458082,_0x29f580){const _0x2e4dd5=_0x2e4d();return _0x5bd4=function(_0x5bd422,_0x4fd5a3){_0x5bd422=_0x5bd422-0x15a;let _0x44e620=_0x2e4dd5[_0x5bd422];return _0x44e620;},_0x5bd4(_0x458082,_0x29f580);}import{hostname,systemVersion}from'@/common/utils/system';import{genSessionConfig}from'@/core/sessionConfig';function _0x2e4d(){const _0x53327c=['createHash','quickLoginWithUin','NBmiR','engine','message_sent','memberCount','onRecvSysMsg','from','addKernelBuddyListener','result','当前账号(','catch','buddyList','353544qHlqEM','onLoginSuccessFuncList','packet_received','NodeQQNTWrapperUtil','dataPathGlobal','createMemberListScene','UfpAG','util','[KickedOffLine]\x20[','sceneId','NodeIKernelGroupListener','update','NodeIQQNTWrapperSession','addKernelGroupListener','initDataListener','hex','GroupListener','onQRCodeLoginSucceed','uin','devUid','getNextMemberList','map','KlHvX','loginService',')已登录,无法重复登录','qpMjH','startNT','then','getQuickLoginList','NodeIKernelMsgListener','mkdirSync','XCxQD','uid','floor','MsgListener','push','getBuddyList','Zrfsh','initSession\x20failed','init','has','1291923hbAyaE','2mwwfCR','RqbfE','now','tipsDesc','addListener','tllWZ','NYTOq','awoMv','EBWEv','getProfileService','loginListener','-v2.db','137635nDZPlD','getMsgService','digest','getLoginList','140022008','NodeIGlobalAdapter','34458zooAFf','onSelfStatusChanged','Proec','yHQqv','711006KsaFvC','140022013','initSession','BJYHt','curVersion','NQHXx','get','_GW_B','NodeIDispatcherAdapter','CQciT','phIqg','length','dataPath','onProfileDetailInfoChanged','登录失败','quickLogin','xbIQf','NodeIKernelBuddyListener','onMsgInfoListUpdate','data:image/png;base64,','recallTime','updateMsg','saNih','consoleLogLevel','BuddyListener','find','oAGCY','infos','set','60DDJoUt','consoleLog','proxyHandler','loginErrorInfo','initWithDeskTopConfig','base64','BrYNE','name','QzSgz','forEach','Vxtux','msgId','md5','cmxxw','passwordLogin','Vfldz','assign','delete','mnHST','isQuickLogin','tipsTitle','cJhsI','getQRCodePicture','数据库初始化失败','./nt_qq/global','pngBase64QrcodeData','快速登录不可用','message_received','7taPUdI','zQXVd','isDelete','onRecvMsg','onLineDev','hGNvP','resolve','groupCode','VngWD','qrLogin','NodeIDependsAdapter','zKYJz','getMsgByLongId','onQRCodeSessionFailed','last_message_time','onGroupListUpdate','ViSSo','replace','addMsg','jdCzd','fileLog','addKernelProfileListener','LjHRh','mQvcE','packet_sent','split','session','stringify','onAddSendMsg','fileLogLevel','read','undefined','zAomt','onLoginFailed','clientType','LWNQr','IJZPa','initConfig','constructor','uLQKh','HJMPE','qrcodeUrl','476305WrqYWO','LocalLoginInfoList','FfXCH','NodeIKernelProfileListener','5184140AiAsrK','homedir','getGroupService','getBuddyService','fXtZP'];_0x2e4d=function(){return _0x53327c;};return _0x2e4d();}import{dbUtil}from'@/common/utils/db';import{sleep}from'@/common/utils/helper';import _0x24e44c from'node:crypto';import{rawFriends,friends,groupMembers,groups,selfInfo,stat,uid2UinMap}from'@/core/data';import{NTEventDispatch}from'@/common/utils/EventTask';import{enableConsoleLog,enableFileLog,log,logDebug,logError,setLogLevel,setLogSelfInfo}from'@/common/utils/log';import{napCatConfig}from'@/core/utils/config';export class NapCatCore{[_0x4e661f(0x1b5)];[_0x4e661f(0x1e2)];[_0x4e661f(0x1d1)];['loginListener'];[_0x4e661f(0x1f2)];[_0x4e661f(0x1dc)]=[];[_0x4e661f(0x181)]={'get'(target,prop,receiver){const _0x12f658=_0x4e661f,fKpFtW={'cmxxw':function(x,y){return x===y;},'KlHvX':_0x12f658(0x1ba)};if(fKpFtW[_0x12f658(0x18c)](typeof target[prop],fKpFtW[_0x12f658(0x1f1)]))return(...args)=>{const _0x4db6ed=_0x12f658;logDebug(target['constructor'][_0x4db6ed(0x186)]+'\x20has\x20no\x20method\x20'+prop);};return Reflect[_0x12f658(0x168)](target,prop,receiver);}};constructor(){const _0x40fd3f=_0x4e661f,_0x2cbbfc={'FfXCH':_0x40fd3f(0x1d8),'hGNvP':_0x40fd3f(0x1f3),'mnHST':function(_0x1a1695,_0x50ddc4){return _0x1a1695 instanceof _0x50ddc4;},'AzwdN':function(_0x1cb444,_0x3d9c5b,_0x4d792a){return _0x1cb444(_0x3d9c5b,_0x4d792a);},'LsfPX':'./NapCat/data','LWNQr':function(_0x32361b,_0x31d085,_0x1e7957){return _0x32361b(_0x31d085,_0x1e7957);},'QzSgz':'本账号数据/缓存目录：','XCxQD':_0x40fd3f(0x201),'Proec':_0x40fd3f(0x170),'LjHRh':function(_0x2e1963,_0x226b5b){return _0x2e1963==_0x226b5b;},'bYRtv':function(_0x577b9b,_0x34b04e,_0x999605){return _0x577b9b(_0x34b04e,_0x999605);}};this[_0x40fd3f(0x1d1)]=new _0x2beeba['NodeIQQNTWrapperEngine'](),this[_0x40fd3f(0x1e2)]=new _0x2beeba[(_0x40fd3f(0x1de))](),this['loginService']=new _0x2beeba['NodeIKernelLoginService'](),this[_0x40fd3f(0x1b5)]=new _0x2beeba[(_0x40fd3f(0x1e7))](),this['loginListener']=new LoginListener(),this[_0x40fd3f(0x20f)]['onUserLoggedIn']=_0x64ecfd=>{const _0x4085e4=_0x40fd3f;logError(_0x2cbbfc[_0x4085e4(0x1c7)]+_0x64ecfd+_0x2cbbfc[_0x4085e4(0x1a0)]);},this[_0x40fd3f(0x20f)][_0x40fd3f(0x1ec)]=_0x9a80e1=>{const _0x4204c9=_0x40fd3f,_0x30b477={'awoMv':function(_0x310861,_0x5bd964,_0x182262){return _0x2cbbfc['AzwdN'](_0x310861,_0x5bd964,_0x182262);},'DvpKl':_0x4204c9(0x196),'cgVka':_0x2cbbfc[_0x4204c9(0x1fa)]};this['initSession'](_0x9a80e1[_0x4204c9(0x1ed)],_0x9a80e1['uid'])['then'](_0xea0505=>{const _0x15e2e2=_0x4204c9,_0x2d90a6={'yHQqv':function(_0x42d5d0,_0x5147cd,_0x2180bb){return _0x42d5d0(_0x5147cd,_0x2180bb);},'tllWZ':function(_0x5cb744,_0x17691c){const _0xfda61c=_0x5bd4;return _0x2cbbfc[_0xfda61c(0x191)](_0x5cb744,_0x17691c);}};selfInfo[_0x15e2e2(0x1ed)]=_0x9a80e1[_0x15e2e2(0x1ed)],selfInfo[_0x15e2e2(0x1fb)]=_0x9a80e1['uid'],napCatConfig[_0x15e2e2(0x1b9)](),_0x2cbbfc['AzwdN'](setLogLevel,napCatConfig[_0x15e2e2(0x1b8)],napCatConfig[_0x15e2e2(0x179)]),enableFileLog(napCatConfig[_0x15e2e2(0x1af)]),enableConsoleLog(napCatConfig[_0x15e2e2(0x180)]),setLogSelfInfo(selfInfo);const _0x35f905=_0x30471a[_0x15e2e2(0x1a1)](this['dataPath'],_0x2cbbfc['LsfPX']);_0x42e82e[_0x15e2e2(0x1f9)](_0x35f905,{'recursive':!![]}),_0x2cbbfc[_0x15e2e2(0x1be)](logDebug,_0x2cbbfc[_0x15e2e2(0x187)],_0x35f905),dbUtil['init'](_0x30471a[_0x15e2e2(0x1a1)](_0x35f905,'./'+_0x9a80e1[_0x15e2e2(0x1ed)]+_0x15e2e2(0x210)))[_0x15e2e2(0x1f6)](()=>{const _0x238524=_0x15e2e2,_0xd28811={'EBWEv':function(_0x1c9172,_0x3c1b10,_0x461f5e){const _0x2c38c5=_0x5bd4;return _0x2d90a6[_0x2c38c5(0x161)](_0x1c9172,_0x3c1b10,_0x461f5e);},'BrYNE':function(_0x2066f4,_0x593873){const _0x26750c=_0x5bd4;return _0x2d90a6[_0x26750c(0x20a)](_0x2066f4,_0x593873);}};this['initDataListener'](),this[_0x238524(0x1dc)][_0x238524(0x1f0)](_0xf6dd6e=>{const _0x8269b7=_0x238524,_0x411a31={'phIqg':function(_0x215ffa,_0x2cbfc9,_0xee4370){const _0x300377=_0x5bd4;return _0xd28811[_0x300377(0x20d)](_0x215ffa,_0x2cbfc9,_0xee4370);},'Uawqo':function(_0x57910e,_0x284cfa){const _0x4ed983=_0x5bd4;return _0xd28811[_0x4ed983(0x185)](_0x57910e,_0x284cfa);}};new Promise((_0x55574c,_0x574cfe)=>{const _0x3ed674=_0x5bd4,_0x57909a=_0x411a31[_0x3ed674(0x16c)](_0xf6dd6e,_0x9a80e1[_0x3ed674(0x1ed)],_0x9a80e1[_0x3ed674(0x1fb)]);_0x411a31['Uawqo'](_0x57909a,Promise)&&_0x57909a[_0x3ed674(0x1f6)](_0x55574c)[_0x3ed674(0x1d9)](_0x574cfe);})[_0x8269b7(0x1f6)]();});})[_0x15e2e2(0x1d9)](_0x36ff5a=>{const _0x4494b9=_0x15e2e2;_0x30b477[_0x4494b9(0x20c)](logError,_0x30b477['DvpKl'],_0x36ff5a);});})[_0x4204c9(0x1d9)](_0x1ab4ca=>{const _0x4f0f59=_0x4204c9;logError(_0x30b477['cgVka'],_0x1ab4ca);throw new Error('启动失败:\x20'+JSON[_0x4f0f59(0x1b6)](_0x1ab4ca));});},this[_0x40fd3f(0x20f)][_0x40fd3f(0x1a8)]=(_0x27254e,_0x34e485,_0x282ff5)=>{const _0x372e9d=_0x40fd3f;_0x2cbbfc[_0x372e9d(0x1be)](logError,_0x2cbbfc[_0x372e9d(0x160)],_0x282ff5),_0x2cbbfc[_0x372e9d(0x1b1)](_0x27254e,0x1)&&_0x2cbbfc[_0x372e9d(0x1b1)](_0x34e485,0x3)&&this[_0x372e9d(0x1f2)][_0x372e9d(0x195)]();},this['loginListener'][_0x40fd3f(0x1bc)]=_0x2eda82=>{const _0x517cc1=_0x40fd3f;_0x2cbbfc['bYRtv'](logError,_0x2cbbfc[_0x517cc1(0x160)],_0x2eda82);},this['loginListener']=new Proxy(this[_0x40fd3f(0x20f)],this[_0x40fd3f(0x181)]),this['loginService']['addKernelLoginListener'](new _0x2beeba['NodeIKernelLoginListener'](this[_0x40fd3f(0x20f)])),this[_0x40fd3f(0x1c0)]();}get[_0x4e661f(0x16e)](){const _0x5b24f4=_0x4e661f;let _0x1b2bd4=this['util']['getNTUserDataInfoConfig']();return!_0x1b2bd4&&(_0x1b2bd4=_0x30471a['resolve'](_0x5be5ac[_0x5b24f4(0x1ca)](),'./.config/QQ'),_0x42e82e[_0x5b24f4(0x1f9)](_0x1b2bd4,{'recursive':!![]})),_0x1b2bd4;}get[_0x4e661f(0x1df)](){const _0x1dce5d=_0x4e661f,_0x2b9de4={'IJZPa':_0x1dce5d(0x197)};return _0x30471a['resolve'](this['dataPath'],_0x2b9de4[_0x1dce5d(0x1bf)]);}[_0x4e661f(0x1c0)](){const _0x32c25b=_0x4e661f,_0x87c62a={'SOjMS':'Windows\x2010\x20Pro'};this[_0x32c25b(0x1d1)][_0x32c25b(0x183)]({'base_path_prefix':'','platform_type':0x3,'app_type':0x4,'app_version':qqVersionConfigInfo[_0x32c25b(0x166)],'os_version':_0x87c62a['SOjMS'],'use_xlog':!![],'qua':'V1_WIN_NQ_'+qqVersionConfigInfo['curVersion'][_0x32c25b(0x1ac)]('-','_')+_0x32c25b(0x169),'global_path_config':{'desktopGlobalPath':this['dataPathGlobal']},'thumb_config':{'maxSide':0x144,'minSide':0x30,'longLimit':0x6,'density':0x2}},new _0x2beeba[(_0x32c25b(0x15d))](new GlobalAdapter())),this[_0x32c25b(0x1f2)][_0x32c25b(0x1c0)]({'machineId':'','appid':appid,'platVer':systemVersion,'commonPath':this[_0x32c25b(0x1df)],'clientVer':qqVersionConfigInfo[_0x32c25b(0x166)],'hostName':hostname});}[_0x4e661f(0x164)](_0x5e8cfb,_0x2e57bf){const _0x3a4540={'VngWD':function(_0x5c73af,_0x15f78a){return _0x5c73af===_0x15f78a;},'mQvcE':function(_0x3f5d52,_0x43089e){return _0x3f5d52(_0x43089e);},'jJFOj':function(_0x268e22,_0x5714b1){return _0x268e22(_0x5714b1);},'Vfldz':function(_0x26c208,_0x25f963){return _0x26c208+_0x25f963;},'qpMjH':'init\x20failed\x20'};return new Promise((_0x10a4f1,_0xfed45b)=>{const _0x4698fb=_0x5bd4,_0x5f3d78=genSessionConfig(_0x5e8cfb,_0x2e57bf,this[_0x4698fb(0x16e)]),_0x369a77=new SessionListener();_0x369a77['onSessionInitComplete']=_0x2746ac=>{const _0x563dd4=_0x4698fb;if(_0x3a4540[_0x563dd4(0x1a3)](_0x2746ac,0x0))return _0x3a4540[_0x563dd4(0x1b2)](_0x10a4f1,0x0);_0x3a4540['jJFOj'](_0xfed45b,_0x2746ac);},this['session'][_0x4698fb(0x202)](_0x5f3d78,new _0x2beeba[(_0x4698fb(0x1a5))](new DependsAdapter()),new _0x2beeba[(_0x4698fb(0x16a))](new DispatcherAdapter()),new _0x2beeba['NodeIKernelSessionListener'](_0x369a77));try{this[_0x4698fb(0x1b5)][_0x4698fb(0x1f5)](0x0);}catch(_0x38cc2b){try{this[_0x4698fb(0x1b5)][_0x4698fb(0x1f5)]();}catch(_0x1737a2){_0x3a4540['jJFOj'](_0xfed45b,_0x3a4540[_0x4698fb(0x18e)](_0x3a4540[_0x4698fb(0x1f4)],_0x1737a2));}}});}[_0x4e661f(0x1e9)](){const _0x278709=_0x4e661f,_0x51b472={'NYTOq':function(_0x57eee1,_0x493ba5){return _0x57eee1(_0x493ba5);},'uLQKh':function(_0x498052,_0x42965d){return _0x498052+_0x42965d;},'UfpAG':function(_0x35ac24,_0x5f58a0){return _0x35ac24+_0x5f58a0;},'hBkTO':'账号设备(','zAomt':')\x20在线状态变更','jdCzd':_0x278709(0x1e3),'BJYHt':function(_0x5e9905,_0x326c6c){return _0x5e9905/_0x326c6c;},'fXtZP':function(_0x254ef0,_0x24be2a){return _0x254ef0/_0x24be2a;},'Vxtux':function(_0x25c623,_0x37eca0){return _0x25c623===_0x37eca0;},'oAGCY':function(_0x4d9139,_0x155804){return _0x4d9139===_0x155804;},'CQciT':function(_0x4a3045,_0x525eee,_0x908bfb){return _0x4a3045(_0x525eee,_0x908bfb);}},_0x247dfe=new MsgListener();_0x247dfe[_0x278709(0x19f)]=_0x5b5088=>{_0x5b5088['map'](_0x450b35=>{const _0x523b79=_0x5bd4;_0x450b35[_0x523b79(0x1bd)]===0x2&&_0x51b472[_0x523b79(0x20b)](log,_0x51b472[_0x523b79(0x1c2)](_0x51b472['UfpAG'](_0x51b472['hBkTO'],_0x450b35[_0x523b79(0x1ee)]),_0x51b472[_0x523b79(0x1bb)]));});},_0x247dfe['onKickedOffLine']=_0x1d07b7=>{const _0xf87253=_0x278709;_0x51b472['NYTOq'](log,_0x51b472[_0xf87253(0x1e1)](_0x51b472[_0xf87253(0x1e1)](_0x51b472[_0xf87253(0x1c2)](_0x51b472[_0xf87253(0x1ae)],_0x1d07b7[_0xf87253(0x193)]),']\x20'),_0x1d07b7[_0xf87253(0x208)]));},_0x247dfe[_0x278709(0x174)]=_0x5341d8=>{const _0x1f65c1=_0x278709;stat[_0x1f65c1(0x1dd)]+=0x1,_0x5341d8[_0x1f65c1(0x1f0)](_0xd348f4=>{const _0x4b9f13=_0x1f65c1;_0xd348f4[_0x4b9f13(0x176)]==='0'?dbUtil[_0x4b9f13(0x1ad)](_0xd348f4)[_0x4b9f13(0x1f6)]()[_0x4b9f13(0x1d9)]():dbUtil[_0x4b9f13(0x1a7)](_0xd348f4[_0x4b9f13(0x18a)])[_0x4b9f13(0x1f6)](_0x990697=>{const _0x3582cb=_0x4b9f13;_0x990697&&(_0x990697['recallTime']=_0xd348f4[_0x3582cb(0x176)],dbUtil[_0x3582cb(0x177)](_0x990697)['then']());});});},_0x247dfe[_0x278709(0x1b7)]=_0x44f3b2=>{const _0x1a2147=_0x278709;stat[_0x1a2147(0x1b3)]+=0x1,stat[_0x1a2147(0x1d2)]+=0x1,stat['last_message_time']=Math[_0x1a2147(0x1fc)](_0x51b472[_0x1a2147(0x165)](Date[_0x1a2147(0x207)](),0x3e8));},_0x247dfe[_0x278709(0x19e)]=_0x461f1b=>{const _0x39d36a=_0x278709;stat[_0x39d36a(0x1dd)]+=0x1,stat[_0x39d36a(0x19a)]+=_0x461f1b[_0x39d36a(0x16d)],stat[_0x39d36a(0x1a9)]=Math[_0x39d36a(0x1fc)](_0x51b472[_0x39d36a(0x1cd)](Date[_0x39d36a(0x207)](),0x3e8));},_0x247dfe[_0x278709(0x1d4)]=(..._0x512b1a)=>{const _0x175ded=_0x278709;stat[_0x175ded(0x1dd)]+=0x1;},this[_0x278709(0x209)](_0x247dfe);const _0x27c4f5=new BuddyListener();_0x27c4f5['onBuddyListChange']=_0x17451c=>{const _0x304edd=_0x278709;rawFriends[_0x304edd(0x16d)]=0x0,rawFriends['push'](..._0x17451c);for(const _0x21385c of _0x17451c){for(const _0x5ad585 of _0x21385c[_0x304edd(0x1da)]){const _0xd98e36=friends['get'](_0x5ad585['uid']);uid2UinMap[_0x5ad585['uid']]=_0x5ad585[_0x304edd(0x1ed)],_0xd98e36?Object[_0x304edd(0x18f)](_0xd98e36,_0x5ad585):friends[_0x304edd(0x17e)](_0x5ad585[_0x304edd(0x1fb)],_0x5ad585);}}},this[_0x278709(0x209)](_0x27c4f5),this['session'][_0x278709(0x1cc)]()[_0x278709(0x1ff)](!![])[_0x278709(0x1f6)](_0x34bb71=>{});const _0x1e273c=new ProfileListener();_0x1e273c[_0x278709(0x16f)]=_0x4b1878=>{const _0x1d67d0=_0x278709;_0x51b472[_0x1d67d0(0x189)](_0x4b1878[_0x1d67d0(0x1fb)],selfInfo['uid'])&&Object[_0x1d67d0(0x18f)](selfInfo,_0x4b1878);},_0x1e273c[_0x278709(0x15f)]=_0x26a88a=>{},this[_0x278709(0x209)](_0x1e273c);const _0x4853a9=new GroupListener();_0x4853a9[_0x278709(0x1aa)]=(_0x57866d,_0x40f57d)=>{const _0x58afdb=_0x278709;_0x40f57d[_0x58afdb(0x1f0)](_0x22dc7a=>{const _0x32f25e=_0x58afdb,_0x231060=groups[_0x32f25e(0x168)](_0x22dc7a[_0x32f25e(0x1a2)]);_0x231060&&_0x22dc7a[_0x32f25e(0x1d3)]===_0x231060[_0x32f25e(0x1d3)]?Object[_0x32f25e(0x18f)](_0x231060,_0x22dc7a):groups[_0x32f25e(0x17e)](_0x22dc7a[_0x32f25e(0x1a2)],_0x22dc7a);const _0x5141ba=this[_0x32f25e(0x1b5)][_0x32f25e(0x1cb)]()[_0x32f25e(0x1e0)](_0x22dc7a[_0x32f25e(0x1a2)],'groupMemberList_MainWindow');this[_0x32f25e(0x1b5)][_0x32f25e(0x1cb)]()[_0x32f25e(0x1ef)](_0x5141ba,undefined,0xbb8)[_0x32f25e(0x1f6)](_0x1eb9f3=>{});});},_0x4853a9['onMemberListChange']=_0x1d5af5=>{const _0x2beacc=_0x278709,_0x3fa146=_0x1d5af5[_0x2beacc(0x1e4)][_0x2beacc(0x1b4)]('_')[0x0];if(groupMembers[_0x2beacc(0x203)](_0x3fa146)){const _0x1349d3=groupMembers[_0x2beacc(0x168)](_0x3fa146);_0x1d5af5[_0x2beacc(0x17d)][_0x2beacc(0x188)]((_0x230a53,_0x36642d)=>{const _0x5664f7=_0x2beacc,_0x47c556=_0x1349d3['get'](_0x36642d);_0x47c556?Object[_0x5664f7(0x18f)](_0x47c556,_0x230a53):_0x1349d3[_0x5664f7(0x17e)](_0x36642d,_0x230a53);});}else groupMembers[_0x2beacc(0x17e)](_0x3fa146,_0x1d5af5['infos']);},_0x4853a9['onMemberInfoChange']=(_0x652e88,_0x388776,_0x2527b9)=>{const _0x34b807=_0x278709;_0x51b472[_0x34b807(0x17c)](_0x388776,0x0)&&_0x2527b9[_0x34b807(0x168)](selfInfo['uid'])&&_0x2527b9['get'](selfInfo[_0x34b807(0x1fb)])?.[_0x34b807(0x19d)]&&_0x51b472[_0x34b807(0x16b)](setTimeout,()=>{const _0x107200=_0x34b807;groups[_0x107200(0x190)](_0x652e88);},0x1388);_0x2527b9[_0x34b807(0x188)]((_0x432175,_0x135846)=>{const _0x182506=_0x34b807;uid2UinMap[_0x135846]=_0x432175[_0x182506(0x1ed)];});const _0x1d8462=groupMembers['get'](_0x652e88);_0x1d8462?_0x2527b9[_0x34b807(0x188)]((_0x16c5ae,_0x973d5c)=>{const _0x37a9c4=_0x34b807,_0x9f5150=_0x1d8462[_0x37a9c4(0x168)](_0x973d5c);_0x9f5150?Object[_0x37a9c4(0x18f)](_0x9f5150,_0x16c5ae):_0x1d8462[_0x37a9c4(0x17e)](_0x973d5c,_0x16c5ae);}):groupMembers[_0x34b807(0x17e)](_0x652e88,_0x2527b9);},this['addListener'](_0x4853a9);}[_0x4e661f(0x209)](_0x5526ff){const _0x2b29e2=_0x4e661f,_0xd082d7={'WVqAr':_0x2b29e2(0x17a),'uSHpy':_0x2b29e2(0x1eb),'zQXVd':'ProfileListener'};_0x5526ff=new Proxy(_0x5526ff,this[_0x2b29e2(0x181)]);switch(_0x5526ff[_0x2b29e2(0x1c1)][_0x2b29e2(0x186)]){case _0xd082d7['WVqAr']:{return this['session']['getBuddyService']()[_0x2b29e2(0x1d6)](new _0x2beeba[(_0x2b29e2(0x173))](_0x5526ff));}case _0xd082d7['uSHpy']:{return this[_0x2b29e2(0x1b5)]['getGroupService']()[_0x2b29e2(0x1e8)](new _0x2beeba[(_0x2b29e2(0x1e5))](_0x5526ff));}case _0x2b29e2(0x1fd):{return this['session'][_0x2b29e2(0x212)]()['addKernelMsgListener'](new _0x2beeba[(_0x2b29e2(0x1f8))](_0x5526ff));}case _0xd082d7[_0x2b29e2(0x19c)]:{return this[_0x2b29e2(0x1b5)][_0x2b29e2(0x20e)]()[_0x2b29e2(0x1b0)](new _0x2beeba[(_0x2b29e2(0x1c8))](_0x5526ff));}default:return-0x1;}}['onLoginSuccess'](_0xc61ea8){const _0x4ff4e1=_0x4e661f;NTEventDispatch[_0x4ff4e1(0x202)]({'ListenerMap':_0x2beeba,'WrapperSession':this[_0x4ff4e1(0x1b5)]}),this[_0x4ff4e1(0x1dc)][_0x4ff4e1(0x1fe)](_0xc61ea8);}async[_0x4e661f(0x171)](_0x5ef95a){const _0x2c7def=_0x4e661f,_0x5231f9={'xbIQf':function(_0x4bca8e,_0x251424){return _0x4bca8e(_0x251424);},'NQHXx':function(_0x4b9220,_0x5217fc){return _0x4b9220+_0x5217fc;},'RqbfE':'快速登录失败\x20'},_0x1a6fa2=await this['loginService']['getLoginList']();if(_0x1a6fa2[_0x2c7def(0x1d7)]!==0x0)throw new Error('没有可快速登录的QQ号');const _0x2ff17e=_0x1a6fa2[_0x2c7def(0x1c6)][_0x2c7def(0x17b)](_0x475244=>_0x475244['uin']===_0x5ef95a);if(!_0x2ff17e||!_0x2ff17e?.[_0x2c7def(0x192)])throw new Error(_0x5ef95a+_0x2c7def(0x199));await _0x5231f9[_0x2c7def(0x172)](sleep,0x3e8);const _0x2dc35c=await this['loginService'][_0x2c7def(0x1cf)](_0x5ef95a);if(!_0x2dc35c[_0x2c7def(0x1d7)])throw new Error(_0x5231f9[_0x2c7def(0x167)](_0x5231f9[_0x2c7def(0x206)],_0x2dc35c[_0x2c7def(0x182)]['errMsg']));return _0x2dc35c;}async[_0x4e661f(0x1a4)](_0x197b87){const _0x105b48=_0x4e661f,_0x2ef18e={'IPOaI':_0x105b48(0x184)};return new Promise((_0x39aa48,_0x207158)=>{const _0x11dadd=_0x105b48,_0x170508={'HJMPE':_0x2ef18e['IPOaI']};this[_0x11dadd(0x20f)]['onQRCodeGetPicture']=_0xe6600a=>{const _0x19b9f7=_0x11dadd,_0x493cdd=_0xe6600a['pngBase64QrcodeData'][_0x19b9f7(0x1b4)](_0x19b9f7(0x175))[0x1],_0x2252c6=Buffer[_0x19b9f7(0x1d5)](_0x493cdd,_0x170508[_0x19b9f7(0x1c3)]);_0x197b87(_0xe6600a[_0x19b9f7(0x1c4)],_0xe6600a[_0x19b9f7(0x198)],_0x2252c6);},this[_0x11dadd(0x1f2)]['getQRCodePicture']();});}async[_0x4e661f(0x18d)](_0x2ddcf4,_0x335428,_0x27565e,_0x577fa4,_0x5d6050){const _0x53c7fb=_0x4e661f,_0x29bf6a={'iWeXJ':_0x53c7fb(0x18b),'cJhsI':_0x53c7fb(0x1ea),'Zrfsh':function(_0x2926de,_0x1cd4b5){return _0x2926de&&_0x1cd4b5;},'zKYJz':function(_0x57060c,_0x50563e){return _0x57060c||_0x50563e;},'JlVAZ':function(_0x25fd1b,_0x1d895a){return _0x25fd1b||_0x1d895a;},'NBmiR':function(_0x3701f9,_0x1b8b49){return _0x3701f9(_0x1b8b49);},'saNih':_0x53c7fb(0x15c),'ViSSo':_0x53c7fb(0x163)},_0x29d8da=_0x24e44c[_0x53c7fb(0x1ce)](_0x29bf6a['iWeXJ'])[_0x53c7fb(0x1e6)](_0x335428)[_0x53c7fb(0x15a)](_0x29bf6a[_0x53c7fb(0x194)]),_0x5740d8={'uin':_0x2ddcf4,'passwordMd5':_0x29d8da,'step':_0x29bf6a[_0x53c7fb(0x200)](_0x27565e,_0x577fa4)&&_0x5d6050?0x1:0x0,'newDeviceLoginSig':'','proofWaterSig':_0x29bf6a[_0x53c7fb(0x1a6)](_0x27565e,''),'proofWaterRand':_0x29bf6a['zKYJz'](_0x577fa4,''),'proofWaterSid':_0x29bf6a['JlVAZ'](_0x5d6050,'')};await this[_0x53c7fb(0x1f2)][_0x53c7fb(0x15b)](),await _0x29bf6a[_0x53c7fb(0x1d0)](sleep,0x3e8);const _0x2f79a2=await this['loginService'][_0x53c7fb(0x18d)](_0x5740d8);switch(_0x2f79a2[_0x53c7fb(0x1d7)]){case'0':{break;}case _0x29bf6a[_0x53c7fb(0x178)]:{break;}case'4':case _0x29bf6a[_0x53c7fb(0x1ab)]:default:}}async[_0x4e661f(0x1f7)](){const _0x24628c=_0x4e661f,_0x211e58=await this[_0x24628c(0x1f2)]['getLoginList']();return _0x211e58;}}export const napCatCore=new NapCatCore();