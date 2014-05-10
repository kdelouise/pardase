(function(){var e,t=Object.prototype.toString;Array.isArray=Array.isArray||function(e){return"[object Array]"==t.call(e)};var n=String.prototype.trim,r;if(n)r=function(e){return null==e?"":n.call(e)};else{var i,s;/\S/.test(" ")?(i=/^[\s\xA0]+/,s=/[\s\xA0]+$/):(i=/^\s+/,s=/\s+$/);r=function(e){return null==e?"":e.toString().replace(i,"").replace(s,"")}}var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},u={},a=function(){};a.prototype={otag:"{{",ctag:"}}",pragmas:{},buffer:[],pragmas_implemented:{"IMPLICIT-ITERATOR":!0},context:{},render:function(e,t,n,r){r||(this.context=t,this.buffer=[]);if(this.includes("",e)){e=this.render_pragmas(e);var i=this.render_section(e,t,n);!1===i&&(i=this.render_tags(e,t,n,r));if(r)return i;this.sendLines(i)}else{if(r)return e;this.send(e)}},send:function(e){""!==e&&this.buffer.push(e)},sendLines:function(e){if(e){e=e.split("\n");for(var t=0;t<e.length;t++)this.send(e[t])}},render_pragmas:function(e){if(!this.includes("%",e))return e;var t=this,n=this.getCachedRegex("render_pragmas",function(e,t){return RegExp(e+"%([\\w-]+) ?([\\w]+=[\\w]+)?"+t,"g")});return e.replace(n,function(e,n,r){if(!t.pragmas_implemented[n])throw{message:"This implementation of mustache doesn't understand the '"+n+"' pragma"};t.pragmas[n]={};r&&(e=r.split("="),t.pragmas[n][e[0]]=e[1]);return""})},render_partial:function(e,t,n){e=r(e);if(!n||void 0===n[e])throw{message:"unknown_partial '"+e+"'"};return!t||"object"!=typeof t[e]?this.render(n[e],t,n,!0):this.render(n[e],t[e],n,!0)},render_section:function(e,t,n){if(!this.includes("#",e)&&!this.includes("^",e))return!1;var r=this,i=this.getCachedRegex("render_section",function(e,t){return RegExp("^([\\s\\S]*?)"+e+"(\\^|\\#)\\s*(.+)\\s*"+t+"\n*([\\s\\S]*?)"+e+"\\/\\s*\\3\\s*"+t+"\\s*([\\s\\S]*)$","g")});return e.replace(i,function(e,i,s,o,u,a){e=i?r.render_tags(i,t,n,!0):"";a=a?r.render(a,t,n,!0):"";var f;o=r.find(o,t);"^"===s?f=!o||Array.isArray(o)&&0===o.length?r.render(u,t,n,!0):"":"#"===s&&(f=Array.isArray(o)?r.map(o,function(e){return r.render(u,r.create_context(e),n,!0)}).join(""):r.is_object(o)?r.render(u,r.create_context(o),n,!0):"function"==typeof o?o.call(t,u,function(e){return r.render(e,t,n,!0)}):o?r.render(u,t,n,!0):"");return e+f+a})},render_tags:function(e,t,n,r){var i=this,s=function(){return i.getCachedRegex("render_tags",function(e,t){return RegExp(e+"(=|!|>|&|\\{|%)?([^#\\^]+?)\\1?"+t+"+","g")})},u=s(),a=function(e,r,a){switch(r){case"!":return"";case"=":return i.set_delimiters(a),u=s(),"";case">":return i.render_partial(a,t,n);case"{":case"&":return i.find(a,t);default:return e=i.find(a,t),String(e).replace(/&(?!\w+;)|[<>"']/g,function(e){return o[e]||e})}};e=e.split("\n");for(var f=0;f<e.length;f++)e[f]=e[f].replace(u,a,this),r||this.send(e[f]);if(r)return e.join("\n")},set_delimiters:function(e){e=e.split(" ");this.otag=this.escape_regex(e[0]);this.ctag=this.escape_regex(e[1])},escape_regex:function(e){arguments.callee.sRE||(arguments.callee.sRE=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","g"));return e.replace(arguments.callee.sRE,"\\$1")},find:function(e,t){e=r(e);var n;if(e.match(/([a-z_]+)\./ig)){var i=this.walk_context(e,t);(!1===i||0===i||i)&&(n=i)}else!1===t[e]||0===t[e]||t[e]?n=t[e]:(!1===this.context[e]||0===this.context[e]||this.context[e])&&(n=this.context[e]);return"function"==typeof n?n.apply(t):void 0!==n?n:""},walk_context:function(e,t){for(var n=e.split("."),r=void 0!=t[n[0]]?t:this.context,i=r[n.shift()];void 0!=i&&0<n.length;)r=i,i=i[n.shift()];return"function"==typeof i?i.apply(r):i},includes:function(e,t){return-1!=t.indexOf(this.otag+e)},create_context:function(e){if(this.is_object(e))return e;var t=".";this.pragmas["IMPLICIT-ITERATOR"]&&(t=this.pragmas["IMPLICIT-ITERATOR"].iterator);var n={};n[t]=e;return n},is_object:function(e){return e&&"object"==typeof e},map:function(e,t){if("function"==typeof e.map)return e.map(t);for(var n=[],r=e.length,i=0;i<r;i++)n.push(t(e[i]));return n},getCachedRegex:function(e,t){var n=u[this.otag];n||(n=u[this.otag]={});var r=n[this.ctag];r||(r=n[this.ctag]={});(n=r[e])||(n=r[e]=t(this.otag,this.ctag));return n}};e={name:"mustache.js",version:"0.4.0",to_html:function(e,t,n,r){var i=new a;r&&(i.send=r);i.render(e,t||{},n);if(!r)return i.buffer.join("\n")}};(function(){var t={VERSION:"0.10.2",templates:{},$:"undefined"!=typeof window?window.jQuery||window.Zepto||null:null,addTemplate:function(n,r){if("object"==typeof n)for(var i in n)this.addTemplate(i,n[i]);else t[n]?console.error("Invalid name: "+n+"."):t.templates[n]?console.error('Template "'+n+'  " exists'):(t.templates[n]=r,t[n]=function(r,i){r=r||{};var s=e.to_html(t.templates[n],r,t.templates);return t.$&&!i?t.$(s):s})},clearAll:function(){for(var e in t.templates)delete t[e];t.templates={}},refresh:function(){t.clearAll();t.grabTemplates()},grabTemplates:function(){var e,n,r=document.getElementsByTagName("script"),i,s=[];e=0;for(n=r.length;e<n;e++)(i=r[e])&&i.innerHTML&&i.id&&("text/html"===i.type||"text/x-icanhaz"===i.type)&&(t.addTemplate(i.id,"".trim?i.innerHTML.trim():i.innerHTML.replace(/^\s+/,"").replace(/\s+$/,"")),s.unshift(i));e=0;for(n=s.length;e<n;e++)s[e].parentNode.removeChild(s[e])}};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=t),exports.ich=t):this.ich=t;"undefined"!=typeof document&&(t.$?t.$(function(){t.grabTemplates()}):document.addEventListener("DOMContentLoaded",function(){t.grabTemplates()},!0))})()})();