(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3300:function(e,a,s){Promise.resolve().then(s.bind(s,3437)),Promise.resolve().then(s.t.bind(s,2853,23))},3437:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return components_Navbar}});var r=s(7437),l=s(3482),n=s(1396),t=s.n(n),i=s(2265),c=s(9874),o=s(6689),Navbar_Drawer=e=>{let{children:a,isOpen:s,setIsOpen:l}=e;return(0,r.jsxs)("main",{className:" fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out "+(s?" transition-opacity opacity-100 duration-500 translate-x-0  ":" transition-all delay-500 opacity-0 -translate-x-full  "),children:[(0,r.jsx)("section",{className:"w-340px max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform "+(s?"translate-x-0":"-translate-x-full"),children:(0,r.jsxs)("article",{className:"relative w-270 max-w-lg pb-10 flex flex-col space-y-6 h-full",children:[(0,r.jsxs)("header",{className:"p-4 flex items-center justify-between",children:[(0,r.jsx)("img",{className:"h-12 w-40",src:"assets/logo/logo.svg",alt:"Courses-Logo",onClick:()=>{l(!1)}}),(0,r.jsx)(o.Z,{className:"block h-6 w-6",onClick:()=>{l(!1)}})]}),(0,r.jsx)("div",{onClick:()=>{l(!1)},children:a})]})}),(0,r.jsx)("section",{className:" w-screen h-full cursor-pointer ",onClick:()=>{l(!1)}})]})};let m=[{name:"Home",href:"/",current:!0}];var Drawerdata=()=>(0,r.jsx)("div",{className:"rounded-md max-w-sm w-full mx-auto",children:(0,r.jsx)("div",{className:"flex-1 space-y-4 py-1",children:(0,r.jsx)("div",{className:"sm:block",children:(0,r.jsxs)("div",{className:"space-y-1 px-5 pt-2 pb-3",children:[m.map(e=>(0,r.jsx)(t(),{href:e.href,className:function(){for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];return a.filter(Boolean).join(" ")}(e.current?"text-black hover:opacity-100":"hover:text-black hover:opacity-100","py-1 text-lg font-normal opacity-75 block"),"aria-current":e.current?"page":void 0,children:e.name},e.name)),(0,r.jsx)("div",{className:"mt-4"})]})})})});let d=[{name:"Главная",href:"#/",current:!0},{name:"Команда",href:"#mentor",current:!1},{name:"О нас",href:"#testimonial",current:!1}],CustomLink=e=>{let{href:a,onClick:s,children:l}=e;return(0,r.jsx)(t(),{href:a,passHref:!0,children:(0,r.jsx)("span",{onClick:s,className:"px-3 py-4 text-lg font-normal",children:l})})};var Navbar_Navbar=()=>{let[e,a]=i.useState(!1),[s,n]=(0,i.useState)("/"),handleLinkClick=e=>{n(e)};return(0,r.jsx)(l.p,{as:"nav",className:"navbar",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"mx-auto max-w-7xl px-6 py-4 lg:px-8",children:(0,r.jsxs)("div",{className:"relative flex h-12 md:h-20 items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex flex-1 items-center sm:items-stretch sm:justify-start",children:[(0,r.jsx)("div",{className:"flex flex-shrink-0 items-center",children:(0,r.jsx)("img",{className:"block h-12 w-40",src:"assets/logo/logo.svg",alt:"dsign-logo"})}),(0,r.jsx)("div",{className:"hidden lg:block m-auto",children:(0,r.jsx)("div",{className:"flex space-x-4",children:d.map(e=>(0,r.jsx)(CustomLink,{href:e.href,onClick:()=>handleLinkClick(e.href),children:(0,r.jsx)("span",{className:function(){for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];return a.filter(Boolean).join(" ")}(e.href===s?"underline-links":"text-slategray","px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100"),"aria-current":e.href?"page":void 0,children:e.name})},e.name))})})]}),(0,r.jsx)("div",{className:"block lg:hidden",children:(0,r.jsx)(c.Z,{className:"block h-6 w-6","aria-hidden":"true",onClick:()=>a(!0)})}),(0,r.jsx)(Navbar_Drawer,{isOpen:e,setIsOpen:a,children:(0,r.jsx)(Drawerdata,{})})]})})})})},components_Navbar=()=>((0,i.useEffect)(()=>{let e;let storeScroll=()=>{document.documentElement.dataset.scroll=window.scrollY.toString()};document.addEventListener("scroll",function(){for(var a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];e&&cancelAnimationFrame(e),e=requestAnimationFrame(()=>{storeScroll(...s)})},{passive:!0}),storeScroll()},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Navbar_Navbar,{})}))},2853:function(){}},function(e){e.O(0,[851,971,472,744],function(){return e(e.s=3300)}),_N_E=e.O()}]);