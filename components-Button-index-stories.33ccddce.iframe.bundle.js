"use strict";(self.webpackChunk_markmorcos_ui=self.webpackChunk_markmorcos_ui||[]).push([[281],{"./src/components/Button/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.10_react-dom@17.0.2_react-is@18.2.0_react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");const StyledButton=styled_components_browser_esm.ZP.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${props=>props.primary&&styled_components_browser_esm.iv`
      color: white;
      background-color: black;
    `}
  ${props=>!props.primary&&styled_components_browser_esm.iv`
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    `}
  ${props=>"small"===props.size&&styled_components_browser_esm.iv`
      font-size: 12px;
      padding: 10px 16px;
    `}
  ${props=>"medium"===props.size&&styled_components_browser_esm.iv`
      font-size: 14px;
      padding: 11px 20px;
    `}
  ${props=>"large"===props.size&&styled_components_browser_esm.iv`
      font-size: 16px;
      padding: 12px 24px;
    `}
  ${props=>props.disabled&&styled_components_browser_esm.iv`
      cursor: default;
      color: #d9d9d9;
      background-color: white;
      cursor: not-allowed;
    `}
`,Button=({disabled=!1,primary=!1,size="medium",onClick=()=>null,children,...props})=>(0,jsx_runtime.jsx)(StyledButton,{type:"button",className:"button",primary,size,disabled,onClick:disabled?void 0:onClick,...props,children});Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},children:{defaultValue:null,description:"Button contents",name:"children",required:!0,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"Optional disabled flag",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:{value:"() => null"},description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"Components/Button",component:Button},Template=args=>(0,jsx_runtime.jsx)(Button,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={primary:!0,children:"Primary",onClick:()=>alert("Primary")};const Secondary=Template.bind({});Secondary.args={children:"Secondary",onClick:()=>alert("Secondary")};const Disabled=Template.bind({});Disabled.args={disabled:!0,children:"Disabled",onClick:()=>alert("Disabled")},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Secondary.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Disabled"]}}]);
//# sourceMappingURL=components-Button-index-stories.33ccddce.iframe.bundle.js.map