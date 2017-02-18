/*
 AngularJS v1.0.3
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(	function(I,g)
			{
					'use strict';function i(a)
					{
						var d={},a=a.split(","),b;
						for(b=0;b<a.length;b++)
						d[a[b]]=!0;
						return d
					}
					function z(a,d)
					{function b(a,b,c,h)
					{
						b=g.lowercase(b);
						if(m[b])
							for(;f.last()&&n[f.last()];)
								e("",f.last());
								o[b]&&f.last()==b&&e("",b);
								(h=p[b]||!!h)||f.push(b);
								var j={};
								c.replace(A,function(a,b,d,e,c){j[b]=k(d||e||c||"")});
								d.start&&d.start(b,j,h)
					}
					function e(a,b){var e=0,c;if(b=g.lowercase(b))for(e=f.length-1;e>=0;e--)if(f[e]==b)break;if(e>=0){for(c=f.length-1;c>=e;c--)d.end&&d.end(f[c]);f.length=
					e}}var c,h,f=[],j=a;for(f.last=function(){return f[f.length-1]};a;){h=!0;if(!f.last()||!q[f.last()]){if(a.indexOf("<\!--")===0)c=a.indexOf("--\>"),c>=0&&(d.comment&&d.comment(a.substring(4,c)),a=a.substring(c+3),h=!1);else if(B.test(a)){if(c=a.match(r))a=a.substring(c[0].length),c[0].replace(r,e),h=!1}else if(C.test(a)&&(c=a.match(s)))a=a.substring(c[0].length),c[0].replace(s,b),h=!1;h&&(c=a.indexOf("<"),h=c<0?a:a.substring(0,c),a=c<0?"":a.substring(c),d.chars&&d.chars(k(h)))}else a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+
					f.last()+"[^>]*>","i"),function(b,a){a=a.replace(D,"$1").replace(E,"$1");d.chars&&d.chars(k(a));return""}),e("",f.last());if(a==j)throw"Parse Error: "+a;j=a}e()
					}function k(a){l.innerHTML=a.replace(/</g,"&lt;");return l.innerText||l.textContent||""}function t(a){return a.replace(/&/g,"&amp;").replace(F,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function u(a){var d=!1,b=g.bind(a,a.push);return{start:function(a,c,h){a=g.lowercase(a);!d&&q[a]&&(d=a);!d&&v[a]==
					!0&&(b("<"),b(a),g.forEach(c,function(a,c){var e=g.lowercase(c);if(G[e]==!0&&(w[e]!==!0||a.match(H)))b(" "),b(c),b('="'),b(t(a)),b('"')}),b(h?"/>":">"))},end:function(a){a=g.lowercase(a);!d&&v[a]==!0&&(b("</"),b(a),b(">"));a==d&&(d=!1)},chars:function(a){d||b(t(a))}}}var s=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,r=/^<\s*\/\s*([\w:-]+)[^>]*>/,A=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,C=/^</,B=/^<\s*\//,D=/<\!--(.*?)--\>/g,
					E=/<!\[CDATA\[(.*?)]]\>/g,H=/^((ftp|https?):\/\/|mailto:|#)/,F=/([^\#-~| |!])/g,p=i("area,br,col,hr,img,wbr"),x=i("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),y=i("rp,rt"),o=g.extend({},y,x),m=g.extend({},x,i("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),n=g.extend({},y,i("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
					q=i("script,style"),v=g.extend({},p,m,n,o),w=i("background,cite,href,longdesc,src,usemap"),G=g.extend({},w,i("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),l=document.createElement("pre");g.module("ngSanitize",[]).value("$sanitize",function(a){var d=[];
					z(a,u(d));return d.join("")});g.module("ngSanitize").directive("ngBindHtml",["$sanitize",function(a){return function(d,b,e){b.addClass("ng-binding").data("$binding",e.ngBindHtml);d.$watch(e.ngBindHtml,function(c){c=a(c);b.html(c||"")})}}]);g.module("ngSanitize").filter("linky",function(){var a=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s\.\;\,\(\)\{\}\<\>]/,d=/^mailto:/;return function(b){if(!b)return b;for(var e=b,c=[],h=u(c),f,g;b=e.match(a);)f=b[0],b[2]==b[3]&&(f="mailto:"+f),g=b.index,
					h.chars(e.substr(0,g)),h.start("a",{href:f}),h.chars(b[0].replace(d,"")),h.end("a"),e=e.substring(g+b[0].length);h.chars(e);return c.join("")}})
			}
)
(window,window.angular);
