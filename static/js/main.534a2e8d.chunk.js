(this["webpackJsonpform-data-to-new-component"]=this["webpackJsonpform-data-to-new-component"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),s=n(11),a=n.n(s),i=(n(17),n(12)),o=(n(18),n(6)),u=n(2),d=n(3),l=n(5),j=n(4),h=n.p+"static/media/1.d2ab17c7.png",b=n.p+"static/media/2.8ddba295.png",p=n.p+"static/media/3.aa15d90d.png",O=n.p+"static/media/4.9e052ca4.png",f=n.p+"static/media/5.6ca91d92.png",m=n.p+"static/media/6.1c1e1d25.png",v=n.p+"static/media/7.87469b88.png",g=n.p+"static/media/8.25ddebdf.png",x=n.p+"static/media/9.3994afb0.png",L=n.p+"static/media/10.abb41d9a.png",w=n.p+"static/media/11.efb457dc.png",k=n(0),C=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(d.a)(n,[{key:"render",value:function(){var t=[h,b,p,O,f,m,v,g,x,L,w];return Object(k.jsx)("img",{src:t[this.props.counter],alt:"img1",width:"200"})}}]),n}(r.Component),N=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(k.jsx)("button",{disabled:this.props.status,className:"buttonStyle "+this.props.status,onClick:function(){return t.props.onClick(t.props.letter)},children:this.props.letter})}}]),n}(r.Component),y=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(d.a)(n,[{key:"render",value:function(){return Object(k.jsx)("button",{onClick:this.props.onClick,className:"btn blue",children:"Play Again"})}}]),n}(r.Component),S=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(k.jsx)("div",{className:"letters",children:this.props.word.split("").map((function(e,n){return t.props.correctLetters.includes(e)?Object(k.jsxs)("span",{className:"lettersKnwn ",children:[" ",e," "]},n):Object(k.jsx)("span",{className:"lettersNotKnw ",children:" ? "},n)}))})}}]),n}(r.Component),F=n(10),U=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{className:"grid-col mt-10px",children:"active"===this.props.gameStatus?Object(k.jsxs)("h2",{className:"trailes",children:["Tries Left: ",this.props.counter]}):"win"==this.props.gameStatus?Object(k.jsxs)("h1",{className:"win",children:["You Won the Game with ",11-this.props.counter," try(s)!"]}):Object(k.jsxs)("h1",Object(F.a)(Object(F.a)({className:"lose"},this.props.onClick()),{},{children:["  RIP!",Object(k.jsx)("br",{})," Better Luck in the next life.   "]}))})}}]),n}(r.Component),A=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(k.jsx)("button",{className:"btn",onClick:function(){return t.props.onClick(!0)},children:" Hint"})}}]),n}(r.Component),G=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"header",children:[Object(k.jsx)("h1",{children:" The Hangman Game !"}),Object(k.jsxs)("p",{children:[" Find the letters in the ",Object(k.jsx)("b",{className:"trailes",children:"Secret"})," word or the human is going to be ",Object(k.jsx)("b",{className:"lose",children:"Hanged."})," "]})]})}}]),n}(r.Component),P=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var r;return Object(u.a)(this,n),(r=e.call(this,t)).state={counter:10,word:"",UsedLetters:[],correctLetters:[],isLoaded:!1,hint:[]},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://random-word-api.herokuapp.com/word?number=1").then((function(t){return t.json()})).then((function(e){t.setState({isLoaded:!0,word:e.toString()})}),(function(e){t.setState({isLoaded:!0,error:e})}))}},{key:"render",value:function(){var t=this,e=function(e){if(t.state.hint.length>1&&1==e)alert("You only have two hints");else for(var n=function(e){var n=t.state.word[e];if(!t.state.correctLetters.includes(n)&&!t.state.hint.includes(n))return t.setState((function(t){return{hint:[].concat(Object(o.a)(t.hint),[n])}})),t.setState((function(t){return{UsedLetters:[].concat(Object(o.a)(t.UsedLetters),[n])}})),t.setState((function(t){return{correctLetters:[].concat(Object(o.a)(t.correctLetters),[n])}})),{v:void 0}},r=0;r<t.state.word.length;r++){var c=n(r);if("object"===typeof c)return c.v}},n=0===this.state.counter?"Lost":function(){var e="win";return t.state.word.split("").forEach((function(n){t.state.correctLetters.includes(n)||(e="active")})),e}(),r=function(e){"active"===n&&0!==t.state.counter&&(t.setState((function(t){return{UsedLetters:[].concat(Object(o.a)(t.UsedLetters),[e])}})),t.state.word.includes(e)?t.setState((function(t){return{correctLetters:[].concat(Object(o.a)(t.correctLetters),[e])}})):function(){var e=t.state.counter-1;t.setState({counter:e})}())};return Object(k.jsxs)("div",{className:"grid-1",children:[Object(k.jsx)(G,{}),Object(k.jsx)("div",{className:"buttons",children:T.generateLetters(97,122).map((function(e){return Object(k.jsx)(N,{letter:e,onClick:r,status:(n=e,t.state.UsedLetters.includes(n))},e);var n}))}),Object(k.jsxs)("div",{className:"grid-2",children:[Object(k.jsxs)("div",{className:"grid-col mt-1",children:[this.state.isLoaded?Object(k.jsxs)(c.a.Fragment,{children:[Object(k.jsx)(S,{word:this.state.word,correctLetters:this.state.correctLetters}),Object(k.jsx)(U,{gameStatus:n,counter:this.state.counter,onClick:e})]}):Object(k.jsx)("div",{children:"Looking for a Word..."}),Object(k.jsxs)("div",{className:"d-inline mt-2",children:[Object(k.jsx)(y,{onClick:this.props.startNewGame}),Object(k.jsx)(A,{onClick:e,hint:this.state.hint})]})]}),Object(k.jsx)("div",{className:"right",style:{textAlign:"right"},children:Object(k.jsx)(C,{counter:this.state.counter})})]})]})}}]),n}(r.Component),T={generateLetters:function(t,e){return Array.from({length:e-t+1},(function(e,n){return String.fromCharCode(t+n)}))}};var B=function(){var t=Object(r.useState)(1),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(P,{startNewGame:function(){return c(n+1)}},n)})},H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),s(t),a(t)}))};a.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(B,{})}),document.getElementById("root")),H()}},[[20,1,2]]]);
//# sourceMappingURL=main.534a2e8d.chunk.js.map