"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[975],{2975:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var a=r(4087),i=r(5232),l=r(5946),t=r(9439),s=r(1295),o=r(1252),d=r(176),u=r(2701),c=r(4585),m=r(7886),v=r(2791),h=r(9434),p=r(8724),f=r(7889),x=r(184),g=function(){var e=(0,v.useState)(""),n=(0,t.Z)(e,2),r=n[0],i=n[1],l=(0,v.useState)(""),g=(0,t.Z)(l,2),b=g[0],Z=g[1],y=(0,v.useState)(""),I=(0,t.Z)(y,2),j=I[0],k=I[1],N=(0,s.p)(),R=(0,o.ff)("gray.200","transparent"),q=(0,h.I0)(),_=function(e){var n=e.target,r=n.name,a=n.value;switch(r){case"name":i(a);break;case"email":Z(a);break;case"password":k(a)}},w=function(){i(""),Z(""),k("")};return(0,x.jsx)(d.k,{align:"center",justify:"center",bg:R,children:(0,x.jsx)(a.xu,{rounded:"lg",bg:(0,o.ff)("white","gray.700"),boxShadow:"lg",p:5,children:(0,x.jsxs)(d.k,{align:"center",justify:"center",as:"form",flexDirection:"column",onSubmit:function(e){e.preventDefault();var n=e.target.elements.repeatPassword.value;j===n?(q((0,p.z2)({name:r,email:b,password:j})),e.target.reset(),w()):N({position:"top-right",description:"Those passwords did not match. Try again",status:"warning"})},children:[(0,x.jsx)(d.k,{flexDirection:"column",align:"center",children:(0,x.jsxs)(u.NI,{isRequired:!0,children:[(0,x.jsx)(c.l,{children:"Name"}),(0,x.jsx)(m.I,{type:"text",name:"name",value:r,id:"id",placeholder:"Jan Kowalski",onChange:_,mb:5}),(0,x.jsx)(c.l,{children:"Email"}),(0,x.jsx)(m.I,{type:"email",name:"email",value:b,placeholder:"email@gmail.com",onChange:_,mb:5}),(0,x.jsx)(c.l,{children:"Password"}),(0,x.jsx)(m.I,{type:"password",name:"password",value:j,onChange:_,placeholder:"Qwerty123!",mb:5}),(0,x.jsx)(c.l,{children:"Password"}),(0,x.jsx)(m.I,{type:"password",name:"repeatPassword",onChange:_,placeholder:"Qwerty123!"})]})}),(0,x.jsx)(f.VL,{})]})})})},b=function(){return(0,x.jsxs)(a.xu,{pt:"50px",mx:"auto",textAlign:"center",children:[(0,x.jsx)(i.K,{align:"center",children:(0,x.jsx)(l.X,{fontSize:"2xl",textAlign:"center",mb:5,children:"Registration"})}),(0,x.jsx)(g,{})]})}},4585:function(e,n,r){r.d(n,{l:function(){return v}});var a=r(1413),i=r(4925),l=r(2701),t=r(7872),s=r(9084),o=r(9477),d=r(2952),u=r(6992),c=r(184),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,t.G)((function(e,n){var r,t=(0,s.mq)("FormLabel",e),v=(0,o.Lr)(e),p=(v.className,v.children),f=v.requiredIndicator,x=void 0===f?(0,c.jsx)(h,{}):f,g=v.optionalIndicator,b=void 0===g?null:g,Z=(0,i.Z)(v,m),y=(0,l.NJ)(),I=null!=(r=null==y?void 0:y.getLabelProps(Z,n))?r:(0,a.Z)({ref:n},Z);return(0,c.jsxs)(d.m.label,(0,a.Z)((0,a.Z)({},I),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,a.Z)({display:"block",textAlign:"start"},t),children:[p,(null==y?void 0:y.isRequired)?x:b]}))}));v.displayName="FormLabel";var h=(0,t.G)((function(e,n){var r=(0,l.NJ)(),i=(0,l.e)();if(!(null==r?void 0:r.isRequired))return null;var t=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,a.Z)((0,a.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:i.requiredIndicator,className:t}))}));h.displayName="RequiredIndicator"},2701:function(e,n,r){r.d(n,{NI:function(){return N},NJ:function(){return k},e:function(){return Z}});var a=r(1413),i=r(4925),l=r(9439),t=r(9886),s=r(4591),o=r(7872),d=r(9084),u=r(9477),c=r(2952),m=r(6992),v=r(2791),h=r(184),p=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],x=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),g=(0,l.Z)(x,2),b=g[0],Z=g[1],y=(0,t.k)({strict:!1,name:"FormControlContext"}),I=(0,l.Z)(y,2),j=I[0],k=I[1];var N=(0,o.G)((function(e,n){var r=(0,d.jC)("Form",e),t=function(e){var n=e.id,r=e.isRequired,t=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,i.Z)(e,p),c=(0,v.useId)(),h=n||"field-".concat(c),f="".concat(h,"-label"),x="".concat(h,"-feedback"),g="".concat(h,"-helptext"),b=(0,v.useState)(!1),Z=(0,l.Z)(b,2),y=Z[0],I=Z[1],j=(0,v.useState)(!1),k=(0,l.Z)(j,2),N=k[0],R=k[1],q=(0,v.useState)(!1),_=(0,l.Z)(q,2),w=_[0],P=_[1],C=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:g},e),{},{ref:(0,s.lq)(n,(function(e){e&&R(!0)}))})}),[g]),F=(0,v.useCallback)((function(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},r),{},{ref:i,"data-focus":(0,m.PB)(w),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(t),"data-readonly":(0,m.PB)(d),id:null!=(e=r.id)?e:f,htmlFor:null!=(n=r.htmlFor)?n:h})}),[h,o,w,t,d,f]),S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:x},e),{},{ref:(0,s.lq)(n,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[x]),T=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)((0,a.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!t,isReadOnly:!!d,isDisabled:!!o,isFocused:!!w,onFocus:function(){return P(!0)},onBlur:function(){return P(!1)},hasFeedbackText:y,setHasFeedbackText:I,hasHelpText:N,setHasHelpText:R,id:h,labelId:f,feedbackId:x,helpTextId:g,htmlProps:u,getHelpTextProps:C,getErrorMessageProps:S,getRootProps:T,getLabelProps:F,getRequiredIndicatorProps:O}}((0,u.Lr)(e)),o=t.getRootProps,x=(t.htmlProps,(0,i.Z)(t,f)),g=(0,m.cx)("chakra-form-control",e.className);return(0,h.jsx)(j,{value:x,children:(0,h.jsx)(b,{value:r,children:(0,h.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},o({},n)),{},{className:g,__css:r.container}))})})}));N.displayName="FormControl",(0,o.G)((function(e,n){var r=k(),i=Z(),l=(0,m.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:i.helperText,className:l}))})).displayName="FormHelperText"},7886:function(e,n,r){r.d(n,{I:function(){return f}});var a=r(1413),i=r(4925),l=r(2701),t=r(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,r,s,d=(0,l.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,h=e.isRequired,p=e.isInvalid,f=e.isReadOnly,x=e.isDisabled,g=e.onFocus,b=e.onBlur,Z=(0,i.Z)(e,o),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&y.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&y.push(d.helpTextId);return(0,a.Z)((0,a.Z)({},Z),{},{"aria-describedby":y.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(n=null!=c?c:x)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(r=null!=m?m:f)?r:null==d?void 0:d.isReadOnly,isRequired:null!=(s=null!=v?v:h)?s:null==d?void 0:d.isRequired,isInvalid:null!=p?p:null==d?void 0:d.isInvalid,onFocus:(0,t.v0)(null==d?void 0:d.onFocus,g),onBlur:(0,t.v0)(null==d?void 0:d.onBlur,b)})}(e),r=n.isDisabled,d=n.isInvalid,u=n.isReadOnly,c=n.isRequired,m=(0,i.Z)(n,s);return(0,a.Z)((0,a.Z)({},m),{},{disabled:r,readOnly:u,required:c,"aria-invalid":(0,t.Qm)(d),"aria-required":(0,t.Qm)(c),"aria-readonly":(0,t.Qm)(u)})}var u=r(7872),c=r(9084),m=r(9477),v=r(2952),h=r(184),p=["htmlSize"],f=(0,u.G)((function(e,n){var r=e.htmlSize,l=(0,i.Z)(e,p),s=(0,c.jC)("Input",l),o=d((0,m.Lr)(l)),u=(0,t.cx)("chakra-input",e.className);return(0,h.jsx)(v.m.input,(0,a.Z)((0,a.Z)({size:r},o),{},{__css:s.field,ref:n,className:u}))}));f.displayName="Input",f.id="Input"},5946:function(e,n,r){r.d(n,{X:function(){return m}});var a=r(1413),i=r(4925),l=r(7872),t=r(9084),s=r(9477),o=r(2952),d=r(6992),u=r(184),c=["className"],m=(0,l.G)((function(e,n){var r=(0,t.mq)("Heading",e),l=(0,s.Lr)(e),m=(l.className,(0,i.Z)(l,c));return(0,u.jsx)(o.m.h2,(0,a.Z)((0,a.Z)({ref:n,className:(0,d.cx)("chakra-heading",e.className)},m),{},{__css:r}))}));m.displayName="Heading"},1295:function(e,n,r){r.d(n,{p:function(){return o}});var a=r(1413),i=r(7477),l=r(3188),t=r(9729),s=r(2791);function o(e){var n=(0,t.uP)().theme,r=(0,i.OX)();return(0,s.useMemo)((function(){return(0,l.Cj)(n.direction,(0,a.Z)((0,a.Z)({},r),e))}),[e,n.direction,r])}}}]);
//# sourceMappingURL=975.bc197a44.chunk.js.map