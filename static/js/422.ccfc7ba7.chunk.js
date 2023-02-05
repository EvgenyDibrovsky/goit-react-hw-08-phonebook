"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[422],{6422:function(e,n,i){i.r(n),i.d(n,{default:function(){return O}});var l=i(4087),a=i(5232),r=i(5946),t=i(9439),s=i(1252),d=i(176),o=i(2701),u=i(4585),c=i(7886),p=i(826),m=i(4942),h=i(1413),f=i(4925),v=i(2952),x=i(7872),g=i(6992),Z=i(184),b=["placement"],I=["className"],y=["className"],j=(0,v.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),N=(0,x.G)((function(e,n){var i,l,a,r=e.placement,t=void 0===r?"left":r,s=(0,f.Z)(e,b),d=(0,p.m)(),o=d.field,u="left"===t?"insetStart":"insetEnd",c=(0,h.Z)((i={},(0,m.Z)(i,u,"0"),(0,m.Z)(i,"width",null!=(l=null==o?void 0:o.height)?l:null==o?void 0:o.h),(0,m.Z)(i,"height",null!=(a=null==o?void 0:o.height)?a:null==o?void 0:o.h),(0,m.Z)(i,"fontSize",null==o?void 0:o.fontSize),i),d.element);return(0,Z.jsx)(j,(0,h.Z)({ref:n,__css:c},s))}));N.id="InputElement",N.displayName="InputElement";var _=(0,x.G)((function(e,n){var i=e.className,l=(0,f.Z)(e,I),a=(0,g.cx)("chakra-input__left-element",i);return(0,Z.jsx)(N,(0,h.Z)({ref:n,placement:"left",className:a},l))}));_.id="InputLeftElement",_.displayName="InputLeftElement";var k=(0,x.G)((function(e,n){var i=e.className,l=(0,f.Z)(e,y),a=(0,g.cx)("chakra-input__right-element",i);return(0,Z.jsx)(N,(0,h.Z)({ref:n,placement:"right",className:a},l))}));k.id="InputRightElement",k.displayName="InputRightElement";var R=i(4224),q=i(2791),C=i(9434),S=i(8724),F=i(7889),w=i(5903),P=(0,w.I)({displayName:"ViewIcon",path:(0,Z.jsxs)("g",{fill:"currentColor",children:[(0,Z.jsx)("path",{d:"M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"}),(0,Z.jsx)("circle",{cx:"12",cy:"12",r:"2"})]})}),E=(0,w.I)({displayName:"ViewOffIcon",path:(0,Z.jsxs)("g",{fill:"currentColor",children:[(0,Z.jsx)("path",{d:"M23.2,10.549a20.954,20.954,0,0,0-4.3-3.6l4-3.995a1,1,0,1,0-1.414-1.414l-.018.018a.737.737,0,0,1-.173.291l-19.5,19.5c-.008.007-.018.009-.026.017a1,1,0,0,0,1.631,1.088l4.146-4.146a11.26,11.26,0,0,0,4.31.939h.3c4.256,0,8.489-2.984,11.051-5.8A2.171,2.171,0,0,0,23.2,10.549ZM16.313,13.27a4.581,4.581,0,0,1-3,3.028,4.3,4.3,0,0,1-3.1-.19.253.253,0,0,1-.068-.407l5.56-5.559a.252.252,0,0,1,.407.067A4.3,4.3,0,0,1,16.313,13.27Z"}),(0,Z.jsx)("path",{d:"M7.615,13.4a.244.244,0,0,0,.061-.24A4.315,4.315,0,0,1,7.5,12,4.5,4.5,0,0,1,12,7.5a4.276,4.276,0,0,1,1.16.173.244.244,0,0,0,.24-.062l1.941-1.942a.254.254,0,0,0-.1-.421A10.413,10.413,0,0,0,12,4.75C7.7,4.692,3.4,7.7.813,10.549a2.15,2.15,0,0,0-.007,2.9,21.209,21.209,0,0,0,3.438,3.03.256.256,0,0,0,.326-.029Z"})]})}),G=function(){var e=(0,s.ff)("gray.200","transparent"),n=(0,q.useState)(""),i=(0,t.Z)(n,2),a=i[0],r=i[1],m=(0,q.useState)(""),h=(0,t.Z)(m,2),f=h[0],v=h[1],x=(0,C.I0)(),g=(0,q.useState)(!1),b=(0,t.Z)(g,2),I=b[0],y=b[1],j=function(e){var n=e.target,i=n.name,l=n.value;switch(i){case"email":r(l);break;case"password":v(l)}};return(0,Z.jsx)(d.k,{align:"center",justify:"center",bg:e,children:(0,Z.jsx)(l.xu,{rounded:"lg",bg:(0,s.ff)("white","gray.700"),boxShadow:"lg",p:5,children:(0,Z.jsxs)(d.k,{align:"center",justify:"center",as:"form",flexDirection:"column",onSubmit:function(e){e.preventDefault(),x((0,S.x4)({email:a,password:f})),r(""),v("")},children:[(0,Z.jsx)(d.k,{flexDirection:"column",align:"center",children:(0,Z.jsxs)(o.NI,{isRequired:!0,children:[(0,Z.jsx)(u.l,{children:" Email"}),(0,Z.jsx)(c.I,{type:"email",name:"email",value:a,id:"id",placeholder:"Email address",mb:5,onChange:j}),(0,Z.jsx)(u.l,{children:"Password"}),(0,Z.jsxs)(p.B,{children:[(0,Z.jsx)(c.I,{name:"password",value:f,type:I?"text":"password",placeholder:"Password",onChange:j}),(0,Z.jsx)(k,{children:(0,Z.jsx)(R.z,{h:"1.55rem",bg:"transparent",mr:"5px",size:"lg",onClick:function(){return y(!I)},children:I?(0,Z.jsx)(P,{}):(0,Z.jsx)(E,{})})})]})]})}),(0,Z.jsx)(F.St,{})]})})})},O=function(){return(0,Z.jsxs)(l.xu,{pt:"50px",mx:"auto",textAlign:"center",children:[(0,Z.jsx)(a.K,{align:"center",children:(0,Z.jsx)(r.X,{fontSize:"2xl",textAlign:"center",mb:5,children:"Sign in to your account"})}),(0,Z.jsx)(G,{})]})}},4585:function(e,n,i){i.d(n,{l:function(){return m}});var l=i(1413),a=i(4925),r=i(2701),t=i(7872),s=i(9084),d=i(9477),o=i(2952),u=i(6992),c=i(184),p=["className","children","requiredIndicator","optionalIndicator"],m=(0,t.G)((function(e,n){var i,t=(0,s.mq)("FormLabel",e),m=(0,d.Lr)(e),f=(m.className,m.children),v=m.requiredIndicator,x=void 0===v?(0,c.jsx)(h,{}):v,g=m.optionalIndicator,Z=void 0===g?null:g,b=(0,a.Z)(m,p),I=(0,r.NJ)(),y=null!=(i=null==I?void 0:I.getLabelProps(b,n))?i:(0,l.Z)({ref:n},b);return(0,c.jsxs)(o.m.label,(0,l.Z)((0,l.Z)({},y),{},{className:(0,u.cx)("chakra-form__label",m.className),__css:(0,l.Z)({display:"block",textAlign:"start"},t),children:[f,(null==I?void 0:I.isRequired)?x:Z]}))}));m.displayName="FormLabel";var h=(0,t.G)((function(e,n){var i=(0,r.NJ)(),a=(0,r.e)();if(!(null==i?void 0:i.isRequired))return null;var t=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(o.m.span,(0,l.Z)((0,l.Z)({},null==i?void 0:i.getRequiredIndicatorProps(e,n)),{},{__css:a.requiredIndicator,className:t}))}));h.displayName="RequiredIndicator"},2701:function(e,n,i){i.d(n,{NI:function(){return _},NJ:function(){return N},e:function(){return b}});var l=i(1413),a=i(4925),r=i(9439),t=i(9886),s=i(4591),d=i(7872),o=i(9084),u=i(9477),c=i(2952),p=i(6992),m=i(2791),h=i(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],v=["getRootProps","htmlProps"],x=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),g=(0,r.Z)(x,2),Z=g[0],b=g[1],I=(0,t.k)({strict:!1,name:"FormControlContext"}),y=(0,r.Z)(I,2),j=y[0],N=y[1];var _=(0,d.G)((function(e,n){var i=(0,o.jC)("Form",e),t=function(e){var n=e.id,i=e.isRequired,t=e.isInvalid,d=e.isDisabled,o=e.isReadOnly,u=(0,a.Z)(e,f),c=(0,m.useId)(),h=n||"field-".concat(c),v="".concat(h,"-label"),x="".concat(h,"-feedback"),g="".concat(h,"-helptext"),Z=(0,m.useState)(!1),b=(0,r.Z)(Z,2),I=b[0],y=b[1],j=(0,m.useState)(!1),N=(0,r.Z)(j,2),_=N[0],k=N[1],R=(0,m.useState)(!1),q=(0,r.Z)(R,2),C=q[0],S=q[1],F=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({id:g},e),{},{ref:(0,s.lq)(n,(function(e){e&&k(!0)}))})}),[g]),w=(0,m.useCallback)((function(){var e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({},i),{},{ref:a,"data-focus":(0,p.PB)(C),"data-disabled":(0,p.PB)(d),"data-invalid":(0,p.PB)(t),"data-readonly":(0,p.PB)(o),id:null!=(e=i.id)?e:v,htmlFor:null!=(n=i.htmlFor)?n:h})}),[h,d,C,t,o,v]),P=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({id:x},e),{},{ref:(0,s.lq)(n,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[x]),E=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)((0,l.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),G=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!t,isReadOnly:!!o,isDisabled:!!d,isFocused:!!C,onFocus:function(){return S(!0)},onBlur:function(){return S(!1)},hasFeedbackText:I,setHasFeedbackText:y,hasHelpText:_,setHasHelpText:k,id:h,labelId:v,feedbackId:x,helpTextId:g,htmlProps:u,getHelpTextProps:F,getErrorMessageProps:P,getRootProps:E,getLabelProps:w,getRequiredIndicatorProps:G}}((0,u.Lr)(e)),d=t.getRootProps,x=(t.htmlProps,(0,a.Z)(t,v)),g=(0,p.cx)("chakra-form-control",e.className);return(0,h.jsx)(j,{value:x,children:(0,h.jsx)(Z,{value:i,children:(0,h.jsx)(c.m.div,(0,l.Z)((0,l.Z)({},d({},n)),{},{className:g,__css:i.container}))})})}));_.displayName="FormControl",(0,d.G)((function(e,n){var i=N(),a=b(),r=(0,p.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,l.Z)((0,l.Z)({},null==i?void 0:i.getHelpTextProps(e,n)),{},{__css:a.helperText,className:r}))})).displayName="FormHelperText"},826:function(e,n,i){i.d(n,{B:function(){return I},m:function(){return b}});var l=i(1413),a=i(4925),r=i(9439),t=i(9886),s=i(7200),d=i(7872),o=i(9084),u=i(9477),c=i(2952),p=i(6992),m=i(5246),h=i(2791),f=i(184),v=["children","className"],x=(0,t.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),g=(0,r.Z)(x,2),Z=g[0],b=g[1],I=(0,d.G)((function(e,n){var i=(0,o.jC)("Input",e),r=(0,u.Lr)(e),t=r.children,d=r.className,x=(0,a.Z)(r,v),g=(0,p.cx)("chakra-input__group",d),b={},I=(0,s.W)(t),y=i.field;I.forEach((function(e){var n,l;i&&(y&&"InputLeftElement"===e.type.id&&(b.paddingStart=null!=(n=y.height)?n:y.h),y&&"InputRightElement"===e.type.id&&(b.paddingEnd=null!=(l=y.height)?l:y.h),"InputRightAddon"===e.type.id&&(b.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(b.borderStartRadius=0))}));var j=I.map((function(n){var i,l,a=(0,m.oA)({size:(null==(i=n.props)?void 0:i.size)||e.size,variant:(null==(l=n.props)?void 0:l.variant)||e.variant});return"Input"!==n.type.id?(0,h.cloneElement)(n,a):(0,h.cloneElement)(n,Object.assign(a,b,n.props))}));return(0,f.jsx)(c.m.div,(0,l.Z)((0,l.Z)({className:g,ref:n,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"}},x),{},{children:(0,f.jsx)(Z,{value:i,children:j})}))}));I.displayName="InputGroup"},7886:function(e,n,i){i.d(n,{I:function(){return v}});var l=i(1413),a=i(4925),r=i(2701),t=i(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],d=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function o(e){var n=function(e){var n,i,s,o=(0,r.NJ)(),u=e.id,c=e.disabled,p=e.readOnly,m=e.required,h=e.isRequired,f=e.isInvalid,v=e.isReadOnly,x=e.isDisabled,g=e.onFocus,Z=e.onBlur,b=(0,a.Z)(e,d),I=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==o?void 0:o.hasFeedbackText)&&(null==o?void 0:o.isInvalid)&&I.push(o.feedbackId);(null==o?void 0:o.hasHelpText)&&I.push(o.helpTextId);return(0,l.Z)((0,l.Z)({},b),{},{"aria-describedby":I.join(" ")||void 0,id:null!=u?u:null==o?void 0:o.id,isDisabled:null!=(n=null!=c?c:x)?n:null==o?void 0:o.isDisabled,isReadOnly:null!=(i=null!=p?p:v)?i:null==o?void 0:o.isReadOnly,isRequired:null!=(s=null!=m?m:h)?s:null==o?void 0:o.isRequired,isInvalid:null!=f?f:null==o?void 0:o.isInvalid,onFocus:(0,t.v0)(null==o?void 0:o.onFocus,g),onBlur:(0,t.v0)(null==o?void 0:o.onBlur,Z)})}(e),i=n.isDisabled,o=n.isInvalid,u=n.isReadOnly,c=n.isRequired,p=(0,a.Z)(n,s);return(0,l.Z)((0,l.Z)({},p),{},{disabled:i,readOnly:u,required:c,"aria-invalid":(0,t.Qm)(o),"aria-required":(0,t.Qm)(c),"aria-readonly":(0,t.Qm)(u)})}var u=i(7872),c=i(9084),p=i(9477),m=i(2952),h=i(184),f=["htmlSize"],v=(0,u.G)((function(e,n){var i=e.htmlSize,r=(0,a.Z)(e,f),s=(0,c.jC)("Input",r),d=o((0,p.Lr)(r)),u=(0,t.cx)("chakra-input",e.className);return(0,h.jsx)(m.m.input,(0,l.Z)((0,l.Z)({size:i},d),{},{__css:s.field,ref:n,className:u}))}));v.displayName="Input",v.id="Input"},5946:function(e,n,i){i.d(n,{X:function(){return p}});var l=i(1413),a=i(4925),r=i(7872),t=i(9084),s=i(9477),d=i(2952),o=i(6992),u=i(184),c=["className"],p=(0,r.G)((function(e,n){var i=(0,t.mq)("Heading",e),r=(0,s.Lr)(e),p=(r.className,(0,a.Z)(r,c));return(0,u.jsx)(d.m.h2,(0,l.Z)((0,l.Z)({ref:n,className:(0,o.cx)("chakra-heading",e.className)},p),{},{__css:i}))}));p.displayName="Heading"}}]);
//# sourceMappingURL=422.ccfc7ba7.chunk.js.map