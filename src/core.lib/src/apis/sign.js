(function(_0x49f020,_0x393991){const _0x3d925f=_0x4ecc,_0x5cb184=_0x49f020();while(!![]){try{const _0x47797b=parseInt(_0x3d925f(0x1a2))/0x1+parseInt(_0x3d925f(0x1a7))/0x2*(parseInt(_0x3d925f(0x1a5))/0x3)+parseInt(_0x3d925f(0x19f))/0x4*(parseInt(_0x3d925f(0x1a8))/0x5)+-parseInt(_0x3d925f(0x194))/0x6*(parseInt(_0x3d925f(0x197))/0x7)+-parseInt(_0x3d925f(0x1ad))/0x8*(-parseInt(_0x3d925f(0x1b8))/0x9)+-parseInt(_0x3d925f(0x191))/0xa*(-parseInt(_0x3d925f(0x19e))/0xb)+parseInt(_0x3d925f(0x1a9))/0xc*(-parseInt(_0x3d925f(0x1aa))/0xd);if(_0x47797b===_0x393991)break;else _0x5cb184['push'](_0x5cb184['shift']());}catch(_0xe953f7){_0x5cb184['push'](_0x5cb184['shift']());}}}(_0x38b6,0x4284d));import{logDebug}from'@/common/utils/log';import{NTQQUserApi}from'./user';function _0x38b6(){const _0x4b5a3a=['166415jthWjj','tagIcon','getSkey','75zBpkyA','stringify','15560nOnpiH','5BwxTDn','48JlihVM','4188665RUntkl','cjxRl','oysrS','32TylZAO','p_skey','skey','title','source','CRWcd','normal','com.tencent.miniapp.lua','replace','MiniApp\x20JSON\x20消息生成失败','HttpGetJson','1167633lKOAwM','OFoUq','tag',';\x20skey=','signed_ark','prompt','preview','iKNTe','30YNlHBu','WrExs','miniapp','1851780Rlmlfd','sourcelogo','p_skey=','7VqXrCL','&ark=','jAUqA','GET',';\x20p_uin=o','imnuP','GSLYH','1973059WBcNtP','1807764nWqueD','https://h5.qzone.qq.com/v2/vip/tx/trpc/ark-share/GenNewSignedArk?g_tk=','\x5c/\x5c/'];_0x38b6=function(){return _0x4b5a3a;};return _0x38b6();}import{selfInfo}from'../data';import{RequestUtil}from'@/common/utils/request';import{WebApi}from'./webapi';function _0x4ecc(_0x662f63,_0x919f5){const _0x38b6f6=_0x38b6();return _0x4ecc=function(_0x4ecc92,_0x1e15ae){_0x4ecc92=_0x4ecc92-0x18d;let _0x42fe17=_0x38b6f6[_0x4ecc92];return _0x42fe17;},_0x4ecc(_0x662f63,_0x919f5);}export async function SignMiniApp(_0x23d49d){const _0x22860a=_0x4ecc,_0x19ea4d={'vGgCA':'tianxuan.imgJumpArk','ieetQ':_0x22860a(0x193),'GSLYH':'\x5c/\x5c/','OFoUq':function(_0x1b3350,_0x52646a){return _0x1b3350+_0x52646a;},'iKNTe':_0x22860a(0x196),'esDMQ':_0x22860a(0x1bb),'imnuP':_0x22860a(0x19b),'cjxRl':_0x22860a(0x198),'CRWcd':function(_0x96acd7,_0x390307){return _0x96acd7(_0x390307);},'jAUqA':_0x22860a(0x19a),'WrExs':function(_0x4b65b1,_0x177981,_0x2292e1){return _0x4b65b1(_0x177981,_0x2292e1);},'oysrS':_0x22860a(0x1b6)};let _0x5808e6={'app':_0x22860a(0x1b4),'bizsrc':_0x19ea4d['vGgCA'],'view':_0x19ea4d['ieetQ'],'prompt':_0x23d49d[_0x22860a(0x18e)],'config':{'type':_0x22860a(0x1b3),'forward':0x1,'autosize':0x0},'meta':{'miniapp':{'title':_0x23d49d[_0x22860a(0x1b0)],'preview':_0x23d49d[_0x22860a(0x18f)][_0x22860a(0x1b5)](/\\/g,_0x19ea4d[_0x22860a(0x19d)]),'jumpUrl':_0x23d49d['jumpUrl']['replace'](/\\/g,_0x19ea4d[_0x22860a(0x19d)]),'tag':_0x23d49d[_0x22860a(0x1ba)],'tagIcon':_0x23d49d[_0x22860a(0x1a3)][_0x22860a(0x1b5)](/\\/g,_0x22860a(0x1a1)),'source':_0x23d49d[_0x22860a(0x1b1)],'sourcelogo':_0x23d49d[_0x22860a(0x195)]['replace'](/\\/g,_0x22860a(0x1a1))}}};const _0x4ead04=await NTQQUserApi[_0x22860a(0x1a4)]();let _0x64fc90=await NTQQUserApi['getQzoneCookies']();const _0x46c782=WebApi['genBkn'](_0x64fc90[_0x22860a(0x1ae)]),_0x42e9e8=_0x19ea4d[_0x22860a(0x1b9)](_0x19ea4d[_0x22860a(0x1b9)](_0x19ea4d[_0x22860a(0x1b9)](_0x19ea4d['OFoUq'](_0x19ea4d['OFoUq'](_0x19ea4d[_0x22860a(0x190)]+_0x64fc90['p_skey']+_0x19ea4d['esDMQ'],_0x64fc90[_0x22860a(0x1af)]),_0x19ea4d[_0x22860a(0x19c)]),selfInfo['uin']),';\x20uin=o'),selfInfo['uin']);let _0x27627e=_0x19ea4d['OFoUq'](_0x19ea4d[_0x22860a(0x1b9)](_0x22860a(0x1a0)+_0x46c782,_0x19ea4d[_0x22860a(0x1ab)]),_0x19ea4d[_0x22860a(0x1b2)](encodeURIComponent,JSON[_0x22860a(0x1a6)](_0x5808e6))),_0x36e4de='';try{let _0x58d599=await RequestUtil[_0x22860a(0x1b7)](_0x27627e,_0x19ea4d[_0x22860a(0x199)],undefined,{'Cookie':_0x42e9e8});_0x36e4de=_0x58d599['data'][_0x22860a(0x18d)];}catch(_0x2ccfbe){_0x19ea4d[_0x22860a(0x192)](logDebug,_0x19ea4d[_0x22860a(0x1ac)],_0x2ccfbe);}return _0x36e4de;}