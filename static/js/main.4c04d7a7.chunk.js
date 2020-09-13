(this["webpackJsonpdark-mode-challenge"]=this["webpackJsonpdark-mode-challenge"]||[]).push([[0],{12:function(e,t,a){e.exports=a(23)},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),c=a.n(r),l=a(2),i=a(3),s=a(5),m=a(4),d=a(11),u=a(8),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.state,a=e.onClick;return o.a.createElement("button",{onClick:a,className:"app__dark-mode-btn icon level-right"},o.a.createElement(d.a,{icon:t.darkMode?u.b:u.a,color:t.darkMode?"#FFA500":"#4D5B6B"}))}}]),a}(o.a.Component),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"level header"},o.a.createElement("div",{className:"title-container"},o.a.createElement("div",{className:"morningscore-avatar"}),o.a.createElement("h1",{className:"title"},"Dark Mode Challenge")),o.a.createElement(p,{state:this.props.state,onClick:this.props.onClick})),o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"column"},o.a.createElement("p",null,"Morningscore is the one tool you need to bring in more traffic from Google. Even if you're not an expert, you can focus exactly on the improvements that matter. And with a one-page overview, you don't have to go back and forth between dozens of tools. No need for complex, time-consuming tools. Simplifying SEO is where we specialize.")),o.a.createElement("div",{className:"column"},o.a.createElement("p",null,"A SEO reporting tool built for leaders. Founded and built in Robo City - Odense, Denmark."))),o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"control"},o.a.createElement("input",{className:"input",type:"text",placeholder:"Name"}))),o.a.createElement("div",{className:"field"},o.a.createElement("div",{className:"control"},o.a.createElement("input",{className:"input",type:"text",placeholder:"Email"}))),o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"buttons level-right"},o.a.createElement("button",{className:"button"},"Save"),o.a.createElement("button",{type:"submit",className:"button is-primary"},"Submit"))))}}]),a}(o.a.Component),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={darkMode:!1},e.onClick=function(){e.setState((function(e){return{darkMode:!e.darkMode}}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("darkMode"));this.setState((function(t){return{darkMode:e}}))}},{key:"componentDidUpdate",value:function(e,t){var a=JSON.stringify(this.state.darkMode);localStorage.setItem("darkMode",a)}},{key:"render",value:function(){return o.a.createElement("div",{className:this.state.darkMode?"app-container dark-mode":"app-container"},o.a.createElement(v,{state:this.state,onClick:this.onClick}))}}]),a}(o.a.Component);a(22);c.a.render(o.a.createElement(h,null,o.a.createElement(v,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.4c04d7a7.chunk.js.map