(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{239:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return l})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return u}));var t=n(2),a=n(6),i=(n(0),n(286)),o={title:"Form / Slider"},l={unversionedId:"examples/slider",id:"examples/slider",isDocsHomePage:!1,title:"Form / Slider",description:"Use a slider to allow users to set a value within a specific range.",source:"@site/docs/examples/slider.md",slug:"/examples/slider",permalink:"/docs/examples/slider",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/slider.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Spinbox",permalink:"/docs/examples/spinbox"},next:{title:"Form / Range Slider",permalink:"/docs/examples/range-slider"}},s=[],c={rightToc:s};function u(e){var r=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,o,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use a slider to allow users to set a value within a specific range."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+n(423).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-py"}),"from h2o_q import Q, listen, ui\n\n\nasync def main(q: Q):\n    if q.args.show_inputs:\n        q.page['example'].items = [\n            ui.text(f'slider={q.args.slider}'),\n            ui.text(f'slider_zero={q.args.slider_zero}'),\n            ui.text(f'slider_disabled={q.args.slider_disabled}'),\n            ui.button(name='show_form', label='Back', primary=True),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.slider(name='slider', label='Standard slider', min=0, max=100, step=10, value=30),\n            ui.slider(name='slider_zero', label='Origin from zero', min=-10, max=10, step=1, value=-3),\n            ui.slider(name='slider_disabled', label='Disabled slider', min=0, max=100, step=10, value=30,\n                      disabled=True),\n            ui.button(name='show_inputs', label='Submit', primary=True),\n        ])\n    await q.page.save()\n\n\nif __name__ == '__main__':\n    listen('/demo', main)\n")))}u.isMDXComponent=!0},286:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return f}));var t=n(0),a=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var r=a.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=u(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=t,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.a.createElement(f,l(l({ref:r},c),{},{components:n})):a.a.createElement(f,l({ref:r},c))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},423:function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/images/slider-06551b8ad6f45a0aa69c946c5d8332d1.png"}}]);