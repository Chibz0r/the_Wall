(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{127:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a.n(n),o=a(44),r=a.n(o),s=a(0),l=a.n(s),c=a(151),m=a.n(c),u=a(148),p=a(4),g=a.n(p),h=a(158),d=a.n(h),f=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(r()(r()(t))),t.gotoNext=t.gotoNext.bind(r()(r()(t))),t.gotoPrevious=t.gotoPrevious.bind(r()(r()(t))),t.gotoImage=t.gotoImage.bind(r()(r()(t))),t.handleClickImage=t.handleClickImage.bind(r()(r()(t))),t.openLightbox=t.openLightbox.bind(r()(r()(t))),t}i()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.gotoImage=function(e){this.setState({currentImage:e})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.renderGallery=function(){var e=this,t=this.props.images;if(t){var a=t.map(function(t,a){return l.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:a},l.a.createElement("a",{className:"image fit thumb",href:t.src,onClick:function(t){return e.openLightbox(a,t)}},l.a.createElement("img",{src:t.thumbnail,alt:t.alt})),l.a.createElement("h3",null,t.caption),l.a.createElement("p",null,t.description))});return l.a.createElement("div",{className:"row"},a)}},a.render=function(){return l.a.createElement("div",null,this.renderGallery(),l.a.createElement(d.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox}))},t}(s.Component);f.displayName="Gallery",f.propTypes={images:g.a.array};var b=f,E=a(202),x=a.n(E),I=a(203),v=a.n(I),k=a(204),N=a.n(k),y=a(205),L=a.n(y),P=a(206),w=a.n(P),C=a(207),j=a.n(C),S=a(208),O=a.n(S),T=a(209),G=a.n(T),A=a(210),B=a.n(A),D=a(211),M=a.n(D),$=a(212),W=a.n($),Y=a(213),J=a.n(Y),z=[{id:"1",src:O.a,thumbnail:x.a,caption:"Photo 1",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat.",alt:"image1"},{id:"2",src:G.a,thumbnail:v.a,caption:"Photo 2",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat.",alt:"image2"},{id:"3",src:B.a,thumbnail:N.a,caption:"Photo 3",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat.",alt:"image3"},{id:"4",src:M.a,thumbnail:L.a,caption:"Photo 4",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat.",alt:"image4"},{id:"5",src:W.a,thumbnail:w.a,caption:"Photo 5",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat.",alt:"image5"},{id:"6",src:J.a,thumbnail:j.a,caption:"Photo 6",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat.",alt:"image6"}],q=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(r()(r()(t))),t.gotoNext=t.gotoNext.bind(r()(r()(t))),t.gotoPrevious=t.gotoPrevious.bind(r()(r()(t))),t.openLightbox=t.openLightbox.bind(r()(r()(t))),t.handleClickImage=t.handleClickImage.bind(r()(r()(t))),t}i()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.render=function(){return l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement("title",null,"The Great Wall of Yarmouth - by Paul Patterson"),l.a.createElement("meta",{name:"description",content:"The Great Wall of Yarmouth written and illustrated by Paul Patterson"})),l.a.createElement("div",{id:"main"},l.a.createElement("section",{id:"zero"}),l.a.createElement("section",{id:"Introduction"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Introduction")),l.a.createElement("p",null,l.a.createElement("strong",null,"This Wall")),l.a.createElement("p",null,"As it stands today, to many it may appear as just the remains of an old wall."),l.a.createElement("p",null,"In terms of cost, labour and time, it is the biggest undertaking Great Yarmouth has, and will ever, endure."),l.a.createElement("p",null,"After surviving around 700 years, today its greatest enemy is ignorance of its compelling history."),l.a.createElement("p",null,"This book attempts to illustrate the importance of what remains, and why it should be preserved.")),l.a.createElement("section",{id:"Take a Look"},l.a.createElement("h2",null,"Take a Look Inside"),l.a.createElement(b,{images:z.map(function(e){e.id;var t=e.src,a=e.thumbnail;e.caption,e.description,e.alt;return{src:t,thumbnail:a}})})),l.a.createElement("section",{id:"Buy the Book"},l.a.createElement("h2",null,"Buy the Book"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"6u"},l.a.createElement("p",null,"Details about book")),l.a.createElement("div",{className:"6u"},l.a.createElement("p",null,"Details about book 2")))),l.a.createElement("section",{id:"Message the Author"},l.a.createElement("h2",null,"Message the Author"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"12u 12u$(small)"},l.a.createElement("form",{method:"post",action:"#"},l.a.createElement("div",{className:"row uniform 50%"},l.a.createElement("div",{className:"6u 12u$(xsmall)"},l.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"})),l.a.createElement("div",{className:"6u 12u$(xsmall)"},l.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email"})),l.a.createElement("div",{className:"12u"},l.a.createElement("textarea",{name:"message",id:"message",placeholder:"Message",rows:"4"})))),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("input",{type:"submit",value:"Send Message"}))),l.a.createElement("p",{className:"align-right"},"or you can email ",l.a.createElement("a",{href:"mailto:paul@atecdesign.co.uk"},"paul@atecdesign.co.uk")))))))},t}(l.a.Component);t.default=q},202:function(e,t,a){e.exports=a.p+"static/northgate-aa31d1853ed8e7f3d301c717fdc76779.jpg"},203:function(e,t,a){e.exports=a.p+"static/chapter-1d134a34b8cfbde8a746c5f729d93778.jpg"},204:function(e,t,a){e.exports=a.p+"static/cottonmap-12583b8fb165ca474657f42c94665504.jpg"},205:function(e,t,a){e.exports=a.p+"static/moat-52e93ae37d3c7471bdf3ac81646338ae.jpg"},206:function(e,t,a){e.exports=a.p+"static/market-968ea7ff23d418cd1c8f0f34f34a47ef.jpg"},207:function(e,t,a){e.exports=a.p+"static/kings-25b22e537fbde67844948d063b35c4f3.jpg"},208:function(e,t,a){e.exports=a.p+"static/northgate-34186631b3fc88bff6d648052e6c9a83.jpg"},209:function(e,t,a){e.exports=a.p+"static/chapter-4b23221ac099c3a930c52909121ee3b6.jpg"},210:function(e,t,a){e.exports=a.p+"static/cottonmap-235a4ca2b180b808701da981b776f3f8.jpg"},211:function(e,t,a){e.exports=a.p+"static/moat-137e6053991762755bbe86f8a2baf550.jpg"},212:function(e,t,a){e.exports=a.p+"static/market-cfbc6e110b9c1d234a839acf49822a62.jpg"},213:function(e,t,a){e.exports=a.p+"static/kings-c33395dfdeda4482aaa66a9bc77ceb4e.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-bc80d47224cf35f9e570.js.map