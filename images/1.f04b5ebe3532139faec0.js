webpackJsonp([1],{QlWu:function(e,A,r){"use strict";Object.defineProperty(A,"__esModule",{value:!0});var t=r("Xxa5"),o=r.n(t),n=r("mvHQ"),a=r.n(n),i=r("exGp"),s=r.n(i),c=r("Dd8w"),u=r.n(c),l=r("i84Q"),m=r("Zrlr"),f=r.n(m),p=function e(A){var r=A.showMsg,t=A.errCode,o=A.errMsg,n=A.errType;f()(this,e),this.showMsg=r,this.errCode=t,this.errMsg=o,this.errType=n};function d(e){return new p({showMsg:e.showMsg,errCode:e.errCode,errMsg:e.errMsg,errType:e.errType})}var h=function e(A){var r=A.consumerCode,t=A.secStr,o=A.terminalCode,n=A.terminalType,a=A.timestamp,i=(A.upsdkToken,A.cityCode),s=A.cityName,c=A.userName,u=A.mobile,l=A.serialNO,m=A.appCode;f()(this,e),this.consumerCode=r,this.secStr=t,this.terminalCode=o,this.terminalType=n,this.timestamp=a,this.cityCode=i,this.cityName=s,this.userName=c,this.mobile=u,this.serialNO=l,this.appCode=m};function g(e){return new h({consumerCode:e.consumerCode,secStr:e.secStr,terminalCode:e.terminalCode,terminalType:e.terminalType,timestamp:e.timestamp,cityCode:e.cityCode,cityName:e.cityName,userName:e.userName,mobile:e.mobile,serialNO:e.serialNO,appCode:e.appCode})}var y=r("NYxO"),C=r("dEY+"),N=r("TxDk"),M={components:{},computed:u()({},Object(y.c)(["userInfo","billerInfo"])),methods:u()({},Object(y.b)(["setUserInfo","setErrorInfo"]),{validate:function(){var e=this;return s()(o.a.mark(function A(){var r,t,n,i,s,c,m,f,p,h,y,M,O,Y;return o.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(r=e.$route.query.serialNO,t=e.$route.query.appCode,n=e.$route.query.type,i=e.$route.query.mobile,s=e.$route.query.userName,c=e.$route.query.pageStyle,m=e.$route.query.channelNo,f=e.$route.query.userId,p=e.$route.query.secStr,h=location.hash.split("?")[1],r&&t&&n&&c&&m){A.next=16;break}y={showMsg:"登陆失败，请重试",errCode:"001",errMsg:"URL参数缺失; serialNO: "+r+", appCode: "+t+", type: "+n+", pageStyle: "+c+", channelNo: "+m,errType:"login"},e.setErrorInfo(d(y)),e.$router.replace("/error"),A.next=21;break;case 16:return M=localStorage.getItem("currentCity"),A.next=19,Object(l.n)({serialNO:r,appCode:t,type:n,userName:s,mobile:i,userId:f,pageStyle:c,channelNo:m,secStr:p,fullPath:h,currentCity:M});case 19:(O=A.sent)&&O.returnData?(e,M?(M=JSON.parse(M),O.returnData=u()({},O.returnData,{userName:s,mobile:i,serialNO:r,appCode:t,cityCode:M.code,cityName:M.names}),e.setUserInfo(g(O.returnData)),m===N.a.upChannelNO?O=Object(C.b)(location.href,m).then(function(){e.$router.replace("/home")}):e.$router.replace("/home")):(O.returnData=u()({},O.returnData,{userName:s,mobile:i,serialNO:r,appCode:t}),e.setUserInfo(g(O.returnData)),e.$router.replace("/selectcity"))):(Y={showMsg:"登陆失败，请重试",errCode:a()(O),errMsg:"服务器异常，请稍后重试",errType:"login"},e.setErrorInfo(d(Y)),$("#start-loading").hide(),e.$router.replace("/error"));case 21:case"end":return A.stop()}},A,e)}))()},goToDashboard:function(e,A){var r=this;return s()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,r)}))()},loadDataCollection:function(){var e=document.getElementsByTagName("head")[0],A=document.createElement("script");A.type="text/javascript",A.src=N.a.behaviorCollect,e.appendChild(A)}}),mounted:function(){this.validate()}},O={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var Y=r("VU/8")(M,O,!1,function(e){r("m+Ao")},"data-v-c7ffdfc6",null);A.default=Y.exports},WfFc:function(e,A,r){var t=r("kxFB");(e.exports=r("FZ+f")(!1)).push([e.i,'\n@font-face {\n  font-family: "iconfont";\n  src: url('+t(r("6BVR"))+"); /* IE9*/\n  src: url("+t(r("6BVR"))+"#iefix) format('embedded-opentype'), url(\"data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAVMAAsAAAAAB7AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZW7khHY21hcAAAAYAAAABdAAABhpqsBr5nbHlmAAAB4AAAAX0AAAGccZG4TGhlYWQAAANgAAAALwAAADYQz/ymaGhlYQAAA5AAAAAcAAAAJAfeA4RobXR4AAADrAAAAAwAAAAMC+kAAGxvY2EAAAO4AAAACAAAAAgAdgDObWF4cAAAA8AAAAAfAAAAIAESAF1uYW1lAAAD4AAAAUUAAAJtPlT+fXBvc3QAAAUoAAAAIwAAADTZ5+h0eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/sE4gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVDyLZW7438AQw9zA0AAUZgTJAQAqQwzJeJzFkMENgDAMAy9t6QMxCA8G4lPm6MRdo5hQHkxQS44Vx1KiAAsQxUNMYBfGg1OuuR9Z3U+eyVIjUFvpXf2nimiWXYNKZhps3uo/Nq/76PQV6qBObOUl4QY+Bg0DAAAAeJw1j7FO40AYhPdf22vHODZZr722YyexTbKBEAPGMUKIRCddJO50xSEaKHkArrmChoIGiYICIZ4AIfEQUPEUtAheg4BBYjT6pBlNM0hB6P1ZepA8ZKM+WkM/0V+EgAwgMXEEsSgyPAAnVhzOTEmkIlbTJJO2gSeEuXlZ9DhRiQUmtGA9zkuRYQGjYoy3IHcjAL8Z7NFuSKVL0D3ROpv9xjfgtNPQGg9nv5YnLO/Y2rFBqU/phUYURcNYtkw44m5NqelkdqtYgfPQXsRtMHwR/Dmod5r08Lz4F3V5DeD0FOxmx7ybNIJG5ZPAtamvztc1L6inCwyOX+c824h6L6iS/AlpHz+hOcTQCJXVUxPUFvAxbGQgZVCUucuITVQTeCqKqi5HRS+pokoS8RnXc9dhKkZXj7L8ePXFazcMB1H031oNDNgBb6rq3THT5zGZyOCy/o/proWfvtcV3+4hXAorg+/1naBjp8NNzWzwuKG36obDh3RhZ6XJPwC1TT/aAAAAeJxjYGRgYADinWb3p8Tz23xl4GZhAIFrN2IiEPT/hywMzBJALgcDE0gUAELrCuAAeJxjYGRgYG7438AQw8IAAkCSkQEVMAMARwkCbAQAAAAD6QAABAAAAAAAAAAAdgDOeJxjYGRgYGBmCGRgZQABJiDmAkIGhv9gPgMAEPcBcAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICZkYmRmZGFgbGCrTw1LyMxn4EBABYNAx0A\") format('woff'), url("+t(r("QOj6"))+") format('truetype'), url("+t(r("uoJJ"))+'#iconfont) format(\'svg\'); /* iOS 4.1- */\n}\n.iconfont[data-v-c7ffdfc6] {\n  font-family: "iconfont" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-wenhao[data-v-c7ffdfc6]:before {\n  content: "\\E65D";\n}\n',""])},Zrlr:function(e,A,r){"use strict";A.__esModule=!0,A.default=function(e,A){if(!(e instanceof A))throw new TypeError("Cannot call a class as a function")}},"m+Ao":function(e,A,r){var t=r("WfFc");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);r("rjj0")("a867d75e",t,!0)}});