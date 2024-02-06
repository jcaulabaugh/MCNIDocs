"use strict";(self.webpackChunkmcni_docs=self.webpackChunkmcni_docs||[]).push([[820],{4030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(5893),s=n(1151);const a={},r="MCNi Training",o={id:"mcni-training",title:"MCNi Training",description:"Templates",source:"@site/docs/mcni-training.md",sourceDirName:".",slug:"/mcni-training",permalink:"/MCNIDocs/docs/mcni-training",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mcni-training.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MCNi Platform",permalink:"/MCNIDocs/docs/mcni-platform"},next:{title:"MCNiGo Client Application",permalink:"/MCNIDocs/docs/mcnigo-client-app"}},l={},c=[{value:"Templates",id:"templates",level:2},{value:"Overview",id:"overview",level:3},{value:"Creating a Template",id:"creating-a-template",level:3},{value:"Modify an Existing Template",id:"modify-an-existing-template",level:3},{value:"Adding Items to a Template",id:"adding-items-to-a-template",level:3},{value:"Assigning a Customer",id:"assigning-a-customer",level:3},{value:"Loading a Template",id:"loading-a-template",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"mcni-training",children:"MCNi Training"}),"\n",(0,i.jsx)(t.h2,{id:"templates",children:"Templates"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{target:"_blank",href:n(2914).Z+"",children:"Download reference document"})})}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Templates are used to hold a list of items that a certain customer or group of customers would purchase from you. The templates are currently managed via the website mcni360.com but will soon be managed with the iPad/iPhone app as well."}),"\n",(0,i.jsx)(t.h3,{id:"creating-a-template",children:"Creating a Template"}),"\n",(0,i.jsx)(t.p,{children:"Login to MCNi360.com and navigate to:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Maintenance->List->Template->Maintain"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MCNi Dashboard",src:n(3090).Z+"",width:"1825",height:"1701"})}),"\n",(0,i.jsx)(t.h3,{id:"modify-an-existing-template",children:"Modify an Existing Template"}),"\n",(0,i.jsxs)(t.p,{children:["To modify an existing template, press EDIT on the row. To create a new template, click ",(0,i.jsx)(t.strong,{children:"NEW"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MCNi Dashboard",src:n(7688).Z+"",width:"1825",height:"1701"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Customer Name"})," \u2013 select a customer that would be a candidate to use the template you are building. This is just an anchor for the template."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Template"})," \u2013 name the template so you will recognize it when searching."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Description"})," \u2013 Use this for any added information."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Distributor Credit"})," \u2013 this is not use with the mobile app, but must have a value. Make it 100."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Billing Item"})," - not used (use for national account processing)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Order Prefix"})," \u2013 not used but required, so make it I for Invoice."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Order Type"})," \u2013 not used but required, make it Invoice."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Mailing List"})," \u2013 not used"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Checkmarks"})," \u2013 leave all unchecked. These are used in our B2C e-Commerce system."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"adding-items-to-a-template",children:"Adding Items to a Template"}),"\n",(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.code,{children:"+"})," buton at the botom-left corner of the grid. Search for the item you want and save it."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MCNi Dashboard",src:n(8266).Z+"",width:"1432",height:"1242"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Item No"})," \u2013 the item number will show here when you select an item."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Description"})," \u2013 the description of the item you selected (auto-populated)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Quantity"})," \u2013 this defaults to zero so that the user can just populate how many the customer wants. If you put a quantity in this field, that quantity will show on the invoice. This iscommonly used for a surcharge, demurrage or trip/fuel charge."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Price"})," \u2013 This is the price the item will be sold for, but if you have a switch set on the device, it will use the contracted price for the item instead of the price in the template. We will address the switch in this document."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Taxed"})," \u2013 if the item is taxed or not."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Featured Product"})," \u2013 this is used for the e-Commerce app"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Partner Item"})," \u2013 this is used for EDI translations"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If you have the Function Control setting under Pricing named Use Contract Price for Template, then you can manage all of your pricing in,"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Daily Processing - > Pricing -> Price Management"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MCNi Dashboard",src:n(5591).Z+"",width:"1823",height:"1004"})}),"\n",(0,i.jsx)(t.p,{children:"Price Management is addressed in a separate video"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": If you make changes to the templates, or pricing in Price Management, you will need to do a SYNC on mcni360.com to make the changes available to the mobile devices."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"assigning-a-customer",children:"Assigning a Customer"}),"\n",(0,i.jsx)(t.p,{children:"Now that we have the template created and the pricing established for the customer in question, we need to assign the customer to this template. Go to:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Maintenange -> List -> Template -> Assign"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MCNi Dashboard",src:n(4245).Z+"",width:"1825",height:"1701"})}),"\n",(0,i.jsxs)(t.p,{children:["Select the customer you want to assign.\r\nSelect the template you want the customer to use\r\nClick ",(0,i.jsx)(t.strong,{children:"ASSIGN"})]}),"\n",(0,i.jsxs)(t.p,{children:["Turn On Use Contract Pricing\r\nOn the iPad or iPhone, click ",(0,i.jsx)(t.strong,{children:"Settings->Function Control->Pricing"}),"\r\nTurn on Use Contract Price for Template"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MCNi Dashboard",src:n(237).Z+"",width:"1430",height:"1073"})}),"\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"DONE"})," and then ",(0,i.jsx)(t.strong,{children:"SAVE"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"loading-a-template",children:"Loading a Template"}),"\n",(0,i.jsxs)(t.p,{children:["To load the template, select your customer and click ",(0,i.jsx)(t.strong,{children:"INVOICE"}),". Then, click\r\n",(0,i.jsx)(t.strong,{children:"Template/PreOrd"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MCNi Dashboard",src:n(4631).Z+"",width:"1430",height:"1073"})}),"\n",(0,i.jsx)(t.p,{children:"The items in the template will automatically load.\r\nTouch the item your customer wants to buy and enter the quantity."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2914:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/MCNi-Training-Templates-99174d41297b01eb75c3f8d2563e5bab.pdf"},7688:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Untitled-1-c0424d74d15057c0b0e571a846a96b46.png"},8266:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Untitled-2-d6819cff96314964d5a324758fadf92f.png"},5591:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Untitled-3-7f3a44d2be98aac14ae8bbed40bb8f9c.png"},4245:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Untitled-4-131a71143967e54c27d470e853537b1e.png"},237:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Untitled-5-9bae0a6b6b0aeefdf77004218181ca1a.png"},4631:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Untitled-6-46ee005ebc6ead0f9befb8da8f3c85ec.png"},3090:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Untitled-e410570fb8682030c586dd765054ff5a.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(7294);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);