webpackJsonp([1],{181:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}r(84);var o=r(14),a=n(o),i=r(25),c=(n(i),r(83)),s=n(c);(0,i.render)(a.default.createElement(s.default,null),document.querySelector("#app"))},182:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(14),l=n(s),f=r(53),u=n(f);r(185);var p=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleClick=e.handleClick.bind(e),e}return i(t,e),c(t,[{key:"handleClick",value:function(e){this.props.arrange.isCenter?this.props.inverse():this.props.center(),e.stopPropagation(),e.preventDefault()}},{key:"render",value:function(){var e=this.props.arrange,t=e.isInverse,r=e.isCenter,n=(0,u.default)({"controller-unit":!0,"is-center":r,"is-inverse":t});return l.default.createElement("span",{className:n,onClick:this.handleClick})}}]),t}(s.Component);t.default=p},183:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(14),s=function(e){return e&&e.__esModule?e:{default:e}}(c);r(187);var l=function(e){function t(){n(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleClick=e.handleClick.bind(e),e}return a(t,e),i(t,[{key:"handleClick",value:function(e){this.props.arrange.isCenter?this.props.inverse():this.props.center(),e.stopPropagation(),e.preventDefault()}},{key:"render",value:function(){var e=this.props,t=e.data,r=e.arrange,n=t.imageUrl,o=t.title,a=t.desc,i=r.pos,c=r.rotate,l=r.isInverse,f=r.isCenter,u=i||{},p="img-figure";return p+=l?" is-inverse":"",c&&["Moz","ms","Webkit",""].forEach(function(e){u[e?e+"Transform":"transform"]="rotate("+c+"deg)"}),f&&(u.zIndex=11),s.default.createElement("figure",{className:p,style:u,onClick:this.handleClick},s.default.createElement("img",{src:n,alt:o}),s.default.createElement("figcaption",{className:"fig-caption"},s.default.createElement("h2",{className:"img-title"},o),s.default.createElement("div",{className:"img-back"},s.default.createElement("p",null,a))))}}]),t}(c.Component);t.default=l},184:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={resourcePrefix:"https://femonzor.github.io/resource/react-gallery"};t.default=n},185:function(e,t){},186:function(e,t){},187:function(e,t){},188:function(e,t){e.exports=[{fileName:"1.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"2.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"3.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"4.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"5.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"6.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"7.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"8.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"9.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"10.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"11.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"12.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"13.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"14.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"15.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."},{fileName:"16.jpg",title:"Heaven of time",desc:"Here he comes Here comes Speed Racer."}]},83:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(14),l=n(s),f=r(25),u=n(f),p=r(183),m=n(p),d=r(182),h=n(d),g=r(184),v=n(g);r(186);var y=r(188);!function(e){e.forEach(function(e){e.imageUrl=v.default.resourcePrefix+"/"+e.fileName})}(y);var b=function(e,t){return Math.ceil(Math.random()*(t-e)+e)},H=function(){return(Math.random()>.5?"":"-")+Math.ceil(30*Math.random())},_=function(e){function t(){o(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={imgsArrangeArr:[]},e.constant={centerPos:{left:0,right:0},hPosRange:{leftSecX:[0,0],rightSecX:[0,0],y:[0,0]},vPosRange:{x:[0,0],topY:[0,0]}},e.rearrange=e.rearrange.bind(e),e.center=e.center.bind(e),e}return i(t,e),c(t,[{key:"inverse",value:function(e){var t=this;return function(){var r=t.state.imgsArrangeArr;r[e].isInverse=!r[e].isInverse,t.setState({imgsArrangeArr:r})}}},{key:"center",value:function(e){var t=this;return function(){t.rearrange(e)}}},{key:"rearrange",value:function(e){var t=this.constant,r=t.centerPos,n=t.hPosRange,o=t.vPosRange,a=n.leftSecX,i=n.rightSecX,c=n.y,s=o.topY,l=o.x,f=Math.floor(2*Math.random()),u=this.state.imgsArrangeArr,p=[],m=0,d=u.splice(e,1),h=void 0,g=void 0,v=void 0,y=void 0;for(d[0]={pos:r,rotate:0,isCenter:!0},m=Math.ceil(Math.random()*(u.length-f)),p=u.splice(m,f),p.forEach(function(e,t){p[t]={pos:{top:b(s[0],s[0]),left:b(l[0],l[0])},rotate:H(),isCenter:!1}}),h=0,g=u.length,v=g/2;h<g;h++)y=h<v?a:i,u[h]={pos:{top:b(c[0],c[1]),left:b(y[0],y[1])},rotate:H(),isCenter:!1};p&&p[0]&&u.splice(m,0,p[0]),u.splice(e,0,d[0]),this.setState({imgsArrangeArr:u})}},{key:"componentDidMount",value:function(){var e=u.default.findDOMNode(this.refs.stage),t=e.scrollWidth,r=e.scrollHeight,n=Math.ceil(t/2),o=Math.ceil(r/2),a=u.default.findDOMNode(this.refs.imgFigure0),i=a.scrollWidth,c=a.scrollHeight,s=Math.ceil(i/2),l=Math.ceil(c/2);this.constant.centerPos={left:n-s,top:o-l},this.constant.hPosRange.leftSecX=[-s,n-3*s],this.constant.hPosRange.rightSecX=[n+s,t-s],this.constant.hPosRange.y=[-l,r-l],this.constant.vPosRange.topY=[-l,o-3*l],this.constant.vPosRange.x=[n-i,n],this.rearrange(0)}},{key:"render",value:function(){var e=this,t=[],r=[],n=this.state.imgsArrangeArr;return y.forEach(function(o,a){n[a]||(n[a]={pos:{left:0,top:0},rotate:0,isInverse:!1,isCenter:!1}),r.push(l.default.createElement(m.default,{key:a,data:o,ref:"imgFigure"+a,arrange:n[a],inverse:e.inverse(a),center:e.center(a)})),t.push(l.default.createElement(h.default,{key:a,arrange:n[a],inverse:e.inverse(a),center:e.center(a)}))}),l.default.createElement("section",{className:"stage",ref:"stage"},l.default.createElement("section",{className:"img-sec"},r),l.default.createElement("nav",{className:"controller-nav"},t))}}]),t}(s.Component);t.default=_},84:function(e,t){}},[181]);