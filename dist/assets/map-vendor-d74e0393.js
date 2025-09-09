import{e as commonjsGlobal,r as reactExports}from"./react-vendor-7917a9ce.js";var dist={exports:{}},jquery={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var hasRequiredJquery;function requireJquery(){return hasRequiredJquery||(hasRequiredJquery=1,function(V){(function(x,Q){V.exports=x.document?Q(x,!0):function(F){if(!F.document)throw new Error("jQuery requires a window with a document");return Q(F)}})(typeof window<"u"?window:commonjsGlobal,function(x,Q){var F=[],Pl=Object.getPrototypeOf,le=F.slice,ql=F.flat?function(e){return F.flat.call(e)}:function(e){return F.concat.apply([],e)},$e=F.push,fe=F.indexOf,el={},Ul=el.toString,Ne=el.hasOwnProperty,Nl=Ne.toString,Dn=Nl.call(Object),B={},I=function(l){return typeof l=="function"&&typeof l.nodeType!="number"&&typeof l.item!="function"},Se=function(l){return l!=null&&l===l.window},D=x.document,Bn={type:!0,src:!0,nonce:!0,noModule:!0};function Wl(e,l,n){n=n||D;var t,a,i=n.createElement("script");if(i.text=e,l)for(t in Bn)a=l[t]||l.getAttribute&&l.getAttribute(t),a&&i.setAttribute(t,a);n.head.appendChild(i).parentNode.removeChild(i)}function je(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?el[Ul.call(e)]||"object":typeof e}var Kl="3.7.1",In=/HTML$/i,r=function(e,l){return new r.fn.init(e,l)};r.fn=r.prototype={jquery:Kl,constructor:r,length:0,toArray:function(){return le.call(this)},get:function(e){return e==null?le.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var l=r.merge(this.constructor(),e);return l.prevObject=this,l},each:function(e){return r.each(this,e)},map:function(e){return this.pushStack(r.map(this,function(l,n){return e.call(l,n,l)}))},slice:function(){return this.pushStack(le.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(r.grep(this,function(e,l){return(l+1)%2}))},odd:function(){return this.pushStack(r.grep(this,function(e,l){return l%2}))},eq:function(e){var l=this.length,n=+e+(e<0?l:0);return this.pushStack(n>=0&&n<l?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:$e,sort:F.sort,splice:F.splice},r.extend=r.fn.extend=function(){var e,l,n,t,a,i,s=arguments[0]||{},c=1,u=arguments.length,d=!1;for(typeof s=="boolean"&&(d=s,s=arguments[c]||{},c++),typeof s!="object"&&!I(s)&&(s={}),c===u&&(s=this,c--);c<u;c++)if((e=arguments[c])!=null)for(l in e)t=e[l],!(l==="__proto__"||s===t)&&(d&&t&&(r.isPlainObject(t)||(a=Array.isArray(t)))?(n=s[l],a&&!Array.isArray(n)?i=[]:!a&&!r.isPlainObject(n)?i={}:i=n,a=!1,s[l]=r.extend(d,i,t)):t!==void 0&&(s[l]=t));return s},r.extend({expando:"jQuery"+(Kl+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var l,n;return!e||Ul.call(e)!=="[object Object]"?!1:(l=Pl(e),l?(n=Ne.call(l,"constructor")&&l.constructor,typeof n=="function"&&Nl.call(n)===Dn):!0)},isEmptyObject:function(e){var l;for(l in e)return!1;return!0},globalEval:function(e,l,n){Wl(e,{nonce:l&&l.nonce},n)},each:function(e,l){var n,t=0;if(dl(e))for(n=e.length;t<n&&l.call(e[t],t,e[t])!==!1;t++);else for(t in e)if(l.call(e[t],t,e[t])===!1)break;return e},text:function(e){var l,n="",t=0,a=e.nodeType;if(!a)for(;l=e[t++];)n+=r.text(l);return a===1||a===11?e.textContent:a===9?e.documentElement.textContent:a===3||a===4?e.nodeValue:n},makeArray:function(e,l){var n=l||[];return e!=null&&(dl(Object(e))?r.merge(n,typeof e=="string"?[e]:e):$e.call(n,e)),n},inArray:function(e,l,n){return l==null?-1:fe.call(l,e,n)},isXMLDoc:function(e){var l=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!In.test(l||n&&n.nodeName||"HTML")},merge:function(e,l){for(var n=+l.length,t=0,a=e.length;t<n;t++)e[a++]=l[t];return e.length=a,e},grep:function(e,l,n){for(var t,a=[],i=0,s=e.length,c=!n;i<s;i++)t=!l(e[i],i),t!==c&&a.push(e[i]);return a},map:function(e,l,n){var t,a,i=0,s=[];if(dl(e))for(t=e.length;i<t;i++)a=l(e[i],i,n),a!=null&&s.push(a);else for(i in e)a=l(e[i],i,n),a!=null&&s.push(a);return ql(s)},guid:1,support:B}),typeof Symbol=="function"&&(r.fn[Symbol.iterator]=F[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,l){el["[object "+l+"]"]=l.toLowerCase()});function dl(e){var l=!!e&&"length"in e&&e.length,n=je(e);return I(e)||Se(e)?!1:n==="array"||l===0||typeof l=="number"&&l>0&&l-1 in e}function K(e,l){return e.nodeName&&e.nodeName.toLowerCase()===l.toLowerCase()}var Tn=F.pop,Ln=F.sort,On=F.splice,N="[\\x20\\t\\r\\n\\f]",We=new RegExp("^"+N+"+|((?:^|[^\\\\])(?:\\\\.)*)"+N+"+$","g");r.contains=function(e,l){var n=l&&l.parentNode;return e===n||!!(n&&n.nodeType===1&&(e.contains?e.contains(n):e.compareDocumentPosition&&e.compareDocumentPosition(n)&16))};var Rn=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Pn(e,l){return l?e==="\0"?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}r.escapeSelector=function(e){return(e+"").replace(Rn,Pn)};var me=D,hl=$e;(function(){var e,l,n,t,a,i=hl,s,c,u,d,_,A=r.expando,f=0,v=0,S=ol(),P=ol(),T=ol(),G=ol(),H=function(o,p){return o===p&&(a=!0),0},ue="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ce="(?:\\\\[\\da-fA-F]{1,6}"+N+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",R="\\["+N+"*("+ce+")(?:"+N+"*([*^$|!~]?=)"+N+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ce+"))|)"+N+"*\\]",ke=":("+ce+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+R+")*)|.*)\\)|)",q=new RegExp(N+"+","g"),Z=new RegExp("^"+N+"*,"+N+"*"),Ye=new RegExp("^"+N+"*([>+~]|"+N+")"+N+"*"),Dl=new RegExp(N+"|>"),pe=new RegExp(ke),ze=new RegExp("^"+ce+"$"),de={ID:new RegExp("^#("+ce+")"),CLASS:new RegExp("^\\.("+ce+")"),TAG:new RegExp("^("+ce+"|[*])"),ATTR:new RegExp("^"+R),PSEUDO:new RegExp("^"+ke),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+N+"*(even|odd|(([+-]|)(\\d*)n|)"+N+"*(?:([+-]|)"+N+"*(\\d+)|))"+N+"*\\)|)","i"),bool:new RegExp("^(?:"+ue+")$","i"),needsContext:new RegExp("^"+N+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+N+"*((?:-\\d)?\\d*)"+N+"*\\)|)(?=[^-]|$)","i")},ye=/^(?:input|select|textarea|button)$/i,be=/^h\d$/i,te=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Bl=/[+~]/,Ae=new RegExp("\\\\[\\da-fA-F]{1,6}"+N+"?|\\\\([^\\r\\n\\f])","g"),ve=function(o,p){var h="0x"+o.slice(1)-65536;return p||(h<0?String.fromCharCode(h+65536):String.fromCharCode(h>>10|55296,h&1023|56320))},It=function(){Me()},Tt=cl(function(o){return o.disabled===!0&&K(o,"fieldset")},{dir:"parentNode",next:"legend"});function Lt(){try{return s.activeElement}catch{}}try{i.apply(F=le.call(me.childNodes),me.childNodes),F[me.childNodes.length].nodeType}catch{i={apply:function(p,h){hl.apply(p,le.call(h))},call:function(p){hl.apply(p,le.call(arguments,1))}}}function U(o,p,h,m){var g,y,b,E,M,L,C,j=p&&p.ownerDocument,O=p?p.nodeType:9;if(h=h||[],typeof o!="string"||!o||O!==1&&O!==9&&O!==11)return h;if(!m&&(Me(p),p=p||s,u)){if(O!==11&&(M=te.exec(o)))if(g=M[1]){if(O===9)if(b=p.getElementById(g)){if(b.id===g)return i.call(h,b),h}else return h;else if(j&&(b=j.getElementById(g))&&U.contains(p,b)&&b.id===g)return i.call(h,b),h}else{if(M[2])return i.apply(h,p.getElementsByTagName(o)),h;if((g=M[3])&&p.getElementsByClassName)return i.apply(h,p.getElementsByClassName(g)),h}if(!G[o+" "]&&(!d||!d.test(o))){if(C=o,j=p,O===1&&(Dl.test(o)||Ye.test(o))){for(j=Bl.test(o)&&Il(p.parentNode)||p,(j!=p||!B.scope)&&((E=p.getAttribute("id"))?E=r.escapeSelector(E):p.setAttribute("id",E=A)),L=Xe(o),y=L.length;y--;)L[y]=(E?"#"+E:":scope")+" "+ul(L[y]);C=L.join(",")}try{return i.apply(h,j.querySelectorAll(C)),h}catch{G(o,!0)}finally{E===A&&p.removeAttribute("id")}}}return jn(o.replace(We,"$1"),p,h,m)}function ol(){var o=[];function p(h,m){return o.push(h+" ")>l.cacheLength&&delete p[o.shift()],p[h+" "]=m}return p}function ie(o){return o[A]=!0,o}function qe(o){var p=s.createElement("fieldset");try{return!!o(p)}catch{return!1}finally{p.parentNode&&p.parentNode.removeChild(p),p=null}}function Ot(o){return function(p){return K(p,"input")&&p.type===o}}function Rt(o){return function(p){return(K(p,"input")||K(p,"button"))&&p.type===o}}function Cn(o){return function(p){return"form"in p?p.parentNode&&p.disabled===!1?"label"in p?"label"in p.parentNode?p.parentNode.disabled===o:p.disabled===o:p.isDisabled===o||p.isDisabled!==!o&&Tt(p)===o:p.disabled===o:"label"in p?p.disabled===o:!1}}function Ce(o){return ie(function(p){return p=+p,ie(function(h,m){for(var g,y=o([],h.length,p),b=y.length;b--;)h[g=y[b]]&&(h[g]=!(m[g]=h[g]))})})}function Il(o){return o&&typeof o.getElementsByTagName<"u"&&o}function Me(o){var p,h=o?o.ownerDocument||o:me;return h==s||h.nodeType!==9||!h.documentElement||(s=h,c=s.documentElement,u=!r.isXMLDoc(s),_=c.matches||c.webkitMatchesSelector||c.msMatchesSelector,c.msMatchesSelector&&me!=s&&(p=s.defaultView)&&p.top!==p&&p.addEventListener("unload",It),B.getById=qe(function(m){return c.appendChild(m).id=r.expando,!s.getElementsByName||!s.getElementsByName(r.expando).length}),B.disconnectedMatch=qe(function(m){return _.call(m,"*")}),B.scope=qe(function(){return s.querySelectorAll(":scope")}),B.cssHas=qe(function(){try{return s.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),B.getById?(l.filter.ID=function(m){var g=m.replace(Ae,ve);return function(y){return y.getAttribute("id")===g}},l.find.ID=function(m,g){if(typeof g.getElementById<"u"&&u){var y=g.getElementById(m);return y?[y]:[]}}):(l.filter.ID=function(m){var g=m.replace(Ae,ve);return function(y){var b=typeof y.getAttributeNode<"u"&&y.getAttributeNode("id");return b&&b.value===g}},l.find.ID=function(m,g){if(typeof g.getElementById<"u"&&u){var y,b,E,M=g.getElementById(m);if(M){if(y=M.getAttributeNode("id"),y&&y.value===m)return[M];for(E=g.getElementsByName(m),b=0;M=E[b++];)if(y=M.getAttributeNode("id"),y&&y.value===m)return[M]}return[]}}),l.find.TAG=function(m,g){return typeof g.getElementsByTagName<"u"?g.getElementsByTagName(m):g.querySelectorAll(m)},l.find.CLASS=function(m,g){if(typeof g.getElementsByClassName<"u"&&u)return g.getElementsByClassName(m)},d=[],qe(function(m){var g;c.appendChild(m).innerHTML="<a id='"+A+"' href='' disabled='disabled'></a><select id='"+A+"-\r\\' disabled='disabled'><option selected=''></option></select>",m.querySelectorAll("[selected]").length||d.push("\\["+N+"*(?:value|"+ue+")"),m.querySelectorAll("[id~="+A+"-]").length||d.push("~="),m.querySelectorAll("a#"+A+"+*").length||d.push(".#.+[+~]"),m.querySelectorAll(":checked").length||d.push(":checked"),g=s.createElement("input"),g.setAttribute("type","hidden"),m.appendChild(g).setAttribute("name","D"),c.appendChild(m).disabled=!0,m.querySelectorAll(":disabled").length!==2&&d.push(":enabled",":disabled"),g=s.createElement("input"),g.setAttribute("name",""),m.appendChild(g),m.querySelectorAll("[name='']").length||d.push("\\["+N+"*name"+N+"*="+N+`*(?:''|"")`)}),B.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),H=function(m,g){if(m===g)return a=!0,0;var y=!m.compareDocumentPosition-!g.compareDocumentPosition;return y||(y=(m.ownerDocument||m)==(g.ownerDocument||g)?m.compareDocumentPosition(g):1,y&1||!B.sortDetached&&g.compareDocumentPosition(m)===y?m===s||m.ownerDocument==me&&U.contains(me,m)?-1:g===s||g.ownerDocument==me&&U.contains(me,g)?1:t?fe.call(t,m)-fe.call(t,g):0:y&4?-1:1)}),s}U.matches=function(o,p){return U(o,null,null,p)},U.matchesSelector=function(o,p){if(Me(o),u&&!G[p+" "]&&(!d||!d.test(p)))try{var h=_.call(o,p);if(h||B.disconnectedMatch||o.document&&o.document.nodeType!==11)return h}catch{G(p,!0)}return U(p,s,null,[o]).length>0},U.contains=function(o,p){return(o.ownerDocument||o)!=s&&Me(o),r.contains(o,p)},U.attr=function(o,p){(o.ownerDocument||o)!=s&&Me(o);var h=l.attrHandle[p.toLowerCase()],m=h&&Ne.call(l.attrHandle,p.toLowerCase())?h(o,p,!u):void 0;return m!==void 0?m:o.getAttribute(p)},U.error=function(o){throw new Error("Syntax error, unrecognized expression: "+o)},r.uniqueSort=function(o){var p,h=[],m=0,g=0;if(a=!B.sortStable,t=!B.sortStable&&le.call(o,0),Ln.call(o,H),a){for(;p=o[g++];)p===o[g]&&(m=h.push(g));for(;m--;)On.call(o,h[m],1)}return t=null,o},r.fn.uniqueSort=function(){return this.pushStack(r.uniqueSort(le.apply(this)))},l=r.expr={cacheLength:50,createPseudo:ie,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(o){return o[1]=o[1].replace(Ae,ve),o[3]=(o[3]||o[4]||o[5]||"").replace(Ae,ve),o[2]==="~="&&(o[3]=" "+o[3]+" "),o.slice(0,4)},CHILD:function(o){return o[1]=o[1].toLowerCase(),o[1].slice(0,3)==="nth"?(o[3]||U.error(o[0]),o[4]=+(o[4]?o[5]+(o[6]||1):2*(o[3]==="even"||o[3]==="odd")),o[5]=+(o[7]+o[8]||o[3]==="odd")):o[3]&&U.error(o[0]),o},PSEUDO:function(o){var p,h=!o[6]&&o[2];return de.CHILD.test(o[0])?null:(o[3]?o[2]=o[4]||o[5]||"":h&&pe.test(h)&&(p=Xe(h,!0))&&(p=h.indexOf(")",h.length-p)-h.length)&&(o[0]=o[0].slice(0,p),o[2]=h.slice(0,p)),o.slice(0,3))}},filter:{TAG:function(o){var p=o.replace(Ae,ve).toLowerCase();return o==="*"?function(){return!0}:function(h){return K(h,p)}},CLASS:function(o){var p=S[o+" "];return p||(p=new RegExp("(^|"+N+")"+o+"("+N+"|$)"))&&S(o,function(h){return p.test(typeof h.className=="string"&&h.className||typeof h.getAttribute<"u"&&h.getAttribute("class")||"")})},ATTR:function(o,p,h){return function(m){var g=U.attr(m,o);return g==null?p==="!=":p?(g+="",p==="="?g===h:p==="!="?g!==h:p==="^="?h&&g.indexOf(h)===0:p==="*="?h&&g.indexOf(h)>-1:p==="$="?h&&g.slice(-h.length)===h:p==="~="?(" "+g.replace(q," ")+" ").indexOf(h)>-1:p==="|="?g===h||g.slice(0,h.length+1)===h+"-":!1):!0}},CHILD:function(o,p,h,m,g){var y=o.slice(0,3)!=="nth",b=o.slice(-4)!=="last",E=p==="of-type";return m===1&&g===0?function(M){return!!M.parentNode}:function(M,L,C){var j,O,k,W,ee,J=y!==b?"nextSibling":"previousSibling",re=M.parentNode,he=E&&M.nodeName.toLowerCase(),Ue=!C&&!E,Y=!1;if(re){if(y){for(;J;){for(k=M;k=k[J];)if(E?K(k,he):k.nodeType===1)return!1;ee=J=o==="only"&&!ee&&"nextSibling"}return!0}if(ee=[b?re.firstChild:re.lastChild],b&&Ue){for(O=re[A]||(re[A]={}),j=O[o]||[],W=j[0]===f&&j[1],Y=W&&j[2],k=W&&re.childNodes[W];k=++W&&k&&k[J]||(Y=W=0)||ee.pop();)if(k.nodeType===1&&++Y&&k===M){O[o]=[f,W,Y];break}}else if(Ue&&(O=M[A]||(M[A]={}),j=O[o]||[],W=j[0]===f&&j[1],Y=W),Y===!1)for(;(k=++W&&k&&k[J]||(Y=W=0)||ee.pop())&&!((E?K(k,he):k.nodeType===1)&&++Y&&(Ue&&(O=k[A]||(k[A]={}),O[o]=[f,Y]),k===M)););return Y-=g,Y===m||Y%m===0&&Y/m>=0}}},PSEUDO:function(o,p){var h,m=l.pseudos[o]||l.setFilters[o.toLowerCase()]||U.error("unsupported pseudo: "+o);return m[A]?m(p):m.length>1?(h=[o,o,"",p],l.setFilters.hasOwnProperty(o.toLowerCase())?ie(function(g,y){for(var b,E=m(g,p),M=E.length;M--;)b=fe.call(g,E[M]),g[b]=!(y[b]=E[M])}):function(g){return m(g,0,h)}):m}},pseudos:{not:ie(function(o){var p=[],h=[],m=Rl(o.replace(We,"$1"));return m[A]?ie(function(g,y,b,E){for(var M,L=m(g,null,E,[]),C=g.length;C--;)(M=L[C])&&(g[C]=!(y[C]=M))}):function(g,y,b){return p[0]=g,m(p,null,b,h),p[0]=null,!h.pop()}}),has:ie(function(o){return function(p){return U(o,p).length>0}}),contains:ie(function(o){return o=o.replace(Ae,ve),function(p){return(p.textContent||r.text(p)).indexOf(o)>-1}}),lang:ie(function(o){return ze.test(o||"")||U.error("unsupported lang: "+o),o=o.replace(Ae,ve).toLowerCase(),function(p){var h;do if(h=u?p.lang:p.getAttribute("xml:lang")||p.getAttribute("lang"))return h=h.toLowerCase(),h===o||h.indexOf(o+"-")===0;while((p=p.parentNode)&&p.nodeType===1);return!1}}),target:function(o){var p=x.location&&x.location.hash;return p&&p.slice(1)===o.id},root:function(o){return o===c},focus:function(o){return o===Lt()&&s.hasFocus()&&!!(o.type||o.href||~o.tabIndex)},enabled:Cn(!1),disabled:Cn(!0),checked:function(o){return K(o,"input")&&!!o.checked||K(o,"option")&&!!o.selected},selected:function(o){return o.parentNode&&o.parentNode.selectedIndex,o.selected===!0},empty:function(o){for(o=o.firstChild;o;o=o.nextSibling)if(o.nodeType<6)return!1;return!0},parent:function(o){return!l.pseudos.empty(o)},header:function(o){return be.test(o.nodeName)},input:function(o){return ye.test(o.nodeName)},button:function(o){return K(o,"input")&&o.type==="button"||K(o,"button")},text:function(o){var p;return K(o,"input")&&o.type==="text"&&((p=o.getAttribute("type"))==null||p.toLowerCase()==="text")},first:Ce(function(){return[0]}),last:Ce(function(o,p){return[p-1]}),eq:Ce(function(o,p,h){return[h<0?h+p:h]}),even:Ce(function(o,p){for(var h=0;h<p;h+=2)o.push(h);return o}),odd:Ce(function(o,p){for(var h=1;h<p;h+=2)o.push(h);return o}),lt:Ce(function(o,p,h){var m;for(h<0?m=h+p:h>p?m=p:m=h;--m>=0;)o.push(m);return o}),gt:Ce(function(o,p,h){for(var m=h<0?h+p:h;++m<p;)o.push(m);return o})}},l.pseudos.nth=l.pseudos.eq;for(e in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})l.pseudos[e]=Ot(e);for(e in{submit:!0,reset:!0})l.pseudos[e]=Rt(e);function Sn(){}Sn.prototype=l.filters=l.pseudos,l.setFilters=new Sn;function Xe(o,p){var h,m,g,y,b,E,M,L=P[o+" "];if(L)return p?0:L.slice(0);for(b=o,E=[],M=l.preFilter;b;){(!h||(m=Z.exec(b)))&&(m&&(b=b.slice(m[0].length)||b),E.push(g=[])),h=!1,(m=Ye.exec(b))&&(h=m.shift(),g.push({value:h,type:m[0].replace(We," ")}),b=b.slice(h.length));for(y in l.filter)(m=de[y].exec(b))&&(!M[y]||(m=M[y](m)))&&(h=m.shift(),g.push({value:h,type:y,matches:m}),b=b.slice(h.length));if(!h)break}return p?b.length:b?U.error(o):P(o,E).slice(0)}function ul(o){for(var p=0,h=o.length,m="";p<h;p++)m+=o[p].value;return m}function cl(o,p,h){var m=p.dir,g=p.next,y=g||m,b=h&&y==="parentNode",E=v++;return p.first?function(M,L,C){for(;M=M[m];)if(M.nodeType===1||b)return o(M,L,C);return!1}:function(M,L,C){var j,O,k=[f,E];if(C){for(;M=M[m];)if((M.nodeType===1||b)&&o(M,L,C))return!0}else for(;M=M[m];)if(M.nodeType===1||b)if(O=M[A]||(M[A]={}),g&&K(M,g))M=M[m]||M;else{if((j=O[y])&&j[0]===f&&j[1]===E)return k[2]=j[2];if(O[y]=k,k[2]=o(M,L,C))return!0}return!1}}function Tl(o){return o.length>1?function(p,h,m){for(var g=o.length;g--;)if(!o[g](p,h,m))return!1;return!0}:o[0]}function Pt(o,p,h){for(var m=0,g=p.length;m<g;m++)U(o,p[m],h);return h}function pl(o,p,h,m,g){for(var y,b=[],E=0,M=o.length,L=p!=null;E<M;E++)(y=o[E])&&(!h||h(y,m,g))&&(b.push(y),L&&p.push(E));return b}function Ll(o,p,h,m,g,y){return m&&!m[A]&&(m=Ll(m)),g&&!g[A]&&(g=Ll(g,y)),ie(function(b,E,M,L){var C,j,O,k,W=[],ee=[],J=E.length,re=b||Pt(p||"*",M.nodeType?[M]:M,[]),he=o&&(b||!p)?pl(re,W,o,M,L):re;if(h?(k=g||(b?o:J||m)?[]:E,h(he,k,M,L)):k=he,m)for(C=pl(k,ee),m(C,[],M,L),j=C.length;j--;)(O=C[j])&&(k[ee[j]]=!(he[ee[j]]=O));if(b){if(g||o){if(g){for(C=[],j=k.length;j--;)(O=k[j])&&C.push(he[j]=O);g(null,k=[],C,L)}for(j=k.length;j--;)(O=k[j])&&(C=g?fe.call(b,O):W[j])>-1&&(b[C]=!(E[C]=O))}}else k=pl(k===E?k.splice(J,k.length):k),g?g(null,E,k,L):i.apply(E,k)})}function Ol(o){for(var p,h,m,g=o.length,y=l.relative[o[0].type],b=y||l.relative[" "],E=y?1:0,M=cl(function(j){return j===p},b,!0),L=cl(function(j){return fe.call(p,j)>-1},b,!0),C=[function(j,O,k){var W=!y&&(k||O!=n)||((p=O).nodeType?M(j,O,k):L(j,O,k));return p=null,W}];E<g;E++)if(h=l.relative[o[E].type])C=[cl(Tl(C),h)];else{if(h=l.filter[o[E].type].apply(null,o[E].matches),h[A]){for(m=++E;m<g&&!l.relative[o[m].type];m++);return Ll(E>1&&Tl(C),E>1&&ul(o.slice(0,E-1).concat({value:o[E-2].type===" "?"*":""})).replace(We,"$1"),h,E<m&&Ol(o.slice(E,m)),m<g&&Ol(o=o.slice(m)),m<g&&ul(o))}C.push(h)}return Tl(C)}function qt(o,p){var h=p.length>0,m=o.length>0,g=function(y,b,E,M,L){var C,j,O,k=0,W="0",ee=y&&[],J=[],re=n,he=y||m&&l.find.TAG("*",L),Ue=f+=re==null?1:Math.random()||.1,Y=he.length;for(L&&(n=b==s||b||L);W!==Y&&(C=he[W])!=null;W++){if(m&&C){for(j=0,!b&&C.ownerDocument!=s&&(Me(C),E=!u);O=o[j++];)if(O(C,b||s,E)){i.call(M,C);break}L&&(f=Ue)}h&&((C=!O&&C)&&k--,y&&ee.push(C))}if(k+=W,h&&W!==k){for(j=0;O=p[j++];)O(ee,J,b,E);if(y){if(k>0)for(;W--;)ee[W]||J[W]||(J[W]=Tn.call(M));J=pl(J)}i.apply(M,J),L&&!y&&J.length>0&&k+p.length>1&&r.uniqueSort(M)}return L&&(f=Ue,n=re),ee};return h?ie(g):g}function Rl(o,p){var h,m=[],g=[],y=T[o+" "];if(!y){for(p||(p=Xe(o)),h=p.length;h--;)y=Ol(p[h]),y[A]?m.push(y):g.push(y);y=T(o,qt(g,m)),y.selector=o}return y}function jn(o,p,h,m){var g,y,b,E,M,L=typeof o=="function"&&o,C=!m&&Xe(o=L.selector||o);if(h=h||[],C.length===1){if(y=C[0]=C[0].slice(0),y.length>2&&(b=y[0]).type==="ID"&&p.nodeType===9&&u&&l.relative[y[1].type]){if(p=(l.find.ID(b.matches[0].replace(Ae,ve),p)||[])[0],p)L&&(p=p.parentNode);else return h;o=o.slice(y.shift().value.length)}for(g=de.needsContext.test(o)?0:y.length;g--&&(b=y[g],!l.relative[E=b.type]);)if((M=l.find[E])&&(m=M(b.matches[0].replace(Ae,ve),Bl.test(y[0].type)&&Il(p.parentNode)||p))){if(y.splice(g,1),o=m.length&&ul(y),!o)return i.apply(h,m),h;break}}return(L||Rl(o,C))(m,p,!u,h,!p||Bl.test(o)&&Il(p.parentNode)||p),h}B.sortStable=A.split("").sort(H).join("")===A,Me(),B.sortDetached=qe(function(o){return o.compareDocumentPosition(s.createElement("fieldset"))&1}),r.find=U,r.expr[":"]=r.expr.pseudos,r.unique=r.uniqueSort,U.compile=Rl,U.select=jn,U.setDocument=Me,U.tokenize=Xe,U.escape=r.escapeSelector,U.getText=r.text,U.isXML=r.isXMLDoc,U.selectors=r.expr,U.support=r.support,U.uniqueSort=r.uniqueSort})();var De=function(e,l,n){for(var t=[],a=n!==void 0;(e=e[l])&&e.nodeType!==9;)if(e.nodeType===1){if(a&&r(e).is(n))break;t.push(e)}return t},Vl=function(e,l){for(var n=[];e;e=e.nextSibling)e.nodeType===1&&e!==l&&n.push(e);return n},Zl=r.expr.match.needsContext,Hl=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function fl(e,l,n){return I(l)?r.grep(e,function(t,a){return!!l.call(t,a,t)!==n}):l.nodeType?r.grep(e,function(t){return t===l!==n}):typeof l!="string"?r.grep(e,function(t){return fe.call(l,t)>-1!==n}):r.filter(l,e,n)}r.filter=function(e,l,n){var t=l[0];return n&&(e=":not("+e+")"),l.length===1&&t.nodeType===1?r.find.matchesSelector(t,e)?[t]:[]:r.find.matches(e,r.grep(l,function(a){return a.nodeType===1}))},r.fn.extend({find:function(e){var l,n,t=this.length,a=this;if(typeof e!="string")return this.pushStack(r(e).filter(function(){for(l=0;l<t;l++)if(r.contains(a[l],this))return!0}));for(n=this.pushStack([]),l=0;l<t;l++)r.find(e,a[l],n);return t>1?r.uniqueSort(n):n},filter:function(e){return this.pushStack(fl(this,e||[],!1))},not:function(e){return this.pushStack(fl(this,e||[],!0))},is:function(e){return!!fl(this,typeof e=="string"&&Zl.test(e)?r(e):e||[],!1).length}});var Fl,qn=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Un=r.fn.init=function(e,l,n){var t,a;if(!e)return this;if(n=n||Fl,typeof e=="string")if(e[0]==="<"&&e[e.length-1]===">"&&e.length>=3?t=[null,e,null]:t=qn.exec(e),t&&(t[1]||!l))if(t[1]){if(l=l instanceof r?l[0]:l,r.merge(this,r.parseHTML(t[1],l&&l.nodeType?l.ownerDocument||l:D,!0)),Hl.test(t[1])&&r.isPlainObject(l))for(t in l)I(this[t])?this[t](l[t]):this.attr(t,l[t]);return this}else return a=D.getElementById(t[2]),a&&(this[0]=a,this.length=1),this;else return!l||l.jquery?(l||n).find(e):this.constructor(l).find(e);else{if(e.nodeType)return this[0]=e,this.length=1,this;if(I(e))return n.ready!==void 0?n.ready(e):e(r)}return r.makeArray(e,this)};Un.prototype=r.fn,Fl=r(D);var Nn=/^(?:parents|prev(?:Until|All))/,Wn={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(e){var l=r(e,this),n=l.length;return this.filter(function(){for(var t=0;t<n;t++)if(r.contains(this,l[t]))return!0})},closest:function(e,l){var n,t=0,a=this.length,i=[],s=typeof e!="string"&&r(e);if(!Zl.test(e)){for(;t<a;t++)for(n=this[t];n&&n!==l;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:n.nodeType===1&&r.find.matchesSelector(n,e))){i.push(n);break}}return this.pushStack(i.length>1?r.uniqueSort(i):i)},index:function(e){return e?typeof e=="string"?fe.call(r(e),this[0]):fe.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,l){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(e,l))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});function Gl(e,l){for(;(e=e[l])&&e.nodeType!==1;);return e}r.each({parent:function(e){var l=e.parentNode;return l&&l.nodeType!==11?l:null},parents:function(e){return De(e,"parentNode")},parentsUntil:function(e,l,n){return De(e,"parentNode",n)},next:function(e){return Gl(e,"nextSibling")},prev:function(e){return Gl(e,"previousSibling")},nextAll:function(e){return De(e,"nextSibling")},prevAll:function(e){return De(e,"previousSibling")},nextUntil:function(e,l,n){return De(e,"nextSibling",n)},prevUntil:function(e,l,n){return De(e,"previousSibling",n)},siblings:function(e){return Vl((e.parentNode||{}).firstChild,e)},children:function(e){return Vl(e.firstChild)},contents:function(e){return e.contentDocument!=null&&Pl(e.contentDocument)?e.contentDocument:(K(e,"template")&&(e=e.content||e),r.merge([],e.childNodes))}},function(e,l){r.fn[e]=function(n,t){var a=r.map(this,l,n);return e.slice(-5)!=="Until"&&(t=n),t&&typeof t=="string"&&(a=r.filter(t,a)),this.length>1&&(Wn[e]||r.uniqueSort(a),Nn.test(e)&&a.reverse()),this.pushStack(a)}});var se=/[^\x20\t\r\n\f]+/g;function Kn(e){var l={};return r.each(e.match(se)||[],function(n,t){l[t]=!0}),l}r.Callbacks=function(e){e=typeof e=="string"?Kn(e):r.extend({},e);var l,n,t,a,i=[],s=[],c=-1,u=function(){for(a=a||e.once,t=l=!0;s.length;c=-1)for(n=s.shift();++c<i.length;)i[c].apply(n[0],n[1])===!1&&e.stopOnFalse&&(c=i.length,n=!1);e.memory||(n=!1),l=!1,a&&(n?i=[]:i="")},d={add:function(){return i&&(n&&!l&&(c=i.length-1,s.push(n)),function _(A){r.each(A,function(f,v){I(v)?(!e.unique||!d.has(v))&&i.push(v):v&&v.length&&je(v)!=="string"&&_(v)})}(arguments),n&&!l&&u()),this},remove:function(){return r.each(arguments,function(_,A){for(var f;(f=r.inArray(A,i,f))>-1;)i.splice(f,1),f<=c&&c--}),this},has:function(_){return _?r.inArray(_,i)>-1:i.length>0},empty:function(){return i&&(i=[]),this},disable:function(){return a=s=[],i=n="",this},disabled:function(){return!i},lock:function(){return a=s=[],!n&&!l&&(i=n=""),this},locked:function(){return!!a},fireWith:function(_,A){return a||(A=A||[],A=[_,A.slice?A.slice():A],s.push(A),l||u()),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!t}};return d};function Be(e){return e}function ll(e){throw e}function Jl(e,l,n,t){var a;try{e&&I(a=e.promise)?a.call(e).done(l).fail(n):e&&I(a=e.then)?a.call(e,l,n):l.apply(void 0,[e].slice(t))}catch(i){n.apply(void 0,[i])}}r.extend({Deferred:function(e){var l=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],n="pending",t={state:function(){return n},always:function(){return a.done(arguments).fail(arguments),this},catch:function(i){return t.then(null,i)},pipe:function(){var i=arguments;return r.Deferred(function(s){r.each(l,function(c,u){var d=I(i[u[4]])&&i[u[4]];a[u[1]](function(){var _=d&&d.apply(this,arguments);_&&I(_.promise)?_.promise().progress(s.notify).done(s.resolve).fail(s.reject):s[u[0]+"With"](this,d?[_]:arguments)})}),i=null}).promise()},then:function(i,s,c){var u=0;function d(_,A,f,v){return function(){var S=this,P=arguments,T=function(){var H,ue;if(!(_<u)){if(H=f.apply(S,P),H===A.promise())throw new TypeError("Thenable self-resolution");ue=H&&(typeof H=="object"||typeof H=="function")&&H.then,I(ue)?v?ue.call(H,d(u,A,Be,v),d(u,A,ll,v)):(u++,ue.call(H,d(u,A,Be,v),d(u,A,ll,v),d(u,A,Be,A.notifyWith))):(f!==Be&&(S=void 0,P=[H]),(v||A.resolveWith)(S,P))}},G=v?T:function(){try{T()}catch(H){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(H,G.error),_+1>=u&&(f!==ll&&(S=void 0,P=[H]),A.rejectWith(S,P))}};_?G():(r.Deferred.getErrorHook?G.error=r.Deferred.getErrorHook():r.Deferred.getStackHook&&(G.error=r.Deferred.getStackHook()),x.setTimeout(G))}}return r.Deferred(function(_){l[0][3].add(d(0,_,I(c)?c:Be,_.notifyWith)),l[1][3].add(d(0,_,I(i)?i:Be)),l[2][3].add(d(0,_,I(s)?s:ll))}).promise()},promise:function(i){return i!=null?r.extend(i,t):t}},a={};return r.each(l,function(i,s){var c=s[2],u=s[5];t[s[1]]=c.add,u&&c.add(function(){n=u},l[3-i][2].disable,l[3-i][3].disable,l[0][2].lock,l[0][3].lock),c.add(s[3].fire),a[s[0]]=function(){return a[s[0]+"With"](this===a?void 0:this,arguments),this},a[s[0]+"With"]=c.fireWith}),t.promise(a),e&&e.call(a,a),a},when:function(e){var l=arguments.length,n=l,t=Array(n),a=le.call(arguments),i=r.Deferred(),s=function(c){return function(u){t[c]=this,a[c]=arguments.length>1?le.call(arguments):u,--l||i.resolveWith(t,a)}};if(l<=1&&(Jl(e,i.done(s(n)).resolve,i.reject,!l),i.state()==="pending"||I(a[n]&&a[n].then)))return i.then();for(;n--;)Jl(a[n],s(n),i.reject);return i.promise()}});var Vn=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(e,l){x.console&&x.console.warn&&e&&Vn.test(e.name)&&x.console.warn("jQuery.Deferred exception: "+e.message,e.stack,l)},r.readyException=function(e){x.setTimeout(function(){throw e})};var ml=r.Deferred();r.fn.ready=function(e){return ml.then(e).catch(function(l){r.readyException(l)}),this},r.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--r.readyWait:r.isReady)||(r.isReady=!0,!(e!==!0&&--r.readyWait>0)&&ml.resolveWith(D,[r]))}}),r.ready.then=ml.then;function nl(){D.removeEventListener("DOMContentLoaded",nl),x.removeEventListener("load",nl),r.ready()}D.readyState==="complete"||D.readyState!=="loading"&&!D.documentElement.doScroll?x.setTimeout(r.ready):(D.addEventListener("DOMContentLoaded",nl),x.addEventListener("load",nl));var _e=function(e,l,n,t,a,i,s){var c=0,u=e.length,d=n==null;if(je(n)==="object"){a=!0;for(c in n)_e(e,l,c,n[c],!0,i,s)}else if(t!==void 0&&(a=!0,I(t)||(s=!0),d&&(s?(l.call(e,t),l=null):(d=l,l=function(_,A,f){return d.call(r(_),f)})),l))for(;c<u;c++)l(e[c],n,s?t:t.call(e[c],c,l(e[c],n)));return a?e:d?l.call(e):u?l(e[0],n):i},Zn=/^-ms-/,Hn=/-([a-z])/g;function Fn(e,l){return l.toUpperCase()}function oe(e){return e.replace(Zn,"ms-").replace(Hn,Fn)}var Ke=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function Ve(){this.expando=r.expando+Ve.uid++}Ve.uid=1,Ve.prototype={cache:function(e){var l=e[this.expando];return l||(l={},Ke(e)&&(e.nodeType?e[this.expando]=l:Object.defineProperty(e,this.expando,{value:l,configurable:!0}))),l},set:function(e,l,n){var t,a=this.cache(e);if(typeof l=="string")a[oe(l)]=n;else for(t in l)a[oe(t)]=l[t];return a},get:function(e,l){return l===void 0?this.cache(e):e[this.expando]&&e[this.expando][oe(l)]},access:function(e,l,n){return l===void 0||l&&typeof l=="string"&&n===void 0?this.get(e,l):(this.set(e,l,n),n!==void 0?n:l)},remove:function(e,l){var n,t=e[this.expando];if(t!==void 0){if(l!==void 0)for(Array.isArray(l)?l=l.map(oe):(l=oe(l),l=l in t?[l]:l.match(se)||[]),n=l.length;n--;)delete t[l[n]];(l===void 0||r.isEmptyObject(t))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var l=e[this.expando];return l!==void 0&&!r.isEmptyObject(l)}};var w=new Ve,z=new Ve,Gn=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Jn=/[A-Z]/g;function Qn(e){return e==="true"?!0:e==="false"?!1:e==="null"?null:e===+e+""?+e:Gn.test(e)?JSON.parse(e):e}function Ql(e,l,n){var t;if(n===void 0&&e.nodeType===1)if(t="data-"+l.replace(Jn,"-$&").toLowerCase(),n=e.getAttribute(t),typeof n=="string"){try{n=Qn(n)}catch{}z.set(e,l,n)}else n=void 0;return n}r.extend({hasData:function(e){return z.hasData(e)||w.hasData(e)},data:function(e,l,n){return z.access(e,l,n)},removeData:function(e,l){z.remove(e,l)},_data:function(e,l,n){return w.access(e,l,n)},_removeData:function(e,l){w.remove(e,l)}}),r.fn.extend({data:function(e,l){var n,t,a,i=this[0],s=i&&i.attributes;if(e===void 0){if(this.length&&(a=z.get(i),i.nodeType===1&&!w.get(i,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(t=s[n].name,t.indexOf("data-")===0&&(t=oe(t.slice(5)),Ql(i,t,a[t])));w.set(i,"hasDataAttrs",!0)}return a}return typeof e=="object"?this.each(function(){z.set(this,e)}):_e(this,function(c){var u;if(i&&c===void 0)return u=z.get(i,e),u!==void 0||(u=Ql(i,e),u!==void 0)?u:void 0;this.each(function(){z.set(this,e,c)})},null,l,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),r.extend({queue:function(e,l,n){var t;if(e)return l=(l||"fx")+"queue",t=w.get(e,l),n&&(!t||Array.isArray(n)?t=w.access(e,l,r.makeArray(n)):t.push(n)),t||[]},dequeue:function(e,l){l=l||"fx";var n=r.queue(e,l),t=n.length,a=n.shift(),i=r._queueHooks(e,l),s=function(){r.dequeue(e,l)};a==="inprogress"&&(a=n.shift(),t--),a&&(l==="fx"&&n.unshift("inprogress"),delete i.stop,a.call(e,s,i)),!t&&i&&i.empty.fire()},_queueHooks:function(e,l){var n=l+"queueHooks";return w.get(e,n)||w.access(e,n,{empty:r.Callbacks("once memory").add(function(){w.remove(e,[l+"queue",n])})})}}),r.fn.extend({queue:function(e,l){var n=2;return typeof e!="string"&&(l=e,e="fx",n--),arguments.length<n?r.queue(this[0],e):l===void 0?this:this.each(function(){var t=r.queue(this,e,l);r._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&r.dequeue(this,e)})},dequeue:function(e){return this.each(function(){r.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,l){var n,t=1,a=r.Deferred(),i=this,s=this.length,c=function(){--t||a.resolveWith(i,[i])};for(typeof e!="string"&&(l=e,e=void 0),e=e||"fx";s--;)n=w.get(i[s],e+"queueHooks"),n&&n.empty&&(t++,n.empty.add(c));return c(),a.promise(l)}});var Yl=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ze=new RegExp("^(?:([+-])=|)("+Yl+")([a-z%]*)$","i"),ge=["Top","Right","Bottom","Left"],Ee=D.documentElement,Ie=function(e){return r.contains(e.ownerDocument,e)},Yn={composed:!0};Ee.getRootNode&&(Ie=function(e){return r.contains(e.ownerDocument,e)||e.getRootNode(Yn)===e.ownerDocument});var tl=function(e,l){return e=l||e,e.style.display==="none"||e.style.display===""&&Ie(e)&&r.css(e,"display")==="none"};function zl(e,l,n,t){var a,i,s=20,c=t?function(){return t.cur()}:function(){return r.css(e,l,"")},u=c(),d=n&&n[3]||(r.cssNumber[l]?"":"px"),_=e.nodeType&&(r.cssNumber[l]||d!=="px"&&+u)&&Ze.exec(r.css(e,l));if(_&&_[3]!==d){for(u=u/2,d=d||_[3],_=+u||1;s--;)r.style(e,l,_+d),(1-i)*(1-(i=c()/u||.5))<=0&&(s=0),_=_/i;_=_*2,r.style(e,l,_+d),n=n||[]}return n&&(_=+_||+u||0,a=n[1]?_+(n[1]+1)*n[2]:+n[2],t&&(t.unit=d,t.start=_,t.end=a)),a}var Xl={};function zn(e){var l,n=e.ownerDocument,t=e.nodeName,a=Xl[t];return a||(l=n.body.appendChild(n.createElement(t)),a=r.css(l,"display"),l.parentNode.removeChild(l),a==="none"&&(a="block"),Xl[t]=a,a)}function Te(e,l){for(var n,t,a=[],i=0,s=e.length;i<s;i++)t=e[i],t.style&&(n=t.style.display,l?(n==="none"&&(a[i]=w.get(t,"display")||null,a[i]||(t.style.display="")),t.style.display===""&&tl(t)&&(a[i]=zn(t))):n!=="none"&&(a[i]="none",w.set(t,"display",n)));for(i=0;i<s;i++)a[i]!=null&&(e[i].style.display=a[i]);return e}r.fn.extend({show:function(){return Te(this,!0)},hide:function(){return Te(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){tl(this)?r(this).show():r(this).hide()})}});var He=/^(?:checkbox|radio)$/i,$l=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,en=/^$|^module$|\/(?:java|ecma)script/i;(function(){var e=D.createDocumentFragment(),l=e.appendChild(D.createElement("div")),n=D.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),l.appendChild(n),B.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,l.innerHTML="<textarea>x</textarea>",B.noCloneChecked=!!l.cloneNode(!0).lastChild.defaultValue,l.innerHTML="<option></option>",B.option=!!l.lastChild})();var ne={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ne.tbody=ne.tfoot=ne.colgroup=ne.caption=ne.thead,ne.th=ne.td,B.option||(ne.optgroup=ne.option=[1,"<select multiple='multiple'>","</select>"]);function X(e,l){var n;return typeof e.getElementsByTagName<"u"?n=e.getElementsByTagName(l||"*"):typeof e.querySelectorAll<"u"?n=e.querySelectorAll(l||"*"):n=[],l===void 0||l&&K(e,l)?r.merge([e],n):n}function _l(e,l){for(var n=0,t=e.length;n<t;n++)w.set(e[n],"globalEval",!l||w.get(l[n],"globalEval"))}var Xn=/<|&#?\w+;/;function ln(e,l,n,t,a){for(var i,s,c,u,d,_,A=l.createDocumentFragment(),f=[],v=0,S=e.length;v<S;v++)if(i=e[v],i||i===0)if(je(i)==="object")r.merge(f,i.nodeType?[i]:i);else if(!Xn.test(i))f.push(l.createTextNode(i));else{for(s=s||A.appendChild(l.createElement("div")),c=($l.exec(i)||["",""])[1].toLowerCase(),u=ne[c]||ne._default,s.innerHTML=u[1]+r.htmlPrefilter(i)+u[2],_=u[0];_--;)s=s.lastChild;r.merge(f,s.childNodes),s=A.firstChild,s.textContent=""}for(A.textContent="",v=0;i=f[v++];){if(t&&r.inArray(i,t)>-1){a&&a.push(i);continue}if(d=Ie(i),s=X(A.appendChild(i),"script"),d&&_l(s),n)for(_=0;i=s[_++];)en.test(i.type||"")&&n.push(i)}return A}var nn=/^([^.]*)(?:\.(.+)|)/;function Le(){return!0}function Oe(){return!1}function gl(e,l,n,t,a,i){var s,c;if(typeof l=="object"){typeof n!="string"&&(t=t||n,n=void 0);for(c in l)gl(e,c,n,t,l[c],i);return e}if(t==null&&a==null?(a=n,t=n=void 0):a==null&&(typeof n=="string"?(a=t,t=void 0):(a=t,t=n,n=void 0)),a===!1)a=Oe;else if(!a)return e;return i===1&&(s=a,a=function(u){return r().off(u),s.apply(this,arguments)},a.guid=s.guid||(s.guid=r.guid++)),e.each(function(){r.event.add(this,l,a,t,n)})}r.event={globalThis:{},add:function(e,l,n,t,a){var i,s,c,u,d,_,A,f,v,S,P,T=w.get(e);if(Ke(e))for(n.handler&&(i=n,n=i.handler,a=i.selector),a&&r.find.matchesSelector(Ee,a),n.guid||(n.guid=r.guid++),(u=T.events)||(u=T.events=Object.create(null)),(s=T.handle)||(s=T.handle=function(G){return typeof r<"u"&&r.event.triggered!==G.type?r.event.dispatch.apply(e,arguments):void 0}),l=(l||"").match(se)||[""],d=l.length;d--;)c=nn.exec(l[d])||[],v=P=c[1],S=(c[2]||"").split(".").sort(),v&&(A=r.event.special[v]||{},v=(a?A.delegateType:A.bindType)||v,A=r.event.special[v]||{},_=r.extend({type:v,origType:P,data:t,handler:n,guid:n.guid,selector:a,needsContext:a&&r.expr.match.needsContext.test(a),namespace:S.join(".")},i),(f=u[v])||(f=u[v]=[],f.delegateCount=0,(!A.setup||A.setup.call(e,t,S,s)===!1)&&e.addEventListener&&e.addEventListener(v,s)),A.add&&(A.add.call(e,_),_.handler.guid||(_.handler.guid=n.guid)),a?f.splice(f.delegateCount++,0,_):f.push(_),r.event.global[v]=!0)},remove:function(e,l,n,t,a){var i,s,c,u,d,_,A,f,v,S,P,T=w.hasData(e)&&w.get(e);if(!(!T||!(u=T.events))){for(l=(l||"").match(se)||[""],d=l.length;d--;){if(c=nn.exec(l[d])||[],v=P=c[1],S=(c[2]||"").split(".").sort(),!v){for(v in u)r.event.remove(e,v+l[d],n,t,!0);continue}for(A=r.event.special[v]||{},v=(t?A.delegateType:A.bindType)||v,f=u[v]||[],c=c[2]&&new RegExp("(^|\\.)"+S.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=i=f.length;i--;)_=f[i],(a||P===_.origType)&&(!n||n.guid===_.guid)&&(!c||c.test(_.namespace))&&(!t||t===_.selector||t==="**"&&_.selector)&&(f.splice(i,1),_.selector&&f.delegateCount--,A.remove&&A.remove.call(e,_));s&&!f.length&&((!A.teardown||A.teardown.call(e,S,T.handle)===!1)&&r.removeEvent(e,v,T.handle),delete u[v])}r.isEmptyObject(u)&&w.remove(e,"handle events")}},dispatch:function(e){var l,n,t,a,i,s,c=new Array(arguments.length),u=r.event.fix(e),d=(w.get(this,"events")||Object.create(null))[u.type]||[],_=r.event.special[u.type]||{};for(c[0]=u,l=1;l<arguments.length;l++)c[l]=arguments[l];if(u.delegateTarget=this,!(_.preDispatch&&_.preDispatch.call(this,u)===!1)){for(s=r.event.handlers.call(this,u,d),l=0;(a=s[l++])&&!u.isPropagationStopped();)for(u.currentTarget=a.elem,n=0;(i=a.handlers[n++])&&!u.isImmediatePropagationStopped();)(!u.rnamespace||i.namespace===!1||u.rnamespace.test(i.namespace))&&(u.handleObj=i,u.data=i.data,t=((r.event.special[i.origType]||{}).handle||i.handler).apply(a.elem,c),t!==void 0&&(u.result=t)===!1&&(u.preventDefault(),u.stopPropagation()));return _.postDispatch&&_.postDispatch.call(this,u),u.result}},handlers:function(e,l){var n,t,a,i,s,c=[],u=l.delegateCount,d=e.target;if(u&&d.nodeType&&!(e.type==="click"&&e.button>=1)){for(;d!==this;d=d.parentNode||this)if(d.nodeType===1&&!(e.type==="click"&&d.disabled===!0)){for(i=[],s={},n=0;n<u;n++)t=l[n],a=t.selector+" ",s[a]===void 0&&(s[a]=t.needsContext?r(a,this).index(d)>-1:r.find(a,this,null,[d]).length),s[a]&&i.push(t);i.length&&c.push({elem:d,handlers:i})}}return d=this,u<l.length&&c.push({elem:d,handlers:l.slice(u)}),c},addProp:function(e,l){Object.defineProperty(r.Event.prototype,e,{enumerable:!0,configurable:!0,get:I(l)?function(){if(this.originalEvent)return l(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(n){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:n})}})},fix:function(e){return e[r.expando]?e:new r.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var l=this||e;return He.test(l.type)&&l.click&&K(l,"input")&&rl(l,"click",!0),!1},trigger:function(e){var l=this||e;return He.test(l.type)&&l.click&&K(l,"input")&&rl(l,"click"),!0},_default:function(e){var l=e.target;return He.test(l.type)&&l.click&&K(l,"input")&&w.get(l,"click")||K(l,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}};function rl(e,l,n){if(!n){w.get(e,l)===void 0&&r.event.add(e,l,Le);return}w.set(e,l,!1),r.event.add(e,l,{namespace:!1,handler:function(t){var a,i=w.get(this,l);if(t.isTrigger&1&&this[l]){if(i)(r.event.special[l]||{}).delegateType&&t.stopPropagation();else if(i=le.call(arguments),w.set(this,l,i),this[l](),a=w.get(this,l),w.set(this,l,!1),i!==a)return t.stopImmediatePropagation(),t.preventDefault(),a}else i&&(w.set(this,l,r.event.trigger(i[0],i.slice(1),this)),t.stopPropagation(),t.isImmediatePropagationStopped=Le)}})}r.removeEvent=function(e,l,n){e.removeEventListener&&e.removeEventListener(l,n)},r.Event=function(e,l){if(!(this instanceof r.Event))return new r.Event(e,l);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?Le:Oe,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,l&&r.extend(this,l),this.timeStamp=e&&e.timeStamp||Date.now(),this[r.expando]=!0},r.Event.prototype={constructor:r.Event,isDefaultPrevented:Oe,isPropagationStopped:Oe,isImmediatePropagationStopped:Oe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Le,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Le,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Le,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},r.event.addProp),r.each({focus:"focusin",blur:"focusout"},function(e,l){function n(t){if(D.documentMode){var a=w.get(this,"handle"),i=r.event.fix(t);i.type=t.type==="focusin"?"focus":"blur",i.isSimulated=!0,a(t),i.target===i.currentTarget&&a(i)}else r.event.simulate(l,t.target,r.event.fix(t))}r.event.special[e]={setup:function(){var t;if(rl(this,e,!0),D.documentMode)t=w.get(this,l),t||this.addEventListener(l,n),w.set(this,l,(t||0)+1);else return!1},trigger:function(){return rl(this,e),!0},teardown:function(){var t;if(D.documentMode)t=w.get(this,l)-1,t?w.set(this,l,t):(this.removeEventListener(l,n),w.remove(this,l));else return!1},_default:function(t){return w.get(t.target,e)},delegateType:l},r.event.special[l]={setup:function(){var t=this.ownerDocument||this.document||this,a=D.documentMode?this:t,i=w.get(a,l);i||(D.documentMode?this.addEventListener(l,n):t.addEventListener(e,n,!0)),w.set(a,l,(i||0)+1)},teardown:function(){var t=this.ownerDocument||this.document||this,a=D.documentMode?this:t,i=w.get(a,l)-1;i?w.set(a,l,i):(D.documentMode?this.removeEventListener(l,n):t.removeEventListener(e,n,!0),w.remove(a,l))}}}),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,l){r.event.special[e]={delegateType:l,bindType:l,handle:function(n){var t,a=this,i=n.relatedTarget,s=n.handleObj;return(!i||i!==a&&!r.contains(a,i))&&(n.type=s.origType,t=s.handler.apply(this,arguments),n.type=l),t}}}),r.fn.extend({on:function(e,l,n,t){return gl(this,e,l,n,t)},one:function(e,l,n,t){return gl(this,e,l,n,t,1)},off:function(e,l,n){var t,a;if(e&&e.preventDefault&&e.handleObj)return t=e.handleObj,r(e.delegateTarget).off(t.namespace?t.origType+"."+t.namespace:t.origType,t.selector,t.handler),this;if(typeof e=="object"){for(a in e)this.off(a,l,e[a]);return this}return(l===!1||typeof l=="function")&&(n=l,l=void 0),n===!1&&(n=Oe),this.each(function(){r.event.remove(this,e,n,l)})}});var $n=/<script|<style|<link/i,et=/checked\s*(?:[^=]|=\s*.checked.)/i,lt=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function tn(e,l){return K(e,"table")&&K(l.nodeType!==11?l:l.firstChild,"tr")&&r(e).children("tbody")[0]||e}function nt(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function tt(e){return(e.type||"").slice(0,5)==="true/"?e.type=e.type.slice(5):e.removeAttribute("type"),e}function rn(e,l){var n,t,a,i,s,c,u;if(l.nodeType===1){if(w.hasData(e)&&(i=w.get(e),u=i.events,u)){w.remove(l,"handle events");for(a in u)for(n=0,t=u[a].length;n<t;n++)r.event.add(l,a,u[a][n])}z.hasData(e)&&(s=z.access(e),c=r.extend({},s),z.set(l,c))}}function rt(e,l){var n=l.nodeName.toLowerCase();n==="input"&&He.test(e.type)?l.checked=e.checked:(n==="input"||n==="textarea")&&(l.defaultValue=e.defaultValue)}function Re(e,l,n,t){l=ql(l);var a,i,s,c,u,d,_=0,A=e.length,f=A-1,v=l[0],S=I(v);if(S||A>1&&typeof v=="string"&&!B.checkClone&&et.test(v))return e.each(function(P){var T=e.eq(P);S&&(l[0]=v.call(this,P,T.html())),Re(T,l,n,t)});if(A&&(a=ln(l,e[0].ownerDocument,!1,e,t),i=a.firstChild,a.childNodes.length===1&&(a=i),i||t)){for(s=r.map(X(a,"script"),nt),c=s.length;_<A;_++)u=a,_!==f&&(u=r.clone(u,!0,!0),c&&r.merge(s,X(u,"script"))),n.call(e[_],u,_);if(c)for(d=s[s.length-1].ownerDocument,r.map(s,tt),_=0;_<c;_++)u=s[_],en.test(u.type||"")&&!w.access(u,"globalEval")&&r.contains(d,u)&&(u.src&&(u.type||"").toLowerCase()!=="module"?r._evalUrl&&!u.noModule&&r._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},d):Wl(u.textContent.replace(lt,""),u,d))}return e}function an(e,l,n){for(var t,a=l?r.filter(l,e):e,i=0;(t=a[i])!=null;i++)!n&&t.nodeType===1&&r.cleanData(X(t)),t.parentNode&&(n&&Ie(t)&&_l(X(t,"script")),t.parentNode.removeChild(t));return e}r.extend({htmlPrefilter:function(e){return e},clone:function(e,l,n){var t,a,i,s,c=e.cloneNode(!0),u=Ie(e);if(!B.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!r.isXMLDoc(e))for(s=X(c),i=X(e),t=0,a=i.length;t<a;t++)rt(i[t],s[t]);if(l)if(n)for(i=i||X(e),s=s||X(c),t=0,a=i.length;t<a;t++)rn(i[t],s[t]);else rn(e,c);return s=X(c,"script"),s.length>0&&_l(s,!u&&X(e,"script")),c},cleanData:function(e){for(var l,n,t,a=r.event.special,i=0;(n=e[i])!==void 0;i++)if(Ke(n)){if(l=n[w.expando]){if(l.events)for(t in l.events)a[t]?r.event.remove(n,t):r.removeEvent(n,t,l.handle);n[w.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),r.fn.extend({detach:function(e){return an(this,e,!0)},remove:function(e){return an(this,e)},text:function(e){return _e(this,function(l){return l===void 0?r.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=l)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var l=tn(this,e);l.appendChild(e)}})},prepend:function(){return Re(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var l=tn(this,e);l.insertBefore(e,l.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,l=0;(e=this[l])!=null;l++)e.nodeType===1&&(r.cleanData(X(e,!1)),e.textContent="");return this},clone:function(e,l){return e=e??!1,l=l??e,this.map(function(){return r.clone(this,e,l)})},html:function(e){return _e(this,function(l){var n=this[0]||{},t=0,a=this.length;if(l===void 0&&n.nodeType===1)return n.innerHTML;if(typeof l=="string"&&!$n.test(l)&&!ne[($l.exec(l)||["",""])[1].toLowerCase()]){l=r.htmlPrefilter(l);try{for(;t<a;t++)n=this[t]||{},n.nodeType===1&&(r.cleanData(X(n,!1)),n.innerHTML=l);n=0}catch{}}n&&this.empty().append(l)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(l){var n=this.parentNode;r.inArray(this,e)<0&&(r.cleanData(X(this)),n&&n.replaceChild(l,this))},e)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,l){r.fn[e]=function(n){for(var t,a=[],i=r(n),s=i.length-1,c=0;c<=s;c++)t=c===s?this:this.clone(!0),r(i[c])[l](t),$e.apply(a,t.get());return this.pushStack(a)}});var Al=new RegExp("^("+Yl+")(?!px)[a-z%]+$","i"),vl=/^--/,al=function(e){var l=e.ownerDocument.defaultView;return(!l||!l.opener)&&(l=x),l.getComputedStyle(e)},sn=function(e,l,n){var t,a,i={};for(a in l)i[a]=e.style[a],e.style[a]=l[a];t=n.call(e);for(a in l)e.style[a]=i[a];return t},at=new RegExp(ge.join("|"),"i");(function(){function e(){if(d){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",d.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Ee.appendChild(u).appendChild(d);var _=x.getComputedStyle(d);n=_.top!=="1%",c=l(_.marginLeft)===12,d.style.right="60%",i=l(_.right)===36,t=l(_.width)===36,d.style.position="absolute",a=l(d.offsetWidth/3)===12,Ee.removeChild(u),d=null}}function l(_){return Math.round(parseFloat(_))}var n,t,a,i,s,c,u=D.createElement("div"),d=D.createElement("div");d.style&&(d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",B.clearCloneStyle=d.style.backgroundClip==="content-box",r.extend(B,{boxSizingReliable:function(){return e(),t},pixelBoxStyles:function(){return e(),i},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),c},scrollboxSize:function(){return e(),a},reliableTrDimensions:function(){var _,A,f,v;return s==null&&(_=D.createElement("table"),A=D.createElement("tr"),f=D.createElement("div"),_.style.cssText="position:absolute;left:-11111px;border-collapse:separate",A.style.cssText="box-sizing:content-box;border:1px solid",A.style.height="1px",f.style.height="9px",f.style.display="block",Ee.appendChild(_).appendChild(A).appendChild(f),v=x.getComputedStyle(A),s=parseInt(v.height,10)+parseInt(v.borderTopWidth,10)+parseInt(v.borderBottomWidth,10)===A.offsetHeight,Ee.removeChild(_)),s}}))})();function Fe(e,l,n){var t,a,i,s,c=vl.test(l),u=e.style;return n=n||al(e),n&&(s=n.getPropertyValue(l)||n[l],c&&s&&(s=s.replace(We,"$1")||void 0),s===""&&!Ie(e)&&(s=r.style(e,l)),!B.pixelBoxStyles()&&Al.test(s)&&at.test(l)&&(t=u.width,a=u.minWidth,i=u.maxWidth,u.minWidth=u.maxWidth=u.width=s,s=n.width,u.width=t,u.minWidth=a,u.maxWidth=i)),s!==void 0?s+"":s}function on(e,l){return{get:function(){if(e()){delete this.get;return}return(this.get=l).apply(this,arguments)}}}var un=["Webkit","Moz","ms"],cn=D.createElement("div").style,pn={};function it(e){for(var l=e[0].toUpperCase()+e.slice(1),n=un.length;n--;)if(e=un[n]+l,e in cn)return e}function yl(e){var l=r.cssProps[e]||pn[e];return l||(e in cn?e:pn[e]=it(e)||e)}var st=/^(none|table(?!-c[ea]).+)/,ot={position:"absolute",visibility:"hidden",display:"block"},dn={letterSpacing:"0",fontWeight:"400"};function hn(e,l,n){var t=Ze.exec(l);return t?Math.max(0,t[2]-(n||0))+(t[3]||"px"):l}function bl(e,l,n,t,a,i){var s=l==="width"?1:0,c=0,u=0,d=0;if(n===(t?"border":"content"))return 0;for(;s<4;s+=2)n==="margin"&&(d+=r.css(e,n+ge[s],!0,a)),t?(n==="content"&&(u-=r.css(e,"padding"+ge[s],!0,a)),n!=="margin"&&(u-=r.css(e,"border"+ge[s]+"Width",!0,a))):(u+=r.css(e,"padding"+ge[s],!0,a),n!=="padding"?u+=r.css(e,"border"+ge[s]+"Width",!0,a):c+=r.css(e,"border"+ge[s]+"Width",!0,a));return!t&&i>=0&&(u+=Math.max(0,Math.ceil(e["offset"+l[0].toUpperCase()+l.slice(1)]-i-u-c-.5))||0),u+d}function fn(e,l,n){var t=al(e),a=!B.boxSizingReliable()||n,i=a&&r.css(e,"boxSizing",!1,t)==="border-box",s=i,c=Fe(e,l,t),u="offset"+l[0].toUpperCase()+l.slice(1);if(Al.test(c)){if(!n)return c;c="auto"}return(!B.boxSizingReliable()&&i||!B.reliableTrDimensions()&&K(e,"tr")||c==="auto"||!parseFloat(c)&&r.css(e,"display",!1,t)==="inline")&&e.getClientRects().length&&(i=r.css(e,"boxSizing",!1,t)==="border-box",s=u in e,s&&(c=e[u])),c=parseFloat(c)||0,c+bl(e,l,n||(i?"border":"content"),s,t,c)+"px"}r.extend({cssHooks:{opacity:{get:function(e,l){if(l){var n=Fe(e,"opacity");return n===""?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,l,n,t){if(!(!e||e.nodeType===3||e.nodeType===8||!e.style)){var a,i,s,c=oe(l),u=vl.test(l),d=e.style;if(u||(l=yl(c)),s=r.cssHooks[l]||r.cssHooks[c],n!==void 0){if(i=typeof n,i==="string"&&(a=Ze.exec(n))&&a[1]&&(n=zl(e,l,a),i="number"),n==null||n!==n)return;i==="number"&&!u&&(n+=a&&a[3]||(r.cssNumber[c]?"":"px")),!B.clearCloneStyle&&n===""&&l.indexOf("background")===0&&(d[l]="inherit"),(!s||!("set"in s)||(n=s.set(e,n,t))!==void 0)&&(u?d.setProperty(l,n):d[l]=n)}else return s&&"get"in s&&(a=s.get(e,!1,t))!==void 0?a:d[l]}},css:function(e,l,n,t){var a,i,s,c=oe(l),u=vl.test(l);return u||(l=yl(c)),s=r.cssHooks[l]||r.cssHooks[c],s&&"get"in s&&(a=s.get(e,!0,n)),a===void 0&&(a=Fe(e,l,t)),a==="normal"&&l in dn&&(a=dn[l]),n===""||n?(i=parseFloat(a),n===!0||isFinite(i)?i||0:a):a}}),r.each(["height","width"],function(e,l){r.cssHooks[l]={get:function(n,t,a){if(t)return st.test(r.css(n,"display"))&&(!n.getClientRects().length||!n.getBoundingClientRect().width)?sn(n,ot,function(){return fn(n,l,a)}):fn(n,l,a)},set:function(n,t,a){var i,s=al(n),c=!B.scrollboxSize()&&s.position==="absolute",u=c||a,d=u&&r.css(n,"boxSizing",!1,s)==="border-box",_=a?bl(n,l,a,d,s):0;return d&&c&&(_-=Math.ceil(n["offset"+l[0].toUpperCase()+l.slice(1)]-parseFloat(s[l])-bl(n,l,"border",!1,s)-.5)),_&&(i=Ze.exec(t))&&(i[3]||"px")!=="px"&&(n.style[l]=t,t=r.css(n,l)),hn(n,t,_)}}}),r.cssHooks.marginLeft=on(B.reliableMarginLeft,function(e,l){if(l)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-sn(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(e,l){r.cssHooks[e+l]={expand:function(n){for(var t=0,a={},i=typeof n=="string"?n.split(" "):[n];t<4;t++)a[e+ge[t]+l]=i[t]||i[t-2]||i[0];return a}},e!=="margin"&&(r.cssHooks[e+l].set=hn)}),r.fn.extend({css:function(e,l){return _e(this,function(n,t,a){var i,s,c={},u=0;if(Array.isArray(t)){for(i=al(n),s=t.length;u<s;u++)c[t[u]]=r.css(n,t[u],!1,i);return c}return a!==void 0?r.style(n,t,a):r.css(n,t)},e,l,arguments.length>1)}});function $(e,l,n,t,a){return new $.prototype.init(e,l,n,t,a)}r.Tween=$,$.prototype={constructor:$,init:function(e,l,n,t,a,i){this.elem=e,this.prop=n,this.easing=a||r.easing._default,this.options=l,this.start=this.now=this.cur(),this.end=t,this.unit=i||(r.cssNumber[n]?"":"px")},cur:function(){var e=$.propHooks[this.prop];return e&&e.get?e.get(this):$.propHooks._default.get(this)},run:function(e){var l,n=$.propHooks[this.prop];return this.options.duration?this.pos=l=r.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=l=e,this.now=(this.end-this.start)*l+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):$.propHooks._default.set(this),this}},$.prototype.init.prototype=$.prototype,$.propHooks={_default:{get:function(e){var l;return e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null?e.elem[e.prop]:(l=r.css(e.elem,e.prop,""),!l||l==="auto"?0:l)},set:function(e){r.fx.step[e.prop]?r.fx.step[e.prop](e):e.elem.nodeType===1&&(r.cssHooks[e.prop]||e.elem.style[yl(e.prop)]!=null)?r.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},$.propHooks.scrollTop=$.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},r.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},r.fx=$.prototype.init,r.fx.step={};var Pe,il,ut=/^(?:toggle|show|hide)$/,ct=/queueHooks$/;function Ml(){il&&(D.hidden===!1&&x.requestAnimationFrame?x.requestAnimationFrame(Ml):x.setTimeout(Ml,r.fx.interval),r.fx.tick())}function mn(){return x.setTimeout(function(){Pe=void 0}),Pe=Date.now()}function sl(e,l){var n,t=0,a={height:e};for(l=l?1:0;t<4;t+=2-l)n=ge[t],a["margin"+n]=a["padding"+n]=e;return l&&(a.opacity=a.width=e),a}function _n(e,l,n){for(var t,a=(ae.tweeners[l]||[]).concat(ae.tweeners["*"]),i=0,s=a.length;i<s;i++)if(t=a[i].call(n,l,e))return t}function pt(e,l,n){var t,a,i,s,c,u,d,_,A="width"in l||"height"in l,f=this,v={},S=e.style,P=e.nodeType&&tl(e),T=w.get(e,"fxshow");n.queue||(s=r._queueHooks(e,"fx"),s.unqueued==null&&(s.unqueued=0,c=s.empty.fire,s.empty.fire=function(){s.unqueued||c()}),s.unqueued++,f.always(function(){f.always(function(){s.unqueued--,r.queue(e,"fx").length||s.empty.fire()})}));for(t in l)if(a=l[t],ut.test(a)){if(delete l[t],i=i||a==="toggle",a===(P?"hide":"show"))if(a==="show"&&T&&T[t]!==void 0)P=!0;else continue;v[t]=T&&T[t]||r.style(e,t)}if(u=!r.isEmptyObject(l),!(!u&&r.isEmptyObject(v))){A&&e.nodeType===1&&(n.overflow=[S.overflow,S.overflowX,S.overflowY],d=T&&T.display,d==null&&(d=w.get(e,"display")),_=r.css(e,"display"),_==="none"&&(d?_=d:(Te([e],!0),d=e.style.display||d,_=r.css(e,"display"),Te([e]))),(_==="inline"||_==="inline-block"&&d!=null)&&r.css(e,"float")==="none"&&(u||(f.done(function(){S.display=d}),d==null&&(_=S.display,d=_==="none"?"":_)),S.display="inline-block")),n.overflow&&(S.overflow="hidden",f.always(function(){S.overflow=n.overflow[0],S.overflowX=n.overflow[1],S.overflowY=n.overflow[2]})),u=!1;for(t in v)u||(T?"hidden"in T&&(P=T.hidden):T=w.access(e,"fxshow",{display:d}),i&&(T.hidden=!P),P&&Te([e],!0),f.done(function(){P||Te([e]),w.remove(e,"fxshow");for(t in v)r.style(e,t,v[t])})),u=_n(P?T[t]:0,t,f),t in T||(T[t]=u.start,P&&(u.end=u.start,u.start=0))}}function dt(e,l){var n,t,a,i,s;for(n in e)if(t=oe(n),a=l[t],i=e[n],Array.isArray(i)&&(a=i[1],i=e[n]=i[0]),n!==t&&(e[t]=i,delete e[n]),s=r.cssHooks[t],s&&"expand"in s){i=s.expand(i),delete e[t];for(n in i)n in e||(e[n]=i[n],l[n]=a)}else l[t]=a}function ae(e,l,n){var t,a,i=0,s=ae.prefilters.length,c=r.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var A=Pe||mn(),f=Math.max(0,d.startTime+d.duration-A),v=f/d.duration||0,S=1-v,P=0,T=d.tweens.length;P<T;P++)d.tweens[P].run(S);return c.notifyWith(e,[d,S,f]),S<1&&T?f:(T||c.notifyWith(e,[d,1,0]),c.resolveWith(e,[d]),!1)},d=c.promise({elem:e,props:r.extend({},l),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},n),originalProperties:l,originalOptions:n,startTime:Pe||mn(),duration:n.duration,tweens:[],createTween:function(A,f){var v=r.Tween(e,d.opts,A,f,d.opts.specialEasing[A]||d.opts.easing);return d.tweens.push(v),v},stop:function(A){var f=0,v=A?d.tweens.length:0;if(a)return this;for(a=!0;f<v;f++)d.tweens[f].run(1);return A?(c.notifyWith(e,[d,1,0]),c.resolveWith(e,[d,A])):c.rejectWith(e,[d,A]),this}}),_=d.props;for(dt(_,d.opts.specialEasing);i<s;i++)if(t=ae.prefilters[i].call(d,e,_,d.opts),t)return I(t.stop)&&(r._queueHooks(d.elem,d.opts.queue).stop=t.stop.bind(t)),t;return r.map(_,_n,d),I(d.opts.start)&&d.opts.start.call(e,d),d.progress(d.opts.progress).done(d.opts.done,d.opts.complete).fail(d.opts.fail).always(d.opts.always),r.fx.timer(r.extend(u,{elem:e,anim:d,queue:d.opts.queue})),d}r.Animation=r.extend(ae,{tweeners:{"*":[function(e,l){var n=this.createTween(e,l);return zl(n.elem,e,Ze.exec(l),n),n}]},tweener:function(e,l){I(e)?(l=e,e=["*"]):e=e.match(se);for(var n,t=0,a=e.length;t<a;t++)n=e[t],ae.tweeners[n]=ae.tweeners[n]||[],ae.tweeners[n].unshift(l)},prefilters:[pt],prefilter:function(e,l){l?ae.prefilters.unshift(e):ae.prefilters.push(e)}}),r.speed=function(e,l,n){var t=e&&typeof e=="object"?r.extend({},e):{complete:n||!n&&l||I(e)&&e,duration:e,easing:n&&l||l&&!I(l)&&l};return r.fx.off?t.duration=0:typeof t.duration!="number"&&(t.duration in r.fx.speeds?t.duration=r.fx.speeds[t.duration]:t.duration=r.fx.speeds._default),(t.queue==null||t.queue===!0)&&(t.queue="fx"),t.old=t.complete,t.complete=function(){I(t.old)&&t.old.call(this),t.queue&&r.dequeue(this,t.queue)},t},r.fn.extend({fadeTo:function(e,l,n,t){return this.filter(tl).css("opacity",0).show().end().animate({opacity:l},e,n,t)},animate:function(e,l,n,t){var a=r.isEmptyObject(e),i=r.speed(l,n,t),s=function(){var c=ae(this,r.extend({},e),i);(a||w.get(this,"finish"))&&c.stop(!0)};return s.finish=s,a||i.queue===!1?this.each(s):this.queue(i.queue,s)},stop:function(e,l,n){var t=function(a){var i=a.stop;delete a.stop,i(n)};return typeof e!="string"&&(n=l,l=e,e=void 0),l&&this.queue(e||"fx",[]),this.each(function(){var a=!0,i=e!=null&&e+"queueHooks",s=r.timers,c=w.get(this);if(i)c[i]&&c[i].stop&&t(c[i]);else for(i in c)c[i]&&c[i].stop&&ct.test(i)&&t(c[i]);for(i=s.length;i--;)s[i].elem===this&&(e==null||s[i].queue===e)&&(s[i].anim.stop(n),a=!1,s.splice(i,1));(a||!n)&&r.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var l,n=w.get(this),t=n[e+"queue"],a=n[e+"queueHooks"],i=r.timers,s=t?t.length:0;for(n.finish=!0,r.queue(this,e,[]),a&&a.stop&&a.stop.call(this,!0),l=i.length;l--;)i[l].elem===this&&i[l].queue===e&&(i[l].anim.stop(!0),i.splice(l,1));for(l=0;l<s;l++)t[l]&&t[l].finish&&t[l].finish.call(this);delete n.finish})}}),r.each(["toggle","show","hide"],function(e,l){var n=r.fn[l];r.fn[l]=function(t,a,i){return t==null||typeof t=="boolean"?n.apply(this,arguments):this.animate(sl(l,!0),t,a,i)}}),r.each({slideDown:sl("show"),slideUp:sl("hide"),slideToggle:sl("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,l){r.fn[e]=function(n,t,a){return this.animate(l,n,t,a)}}),r.timers=[],r.fx.tick=function(){var e,l=0,n=r.timers;for(Pe=Date.now();l<n.length;l++)e=n[l],!e()&&n[l]===e&&n.splice(l--,1);n.length||r.fx.stop(),Pe=void 0},r.fx.timer=function(e){r.timers.push(e),r.fx.start()},r.fx.interval=13,r.fx.start=function(){il||(il=!0,Ml())},r.fx.stop=function(){il=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(e,l){return e=r.fx&&r.fx.speeds[e]||e,l=l||"fx",this.queue(l,function(n,t){var a=x.setTimeout(n,e);t.stop=function(){x.clearTimeout(a)}})},function(){var e=D.createElement("input"),l=D.createElement("select"),n=l.appendChild(D.createElement("option"));e.type="checkbox",B.checkOn=e.value!=="",B.optSelected=n.selected,e=D.createElement("input"),e.value="t",e.type="radio",B.radioValue=e.value==="t"}();var gn,Ge=r.expr.attrHandle;r.fn.extend({attr:function(e,l){return _e(this,r.attr,e,l,arguments.length>1)},removeAttr:function(e){return this.each(function(){r.removeAttr(this,e)})}}),r.extend({attr:function(e,l,n){var t,a,i=e.nodeType;if(!(i===3||i===8||i===2)){if(typeof e.getAttribute>"u")return r.prop(e,l,n);if((i!==1||!r.isXMLDoc(e))&&(a=r.attrHooks[l.toLowerCase()]||(r.expr.match.bool.test(l)?gn:void 0)),n!==void 0){if(n===null){r.removeAttr(e,l);return}return a&&"set"in a&&(t=a.set(e,n,l))!==void 0?t:(e.setAttribute(l,n+""),n)}return a&&"get"in a&&(t=a.get(e,l))!==null?t:(t=r.find.attr(e,l),t??void 0)}},attrHooks:{type:{set:function(e,l){if(!B.radioValue&&l==="radio"&&K(e,"input")){var n=e.value;return e.setAttribute("type",l),n&&(e.value=n),l}}}},removeAttr:function(e,l){var n,t=0,a=l&&l.match(se);if(a&&e.nodeType===1)for(;n=a[t++];)e.removeAttribute(n)}}),gn={set:function(e,l,n){return l===!1?r.removeAttr(e,n):e.setAttribute(n,n),n}},r.each(r.expr.match.bool.source.match(/\w+/g),function(e,l){var n=Ge[l]||r.find.attr;Ge[l]=function(t,a,i){var s,c,u=a.toLowerCase();return i||(c=Ge[u],Ge[u]=s,s=n(t,a,i)!=null?u:null,Ge[u]=c),s}});var ht=/^(?:input|select|textarea|button)$/i,ft=/^(?:a|area)$/i;r.fn.extend({prop:function(e,l){return _e(this,r.prop,e,l,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[r.propFix[e]||e]})}}),r.extend({prop:function(e,l,n){var t,a,i=e.nodeType;if(!(i===3||i===8||i===2))return(i!==1||!r.isXMLDoc(e))&&(l=r.propFix[l]||l,a=r.propHooks[l]),n!==void 0?a&&"set"in a&&(t=a.set(e,n,l))!==void 0?t:e[l]=n:a&&"get"in a&&(t=a.get(e,l))!==null?t:e[l]},propHooks:{tabIndex:{get:function(e){var l=r.find.attr(e,"tabindex");return l?parseInt(l,10):ht.test(e.nodeName)||ft.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),B.optSelected||(r.propHooks.selected={get:function(e){var l=e.parentNode;return l&&l.parentNode&&l.parentNode.selectedIndex,null},set:function(e){var l=e.parentNode;l&&(l.selectedIndex,l.parentNode&&l.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function we(e){var l=e.match(se)||[];return l.join(" ")}function xe(e){return e.getAttribute&&e.getAttribute("class")||""}function El(e){return Array.isArray(e)?e:typeof e=="string"?e.match(se)||[]:[]}r.fn.extend({addClass:function(e){var l,n,t,a,i,s;return I(e)?this.each(function(c){r(this).addClass(e.call(this,c,xe(this)))}):(l=El(e),l.length?this.each(function(){if(t=xe(this),n=this.nodeType===1&&" "+we(t)+" ",n){for(i=0;i<l.length;i++)a=l[i],n.indexOf(" "+a+" ")<0&&(n+=a+" ");s=we(n),t!==s&&this.setAttribute("class",s)}}):this)},removeClass:function(e){var l,n,t,a,i,s;return I(e)?this.each(function(c){r(this).removeClass(e.call(this,c,xe(this)))}):arguments.length?(l=El(e),l.length?this.each(function(){if(t=xe(this),n=this.nodeType===1&&" "+we(t)+" ",n){for(i=0;i<l.length;i++)for(a=l[i];n.indexOf(" "+a+" ")>-1;)n=n.replace(" "+a+" "," ");s=we(n),t!==s&&this.setAttribute("class",s)}}):this):this.attr("class","")},toggleClass:function(e,l){var n,t,a,i,s=typeof e,c=s==="string"||Array.isArray(e);return I(e)?this.each(function(u){r(this).toggleClass(e.call(this,u,xe(this),l),l)}):typeof l=="boolean"&&c?l?this.addClass(e):this.removeClass(e):(n=El(e),this.each(function(){if(c)for(i=r(this),a=0;a<n.length;a++)t=n[a],i.hasClass(t)?i.removeClass(t):i.addClass(t);else(e===void 0||s==="boolean")&&(t=xe(this),t&&w.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":w.get(this,"__className__")||""))}))},hasClass:function(e){var l,n,t=0;for(l=" "+e+" ";n=this[t++];)if(n.nodeType===1&&(" "+we(xe(n))+" ").indexOf(l)>-1)return!0;return!1}});var mt=/\r/g;r.fn.extend({val:function(e){var l,n,t,a=this[0];return arguments.length?(t=I(e),this.each(function(i){var s;this.nodeType===1&&(t?s=e.call(this,i,r(this).val()):s=e,s==null?s="":typeof s=="number"?s+="":Array.isArray(s)&&(s=r.map(s,function(c){return c==null?"":c+""})),l=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],(!l||!("set"in l)||l.set(this,s,"value")===void 0)&&(this.value=s))})):a?(l=r.valHooks[a.type]||r.valHooks[a.nodeName.toLowerCase()],l&&"get"in l&&(n=l.get(a,"value"))!==void 0?n:(n=a.value,typeof n=="string"?n.replace(mt,""):n??"")):void 0}}),r.extend({valHooks:{option:{get:function(e){var l=r.find.attr(e,"value");return l??we(r.text(e))}},select:{get:function(e){var l,n,t,a=e.options,i=e.selectedIndex,s=e.type==="select-one",c=s?null:[],u=s?i+1:a.length;for(i<0?t=u:t=s?i:0;t<u;t++)if(n=a[t],(n.selected||t===i)&&!n.disabled&&(!n.parentNode.disabled||!K(n.parentNode,"optgroup"))){if(l=r(n).val(),s)return l;c.push(l)}return c},set:function(e,l){for(var n,t,a=e.options,i=r.makeArray(l),s=a.length;s--;)t=a[s],(t.selected=r.inArray(r.valHooks.option.get(t),i)>-1)&&(n=!0);return n||(e.selectedIndex=-1),i}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(e,l){if(Array.isArray(l))return e.checked=r.inArray(r(e).val(),l)>-1}},B.checkOn||(r.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})});var Je=x.location,An={guid:Date.now()},wl=/\?/;r.parseXML=function(e){var l,n;if(!e||typeof e!="string")return null;try{l=new x.DOMParser().parseFromString(e,"text/xml")}catch{}return n=l&&l.getElementsByTagName("parsererror")[0],(!l||n)&&r.error("Invalid XML: "+(n?r.map(n.childNodes,function(t){return t.textContent}).join(`
`):e)),l};var vn=/^(?:focusinfocus|focusoutblur)$/,yn=function(e){e.stopPropagation()};r.extend(r.event,{trigger:function(e,l,n,t){var a,i,s,c,u,d,_,A,f=[n||D],v=Ne.call(e,"type")?e.type:e,S=Ne.call(e,"namespace")?e.namespace.split("."):[];if(i=A=s=n=n||D,!(n.nodeType===3||n.nodeType===8)&&!vn.test(v+r.event.triggered)&&(v.indexOf(".")>-1&&(S=v.split("."),v=S.shift(),S.sort()),u=v.indexOf(":")<0&&"on"+v,e=e[r.expando]?e:new r.Event(v,typeof e=="object"&&e),e.isTrigger=t?2:3,e.namespace=S.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+S.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),l=l==null?[e]:r.makeArray(l,[e]),_=r.event.special[v]||{},!(!t&&_.trigger&&_.trigger.apply(n,l)===!1))){if(!t&&!_.noBubble&&!Se(n)){for(c=_.delegateType||v,vn.test(c+v)||(i=i.parentNode);i;i=i.parentNode)f.push(i),s=i;s===(n.ownerDocument||D)&&f.push(s.defaultView||s.parentWindow||x)}for(a=0;(i=f[a++])&&!e.isPropagationStopped();)A=i,e.type=a>1?c:_.bindType||v,d=(w.get(i,"events")||Object.create(null))[e.type]&&w.get(i,"handle"),d&&d.apply(i,l),d=u&&i[u],d&&d.apply&&Ke(i)&&(e.result=d.apply(i,l),e.result===!1&&e.preventDefault());return e.type=v,!t&&!e.isDefaultPrevented()&&(!_._default||_._default.apply(f.pop(),l)===!1)&&Ke(n)&&u&&I(n[v])&&!Se(n)&&(s=n[u],s&&(n[u]=null),r.event.triggered=v,e.isPropagationStopped()&&A.addEventListener(v,yn),n[v](),e.isPropagationStopped()&&A.removeEventListener(v,yn),r.event.triggered=void 0,s&&(n[u]=s)),e.result}},simulate:function(e,l,n){var t=r.extend(new r.Event,n,{type:e,isSimulated:!0});r.event.trigger(t,null,l)}}),r.fn.extend({trigger:function(e,l){return this.each(function(){r.event.trigger(e,l,this)})},triggerHandler:function(e,l){var n=this[0];if(n)return r.event.trigger(e,l,n,!0)}});var _t=/\[\]$/,bn=/\r?\n/g,gt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function xl(e,l,n,t){var a;if(Array.isArray(l))r.each(l,function(i,s){n||_t.test(e)?t(e,s):xl(e+"["+(typeof s=="object"&&s!=null?i:"")+"]",s,n,t)});else if(!n&&je(l)==="object")for(a in l)xl(e+"["+a+"]",l[a],n,t);else t(e,l)}r.param=function(e,l){var n,t=[],a=function(i,s){var c=I(s)?s():s;t[t.length]=encodeURIComponent(i)+"="+encodeURIComponent(c??"")};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!r.isPlainObject(e))r.each(e,function(){a(this.name,this.value)});else for(n in e)xl(n,e[n],l,a);return t.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=r.prop(this,"elements");return e?r.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!r(this).is(":disabled")&&At.test(this.nodeName)&&!gt.test(e)&&(this.checked||!He.test(e))}).map(function(e,l){var n=r(this).val();return n==null?null:Array.isArray(n)?r.map(n,function(t){return{name:l.name,value:t.replace(bn,`\r
`)}}):{name:l.name,value:n.replace(bn,`\r
`)}}).get()}});var vt=/%20/g,yt=/#.*$/,bt=/([?&])_=[^&]*/,Mt=/^(.*?):[ \t]*([^\r\n]*)$/mg,Et=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,wt=/^(?:GET|HEAD)$/,xt=/^\/\//,Mn={},kl={},En="*/".concat("*"),Cl=D.createElement("a");Cl.href=Je.href;function wn(e){return function(l,n){typeof l!="string"&&(n=l,l="*");var t,a=0,i=l.toLowerCase().match(se)||[];if(I(n))for(;t=i[a++];)t[0]==="+"?(t=t.slice(1)||"*",(e[t]=e[t]||[]).unshift(n)):(e[t]=e[t]||[]).push(n)}}function xn(e,l,n,t){var a={},i=e===kl;function s(c){var u;return a[c]=!0,r.each(e[c]||[],function(d,_){var A=_(l,n,t);if(typeof A=="string"&&!i&&!a[A])return l.dataTypes.unshift(A),s(A),!1;if(i)return!(u=A)}),u}return s(l.dataTypes[0])||!a["*"]&&s("*")}function Sl(e,l){var n,t,a=r.ajaxSettings.flatOptions||{};for(n in l)l[n]!==void 0&&((a[n]?e:t||(t={}))[n]=l[n]);return t&&r.extend(!0,e,t),e}function kt(e,l,n){for(var t,a,i,s,c=e.contents,u=e.dataTypes;u[0]==="*";)u.shift(),t===void 0&&(t=e.mimeType||l.getResponseHeader("Content-Type"));if(t){for(a in c)if(c[a]&&c[a].test(t)){u.unshift(a);break}}if(u[0]in n)i=u[0];else{for(a in n){if(!u[0]||e.converters[a+" "+u[0]]){i=a;break}s||(s=a)}i=i||s}if(i)return i!==u[0]&&u.unshift(i),n[i]}function Ct(e,l,n,t){var a,i,s,c,u,d={},_=e.dataTypes.slice();if(_[1])for(s in e.converters)d[s.toLowerCase()]=e.converters[s];for(i=_.shift();i;)if(e.responseFields[i]&&(n[e.responseFields[i]]=l),!u&&t&&e.dataFilter&&(l=e.dataFilter(l,e.dataType)),u=i,i=_.shift(),i){if(i==="*")i=u;else if(u!=="*"&&u!==i){if(s=d[u+" "+i]||d["* "+i],!s){for(a in d)if(c=a.split(" "),c[1]===i&&(s=d[u+" "+c[0]]||d["* "+c[0]],s)){s===!0?s=d[a]:d[a]!==!0&&(i=c[0],_.unshift(c[1]));break}}if(s!==!0)if(s&&e.throws)l=s(l);else try{l=s(l)}catch(A){return{state:"parsererror",error:s?A:"No conversion from "+u+" to "+i}}}}return{state:"success",data:l}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Je.href,type:"GET",isLocal:Et.test(Je.protocol),globalThis:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":En,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,l){return l?Sl(Sl(e,r.ajaxSettings),l):Sl(r.ajaxSettings,e)},ajaxPrefilter:wn(Mn),ajaxTransport:wn(kl),ajax:function(e,l){typeof e=="object"&&(l=e,e=void 0),l=l||{};var n,t,a,i,s,c,u,d,_,A,f=r.ajaxSetup({},l),v=f.context||f,S=f.context&&(v.nodeType||v.jquery)?r(v):r.event,P=r.Deferred(),T=r.Callbacks("once memory"),G=f.statusCode||{},H={},ue={},ce="canceled",R={readyState:0,getResponseHeader:function(q){var Z;if(u){if(!i)for(i={};Z=Mt.exec(a);)i[Z[1].toLowerCase()+" "]=(i[Z[1].toLowerCase()+" "]||[]).concat(Z[2]);Z=i[q.toLowerCase()+" "]}return Z==null?null:Z.join(", ")},getAllResponseHeaders:function(){return u?a:null},setRequestHeader:function(q,Z){return u==null&&(q=ue[q.toLowerCase()]=ue[q.toLowerCase()]||q,H[q]=Z),this},overrideMimeType:function(q){return u==null&&(f.mimeType=q),this},statusCode:function(q){var Z;if(q)if(u)R.always(q[R.status]);else for(Z in q)G[Z]=[G[Z],q[Z]];return this},abort:function(q){var Z=q||ce;return n&&n.abort(Z),ke(0,Z),this}};if(P.promise(R),f.url=((e||f.url||Je.href)+"").replace(xt,Je.protocol+"//"),f.type=l.method||l.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(se)||[""],f.crossDomain==null){c=D.createElement("a");try{c.href=f.url,c.href=c.href,f.crossDomain=Cl.protocol+"//"+Cl.host!=c.protocol+"//"+c.host}catch{f.crossDomain=!0}}if(f.data&&f.processData&&typeof f.data!="string"&&(f.data=r.param(f.data,f.traditional)),xn(Mn,f,l,R),u)return R;d=r.event&&f.global,d&&r.active++===0&&r.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!wt.test(f.type),t=f.url.replace(yt,""),f.hasContent?f.data&&f.processData&&(f.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(f.data=f.data.replace(vt,"+")):(A=f.url.slice(t.length),f.data&&(f.processData||typeof f.data=="string")&&(t+=(wl.test(t)?"&":"?")+f.data,delete f.data),f.cache===!1&&(t=t.replace(bt,"$1"),A=(wl.test(t)?"&":"?")+"_="+An.guid+++A),f.url=t+A),f.ifModified&&(r.lastModified[t]&&R.setRequestHeader("If-Modified-Since",r.lastModified[t]),r.etag[t]&&R.setRequestHeader("If-None-Match",r.etag[t])),(f.data&&f.hasContent&&f.contentType!==!1||l.contentType)&&R.setRequestHeader("Content-Type",f.contentType),R.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+(f.dataTypes[0]!=="*"?", "+En+"; q=0.01":""):f.accepts["*"]);for(_ in f.headers)R.setRequestHeader(_,f.headers[_]);if(f.beforeSend&&(f.beforeSend.call(v,R,f)===!1||u))return R.abort();if(ce="abort",T.add(f.complete),R.done(f.success),R.fail(f.error),n=xn(kl,f,l,R),!n)ke(-1,"No Transport");else{if(R.readyState=1,d&&S.trigger("ajaxSend",[R,f]),u)return R;f.async&&f.timeout>0&&(s=x.setTimeout(function(){R.abort("timeout")},f.timeout));try{u=!1,n.send(H,ke)}catch(q){if(u)throw q;ke(-1,q)}}function ke(q,Z,Ye,Dl){var pe,ze,de,ye,be,te=Z;u||(u=!0,s&&x.clearTimeout(s),n=void 0,a=Dl||"",R.readyState=q>0?4:0,pe=q>=200&&q<300||q===304,Ye&&(ye=kt(f,R,Ye)),!pe&&r.inArray("script",f.dataTypes)>-1&&r.inArray("json",f.dataTypes)<0&&(f.converters["text script"]=function(){}),ye=Ct(f,ye,R,pe),pe?(f.ifModified&&(be=R.getResponseHeader("Last-Modified"),be&&(r.lastModified[t]=be),be=R.getResponseHeader("etag"),be&&(r.etag[t]=be)),q===204||f.type==="HEAD"?te="nocontent":q===304?te="notmodified":(te=ye.state,ze=ye.data,de=ye.error,pe=!de)):(de=te,(q||!te)&&(te="error",q<0&&(q=0))),R.status=q,R.statusText=(Z||te)+"",pe?P.resolveWith(v,[ze,te,R]):P.rejectWith(v,[R,te,de]),R.statusCode(G),G=void 0,d&&S.trigger(pe?"ajaxSuccess":"ajaxError",[R,f,pe?ze:de]),T.fireWith(v,[R,te]),d&&(S.trigger("ajaxComplete",[R,f]),--r.active||r.event.trigger("ajaxStop")))}return R},getJSON:function(e,l,n){return r.get(e,l,n,"json")},getScript:function(e,l){return r.get(e,void 0,l,"script")}}),r.each(["get","post"],function(e,l){r[l]=function(n,t,a,i){return I(t)&&(i=i||a,a=t,t=void 0),r.ajax(r.extend({url:n,type:l,dataType:i,data:t,success:a},r.isPlainObject(n)&&n))}}),r.ajaxPrefilter(function(e){var l;for(l in e.headers)l.toLowerCase()==="content-type"&&(e.contentType=e.headers[l]||"")}),r._evalUrl=function(e,l,n){return r.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,globalThis:!1,converters:{"text script":function(){}},dataFilter:function(t){r.globalEval(t,l,n)}})},r.fn.extend({wrapAll:function(e){var l;return this[0]&&(I(e)&&(e=e.call(this[0])),l=r(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&l.insertBefore(this[0]),l.map(function(){for(var n=this;n.firstElementChild;)n=n.firstElementChild;return n}).append(this)),this},wrapInner:function(e){return I(e)?this.each(function(l){r(this).wrapInner(e.call(this,l))}):this.each(function(){var l=r(this),n=l.contents();n.length?n.wrapAll(e):l.append(e)})},wrap:function(e){var l=I(e);return this.each(function(n){r(this).wrapAll(l?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(e){return!r.expr.pseudos.visible(e)},r.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new x.XMLHttpRequest}catch{}};var St={0:200,1223:204},Qe=r.ajaxSettings.xhr();B.cors=!!Qe&&"withCredentials"in Qe,B.ajax=Qe=!!Qe,r.ajaxTransport(function(e){var l,n;if(B.cors||Qe&&!e.crossDomain)return{send:function(t,a){var i,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),!e.crossDomain&&!t["X-Requested-With"]&&(t["X-Requested-With"]="XMLHttpRequest");for(i in t)s.setRequestHeader(i,t[i]);l=function(c){return function(){l&&(l=n=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,c==="abort"?s.abort():c==="error"?typeof s.status!="number"?a(0,"error"):a(s.status,s.statusText):a(St[s.status]||s.status,s.statusText,(s.responseType||"text")!=="text"||typeof s.responseText!="string"?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=l(),n=s.onerror=s.ontimeout=l("error"),s.onabort!==void 0?s.onabort=n:s.onreadystatechange=function(){s.readyState===4&&x.setTimeout(function(){l&&n()})},l=l("abort");try{s.send(e.hasContent&&e.data||null)}catch(c){if(l)throw c}},abort:function(){l&&l()}}}),r.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return r.globalEval(e),e}}}),r.ajaxPrefilter("script",function(e){e.cache===void 0&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),r.ajaxTransport("script",function(e){if(e.crossDomain||e.scriptAttrs){var l,n;return{send:function(t,a){l=r("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(i){l.remove(),n=null,i&&a(i.type==="error"?404:200,i.type)}),D.head.appendChild(l[0])},abort:function(){n&&n()}}}});var kn=[],jl=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=kn.pop()||r.expando+"_"+An.guid++;return this[e]=!0,e}}),r.ajaxPrefilter("json jsonp",function(e,l,n){var t,a,i,s=e.jsonp!==!1&&(jl.test(e.url)?"url":typeof e.data=="string"&&(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&jl.test(e.data)&&"data");if(s||e.dataTypes[0]==="jsonp")return t=e.jsonpCallback=I(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(jl,"$1"+t):e.jsonp!==!1&&(e.url+=(wl.test(e.url)?"&":"?")+e.jsonp+"="+t),e.converters["script json"]=function(){return i||r.error(t+" was not called"),i[0]},e.dataTypes[0]="json",a=x[t],x[t]=function(){i=arguments},n.always(function(){a===void 0?r(x).removeProp(t):x[t]=a,e[t]&&(e.jsonpCallback=l.jsonpCallback,kn.push(t)),i&&I(a)&&a(i[0]),i=a=void 0}),"script"}),B.createHTMLDocument=function(){var e=D.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",e.childNodes.length===2}(),r.parseHTML=function(e,l,n){if(typeof e!="string")return[];typeof l=="boolean"&&(n=l,l=!1);var t,a,i;return l||(B.createHTMLDocument?(l=D.implementation.createHTMLDocument(""),t=l.createElement("base"),t.href=D.location.href,l.head.appendChild(t)):l=D),a=Hl.exec(e),i=!n&&[],a?[l.createElement(a[1])]:(a=ln([e],l,i),i&&i.length&&r(i).remove(),r.merge([],a.childNodes))},r.fn.load=function(e,l,n){var t,a,i,s=this,c=e.indexOf(" ");return c>-1&&(t=we(e.slice(c)),e=e.slice(0,c)),I(l)?(n=l,l=void 0):l&&typeof l=="object"&&(a="POST"),s.length>0&&r.ajax({url:e,type:a||"GET",dataType:"html",data:l}).done(function(u){i=arguments,s.html(t?r("<div>").append(r.parseHTML(u)).find(t):u)}).always(n&&function(u,d){s.each(function(){n.apply(this,i||[u.responseText,d,u])})}),this},r.expr.pseudos.animated=function(e){return r.grep(r.timers,function(l){return e===l.elem}).length},r.offset={setOffset:function(e,l,n){var t,a,i,s,c,u,d,_=r.css(e,"position"),A=r(e),f={};_==="static"&&(e.style.position="relative"),c=A.offset(),i=r.css(e,"top"),u=r.css(e,"left"),d=(_==="absolute"||_==="fixed")&&(i+u).indexOf("auto")>-1,d?(t=A.position(),s=t.top,a=t.left):(s=parseFloat(i)||0,a=parseFloat(u)||0),I(l)&&(l=l.call(e,n,r.extend({},c))),l.top!=null&&(f.top=l.top-c.top+s),l.left!=null&&(f.left=l.left-c.left+a),"using"in l?l.using.call(e,f):A.css(f)}},r.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(a){r.offset.setOffset(this,e,a)});var l,n,t=this[0];if(t)return t.getClientRects().length?(l=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,{top:l.top+n.pageYOffset,left:l.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,l,n,t=this[0],a={top:0,left:0};if(r.css(t,"position")==="fixed")l=t.getBoundingClientRect();else{for(l=this.offset(),n=t.ownerDocument,e=t.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&r.css(e,"position")==="static";)e=e.parentNode;e&&e!==t&&e.nodeType===1&&(a=r(e).offset(),a.top+=r.css(e,"borderTopWidth",!0),a.left+=r.css(e,"borderLeftWidth",!0))}return{top:l.top-a.top-r.css(t,"marginTop",!0),left:l.left-a.left-r.css(t,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&r.css(e,"position")==="static";)e=e.offsetParent;return e||Ee})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,l){var n=l==="pageYOffset";r.fn[e]=function(t){return _e(this,function(a,i,s){var c;if(Se(a)?c=a:a.nodeType===9&&(c=a.defaultView),s===void 0)return c?c[l]:a[i];c?c.scrollTo(n?c.pageXOffset:s,n?s:c.pageYOffset):a[i]=s},e,t,arguments.length)}}),r.each(["top","left"],function(e,l){r.cssHooks[l]=on(B.pixelPosition,function(n,t){if(t)return t=Fe(n,l),Al.test(t)?r(n).position()[l]+"px":t})}),r.each({Height:"height",Width:"width"},function(e,l){r.each({padding:"inner"+e,content:l,"":"outer"+e},function(n,t){r.fn[t]=function(a,i){var s=arguments.length&&(n||typeof a!="boolean"),c=n||(a===!0||i===!0?"margin":"border");return _e(this,function(u,d,_){var A;return Se(u)?t.indexOf("outer")===0?u["inner"+e]:u.document.documentElement["client"+e]:u.nodeType===9?(A=u.documentElement,Math.max(u.body["scroll"+e],A["scroll"+e],u.body["offset"+e],A["offset"+e],A["client"+e])):_===void 0?r.css(u,d,c):r.style(u,d,_,c)},l,s?a:void 0,s)}})}),r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,l){r.fn[l]=function(n){return this.on(l,n)}}),r.fn.extend({bind:function(e,l,n){return this.on(e,null,l,n)},unbind:function(e,l){return this.off(e,null,l)},delegate:function(e,l,n,t){return this.on(l,e,n,t)},undelegate:function(e,l,n){return arguments.length===1?this.off(e,"**"):this.off(l,e||"**",n)},hover:function(e,l){return this.on("mouseenter",e).on("mouseleave",l||e)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,l){r.fn[l]=function(n,t){return arguments.length>0?this.on(l,null,n,t):this.trigger(l)}});var jt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;r.proxy=function(e,l){var n,t,a;if(typeof l=="string"&&(n=e[l],l=e,e=n),!!I(e))return t=le.call(arguments,2),a=function(){return e.apply(l||this,t.concat(le.call(arguments)))},a.guid=e.guid=e.guid||r.guid++,a},r.holdReady=function(e){e?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=K,r.isFunction=I,r.isWindow=Se,r.camelCase=oe,r.type=je,r.now=Date.now,r.isNumeric=function(e){var l=r.type(e);return(l==="number"||l==="string")&&!isNaN(e-parseFloat(e))},r.trim=function(e){return e==null?"":(e+"").replace(jt,"$1")};var Dt=x.jQuery,Bt=x.$;return r.noConflict=function(e){return x.$===r&&(x.$=Bt),e&&x.jQuery===r&&(x.jQuery=Dt),r},typeof Q>"u"&&(x.jQuery=x.$=r),r})}(jquery)),jquery.exports}(function(module,exports){(function(x,Q){module.exports=Q(requireJquery(),reactExports)})(self,function(__WEBPACK_EXTERNAL_MODULE_jquery__,__WEBPACK_EXTERNAL_MODULE_react__){return(()=>{var __webpack_modules__={"./src/components/MapContainer/MapContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* binding */ MapContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/MapContainer/styles.module.scss");



const MapContainer = ({
  containerRef,
  className,
  style
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  style: style,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, className),
  ref: containerRef
});

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/MapContainer.tsx?`)},"./src/components/MapContainer/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* reexport safe */ _MapContainer__WEBPACK_IMPORTED_MODULE_0__.MapContainer)
/* harmony export */ });
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapContainer */ "./src/components/MapContainer/MapContainer.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/index.ts?`)},"./src/components/MultiMap/MultiMap.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* binding */ MultiMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const MultiMap = ({
  mapRef,
  style,
  className,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;
    const {
      main,
      ...rest
    } = props;
    const {
      map: {
        name,
        content
      },
      ...restMain
    } = main;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).multiMap({
        main: { ...restMain,
          map: name
        },
        ...rest
      });
    }
  }, [mapRef, props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    style: style,
    className: className,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/MultiMap.tsx?`)},"./src/components/MultiMap/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_0__.MultiMap)
/* harmony export */ });
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/MultiMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/index.ts?`)},"./src/components/VectorMap/VectorMap.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* binding */ VectorMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const VectorMap = ({
  map,
  mapRef,
  style,
  className,
  series,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;

    if (!map) {
      console.error("[react-jvectormap]: no map was loaded!");
    }

    const {
      name,
      content
    } = map;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap({
        map: name,
        series,
        ...props
      });

      if (map && (mapRef === null || mapRef === void 0 ? void 0 : mapRef.current) === null) {
        mapRef.current = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      }
    }
  }, [map, mapRef, props, series]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const mapContainer = containerRef.current;

    if (series && mapContainer) {
      const map = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      const {
        markers = [],
        regions = []
      } = series;
      regions.forEach(({
        values
      }, index) => {
        var _map$series;

        if (values && (_map$series = map.series) !== null && _map$series !== void 0 && _map$series.regions) {
          var _map$series2, _map$series2$regions$;

          (_map$series2 = map.series) === null || _map$series2 === void 0 ? void 0 : (_map$series2$regions$ = _map$series2.regions[index]) === null || _map$series2$regions$ === void 0 ? void 0 : _map$series2$regions$.clearAndSet(values);
        }
      });
      markers.forEach(({
        values
      }, index) => {
        var _map$series3;

        if (values && (_map$series3 = map.series) !== null && _map$series3 !== void 0 && _map$series3.markers) {
          var _map$series4, _map$series4$markers$;

          (_map$series4 = map.series) === null || _map$series4 === void 0 ? void 0 : (_map$series4$markers$ = _map$series4.markers[index]) === null || _map$series4$markers$ === void 0 ? void 0 : _map$series4$markers$.clearAndSet(values);
        }
      });
    }
  }, [series]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    className: className,
    style: style,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/VectorMap.tsx?`)},"./src/components/VectorMap/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/VectorMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/index.ts?`)},"./src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap),
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_1__.MultiMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/index.ts");
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/index.ts");



//# sourceURL=webpack://@react-jvectormap/core/./src/components/index.ts?`)},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MultiMap),
/* harmony export */   "VectorMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.VectorMap),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/lib */ "../jvectormap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");




(0,_react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)((jquery__WEBPACK_IMPORTED_MODULE_1___default()));

//# sourceURL=webpack://@react-jvectormap/core/./src/index.ts?`)},"./src/utils/builders/AttributeSeriesBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* binding */ AttributeSeriesBuilder)
/* harmony export */ });
class AttributeSeriesBuilder {
  constructor(attribute) {
    this.attribute = attribute;
  }
  /**
   *
   * @param value
   */


  setAttribute(value) {
    this.attribute = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setScale(value) {
    this.scale = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setValues(value) {
    this.values = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setNormalizeFunction(value) {
    this.normalizeFunction = value;
    return this;
  }

  build() {
    return {
      scale: this.scale,
      values: this.values,
      attribute: this.attribute,
      normalizeFunction: this.normalizeFunction
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/AttributeSeriesBuilder.ts?`)},"./src/utils/builders/LabelsBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsBuilder": () => (/* binding */ LabelsBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class LabelsBuilder {
  /**
   *
   * @param values
   */
  addMarkersLabelProps(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsLabelProps(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsBuilder.ts?`)},"./src/utils/builders/LabelsPropsBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsPropsBuilder": () => (/* binding */ LabelsPropsBuilder)
/* harmony export */ });
class LabelsPropsBuilder {
  constructor(render, offsets) {
    this.render = render;
    this.offsets = offsets;
  }
  /**
   *
   * @param render
   */


  setRender(render) {
    this.render = render;
    return this;
  }
  /**
   *
   * @param offsets
   */


  setOffsets(offsets) {
    this.offsets = offsets;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      render: this.render,
      offsets: this.offsets
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsPropsBuilder.ts?`)},"./src/utils/builders/MarkerBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkerBuilder": () => (/* binding */ MarkerBuilder)
/* harmony export */ });
class MarkerBuilder {
  constructor(value) {
    this.name = value;
  }
  /**
   *
   * @param value
   */


  setName(value) {
    this.name = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setCoords(value) {
    this.latLng = undefined;
    this.coords = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setLatLng(value) {
    this.coords = undefined;
    this.latLng = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setStyle(value) {
    this.style = value;
    return this;
  }
  /**
   *
   */


  build() {
    const commonProps = {
      name: this.name,
      style: this.style
    };

    if (this.coords) {
      return { ...commonProps,
        coords: this.coords
      };
    } else if (this.latLng) {
      return { ...commonProps,
        latLng: this.latLng
      };
    }

    return { ...commonProps,
      latLng: [0, 0]
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MarkerBuilder.ts?`)},"./src/utils/builders/MultiMapBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMapBuilder": () => (/* binding */ MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class MultiMapBuilder {
  constructor(mainMap, maxLevel = 1) {
    this.main = {
      map: mainMap
    };
    this.maxLevel = maxLevel;
  }
  /**
   *
   * @param value
   */


  setMainMap(value) {
    this.main.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMaxLevel(value) {
    this.maxLevel = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMapNameByCode(value) {
    this.mapNameByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setUrlByCode(value) {
    this.mapUrlByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setGetDrillDownMap(value) {
    this.getDrillDownMap = value;
    return this;
  }

  build() {
    const baseProps = {
      main: this.main,
      maxLevel: this.maxLevel
    };
    return { ...baseProps,
      ...(0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
        mapNameByCode: this.mapNameByCode,
        mapUrlByCode: this.mapUrlByCode,
        getDrillDownMap: this.getDrillDownMap
      })
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MultiMapBuilder.ts?`)},"./src/utils/builders/SeriesBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeriesBuilder": () => (/* binding */ SeriesBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class SeriesBuilder {
  /**
   *
   * @param values
   */
  addMarkersSeries(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsSeries(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/SeriesBuilder.ts?`)},"./src/utils/builders/StyleBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleBuilder": () => (/* binding */ StyleBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class StyleBuilder {
  /**
   *
   * @param value
   */
  setInitial(value) {
    this.initial = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelected(value) {
    this.selected = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setHover(value) {
    this.hover = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedHover(value) {
    this.selectedHover = value;
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      selected: this.selected,
      selectedHover: this.selectedHover,
      hover: this.hover,
      initial: this.initial
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/StyleBuilder.ts?`)},"./src/utils/builders/VectorMapBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* binding */ VectorMapBuilder)
/* harmony export */ });
class VectorMapBuilder {
  selectedRegions = [];

  constructor(map) {
    this.map = map;
  }
  /**
   *
   * @param value
   */


  setMap(value) {
    this.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setBackgroundColor(value) {
    this.backgroundColor = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMin(value) {
    this.zoomMin = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMax(value) {
    this.zoomMax = value;
    return this;
  }
  /**
   *
   * @param marker
   */


  addMarker(marker) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(marker);
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkerStyle(value) {
    this.markerStyle = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setRegionStyle(value) {
    this.regionStyle = value;
    return this;
  }
  /**
   *
   * @param value
   * @private
   */


  setMarkersSelectable(value) {
    this.markersSelectable = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkers(value) {
    this.markers = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setRegionsSelectable(value) {
    this.regionsSelectable = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setOnRegionTipShow(value) {
    this.onRegionTipShow = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSeries(value) {
    this.series = value;
    return this;
  }
  /**
   *
   * @param values
   */


  setLabels(values) {
    this.labels = values;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedRegions(value) {
    this.selectedRegions = value;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      map: this.map,
      series: this.series,
      backgroundColor: this.backgroundColor,
      zoomMax: this.zoomMax,
      zoomMin: this.zoomMin,
      markerStyle: this.markerStyle,
      regionStyle: this.regionStyle,
      markersSelectable: this.markersSelectable,
      regionsSelectable: this.regionsSelectable,
      markers: this.markers,
      labels: this.labels,
      selectedRegions: this.selectedRegions
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/VectorMapBuilder.ts?`)},"./src/utils/builders/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__.MarkerBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__.StyleBuilder),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__.SeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__.LabelsPropsBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__.MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMapBuilder */ "./src/utils/builders/VectorMapBuilder.ts");
/* harmony import */ var _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkerBuilder */ "./src/utils/builders/MarkerBuilder.ts");
/* harmony import */ var _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleBuilder */ "./src/utils/builders/StyleBuilder.ts");
/* harmony import */ var _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttributeSeriesBuilder */ "./src/utils/builders/AttributeSeriesBuilder.ts");
/* harmony import */ var _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SeriesBuilder */ "./src/utils/builders/SeriesBuilder.ts");
/* harmony import */ var _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LabelsBuilder */ "./src/utils/builders/LabelsBuilder.ts");
/* harmony import */ var _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LabelsPropsBuilder */ "./src/utils/builders/LabelsPropsBuilder.ts");
/* harmony import */ var _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MultiMapBuilder */ "./src/utils/builders/MultiMapBuilder.ts");









//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/index.ts?`)},"./src/utils/builders/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripUndefinedValues": () => (/* binding */ stripUndefinedValues)
/* harmony export */ });
/**
 * remove undefined values from object
 * @param object
 */
const stripUndefinedValues = object => Object.fromEntries(Object.entries(object).filter(entry => entry[1] !== undefined));

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/utils.ts?`)},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ "./src/utils/builders/index.ts");


//# sourceURL=webpack://@react-jvectormap/core/./src/utils/index.ts?`)},"../../node_modules/classnames/index.js":(module,exports)=>{eval(`var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* globalThis define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/classnames/index.js?`)},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/gif;base64,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 */ "data:image/gif;base64,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"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jvectormap-tip {\\n  position: absolute;\\n  display: none;\\n  border: solid 1px #cdcdcd;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  font-family: sans-serif, Verdana;\\n  font-size: smaller;\\n  padding: 3px;\\n}\\n\\n._u5cITtZnGk9D_6uoElx {\\n  height: 100%;\\n  width: 100%;\\n}\\n._u5cITtZnGk9D_6uoElx svg {\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-container {\\n  width: 100%;\\n  height: 100%;\\n  position: relative;\\n  overflow: hidden;\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomin {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 10px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomout {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 30px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-goback {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  bottom: 10px;\\n  z-index: 1000;\\n  padding: 6px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-spinner {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  background: center no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-title {\\n  font-weight: bold;\\n  font-size: 14px;\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt {\\n  position: absolute;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h {\\n  bottom: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend {\\n  float: left;\\n  margin: 0 10px 10px 0;\\n  padding: 3px 3px 1px 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend .jvectormap-legend-tick {\\n  float: left;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick {\\n  width: 40px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-sample {\\n  height: 15px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-text {\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v {\\n  top: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend {\\n  margin: 10px 10px 0 0;\\n  padding: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-sample {\\n  height: 20px;\\n  width: 20px;\\n  display: inline-block;\\n  vertical-align: middle;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-text {\\n  display: inline-block;\\n  vertical-align: middle;\\n  line-height: 20px;\\n  padding-left: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend {\\n  background: black;\\n  color: white;\\n  border-radius: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-tick-text {\\n  font-size: 12px;\\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "_u5cITtZnGk9D_6uoElx"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js`)},"../../node_modules/css-loader/dist/runtime/api.js":module=>{eval(`

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/api.js?`)},"../../node_modules/css-loader/dist/runtime/getUrl.js":module=>{eval(`

module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {
    return "\\"".concat(url.replace(/"/g, '\\\\"').replace(/\\n/g, "\\\\n"), "\\"");
  }

  return url;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/getUrl.js?`)},"../../node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{eval(`

module.exports = function (i) {
  return i[1];
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?`)},"./src/components/MapContainer/styles.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./styles.module.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?`)},"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{eval(`

var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?`)},"../../node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{eval(`

var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertBySelector.js?`)},"../../node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{eval(`

/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertStyleElement.js?`)},"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?`)},"../../node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{eval(`

/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleDomAPI.js?`)},"../../node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{eval(`

/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleTagTransform.js?`)},"../jquery-mousewheel/jquery.mousewheel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJQueryMouseWheel": () => (/* binding */ loadJQueryMouseWheel)
/* harmony export */ });
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */

const loadJQueryMouseWheel = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    var toFix = [
        "wheel",
        "mousewheel",
        "DOMMouseScroll",
        "MozMousePixelScroll",
      ],
      toBind =
        "onwheel" in window.document || window.document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      slice = Array.prototype.slice,
      nullLowestDeltaTimeout,
      lowestDelta;

    if ($.event.fixHooks) {
      for (var i = toFix.length; i; ) {
        $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
      }
    }

    var special = ($.event.special.mousewheel = {
      version: "3.1.12",

      setup: function () {
        if (this.addEventListener) {
          for (var i = toBind.length; i; ) {
            this.addEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = handler;
        }

        // Store the line height and page height for this particular element
        $.data(this, "mousewheel-line-height", special.getLineHeight(this));
        $.data(this, "mousewheel-page-height", special.getPageHeight(this));
      },

      teardown: function () {
        if (this.removeEventListener) {
          for (var i = toBind.length; i; ) {
            this.removeEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = null;
        }

        // Clean up the data we added to the element
        $.removeData(this, "mousewheel-line-height");
        $.removeData(this, "mousewheel-page-height");
      },

      getLineHeight: function (elem) {
        var $elem = $(elem),
          $parent = $elem["offsetParent" in $.fn ? "offsetParent" : "parent"]();
        if (!$parent.length) {
          $parent = $("body");
        }
        return (
          parseInt($parent.css("fontSize"), 10) ||
          parseInt($elem.css("fontSize"), 10) ||
          16
        );
      },

      getPageHeight: function (elem) {
        return $(elem).height();
      },

      settings: {
        adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
        normalizeOffset: true, // calls getBoundingClientRect for each event
      },
    });

    $.fn.extend({
      mousewheel: function (fn) {
        return fn ? this.on("mousewheel", fn) : this.trigger("mousewheel");
      },

      unmousewheel: function (fn) {
        return this.off("mousewheel", fn);
      },
    });

    function handler(event) {
      var orgEvent = event || window.event,
        args = slice.call(arguments, 1),
        delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0;
      event = $.event.fix(orgEvent);
      event.type = "mousewheel";

      // Old school scrollwheel delta
      if ("detail" in orgEvent) {
        deltaY = orgEvent.detail * -1;
      }
      if ("wheelDelta" in orgEvent) {
        deltaY = orgEvent.wheelDelta;
      }
      if ("wheelDeltaY" in orgEvent) {
        deltaY = orgEvent.wheelDeltaY;
      }
      if ("wheelDeltaX" in orgEvent) {
        deltaX = orgEvent.wheelDeltaX * -1;
      }

      // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
      if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
        deltaX = deltaY * -1;
        deltaY = 0;
      }

      // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
      delta = deltaY === 0 ? deltaX : deltaY;

      // New school wheel delta (wheel event)
      if ("deltaY" in orgEvent) {
        deltaY = orgEvent.deltaY * -1;
        delta = deltaY;
      }
      if ("deltaX" in orgEvent) {
        deltaX = orgEvent.deltaX;
        if (deltaY === 0) {
          delta = deltaX * -1;
        }
      }

      // No change actually happened, no reason to go any further
      if (deltaY === 0 && deltaX === 0) {
        return;
      }

      // Need to convert lines and pages to pixels if we aren't already in pixels
      // There are three delta modes:
      //   * deltaMode 0 is by pixels, nothing to do
      //   * deltaMode 1 is by lines
      //   * deltaMode 2 is by pages
      if (orgEvent.deltaMode === 1) {
        var lineHeight = $.data(this, "mousewheel-line-height");
        delta *= lineHeight;
        deltaY *= lineHeight;
        deltaX *= lineHeight;
      } else if (orgEvent.deltaMode === 2) {
        var pageHeight = $.data(this, "mousewheel-page-height");
        delta *= pageHeight;
        deltaY *= pageHeight;
        deltaX *= pageHeight;
      }

      // Store lowest absolute delta to normalize the delta values
      absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

      if (!lowestDelta || absDelta < lowestDelta) {
        lowestDelta = absDelta;

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
          lowestDelta /= 40;
        }
      }

      // Adjust older deltas if necessary
      if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
        // Divide all the things by 40!
        delta /= 40;
        deltaX /= 40;
        deltaY /= 40;
      }

      // Get a whole, normalized value for the deltas
      delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
      deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
      deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);

      // Normalise offsetX and offsetY properties
      if (special.settings.normalizeOffset && this.getBoundingClientRect) {
        var boundingRect = this.getBoundingClientRect();
        event.offsetX = event.clientX - boundingRect.left;
        event.offsetY = event.clientY - boundingRect.top;
      }

      // Add information to the event object
      event.deltaX = deltaX;
      event.deltaY = deltaY;
      event.deltaFactor = lowestDelta;

      // Go ahead and set deltaMode to 0 since we converted to pixels
      // Although this is a little odd since we overwrite the deltaX/Y
      // properties with normalized deltas.
      event.deltaMode = 0;

      // Add event and delta to the front of the arguments
      args.unshift(event, delta, deltaX, deltaY);

      // Clearout lowestDelta after sometime to better
      // handle multiple device types that give different
      // a different lowestDelta
      // Ex: trackpad = 3 and mouse wheel = 120
      if (nullLowestDeltaTimeout) {
        window.clearTimeout(nullLowestDeltaTimeout);
      }
      nullLowestDeltaTimeout = window.setTimeout(nullLowestDelta, 200);

      return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
      lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
      // If this is an older event and the delta is divisable by 120,
      // then we are assuming that the browser is treating this as an
      // older mouse wheel event and that we should divide the deltas
      // by 40 to try and get a more usable deltaFactor.
      // Side note, this actually impacts the reported scroll distance
      // in older browsers and can cause scrolling to be slower than native.
      // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
      return (
        special.settings.adjustOldDeltas &&
        orgEvent.type === "mousewheel" &&
        absDelta % 120 === 0
      );
    }
  });


//# sourceURL=webpack://@react-jvectormap/core/../jquery-mousewheel/jquery.mousewheel.js?`)},"../jvectormap/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* reexport safe */ _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery.jvectormap.min */ "../jvectormap/jquery.jvectormap.min.js");



//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/index.js?`)},"../jvectormap/jquery.jvectormap.min.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* binding */ loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/jquery-mousewheel */ "../jquery-mousewheel/jquery.mousewheel.js");


/**
 * jVectorMap version 2.0.5
 *
 * Copyright 2011-2014, Kirill Lebedev
 *
 * inspired from: https://github.com/alex-pex/jvectormap/blob/master/jvectormap-next/src/jquery-jvectormap.js
 */
const loadJVectorMap = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    (0,_react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__.loadJQueryMouseWheel)($);
    jvm.$ = $;
    window.jvm = jvm;

    const apiParams = {
      set: {
        colors: 1,
        values: 1,
        backgroundColor: 1,
        scaleColors: 1,
        normalizeFunction: 1,
        focus: 1,
      },
      get: {
        selectedRegions: 1,
        selectedMarkers: 1,
        mapObject: 1,
        regionName: 1,
      },
    };

    $.fn.multiMap = function (options) {
      options.container = this;
      new jvm.MultiMap(options);
      return this;
    };

    $.fn.vectorMap = function (options) {
      let map, methodName;
      map = this.children(".jvectormap-container").data("mapObject");
      if (options === "remove") {
        this.remove();
      } else if (options === "addMap") {
        jvm.Map.maps[arguments[1]] = arguments[2];
      } else if (
        (options === "set" || options === "get") &&
        apiParams[options][arguments[1]]
      ) {
        methodName =
          arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1);
        return map[options + methodName].apply(
          map,
          Array.prototype.slice.call(arguments, 2),
        );
      } else if (!map) {
        options = options || {};
        options.container = this;
        map = new jvm.Map(options);
      }

      return this;
    };
  });
/**
 * @namespace jvm Holds core methods and classes used by jVectorMap.
 */
var jvm = {
  /**
   * Inherits child's prototype from the parent's one.
   * @param {Function} child
   * @param {Function} parent
   */
  inherits: function (child, parent) {
    function temp() {}
    temp.prototype = parent.prototype;
    child.prototype = new temp();
    child.prototype.constructor = child;
    child.parentClass = parent;
  },

  /**
   * Mixes in methods from the source constructor to the target one.
   * @param {Function} target
   * @param {Function} source
   */
  mixin: function (target, source) {
    var prop;

    for (prop in source.prototype) {
      if (source.prototype.hasOwnProperty(prop)) {
        target.prototype[prop] = source.prototype[prop];
      }
    }
  },

  min: function (values) {
    var min = Number.MAX_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    }
    return min;
  },

  max: function (values) {
    var max = Number.MIN_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    }
    return max;
  },

  keys: function (object) {
    var keys = [],
      key;

    for (key in object) {
      keys.push(key);
    }
    return keys;
  },

  values: function (object) {
    var values = [],
      key,
      i;

    for (i = 0; i < arguments.length; i++) {
      object = arguments[i];
      for (key in object) {
        values.push(object[key]);
      }
    }
    return values;
  },

  whenImageLoaded: function (url) {
    var deferred = new jvm.$.Deferred(),
      img = jvm.$("<img/>");

    img
      .on("error", function () {
        deferred.reject();
      })
      .on("load", function () {
        deferred.resolve(img);
      });
    img.attr("src", url);

    return deferred;
  },

  isImageUrl: function (s) {
    return /\\.\\w{3,4}$/.test(s);
  },
};

/**
 * indexOf polyfill for IE < 9
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
/**
 * Basic wrapper for DOM element.
 * @constructor
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */
jvm.AbstractElement = function(name, config){
  /**
   * Underlying DOM element
   * @type {DOMElement}
   * @private
   */
  this.node = this.createElement(name);

  /**
   * Name of underlying element
   * @type {String}
   * @private
   */
  this.name = name;

  /**
   * Internal store of attributes
   * @type {Object}
   * @private
   */
  this.properties = {};

  if (config) {
    this.set(config);
  }
};

/**
 * Set attribute of the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Set of parameters to initialize element with
 */
jvm.AbstractElement.prototype.set = function(property, value){
  var key;

  if (typeof property === 'object') {
    for (key in property) {
      this.properties[key] = property[key];
      this.applyAttr(key, property[key]);
    }
  } else {
    this.properties[property] = value;
    this.applyAttr(property, value);
  }
};

/**
 * Returns value of attribute.
 * @param {String} name Name of attribute
 */
jvm.AbstractElement.prototype.get = function(property){
  return this.properties[property];
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.AbstractElement.prototype.applyAttr = function(property, value){
  if (!Number.isNaN(value)) {
    this.node.setAttribute(property, value);
  }
};

jvm.AbstractElement.prototype.remove = function(){
  jvm.$(this.node).remove();
};/**
 * Implements abstract vector canvas.
 * @constructor
 * @param {HTMLElement} container Container to put element to.
 * @param {Number} width Width of canvas.
 * @param {Number} height Height of canvas.
 */
jvm.AbstractCanvasElement = function(container, width, height){
  this.container = container;
  this.setSize(width, height);
  this.rootElement = new jvm[this.classPrefix+'GroupElement']();
  this.node.appendChild( this.rootElement.node );
  this.container.appendChild(this.node);
}

/**
 * Add element to the certain group inside of the canvas.
 * @param {HTMLElement} element Element to add to canvas.
 * @param {HTMLElement} group Group to add element into or into root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.add = function(element, group){
  group = group || this.rootElement;
  group.add(element);
  element.canvas = this;
}

/**
 * Create path and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add path into.
 */
jvm.AbstractCanvasElement.prototype.addPath = function(config, style, group){
  var el = new jvm[this.classPrefix+'PathElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addCircle = function(config, style, group){
  var el = new jvm[this.classPrefix+'CircleElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addImage = function(config, style, group){
  var el = new jvm[this.classPrefix+'ImageElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create text and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addText = function(config, style, group){
  var el = new jvm[this.classPrefix+'TextElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Add group to the another group inside of the canvas.
 * @param {HTMLElement} group Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addGroup = function(parentGroup){
  var el = new jvm[this.classPrefix+'GroupElement']();

  if (parentGroup) {
    parentGroup.node.appendChild(el.node);
  } else {
    this.node.appendChild(el.node);
  }
  el.canvas = this;
  return el;
};/**
 * Abstract shape element. Shape element represents some visual vector or raster object.
 * @constructor
 * @param {String} name Tag name of the element.
 * @param {Object} config Set of parameters to initialize element with.
 * @param {Object} style Object with styles to set on element initialization.
 */
jvm.AbstractShapeElement = function(name, config, style){
  this.style = style || {};
  this.style.current = this.style.current || {};
  this.isHovered = false;
  this.isSelected = false;
  this.updateStyle();
};

/**
 * Set element's style.
 * @param {Object|String} property Could be string to set only one property or object to set several style properties at once.
 * @param {String} value Value to set in case only one property should be set.
 */
jvm.AbstractShapeElement.prototype.setStyle = function(property, value){
  var styles = {};

  if (typeof property === 'object') {
    styles = property;
  } else {
    styles[property] = value;
  }
  jvm.$.extend(this.style.current, styles);
  this.updateStyle();
};


jvm.AbstractShapeElement.prototype.updateStyle = function(){
  var attrs = {};

  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.initial);
  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.current);
  if (this.isHovered) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.hover);
  }
  if (this.isSelected) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selected);
    if (this.isHovered) {
      jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selectedHover);
    }
  }
  this.set(attrs);
};

jvm.AbstractShapeElement.mergeStyles = function(styles, newStyles){
  var key;

  newStyles = newStyles || {};
  for (key in newStyles) {
    if (newStyles[key] === null) {
      delete styles[key];
    } else {
      styles[key] = newStyles[key];
    }
  }
}/**
 * Wrapper for SVG element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.SVGElement = function(name, config){
  jvm.SVGElement.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.SVGElement, jvm.AbstractElement);

jvm.SVGElement.svgns = "http://www.w3.org/2000/svg";

/**
 * Creates DOM element.
 * @param {String} tagName Name of element
 * @private
 * @returns DOMElement
 */
jvm.SVGElement.prototype.createElement = function( tagName ){
  return document.createElementNS( jvm.SVGElement.svgns, tagName );
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.SVGElement.prototype.addClass = function( className ){
  this.node.setAttribute('class', className);
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.SVGElement.prototype.getElementCtr = function( ctr ){
  return jvm['SVG'+ctr];
};

jvm.SVGElement.prototype.getBBox = function(){
  return this.node.getBBox();
};jvm.SVGGroupElement = function(){
  jvm.SVGGroupElement.parentClass.call(this, 'g');
}

jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement);

jvm.SVGGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.SVGCanvasElement = function (container, width, height) {
  this.classPrefix = "SVG";
  jvm.SVGCanvasElement.parentClass.call(this, "svg");

  this.defsElement = new jvm.SVGElement("defs");
  this.node.appendChild(this.defsElement.node);

  jvm.AbstractCanvasElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement);
jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement);

jvm.SVGCanvasElement.prototype.setSize = function (width, height) {
  this.width = width;
  this.height = height;
  this.node.setAttribute("width", width);
  this.node.setAttribute("height", height);
};

jvm.SVGCanvasElement.prototype.applyTransformParams = function (
  scale,
  transX,
  transY,
) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  if (!isNaN(transX) && !isNaN(transY) && !isNaN(scale)) {
    this.rootElement.node.setAttribute(
      "transform",
      "scale(" + scale + ") translate(" + transX + ", " + transY + ")",
    );
  }
};
jvm.SVGShapeElement = function(name, config, style){
  jvm.SVGShapeElement.parentClass.call(this, name, config);
  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement);
jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement);

jvm.SVGShapeElement.prototype.applyAttr = function(attr, value){
  var patternEl,
      imageEl,
      that = this;

  if (attr === 'fill' && jvm.isImageUrl(value)) {
    if (!jvm.SVGShapeElement.images[value]) {
      jvm.whenImageLoaded(value).then(function(img){
        imageEl = new jvm.SVGElement('image');
        imageEl.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
        imageEl.applyAttr('x', '0');
        imageEl.applyAttr('y', '0');
        imageEl.applyAttr('width', img[0].width);
        imageEl.applyAttr('height', img[0].height);

        patternEl = new jvm.SVGElement('pattern');
        patternEl.applyAttr('id', 'image'+jvm.SVGShapeElement.imageCounter);
        patternEl.applyAttr('x', 0);
        patternEl.applyAttr('y', 0);
        patternEl.applyAttr('width', img[0].width / 2);
        patternEl.applyAttr('height', img[0].height / 2);
        patternEl.applyAttr('viewBox', '0 0 '+img[0].width+' '+img[0].height);
        patternEl.applyAttr('patternUnits', 'userSpaceOnUse');
        patternEl.node.appendChild( imageEl.node );

        that.canvas.defsElement.node.appendChild( patternEl.node );

        jvm.SVGShapeElement.images[value] = jvm.SVGShapeElement.imageCounter++;

        that.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
      });
    } else {
      this.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
    }
  } else {
    jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};

jvm.SVGShapeElement.imageCounter = 1;
jvm.SVGShapeElement.images = {};jvm.SVGPathElement = function(config, style){
  jvm.SVGPathElement.parentClass.call(this, 'path', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
}

jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement);jvm.SVGCircleElement = function(config, style){
  jvm.SVGCircleElement.parentClass.call(this, 'circle', config, style);
};

jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement);jvm.SVGImageElement = function(config, style){
  jvm.SVGImageElement.parentClass.call(this, 'image', config, style);
};

jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement);

jvm.SVGImageElement.prototype.applyAttr = function(attr, value){
  var that = this,
      imageOffset,
      imageUrl;

  if (attr == 'image') {
    if (typeof value == 'object') {
      imageUrl = value.url;
      this.offset = value.offset;
    } else {
      imageUrl = value;
      this.offset = [0, 0];
    }

    jvm.whenImageLoaded(imageUrl).then(function(img){
      that.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);
      that.width = img[0].width;
      that.height = img[0].height;
      that.applyAttr('width', that.width);
      that.applyAttr('height', that.height);

      that.applyAttr('x', that.cx - that.width / 2 + that.offset[0]);
      that.applyAttr('y', that.cy - that.height / 2 + that.offset[1]);

      jvm.$(that.node).trigger('imageloaded', [img]);
    });
  } else if(attr == 'cx') {
    this.cx = value;
    if (this.width) {
      this.applyAttr('x', value - this.width / 2 + this.offset[0]);
    }
  } else if(attr == 'cy') {
    this.cy = value;
    if (this.height) {
      this.applyAttr('y', value - this.height / 2 + this.offset[1]);
    }
  } else {
    jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.SVGTextElement = function(config, style){
  jvm.SVGTextElement.parentClass.call(this, 'text', config, style);
}

jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement);

jvm.SVGTextElement.prototype.applyAttr = function(attr, value){
  if (attr === 'text') {
    this.node.textContent = value;
  } else {
    jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};/**
 * Wrapper for VML element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.VMLElement = function(name, config){
  if (!jvm.VMLElement.VMLInitialized) {
    jvm.VMLElement.initializeVML();
  }

  jvm.VMLElement.parentClass.apply(this, arguments);
};

jvm.inherits(jvm.VMLElement, jvm.AbstractElement);

/**
 * Shows if VML was already initialized for the current document or not.
 * @static
 * @private
 * @type {Boolean}
 */
jvm.VMLElement.VMLInitialized = false;

/**
 * Initializes VML handling before creating the first element
 * (adds CSS class and creates namespace). Adds one of two forms
 * of createElement method depending of support by browser.
 * @static
 * @private
 */

 // The following method of VML handling is borrowed from the
 // Raphael library by Dmitry Baranovsky.

jvm.VMLElement.initializeVML = function(){
  try {
    if (!document.namespaces.rvml) {
      document.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
    }
    /**
     * Creates DOM element.
     * @param {String} tagName Name of element
     * @private
     * @returns DOMElement
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<rvml:' + tagName + ' class="rvml">');
    };
  } catch (e) {
    /**
     * @private
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
    };
  }
  document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
  jvm.VMLElement.VMLInitialized = true;
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.VMLElement.prototype.getElementCtr = function( ctr ){
  return jvm['VML'+ctr];
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.VMLElement.prototype.addClass = function( className ){
  jvm.$(this.node).addClass(className);
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.VMLElement.prototype.applyAttr = function( attr, value ){
  this.node[attr] = value;
};

/**
 * Returns boundary box for the element.
 * @returns {Object} Boundary box with numeric fields: x, y, width, height
 * @override
 */
jvm.VMLElement.prototype.getBBox = function(){
  var node = jvm.$(this.node);

  return {
    x: node.position().left / this.canvas.scale,
    y: node.position().top / this.canvas.scale,
    width: node.width() / this.canvas.scale,
    height: node.height() / this.canvas.scale
  };
};jvm.VMLGroupElement = function(){
  jvm.VMLGroupElement.parentClass.call(this, 'group');

  this.node.style.left = '0px';
  this.node.style.top = '0px';
  this.node.coordorigin = "0 0";
};

jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement);

jvm.VMLGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.VMLCanvasElement = function(container, width, height){
  this.classPrefix = 'VML';
  jvm.VMLCanvasElement.parentClass.call(this, 'group');
  jvm.AbstractCanvasElement.apply(this, arguments);
  this.node.style.position = 'absolute';
};

jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement);
jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement);

jvm.VMLCanvasElement.prototype.setSize = function(width, height){
  var paths,
      groups,
      i,
      l;

  this.width = width;
  this.height = height;
  this.node.style.width = width + "px";
  this.node.style.height = height + "px";
  this.node.coordsize = width+' '+height;
  this.node.coordorigin = "0 0";
  if (this.rootElement) {
    paths = this.rootElement.node.getElementsByTagName('shape');
    for(i = 0, l = paths.length; i < l; i++) {
      paths[i].coordsize = width+' '+height;
      paths[i].style.width = width+'px';
      paths[i].style.height = height+'px';
    }
    groups = this.node.getElementsByTagName('group');
    for(i = 0, l = groups.length; i < l; i++) {
      groups[i].coordsize = width+' '+height;
      groups[i].style.width = width+'px';
      groups[i].style.height = height+'px';
    }
  }
};

jvm.VMLCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  this.rootElement.node.coordorigin = (this.width-transX-this.width/100)+','+(this.height-transY-this.height/100);
  this.rootElement.node.coordsize = this.width/scale+','+this.height/scale;
};jvm.VMLShapeElement = function(name, config){
  jvm.VMLShapeElement.parentClass.call(this, name, config);

  this.fillElement = new jvm.VMLElement('fill');
  this.strokeElement = new jvm.VMLElement('stroke');
  this.node.appendChild(this.fillElement.node);
  this.node.appendChild(this.strokeElement.node);
  this.node.stroked = false;

  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement);
jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement);

jvm.VMLShapeElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'fill':
      this.node.fillcolor = value;
      break;
    case 'fill-opacity':
      this.fillElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke':
      if (value === 'none') {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokecolor = value;
      break;
    case 'stroke-opacity':
      this.strokeElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke-width':
      if (parseInt(value, 10) === 0) {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokeweight = value;
      break;
    case 'd':
      this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
      break;
    default:
      jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.VMLPathElement = function(config, style){
  var scale = new jvm.VMLElement('skew');

  jvm.VMLPathElement.parentClass.call(this, 'shape', config, style);

  this.node.coordorigin = "0 0";

  scale.node.on = true;
  scale.node.matrix = '0.01,0,0,0.01,0,0';
  scale.node.offset = '0,0';

  this.node.appendChild(scale.node);
};

jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement);

jvm.VMLPathElement.prototype.applyAttr = function(attr, value){
  if (attr === 'd') {
    this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
  } else {
    jvm.VMLShapeElement.prototype.applyAttr.call(this, attr, value);
  }
};

jvm.VMLPathElement.pathSvgToVml = function(path) {
  var cx = 0, cy = 0, ctrlx, ctrly;

  path = path.replace(/(-?\\d+)e(-?\\d+)/g, '0');
  return path.replace(/([MmLlHhVvCcSs])\\s*((?:-?\\d*(?:\\.\\d+)?\\s*,?\\s*)+)/g, function(segment, letter, coords, index){
    coords = coords.replace(/(\\d)-/g, '$1,-')
            .replace(/^\\s+/g, '')
            .replace(/\\s+$/g, '')
            .replace(/\\s+/g, ',').split(',');
    if (!coords[0]) coords.shift();
    for (var i=0, l=coords.length; i<l; i++) {
      coords[i] = Math.round(100*coords[i]);
    }
    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        return 't'+coords.join(',');
      case 'M':
        cx = coords[0];
        cy = coords[1];
        return 'm'+coords.join(',');
      case 'l':
        cx += coords[0];
        cy += coords[1];
        return 'r'+coords.join(',');
      case 'L':
        cx = coords[0];
        cy = coords[1];
        return 'l'+coords.join(',');
      case 'h':
        cx += coords[0];
        return 'r'+coords[0]+',0';
      case 'H':
        cx = coords[0];
        return 'l'+cx+','+cy;
      case 'v':
        cy += coords[0];
        return 'r0,'+coords[0];
      case 'V':
        cy = coords[0];
        return 'l'+cx+','+cy;
      case 'c':
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'C':
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
      case 's':
        coords.unshift(cy-ctrly);
        coords.unshift(cx-ctrlx);
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'S':
        coords.unshift(cy+cy-ctrly);
        coords.unshift(cx+cx-ctrlx);
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
    }
    return '';
  }).replace(/z/g, 'e');
};jvm.VMLCircleElement = function(config, style){
  jvm.VMLCircleElement.parentClass.call(this, 'oval', config, style);
};

jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement);

jvm.VMLCircleElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'r':
      this.node.style.width = value*2+'px';
      this.node.style.height = value*2+'px';
      this.applyAttr('cx', this.get('cx') || 0);
      this.applyAttr('cy', this.get('cy') || 0);
      break;
    case 'cx':
      if (!value) return;
      this.node.style.left = value - (this.get('r') || 0) + 'px';
      break;
    case 'cy':
      if (!value) return;
      this.node.style.top = value - (this.get('r') || 0) + 'px';
      break;
    default:
      jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, attr, value);
  }
};/**
 * Class for vector images manipulations.
 * @constructor
 * @param {DOMElement} container to place canvas to
 * @param {Number} width
 * @param {Number} height
 */
jvm.VectorCanvas = function(container, width, height) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';

  if (this.mode == 'svg') {
    this.impl = new jvm.SVGCanvasElement(container, width, height);
  } else {
    this.impl = new jvm.VMLCanvasElement(container, width, height);
  }
  this.impl.mode = this.mode;
  return this.impl;
};jvm.SimpleScale = function(scale){
  this.scale = scale;
};

jvm.SimpleScale.prototype.getValue = function(value){
  return value;
};jvm.OrdinalScale = function(scale){
  this.scale = scale;
};

jvm.OrdinalScale.prototype.getValue = function(value){
  return this.scale[value];
};

jvm.OrdinalScale.prototype.getTicks = function(){
  var ticks = [],
      key;

  for (key in this.scale) {
    ticks.push({
      label: key,
      value: this.scale[key]
    });
  }

  return ticks;
};jvm.NumericScale = function(scale, normalizeFunction, minValue, maxValue) {
  this.scale = [];

  normalizeFunction = normalizeFunction || 'linear';

  if (scale) this.setScale(scale);
  if (normalizeFunction) this.setNormalizeFunction(normalizeFunction);
  if (typeof minValue !== 'undefined' ) this.setMin(minValue);
  if (typeof maxValue !== 'undefined' ) this.setMax(maxValue);
};

jvm.NumericScale.prototype = {
  setMin: function(min) {
    this.clearMinValue = min;
    if (typeof this.normalize === 'function') {
      this.minValue = this.normalize(min);
    } else {
      this.minValue = min;
    }
  },

  setMax: function(max) {
    this.clearMaxValue = max;
    if (typeof this.normalize === 'function') {
      this.maxValue = this.normalize(max);
    } else {
      this.maxValue = max;
    }
  },

  setScale: function(scale) {
    var i;

    this.scale = [];
    for (i = 0; i < scale.length; i++) {
      this.scale[i] = [scale[i]];
    }
  },

  setNormalizeFunction: function(f) {
    if (f === 'polynomial') {
      this.normalize = function(value) {
        return Math.pow(value, 0.2);
      }
    } else if (f === 'linear') {
      delete this.normalize;
    } else {
      this.normalize = f;
    }
    this.setMin(this.clearMinValue);
    this.setMax(this.clearMaxValue);
  },

  getValue: function(value) {
    var lengthes = [],
        fullLength = 0,
        l,
        i = 0,
        c;

    if (typeof this.normalize === 'function') {
      value = this.normalize(value);
    }
    for (i = 0; i < this.scale.length-1; i++) {
      l = this.vectorLength(this.vectorSubtract(this.scale[i+1], this.scale[i]));
      lengthes.push(l);
      fullLength += l;
    }

    c = (this.maxValue - this.minValue) / fullLength;
    for (i=0; i<lengthes.length; i++) {
      lengthes[i] *= c;
    }

    i = 0;
    value -= this.minValue;
    while (value - lengthes[i] >= 0) {
      value -= lengthes[i];
      i++;
    }

    if (i == this.scale.length - 1) {
      value = this.vectorToNum(this.scale[i])
    } else {
      value = (
        this.vectorToNum(
          this.vectorAdd(this.scale[i],
            this.vectorMult(
              this.vectorSubtract(this.scale[i+1], this.scale[i]),
              (value) / (lengthes[i])
            )
          )
        )
      );
    }

    return value;
  },

  vectorToNum: function(vector) {
    var num = 0,
        i;

    for (i = 0; i < vector.length; i++) {
      num += Math.round(vector[i])*Math.pow(256, vector.length-i-1);
    }
    return num;
  },

  vectorSubtract: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] - vector2[i];
    }
    return vector;
  },

  vectorAdd: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] + vector2[i];
    }
    return vector;
  },

  vectorMult: function(vector, num) {
    var result = [],
        i;

    for (i = 0; i < vector.length; i++) {
      result[i] = vector[i] * num;
    }
    return result;
  },

  vectorLength: function(vector) {
    var result = 0,
        i;
    for (i = 0; i < vector.length; i++) {
      result += vector[i] * vector[i];
    }
    return Math.sqrt(result);
  },

  /* Derived from d3 implementation https://github.com/mbostock/d3/blob/master/src/scale/linear.js#L94 */
  getTicks: function(){
    var m = 5,
        extent = [this.clearMinValue, this.clearMaxValue],
        span = extent[1] - extent[0],
        step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
        err = m / span * step,
        ticks = [],
        tick,
        v;

    if (err <= .15) step *= 10;
    else if (err <= .35) step *= 5;
    else if (err <= .75) step *= 2;

    extent[0] = Math.floor(extent[0] / step) * step;
    extent[1] = Math.ceil(extent[1] / step) * step;

    tick = extent[0];
    while (tick <= extent[1]) {
      if (tick == extent[0]) {
        v = this.clearMinValue;
      } else if (tick == extent[1]) {
        v = this.clearMaxValue;
      } else {
        v = tick;
      }
      ticks.push({
        label: tick,
        value: this.getValue(v)
      });
      tick += step;
    }

    return ticks;
  }
};
jvm.ColorScale = function(colors, normalizeFunction, minValue, maxValue) {
  jvm.ColorScale.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.ColorScale, jvm.NumericScale);

jvm.ColorScale.prototype.setScale = function(scale) {
  var i;

  for (i = 0; i < scale.length; i++) {
    this.scale[i] = jvm.ColorScale.rgbToArray(scale[i]);
  }
};

jvm.ColorScale.prototype.getValue = function(value) {
  return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, value));
};

jvm.ColorScale.arrayToRgb = function(ar) {
  var rgb = '#',
      d,
      i;

  for (i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length == 1 ? '0'+d : d;
  }
  return rgb;
};

jvm.ColorScale.numToRgb = function(num) {
  num = num.toString(16);

  while (num.length < 6) {
    num = '0' + num;
  }

  return '#'+num;
};

jvm.ColorScale.rgbToArray = function(rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};/**
 * Represents map legend.
 * @constructor
 * @param {Object} params Configuration parameters.
 * @param {String} params.cssClass Additional CSS class to apply to legend element.
 * @param {Boolean} params.vertical If <code>true</code> legend will be rendered as vertical.
 * @param {String} params.title Legend title.
 * @param {Function} params.labelRender Method to convert series values to legend labels.
 */
jvm.Legend = function(params) {
  this.params = params || {};
  this.map = this.params.map;
  this.series = this.params.series;
  this.body = jvm.$('<div/>');
  this.body.addClass('jvectormap-legend');
  if (this.params.cssClass) {
    this.body.addClass(this.params.cssClass);
  }

  if (params.vertical) {
    this.map.legendCntVertical.append( this.body );
  } else {
    this.map.legendCntHorizontal.append( this.body );
  }

  this.render();
}

jvm.Legend.prototype.render = function(){
  var ticks = this.series.scale.getTicks(),
      i,
      inner = jvm.$('<div/>').addClass('jvectormap-legend-inner'),
      tick,
      sample,
      label;

  this.body.html('');
  if (this.params.title) {
    this.body.append(
      jvm.$('<div/>').addClass('jvectormap-legend-title').html(this.params.title)
    );
  }
  this.body.append(inner);

  for (i = 0; i < ticks.length; i++) {
    tick = jvm.$('<div/>').addClass('jvectormap-legend-tick');
    sample = jvm.$('<div/>').addClass('jvectormap-legend-tick-sample');

    switch (this.series.params.attribute) {
      case 'fill':
        if (jvm.isImageUrl(ticks[i].value)) {
          sample.css('background', 'url('+ticks[i].value+')');
        } else {
          sample.css('background', ticks[i].value);
        }
        break;
      case 'stroke':
        sample.css('background', ticks[i].value);
        break;
      case 'image':
        sample.css('background', 'url('+(typeof ticks[i].value === 'object' ? ticks[i].value.url : ticks[i].value)+') no-repeat center center');
        break;
      case 'r':
        jvm.$('<div/>').css({
          'border-radius': ticks[i].value,
          border: this.map.params.markerStyle.initial['stroke-width']+'px '+
                  this.map.params.markerStyle.initial['stroke']+' solid',
          width: ticks[i].value * 2 + 'px',
          height: ticks[i].value * 2 + 'px',
          background: this.map.params.markerStyle.initial['fill']
        }).appendTo(sample);
        break;
    }
    tick.append( sample );
    label = ticks[i].label;
    if (this.params.labelRender) {
      label = this.params.labelRender(label);
    }
    tick.append( jvm.$('<div>'+label+' </div>').addClass('jvectormap-legend-tick-text') );
    inner.append(tick);
  }
  inner.append( jvm.$('<div/>').css('clear', 'both') );
}/**
 * Creates data series.
 * @constructor
 * @param {Object} params Parameters to initialize series with.
 * @param {Array} params.values The data set to visualize.
 * @param {String} params.attribute Numeric, color or image attribute to use for data visualization. This could be: <code>fill</code>, <code>stroke</code>, <code>fill-opacity</code>, <code>stroke-opacity</code> for markers and regions and <code>r</code> (radius) or <code>image</code> for markers only.
 * @param {Array} params.scale Values used to map a dimension of data to a visual representation. The first value sets visualization for minimum value from the data set and the last value sets visualization for the maximum value. There also could be intermidiate values. Default value is <code>['#C8EEFF', '#0071A4']</code>.
 * @param {Function|String} params.normalizeFunction The function used to map input values to the provided scale. This parameter could be provided as function or one of the strings: <code>'linear'</code> or <code>'polynomial'</code>, while <code>'linear'</code> is used by default. The function provided takes value from the data set as an input and returns corresponding value from the scale.
 * @param {Number} params.min Minimum value of the data set. Could be calculated automatically if not provided.
 * @param {Number} params.max Maximum value of the data set. Could be calculated automatically if not provided.
 */
jvm.DataSeries = function (params, elements, map) {
  var scaleConstructor;

  params = params || {};
  params.attribute = params.attribute || "fill";

  this.elements = elements;
  this.params = params;
  this.map = map;

  if (params.attributes) {
    this.setAttributes(params.attributes);
  }

  if (jvm.$.isArray(params.scale)) {
    scaleConstructor =
      params.attribute === "fill" || params.attribute === "stroke"
        ? jvm.ColorScale
        : jvm.NumericScale;
    this.scale = new scaleConstructor(
      params.scale,
      params.normalizeFunction,
      params.min,
      params.max,
    );
  } else if (params.scale) {
    this.scale = new jvm.OrdinalScale(params.scale);
  } else {
    this.scale = new jvm.SimpleScale(params.scale);
  }

  this.values = params.values || {};
  this.setValues(this.values);

  if (this.params.legend) {
    this.legend = new jvm.Legend(
      jvm.$.extend(
        {
          map: this.map,
          series: this,
        },
        this.params.legend,
      ),
    );
  }
};

jvm.DataSeries.prototype = {
  setAttributes: function (key, attr) {
    var attrs = key,
      code;

    if (typeof key == "string") {
      if (this.elements[key]) {
        this.elements[key].setStyle(this.params.attribute, attr);
      }
    } else {
      for (code in attrs) {
        if (this.elements[code]) {
          this.elements[code].element.setStyle(
            this.params.attribute,
            attrs[code],
          );
        }
      }
    }
  },

  /**
   * Set values for the data set.
   * @param {Object} values Object which maps codes of regions or markers to values.
   */
  setValues: function (values) {
    var max = -Number.MAX_VALUE,
      min = Number.MAX_VALUE,
      val,
      cc,
      attrs = {};

    if (
      !(this.scale instanceof jvm.OrdinalScale) &&
      !(this.scale instanceof jvm.SimpleScale)
    ) {
      // we have a color scale as an array
      if (
        typeof this.params.min === "undefined" ||
        typeof this.params.max === "undefined"
      ) {
        // min and/or max are not defined, so calculate them
        for (cc in values) {
          val = parseFloat(values[cc]);
          if (val > max) max = val;
          if (val < min) min = val;
        }
      }

      if (typeof this.params.min === "undefined") {
        this.scale.setMin(min);
        this.params.min = min;
      } else {
        this.scale.setMin(this.params.min);
      }

      if (typeof this.params.max === "undefined") {
        this.scale.setMax(max);
        this.params.max = max;
      } else {
        this.scale.setMax(this.params.max);
      }

      for (cc in values) {
        if (cc != "indexOf") {
          val = parseFloat(values[cc]);
          if (!isNaN(val)) {
            attrs[cc] = this.scale.getValue(val);
          } else {
            attrs[cc] =
              this.elements[cc].element.style.initial[this.params.attribute];
          }
        }
      }
    } else {
      for (cc in values) {
        if (values[cc]) {
          attrs[cc] = this.scale.getValue(values[cc]);
        } else {
          attrs[cc] =
            this.elements[cc].element.style.initial[this.params.attribute];
        }
      }
    }

    this.setAttributes(attrs);
    jvm.$.extend(this.values, values);
  },

  clear: function () {
    var key,
      attrs = {};

    for (key in this.values) {
      if (this.elements[key]) {
        attrs[key] =
          this.elements[key].element.shape.style.initial[this.params.attribute];
      }
    }
    this.setAttributes(attrs);
    this.values = {};
  },

  clearAndSet: function (values) {
    this.clear();
    this.setValues(values);
  },

  /**
   * Set scale of the data series.
   * @param {Array} scale Values representing scale.
   */
  setScale: function (scale) {
    this.scale.setScale(scale);
    if (this.values) {
      this.setValues(this.values);
    }
  },

  /**
   * Set normalize function of the data series.
   * @param {Function|String} f Normalize function.
   */
  setNormalizeFunction: function (f) {
    this.scale.setNormalizeFunction(f);
    if (this.values) {
      this.setValues(this.values);
    }
  },
};
/**
 * Contains methods for transforming point on sphere to
 * Cartesian coordinates using various projections.
 * @class
 */
jvm.Proj = {
  degRad: 180 / Math.PI,
  radDeg: Math.PI / 180,
  radius: 6381372,

  sgn: function(n){
    if (n > 0) {
      return 1;
    } else if (n < 0) {
      return -1;
    } else {
      return n;
    }
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Miller projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  mill: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan((45 + 0.4 * lat) * this.radDeg)) / 0.8
    };
  },

  /**
   * Inverse function of mill()
   * Converts Cartesian coordinates to point on sphere using Miller projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  mill_inv: function(x, y, c){
    return {
      lat: (2.5 * Math.atan(Math.exp(0.8 * y / this.radius)) - 5 * Math.PI / 8) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Mercator projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  merc: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))
    };
  },

  /**
   * Inverse function of merc()
   * Converts Cartesian coordinates to point on sphere using Mercator projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  merc_inv: function(x, y, c){
    return {
      lat: (2 * Math.atan(Math.exp(y / this.radius)) - Math.PI / 2) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  aea: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        fi = lat * this.radDeg,
        lambda = lng * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        theta = n*(lambda-lambda0),
        ro = Math.sqrt(C-2*n*Math.sin(fi))/n,
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n;

    return {
      x: ro * Math.sin(theta) * this.radius,
      y: - (ro0 - ro * Math.cos(theta)) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  aea_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n,
        ro = Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (Math.asin((C - ro * ro * n * n) / (2 * n))) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Lambert conformal
   * conic projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  lcc: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        lambda = lng * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        fi = lat * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi / 2 ), n ),
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n );

    return {
      x: ro * Math.sin( n * (lambda - lambda0) ) * this.radius,
      y: - (ro0 - ro * Math.cos( n * (lambda - lambda0) ) ) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Lambert conformal conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  lcc_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n ),
        ro = this.sgn(n) * Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (2 * Math.atan(Math.pow(F/ro, 1/n)) - Math.PI / 2) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  }
};jvm.MapObject = function(config){};

jvm.MapObject.prototype.getLabelText = function(key){
  var text;

  if (this.config.label) {
    if (typeof this.config.label.render === 'function') {
      text = this.config.label.render(key);
    } else {
      text = key;
    }
  } else {
    text = null;
  }
  return text;
}

jvm.MapObject.prototype.getLabelOffsets = function(key){
  var offsets;

  if (this.config.label) {
    if (typeof this.config.label.offsets === 'function') {
      offsets = this.config.label.offsets(key);
    } else if (typeof this.config.label.offsets === 'object') {
      offsets = this.config.label.offsets[key];
    }
  }
  return offsets || [0, 0];
}

/**
 * Set hovered state to the element. Hovered state means mouse cursor is over element. Styles will be updates respectively.
 * @param {Boolean} isHovered <code>true</code> to make element hovered, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setHovered = function(isHovered){
  if (this.isHovered !== isHovered) {
    this.isHovered = isHovered;
    this.shape.isHovered = isHovered;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isHovered = isHovered;
      this.label.updateStyle();
    }
  }
};

/**
 * Set selected state to the element. Styles will be updates respectively.
 * @param {Boolean} isSelected <code>true</code> to make element selected, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setSelected = function(isSelected){
  if (this.isSelected !== isSelected) {
    this.isSelected = isSelected;
    this.shape.isSelected = isSelected;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isSelected = isSelected;
      this.label.updateStyle();
    }
    jvm.$(this.shape).trigger('selected', [isSelected]);
  }
};

jvm.MapObject.prototype.setStyle = function(){
	this.shape.setStyle.apply(this.shape, arguments);
};

jvm.MapObject.prototype.remove = function(){
  this.shape.remove();
  if (this.label) {
    this.label.remove();
  }
};jvm.Region = function(config){
  var bbox,
      text,
      offsets,
      labelDx,
      labelDy;

  this.config = config;
  this.map = this.config.map;

  this.shape = config.canvas.addPath({
    d: config.path,
    'data-code': config.code
  }, config.style, config.canvas.rootElement);
  this.shape.addClass('jvectormap-region jvectormap-element');

  bbox = this.shape.getBBox();

  text = this.getLabelText(config.code);
  if (this.config.label && text) {
    offsets = this.getLabelOffsets(config.code);
    this.labelX = bbox.x + bbox.width / 2 + offsets[0];
    this.labelY = bbox.y + bbox.height / 2 + offsets[1];
    this.label = config.canvas.addText({
      text: text,
      'text-anchor': 'middle',
      'alignment-baseline': 'central',
      x: this.labelX,
      y: this.labelY,
      'data-code': config.code
    }, config.labelStyle, config.labelsGroup);
    this.label.addClass('jvectormap-region jvectormap-element');
  }
};

jvm.inherits(jvm.Region, jvm.MapObject);

jvm.Region.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale
    });
  }
};jvm.Marker = function(config){
  var text,
      offsets;

  this.config = config;
  this.map = this.config.map;

  this.isImage = !!this.config.style.initial.image;
  this.createShape();

  text = this.getLabelText(config.index);
  if (this.config.label && text) {
    this.offsets = this.getLabelOffsets(config.index);
    this.labelX = config.cx / this.map.scale - this.map.transX;
    this.labelY = config.cy / this.map.scale - this.map.transY;
    this.label = config.canvas.addText({
      text: text,
      'data-index': config.index,
      dy: "0.6ex",
      x: this.labelX,
      y: this.labelY
    }, config.labelStyle, config.labelsGroup);

    this.label.addClass('jvectormap-marker jvectormap-element');
  }
};

jvm.inherits(jvm.Marker, jvm.MapObject);

jvm.Marker.prototype.createShape = function(){
  var that = this;

  if (this.shape) {
    this.shape.remove();
  }
  this.shape = this.config.canvas[this.isImage ? 'addImage' : 'addCircle']({
    "data-index": this.config.index,
    cx: this.config.cx,
    cy: this.config.cy
  }, this.config.style, this.config.group);

  this.shape.addClass('jvectormap-marker jvectormap-element');

  if (this.isImage) {
    jvm.$(this.shape.node).on('imageloaded', function(){
      that.updateLabelPosition();
    });
  }
};

jvm.Marker.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.offsets[0] +
         this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
    });
  }
};

jvm.Marker.prototype.setStyle = function(property, value){
  var isImage;

  jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments);

  if (property === 'r') {
    this.updateLabelPosition();
  }

  isImage = !!this.shape.get('image');
  if (isImage != this.isImage) {
    this.isImage = isImage;
    this.config.style = jvm.$.extend(true, {}, this.shape.style);
    this.createShape();
  }
};/**
 * Creates map, draws paths, binds events.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {String} params.map Name of the map in the format <code>territory_proj_lang</code> where <code>territory</code> is a unique code or name of the territory which the map represents (ISO 3166 standard is used where possible), <code>proj</code> is a name of projection used to generate representation of the map on the plane (projections are named according to the conventions of proj4 utility) and <code>lang</code> is a code of the language, used for the names of regions.
 * @param {String} params.backgroundColor Background color of the map in CSS format.
 * @param {Boolean} params.zoomOnScroll When set to true map could be zoomed using mouse scroll. Default value is <code>true</code>.
 * @param {Number} params.zoomOnScrollSpeed Mouse scroll speed. Number from 1 to 10. Default value is <code>3</code>.
 * @param {Boolean} params.panOnDrag When set to true, the map pans when being dragged. Default value is <code>true</code>.
 * @param {Number} params.zoomMax Indicates the maximum zoom ratio which could be reached zooming the map. Default value is <code>8</code>.
 * @param {Number} params.zoomMin Indicates the minimum zoom ratio which could be reached zooming the map. Default value is <code>1</code>.
 * @param {Number} params.zoomStep Indicates the multiplier used to zoom map with +/- buttons. Default value is <code>1.6</code>.
 * @param {Boolean} params.zoomAnimate Indicates whether or not to animate changing of map zoom with zoom buttons.
 * @param {Boolean} params.regionsSelectable When set to true regions of the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.regionsSelectableOne Allow only one region to be selected at the moment. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectable When set to true markers on the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectableOne Allow only one marker to be selected at the moment. Default value is <code>false</code>.
 * @param {Object} params.regionStyle Set the styles for the map's regions. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'white',
    "fill-opacity": 1,
    stroke: 'none',
    "stroke-width": 0,
    "stroke-opacity": 1
  },
  hover: {
    "fill-opacity": 0.8,
    cursor: 'pointer'
  },
  selected: {
    fill: 'yellow'
  },
  selectedHover: {
  }
}</pre>
* @param {Object} params.regionLabelStyle Set the styles for the regions' labels. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object} params.markerStyle Set the styles for the map's markers. Any parameter suitable for <code>regionStyle</code> could be used as well as numeric parameter <code>r</code> to set the marker's radius. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'grey',
    stroke: '#505050',
    "fill-opacity": 1,
    "stroke-width": 1,
    "stroke-opacity": 1,
    r: 5
  },
  hover: {
    stroke: 'black',
    "stroke-width": 2,
    cursor: 'pointer'
  },
  selected: {
    fill: 'blue'
  },
  selectedHover: {
  }
}</pre>
You can also use <code>image</code> style attribute for markers. By default marker images are centered with the target point on map. To supply a custom offset please use the following format:
<pre>{
  url: 'image/url',
  offset: [-10, 5]
}</pre>
 * @param {Object} params.markerLabelStyle Set the styles for the markers' labels. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object|Array} params.markers Set of markers to add to the map during initialization. In case of array is provided, codes of markers will be set as string representations of array indexes. Each marker is represented by <code>latLng</code> (array of two numeric values), <code>name</code> (string which will be show on marker's tip) and any marker styles.
 * @param {Object} params.series Object with two keys: <code>markers</code> and <code>regions</code>. Each of which is an array of series configs to be applied to the respective map elements. See <a href="jvm.DataSeries.html">DataSeries</a> description for a list of parameters available.
 * @param {Object|String} params.focusOn This parameter sets the initial position and scale of the map viewport. See <code>setFocus</code> docuemntation for possible parameters.
 * @param {Object} params.labels Defines parameters for rendering static labels. Object could contain two keys: <code>regions</code> and <code>markers</code>. Each key value defines configuration object with the following possible options:
<ul>
  <li><code>render {Function}</code> - defines method for converting region code or marker index to actual label value.</li>
  <li><code>offsets {Object|Function}</code> - provides method or object which could be used to define label offset by region code or marker index.</li>
</ul>
<b>Plase note: static labels feature is not supported in Internet Explorer 8 and below.</b>
 * @param {Array|Object|String} params.selectedRegions Set initially selected regions.
 * @param {Array|Object|String} params.selectedMarkers Set initially selected markers.
 * @param {Function} params.onRegionTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the region tip is going to be shown.
 * @param {Function} params.onRegionOver <code>(Event e, String code)</code> Will be called on region mouse over event.
 * @param {Function} params.onRegionOut <code>(Event e, String code)</code> Will be called on region mouse out event.
 * @param {Function} params.onRegionClick <code>(Event e, String code)</code> Will be called on region click event.
 * @param {Function} params.onRegionSelected <code>(Event e, String code, Boolean isSelected, Array selectedRegions)</code> Will be called when region is (de)selected. <code>isSelected</code> parameter of the callback indicates whether region is selected or not. <code>selectedRegions</code> contains codes of all currently selected regions.
 * @param {Function} params.onMarkerTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the marker tip is going to be shown.
 * @param {Function} params.onMarkerOver <code>(Event e, String code)</code> Will be called on marker mouse over event.
 * @param {Function} params.onMarkerOut <code>(Event e, String code)</code> Will be called on marker mouse out event.
 * @param {Function} params.onMarkerClick <code>(Event e, String code)</code> Will be called on marker click event.
 * @param {Function} params.onMarkerSelected <code>(Event e, String code, Boolean isSelected, Array selectedMarkers)</code> Will be called when marker is (de)selected. <code>isSelected</code> parameter of the callback indicates whether marker is selected or not. <code>selectedMarkers</code> contains codes of all currently selected markers.
 * @param {Function} params.onViewportChange <code>(Event e, Number scale)</code> Triggered when the map's viewport is changed (map was panned or zoomed).
 */
jvm.Map = function (params) {
  var map = this,
    e;

  this.params = jvm.$.extend(true, {}, jvm.Map.defaultParams, params);

  if (!jvm.Map.maps[this.params.map]) {
    throw new Error(
      "Attempt to use map which was not loaded: " + this.params.map,
    );
  }

  this.mapData = jvm.Map.maps[this.params.map];
  this.markers = {};
  this.regions = {};
  this.regionsColors = {};
  this.regionsData = {};

  this.container = jvm.$("<div>").addClass("jvectormap-container");
  if (this.params.container) {
    this.params.container.append(this.container);
  }
  this.container.data("mapObject", this);

  this.defaultWidth = this.mapData.width;
  this.defaultHeight = this.mapData.height;

  this.setBackgroundColor(this.params.backgroundColor);

  this.onResize = function () {
    map.updateSize();
  };
  jvm.$(window).resize(this.onResize);

  for (e in jvm.Map.apiEvents) {
    if (this.params[e]) {
      this.container.bind(jvm.Map.apiEvents[e] + ".jvectormap", this.params[e]);
    }
  }

  this.canvas = new jvm.VectorCanvas(
    this.container[0],
    this.width,
    this.height,
  );

  if (this.params.bindTouchEvents) {
    if (
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    ) {
      this.bindContainerTouchEvents();
    } else if (window.MSGesture) {
      this.bindContainerPointerEvents();
    }
  }
  this.bindContainerEvents();
  this.bindElementEvents();
  this.createTip();
  if (this.params.zoomButtons) {
    this.bindZoomButtons();
  }

  this.createRegions();
  this.createMarkers(this.params.markers || {});

  this.updateSize();

  if (this.params.focusOn) {
    if (typeof this.params.focusOn === "string") {
      this.params.focusOn = { region: this.params.focusOn };
    } else if (jvm.$.isArray(this.params.focusOn)) {
      this.params.focusOn = { regions: this.params.focusOn };
    }
    this.setFocus(this.params.focusOn);
  }

  if (this.params.selectedRegions) {
    this.setSelectedRegions(this.params.selectedRegions);
  }
  if (this.params.selectedMarkers) {
    this.setSelectedMarkers(this.params.selectedMarkers);
  }

  this.legendCntHorizontal = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h");
  this.legendCntVertical = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v");
  this.container.append(this.legendCntHorizontal);
  this.container.append(this.legendCntVertical);

  if (this.params.series) {
    this.createSeries();
  }
};

jvm.Map.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,

  width: 0,
  height: 0,

  /**
   * Set background color of the map.
   * @param {String} backgroundColor Background color in CSS format.
   */
  setBackgroundColor: function (backgroundColor) {
    this.container.css("background-color", backgroundColor);
  },

  resize: function () {
    var curBaseScale = this.baseScale;
    if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
      this.baseScale = this.height / this.defaultHeight;
      this.baseTransX =
        Math.abs(this.width - this.defaultWidth * this.baseScale) /
        (2 * this.baseScale);
    } else {
      this.baseScale = this.width / this.defaultWidth;
      this.baseTransY =
        Math.abs(this.height - this.defaultHeight * this.baseScale) /
        (2 * this.baseScale);
    }
    this.scale *= this.baseScale / curBaseScale;
    this.transX *= this.baseScale / curBaseScale;
    this.transY *= this.baseScale / curBaseScale;
  },

  /**
   * Synchronize the size of the map with the size of the container. Suitable in situations where the size of the container is changed programmatically or container is shown after it became visible.
   */
  updateSize: function () {
    this.width = this.container.width();
    this.height = this.container.height();
    this.resize();
    this.canvas.setSize(this.width, this.height);
    this.applyTransform();
  },

  /**
   * Reset all the series and show the map with the initial zoom.
   */
  reset: function () {
    var key, i;

    for (key in this.series) {
      for (i = 0; i < this.series[key].length; i++) {
        this.series[key][i].clear();
      }
    }
    this.scale = this.baseScale;
    this.transX = this.baseTransX;
    this.transY = this.baseTransY;
    this.applyTransform();
  },

  applyTransform: function () {
    var maxTransX, maxTransY, minTransX, minTransY;

    if (this.defaultWidth * this.scale <= this.width) {
      maxTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
      minTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    } else {
      maxTransX = 0;
      minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
    }

    if (this.defaultHeight * this.scale <= this.height) {
      maxTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
      minTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    } else {
      maxTransY = 0;
      minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
    }

    if (this.transY > maxTransY) {
      this.transY = maxTransY;
    } else if (this.transY < minTransY) {
      this.transY = minTransY;
    }
    if (this.transX > maxTransX) {
      this.transX = maxTransX;
    } else if (this.transX < minTransX) {
      this.transX = minTransX;
    }

    this.canvas.applyTransformParams(this.scale, this.transX, this.transY);

    if (this.markers) {
      this.repositionMarkers();
    }

    this.repositionLabels();

    this.container.trigger("viewportChange", [
      this.scale / this.baseScale,
      this.transX,
      this.transY,
    ]);
  },

  bindContainerEvents: function () {
    var mouseDown = false,
      oldPageX,
      oldPageY,
      map = this;

    if (this.params.panOnDrag) {
      this.container
        .mousemove(function (e) {
          if (mouseDown) {
            map.transX -= (oldPageX - e.pageX) / map.scale;
            map.transY -= (oldPageY - e.pageY) / map.scale;

            map.applyTransform();

            oldPageX = e.pageX;
            oldPageY = e.pageY;
          }
          return false;
        })
        .mousedown(function (e) {
          mouseDown = true;
          oldPageX = e.pageX;
          oldPageY = e.pageY;
          return false;
        });

      this.onContainerMouseUp = function () {
        mouseDown = false;
      };
      jvm.$("body").mouseup(this.onContainerMouseUp);
    }

    if (this.params.zoomOnScroll) {
      this.container.mousewheel(function (event, delta, deltaX, deltaY) {
        var offset = jvm.$(map.container).offset(),
          centerX = event.pageX - offset.left,
          centerY = event.pageY - offset.top,
          zoomStep = Math.pow(
            1 + map.params.zoomOnScrollSpeed / 1000,
            event.deltaFactor * event.deltaY,
          );

        map.tip.hide();

        map.setScale(map.scale * zoomStep, centerX, centerY);
        event.preventDefault();
      });
    }
  },

  bindContainerTouchEvents: function () {
    var touchStartScale,
      touchStartDistance,
      map = this,
      touchX,
      touchY,
      centerTouchX,
      centerTouchY,
      lastTouchesLength,
      handleTouchEvent = function (e) {
        var touches = e.originalEvent.touches,
          offset,
          scale,
          transXOld,
          transYOld;

        if (e.type == "touchstart") {
          lastTouchesLength = 0;
        }

        if (touches.length == 1) {
          if (lastTouchesLength == 1) {
            transXOld = map.transX;
            transYOld = map.transY;
            map.transX -= (touchX - touches[0].pageX) / map.scale;
            map.transY -= (touchY - touches[0].pageY) / map.scale;
            map.applyTransform();
            map.tip.hide();
            if (transXOld != map.transX || transYOld != map.transY) {
              e.preventDefault();
            }
          }
          touchX = touches[0].pageX;
          touchY = touches[0].pageY;
        } else if (touches.length == 2) {
          if (lastTouchesLength == 2) {
            scale =
              Math.sqrt(
                Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                  Math.pow(touches[0].pageY - touches[1].pageY, 2),
              ) / touchStartDistance;
            map.setScale(touchStartScale * scale, centerTouchX, centerTouchY);
            map.tip.hide();
            e.preventDefault();
          } else {
            offset = jvm.$(map.container).offset();
            if (touches[0].pageX > touches[1].pageX) {
              centerTouchX =
                touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
            } else {
              centerTouchX =
                touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
            }
            if (touches[0].pageY > touches[1].pageY) {
              centerTouchY =
                touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
            } else {
              centerTouchY =
                touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
            }
            centerTouchX -= offset.left;
            centerTouchY -= offset.top;
            touchStartScale = map.scale;
            touchStartDistance = Math.sqrt(
              Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                Math.pow(touches[0].pageY - touches[1].pageY, 2),
            );
          }
        }

        lastTouchesLength = touches.length;
      };

    jvm.$(this.container).bind("touchstart", handleTouchEvent);
    jvm.$(this.container).bind("touchmove", handleTouchEvent);
  },

  bindContainerPointerEvents: function () {
    var map = this,
      gesture = new MSGesture(),
      element = this.container[0],
      handlePointerDownEvent = function (e) {
        gesture.addPointer(e.pointerId);
      },
      handleGestureEvent = function (e) {
        var offset, scale, transXOld, transYOld;

        if (e.translationX != 0 || e.translationY != 0) {
          transXOld = map.transX;
          transYOld = map.transY;
          map.transX += e.translationX / map.scale;
          map.transY += e.translationY / map.scale;
          map.applyTransform();
          map.tip.hide();
          if (transXOld != map.transX || transYOld != map.transY) {
            e.preventDefault();
          }
        }
        if (e.scale != 1) {
          map.setScale(map.scale * e.scale, e.offsetX, e.offsetY);
          map.tip.hide();
          e.preventDefault();
        }
      };

    gesture.target = element;
    element.addEventListener("MSGestureChange", handleGestureEvent, false);
    element.addEventListener("pointerdown", handlePointerDownEvent, false);
  },

  bindElementEvents: function () {
    var map = this,
      pageX,
      pageY,
      mouseMoved;

    this.container.mousemove(function (e) {
      if (Math.abs(pageX - e.pageX) + Math.abs(pageY - e.pageY) > 2) {
        mouseMoved = true;
      }
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseover mouseout",
      function (e) {
        var baseVal =
            jvm.$(this).attr("class").baseVal || jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element,
          tipText =
            type == "region"
              ? map.mapData.paths[code].name
              : map.markers[code].config.name || "",
          tipShowEvent = jvm.$.Event(type + "TipShow.jvectormap"),
          overEvent = jvm.$.Event(type + "Over.jvectormap");

        if (e.type == "mouseover") {
          map.container.trigger(overEvent, [code]);
          if (!overEvent.isDefaultPrevented()) {
            element.setHovered(true);
          }

          map.tip.text(tipText);
          map.container.trigger(tipShowEvent, [map.tip, code]);
          if (!tipShowEvent.isDefaultPrevented()) {
            map.tip.show();
            map.tipWidth = map.tip.width();
            map.tipHeight = map.tip.height();
          }
        } else {
          element.setHovered(false);
          map.tip.hide();
          map.container.trigger(type + "Out.jvectormap", [code]);
        }
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mousedown",
      function (e) {
        pageX = e.pageX;
        pageY = e.pageY;
        mouseMoved = false;
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseup",
      function () {
        var baseVal = jvm.$(this).attr("class").baseVal
            ? jvm.$(this).attr("class").baseVal
            : jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          clickEvent = jvm.$.Event(type + "Click.jvectormap"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element;

        if (!mouseMoved) {
          map.container.trigger(clickEvent, [code]);
          if (
            (type === "region" && map.params.regionsSelectable) ||
            (type === "marker" && map.params.markersSelectable)
          ) {
            if (!clickEvent.isDefaultPrevented()) {
              if (map.params[type + "sSelectableOne"]) {
                map.clearSelected(type + "s");
              }
              element.setSelected(!element.isSelected);
            }
          }
        }
      },
    );
  },

  bindZoomButtons: function () {
    var map = this;

    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomin")
      .text("+")
      .appendTo(this.container);
    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomout")
      .html("&#x2212;")
      .appendTo(this.container);

    this.container.find(".jvectormap-zoomin").click(function () {
      map.setScale(
        map.scale * map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
    this.container.find(".jvectormap-zoomout").click(function () {
      map.setScale(
        map.scale / map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
  },

  createTip: function () {
    var map = this;

    this.tip = jvm
      .$("<div/>")
      .addClass("jvectormap-tip")
      .appendTo(jvm.$("body"));

    this.container.mousemove(function (e) {
      var left = e.pageX - 15 - map.tipWidth,
        top = e.pageY - 15 - map.tipHeight;

      if (left < 5) {
        left = e.pageX + 15;
      }
      if (top < 5) {
        top = e.pageY + 15;
      }

      map.tip.css({
        left: left,
        top: top,
      });
    });
  },

  setScale: function (scale, anchorX, anchorY, isCentered, animate) {
    var viewportChangeEvent = jvm.$.Event("zoom.jvectormap"),
      interval,
      that = this,
      i = 0,
      count = Math.abs(
        Math.round(((scale - this.scale) * 60) / Math.max(scale, this.scale)),
      ),
      scaleStart,
      scaleDiff,
      transXStart,
      transXDiff,
      transYStart,
      transYDiff,
      transX,
      transY,
      deferred = new jvm.$.Deferred();

    if (scale > this.params.zoomMax * this.baseScale) {
      scale = this.params.zoomMax * this.baseScale;
    } else if (scale < this.params.zoomMin * this.baseScale) {
      scale = this.params.zoomMin * this.baseScale;
    }

    if (typeof anchorX != "undefined" && typeof anchorY != "undefined") {
      const zoomStep = scale / this.scale;
      if (isCentered) {
        transX =
          anchorX +
          (this.defaultWidth * (this.width / (this.defaultWidth * scale))) / 2;
        transY =
          anchorY +
          (this.defaultHeight * (this.height / (this.defaultHeight * scale))) /
            2;
      } else {
        transX = this.transX - ((zoomStep - 1) / scale) * anchorX;
        transY = this.transY - ((zoomStep - 1) / scale) * anchorY;
      }
    }

    if (animate && count > 0) {
      scaleStart = this.scale;
      scaleDiff = (scale - scaleStart) / count;
      transXStart = this.transX * this.scale;
      transYStart = this.transY * this.scale;
      transXDiff = (transX * scale - transXStart) / count;
      transYDiff = (transY * scale - transYStart) / count;
      interval = setInterval(function () {
        i += 1;
        that.scale = scaleStart + scaleDiff * i;
        that.transX = (transXStart + transXDiff * i) / that.scale;
        that.transY = (transYStart + transYDiff * i) / that.scale;
        that.applyTransform();
        if (i == count) {
          clearInterval(interval);
          that.container.trigger(viewportChangeEvent, [scale / that.baseScale]);
          deferred.resolve();
        }
      }, 10);
    } else {
      this.transX = transX;
      this.transY = transY;
      this.scale = scale;
      this.applyTransform();
      this.container.trigger(viewportChangeEvent, [scale / this.baseScale]);
      deferred.resolve();
    }

    return deferred;
  },

  /**
   * Set the map's viewport to the specific point and set zoom of the map to the specific level. Point and zoom level could be defined in two ways: using the code of some region to focus on or a central point and zoom level as numbers.
   * @param This method takes a configuration object as the single argument. The options passed to it are the following:
   * @param {Array} params.regions Array of region codes to zoom to.
   * @param {String} params.region Region code to zoom to.
   * @param {Number} params.scale Map scale to set.
   * @param {Number} params.lat Latitude to set viewport to.
   * @param {Number} params.lng Longitude to set viewport to.
   * @param {Number} params.x Number from 0 to 1 specifying the horizontal coordinate of the central point of the viewport.
   * @param {Number} params.y Number from 0 to 1 specifying the vertical coordinate of the central point of the viewport.
   * @param {Boolean} params.animate Indicates whether or not to animate the scale change and transition.
   */
  setFocus: function (config) {
    var bbox, itemBbox, newBbox, codes, i, point;

    config = config || {};

    if (config.region) {
      codes = [config.region];
    } else if (config.regions) {
      codes = config.regions;
    }

    if (codes) {
      for (i = 0; i < codes.length; i++) {
        if (this.regions[codes[i]]) {
          itemBbox = this.regions[codes[i]].element.shape.getBBox();
          if (itemBbox) {
            if (typeof bbox == "undefined") {
              bbox = itemBbox;
            } else {
              newBbox = {
                x: Math.min(bbox.x, itemBbox.x),
                y: Math.min(bbox.y, itemBbox.y),
                width:
                  Math.max(bbox.x + bbox.width, itemBbox.x + itemBbox.width) -
                  Math.min(bbox.x, itemBbox.x),
                height:
                  Math.max(bbox.y + bbox.height, itemBbox.y + itemBbox.height) -
                  Math.min(bbox.y, itemBbox.y),
              };
              bbox = newBbox;
            }
          }
        }
      }
      return this.setScale(
        Math.min(this.width / bbox.width, this.height / bbox.height),
        -(bbox.x + bbox.width / 2),
        -(bbox.y + bbox.height / 2),
        true,
        config.animate,
      );
    } else {
      if (config.lat !== undefined && config.lng !== undefined) {
        point = this.latLngToPoint(config.lat, config.lng);
        config.x = this.transX - point.x / this.scale;
        config.y = this.transY - point.y / this.scale;
      } else if (config.x && config.y) {
        config.x *= -this.defaultWidth;
        config.y *= -this.defaultHeight;
      }
      return this.setScale(
        config.scale * this.baseScale,
        config.x,
        config.y,
        true,
        config.animate,
      );
    }
  },

  getSelected: function (type) {
    var key,
      selected = [];

    for (key in this[type]) {
      if (this[type][key].element.isSelected) {
        selected.push(key);
      }
    }
    return selected;
  },

  /**
   * Return the codes of currently selected regions.
   * @returns {Array}
   */
  getSelectedRegions: function () {
    return this.getSelected("regions");
  },

  /**
   * Return the codes of currently selected markers.
   * @returns {Array}
   */
  getSelectedMarkers: function () {
    return this.getSelected("markers");
  },

  setSelected: function (type, keys) {
    var i;

    if (typeof keys != "object") {
      keys = [keys];
    }

    if (jvm.$.isArray(keys)) {
      for (i = 0; i < keys.length; i++) {
        this[type][keys[i]].element.setSelected(true);
      }
    } else {
      for (i in keys) {
        this[type][i].element.setSelected(!!keys[i]);
      }
    }
  },

  /**
   * Set or remove selected state for the regions.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the region(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of regions, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedRegions: function (keys) {
    this.setSelected("regions", keys);
  },

  /**
   * Set or remove selected state for the markers.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the marker(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of markers, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedMarkers: function (keys) {
    this.setSelected("markers", keys);
  },

  clearSelected: function (type) {
    var select = {},
      selected = this.getSelected(type),
      i;

    for (i = 0; i < selected.length; i++) {
      select[selected[i]] = false;
    }

    this.setSelected(type, select);
  },

  /**
   * Remove the selected state from all the currently selected regions.
   */
  clearSelectedRegions: function () {
    this.clearSelected("regions");
  },

  /**
   * Remove the selected state from all the currently selected markers.
   */
  clearSelectedMarkers: function () {
    this.clearSelected("markers");
  },

  /**
   * Return the instance of Map. Useful when instantiated as a jQuery plug-in.
   * @returns {Map}
   */
  getMapObject: function () {
    return this;
  },

  /**
   * Return the name of the region by region code.
   * @returns {String}
   */
  getRegionName: function (code) {
    return this.mapData.paths[code].name;
  },

  createRegions: function () {
    var key,
      region,
      map = this;

    this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup();

    for (key in this.mapData.paths) {
      const regionStyle =
        typeof this.params.regionStyle === "function"
          ? {
              ...jvm.Map.defaultParams.regionStyle,
              ...this.params.regionStyle(key),
            }
          : this.params.regionStyle;
      region = new jvm.Region({
        map: this,
        path: this.mapData.paths[key].path,
        code: key,
        style: jvm.$.extend(true, {}, regionStyle),
        labelStyle: jvm.$.extend(true, {}, this.params.regionLabelStyle),
        canvas: this.canvas,
        labelsGroup: this.regionLabelsGroup,
        label:
          this.canvas.mode != "vml"
            ? this.params.labels && this.params.labels.regions
            : null,
      });

      jvm.$(region.shape).bind("selected", function (e, isSelected) {
        map.container.trigger("regionSelected.jvectormap", [
          jvm.$(this.node).attr("data-code"),
          isSelected,
          map.getSelectedRegions(),
        ]);
      });
      this.regions[key] = {
        element: region,
        config: this.mapData.paths[key],
      };
    }
  },

  createMarkers: function (markers) {
    var i,
      marker,
      point,
      markerConfig,
      markersArray,
      map = this;

    this.markersGroup = this.markersGroup || this.canvas.addGroup();
    this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup();

    if (jvm.$.isArray(markers)) {
      markersArray = markers.slice();
      markers = {};
      for (i = 0; i < markersArray.length; i++) {
        markers[i] = markersArray[i];
      }
    }

    for (i in markers) {
      markerConfig =
        markers[i] instanceof Array ? { latLng: markers[i] } : markers[i];
      point = this.getMarkerPosition(markerConfig);

      if (point !== false) {
        marker = new jvm.Marker({
          map: this,
          style: jvm.$.extend(true, {}, this.params.markerStyle, {
            initial: markerConfig.style || {},
          }),
          labelStyle: jvm.$.extend(true, {}, this.params.markerLabelStyle),
          index: i,
          cx: point.x,
          cy: point.y,
          group: this.markersGroup,
          canvas: this.canvas,
          labelsGroup: this.markerLabelsGroup,
          label:
            this.canvas.mode != "vml"
              ? this.params.labels && this.params.labels.markers
              : null,
        });

        jvm.$(marker.shape).bind("selected", function (e, isSelected) {
          map.container.trigger("markerSelected.jvectormap", [
            jvm.$(this.node).attr("data-index"),
            isSelected,
            map.getSelectedMarkers(),
          ]);
        });
        if (this.markers[i]) {
          this.removeMarkers([i]);
        }
        this.markers[i] = { element: marker, config: markerConfig };
      }
    }
  },

  repositionMarkers: function () {
    var i, point;

    for (i in this.markers) {
      point = this.getMarkerPosition(this.markers[i].config);
      if (point !== false) {
        this.markers[i].element.setStyle({ cx: point.x, cy: point.y });
      }
    }
  },

  repositionLabels: function () {
    var key;

    for (key in this.regions) {
      this.regions[key].element.updateLabelPosition();
    }

    for (key in this.markers) {
      this.markers[key].element.updateLabelPosition();
    }
  },

  getMarkerPosition: function (markerConfig) {
    if (jvm.Map.maps[this.params.map].projection) {
      return this.latLngToPoint.apply(this, markerConfig.latLng || [0, 0]);
    } else {
      return {
        x: markerConfig.coords[0] * this.scale + this.transX * this.scale,
        y: markerConfig.coords[1] * this.scale + this.transY * this.scale,
      };
    }
  },

  /**
   * Add one marker to the map.
   * @param {String} key Marker unique code.
   * @param {Object} marker Marker configuration parameters.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarker: function (key, marker, seriesData) {
    var markers = {},
      data = [],
      values,
      i,
      seriesData = seriesData || [];

    markers[key] = marker;

    for (i = 0; i < seriesData.length; i++) {
      values = {};
      if (typeof seriesData[i] !== "undefined") {
        values[key] = seriesData[i];
      }
      data.push(values);
    }
    this.addMarkers(markers, data);
  },

  /**
   * Add set of marker to the map.
   * @param {Object|Array} markers Markers to add to the map. In case of array is provided, codes of markers will be set as string representations of array indexes.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarkers: function (markers, seriesData) {
    var i;

    seriesData = seriesData || [];

    this.createMarkers(markers);
    for (i = 0; i < seriesData.length; i++) {
      this.series.markers[i].setValues(seriesData[i] || {});
    }
  },

  /**
   * Remove some markers from the map.
   * @param {Array} markers Array of marker codes to be removed.
   */
  removeMarkers: function (markers) {
    var i;

    for (i = 0; i < markers.length; i++) {
      this.markers[markers[i]].element.remove();
      delete this.markers[markers[i]];
    }
  },

  /**
   * Remove all markers from the map.
   */
  removeAllMarkers: function () {
    var i,
      markers = [];

    for (i in this.markers) {
      markers.push(i);
    }
    this.removeMarkers(markers);
  },

  /**
   * Converts coordinates expressed as latitude and longitude to the coordinates in pixels on the map.
   * @param {Number} lat Latitide of point in degrees.
   * @param {Number} lng Longitude of point in degrees.
   */
  latLngToPoint: function (lat, lng) {
    var point,
      proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      inset,
      bbox;

    if (lng < -180 + centralMeridian) {
      lng += 360;
    }

    point = jvm.Proj[proj.type](lat, lng, centralMeridian);

    inset = this.getInsetForPoint(point.x, point.y);
    if (inset) {
      bbox = inset.bbox;

      point.x =
        ((point.x - bbox[0].x) / (bbox[1].x - bbox[0].x)) *
        inset.width *
        this.scale;
      point.y =
        ((point.y - bbox[0].y) / (bbox[1].y - bbox[0].y)) *
        inset.height *
        this.scale;

      return {
        x: point.x + this.transX * this.scale + inset.left * this.scale,
        y: point.y + this.transY * this.scale + inset.top * this.scale,
      };
    } else {
      return false;
    }
  },

  /**
   * Converts cartesian coordinates into coordinates expressed as latitude and longitude.
   * @param {Number} x X-axis of point on map in pixels.
   * @param {Number} y Y-axis of point on map in pixels.
   */
  pointToLatLng: function (x, y) {
    var proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      insets = jvm.Map.maps[this.params.map].insets,
      i,
      inset,
      bbox,
      nx,
      ny;

    for (i = 0; i < insets.length; i++) {
      inset = insets[i];
      bbox = inset.bbox;

      nx = x - (this.transX * this.scale + inset.left * this.scale);
      ny = y - (this.transY * this.scale + inset.top * this.scale);

      nx =
        (nx / (inset.width * this.scale)) * (bbox[1].x - bbox[0].x) + bbox[0].x;
      ny =
        (ny / (inset.height * this.scale)) * (bbox[1].y - bbox[0].y) +
        bbox[0].y;

      if (
        nx > bbox[0].x &&
        nx < bbox[1].x &&
        ny > bbox[0].y &&
        ny < bbox[1].y
      ) {
        return jvm.Proj[proj.type + "_inv"](nx, -ny, centralMeridian);
      }
    }

    return false;
  },

  getInsetForPoint: function (x, y) {
    var insets = jvm.Map.maps[this.params.map].insets,
      i,
      bbox;

    for (i = 0; i < insets.length; i++) {
      bbox = insets[i].bbox;
      if (x > bbox[0].x && x < bbox[1].x && y > bbox[0].y && y < bbox[1].y) {
        return insets[i];
      }
    }
  },

  createSeries: function () {
    var i, key;

    this.series = {
      markers: [],
      regions: [],
    };

    for (key in this.params.series) {
      for (i = 0; i < this.params.series[key].length; i++) {
        this.series[key][i] = new jvm.DataSeries(
          this.params.series[key][i],
          this[key],
          this,
        );
      }
    }
  },

  /**
   * Gracefully remove the map and and all its accessories, unbind event handlers.
   */
  remove: function () {
    this.tip.remove();
    this.container.remove();
    jvm.$(window).unbind("resize", this.onResize);
    jvm.$("body").unbind("mouseup", this.onContainerMouseUp);
  },
};

jvm.Map.maps = {};
jvm.Map.defaultParams = {
  map: "world_mill_en",
  backgroundColor: "#505050",
  zoomButtons: true,
  zoomOnScroll: true,
  zoomOnScrollSpeed: 3,
  panOnDrag: true,
  zoomMax: 8,
  zoomMin: 1,
  zoomStep: 1.6,
  zoomAnimate: true,
  regionsSelectable: false,
  markersSelectable: false,
  bindTouchEvents: true,
  regionStyle: {
    initial: {
      fill: "white",
      "fill-opacity": 1,
      stroke: "none",
      "stroke-width": 0,
      "stroke-opacity": 1,
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: "pointer",
    },
    selected: {
      fill: "yellow",
    },
    selectedHover: {},
  },
  regionLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
  markerStyle: {
    initial: {
      fill: "grey",
      stroke: "#505050",
      "fill-opacity": 1,
      "stroke-width": 1,
      "stroke-opacity": 1,
      r: 5,
    },
    hover: {
      stroke: "black",
      "stroke-width": 2,
      cursor: "pointer",
    },
    selected: {
      fill: "blue",
    },
    selectedHover: {},
  },
  markerLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
};
jvm.Map.apiEvents = {
  onRegionTipShow: "regionTipShow",
  onRegionOver: "regionOver",
  onRegionOut: "regionOut",
  onRegionClick: "regionClick",
  onRegionSelected: "regionSelected",
  onMarkerTipShow: "markerTipShow",
  onMarkerOver: "markerOver",
  onMarkerOut: "markerOut",
  onMarkerClick: "markerClick",
  onMarkerSelected: "markerSelected",
  onViewportChange: "viewportChange",
};
/**
 * Creates map with drill-down functionality.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {Number} params.maxLevel Maximum number of levels user can go through
 * @param {Object} params.main Config of the main map. See <a href="./jvm-map/">jvm.Map</a> for more information.
 * @param {Function} params.mapNameByCode Function to generate map name by region code. Default value is:
<pre>
function(code, multiMap) {
  return code.toLowerCase()+'_'+
         multiMap.defaultProjection+'_en';
}
</pre>
 * @param {Function} params.mapUrlByCode Function to generate map url by region code. Default value is:
<pre>
function(code, multiMap){
  return 'jquery-jvectormap-data-'+
         code.toLowerCase()+'-'+
         multiMap.defaultProjection+'-en.js';
}
</pre>
 */
jvm.MultiMap = function (params) {
  var that = this;

  this.maps = {};
  this.params = jvm.$.extend(true, {}, jvm.MultiMap.defaultParams, params);
  this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE;
  this.params.main = this.params.main || {};
  this.params.main.multiMapLevel = 0;
  this.history = [this.addMap(this.params.main.map, this.params.main)];
  this.defaultProjection = this.history[0].mapData.projection.type;
  this.mapsLoaded = {};
  this.mapsLoadedData = {};

  this.params.container.css({ position: "relative" });
  this.backButton = jvm
    .$("<div/>")
    .addClass("jvectormap-goback")
    .text("Back")
    .appendTo(this.params.container);
  this.backButton.hide();
  this.backButton.click(function () {
    that.goBack();
  });

  this.spinner = jvm
    .$("<div/>")
    .addClass("jvectormap-spinner")
    .appendTo(this.params.container);
  this.spinner.hide();
};

jvm.MultiMap.prototype = {
  addMap: function (name, config) {
    var cnt = jvm.$("<div/>").css({
      width: "100%",
      height: "100%",
    });

    this.params.container.append(cnt);

    this.maps[name] = new jvm.Map(jvm.$.extend(config, { container: cnt }));
    if (this.params.maxLevel > config.multiMapLevel) {
      this.maps[name].container.on(
        "regionClick.jvectormap",
        { scope: this },
        function (e, code) {
          var multimap = e.data.scope,
            mapName = multimap.params.mapNameByCode(code, multimap);

          if (
            !multimap.drillDownPromise ||
            multimap.drillDownPromise.state() !== "pending"
          ) {
            multimap.drillDown(mapName, code);
          }
        },
      );
    }

    return this.maps[name];
  },

  downloadMap: function (code) {
    var that = this,
      deferred = jvm.$.Deferred();
    const { getDrillDownMap } = this.params;

    const handleMapData = function (data) {
      that.mapsLoaded[code] = true;
      that.mapsLoadedData[code] = data;
      deferred.resolve();
    };

    if (!this.mapsLoaded[code]) {
      if (getDrillDownMap && typeof getDrillDownMap === "function") {
        const result = getDrillDownMap(code);
        if (result && typeof result.then === "function") {
          result
            .then((data) => {
              handleMapData(data);
            })
            .catch(() => {
              deferred.reject();
            });
        } else {
          handleMapData(result);
        }
        return deferred;
      }
      jvm.$.get(this.params.mapUrlByCode(code, this)).then(
        function (data) {
          handleMapData(data);
        },
        function () {
          deferred.reject();
        },
      );
    } else {
      deferred.resolve();
    }
    return deferred;
  },

  drillDown: function (name, code) {
    var currentMap = this.history[this.history.length - 1],
      that = this,
      focusPromise = currentMap.setFocus({ region: code, animate: true }),
      downloadPromise = this.downloadMap(code);

    focusPromise.then(function () {
      if (downloadPromise.state() === "pending") {
        that.spinner.show();
      }
    });
    downloadPromise.always(function () {
      that.spinner.hide();
    });
    this.drillDownPromise = jvm.$.when(downloadPromise, focusPromise);
    this.drillDownPromise.then(function () {
      const { content } = that.mapsLoadedData[code];
      currentMap.params.container.hide();
      if (!that.maps[name]) {
        jvm.$.fn.vectorMap("addMap", name, content);
        that.addMap(name, {
          map: name,
          multiMapLevel: currentMap.params.multiMapLevel + 1,
        });
      } else {
        that.maps[name].params.container.show();
      }
      that.history.push(that.maps[name]);
      that.backButton.show();
    });
  },

  goBack: function () {
    var currentMap = this.history.pop(),
      prevMap = this.history[this.history.length - 1],
      that = this;

    currentMap
      .setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true })
      .then(function () {
        currentMap.params.container.hide();
        prevMap.params.container.show();
        prevMap.updateSize();
        if (that.history.length === 1) {
          that.backButton.hide();
        }
        prevMap.setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true });
      });
  },
};

jvm.MultiMap.defaultParams = {
  mapNameByCode: function (code, multiMap) {
    return code.toLowerCase() + "_" + multiMap.defaultProjection + "_en";
  },
  mapUrlByCode: function (code, multiMap) {
    return (
      "jquery-jvectormap-data-" +
      code.toLowerCase() +
      "-" +
      multiMap.defaultProjection +
      "-en.js"
    );
  },
};


//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/jquery.jvectormap.min.js?`)},"data:image/gif;base64,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":module=>{eval(`module.exports = "data:image/gif;base64,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";

//# sourceURL=webpack://@react-jvectormap/core/data:image/gif;base64,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?`)},jquery:V=>{V.exports=__WEBPACK_EXTERNAL_MODULE_jquery__},react:V=>{V.exports=__WEBPACK_EXTERNAL_MODULE_react__}},__webpack_module_cache__={};function __webpack_require__(V){var x=__webpack_module_cache__[V];if(x!==void 0)return x.exports;var Q=__webpack_module_cache__[V]={id:V,exports:{}};return __webpack_modules__[V](Q,Q.exports,__webpack_require__),Q.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=V=>{var x=V&&V.__esModule?()=>V.default:()=>V;return __webpack_require__.d(x,{a:x}),x},__webpack_require__.d=(V,x)=>{for(var Q in x)__webpack_require__.o(x,Q)&&!__webpack_require__.o(V,Q)&&Object.defineProperty(V,Q,{enumerable:!0,get:x[Q]})},__webpack_require__.o=(V,x)=>Object.prototype.hasOwnProperty.call(V,x),__webpack_require__.r=V=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(V,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(V,"__esModule",{value:!0})},__webpack_require__.b=document.baseURI||self.location.href;var __webpack_exports__=__webpack_require__("./src/index.ts");return __webpack_exports__})()})})(dist);var distExports=dist.exports;const name="world_mill",content={insets:[{width:900,top:0,height:440.7063107441331,bbox:[{y:-12671671123330014e-9,x:-20004297151525836e-9},{y:6930392025135122e-9,x:20026572394749384e-9}],left:0}],paths:{BD:{path:"M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z",name:"Bangladesh"},BE:{path:"M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z",name:"Belgium"},BF:{path:"M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z",name:"Burkina Faso"},BG:{path:"M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z",name:"Bulgaria"},BA:{path:"M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z",name:"Bosnia and Herz."},BN:{path:"M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z",name:"Brunei"},BO:{path:"M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z",name:"Bolivia"},JP:{path:"M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z",name:"Japan"},BI:{path:"M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z",name:"Burundi"},BJ:{path:"M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z",name:"Benin"},BT:{path:"M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z",name:"Bhutan"},JM:{path:"M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z",name:"Jamaica"},BW:{path:"M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z",name:"Botswana"},BR:{path:"M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z",name:"Brazil"},BS:{path:"M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z",name:"Bahamas"},BY:{path:"M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z",name:"Belarus"},BZ:{path:"M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z",name:"Belize"},RU:{path:"M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM871.88,65.81l2.17,-0.13l3.19,1.16l-2.39,1.09l-5.63,0.48l-0.26,-0.84l2.92,-1.76ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z",name:"Russia"},RW:{path:"M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z",name:"Rwanda"},RS:{path:"M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z",name:"Serbia"},TL:{path:"M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z",name:"Timor-Leste"},TM:{path:"M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z",name:"Turkmenistan"},TJ:{path:"M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z",name:"Tajikistan"},RO:{path:"M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z",name:"Romania"},GW:{path:"M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z",name:"Guinea-Bissau"},GT:{path:"M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z",name:"Guatemala"},GR:{path:"M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z",name:"Greece"},GQ:{path:"M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z",name:"Eq. Guinea"},GY:{path:"M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z",name:"Guyana"},GE:{path:"M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z",name:"Georgia"},GB:{path:"M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z",name:"United Kingdom"},GA:{path:"M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z",name:"Gabon"},GN:{path:"M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z",name:"Guinea"},GM:{path:"M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z",name:"Gambia"},GL:{path:"M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z",name:"Greenland"},GH:{path:"M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z",name:"Ghana"},OM:{path:"M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z",name:"Oman"},TN:{path:"M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z",name:"Tunisia"},JO:{path:"M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z",name:"Jordan"},HR:{path:"M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z",name:"Croatia"},HT:{path:"M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z",name:"Haiti"},HU:{path:"M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z",name:"Hungary"},HN:{path:"M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z",name:"Honduras"},PR:{path:"M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z",name:"Puerto Rico"},PS:{path:"M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z",name:"Palestine"},PT:{path:"M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z",name:"Portugal"},PY:{path:"M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z",name:"Paraguay"},PA:{path:"M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z",name:"Panama"},PG:{path:"M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z",name:"Papua New Guinea"},PE:{path:"M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z",name:"Peru"},PK:{path:"M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z",name:"Pakistan"},PH:{path:"M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z",name:"Philippines"},PL:{path:"M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z",name:"Poland"},ZM:{path:"M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z",name:"Zambia"},EH:{path:"M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z",name:"W. Sahara"},EE:{path:"M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z",name:"Estonia"},EG:{path:"M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z",name:"Egypt"},ZA:{path:"M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z",name:"South Africa"},EC:{path:"M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z",name:"Ecuador"},IT:{path:"M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z",name:"Italy"},VN:{path:"M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z",name:"Vietnam"},SB:{path:"M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z",name:"Solomon Is."},ET:{path:"M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z",name:"Ethiopia"},SO:{path:"M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z",name:"Somalia"},ZW:{path:"M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z",name:"Zimbabwe"},ES:{path:"M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z",name:"Spain"},ER:{path:"M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z",name:"Eritrea"},ME:{path:"M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z",name:"Montenegro"},MD:{path:"M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z",name:"Moldova"},MG:{path:"M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z",name:"Madagascar"},MA:{path:"M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z",name:"Morocco"},UZ:{path:"M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z",name:"Uzbekistan"},MM:{path:"M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z",name:"Myanmar"},ML:{path:"M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z",name:"Mali"},MN:{path:"M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z",name:"Mongolia"},MK:{path:"M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z",name:"Macedonia"},MW:{path:"M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z",name:"Malawi"},MR:{path:"M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z",name:"Mauritania"},UG:{path:"M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z",name:"Uganda"},MY:{path:"M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z",name:"Malaysia"},MX:{path:"M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z",name:"Mexico"},IL:{path:"M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z",name:"Israel"},FR:{path:"M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z",name:"France"},XS:{path:"M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z",name:"Somaliland"},FI:{path:"M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z",name:"Finland"},FJ:{path:"M869.95,326.98l-1.21,0.41l-0.08,-0.23l2.97,-1.21l-0.14,0.42l-1.54,0.61ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z",name:"Fiji"},FK:{path:"M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z",name:"Falkland Is."},NI:{path:"M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z",name:"Nicaragua"},NL:{path:"M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z",name:"Netherlands"},NO:{path:"M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z",name:"Norway"},NA:{path:"M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z",name:"Namibia"},VU:{path:"M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z",name:"Vanuatu"},NC:{path:"M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z",name:"New Caledonia"},NE:{path:"M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z",name:"Niger"},NG:{path:"M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z",name:"Nigeria"},NZ:{path:"M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z",name:"New Zealand"},NP:{path:"M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z",name:"Nepal"},XK:{path:"M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z",name:"Kosovo"},CI:{path:"M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z",name:"Côte d'Ivoire"},CH:{path:"M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z",name:"Switzerland"},CO:{path:"M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z",name:"Colombia"},CN:{path:"M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z",name:"China"},CM:{path:"M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z",name:"Cameroon"},CL:{path:"M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z",name:"Chile"},XC:{path:"M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z",name:"N. Cyprus"},CA:{path:"M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z",name:"Canada"},CG:{path:"M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z",name:"Congo"},CF:{path:"M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z",name:"Central African Rep."},CD:{path:"M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z",name:"Dem. Rep. Congo"},CZ:{path:"M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z",name:"Czech Rep."},CY:{path:"M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z",name:"Cyprus"},CR:{path:"M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z",name:"Costa Rica"},CU:{path:"M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z",name:"Cuba"},SZ:{path:"M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z",name:"Swaziland"},SY:{path:"M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z",name:"Syria"},KG:{path:"M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z",name:"Kyrgyzstan"},KE:{path:"M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z",name:"Kenya"},SS:{path:"M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z",name:"S. Sudan"},SR:{path:"M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z",name:"Suriname"},KH:{path:"M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z",name:"Cambodia"},SV:{path:"M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z",name:"El Salvador"},SK:{path:"M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z",name:"Slovakia"},KR:{path:"M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z",name:"Korea"},SI:{path:"M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z",name:"Slovenia"},KP:{path:"M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z",name:"Dem. Rep. Korea"},KW:{path:"M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z",name:"Kuwait"},SN:{path:"M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z",name:"Senegal"},SL:{path:"M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z",name:"Sierra Leone"},KZ:{path:"M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z",name:"Kazakhstan"},SA:{path:"M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z",name:"Saudi Arabia"},SE:{path:"M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z",name:"Sweden"},SD:{path:"M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z",name:"Sudan"},DO:{path:"M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z",name:"Dominican Rep."},DJ:{path:"M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z",name:"Djibouti"},DK:{path:"M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z",name:"Denmark"},DE:{path:"M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z",name:"Germany"},YE:{path:"M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z",name:"Yemen"},DZ:{path:"M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z",name:"Algeria"},US:{path:"M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z",name:"United States"},UY:{path:"M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z",name:"Uruguay"},LB:{path:"M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z",name:"Lebanon"},LA:{path:"M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z",name:"Lao PDR"},TW:{path:"M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z",name:"Taiwan"},TT:{path:"M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z",name:"Trinidad and Tobago"},TR:{path:"M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z",name:"Turkey"},LK:{path:"M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z",name:"Sri Lanka"},LV:{path:"M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z",name:"Latvia"},LT:{path:"M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z",name:"Lithuania"},LU:{path:"M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z",name:"Luxembourg"},LR:{path:"M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z",name:"Liberia"},LS:{path:"M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z",name:"Lesotho"},TH:{path:"M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z",name:"Thailand"},TF:{path:"M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z",name:"Fr. S. Antarctic Lands"},TG:{path:"M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z",name:"Togo"},TD:{path:"M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z",name:"Chad"},LY:{path:"M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z",name:"Libya"},AE:{path:"M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z",name:"United Arab Emirates"},VE:{path:"M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z",name:"Venezuela"},AF:{path:"M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z",name:"Afghanistan"},IQ:{path:"M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z",name:"Iraq"},IS:{path:"M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z",name:"Iceland"},IR:{path:"M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z",name:"Iran"},AM:{path:"M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z",name:"Armenia"},AL:{path:"M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z",name:"Albania"},AO:{path:"M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z",name:"Angola"},AR:{path:"M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z",name:"Argentina"},AU:{path:"M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z",name:"Australia"},AT:{path:"M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z",name:"Austria"},IN:{path:"M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z",name:"India"},TZ:{path:"M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z",name:"Tanzania"},AZ:{path:"M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z",name:"Azerbaijan"},IE:{path:"M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z",name:"Ireland"},ID:{path:"M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z",name:"Indonesia"},UA:{path:"M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z",name:"Ukraine"},QA:{path:"M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z",name:"Qatar"},MZ:{path:"M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z",name:"Mozambique"}},height:440.7063107441331,projection:{type:"mill",centralMeridian:11.5},width:900},worldMill={name,content};export{distExports as d,worldMill as w};
//# sourceMappingURL=map-vendor-d74e0393.js.map
