(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},26:function(t){t.exports=JSON.parse('[{"word":"Hello","isEng":true,"answer":["\uc548\ub155\ud558\uc138\uc694","\uc548\ub155","\u314e\u3147"],"stars":1},{"word":"\uc548\ub155\ud558\uc138\uc694","isEng":false,"answer":["hello"],"stars":1}]')},32:function(t,e,n){"use strict";n.r(e);var s=n(1),r=n(0),c=n.n(r),a=n(16),i=n.n(a),o=(n(24),n(5)),u=n(6),l=n(8),j=n(7),h=(n(25),function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:this.props.stars>=1?"fa fa-star checked":"fa fa-star"}),Object(s.jsx)("span",{className:this.props.stars>=2?"fa fa-star checked":"fa fa-star"}),Object(s.jsx)("span",{className:this.props.stars>=3?"fa fa-star checked":"fa fa-star"}),Object(s.jsx)("span",{className:this.props.stars>=4?"fa fa-star checked":"fa fa-star"}),Object(s.jsx)("span",{className:this.props.stars>=5?"fa fa-star checked":"fa fa-star"})]})}}]),n}(r.Component)),d=n(26),b=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).randQuiz=void 0,s.quizList=[],s.randQuiz=s.getQuiz(),s}return Object(u.a)(n,[{key:"addScore",value:function(t){var e=Number(localStorage.getItem("score"));localStorage.setItem("score",(e+t).toString())}},{key:"next",value:function(){this.randQuiz=this.getQuiz(),this.setState({})}},{key:"showResult",value:function(t){var e=document.querySelector("#result");e&&(e.innerHTML=t?"\ub9de\uc558\uc2b5\ub2c8\ub2e4":"\ud2c0\ub838\uc2b5\ub2c8\ub2e4"),null===e||void 0===e||e.classList.remove(t?"fail":"correct"),null===e||void 0===e||e.classList.add(t?"correct":"fail"),t&&this.addScore(10)}},{key:"click",value:function(){var t=document.querySelector("#input");this.randQuiz.answer.includes(t.value.toLowerCase())?this.showResult(!0):this.showResult(!1),t.value="",this.next()}},{key:"handleSubmit",value:function(t){t.preventDefault()}},{key:"getQuiz",value:function(){var t=Math.floor(Math.random()*Math.floor(d.length));if(this.quizList.length!==d.length){for(;this.quizList.includes(t);)t=Math.floor(Math.random()*Math.floor(d.length));return this.quizList.push(t),console.log(t),d[t]}location.href="./end"}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:this.randQuiz.word}),Object(s.jsx)("p",{children:this.randQuiz.isEng?"\uc758 \ub73b\uc740?":"\uc758 \ub73b\uc744 \uac00\uc9c4 \uc601\ub2e8\uc5b4\ub294?"}),Object(s.jsx)(h,{stars:this.randQuiz.stars}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("form",{onSubmit:this.handleSubmit.bind(this),children:[Object(s.jsx)("input",{id:"input"}),Object(s.jsx)("button",{onClick:this.click.bind(this),children:"\uc81c\ucd9c"})]}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{id:"result",className:"correct"})]})]})}}]),n}(r.Component),f=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var s;return Object(o.a)(this,n),s=e.call(this,t),localStorage.setItem("score","0"),s}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"\uc601\uc5b4 \uc2dc\ud5d8"})," ",Object(s.jsx)("br",{}),Object(s.jsx)("button",{onClick:function(){return location.href="../quiz"},children:"\uc2dc\uc791\ud558\uae30"})]})}}]),n}(r.Component),O=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"getScore",value:function(){return localStorage.getItem("score")}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:this.getScore()}),Object(s.jsx)("p",{children:"\ud034\uc988 \ub05d"})," ",Object(s.jsx)("br",{}),Object(s.jsx)("button",{onClick:function(){return location.href="../"},children:"\ub2e4\uc2dc \uc2dc\uc791\ud558\uae30"})]})}}]),n}(r.Component),p=n(18),x=n(2),v=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)(p.a,{children:Object(s.jsx)(x.c,{children:Object(s.jsxs)("div",{className:"App center",children:[Object(s.jsx)(x.a,{exact:!0,path:"/",component:f}),Object(s.jsx)(x.a,{path:"/quiz",component:b}),Object(s.jsx)(x.a,{path:"/end",component:O})]})})})}}]),n}(r.Component);i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.b128f91d.chunk.js.map