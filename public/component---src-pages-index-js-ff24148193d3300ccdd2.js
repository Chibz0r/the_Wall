(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{126:function(e,t,a){"use strict";a.r(t);var n=a(6),o=a.n(n),l=a(44),i=a.n(l),s=a(0),r=a.n(s),c=a(150),m=a.n(c),u=a(147),d=a(4),h=a.n(d),p=a(157),g=a.n(p),f=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(i()(i()(t))),t.gotoNext=t.gotoNext.bind(i()(i()(t))),t.gotoPrevious=t.gotoPrevious.bind(i()(i()(t))),t.gotoImage=t.gotoImage.bind(i()(i()(t))),t.handleClickImage=t.handleClickImage.bind(i()(i()(t))),t.openLightbox=t.openLightbox.bind(i()(i()(t))),t}o()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.gotoImage=function(e){this.setState({currentImage:e})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.renderGallery=function(){var e=this,t=this.props.images;if(t){var a=t.map(function(t,a){return r.a.createElement("article",{className:"4u 12u$(xsmall) work-item",key:a},r.a.createElement("a",{className:"image fit thumb",href:t.src,onClick:function(t){return e.openLightbox(a,t)}},r.a.createElement("img",{src:t.thumbnail,alt:t.alt})),r.a.createElement("h3",null,t.caption),r.a.createElement("p",null,t.description))});return r.a.createElement("div",{className:"row"},a)}},a.render=function(){return r.a.createElement("div",null,this.renderGallery(),r.a.createElement(g.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox}))},t}(s.Component);f.displayName="Gallery",f.propTypes={images:h.a.array};var b=f,E=a(201),v=a.n(E),x=a(202),I=a.n(x),y=a(203),w=a.n(y),k=a(204),N=a.n(k),L=a(205),P=a.n(L),C=a(206),j=a.n(C),S=a(207),G=a.n(S),O=a(208),T=a.n(O),W=a(209),Y=a.n(W),$=a(210),M=a.n($),B=a(211),D=a.n(B),A=a(212),J=a.n(A),V=a(213),z=a.n(V),F=a(214),q=a.n(F),H=a(215),K=a.n(H),Q=[{id:"1",src:G.a,thumbnail:v.a,caption:"Photo 1",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat.",alt:"image1"},{id:"2",src:T.a,thumbnail:I.a,caption:"Photo 2",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat.",alt:"image2"},{id:"3",src:Y.a,thumbnail:w.a,caption:"Photo 3",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat.",alt:"image3"},{id:"4",src:M.a,thumbnail:N.a,caption:"Photo 4",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat.",alt:"image4"},{id:"5",src:D.a,thumbnail:P.a,caption:"Photo 5",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat.",alt:"image5"},{id:"6",src:J.a,thumbnail:j.a,caption:"Photo 6",description:"Lorem ipsum dolor sit amet nisl sed nullam feugiat.",alt:"image6"}],R=(G.a,v.a,T.a,I.a,Y.a,w.a,M.a,N.a,D.a,P.a,J.a,j.a,function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(i()(i()(t))),t.gotoNext=t.gotoNext.bind(i()(i()(t))),t.gotoPrevious=t.gotoPrevious.bind(i()(i()(t))),t.openLightbox=t.openLightbox.bind(i()(i()(t))),t.handleClickImage=t.handleClickImage.bind(i()(i()(t))),t}o()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.render=function(){return r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement("title",null,"The Great Wall of Yarmouth - by Paul Patterson"),r.a.createElement("meta",{name:"description",content:"The Great Wall of Yarmouth written and illustrated by Paul Patterson"})),r.a.createElement("div",{id:"main"},r.a.createElement("section",{id:"zero"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"8u 12u$(xsmall)"},r.a.createElement("img",{src:z.a,alt:"great wall of yarmouth book cover"})),r.a.createElement("div",{className:"4u 12u$(xsmall)"},r.a.createElement("p",null,"190 pages containing facts about the medieval wall of Yarmouth."),r.a.createElement("p",null,"Including never before seen illustrations of how the wall and gates looked, and how they would appear today had they survived."),r.a.createElement("p",null,"Written and illustrated by Paul B. Patterson")))),r.a.createElement("section",{id:"Introduction"},r.a.createElement("header",{className:"major"},r.a.createElement("h2",null,"Introduction")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"6u 12u$(xsmall)"},r.a.createElement("h3",null,"Volume 1 - Murage"),r.a.createElement("p",null,r.a.createElement("strong",null,"This Wall")),r.a.createElement("p",null,"As it stands today, to many it may appear as just the remains of an old wall."),r.a.createElement("p",null,"In terms of cost, labour and time, it is the biggest undertaking Great Yarmouth has, and will ever, endure."),r.a.createElement("p",null,"After surviving around 700 years, today its greatest enemy is ignorance of its compelling history."),r.a.createElement("p",null,"This book attempts to illustrate the importance of what remains, and why it should be preserved.")),r.a.createElement("div",{className:"6u 12u$(xsmall)"},r.a.createElement("h3",null,"Volume 2 - Mumorum Operatio"),r.a.createElement("p",null,"The full story of the wall, its effect over the town, and how the town evolved. Less than three centuries ago, Great Yarmouth was still a fortified town. Its wall almost complete with its towers, and most of the gates still standing."),r.a.createElement("p",null,"By 1850 all the gates had gone.",r.a.createElement("br",null),"Great Yarmouth suffered immensely during the bombing raids in World War II, massive areas of the town’s important medieval past was lost. From 1950’s to the 1970’s thoughtless planning to restructure the town and roads paradoxically damaged important areas, which had survived time and war. Despite these huge losses in a relatively short time, Great Yarmouth is still recognised as one of England’s most interesting medieval towns. In defiance of all these losses, Great Yarmouth still proudly contains some of the country’s most interesting buildings and structures."),r.a.createElement("p",null,"This book attempts to illustrate the importance of what remains, and why they should be preserved.")))),r.a.createElement("section",{id:"Look"},r.a.createElement("h2",null,"Take a Look Inside"),r.a.createElement(b,{images:Q.map(function(e){e.id;var t=e.src,a=e.thumbnail;e.caption,e.description;return{src:t,thumbnail:a,alt:e.alt}})})),r.a.createElement("section",{id:"Buy"},r.a.createElement("h2",null,"Buy the Book"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"6u"},r.a.createElement("img",{src:q.a,alt:"book cover"}),r.a.createElement("p",null,"Details about book")),r.a.createElement("div",{className:"6u"},r.a.createElement("img",{src:K.a,alt:"book cover"}),r.a.createElement("p",null,"Details about book 2")))),r.a.createElement("section",{id:"Message"},r.a.createElement("h2",null,"Message the Author"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"12u 12u$(small)"},r.a.createElement("form",{name:"message-the-author",method:"POST",netlify:!0},r.a.createElement("div",{className:"row uniform 50%"},r.a.createElement("div",{className:"6u 12u$(xsmall)"},r.a.createElement("label",{for:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Who are you"})),r.a.createElement("div",{className:"6u 12u$(xsmall)"},r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Where to reply to you"})),r.a.createElement("div",{className:"12u"},r.a.createElement("label",{for:"message"},"Message"),r.a.createElement("textarea",{name:"message",id:"message",placeholder:"What is your message...",rows:"4"})))),r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,r.a.createElement("input",{type:"submit",value:"Send Message"}))),r.a.createElement("p",{className:"align-right"},"or you can email ",r.a.createElement("a",{href:"mailto:paul@atecdesign.co.uk"},"paul@atecdesign.co.uk")))))))},t}(r.a.Component));t.default=R},201:function(e,t,a){e.exports=a.p+"static/northgate-aa31d1853ed8e7f3d301c717fdc76779.jpg"},202:function(e,t,a){e.exports=a.p+"static/chapter-1d134a34b8cfbde8a746c5f729d93778.jpg"},203:function(e,t,a){e.exports=a.p+"static/cottonmap-12583b8fb165ca474657f42c94665504.jpg"},204:function(e,t,a){e.exports=a.p+"static/moat-52e93ae37d3c7471bdf3ac81646338ae.jpg"},205:function(e,t,a){e.exports=a.p+"static/market-968ea7ff23d418cd1c8f0f34f34a47ef.jpg"},206:function(e,t,a){e.exports=a.p+"static/kings-25b22e537fbde67844948d063b35c4f3.jpg"},207:function(e,t,a){e.exports=a.p+"static/northgate-34186631b3fc88bff6d648052e6c9a83.jpg"},208:function(e,t,a){e.exports=a.p+"static/chapter-4b23221ac099c3a930c52909121ee3b6.jpg"},209:function(e,t,a){e.exports=a.p+"static/cottonmap-235a4ca2b180b808701da981b776f3f8.jpg"},210:function(e,t,a){e.exports=a.p+"static/moat-137e6053991762755bbe86f8a2baf550.jpg"},211:function(e,t,a){e.exports=a.p+"static/market-cfbc6e110b9c1d234a839acf49822a62.jpg"},212:function(e,t,a){e.exports=a.p+"static/kings-c33395dfdeda4482aaa66a9bc77ceb4e.jpg"},213:function(e,t,a){e.exports=a.p+"static/book-covers-076139e05f20227c06d04cd2a5a2c792.png"},214:function(e,t,a){e.exports=a.p+"static/volume-1-f17f35685970480cc582e1158850c1c5.png"},215:function(e,t,a){e.exports=a.p+"static/volume-2-fada9541453330f5f5b7acf1428464e8.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-ff24148193d3300ccdd2.js.map