(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{3241:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a.n(n),c=a(85),s=a(2),i=a.n(s),o=a(5),l=a(8),d=a(15),m=a(16),u=a(24),p=a(23),v=a(25),b=a(0),g=a.n(b),h=a(82),f=a(19),E=a(32),y=a(18),N=a(3),x=a(3109),O=a.n(x),k=a(22),w=a.n(k),j=a(3187),P=a.n(j),_=a(1423),S=a(51),A=a(14),C=a(3191),T=a.n(C),L=a(74),D=a.n(L),G=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).scrollTo=function(e){e.preventDefault(),e.stopPropagation(),D()("html, body").animate({scrollTop:D()(D()(e.target).closest("a").attr("href")).offset().top-15},500)},e.renderSidebar=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.state,n=a.address,r=a.files,c=a.sections;return g.a.createElement("div",{style:Object(l.a)({},t)},g.a.createElement("div",{className:"card font-weight-bold mb-2"},g.a.createElement("img",{className:"card-img-top",src:r.logo}),g.a.createElement(P.a,{items:c.map(function(e){return e.id}),className:"list-group list-group-flush",currentClassName:"is-current"},c.map(function(t){return g.a.createElement("a",{key:t.id,className:"list-group-item",href:"#"+t.id,onClick:e.scrollTo},t.name)}),g.a.createElement(f.d,{className:" list-group-item",url:n.representative.url},"Website"))),g.a.createElement(S.a,{className:"btn btn-secondary btn-block mb-2",to:"/sr/votes"},g.a.createElement("i",{className:"fa fa-arrow-left mr-2"}),Object(N.c)("go_to_votelist")))},e.state={loading:!0,body:null,address:null,files:null,sections:[]},e}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match;this.loadAddress(e.params.id)}},{key:"componentDidUpdate",value:function(e){var t=this.props.match;t.params.id!==e.match.params.id&&this.loadAddress(t.params.id),e.activeLanguage!==this.props.activeLanguage&&this.reloadPages()}},{key:"getAddress",value:function(){return this.props.match.params.id}},{key:"loadPage",value:function(){var e=Object(o.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{});case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}()},{key:"loadPages",value:function(){var e=Object(o.a)(i.a.mark(function e(t){var a,n,r,s,o,l,d,m,u,p=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>1&&void 0!==p[1]?p[1]:"en",n="https://raw.githubusercontent.com/".concat(t,"/master"),"en"!==a&&(n+="/pages/".concat(a)),e.next=5,Promise.all([this.loadPage("".concat(n,"/INTRO.md")),this.loadPage("".concat(n,"/COMMUNITY_PLAN.md")),this.loadPage("".concat(n,"/TEAM.md")),this.loadPage("".concat(n,"/BUDGET_EXPENSES.md")),this.loadPage("".concat(n,"/SERVER_CONFIGURATION.md"))]);case 5:return r=e.sent,s=Object(c.a)(r,5),o=s[0].data,l=s[1].data,d=s[2].data,m=s[3].data,u=s[4].data,e.abrupt("return",{intro:o,communityPlan:l,team:d,budgetExpenses:m,serverConfiguration:u});case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"loadGithubData",value:function(){var e=Object(o.a)(i.a.mark(function e(t){var a,n,s,o,l,d,m,u,p,v,b,h,f,E,y;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.activeLanguage,n="https://raw.githubusercontent.com/".concat(t,"/master"),e.next=4,this.loadPages(t);case 4:if(s=e.sent,"en"===a){e.next=10;break}return e.next=8,this.loadPages(t,a);case 8:for(o=e.sent,l=0,d=Object.entries(o);l<d.length;l++)m=d[l],u=Object(c.a)(m,2),p=u[0],v=u[1],""!==r()(v)&&(s[p]=v);case 10:b=s.intro,h=s.communityPlan,f=s.team,E=s.budgetExpenses,y=s.serverConfiguration,this.setState({url:n,files:{logo:n+"/logo.png",banner:n+"/banner.png"},sections:[{name:Object(N.c)("intro"),id:"intro",content:g.a.createElement(O.a,{source:b})},{name:Object(N.c)("team"),id:"team",content:g.a.createElement(O.a,{source:f})},{name:Object(N.c)("community_plan"),id:"community-plan",content:g.a.createElement(O.a,{source:h})},{name:Object(N.c)("server_configuration"),id:"server-configuration",content:g.a.createElement(O.a,{source:y})},{name:Object(N.c)("budget_expenses"),id:"budget-expenses",content:g.a.createElement(O.a,{source:E})}]});case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"reloadPages",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.getSuperRepresentative(this.getAddress());case 2:return t=e.sent,e.next=5,this.loadGithubData(t.data.githubLink);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadAddress",value:function(){var e=Object(o.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0,body:null,address:null,files:null}),e.prev=1,e.next=4,y.a.getAddress(t);case 4:return a=e.sent,e.next=7,this.reloadPages();case 7:this.setState({loading:!1,address:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),this.setState({body:g.a.createElement("main",{className:"container header-overlap"},g.a.createElement("div",{className:"card text-center"},g.a.createElement("div",{className:"card-body"},g.a.createElement(A.a,{color:"warning"},Object(N.c)("unable_load_representatives_page_message"))),g.a.createElement("p",null,g.a.createElement(S.a,{to:"/sr/votes",className:"btn btn-primary"},"Go Back"))))});case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.address,n=t.loading,r=t.files,c=t.sections,s=t.body;return s||(a?a.representative.enabled?g.a.createElement("main",{className:"container header-overlap representative-landing-page"},g.a.createElement(_.StickyContainer,{className:"row"},g.a.createElement("div",{className:"col-md-3"},g.a.createElement(T.a,{minWidth:768},g.a.createElement(_.Sticky,null,function(t){var a=t.style,n=t.isSticky;return e.renderSidebar(Object(l.a)({},a,n?{top:15}:{}))})),g.a.createElement(T.a,{maxWidth:768},this.renderSidebar())),g.a.createElement("div",{className:"col-md-9 representative-content"},n?g.a.createElement("div",{className:"card"},g.a.createElement(h.b,null,Object(N.c)("loading_representative")," ",a.address)):g.a.createElement(b.Fragment,null,g.a.createElement("div",{className:"card"},a.representative.enabled&&g.a.createElement("div",{className:"card-header text-center bg-info font-weight-bold text-white"},a.name||"Representative"),g.a.createElement("div",{className:"card-body text-center"},g.a.createElement("img",{src:r.banner,style:R.image}))),c.map(function(e){return g.a.createElement("div",{className:"card mt-3"},g.a.createElement("a",{id:e.id}),g.a.createElement("div",{className:"card-header bg-info text-center text-white font-weight-bold"},e.name),g.a.createElement("div",{className:"card-body"},e.content))}))))):g.a.createElement("main",{className:"container header-overlap"},g.a.createElement("div",{className:"card text-center"},g.a.createElement("div",{className:"card-body"},g.a.createElement(A.a,{color:"warning"},Object(N.c)("address_not_super_representative"))),g.a.createElement("p",null,g.a.createElement(S.a,{to:"/votes",className:"btn btn-primary"},"Go Back")))):g.a.createElement("main",{className:"container header-overlap"},g.a.createElement("div",{className:"card text-center"},g.a.createElement(h.b,null,Object(N.c)("loading_representatives")))))}}]),t}(g.a.Component),R={image:{maxWidth:"100%",maxHeight:400}};t.default=Object(E.connect)(function(e){return{activeLanguage:e.app.activeLanguage}},{})(G)}}]);