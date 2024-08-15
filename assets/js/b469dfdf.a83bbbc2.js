"use strict";(self.webpackChunkqexe_website=self.webpackChunkqexe_website||[]).push([[5486],{5641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var i=t(4848),s=t(8453),r=t(272);const o=t.p+"assets/images/SSQ_interface-4bd1e8e72e52e835636b6b44f3695290.png",a=t.p+"assets/images/NASA-TLX_interface-28f660ffb99dc333d1c90cd8cfacbeba.png",d={sidebar_position:3,custom_edit_url:null},c="Questionnaires",l={id:"features/questionnaires",title:"Questionnaires",description:"Overview",source:"@site/docs/features/questionnaires.mdx",sourceDirName:"features",slug:"/features/questionnaires",permalink:"/qexe/docs/features/questionnaires",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Test Methods",permalink:"/qexe/docs/features/methods"},next:{title:"Terminology and Concepts",permalink:"/qexe/docs/terminology"}},h={},u=[{value:"Overview",id:"overview",level:2},{value:"<code>questionnaireType :</code>",id:"questionnairetype-",level:2},{value:"<code>NASA-TLX</code>",id:"nasa-tlx",level:3},{value:"<code>SSQ</code>",id:"ssq",level:3}];function x(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"questionnaires",children:"Questionnaires"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["To gain more insight into other factors besides the main quality evaluation criteria, questionnaires can be employed to explore additional effects pertaining to more attitundal or cognitive aspects. This is an optional extra that can be included on top of the mandatory test ",(0,i.jsx)(n.a,{href:"./methods",children:"method"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The QExE tool comes with two questionnaires that have been previously employed during the development of the tool and lab research."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"NASA Task Load Index (NASA-TLX)"}),"\n",(0,i.jsx)(n.li,{children:"Simulator Sickness Questionnaire (SSQ)"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Future Support",type:"tip",children:(0,i.jsxs)(n.p,{children:["More questionnaires will be added in future updates. In you interested in contributing, please see our ",(0,i.jsx)(n.a,{href:"../intro",children:"call for contribution statement"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Options are provided in the ",(0,i.jsx)(n.a,{href:"../getting-started/config-file",children:"configuration file"})," to integrate the questionnaire into your test design: ",(0,i.jsx)(n.code,{children:"questionnaireType"}),", and ",(0,i.jsx)(n.code,{children:"questionnaireIntegration"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Type"})," entries are the name of the desired questionnaire."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Integration"})," entries are either ",(0,i.jsx)(n.code,{children:"Lace"}),", ",(0,i.jsx)(n.code,{children:"End"}),", or ",(0,i.jsx)(n.code,{children:"None"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'"questionnaireType" : "NASA-TLX",\n// one of the following ..\n"questionnaireIntegration" : "Lace", // <- Inserts questinonaire between each scene. \n"questionnaireIntegration" : "End", // <- Inserts questinonaire at end of test. \n"questionnaireIntegration" : "None", // <- Ignores questionnaire settings. \n'})}),"\n",(0,i.jsx)(n.h2,{id:"questionnairetype-",children:(0,i.jsx)(n.code,{children:"questionnaireType :"})}),"\n",(0,i.jsx)(n.h3,{id:"nasa-tlx",children:(0,i.jsx)(n.code,{children:"NASA-TLX"})}),"\n",(0,i.jsx)(r.A,{description:{title:"NASA Task Load Index",content:(0,i.jsxs)(n.p,{children:['The NASA-Task Load Index Questionnaire is used to evalulate the amount of load a task demands of the user. Each of the dimensions have a 21-point scale from Low to High, or for "Performance", perfect to failure.',(0,i.jsx)(n.br,{}),(0,i.jsx)(n.br,{}),"Each dimension is defined below:"]})},imagePath:a}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Demension"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Mental Demand"}),(0,i.jsx)(n.td,{children:"How much mental and perceptual activity was required (e.g., thinking, deciding, calculating, remembering, etc.)?"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Physical Demand"}),(0,i.jsx)(n.td,{children:"How much physical activity was required (e.g., pushing, pullingm turning, controlling, activating, etc.)?"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Temporal Demand"}),(0,i.jsx)(n.td,{children:"How much time pressure did you feel due to the rate or pace at which the tasks or task elements occured?"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Performance"}),(0,i.jsx)(n.td,{children:"How successful do you think you were in accomplishing the goals of the tasks set by the experiments?"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Effort"}),(0,i.jsx)(n.td,{children:"How hard did you have to work (mentally and physically) to accomplish your level of performance?"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Frustration Level"}),(0,i.jsx)(n.td,{children:"How insecure, discourages, irritated, stressed, and annoyed vs. secure, gratified, content, and relaxed did you feel during the task?"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"ssq",children:(0,i.jsx)(n.code,{children:"SSQ"})}),"\n",(0,i.jsx)(r.A,{description:{title:"Similator Sickness Questionnire",content:(0,i.jsx)(n.p,{children:"The simulator sickness questionnaire has been adopted in many research experiments to quantify the effects of virtual reality systems on user sickness. The 16 sub-dimesions within the questionnaire contiribute to three main categories: nausea, oculormotor disturbance, and disorientation."})},imagePath:o})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},272:(e,n,t)=>{t.d(n,{A:()=>d});t(6540);const i="textWithImageContainer_zrS_",s="textColumn_RGtL",r="imageColumn_L4Ue",o="img_bKr4";var a=t(4848);const d=e=>{let{description:n,imagePath:t}=e;return(0,a.jsxs)("div",{className:i,children:[(0,a.jsxs)("div",{className:s,children:[n.title&&(0,a.jsx)("h3",{children:n.title}),n.content]}),(0,a.jsx)("div",{className:r,children:(0,a.jsx)("img",{src:t,alt:"Your Image",className:o})})]})}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);