/*
@肥皂 3.22 闲趣赚  一天0.1-0.3或者更高
苹果&安卓下载地址：复制链接到微信打开   https://a.jrpub.cn/3345249
新人进去直接秒到账两个0.3.。。。（微信登录）花两分钟再完成下新人任务，大概秒到微信3元左右
感觉看账号等级，我的小号进去只能做五个任务，大号可以做十个。
建议做一下里面的任务，单价还是不错的，做完等级升上来了挂脚本收益也多一点。
抓取域名  wap.quxianzhuan.com  抓取cookie的全部数据。。
青龙变量  xqzck  多账户@隔开
运行cron  一天一次，自己设置。。别同时跑
示例： 10 12 * * *
*/
var _0xod1='jsjiami.com.v6',_0xod1_=['‮_0xod1'],_0x1bdc=[_0xod1,'w4HCvwFlwoM=','w7jCuCA=','wo8nwpk1w7U=','wqEvSCbCpQ==','w7/DpMOyIVU=','K13CoMKkwp7CsQ==','w6pWK8KLw7U=','6Zaf6LSg6Lei','wrIIAQHCssKO','w6zDtl3Ck8OLXHTCmTk=','wrchYi7CsEE=','czTCjA==','GV3DuQYn','wq8Ww7XDuw3DokQ=','XkbDjE7Dt8Oew4HCm8KX','wrcgfCPCrA==','wr5Owps6w6Y=','wpU2w4vCii4=','LsKew47DuMKWw53ChsK9wow4Kn9lReWEvg==','5Lqf6LWO5Y64wr3CnMKvVEo6w7MowqPClD8HSiQ=','wpQDw6YLU8O9','wrwDERLCqw==','w75UK8Kiw5U=','wrI9Sw==','wrBXwoPDqGI=','w67Dk8ObwqbChg==','SsKWwojDqcKVw5U=','wozDjGYI','XE/DlcK3aWw5LBhPN8OFBhnDoTQrHsOpw77DscObwpLDqsKlw5vDk8O7Lg3DgmA6wo9KwrvDm8O3w49cGXsSw7zDlS5TfsOdVXo0w7nCocKUw7zCr8Oaw4bDoMOIwoBFe1c2','wqkYbTPCsA==','RhZOVMOdwoB7wqdNQ1LCgQLCuiItRmzCrjViAV9AEyzChMKmwq/Clip3MmzDnV7DpsKLwphuw43ClinDm8KOw7/CtcOowrfClDLCmTLCrcO0cQkrwr3Cq8Olw5EDwrzCtADDrsO9O8KPw7A6Q8KbLsOsTBkRw7hFfSvDlVsgwpbDmH58wofChMOVw4LCpMKVw5NFw5DCmmgmVsKpMRDCmCAuw6bChsKjwqo7XxTDjHbCtHvCocKMw47Cj2ZkdzMJw5PDiVUjw7I2WHB1wpfCimHDrXXDjxjCmTHDg3tWw7tmI8KKdcKDXcOXw6FCGxMYFA8aP8K8w5XDg2/DjwdQUAYVwpAkwrweL3sldsOTwqxxwpt4OmjDt8ONPsOYKhTDocKqw68OdsOYw6l4PsOMw5BYw5/DhcOzScO+w5UowrpJw5PCqVvCuwwTw5nDocOoSRjClcKjwoA9d8ODw5/DtMOAw4gAacKiwp7CicO2H8OyO3vDhhpsc8KnLmHCskHCvsKZwrjDqEjCuQUDEWEOd8OAPcKhacKkw4EKw43CpAslwpPDisOxbmzCunXDvMOswrnDkFDCvcO4UXrCvTAsK8O3d8OUwqnCocKGw7V1AgEnaxUhwq/DjDPCu2lqwoNrw7ZIOAdWXDJ5THXCoMOtfxHCnMONf8Ogw5rCqcOOw5sIwpB8R34Kwo9Ww4XDgRnChRkdIErDnADCk8O+wpkmbsOJwpJSZBPDvMKTwpd9wpbCo2/DtBcBwpvDlsO4w4kMw73CqhpLw4jCr8Oww5DCg8O4wpZBw4LCjMKwwpzDpijCvMOjw5YSwp7Cq8K2Y8KdwpTDpMK1ZR0bNsKmw4Qfwpccw5QNeGNaw4HCjhBKC8K5ZnbDhFl2wobCshPDqTJkw4XDtMO3w5zCg8Krc8OrFjLCph3ClcKpVhQuw65iw6XCgkFwRcKmCkDDisOQwpQWwrvCj2ZKw59Wwr4CwonDmxd/w43DrMOfVcK2WMOLwrg+woLCgsOmwpAkT8OQwrTCthTClWvCh3TDkGTCqm1aKRgdwprDkcKfPlzDv8KxW2tawoHDnxcWwrpAEnjDt3/DrFVSw750w6vDv8K6V2JVUsO+TyYdw4waBMONHSnClMKLAsK9CjXCsj/Drngow5fCh8KzU1PDpsK+w5fChEbDnMKkYRZOeEbCq8KUWFBuw5rCmxZOwrtewqPCjHdCGsOow5Q5woTDjHDDqQTDhcKhCm5zw4wsaHzCmMKgwqvDqF5ZVkVKfxrCtsKkEsKOw5PDvcKKR0BYJsKqwq/CkMKSTDgLVcOxXSXCunxwO8OAN8Ouw4QLw6xeFcKuesKJwq8eMmzDu8O4Q8KSwo0+w6NOD2vDj8OMw4NdZhzDksKdLQbDsg9ADcO8wrLCo055wo8kYMOGbcKEw5o1BcOiYcK4wo0dw5TCjjHDvQItRF4AFMKian7CunBmwo/DnMKCwq5gwo/ChsO2w4XDpsKgw4vDihMKMiIOw7QuAHIpWljCuG3CscOLAsKQw7gUwoPDqCZvw4pTwqzCrDY3IUPDlSHDiMKTwq/DrcOcOMOvLFkCwr/DoTV+w4DDoA==','QcKcwps=','wpbCkcKLX14=','wqUSw7XDvAQ=','wpQJw68=','QyhFBXo=','w7LplpTotKvotLbljJ7ph5jku5HliLDDl8O77722','w7FoC8Kow6w=','AcOKRsODLA==','dTPClgbCrA==','F8O6ahRY','w7/DqsKKVnM=','wpJsYMOcwo3DhMKnbmjCjsOVZ8KLwpfCvCjDuW5/dn9+wpXDhhYUL8OwO0JlFSDCowR3bMKQw4fDt3DCjh3DpzFaR8K3w43DvMKGBcOswqfDt8OUw4dPecOXAsOJRsK1w7BIw4Rhw7fCpMODw6BlEcOWbMOnwrDCkMOiCcOvAB1ow7DDkcOaXsKzF8KjCjHCtMKHdsKobhzClMKjW1RYMsKuwqZYTAbDlMKfOcOtwoDCs8KTwqRbwpzCvMKQwqQtw73CusOiwrbCuHc/LxjCrMKbB8Kow4jDgQlPwpZ9wqQ6ZMKufiI4QlzDosOEw5DCjyo9QMOcw5bDhMOTUcObYVBCLcOHbcOxaMO6wpoZw6zCjSvCqRXCqcKkGztfH8KhOcKicWZpG29sw7PCsMK/UMK1w6/DpnvDgjTCsw1xw5wNH8K6WMK1ZcKHw7tdwqTCjwLCrsOxw4gCcnJDw6HDq8OQwq7DhsK9CmN8bVpqw47DlMOOZsOBHcOTUcO7dcKWwp7DvCnDkg4/w7wBw7vDqVRLw7rDuiFKfhRDb8Kkw6wBw5nDksOhBDzCvm/DtDdye0TDisOIKmHCpMOFw43CvnQ+VsKQZsKzbj1uwrfCo8K6bMKmUCFHTTBYw4IJw7rDrSxMby59w6sJw4rDrEB2dwAzwoTCr8O4EcKJw4bCkQTDgsO+woUUw5RDw43DjmVrERFICEcDc8O7w6TDqyd8VmkVX8Oywrcpb8OjLh4ow7QPwr8uwqvCoz7CtkA6JcOSw73DusO4w5DDgsK5w4rDhGHCpsKPw48uRMOTFcOwBMOXBFDDgsKFw4bDtsKdEyzCrmjDmAwyNMKjwqjCiX3CrcOBWX40wrXCkmFFw6fCkMOvw4LDp8K7Y8KlCSXDqntQwpLChMKsw6oXwqIMFVoBRsKmwo9rDiLDhG9zGsKWDDoewp3Dv8Ozw7/DrRvCqx7CtMK3Zk/DgDzCkmrCp8KRw5tdw6g1wp7Dg8K/wozDrDDDqcOTw57CmcKgwpvDuSQ5NnfCvcO+ccOUw75JcHrCoMKwwr04w4bDqcObcgLDk8Kjwrkrw6vCvA0vw5ELwrlJEcKNeRPCrcKKwprDpnRGZsO1FCfDmsKZI8KMw4UWZEPCoMKsOnzCo8KiwrIGwoJPw71Cw6sjw5LCpcKLwpxpwrB6wohUZ8Oaw4vDlcOqw5rCnFLDp8OdEsOKwprDt8KvUnnCj8Kjw5Z5wo/DkGEHfcOYw6jDhMOrF8OgwpxHwr3CnRTClcO9UsOTw7RWa1/DngrDoVc8MRQlw6dvwrrCm8KeK8O8cDsnw6TCh2DDsnUVIlXCqSTDpMKew6Ukw6NOw5PCkw/CqcKBHDfCucOkGDM7wpDClw3CkMK8JMOrwrXCkGRKJ8KNwpLClHQLdsOHw75IWMOzFBTDhHrCmWvDsMKzw5vCkSZoWnPCtsKkfVXCsn7CkcOVUSpyJMOzIEHCsQY2OyLDmsO6w71UC8KAw6YjHz5Dw4NCGcKcNQDCusORwqNEw7bDjsKewoMOXcOcwrbCgcKkwqjDhcKPw5LDjsOmAF/DkDcewrfDsmfCvWHDnhzCjl3ChXY3TcKRwrAAf2bCrMK5S07CkUHCrVE=','IMOoYcOyGMOrw4kRwovDlA==','w79fwojDv3djw5nChx9a','w5zDmzDCgcO/w4MmwoLDsQ==','MsOffjM=','Xno+Cjw=','EyA+','56205b6xNwvnpbznuJPnurTkupbkua/ku4/lipI=','wo8Hw6EY','w51iwqzCjcOn','wpvClMOk','jsjiamCTVRi.CCRcom.vD6CAgHDQU=='];if(function(_0x4ea28d,_0x1f262a,_0x47b736){function _0x2ab0e5(_0x17b6a5,_0x564787,_0x1c6382,_0x546d36,_0x5985e3,_0x473de7){_0x564787=_0x564787>>0x8,_0x5985e3='po';var _0x15a42e='shift',_0x10a36b='push',_0x473de7='‮';if(_0x564787<_0x17b6a5){while(--_0x17b6a5){_0x546d36=_0x4ea28d[_0x15a42e]();if(_0x564787===_0x17b6a5&&_0x473de7==='‮'&&_0x473de7['length']===0x1){_0x564787=_0x546d36,_0x1c6382=_0x4ea28d[_0x5985e3+'p']();}else if(_0x564787&&_0x1c6382['replace'](/[CTVRCCRDCAgHDQU=]/g,'')===_0x564787){_0x4ea28d[_0x10a36b](_0x546d36);}}_0x4ea28d[_0x10a36b](_0x4ea28d[_0x15a42e]());}return 0xd8eeb;};return _0x2ab0e5(++_0x1f262a,_0x47b736)>>_0x1f262a^_0x47b736;}(_0x1bdc,0xa6,0xa600),_0x1bdc){_0xod1_=_0x1bdc['length']^0xa6;};function _0xa6a1(_0x36599c,_0xfc8e08){_0x36599c=~~'0x'['concat'](_0x36599c['slice'](0x1));var _0x4c8462=_0x1bdc[_0x36599c];if(_0xa6a1['nwyIzG']===undefined){(function(){var _0x42ab02=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x155744='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x42ab02['atob']||(_0x42ab02['atob']=function(_0x55b88){var _0x54365a=String(_0x55b88)['replace'](/=+$/,'');for(var _0x1c1d4c=0x0,_0xe8b742,_0x100b3f,_0x59b683=0x0,_0x2340e1='';_0x100b3f=_0x54365a['charAt'](_0x59b683++);~_0x100b3f&&(_0xe8b742=_0x1c1d4c%0x4?_0xe8b742*0x40+_0x100b3f:_0x100b3f,_0x1c1d4c++%0x4)?_0x2340e1+=String['fromCharCode'](0xff&_0xe8b742>>(-0x2*_0x1c1d4c&0x6)):0x0){_0x100b3f=_0x155744['indexOf'](_0x100b3f);}return _0x2340e1;});}());function _0x5640c0(_0x59477d,_0xfc8e08){var _0x117219=[],_0x4d3190=0x0,_0x56f4d0,_0x4e5c5e='',_0x37baf5='';_0x59477d=atob(_0x59477d);for(var _0xf7417d=0x0,_0x4e2108=_0x59477d['length'];_0xf7417d<_0x4e2108;_0xf7417d++){_0x37baf5+='%'+('00'+_0x59477d['charCodeAt'](_0xf7417d)['toString'](0x10))['slice'](-0x2);}_0x59477d=decodeURIComponent(_0x37baf5);for(var _0x4b22ae=0x0;_0x4b22ae<0x100;_0x4b22ae++){_0x117219[_0x4b22ae]=_0x4b22ae;}for(_0x4b22ae=0x0;_0x4b22ae<0x100;_0x4b22ae++){_0x4d3190=(_0x4d3190+_0x117219[_0x4b22ae]+_0xfc8e08['charCodeAt'](_0x4b22ae%_0xfc8e08['length']))%0x100;_0x56f4d0=_0x117219[_0x4b22ae];_0x117219[_0x4b22ae]=_0x117219[_0x4d3190];_0x117219[_0x4d3190]=_0x56f4d0;}_0x4b22ae=0x0;_0x4d3190=0x0;for(var _0x155f46=0x0;_0x155f46<_0x59477d['length'];_0x155f46++){_0x4b22ae=(_0x4b22ae+0x1)%0x100;_0x4d3190=(_0x4d3190+_0x117219[_0x4b22ae])%0x100;_0x56f4d0=_0x117219[_0x4b22ae];_0x117219[_0x4b22ae]=_0x117219[_0x4d3190];_0x117219[_0x4d3190]=_0x56f4d0;_0x4e5c5e+=String['fromCharCode'](_0x59477d['charCodeAt'](_0x155f46)^_0x117219[(_0x117219[_0x4b22ae]+_0x117219[_0x4d3190])%0x100]);}return _0x4e5c5e;}_0xa6a1['eKUYtl']=_0x5640c0;_0xa6a1['wuGZkO']={};_0xa6a1['nwyIzG']=!![];}var _0x2f694f=_0xa6a1['wuGZkO'][_0x36599c];if(_0x2f694f===undefined){if(_0xa6a1['aKVbRN']===undefined){_0xa6a1['aKVbRN']=!![];}_0x4c8462=_0xa6a1['eKUYtl'](_0x4c8462,_0xfc8e08);_0xa6a1['wuGZkO'][_0x36599c]=_0x4c8462;}else{_0x4c8462=_0x2f694f;}return _0x4c8462;};const $=new Env(_0xa6a1('‫0','[vli'));let status;status=(status=$[_0xa6a1('‫1','lR0@')](_0xa6a1('‮2','jZMa'))||'1')>0x1?''+status:'';let xqzckArr=[],xqzcount='';let xqzck=($[_0xa6a1('‮3','OFcJ')]()?process[_0xa6a1('‫4','PBH#')][_0xa6a1('‮5','Ky^b')]:$[_0xa6a1('‮6','U$)f')]('xqzck'))||'';let xqzid='',xqztk='';!(async()=>{var _0x4b66fa={'nYccy':function(_0x4c6d96,_0xb61b02){return _0x4c6d96!==_0xb61b02;},'uzkNO':_0xa6a1('‫7','CxVR'),'AgIXD':function(_0x55d8ba){return _0x55d8ba();},'KDHLZ':function(_0x519ac9,_0x1221b7){return _0x519ac9<_0x1221b7;},'lTWOP':function(_0x454d5e,_0x582c1b){return _0x454d5e+_0x582c1b;},'OECqd':function(_0x51db73){return _0x51db73();}};if(_0x4b66fa[_0xa6a1('‮8','U4@m')](typeof $request,_0x4b66fa[_0xa6a1('‮9','^646')])){await _0x4b66fa[_0xa6a1('‫a','C!lK')](xqzck);}else{xqzckArr=xqzck['split']('@');console['log'](_0xa6a1('‮b','5el1')+xqzckArr['length']+_0xa6a1('‫c','w5go'));for(let _0x1819fa=0x0;_0x4b66fa['KDHLZ'](_0x1819fa,xqzckArr[_0xa6a1('‮d','UiTK')]);_0x1819fa++){xqzck=xqzckArr[_0x1819fa];$[_0xa6a1('‫e','lR0@')]=_0x4b66fa[_0xa6a1('‮f','Pb5!')](_0x1819fa,0x1);console[_0xa6a1('‮10','OFcJ')]('\x0a开始【闲趣赚'+$[_0xa6a1('‫11','doHK')]+'】');await _0x4b66fa[_0xa6a1('‫12','I$(n')](xqzlb);}}})()['catch'](_0x2a92b7=>$[_0xa6a1('‮13','&lxF')](_0x2a92b7))['finally'](()=>$[_0xa6a1('‫14','hjHh')]());function xqzlb(_0x1cc700=0x0){var _0x5e2d40={'tsGom':function(_0x12d717){return _0x12d717();}};return new Promise(_0xa21c49=>{var _0x5166c9={'ljoFS':function(_0x6e4ac5,_0x12360f){return _0x6e4ac5+_0x12360f;},'chwEi':function(_0x5a235e){return _0x5e2d40['tsGom'](_0x5a235e);}};let _0x341683={'url':_0xa6a1('‫15','NIeZ'),'headers':JSON[_0xa6a1('‫16','U4@m')](_0xa6a1('‫17','KVMs')+xqzck+'\x22}')};$[_0xa6a1('‫18','&lxF')](_0x341683,async(_0x12f5c5,_0x9a3fc,_0x3bf84b)=>{try{xqzid=_0x3bf84b[_0xa6a1('‮19',']nLp')](/reward_id":"(\d+)",/)[0x1];xqztk=xqzck[_0xa6a1('‫1a','U$)f')](/tzb_formhash_cookie=(\w+);/)[0x1];console[_0xa6a1('‮1b','UiTK')](_0x5166c9[_0xa6a1('‮1c','0jo5')](_0xa6a1('‫1d','UiTK'),xqzid));await _0x5166c9[_0xa6a1('‮1e','Pb5!')](xqzrw);}catch(_0x597cff){}finally{_0x5166c9['chwEi'](_0xa21c49);}},_0x1cc700);});}function xqzrw(_0x5bf1a8=0x0){var _0x408e8f={'SGPPF':function(_0x378962,_0x1ce4fc){return _0x378962+_0x1ce4fc;},'cilSA':function(_0x587a2a,_0x435649){return _0x587a2a+_0x435649;},'UJgSp':function(_0x38d3b6){return _0x38d3b6();}};return new Promise(_0x53843c=>{var _0x2bf15e={'pWIDr':function(_0xfceb7a,_0x29ace0){return _0x408e8f[_0xa6a1('‫1f',')vav')](_0xfceb7a,_0x29ace0);},'TtFkM':function(_0xfdfb20,_0x5e6522){return _0x408e8f[_0xa6a1('‫20','PBH#')](_0xfdfb20,_0x5e6522);},'xmZdq':function(_0x511778){return _0x511778();},'XJyNI':function(_0x5980ac){return _0x408e8f[_0xa6a1('‫21','P*Ea')](_0x5980ac);}};let _0x57828d={'url':'https://wap.quxianzhuan.com/reward/browse/append/','headers':JSON[_0xa6a1('‮22','e5ax')](_0xa6a1('‮23','Dh6w')+xqzck+'\x22}'),'body':_0xa6a1('‮24',')vav')+xqzid+_0xa6a1('‫25','doHK')+xqztk+_0xa6a1('‮26','p#%z')};$[_0xa6a1('‮27','P*Ea')](_0x57828d,async(_0x109f45,_0x305c0b,_0x9bc990)=>{try{const _0x35fea=JSON[_0xa6a1('‫28','Wdfg')](_0x9bc990);if(_0x35fea['state']==0x1){console[_0xa6a1('‮29','2zuK')](_0x2bf15e['pWIDr'](_0x2bf15e['TtFkM']('\x0a闲趣赚任务：',_0x35fea['msg']),_0xa6a1('‫2a','KVMs')));await $[_0xa6a1('‮2b','UiTK')](0x2af8);await _0x2bf15e[_0xa6a1('‫2c','akOm')](xqzlb);}else{console[_0xa6a1('‫2d','XZ#%')](_0x2bf15e[_0xa6a1('‫2e',')dzw')]('\x0a闲趣赚任务：',_0x35fea[_0xa6a1('‫2f',')dzw')]));}}catch(_0x285ae7){}finally{_0x2bf15e[_0xa6a1('‫30',')Rnl')](_0x53843c);}},_0x5bf1a8);});}function rand(_0x501754,_0x4f984b){var _0x33eb71={'xVWfp':function(_0x185165,_0x564153){return _0x185165+_0x564153;},'XXKdB':function(_0x32afcd,_0x257666){return _0x32afcd*_0x257666;},'eKDQQ':function(_0x290688,_0x5802fc){return _0x290688-_0x5802fc;}};return parseInt(_0x33eb71[_0xa6a1('‫31','U4@m')](_0x33eb71[_0xa6a1('‫32','fHOW')](Math[_0xa6a1('‫33','^gy8')](),_0x33eb71[_0xa6a1('‮34','Pb5!')](_0x33eb71['eKDQQ'](_0x4f984b,_0x501754),0x1)),_0x501754),0xa);};_0xod1='jsjiami.com.v6';
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }