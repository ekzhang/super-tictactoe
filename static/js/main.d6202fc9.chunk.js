(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(4),o=n.n(l),c=(n(18),n(8)),i=n(5),u=n(6),s=n(10),f=n(7),v=n(11),d=n(1);n(19);var h=function(e){var t=e.value,n=e.onClick,r=t?"red":"blue",l=-1===t?"":t?"O":"X";return a.a.createElement("div",{className:"cell",onClick:n,style:{color:r}},l)},m=n(9);function b(e){var t=[],n=!0,r=!1,a=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var c=l.value;t.push(c.slice())}}catch(i){r=!0,a=i}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return t}function E(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=t[n],a=Object(m.a)(r,3),l=a[0],o=a[1],c=a[2],i=e[l];if(-1!==i&&i===e[o]&&i===e[c])return e[l]}return-1}function y(e){return E(e.map(E))}var k=function(e){var t=e.value,n=e.onClick,r=E(t);return a.a.createElement("table",{className:-1===r?"":"win-"+r},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(h,{value:t[0],onClick:function(){return n(0)}})),a.a.createElement("td",null,a.a.createElement(h,{value:t[1],onClick:function(){return n(1)}})),a.a.createElement("td",null,a.a.createElement(h,{value:t[2],onClick:function(){return n(2)}}))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(h,{value:t[3],onClick:function(){return n(3)}})),a.a.createElement("td",null,a.a.createElement(h,{value:t[4],onClick:function(){return n(4)}})),a.a.createElement("td",null,a.a.createElement(h,{value:t[5],onClick:function(){return n(5)}}))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(h,{value:t[6],onClick:function(){return n(6)}})),a.a.createElement("td",null,a.a.createElement(h,{value:t[7],onClick:function(){return n(7)}})),a.a.createElement("td",null,a.a.createElement(h,{value:t[8],onClick:function(){return n(8)}})))))};var g=function(e){var t=e.board,n=e.onClick;return a.a.createElement("table",{style:{background:"black",borderRadius:6}},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(k,{value:t[0],onClick:function(e){return n(0,e)}})),a.a.createElement("td",null,a.a.createElement(k,{value:t[1],onClick:function(e){return n(1,e)}})),a.a.createElement("td",null,a.a.createElement(k,{value:t[2],onClick:function(e){return n(2,e)}}))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(k,{value:t[3],onClick:function(e){return n(3,e)}})),a.a.createElement("td",null,a.a.createElement(k,{value:t[4],onClick:function(e){return n(4,e)}})),a.a.createElement("td",null,a.a.createElement(k,{value:t[5],onClick:function(e){return n(5,e)}}))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(k,{value:t[6],onClick:function(e){return n(6,e)}})),a.a.createElement("td",null,a.a.createElement(k,{value:t[7],onClick:function(e){return n(7,e)}})),a.a.createElement("td",null,a.a.createElement(k,{value:t[8],onClick:function(e){return n(8,e)}})))))},w=n(2);function C(e){var t=67108859,n=0,r=!0,a=!1,l=void 0;try{for(var o,c=e.board[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var i=o.value,u=!0,s=!1,f=void 0;try{for(var v,d=i[Symbol.iterator]();!(u=(v=d.next()).done);u=!0){n=(11*n+v.value)%t}}catch(h){s=!0,f=h}finally{try{u||null==d.return||d.return()}finally{if(s)throw f}}}}catch(h){a=!0,l=h}finally{try{r||null==c.return||c.return()}finally{if(a)throw l}}return n=(11*(n=(11*n+e.turn)%t)+e.current)%t}function p(e){var t=e.board.map(E),n=e.current;-1!==t[n]&&(n=-1);for(var r=[],a=0;a<9;a++)if(-1===n||n===a)for(var l=0;l<9;l++)-1===t[a]&&-1===e.board[a][l]&&r.push([a,l]);return r}function O(e,t){e.board[t[0]][t[1]]=e.turn,e.turn=1-e.turn,e.current=t[1]}function j(e,t){return O(e=Object(w.a)({},e,{board:b(e.board)}),t),e}function S(e){for(e=Object(w.a)({},e,{board:b(e.board)});;){var t=y(e.board);if(-1!==t)return t;var n=p(e);if(!n.length)return-1;O(e,n[Math.floor(Math.random()*n.length)])}}var M=function(e){var t=0,n={},r={};function a(e){var a=p(e),l=-1/0,o=null,c=!0,i=!1,u=void 0;try{for(var s,f=a[Symbol.iterator]();!(c=(s=f.next()).done);c=!0){var v=j(e,s.value),d=C(v);if(!n[d])return null;var h=r[d]/n[d]+10*Math.sqrt(Math.log(t)/n[d]);h>l&&(o=v,l=h)}}catch(m){i=!0,u=m}finally{try{c||null==f.return||f.return()}finally{if(i)throw u}}return o}function l(e){var t=[],r=p(e),a=!0,l=!1,o=void 0;try{for(var c,i=r[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var u=j(e,c.value);n[C(u)]||t.push(u)}}catch(s){l=!0,o=s}finally{try{a||null==i.return||i.return()}finally{if(l)throw o}}return t.length?t[Math.floor(Math.random()*t.length)]:e}for(var o=0;o<4200;o++){++t;for(var c=[e],i=e;;){var u=a(i);if(!u)break;i=u,c.push(i)}i=l(i),c.push(i);for(var s=S(i),f=0;f<c.length;f++){var v=c[f],d=C(v);n[d]=(n[d]||0)+1,r[d]=(r[d]||0)+(-1===s?.5:s===v.turn?0:1)}}var h=p(e),m=null,b=-1,E=!0,y=!1,k=void 0;try{for(var g,w=h[Symbol.iterator]();!(E=(g=w.next()).done);E=!0){var O=g.value,M=n[C(j(e,O))];M>b&&(b=M,m=O)}}catch(x){y=!0,k=x}finally{try{E||null==w.return||w.return()}finally{if(y)throw k}}return m};function x(){for(var e=[],t=0;t<9;t++)e.push(new Array(9).fill(-1));return{board:e,turn:0,current:-1}}var A=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(f.a)(t).call(this,e))).state={history:[x()]},n.restart=n.restart.bind(Object(d.a)(Object(d.a)(n))),n.handleClick=n.handleClick.bind(Object(d.a)(Object(d.a)(n))),n.aiMove=n.aiMove.bind(Object(d.a)(Object(d.a)(n))),n.undo=n.undo.bind(Object(d.a)(Object(d.a)(n))),n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"restart",value:function(){this.setState({history:[x()]})}},{key:"undo",value:function(){this.state.history.length>1&&this.setState({history:this.state.history.slice(0,-1)})}},{key:"handleClick",value:function(e,t){var n=this.gameState;if(-1===y(n.board)&&-1===n.board[e][t]){if(-1!==n.current){var r=n.board[n.current],a=E(r),l=-1!==r.indexOf(-1);if(-1===a&&l&&e!==n.current)return;if(-1!==a&&e===n.current)return}var o=b(n.board);o[e][t]=n.turn,this.gameState={board:o,turn:1-n.turn,current:t};var c=y(o);-1!==c&&setTimeout(function(){alert("".concat(c?"O":"X"," has won!"))},1e3)}}},{key:"aiMove",value:function(){var e=M(this.gameState);e&&this.handleClick.apply(this,Object(c.a)(e))}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Super Tic-Tac-Toe"),a.a.createElement("div",{className:"grid"},a.a.createElement(g,{board:this.gameState.board,onClick:this.handleClick})),a.a.createElement("div",{className:"controls"},a.a.createElement("button",{onClick:this.restart},"Restart")," ",a.a.createElement("button",{onClick:this.aiMove},"AI Move")," ",a.a.createElement("button",{onClick:this.undo},"Undo")))}},{key:"gameState",get:function(){return this.state.history[this.state.history.length-1]},set:function(e){this.setState({history:this.state.history.concat([e])})}}]),t}(r.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(a.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");N?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):W(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):W(t,e)})}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.d6202fc9.chunk.js.map