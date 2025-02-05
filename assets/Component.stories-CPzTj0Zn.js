import{g as Ce,r as ke,a as u,R as t}from"./index-CQGlG3iI.js";var Oe=ke();const Fe=Ce(Oe);function j(){return j=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},j.apply(this,arguments)}function Ne(e,n){if(e==null)return{};var r,o,l=function(s,m){if(s==null)return{};var c,p,g={},w=Object.keys(s);for(p=0;p<w.length;p++)c=w[p],m.indexOf(c)>=0||(g[c]=s[c]);return g}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)r=d[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function P(e,n){return function(r){if(Array.isArray(r))return r}(e)||function(r,o){var l=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(l!=null){var d,s,m,c,p=[],g=!0,w=!1;try{if(m=(l=l.call(r)).next,o!==0)for(;!(g=(d=m.call(l)).done)&&(p.push(d.value),p.length!==o);g=!0);}catch(f){w=!0,s=f}finally{try{if(!g&&l.return!=null&&(c=l.return(),Object(c)!==c))return}finally{if(w)throw s}}return p}}(e,n)||we(e,n)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Re(e){return function(n){if(Array.isArray(n))return L(n)}(e)||function(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}(e)||we(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function we(e,n){if(e){if(typeof e=="string")return L(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(e,n):void 0}}function L(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=e[r];return o}function Ae(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var be={exports:{}},J,Q,Z,ee;function De(){return Q?J:(Q=1,J="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}be.exports=function(){if(ee)return Z;ee=1;var e=De();function n(){}function r(){}return r.resetWarningCache=n,Z=function(){function o(s,m,c,p,g,w){if(w!==e){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}function l(){return o}o.isRequired=o;var d={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:l,element:o,elementType:o,instanceOf:l,node:o,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:r,resetWarningCache:n};return d.PropTypes=d,d}}()();var h=Ae(be.exports);(function(e,n){n===void 0&&(n={});var r=n.insertAt;if(typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",r==="top"&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}})(".dropdown{display:inline-block;position:relative;width:16rem}.dropdown__toggle{align-items:center;border-radius:.375rem;cursor:pointer;display:flex;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;justify-content:space-between;padding:.5rem .75rem;text-align:left;width:100%}.button{background-color:#fff;border:1px solid #aaa;color:#444}.dropdown__icon{height:1rem;transition:transform .2s ease;width:1rem}.dropdown__icon--open{transform:rotate(180deg)}.dropdown__menu{background-color:#fff;border-radius:.2rem;box-shadow:0 10px 10px rgba(0,0,0,.2);margin-top:0;max-height:15rem;overflow-x:hidden;overflow-y:auto;width:100%;z-index:1100}.dropdown__menu,.dropdown__menu--inline{position:absolute}input.dropdown__search{border-radius:0!important}.dropdown__search-container{padding-top:.2rem}.dropdown__search-wrapper{position:relative}.dropdown__search{border:1px solid #ccc;border-radius:.25rem;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;padding:.5rem 2rem;width:100%}.dropdown__search-icon{height:1rem;left:.5rem;pointer-events:none;width:1rem}.dropdown__clear-button,.dropdown__search-icon{position:absolute;top:50%;transform:translateY(-50%)}.dropdown__clear-button{background:transparent;border:none;cursor:pointer;padding:0;right:.5rem}.dropdown__clear-icon{height:1rem;width:1rem}.dropdown__menu-list{border:1px solid #ccc;list-style:none;margin:0;overflow-y:hidden;padding:0}.dropdown__menu-item{cursor:pointer;font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;padding:10px 16px}.dropdown__menu-item:hover{background-color:#ddd}.dropdown__menu-item--selected{background-color:#ccc}.dropdown__menu-item--disabled{color:#999;cursor:default;font-size:14px;padding:10px 16px}.dropdown__selected-tags--no-scroll{display:flex;flex-wrap:wrap;height:auto;max-width:100%;overflow-x:hidden;overflow-y:hidden;white-space:normal}.dropdown__selected-tags--scroll{display:flex;flex-wrap:nowrap;max-width:200px;overflow-x:scroll;overflow-y:hidden;white-space:nowrap}.dropdown__selected-tag{align-items:center;background-color:#eee;border-radius:.25rem;display:inline-flex;font-size:.875rem;padding:.25rem .5rem}.dropdown__tag-remove{background:none;border:none;color:#444;cursor:pointer;font-size:.8rem;font-weight:700;line-height:1;margin-left:.25rem}.dropdown__tag-remove:hover{color:#111}");var te=function(e){var n=e.fill,r=n===void 0?"#ccc":n,o=e.strokeWidth,l=o===void 0?1.5:o,d=e.size,s=d===void 0?16:d;return t.createElement("svg",{width:s,height:s,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("circle",{cx:"8",cy:"8",r:"8",fill:r}),t.createElement("path",{d:"M5 5 L11 11 M11 5 L5 11",stroke:"#fff",strokeWidth:l}))},Pe=function(e){return t.createElement("svg",j({},e,{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}),t.createElement("path",{fillRule:"evenodd",d:"M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z",clipRule:"evenodd"}))},je=["fill","stroke","strokeWidth","size"],Te=function(e){var n=e.fill,r=n===void 0?"#ccc":n,o=e.stroke,l=o===void 0?"#fff":o,d=e.strokeWidth,s=d===void 0?1.5:d,m=e.size,c=m===void 0?16:m,p=Ne(e,je);return t.createElement("svg",j({width:c,height:c,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p),t.createElement("circle",{cx:"8",cy:"8",r:"8",fill:r}),t.createElement("path",{d:"M5 5 L11 11 M11 5 L5 11",stroke:l,strokeWidth:s}))},Ie=function(e){var n=e.className,r=n===void 0?"":n,o=e.isOpen,l=o!==void 0&&o;return t.createElement("svg",{className:"".concat(r," ").concat(l?"dropdown__icon--open":""),viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},t.createElement("path",{fillRule:"evenodd",d:"M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z",clipRule:"evenodd"}))},_=function(e){var n=e.options,r=n===void 0?[]:n,o=e.multiple,l=o!==void 0&&o,d=e.searchable,s=d!==void 0&&d,m=e.portal,c=m!==void 0&&m,p=e.renderOption,g=e.placeholder,w=g===void 0?"Select...":g,f=e.onChange,W=e.backgroundColor,H=W===void 0?null:W,q=P(u.useState(l?[]:null),2),i=q[0],E=q[1],Y=P(u.useState(!1),2),A=Y[0],T=Y[1],U=P(u.useState(""),2),D=U[0],V=U[1],$=P(u.useState({top:0,left:0,width:0}),2),I=$[0],ye=$[1],x=u.useRef(null),M=u.useRef(null);u.useEffect(function(){l&&!Array.isArray(i)?E([]):!l&&Array.isArray(i)&&E(null)},[l,i]),u.useEffect(function(){var a=function(b){x.current&&!x.current.contains(b.target)&&M.current&&!M.current.contains(b.target)&&T(!1)};return document.addEventListener("mousedown",a),function(){return document.removeEventListener("mousedown",a)}},[]),u.useEffect(function(){if(A&&x.current&&c){var a=x.current.getBoundingClientRect();ye({top:a.bottom+window.scrollY,left:a.left+window.scrollX,width:a.width})}},[A,c]);var G=r.filter(function(a){return a.label.toLowerCase().includes(D.toLowerCase())}),K=function(a){if(l){var b=i.filter(function(B){return B.value!==a.value});E(b),f==null||f(b)}else E(null),f==null||f(null)},ve=Array.isArray(i)&&i.length>=3?"dropdown__selected-tags--scroll":"dropdown__selected-tags--no-scroll",_e=["dropdown__toggle","button"].join(" "),Se=t.createElement("div",null,s&&t.createElement("div",{className:"dropdown__search-container"},t.createElement("div",{className:"dropdown__search-wrapper"},t.createElement(Pe,{className:"dropdown__search-icon"}),t.createElement("input",{type:"text",className:"dropdown__search focus:border-[#999] focus:outline-none",placeholder:"",value:D,onChange:function(a){return V(a.target.value)}}),D&&t.createElement("button",{type:"button",className:"dropdown__clear-button",onClick:function(){return V("")}},t.createElement(Te,{fill:"#ccc"})))),t.createElement("ul",{className:"dropdown__menu-list"},G.map(function(a){var b=l?Array.isArray(i)&&i.some(function(y){return y.value===a.value}):i&&i.value===a.value,B="dropdown__menu-item ".concat(b?"dropdown__menu-item--selected":"");return t.createElement("li",{key:a.value,className:B,onClick:function(){return function(y){var v;l?v=Array.isArray(i)&&i.some(function(S){return S.value===y.value})?i.filter(function(S){return S.value!==y.value}):[].concat(Re(Array.isArray(i)?i:[]),[y]):(v=y,T(!1)),E(v),f==null||f(v)}(a)}},p?p(a):s?function(y,v){if(!v)return y;var S=new RegExp("(".concat(v,")"),"gi");return y.split(S).map(function(z,xe){return S.test(z)?t.createElement("span",{key:xe,style:{backgroundColor:"#00776e",color:"white"}},z):z})}(a.label,D):a.label)}),G.length===0&&t.createElement("li",{className:"dropdown__menu-item dropdown__menu-item--disabled"},"No options found"))),X=t.createElement("div",{ref:M,className:"dropdown__menu ".concat(c?"":"dropdown__menu--inline"),style:c?{position:"absolute",top:I.top,left:I.left,width:I.width}:{}},Se),Ee=document.getElementById("dropdown-portal")||document.body;return t.createElement("div",{className:"dropdown",ref:x},t.createElement("button",{type:"button",className:_e,style:H?{backgroundColor:H}:{},onClick:function(){T(function(a){return!a})}},t.createElement("span",null,l?i&&i.length!==0?t.createElement("div",{className:"dropdown__selected-tags ".concat(ve)},i.map(function(a){return t.createElement("div",{key:a.value,className:"dropdown__selected-tag"},a.label,t.createElement("button",{type:"button",className:"dropdown__tag-remove",onClick:function(b){b.stopPropagation(),K(a)}},t.createElement(te,{fill:"#ccc"})))})):w:i?t.createElement("div",{className:"dropdown__selected-tag"},i.label,t.createElement("button",{type:"button",className:"dropdown__tag-remove",onClick:function(a){a.stopPropagation(),K(i)}},t.createElement(te,{fill:"#aaa"}))):w),t.createElement(Ie,{className:"dropdown__icon",isOpen:A})),A&&(c?Fe.createPortal(X,Ee):X))};_.propTypes={options:h.arrayOf(h.shape({value:h.any.isRequired,label:h.string.isRequired})).isRequired,multiple:h.bool,searchable:h.bool,portal:h.bool,renderOption:h.func,placeholder:h.string,onChange:h.func,backgroundColor:h.string};const R=[{value:"apple",label:"Apple",color:"red"},{value:"banana",label:"Banana",color:"yellow"},{value:"orange",label:"Orange",color:"orange"},{value:"grape",label:"Grape",color:"purple"},{value:"mango",label:"Mango",color:"goldenrod"},{value:"pineapple",label:"Pineapple",color:"brown"},{value:"kiwi",label:"Kiwi",color:"green"},{value:"strawberry",label:"Strawberry",color:"crimson"},{value:"blueberry",label:"Blueberry",color:"blue"},{value:"peach",label:"Peach",color:"peachpuff"}],Be={title:"Components/Dropdown",component:_},C=()=>{const[e,n]=u.useState(null);return t.createElement("div",{style:{padding:"20px"}},t.createElement("h2",null,"Single Select"),t.createElement(_,{options:R,placeholder:"Select a fruit",onChange:r=>n(r)}),e&&t.createElement("p",null,t.createElement("strong",null,"Selected:")," ",e.label))},k=()=>{const[e,n]=u.useState([]);return t.createElement("div",{style:{padding:"20px"}},t.createElement("h2",null,"Multiple Select"),t.createElement(_,{options:R,multiple:!0,placeholder:"Select one or more fruits",onChange:r=>n(r)}),e.length>0&&t.createElement("p",null,t.createElement("strong",null,"Selected:")," ",e.map(r=>r.label).join(", ")))},O=()=>{const[e,n]=u.useState(null);return t.createElement("div",{style:{padding:"20px"}},t.createElement("h2",null,"Searchable Dropdown"),t.createElement(_,{options:R,searchable:!0,placeholder:"Search for a fruit",onChange:r=>n(r)}),e&&t.createElement("p",null,t.createElement("strong",null,"Selected:")," ",e.label))},F=()=>{const[e,n]=u.useState(!0),[r,o]=u.useState(null);return t.createElement("div",{style:{padding:"20px"}},t.createElement("h2",null,"Portal Dropdown in Constrained Container"),t.createElement("label",{style:{display:"block",marginBottom:"10px"}},t.createElement("input",{type:"checkbox",checked:e,onChange:()=>n(!e),style:{marginRight:"8px"}}),"Enable Portal"),t.createElement("div",{style:{height:"150px",overflow:"hidden",border:"1px solid #ccc",padding:"10px",position:"relative"}},t.createElement("p",{style:{marginBottom:"10px",fontSize:"0.9rem",color:"#555"}},"This container has overflow hidden. The dropdown below uses a portal to render outside this container."),t.createElement(_,{options:R,portal:e,placeholder:"Select a fruit (portal)",onChange:l=>o(l)})),r&&t.createElement("p",null,t.createElement("strong",null,"Selected:")," ",r.label))},N=()=>{const[e,n]=u.useState(null),r=o=>t.createElement("div",{style:{display:"flex",alignItems:"center"}},t.createElement("div",{style:{width:"12px",height:"12px",borderRadius:"50%",backgroundColor:o.color,marginRight:"8px"}}),t.createElement("span",null,o.label));return t.createElement("div",{style:{padding:"20px"}},t.createElement("h2",null,"Custom Rendered Dropdown"),t.createElement(_,{options:R,placeholder:"Select a fruit with color",renderOption:r,onChange:o=>n(o)}),e&&t.createElement("p",null,t.createElement("strong",null,"Selected:")," ",e.label))};C.__docgenInfo={description:"",methods:[],displayName:"SingleSelect"};k.__docgenInfo={description:"",methods:[],displayName:"MultipleSelect"};O.__docgenInfo={description:"",methods:[],displayName:"SearchableDropdown"};F.__docgenInfo={description:"",methods:[],displayName:"PortalDropdown"};N.__docgenInfo={description:"",methods:[],displayName:"CustomRenderedDropdown"};var re,ne,oe;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const [selectedFruit, setSelectedFruit] = useState(null);
  return <div style={{
    padding: '20px'
  }}>
      <h2>Single Select</h2>
      <Dropdown options={fruitOptions} placeholder="Select a fruit" onChange={option => setSelectedFruit(option)} />
      {selectedFruit && <p>
          <strong>Selected:</strong> {selectedFruit.label}
        </p>}
    </div>;
}`,...(oe=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,ae,ie;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const [selectedFruits, setSelectedFruits] = useState([]);
  return <div style={{
    padding: '20px'
  }}>
      <h2>Multiple Select</h2>
      <Dropdown options={fruitOptions} multiple={true} placeholder="Select one or more fruits" onChange={options => setSelectedFruits(options)} />
      {selectedFruits.length > 0 && <p>
          <strong>Selected:</strong> {selectedFruits.map(opt => opt.label).join(', ')}
        </p>}
    </div>;
}`,...(ie=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var de,ce,se;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const [selectedFruit, setSelectedFruit] = useState(null);
  return <div style={{
    padding: '20px'
  }}>
      <h2>Searchable Dropdown</h2>
      <Dropdown options={fruitOptions} searchable={true} placeholder="Search for a fruit" onChange={option => setSelectedFruit(option)} />
      {selectedFruit && <p>
          <strong>Selected:</strong> {selectedFruit.label}
        </p>}
    </div>;
}`,...(se=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:se.source}}};var ue,pe,me;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [portalEnabled, setPortalEnabled] = useState(true);
  const [selectedFruit, setSelectedFruit] = useState(null);
  return <div style={{
    padding: '20px'
  }}>
      <h2>Portal Dropdown in Constrained Container</h2>
      <label style={{
      display: 'block',
      marginBottom: '10px'
    }}>
        <input type="checkbox" checked={portalEnabled} onChange={() => setPortalEnabled(!portalEnabled)} style={{
        marginRight: '8px'
      }} />
        Enable Portal
      </label>
      <div style={{
      height: '150px',
      overflow: 'hidden',
      border: '1px solid #ccc',
      padding: '10px',
      position: 'relative'
    }}>
        <p style={{
        marginBottom: '10px',
        fontSize: '0.9rem',
        color: '#555'
      }}>
          This container has overflow hidden. The dropdown below uses a portal to render outside
          this container.
        </p>
        <Dropdown options={fruitOptions} portal={portalEnabled} placeholder="Select a fruit (portal)" onChange={option => setSelectedFruit(option)} />
      </div>
      {selectedFruit && <p>
          <strong>Selected:</strong> {selectedFruit.label}
        </p>}
    </div>;
}`,...(me=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,he,ge;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  // A custom option renderer that displays a colored circle alongside the label
  const customRenderOption = option => <div style={{
    display: 'flex',
    alignItems: 'center'
  }}>
      <div style={{
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: option.color,
      marginRight: '8px'
    }} />
      <span>{option.label}</span>
    </div>;
  return <div style={{
    padding: '20px'
  }}>
      <h2>Custom Rendered Dropdown</h2>
      <Dropdown options={fruitOptions} placeholder="Select a fruit with color" renderOption={customRenderOption} onChange={option => setSelectedFruit(option)} />
      {selectedFruit && <p>
          <strong>Selected:</strong> {selectedFruit.label}
        </p>}
    </div>;
}`,...(ge=(he=N.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const ze=["SingleSelect","MultipleSelect","SearchableDropdown","PortalDropdown","CustomRenderedDropdown"];export{N as CustomRenderedDropdown,k as MultipleSelect,F as PortalDropdown,O as SearchableDropdown,C as SingleSelect,ze as __namedExportsOrder,Be as default};
