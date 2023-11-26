(function(){"use strict";var e={1978:function(e,t,r){var a=r(9963),o=r(6252),l=r(3577);const n=(0,o._)("i",{"data-feather":"chevron-up"},null,-1);function i(e,t,r,i,s,d){const c=(0,o.up)("AppHeader"),m=(0,o.up)("router-view"),u=(0,o.up)("back-to-top"),p=(0,o.up)("AppFooter");return(0,o.wg)(),(0,o.iD)("div",{class:(0,l.C_)([e.appTheme,"pt-0.5"])},[(0,o.Wm)(c),(0,o.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{theme:e.appTheme},null,8,["theme"])])),_:1}),(0,o.Wm)(u,{visibleoffset:"500",right:"30px",bottom:"20px",class:"shadow-lg"},{default:(0,o.w5)((()=>[n])),_:1}),(0,o.Wm)(p)],2)}var s=r(8508),d=r.n(s),c=r.p+"img/logo.cdfe8d92.svg";const m={id:"nav",class:"sm:container sm:mx-auto"},u={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"},p={class:"flex justify-between items-center px-4 sm:px-0"},g={key:0,src:c,class:"w-24",alt:"Dark Logo"},f={key:1,src:c,class:"w-24",alt:"Light Logo"},x={class:"sm:hidden"},h={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},b={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},y={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},v={class:"hidden sm:flex justify-between items-center flex-col md:flex-row"};function w(e,t,r,a,l,n){const i=(0,o.up)("router-link"),s=(0,o.up)("theme-switcher"),d=(0,o.up)("AppHeaderLinks"),c=(0,o.up)("HireMeModal");return(0,o.wg)(),(0,o.iD)("nav",m,[(0,o._)("div",u,[(0,o._)("div",p,[(0,o._)("div",null,[(0,o.Wm)(i,{to:"/"},{default:(0,o.w5)((()=>["light"===l.theme?((0,o.wg)(),(0,o.iD)("img",g)):((0,o.wg)(),(0,o.iD)("img",f))])),_:1})]),(0,o.Wm)(s,{theme:l.theme,onThemeChanged:n.updateTheme,class:"block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"},null,8,["theme","onThemeChanged"]),(0,o._)("div",x,[(0,o._)("button",{onClick:t[0]||(t[0]=e=>l.isOpen=!l.isOpen),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[((0,o.wg)(),(0,o.iD)("svg",h,[l.isOpen?((0,o.wg)(),(0,o.iD)("path",b)):(0,o.kq)("",!0),l.isOpen?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("path",y))]))])])]),(0,o._)("div",v,[(0,o.Wm)(d,{showModal:n.showModal,isOpen:l.isOpen},null,8,["showModal","isOpen"])])]),(0,o.Wm)(c,{showModal:n.showModal,modal:l.modal,categories:l.categories,"aria-modal":"Hire Me Modal"},null,8,["showModal","modal","categories"])])}const k={key:0,"data-feather":"moon",class:"text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},_={key:1,"data-feather":"sun",class:"text-gray-200 hover:text-gray-50 w-5"};function j(e,t,r,l,n,i){return(0,o.wg)(),(0,o.iD)("a",{href:"#",onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>i.toggleTheme&&i.toggleTheme(...e)),["prevent"])),"aria-label":"Theme Switcher"},["light"===r.theme?((0,o.wg)(),(0,o.iD)("i",k)):((0,o.wg)(),(0,o.iD)("i",_))])}var S={props:{theme:{type:String,required:!0}},methods:{toggleTheme(){const e=(this.theme,"dark");localStorage.setItem("theme",e),this.$emit("theme-changed",e),this.$router.go()}}},T=r(3744);const D=(0,T.Z)(S,[["render",j]]);var M=D;const W=e=>((0,o.dD)("data-v-c78ac706"),e=e(),(0,o.Cn)(),e),I={class:"font-general-regular fixed inset-0 z-30"},A={class:"flex flex-col items-center justify-center h-full w-full"},P={class:"modal-wrapper flex items-center z-30"},B={class:"modal max-w-md mx-5 md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"},O={class:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"},F=W((()=>(0,o._)("h5",{class:"text-primary-dark dark:text-primary-light text-xl"}," What project are you looking for? ",-1))),C=W((()=>(0,o._)("i",{"data-feather":"x"},null,-1))),H=[C],L={class:"modal-body p-5 w-full h-full"},Z={class:"max-w-xl m-4 text-left"},z={class:"mt-6 mb-4"},E=W((()=>(0,o._)("label",{class:"block mb-2 text-lg text-primary-dark dark:text-primary-light",for:"project"},"Project Type",-1))),q={class:"w-full px-5 py-3 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"project",name:"project",type:"text",required:"","aria-label":"Project Category"},N=["value"],U={class:"mt-7 pb-4 sm:pb-1"},$={class:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"};function G(e,t,r,n,i,s){const d=(0,o.up)("FormInput"),c=(0,o.up)("FormTextarea"),m=(0,o.up)("Button");return(0,o.wg)(),(0,o.j4)(a.uT,{name:"fade"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",I,[(0,o.wy)((0,o._)("div",{onClick:t[0]||(t[0]=e=>r.showModal()),class:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"},null,512),[[a.F8,r.modal]]),(0,o._)("main",A,[(0,o.Wm)(a.uT,{name:"fade-up-down"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",P,[(0,o._)("div",B,[(0,o._)("div",O,[F,(0,o._)("button",{class:"px-4 text-primary-dark dark:text-primary-light",onClick:t[1]||(t[1]=e=>r.showModal())},H)]),(0,o._)("div",L,[(0,o._)("form",Z,[(0,o.Wm)(d,{label:"Full Name",inputIdentifier:"name",class:"mb-2"}),(0,o.Wm)(d,{label:"Email",inputIdentifier:"email",inputType:"email"}),(0,o._)("div",z,[E,(0,o._)("select",q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.categories,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.id,value:e.value},(0,l.zw)(e.name),9,N)))),128))])]),(0,o.Wm)(c,{label:"Details",textareaIdentifier:"details"}),(0,o._)("div",U,[(0,o.Wm)(m,{title:"Send Request",class:"px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",type:"submit","aria-label":"Submit Request"})])])]),(0,o._)("div",$,[(0,o.Wm)(m,{title:"Close",class:"px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",onClick:t[2]||(t[2]=e=>r.showModal()),"aria-label":"Close Modal"})])])],512),[[a.F8,r.modal]])])),_:1})])],512),[[a.F8,r.modal]])])),_:1})}var X=r(4595),K=r(4631),R=r(8312),Y={props:["showModal","modal","categories"],components:{Button:X.Z,FormInput:K.Z,FormTextarea:R.Z},data(){return{}},mounted(){d().replace()},updated(){d().replace()},methods:{}};const V=(0,T.Z)(Y,[["render",G],["__scopeId","data-v-c78ac706"]]);var J=V;const Q={class:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"};function ee(e,t,r,a,n,i){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:(0,l.C_)([r.isOpen?"block":"hidden","z-50 m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"])},[(0,o.Wm)(s,{to:"/works",class:"font-general-medium block text-left text-lg font-medium text-primary-light dark:text-ternary-light hover:text-cyan-600 dark:hover:text-cyan-300 sm:mx-4 mb-2 sm:py-2","aria-label":"Projects"},{default:(0,o.w5)((()=>[(0,o.Uk)("Works")])),_:1}),(0,o.Wm)(s,{to:"/blogs",class:"font-general-medium block text-left text-lg font-medium text-primary-light dark:text-ternary-light hover:text-cyan-600 dark:hover:text-cyan-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Blogs"},{default:(0,o.w5)((()=>[(0,o.Uk)("Blogs")])),_:1}),(0,o.Wm)(s,{to:"/about",class:"font-general-medium block text-left text-lg font-medium text-primary-light dark:text-ternary-light hover:text-cyan-600 dark:hover:text-cyan-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me"},{default:(0,o.w5)((()=>[(0,o.Uk)("About Me")])),_:1}),(0,o._)("div",Q,[(0,o._)("button",{class:"font-general-medium sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500",onClick:t[0]||(t[0]=e=>r.showModal()),"aria-label":"Hire Me Button"}," Hire Me ")])],2)}var te={props:["showModal","isOpen"]};const re=(0,T.Z)(te,[["render",ee]]);var ae=re,oe={components:{ThemeSwitcher:M,HireMeModal:J,AppHeaderLinks:ae},data(){return{isOpen:!1,theme:"",modal:!1,categories:[{id:1,value:"web",name:"Web Application"},{id:2,value:"mobile",name:"Mobile Application"},{id:3,value:"ui-ux",name:"UI/UX Design"},{id:4,value:"branding",name:"Branding & Anim"}]}},created(){this.theme=localStorage.getItem("theme")||"dark"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"dark"},methods:{updateTheme(e){this.theme=e},showModal(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}},updated(){d().replace()}};const le=(0,T.Z)(oe,[["render",w],["__scopeId","data-v-3a763689"]]);var ne=le,ie=r.p+"img/phone.8b9545f4.svg",se=r.p+"img/mail.3c56fffb.svg";const de={class:"container mx-auto mb-12 sm:mb-12"},ce={class:"flex flex-row justify-between pt-6 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light border-dashed dark:border-secondary-dark"},me={class:"flex flex-col"},ue={key:0,src:c,class:"w-16",alt:"Dark Logo"},pe={key:1,src:c,class:"w-16",alt:"Light Logo"},ge={class:"flex mt-6 items-center"},fe=(0,o._)("div",{class:"font-normal text-base sm:text-base text-primary-dark dark:text-primary-light"}," My socials ",-1),xe={class:"ml-8 flex gap-4 sm:gap-8 ml-16 text-xl text-white"},he=["href"],be=(0,o.uE)('<div class="flex flex-col text-left bg-neutral-800 font-general-normal p-5 rounded-xl"><div class="flex items-center mb-4"><img src="'+ie+'" class="w-12" alt="Phone icon"><div class="ml-4 text-2xl text-cyan-200"> (+84) 78 444 3157 </div></div><div class="flex items-center"><img src="'+se+'" class="w-12" alt="Mail icon"><div class="ml-4 text-2xl text-cyan-200 font-general-normal"> xuanmai1308@gmail.com </div></div></div>',1);function ye(e,t,r,a,n,i){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",de,[(0,o._)("div",ce,[(0,o._)("div",me,[(0,o.Wm)(s,{to:"/"},{default:(0,o.w5)((()=>["light"===e.theme?((0,o.wg)(),(0,o.iD)("img",ue)):((0,o.wg)(),(0,o.iD)("img",pe))])),_:1}),(0,o._)("div",ge,[fe,(0,o._)("ul",xe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.socials,(e=>((0,o.wg)(),(0,o.iD)("a",{key:e.id,href:e.url,target:"__blank",class:"text-white hover:text-cyan-200 dark:hover:text-cyan-200 cursor-pointer rounded-lg duration-500 italic underline"},(0,l.zw)(e.name),9,he)))),128))])])]),be])])}const ve=[{id:1,name:"Facebook",icon:"globe",url:"https://www.facebook.com/xomodapxichlohehe"},{id:2,name:"Linkedin",icon:"github",url:"https://linkedin.com"},{id:3,name:"Dribbble",icon:"dribbble",url:"https://dribbble.com"},{id:4,name:"Behance",icon:"behance",url:"https://www.behance.net"}];var we={data(){return{socials:ve}},mounted(){d().replace()},updated(){d().replace()}};const ke=(0,T.Z)(we,[["render",ye]]);var _e=ke,je={components:{AppHeader:ne,AppFooter:_e},data:()=>({appTheme:"dark"}),mounted(){d().replace()},updated(){d().replace()}};const Se=(0,T.Z)(je,[["render",i]]);var Te=Se,De=r(2201),Me=r(153);const We={class:"container mx-auto"},Ie={class:"mt-10 sm:mt-20 flex justify-center items-center"},Ae=(0,o._)("img",{src:Me,class:"w-8 ml-4",alt:"Arrow Right icon"},null,-1);function Pe(e,t,r,a,l,n){const i=(0,o.up)("AppBanner"),s=(0,o.up)("ProjectsGrid"),d=(0,o.up)("Button"),c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",We,[(0,o.Wm)(i,{class:"mb-5 sm:mb-8"}),(0,o.Wm)(s,{onlyFeature:!0}),(0,o._)("div",Ie,[(0,o.Wm)(c,{to:"/works",class:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300 hover:text-cyan-300","aria-label":"More Projects"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{title:"Browse more works",class:"font-general-italic underline"}),Ae])),_:1})])])}var Be=r.p+"img/work.3c97f97d.svg",Oe=r.p+"img/blogs.be638e7e.svg",Fe=r.p+"img/about.a46b1d5f.svg",Ce=r.p+"img/arrow-down.048d79a1.svg",He=r.p+"img/triangle-right.2f169189.svg",Le=r.p+"img/grid.e8a3f6fd.svg",Ze=r.p+"img/triangle-left.e99dc657.svg";const ze={class:"flex flex-col sm:justify-between items-center sm:flex-row mt-6 sm:mt-10"},Ee={class:"flex flex-col w-full md:w-3/3 text-left z-50"},qe=(0,o._)("div",{class:"font-general-semibold mt-8 text-6xl md:text-6xl xl:text-6xl text-center sm:text-left text-ternary-dark dark:text-primary-light"},[(0,o.Uk)(" Xin chào! 👋 I’m Mai, "),(0,o._)("div",{class:"flex flex-row mt-4"},[(0,o._)("div",{class:"font-general-semibold mr-4 text-6xl sm:text-6xl xl:text-6xl text-center sm:text-left leading-none text-ternary-dark dark:text-primary-light"}," a "),(0,o._)("div",{class:"font-general-semibold text-6xl sm:text-6xl xl:text-6xl text-center sm:text-left leading-none text-cyan-200"}," Product Designer ")])],-1),Ne={class:"flex flex-col justify-center mt-16"},Ue=(0,o._)("div",{class:"font-general-semibold text-2xl sm:text-2xl xl:text-2xl text-center sm:text-left leading-none text-neutral-200 mb-6"}," Visit my cool stuff below ",-1),$e={class:"flex items-center"},Ge=(0,o._)("div",{class:"flex justify-center items-center sm:w-42 sm:mb-0 text-lg bg-gradient-to-r from-blue-800 from-50% to-cyan-300 to-87% w-36 sm:w-48 mb-6 sm:mb-0 rounded-xl p-0.5 cursor-pointer"},[(0,o._)("div",{class:"flex justify-center w-full bg-primary-dark text-white rounded-xl p-2.5"},[(0,o._)("img",{src:Be,class:"w-8",alt:"Work icon"}),(0,o._)("span",{class:"text-2xl sm:text-2xl font-general-medium duration-100 ml-4"},"Works ")])],-1),Xe=(0,o._)("div",{class:"flex ml-5 justify-center items-center w-36 sm:w-48 mb-6 sm:mb-0 text-lg bg-gray-900 shadow-[inset_0_1px_1px_0px_rgba(218,218,218,0.25)] py-2.5 sm:py-3 rounded-lg focus:ring-1 focus:ring-cyan-300 hover:bg-cyan-300 cursor-pointer text-cyan-200 hover:text-white duration-500"},[(0,o._)("img",{src:Oe,class:"w-8",alt:"Blog icon"}),(0,o._)("span",{class:"text-2xl sm:text-2xl font-general-medium duration-10 ml-4"},"Blogs")],-1),Ke=(0,o._)("div",{class:"flex ml-5 justify-center items-center w-36 sm:w-48 mb-6 sm:mb-0 text-lg bg-gray-900 shadow-[inset_0_1px_1px_0px_rgba(218,218,218,0.25)] py-2.5 sm:py-3 rounded-lg focus:ring-1 focus:ring-cyan-300 hover:bg-cyan-300 cursor-pointer text-cyan-200 hover:text-white duration-500"},[(0,o._)("img",{src:Fe,class:"w-8",alt:"About icon"}),(0,o._)("span",{class:"text-2xl sm:text-2xl font-general-medium duration-100 ml-4"},"About me")],-1),Re=(0,o._)("div",{class:"flex justify-center mt-16 animate-bounce"},[(0,o._)("img",{src:Ce,class:"w-12",alt:"Down icon"})],-1),Ye=(0,o.uE)('<div class="text-left right-0 absolute z-0"><img src="'+He+'" alt="Shape" class="absolute w-1/2 right-0 top-72 hover:motion-safe:animate-pulse z-0"><img src="'+Le+'" alt="Shape"></div><div class="text-left float-left z-0"><img src="'+Ze+'" alt="Shape" class="absolute w-1/5 left-0 top-40 hover:motion-safe:animate-ping"></div>',2);function Ve(e,t,r,a,l,n){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",ze,[(0,o._)("div",Ee,[qe,(0,o._)("div",Ne,[Ue,(0,o._)("div",$e,[(0,o.Wm)(i,{to:"/works"},{default:(0,o.w5)((()=>[Ge])),_:1}),(0,o.Wm)(i,{to:"/blogs"},{default:(0,o.w5)((()=>[Xe])),_:1}),(0,o.Wm)(i,{to:"/about"},{default:(0,o.w5)((()=>[Ke])),_:1})])]),Re]),Ye])}var Je={name:"Home",data:()=>({theme:""}),created(){this.theme=localStorage.getItem("theme")||"dark"},mounted(){d().replace(),this.theme=localStorage.getItem("theme")||"dark"},updated(){d().replace()},methods:{}};const Qe=(0,T.Z)(Je,[["render",Ve]]);var et=Qe,tt=r(2202),rt={name:"Home",components:{AppBanner:et,ProjectsGrid:tt.Z,Button:X.Z}};const at=(0,T.Z)(rt,[["render",Pe]]);var ot=at;const lt=[{path:"/",name:"Home",component:ot,meta:{title:"Stoman - Home"}},{path:"/about",name:"About",component:()=>r.e(443).then(r.bind(r,680)),meta:{title:"Stoman - About"}},{path:"/works",name:"Works",component:()=>r.e(176).then(r.bind(r,3073)),meta:{title:"MXT - Works"}},{path:"/projects/single-project",name:"Single Project",component:()=>r.e(176).then(r.bind(r,5985)),meta:{title:"Stoman - Single Project"}},{path:"/blogs",name:"Blogs",component:()=>r.e(176).then(r.bind(r,2719)),meta:{title:"MTX - Blogs"}}],nt=(0,De.p7)({history:(0,De.PO)("/txmai-blog/"),routes:lt,scrollBehavior(){document.getElementById("app").scrollIntoView()}});var it=nt;nt.beforeEach(((e,t,r)=>{const a=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),l=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(a?document.title=a.meta.title:l&&(document.title=l.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!o)return r();o.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((r=>{t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),r()}));var st=r(2739);const dt=r(8508);dt.replace(),(0,a.ri)(Te).use(it).use(st.Z).mount("#app");const ct=localStorage.getItem("theme");"dark"===ct&&document.querySelector("body").classList.contains("app-theme"),document.querySelector("body").classList.add("bg-primary-dark")},2202:function(e,t,r){r.d(t,{Z:function(){return Z}});var a=r(6252);const o={class:""},l=(0,a._)("div",null,[(0,a._)("h6",{class:"font-general-regular text-center text-secondary-dark dark:text-cyan-300 text-md sm:text-xl font-normal mb-8"}," my work "),(0,a._)("h3",{class:"font-general-regular text-center text-secondary-dark dark:text-ternary-light text-5xl sm:text-5xl font-semibold mb-4"}," Scalable ecosystem products "),(0,a._)("div",{class:"flex justify-between pb-3 gap-2"})],-1),n={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"};function i(e,t,r,i,s,d){const c=(0,a.up)("ProjectSingle");return(0,a.wg)(),(0,a.iD)("section",o,[l,(0,a._)("div",n,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.filteredProjects,(e=>((0,a.wg)(),(0,a.j4)(c,{key:e.id,project:e},null,8,["project"])))),128))])])}var s=r(8508),d=r.n(s),c=r(3577),m=r.p+"img/figma.b0eeb1ae.svg",u=r(153);const p=["src","alt"],g={class:"flex flex-col"},f={class:"text-left px-4 py-6"},x={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},h={class:"font-general-regular text-sm text-ternary-dark dark:text-ternary-light"},b={class:"border-t border-t-2 border-primary-light px-4 py-6"},y={class:"flex justify-between items-center"},v={class:"flex items-center"},w=(0,a._)("div",{class:"text-sm text-ternary-dark dark:text-ternary-light"}," Stake ",-1),k=(0,a._)("img",{src:m,class:"w-20 ml-4",alt:"Light Logo"},null,-1),_=["src"],j={class:"border-t border-t-2 border-primary-light px-4 py-6"},S={class:"flex justify-between items-center"},T={class:"flex items-center"},D=(0,a._)("div",{class:"text-sm text-ternary-dark dark:text-ternary-light"}," Client ",-1),M=["src"],W=(0,a._)("div",null,[(0,a._)("img",{src:u,class:"w-8",alt:"Light Logo"})],-1);function I(e,t,r,o,l,n){const i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(i,{to:"/projects/single-project",class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark","aria-label":"Single Project"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("img",{src:r.project.img,alt:r.project.title,class:"rounded-t-xl border-none"},null,8,p)]),(0,a._)("div",g,[(0,a._)("div",f,[(0,a._)("p",x,(0,c.zw)(r.project.title),1),(0,a._)("span",h,(0,c.zw)(r.project.category),1)]),(0,a._)("div",b,[(0,a._)("div",y,[(0,a._)("div",v,[w,k,(0,a._)("img",{src:r.project.skate,class:"w-18 ml-4",alt:"Light Logo"},null,8,_)])])]),(0,a._)("div",j,[(0,a._)("div",S,[(0,a._)("div",T,[D,(0,a._)("img",{src:r.project.client,class:"w-24 ml-4",alt:"Light Logo"},null,8,M)]),W])])])])),_:1})}var A={props:["project"]},P=r(3744);const B=(0,P.Z)(A,[["render",I]]);var O=B;const F=[{id:1,title:"Aura HaloTrade",category:"A scalable Design System for DeFi Trading Platform",img:r(2035),skate:r(4431),client:r(8459),isFeature:!0},{id:2,title:"Aurascan",category:"Blockchain Explorer for Transparent Transaction Monitoring",img:r(7034),skate:r(4431),client:r(8459),isFeature:!0},{id:3,title:"Dispute workstation; Paypoint",category:"Global fintech products for banking",img:r(6173),skate:r(2664),client:r(9336),isFeature:!1},{id:4,title:"Diversity Dashboard; Warehouse Factsheet",category:"Power BI Dashboard for a multi-billion dollar global retailer",img:r(8784),skate:r(2664),client:r(8205),isFeature:!0},{id:5,title:"Bidding/Pilot projects",category:"HMI System for blood hematology analyzer; Website builder studio",img:r(6408),skate:r(2664),client:r(8205),isFeature:!1},{id:6,title:"Internal workshop",category:"Holistic Design for digital products in the right time description",img:r(8784),skate:r(2664),client:r(8205),isFeature:!1}];var C=F,H={components:{ProjectSingle:O},props:{onlyFeature:{require:!1}},data:()=>({projects:C,projectsHeading:"Projects Portfolio",selectedCategory:"",searchProject:""}),computed:{filteredProjects(){return this.onlyFeature?this.projects.filter((e=>!0===e.isFeature)):this.projects}},mounted(){d().replace()}};const L=(0,P.Z)(H,[["render",i]]);var Z=L},4595:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(6252),o=r(3577);function l(e,t,r,l,n,i){return(0,a.wg)(),(0,a.iD)("button",null,(0,o.zw)(r.title),1)}var n={props:["title"],data:()=>({})},i=r(3744);const s=(0,i.Z)(n,[["render",l]]);var d=s},4631:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(6252),o=r(3577);const l=["for"],n=["id","name","placeholder","aria-label","value","type"];function i(e,t,r,i,s,d){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("label",{class:"block mb-2 text-lg text-primary-dark dark:text-primary-light",for:r.label},(0,o.zw)(r.label),9,l),(0,a._)("input",(0,a.dG)({class:"w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:r.inputIdentifier,name:r.inputIdentifier,placeholder:r.label,"aria-label":r.inputIdentifier,value:r.val,type:r.inputType},e.$attrs,{onInput:t[0]||(t[0]=t=>e.$emit("update:val",t.target.value)),required:""}),null,16,n)])}var s={props:{label:{type:String,default:""},inputIdentifier:{type:String,default:""},val:{type:[String,Number],default:""},inputType:{type:String,default:"text"}}},d=r(3744);const c=(0,d.Z)(s,[["render",i]]);var m=c},8312:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(6252),o=r(3577);const l=["for"],n=["id","name","aria-label","placeholder"];function i(e,t,r,i,s,d){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:r.textareaIdentifier},(0,o.zw)(r.label),9,l),(0,a._)("textarea",(0,a.dG)({class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:r.textareaIdentifier,name:r.textareaIdentifier,"aria-label":r.textareaIdentifier,placeholder:r.label},e.$attrs,{onInput:t[0]||(t[0]=t=>e.$emit("update:val",t.target.value)),cols:"14",rows:"6"}),null,16,n)])}var s={props:{label:{type:String,default:""},textareaIdentifier:{type:String,default:""},val:{type:[String,Number],default:""}}},d=r(3744);const c=(0,d.Z)(s,[["render",i]]);var m=c},153:function(e,t,r){e.exports=r.p+"img/arrow-right.4507a2f3.svg"},8459:function(e,t,r){e.exports=r.p+"img/aura.c781b8dc.svg"},2664:function(e,t,r){e.exports=r.p+"img/bpi.d5cd839c.svg"},8205:function(e,t,r){e.exports=r.p+"img/costco.f7f4caf3.svg"},9336:function(e,t,r){e.exports=r.p+"img/fiserv.6790ce15.svg"},4431:function(e,t,r){e.exports=r.p+"img/web3.9482526f.svg"},2035:function(e,t,r){e.exports=r.p+"img/ui-project-1.5ec6ffd7.jpg"},7034:function(e,t,r){e.exports=r.p+"img/ui-project-2.f9b99d48.jpg"},8784:function(e,t,r){e.exports=r.p+"img/ui-project-3.f4906a4a.jpg"},6173:function(e,t,r){e.exports=r.p+"img/ui-project-4.ac34161a.png"},6408:function(e,t,r){e.exports=r.p+"img/ui-project-5.f3d8976e.png"}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,r),l.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,l){if(!a){var n=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],l=e[c][2];for(var i=!0,s=0;s<a.length;s++)(!1&l||n>=l)&&Object.keys(r.O).every((function(e){return r.O[e](a[s])}))?a.splice(s--,1):(i=!1,l<n&&(n=l));if(i){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,o,l]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,a){return r.f[a](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+{176:"projects",443:"about"}[e]+"."+{176:"cae02824",443:"c9a4a850"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vuejs-tailwindcss-portfolio:";r.l=function(a,o,l,n){if(e[a])e[a].push(o);else{var i,s;if(void 0!==l)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var m=d[c];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+l){i=m;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+l),i.src=a),e[a]=[o];var u=function(t,r){i.onerror=i.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/txmai-blog/"}(),function(){var e={143:0};r.f.j=function(t,a){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var l=new Promise((function(r,a){o=e[t]=[r,a]}));a.push(o[2]=l);var n=r.p+r.u(t),i=new Error,s=function(a){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var l=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+l+": "+n+")",i.name="ChunkLoadError",i.type=l,i.request=n,o[1](i)}};r.l(n,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,l,n=a[0],i=a[1],s=a[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var c=s(r)}for(t&&t(a);d<n.length;d++)l=n[d],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(c)},a=self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(1978)}));a=r.O(a)})();
//# sourceMappingURL=app.422030d3.js.map