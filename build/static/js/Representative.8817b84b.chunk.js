(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{3195:function(e,t,a){"use strict";a.r(t);var n=a(31),r=a.n(n),c=a(85),s=a(2),i=a.n(s),o=a(5),l=a(24),u=a(14),d=a(15),m=a(21),p=a(20),b=a(22),v=a(0),g=a.n(v),h=a(82),f=a(17),E=a(28),y=a(16),O=a(3),N=a(3064),j=a.n(N),w=a(19),x=a.n(w),k=a(3142),P=a.n(k),_=a(1580),S=a(49),D=a(12),A=a(3146),C=a.n(A),T=a(72),L=a.n(T);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var I=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).scrollTo=function(e){e.preventDefault(),e.stopPropagation(),L()("html, body").animate({scrollTop:L()(L()(e.target).closest("a").attr("href")).offset().top-15},500)},e.renderSidebar=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.state,n=a.address,r=a.files,c=a.sections;return g.a.createElement("div",{style:R({},t)},g.a.createElement("div",{className:"card font-weight-bold mb-2"},g.a.createElement("img",{className:"card-img-top",src:r.logo}),g.a.createElement(P.a,{items:c.map(function(e){return e.id}),className:"list-group list-group-flush",currentClassName:"is-current"},c.map(function(t){return g.a.createElement("a",{key:t.id,className:"list-group-item",href:"#"+t.id,onClick:e.scrollTo},t.name)}),g.a.createElement(f.d,{className:" list-group-item",url:n.representative.url},"Website"))),g.a.createElement(S.a,{className:"btn btn-secondary btn-block mb-2",to:"/sr/votes"},g.a.createElement("i",{className:"fa fa-arrow-left mr-2"}),Object(O.c)("go_to_votelist")))},e.state={loading:!0,body:null,address:null,files:null,sections:[]},e}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match;this.loadAddress(e.params.id)}},{key:"componentDidUpdate",value:function(e){var t=this.props.match;t.params.id!==e.match.params.id&&this.loadAddress(t.params.id),e.activeLanguage!==this.props.activeLanguage&&this.reloadPages()}},{key:"getAddress",value:function(){return this.props.match.params.id}},{key:"loadPage",value:function(){var e=Object(o.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{});case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()},{key:"loadPages",value:function(){var e=Object(o.a)(i.a.mark(function e(t){var a,n,r,s,o,l,u,d,m,p=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>1&&void 0!==p[1]?p[1]:"en",n="https://raw.githubusercontent.com/".concat(t,"/master"),"en"!==a&&(n+="/pages/".concat(a)),e.next=5,Promise.all([this.loadPage("".concat(n,"/INTRO.md")),this.loadPage("".concat(n,"/COMMUNITY_PLAN.md")),this.loadPage("".concat(n,"/TEAM.md")),this.loadPage("".concat(n,"/BUDGET_EXPENSES.md")),this.loadPage("".concat(n,"/SERVER_CONFIGURATION.md"))]);case 5:return r=e.sent,s=Object(c.a)(r,5),o=s[0].data,l=s[1].data,u=s[2].data,d=s[3].data,m=s[4].data,e.abrupt("return",{intro:o,communityPlan:l,team:u,budgetExpenses:d,serverConfiguration:m});case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"loadGithubData",value:function(){var e=Object(o.a)(i.a.mark(function e(t){var a,n,s,o,l,u,d,m,p,b,v,h,f,E,y;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.activeLanguage,n="https://raw.githubusercontent.com/".concat(t,"/master"),e.next=4,this.loadPages(t);case 4:if(s=e.sent,"en"===a){e.next=10;break}return e.next=8,this.loadPages(t,a);case 8:for(o=e.sent,l=0,u=Object.entries(o);l<u.length;l++)d=u[l],m=Object(c.a)(d,2),p=m[0],b=m[1],""!==r()(b)&&(s[p]=b);case 10:v=s.intro,h=s.communityPlan,f=s.team,E=s.budgetExpenses,y=s.serverConfiguration,this.setState({url:n,files:{logo:n+"/logo.png",banner:n+"/banner.png"},sections:[{name:Object(O.c)("intro"),id:"intro",content:g.a.createElement(j.a,{source:v})},{name:Object(O.c)("team"),id:"team",content:g.a.createElement(j.a,{source:f})},{name:Object(O.c)("community_plan"),id:"community-plan",content:g.a.createElement(j.a,{source:h})},{name:Object(O.c)("server_configuration"),id:"server-configuration",content:g.a.createElement(j.a,{source:y})},{name:Object(O.c)("budget_expenses"),id:"budget-expenses",content:g.a.createElement(j.a,{source:E})}]});case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"reloadPages",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.getSuperRepresentative(this.getAddress());case 2:return t=e.sent,e.next=5,this.loadGithubData(t.data.githubLink);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadAddress",value:function(){var e=Object(o.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0,body:null,address:null,files:null}),e.prev=1,e.next=4,y.a.getAddress(t);case 4:return a=e.sent,e.next=7,this.reloadPages();case 7:this.setState({loading:!1,address:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),this.setState({body:g.a.createElement("main",{className:"container header-overlap"},g.a.createElement("div",{className:"card text-center"},g.a.createElement("div",{className:"card-body"},g.a.createElement(D.a,{color:"warning"},Object(O.c)("unable_load_representatives_page_message"))),g.a.createElement("p",null,g.a.createElement(S.a,{to:"/sr/votes",className:"btn btn-primary"},"Go Back"))))});case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.address,n=t.loading,r=t.files,c=t.sections,s=t.body;return s||(a?a.representative.enabled?g.a.createElement("main",{className:"container header-overlap representative-landing-page"},g.a.createElement(_.StickyContainer,{className:"row"},g.a.createElement("div",{className:"col-md-3"},g.a.createElement(C.a,{minWidth:768},g.a.createElement(_.Sticky,null,function(t){var a=t.style,n=t.isSticky;return e.renderSidebar(R({},a,{},n?{top:15}:{}))})),g.a.createElement(C.a,{maxWidth:768},this.renderSidebar())),g.a.createElement("div",{className:"col-md-9 representative-content"},n?g.a.createElement("div",{className:"card"},g.a.createElement(h.b,null,Object(O.c)("loading_representative")," ",a.address)):g.a.createElement(v.Fragment,null,g.a.createElement("div",{className:"card"},a.representative.enabled&&g.a.createElement("div",{className:"card-header text-center bg-info font-weight-bold text-white"},a.name||"Representative"),g.a.createElement("div",{className:"card-body text-center"},g.a.createElement("img",{src:r.banner,style:M.image}))),c.map(function(e){return g.a.createElement("div",{className:"card mt-3"},g.a.createElement("a",{id:e.id}),g.a.createElement("div",{className:"card-header bg-info text-center text-white font-weight-bold"},e.name),g.a.createElement("div",{className:"card-body"},e.content))}))))):g.a.createElement("main",{className:"container header-overlap"},g.a.createElement("div",{className:"card text-center"},g.a.createElement("div",{className:"card-body"},g.a.createElement(D.a,{color:"warning"},Object(O.c)("address_not_super_representative"))),g.a.createElement("p",null,g.a.createElement(S.a,{to:"/votes",className:"btn btn-primary"},"Go Back")))):g.a.createElement("main",{className:"container header-overlap"},g.a.createElement("div",{className:"card text-center"},g.a.createElement(h.b,null,Object(O.c)("loading_representatives")))))}}]),t}(g.a.Component),M={image:{maxWidth:"100%",maxHeight:400}};t.default=Object(E.connect)(function(e){return{activeLanguage:e.app.activeLanguage}},{})(I)}}]);