(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{198:function(e,t,a){"use strict";a.r(t),a.d(t,"PageQuery",(function(){return p}));a(18);var r=a(0),i=a.n(r),n=a(204),o=a.n(n),s=a(196),d=a(195),l=a(202),c=a(4),u=Object(c.c)(d.a).withConfig({displayName:"IndexPage__StyledPageWrapper",componentId:"n1xcj9-0"})(["display:flex;align-items:center;max-width:42.5em;@media (max-width:900px){display:block;}@media print{max-width:100%;}"]),f=c.c.div.withConfig({displayName:"IndexPage__ImageWrapper",componentId:"n1xcj9-1"})(["width:32.5%;flex:none;margin-right:1.5em;@media (max-width:900px){float:left;width:40%;}@media (max-width:550px){position:relative;overflow:hidden;width:100%;margin:0;float:none;right:0;border-radius:10px;}"]),g=Object(c.c)(o.a).withConfig({displayName:"IndexPage__StyledImage",componentId:"n1xcj9-2"})(["max-width:100%;img{border-radius:10px;}@media (max-width:550px){margin:-10% 0 -30%;}"]);t.default=function(e){var t=e.data.markdownRemark,a=t.frontmatter,r=a.title,n=a.featuredImage,o=t.html,d=e.location.pathname;return i.a.createElement(s.a,{pathname:d},i.a.createElement(u,null,i.a.createElement(f,null,i.a.createElement(g,{placeholderStyle:{},fadeIn:!1,className:"index-me",sizes:Object.assign({},n.childImageSharp.sizes,{base64:n.childImageSharp.sqip.dataURI})})),i.a.createElement("div",null,i.a.createElement("h1",null,r),i.a.createElement(l.a,{dangerouslySetInnerHTML:{__html:o}}))))};var p="2525113409"},202:function(e,t,a){"use strict";var r=a(4).c.div.withConfig({displayName:"MarkdownWrapper",componentId:"sc-1ghfx1h-0"})(["h2{margin:1.75em 0 0.75em 0;}h3{margin:2.5em 0 1em 0;}> h1:first-child,> h2:first-child,> h3:first-child,> h4:first-child,h2 + h3{margin-top:0;}.gatsby-resp-image-wrapper{width:100%;display:inline-block !important;}.button-parent{display:flex;margin:2.5rem 0;}.button{padding:0.8em 1em;color:rgb(0,0,0);background-color:rgb(250,250,250);border-radius:0.3rem;text-decoration:none;text-transform:uppercase;font-weight:bold;font-size:90%;transition:all 400ms;border-bottom:none;:hover{background-color:rgb(255,255,255);box-shadow:0 5px 12px -2px var(--green);transform:translateY(-2px) scale(1.005);text-decoration:none;border-bottom:none;}@media only screen and (max-width:700px){box-shadow:0 5px 12px -2px var(--green);:hover{transform:none;}}}ul,ol{line-height:1.5;}li p{margin:0;}ul li ul{margin-bottom:0.25rem;margin-top:0.15rem;}i,em{color:var(--lightBlue);font-style:normal;}b,strong{color:var(--blue);font-weight:normal;}strong em,em strong,b i,i b{color:var(--green);font-style:normal;font-weight:normal;}code{font-family:var(--primaryFont);white-space:normal;}a{cursor:pointer;-webkit-tap-highlight-color:transparent;text-decoration:none;color:var(--green);transition-duration:300ms;border-bottom:var(--translucentGreen) 2px solid;}a:hover{border-bottom:var(--green) 2px solid;}p a,li a{color:var(--green);border-bottom:var(--translucentGreen) 2px solid;}.secondary-text a{border-bottom:var(--translucentGray) 2px solid;}.secondary-text strong{color:var(--orange);font-size:21px;}.secondary-text a:hover{border-bottom:var(--gray) 2px solid;}.secondary-text p{margin:13px 0;}.secondary-text,.secondary-text a{color:var(--gray);}.secondary-text a{border-bottom:2px solid var(--translucentGray);}"]);t.a=r},203:function(e,t,a){var r=a(9),i=a(10),n=a(40),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},204:function(e,t,a){"use strict";a(21),a(19),a(11),a(67),a(136),a(205);var r=a(13);t.__esModule=!0,t.default=void 0;var i,n=r(a(66)),o=r(a(65)),s=r(a(135)),d=r(a(92)),l=r(a(0)),c=r(a(41)),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+l+o+s+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=l.default.createElement(z,(0,d.default)({src:t},i));return a.length>1?l.default.createElement("picture",null,r(a),n):n},z=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:i},g,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,E=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,d.default)({opacity:R?1:0,transition:C?"opacity "+b+"ms":"none"},s),k="boolean"==typeof h?"lightgray":h,j={transitionDelay:b+"ms"},N=(0,d.default)({opacity:this.state.imgLoaded?0:1},C&&j,{},s,{},f),P={title:t,alt:this.state.isVisible?"":a,style:N,className:g};if(p){var T=p,_=T[0];return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),k&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&j)}),_.base64&&l.default.createElement(O,{src:_.base64,spreadProps:P,imageVariants:T,generateSources:x}),_.tracedSVG&&l.default.createElement(O,{src:_.tracedSVG,spreadProps:P,imageVariants:T,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,v(T),l.default.createElement(z,{alt:a,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:a,title:t,loading:E},_,{imageVariants:T}))}}))}if(m){var W=m,G=W[0],q=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},n);return"inherit"===n.display&&delete q.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},k&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:k,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},C&&j)}),G.base64&&l.default.createElement(O,{src:G.base64,spreadProps:P,imageVariants:W,generateSources:x}),G.tracedSVG&&l.default.createElement(O,{src:G.tracedSVG,spreadProps:P,imageVariants:W,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,v(W),l.default.createElement(z,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:a,title:t,loading:E},G,{imageVariants:W}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:C,sizes:V,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=R;t.default=k},205:function(e,t,a){"use strict";a(203)("fixed",(function(e){return function(){return e(this,"tt","","")}}))}}]);
//# sourceMappingURL=component---src-markdown-page-templates-index-page-index-tsx-3994de3d201989991c9f.js.map