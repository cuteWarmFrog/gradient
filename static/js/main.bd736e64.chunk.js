(this.webpackJsonpgradient=this.webpackJsonpgradient||[]).push([[0],{10:function(t,e,n){t.exports=n(15)},15:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(4),r=n.n(s),o=n(7),c=n(5),u=n(6),l=n(1),d=n(9),m=n(8),g=(n(3),function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={displaySettings:!0,amount:3,gradient:{deg:"90deg",colors:["#f97c78","#328998","#698664"]}},t.makeGradient=t.makeGradient.bind(Object(l.a)(t)),t.changeSettingsState=t.changeSettingsState.bind(Object(l.a)(t)),t.incrAmount=t.incrAmount.bind(Object(l.a)(t)),t.decrAmount=t.decrAmount.bind(Object(l.a)(t)),t}return Object(u.a)(n,[{key:"render",value:function(){return this.state.displaySettings?i.a.createElement("div",{style:this.changeColor(),id:"main"},i.a.createElement("div",{id:"main-settings"},i.a.createElement("div",{id:"settings-open-close"},i.a.createElement("button",{onClick:this.changeSettingsState},"Close")),i.a.createElement("div",null,i.a.createElement("p",{id:"number"},"number of colours"),i.a.createElement("div",{id:"amount-settings"},i.a.createElement("button",{className:"incr-decr",onClick:this.decrAmount},"-"),i.a.createElement("p",null,this.state.amount),i.a.createElement("button",{className:"incr-decr",onClick:this.incrAmount},"+")),i.a.createElement("button",{onClick:this.makeGradient,id:"make-gradient"},"new colors")))):i.a.createElement("div",{style:this.changeColor(),id:"main"},i.a.createElement("button",{onClick:this.changeSettingsState},"Settings"))}},{key:"incrAmount",value:function(){var t=this,e=Object(o.a)(this.state.gradient.colors);if(this.state.amount>this.state.gradient.colors.length-1){var n="#"+Math.random().toString(16).substr(-6);e.push(n)}this.setState((function(n){return{amount:n.amount+1,gradient:{deg:t.state.gradient.deg,colors:e}}}))}},{key:"decrAmount",value:function(){this.state.amount>2&&this.setState((function(t){return{amount:t.amount-1}})),this.changeColor()}},{key:"changeSettingsState",value:function(){this.setState({displaySettings:!this.state.displaySettings})}},{key:"changeColor",value:function(){return{background:"linear-gradient(".concat(this.state.gradient.deg,", \n\t\t\t").concat(this.state.gradient.colors.slice(0,this.state.amount).join(","))}}},{key:"makeGradient",value:function(){for(var t=90*Math.random()+"deg",e=[],n=0;n<this.state.amount;n++){var a="#"+Math.random().toString(16).substr(-6);e.push(a)}this.setState({gradient:{deg:t,colors:e}})}}]),n}(i.a.Component));r.a.render(i.a.createElement(g,null),document.getElementById("root"))},3:function(t,e,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.bd736e64.chunk.js.map