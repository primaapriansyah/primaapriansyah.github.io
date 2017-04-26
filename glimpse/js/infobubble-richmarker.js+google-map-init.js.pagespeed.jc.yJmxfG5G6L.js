var mod_pagespeed_4ze6Ld72TH = "function InfoBubble(t){this.extend(InfoBubble,google.maps.OverlayView),this.tabs_=[],this.activeTab_=null,this.baseZIndex_=100,this.isOpen_=!1;var e=t||{};void 0==e.backgroundColor&&(e.backgroundColor=this.BACKGROUND_COLOR_),void 0==e.borderColor&&(e.borderColor=this.BORDER_COLOR_),void 0==e.borderRadius&&(e.borderRadius=this.BORDER_RADIUS_),void 0==e.borderWidth&&(e.borderWidth=this.BORDER_WIDTH_),void 0==e.padding&&(e.padding=this.PADDING_),void 0==e.arrowPosition&&(e.arrowPosition=this.ARROW_POSITION_),void 0==e.disableAutoPan&&(e.disableAutoPan=!1),void 0==e.disableAnimation&&(e.disableAnimation=!1),void 0==e.minWidth&&(e.minWidth=this.MIN_WIDTH_),void 0==e.shadowStyle&&(e.shadowStyle=this.SHADOW_STYLE_),void 0==e.arrowSize&&(e.arrowSize=this.ARROW_SIZE_),void 0==e.arrowStyle&&(e.arrowStyle=this.ARROW_STYLE_),void 0==e.closeSrc&&(e.closeSrc=this.CLOSE_SRC_),this.buildDom_(),this.setValues(e)}function RichMarker(t){var e=t||{};this.ready_=!1,this.dragging_=!1,void 0==t.visible&&(t.visible=!0),void 0==t.shadow&&(t.shadow=\"7px -3px 5px rgba(88,88,88,0.7)\"),void 0==t.anchor&&(t.anchor=RichMarkerPosition.BOTTOM),this.setValues(e)}window.InfoBubble=InfoBubble,InfoBubble.prototype.ARROW_SIZE_=15,InfoBubble.prototype.ARROW_STYLE_=0,InfoBubble.prototype.SHADOW_STYLE_=1,InfoBubble.prototype.MIN_WIDTH_=50,InfoBubble.prototype.ARROW_POSITION_=50,InfoBubble.prototype.PADDING_=10,InfoBubble.prototype.BORDER_WIDTH_=1,InfoBubble.prototype.BORDER_COLOR_=\"#ccc\",InfoBubble.prototype.BORDER_RADIUS_=10,InfoBubble.prototype.BACKGROUND_COLOR_=\"#fff\",InfoBubble.prototype.CLOSE_SRC_=\"http://sites.redqteam.com/glimpse/jobs/images/close-icon.png\",InfoBubble.prototype.extend=function(t,e){return function(t){for(var e in t.prototype)this.prototype[e]=t.prototype[e];return this}.apply(t,[e])},InfoBubble.prototype.buildDom_=function(){var t=this.bubble_=document.createElement(\"DIV\");t.style.position=\"absolute\",t.style.zIndex=this.baseZIndex_;var e=this.tabsContainer_=document.createElement(\"DIV\");e.style.position=\"relative\";var o=this.close_=document.createElement(\"IMG\");o.style.position=\"absolute\",o.style[\"margin-top\"]=\"15px\",o.style[\"margin-right\"]=\"15px\",o.style.border=0,o.style.zIndex=this.baseZIndex_+1,o.style.cursor=\"pointer\",o.src=this.get(\"closeSrc\");var r=this;google.maps.event.addDomListener(o,\"click\",function(){r.close(),google.maps.event.trigger(r,\"closeclick\")});var i=this.contentContainer_=document.createElement(\"DIV\");i.style.overflowX=\"auto\",i.style.overflowY=\"auto\",i.style.cursor=\"default\",i.style.clear=\"both\",i.style.position=\"relative\";var n=this.content_=document.createElement(\"DIV\"),s=\"gl-infobubble-wrapper\";i.appendChild(n),i.setAttribute(\"class\",s);var a=this.arrow_=document.createElement(\"DIV\");a.style.position=\"relative\";var h=this.arrowOuter_=document.createElement(\"DIV\"),p=this.arrowInner_=document.createElement(\"DIV\"),b=this.getArrowSize_();h.style.position=p.style.position=\"absolute\",h.style.left=p.style.left=\"50%\",h.style.height=p.style.height=\"0\",h.style.width=p.style.width=\"0\",h.style.marginLeft=this.px(-b),h.style.borderWidth=this.px(b),h.style.borderBottomWidth=0;var l=this.bubbleShadow_=document.createElement(\"DIV\");l.style.position=\"absolute\",t.style.display=l.style.display=\"none\",t.appendChild(this.tabsContainer_),t.appendChild(o),t.appendChild(i),a.appendChild(h),a.appendChild(p),t.appendChild(a);var d=document.createElement(\"style\");d.setAttribute(\"type\",\"text/css\"),this.animationName_=\"_ibani_\"+Math.round(1e4*Math.random());var g=\".\"+this.animationName_+\"{-webkit-animation-name:\"+this.animationName_+\";-webkit-animation-duration:0.5s;-webkit-animation-iteration-count:1;}@-webkit-keyframes \"+this.animationName_+\" {from {-webkit-transform: scale(0)}50% {-webkit-transform: scale(1.2)}90% {-webkit-transform: scale(0.95)}to {-webkit-transform: scale(1)}}\";d.textContent=g,document.getElementsByTagName(\"head\")[0].appendChild(d)},InfoBubble.prototype.setBackgroundClassName=function(t){this.set(\"backgroundClassName\",t)},InfoBubble.prototype.setBackgroundClassName=InfoBubble.prototype.setBackgroundClassName,InfoBubble.prototype.backgroundClassName_changed=function(){this.content_.className=this.get(\"backgroundClassName\")},InfoBubble.prototype.backgroundClassName_changed=InfoBubble.prototype.backgroundClassName_changed,InfoBubble.prototype.setTabClassName=function(t){this.set(\"tabClassName\",t)},InfoBubble.prototype.setTabClassName=InfoBubble.prototype.setTabClassName,InfoBubble.prototype.tabClassName_changed=function(){this.updateTabStyles_()},InfoBubble.prototype.tabClassName_changed=InfoBubble.prototype.tabClassName_changed,InfoBubble.prototype.getArrowStyle_=function(){return parseInt(this.get(\"arrowStyle\"),10)||0},InfoBubble.prototype.setArrowStyle=function(t){this.set(\"arrowStyle\",t)},InfoBubble.prototype.setArrowStyle=InfoBubble.prototype.setArrowStyle,InfoBubble.prototype.arrowStyle_changed=function(){this.arrowSize_changed()},InfoBubble.prototype.arrowStyle_changed=InfoBubble.prototype.arrowStyle_changed,InfoBubble.prototype.getArrowSize_=function(){return parseInt(this.get(\"arrowSize\"),10)||0},InfoBubble.prototype.setArrowSize=function(t){this.set(\"arrowSize\",t)},InfoBubble.prototype.setArrowSize=InfoBubble.prototype.setArrowSize,InfoBubble.prototype.arrowSize_changed=function(){this.borderWidth_changed()},InfoBubble.prototype.arrowSize_changed=InfoBubble.prototype.arrowSize_changed,InfoBubble.prototype.setArrowPosition=function(t){this.set(\"arrowPosition\",t)},InfoBubble.prototype.setArrowPosition=InfoBubble.prototype.setArrowPosition,InfoBubble.prototype.getArrowPosition_=function(){return parseInt(this.get(\"arrowPosition\"),10)||0},InfoBubble.prototype.arrowPosition_changed=function(){var t=this.getArrowPosition_();this.arrowOuter_.style.left=this.arrowInner_.style.left=t+\"%\",this.redraw_()},InfoBubble.prototype.arrowPosition_changed=InfoBubble.prototype.arrowPosition_changed,InfoBubble.prototype.setZIndex=function(t){this.set(\"zIndex\",t)},InfoBubble.prototype.setZIndex=InfoBubble.prototype.setZIndex,InfoBubble.prototype.getZIndex=function(){return parseInt(this.get(\"zIndex\"),10)||this.baseZIndex_},InfoBubble.prototype.zIndex_changed=function(){var t=this.getZIndex();this.bubble_.style.zIndex=this.baseZIndex_=t,this.close_.style.zIndex=t+1},InfoBubble.prototype.zIndex_changed=InfoBubble.prototype.zIndex_changed,InfoBubble.prototype.setShadowStyle=function(t){this.set(\"shadowStyle\",t)},InfoBubble.prototype.setShadowStyle=InfoBubble.prototype.setShadowStyle,InfoBubble.prototype.getShadowStyle_=function(){return parseInt(this.get(\"shadowStyle\"),10)||0},InfoBubble.prototype.shadowStyle_changed=function(){var t=this.getShadowStyle_(),e=\"\",o=\"\",r=\"\";switch(t){case 0:e=\"none\";break;case 1:o=\"40px 15px 10px rgba(33,33,33,0.3)\",r=\"transparent\";break;case 2:o=\"0 0 2px rgba(33,33,33,0.3)\",r=\"rgba(33,33,33,0.35)\"}this.bubbleShadow_.style.boxShadow=this.bubbleShadow_.style.webkitBoxShadow=this.bubbleShadow_.style.MozBoxShadow=o,this.bubbleShadow_.style.backgroundColor=r,this.isOpen_&&(this.bubbleShadow_.style.display=e,this.draw())},InfoBubble.prototype.shadowStyle_changed=InfoBubble.prototype.shadowStyle_changed,InfoBubble.prototype.showCloseButton=function(){this.set(\"hideCloseButton\",!1)},InfoBubble.prototype.showCloseButton=InfoBubble.prototype.showCloseButton,InfoBubble.prototype.hideCloseButton=function(){this.set(\"hideCloseButton\",!0)},InfoBubble.prototype.hideCloseButton=InfoBubble.prototype.hideCloseButton,InfoBubble.prototype.hideCloseButton_changed=function(){this.close_.style.display=this.get(\"hideCloseButton\")?\"none\":\"\"},InfoBubble.prototype.hideCloseButton_changed=InfoBubble.prototype.hideCloseButton_changed,InfoBubble.prototype.setBackgroundColor=function(t){t&&this.set(\"backgroundColor\",t)},InfoBubble.prototype.setBackgroundColor=InfoBubble.prototype.setBackgroundColor,InfoBubble.prototype.backgroundColor_changed=function(){var t=this.get(\"backgroundColor\");this.contentContainer_.style.backgroundColor=t,this.arrowInner_.style.borderColor=t+\" transparent transparent\",this.updateTabStyles_()},InfoBubble.prototype.backgroundColor_changed=InfoBubble.prototype.backgroundColor_changed,InfoBubble.prototype.setBorderColor=function(t){t&&this.set(\"borderColor\",t)},InfoBubble.prototype.setBorderColor=InfoBubble.prototype.setBorderColor,InfoBubble.prototype.borderColor_changed=function(){var t=this.get(\"borderColor\"),e=this.contentContainer_,o=this.arrowOuter_;e.style.borderColor=t,o.style.borderColor=t+\" transparent transparent\",e.style.borderStyle=o.style.borderStyle=this.arrowInner_.style.borderStyle=\"solid\",this.updateTabStyles_()},InfoBubble.prototype.borderColor_changed=InfoBubble.prototype.borderColor_changed,InfoBubble.prototype.setBorderRadius=function(t){this.set(\"borderRadius\",t)},InfoBubble.prototype.setBorderRadius=InfoBubble.prototype.setBorderRadius,InfoBubble.prototype.getBorderRadius_=function(){return parseInt(this.get(\"borderRadius\"),10)||0},InfoBubble.prototype.borderRadius_changed=function(){var t=this.getBorderRadius_(),e=this.getBorderWidth_();this.contentContainer_.style.borderRadius=this.contentContainer_.style.MozBorderRadius=this.contentContainer_.style.webkitBorderRadius=this.bubbleShadow_.style.borderRadius=this.bubbleShadow_.style.MozBorderRadius=this.bubbleShadow_.style.webkitBorderRadius=this.px(t),this.tabsContainer_.style.paddingLeft=this.tabsContainer_.style.paddingRight=this.px(t+e),this.redraw_()},InfoBubble.prototype.borderRadius_changed=InfoBubble.prototype.borderRadius_changed,InfoBubble.prototype.getBorderWidth_=function(){return parseInt(this.get(\"borderWidth\"),10)||0},InfoBubble.prototype.setBorderWidth=function(t){this.set(\"borderWidth\",t)},InfoBubble.prototype.setBorderWidth=InfoBubble.prototype.setBorderWidth,InfoBubble.prototype.borderWidth_changed=function(){var t=this.getBorderWidth_();this.contentContainer_.style.borderWidth=this.px(t),this.tabsContainer_.style.top=this.px(t),this.updateArrowStyle_(),this.updateTabStyles_(),this.borderRadius_changed(),this.redraw_()},InfoBubble.prototype.borderWidth_changed=InfoBubble.prototype.borderWidth_changed,InfoBubble.prototype.updateArrowStyle_=function(){var t=this.getBorderWidth_(),e=this.getArrowSize_(),o=this.getArrowStyle_(),r=this.px(e),i=this.px(Math.max(0,e-t)),n=this.arrowOuter_,s=this.arrowInner_;this.arrow_.style.marginTop=this.px(-t),n.style.borderTopWidth=r,s.style.borderTopWidth=i,0==o||1==o?(n.style.borderLeftWidth=r,s.style.borderLeftWidth=i):n.style.borderLeftWidth=s.style.borderLeftWidth=0,0==o||2==o?(n.style.borderRightWidth=r,s.style.borderRightWidth=i):n.style.borderRightWidth=s.style.borderRightWidth=0,o<2?(n.style.marginLeft=this.px(-e),s.style.marginLeft=this.px(-(e-t))):n.style.marginLeft=s.style.marginLeft=0,0==t?n.style.display=\"none\":n.style.display=\"\"},InfoBubble.prototype.setPadding=function(t){this.set(\"padding\",t)},InfoBubble.prototype.setPadding=InfoBubble.prototype.setPadding,InfoBubble.prototype.setCloseSrc=function(t){t&&this.close_&&(this.close_.src=t)},InfoBubble.prototype.setCloseSrc=InfoBubble.prototype.setCloseSrc,InfoBubble.prototype.getPadding_=function(){return parseInt(this.get(\"padding\"),10)||0},InfoBubble.prototype.padding_changed=function(){var t=this.getPadding_();this.contentContainer_.style.padding=this.px(t),this.updateTabStyles_(),this.redraw_()},InfoBubble.prototype.padding_changed=InfoBubble.prototype.padding_changed,InfoBubble.prototype.px=function(t){return t?t+\"px\":t},InfoBubble.prototype.addEvents_=function(){var t=[\"mousedown\",\"mousemove\",\"mouseover\",\"mouseout\",\"mouseup\",\"mousewheel\",\"DOMMouseScroll\",\"touchstart\",\"touchend\",\"touchmove\",\"dblclick\",\"contextmenu\",\"click\"],e=this.bubble_;this.listeners_=[];for(var o,r=0;o=t[r];r++)this.listeners_.push(google.maps.event.addDomListener(e,o,function(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation()}))},InfoBubble.prototype.onAdd=function(){this.bubble_||this.buildDom_(),this.addEvents_();var t=this.getPanes();t&&(t.floatPane.appendChild(this.bubble_),t.floatShadow.appendChild(this.bubbleShadow_)),google.maps.event.trigger(this,\"domready\")},InfoBubble.prototype.onAdd=InfoBubble.prototype.onAdd,InfoBubble.prototype.draw=function(){var t=this.getProjection();if(t){var e=this.get(\"position\");if(!e)return void this.close();var o=0;this.activeTab_&&(o=this.activeTab_.offsetHeight);var r=this.getAnchorHeight_(),i=this.getArrowSize_(),n=this.getArrowPosition_();n/=100;var s=t.fromLatLngToDivPixel(e),a=this.contentContainer_.offsetWidth,h=this.bubble_.offsetHeight;if(a){var p=s.y-(h+i+25);r&&(p-=r);var b=s.x-a*n;this.bubble_.style.top=this.px(p),this.bubble_.style.left=this.px(b);var l=parseInt(this.get(\"shadowStyle\"),10);switch(l){case 1:this.bubbleShadow_.style.top=this.px(p+o-1),this.bubbleShadow_.style.left=this.px(b),this.bubbleShadow_.style.width=this.px(a),this.bubbleShadow_.style.height=this.px(this.contentContainer_.offsetHeight-i);break;case 2:a=.8*a,r?this.bubbleShadow_.style.top=this.px(s.y):this.bubbleShadow_.style.top=this.px(s.y+i),this.bubbleShadow_.style.left=this.px(s.x-a*n),this.bubbleShadow_.style.width=this.px(a),this.bubbleShadow_.style.height=this.px(2)}}}},InfoBubble.prototype.draw=InfoBubble.prototype.draw,InfoBubble.prototype.onRemove=function(){this.bubble_&&this.bubble_.parentNode&&this.bubble_.parentNode.removeChild(this.bubble_),this.bubbleShadow_&&this.bubbleShadow_.parentNode&&this.bubbleShadow_.parentNode.removeChild(this.bubbleShadow_);for(var t,e=0;t=this.listeners_[e];e++)google.maps.event.removeListener(t)},InfoBubble.prototype.onRemove=InfoBubble.prototype.onRemove,InfoBubble.prototype.isOpen=function(){return this.isOpen_},InfoBubble.prototype.isOpen=InfoBubble.prototype.isOpen,InfoBubble.prototype.close=function(){this.bubble_&&(this.bubble_.style.display=\"none\",this.bubble_.className=this.bubble_.className.replace(this.animationName_,\"\")),this.bubbleShadow_&&(this.bubbleShadow_.style.display=\"none\",this.bubbleShadow_.className=this.bubbleShadow_.className.replace(this.animationName_,\"\")),this.isOpen_=!1},InfoBubble.prototype.close=InfoBubble.prototype.close,InfoBubble.prototype.open=function(t,e){var o=this;window.setTimeout(function(){o.open_(t,e)},0)},InfoBubble.prototype.open_=function(t,e){this.updateContent_(),t&&this.setMap(t),e&&(this.set(\"anchor\",e),this.bindTo(\"anchorPoint\",e),this.bindTo(\"position\",e)),this.bubble_.style.display=this.bubbleShadow_.style.display=\"\";var o=!this.get(\"disableAnimation\");o&&(this.bubble_.className+=\" \"+this.animationName_,this.bubbleShadow_.className+=\" \"+this.animationName_),this.redraw_(),this.isOpen_=!0;var r=!this.get(\"disableAutoPan\");if(r){var i=this;window.setTimeout(function(){i.panToView()},200)}},InfoBubble.prototype.open=InfoBubble.prototype.open,InfoBubble.prototype.setPosition=function(t){t&&this.set(\"position\",t)},InfoBubble.prototype.setPosition=InfoBubble.prototype.setPosition,InfoBubble.prototype.getPosition=function(){return this.get(\"position\")},InfoBubble.prototype.getPosition=InfoBubble.prototype.getPosition,InfoBubble.prototype.position_changed=function(){this.draw()},InfoBubble.prototype.position_changed=InfoBubble.prototype.position_changed,InfoBubble.prototype.panToView=function(){var t=this.getProjection();if(t&&this.bubble_){var e=this.getAnchorHeight_(),o=this.bubble_.offsetHeight+e,r=this.get(\"map\"),i=r.getDiv(),n=i.offsetHeight,s=this.getPosition(),a=t.fromLatLngToContainerPixel(r.getCenter()),h=t.fromLatLngToContainerPixel(s),p=a.y-o,b=n-a.y,l=p<0,d=0;l&&(p*=-1,d=(p+b)/2),h.y-=d,s=t.fromContainerPixelToLatLng(h),r.getCenter()!=s&&r.panTo(s)}},InfoBubble.prototype.panToView=InfoBubble.prototype.panToView,InfoBubble.prototype.htmlToDocumentFragment_=function(t){t=t.replace(/^\\s*([\\S\\s]*)\\b\\s*$/,\"$1\");var e=document.createElement(\"DIV\");if(e.innerHTML=t,1==e.childNodes.length)return e.removeChild(e.firstChild);for(var o=document.createDocumentFragment();e.firstChild;)o.appendChild(e.firstChild);return o},InfoBubble.prototype.removeChildren_=function(t){if(t)for(var e;e=t.firstChild;)t.removeChild(e)},InfoBubble.prototype.setContent=function(t){this.set(\"content\",t)},InfoBubble.prototype.setContent=InfoBubble.prototype.setContent,InfoBubble.prototype.getContent=function(){return this.get(\"content\")},InfoBubble.prototype.getContent=InfoBubble.prototype.getContent,InfoBubble.prototype.updateContent_=function(){if(this.content_){this.removeChildren_(this.content_);var t=this.getContent();if(t){\"string\"==typeof t&&(t=this.htmlToDocumentFragment_(t)),this.content_.appendChild(t);for(var e,o=this,r=this.content_.getElementsByTagName(\"IMG\"),i=0;e=r[i];i++)google.maps.event.addDomListener(e,\"load\",function(){o.imageLoaded_()})}this.redraw_()}},InfoBubble.prototype.imageLoaded_=function(){var t=!this.get(\"disableAutoPan\");this.redraw_(),!t||0!=this.tabs_.length&&0!=this.activeTab_.index||this.panToView()},InfoBubble.prototype.updateTabStyles_=function(){if(this.tabs_&&this.tabs_.length){for(var t,e=0;t=this.tabs_[e];e++)this.setTabStyle_(t.tab);this.activeTab_.style.zIndex=this.baseZIndex_;var o=this.getBorderWidth_(),r=this.getPadding_()/2;this.activeTab_.style.borderBottomWidth=0,this.activeTab_.style.paddingBottom=this.px(r+o)}},InfoBubble.prototype.setTabStyle_=function(t){var e=this.get(\"backgroundColor\"),o=this.get(\"borderColor\"),r=this.getBorderRadius_(),i=this.getBorderWidth_(),n=this.getPadding_(),s=this.px(-Math.max(n,r)),a=this.px(r),h=this.baseZIndex_;t.index&&(h-=t.index);var p={cssFloat:\"left\",position:\"relative\",cursor:\"pointer\",backgroundColor:e,border:this.px(i)+\" solid \"+o,padding:this.px(n/2)+\" \"+this.px(n),marginRight:s,whiteSpace:\"nowrap\",borderRadiusTopLeft:a,MozBorderRadiusTopleft:a,webkitBorderTopLeftRadius:a,borderRadiusTopRight:a,MozBorderRadiusTopright:a,webkitBorderTopRightRadius:a,zIndex:h,display:\"inline\"};for(var b in p)t.style[b]=p[b];var l=this.get(\"tabClassName\");void 0!=l&&(t.className+=\" \"+l)},InfoBubble.prototype.addTabActions_=function(t){var e=this;t.listener_=google.maps.event.addDomListener(t,\"click\",function(){e.setTabActive_(this)})},InfoBubble.prototype.setTabActive=function(t){var e=this.tabs_[t-1];e&&this.setTabActive_(e.tab)},InfoBubble.prototype.setTabActive=InfoBubble.prototype.setTabActive,InfoBubble.prototype.setTabActive_=function(t){if(!t)return this.setContent(\"\"),void this.updateContent_();var e=this.getPadding_()/2,o=this.getBorderWidth_();if(this.activeTab_){var r=this.activeTab_;r.style.zIndex=this.baseZIndex_-r.index,r.style.paddingBottom=this.px(e),r.style.borderBottomWidth=this.px(o)}t.style.zIndex=this.baseZIndex_,t.style.borderBottomWidth=0,t.style.marginBottomWidth=\"-10px\",t.style.paddingBottom=this.px(e+o),this.setContent(this.tabs_[t.index].content),this.updateContent_(),this.activeTab_=t,this.redraw_()},InfoBubble.prototype.setMaxWidth=function(t){this.set(\"maxWidth\",t)},InfoBubble.prototype.setMaxWidth=InfoBubble.prototype.setMaxWidth,InfoBubble.prototype.maxWidth_changed=function(){this.redraw_()},InfoBubble.prototype.maxWidth_changed=InfoBubble.prototype.maxWidth_changed,InfoBubble.prototype.setMaxHeight=function(t){this.set(\"maxHeight\",t)},InfoBubble.prototype.setMaxHeight=InfoBubble.prototype.setMaxHeight,InfoBubble.prototype.maxHeight_changed=function(){this.redraw_()},InfoBubble.prototype.maxHeight_changed=InfoBubble.prototype.maxHeight_changed,InfoBubble.prototype.setMinWidth=function(t){this.set(\"minWidth\",t)},InfoBubble.prototype.setMinWidth=InfoBubble.prototype.setMinWidth,InfoBubble.prototype.minWidth_changed=function(){this.redraw_()},InfoBubble.prototype.minWidth_changed=InfoBubble.prototype.minWidth_changed,InfoBubble.prototype.setMinHeight=function(t){this.set(\"minHeight\",t)},InfoBubble.prototype.setMinHeight=InfoBubble.prototype.setMinHeight,InfoBubble.prototype.minHeight_changed=function(){this.redraw_()},InfoBubble.prototype.minHeight_changed=InfoBubble.prototype.minHeight_changed,InfoBubble.prototype.addTab=function(t,e){var o=document.createElement(\"DIV\");o.innerHTML=t,this.setTabStyle_(o),this.addTabActions_(o),this.tabsContainer_.appendChild(o),this.tabs_.push({label:t,content:e,tab:o}),o.index=this.tabs_.length-1,o.style.zIndex=this.baseZIndex_-o.index,this.activeTab_||this.setTabActive_(o),o.className=o.className+\" \"+this.animationName_,this.redraw_()},InfoBubble.prototype.addTab=InfoBubble.prototype.addTab,InfoBubble.prototype.updateTab=function(t,e,o){if(!(!this.tabs_.length||t<0||t>=this.tabs_.length)){var r=this.tabs_[t];void 0!=e&&(r.tab.innerHTML=r.label=e),void 0!=o&&(r.content=o),this.activeTab_==r.tab&&(this.setContent(r.content),this.updateContent_()),this.redraw_()}},InfoBubble.prototype.updateTab=InfoBubble.prototype.updateTab,InfoBubble.prototype.removeTab=function(t){if(!(!this.tabs_.length||t<0||t>=this.tabs_.length)){var e=this.tabs_[t];e.tab.parentNode.removeChild(e.tab),google.maps.event.removeListener(e.tab.listener_),this.tabs_.splice(t,1),delete e;for(var o,r=0;o=this.tabs_[r];r++)o.tab.index=r;e.tab==this.activeTab_&&(this.tabs_[t]?this.activeTab_=this.tabs_[t].tab:this.tabs_[t-1]?this.activeTab_=this.tabs_[t-1].tab:this.activeTab_=void 0,this.setTabActive_(this.activeTab_)),this.redraw_()}},InfoBubble.prototype.removeTab=InfoBubble.prototype.removeTab,InfoBubble.prototype.getElementSize_=function(t,e,o){var r=document.createElement(\"DIV\");r.style.display=\"inline\",r.style.position=\"absolute\",r.style.visibility=\"hidden\",\"string\"==typeof t?r.innerHTML=t:r.appendChild(t.cloneNode(!0)),document.body.appendChild(r);var i=new google.maps.Size(r.offsetWidth,r.offsetHeight);return e&&i.width>e&&(r.style.width=this.px(e),i=new google.maps.Size(r.offsetWidth,r.offsetHeight)),o&&i.height>o&&(r.style.height=this.px(o),i=new google.maps.Size(r.offsetWidth,r.offsetHeight)),document.body.removeChild(r),delete r,i},InfoBubble.prototype.redraw_=function(){this.figureOutSize_(),this.positionCloseButton_(),this.draw()},InfoBubble.prototype.figureOutSize_=function(){var t=this.get(\"map\");if(t){var e=this.getPadding_(),o=(this.getBorderWidth_(),this.getBorderRadius_(),this.getArrowSize_()),r=t.getDiv(),i=2*o,n=r.offsetWidth-i,s=r.offsetHeight-i-this.getAnchorHeight_(),a=0,h=this.get(\"minWidth\")||0,p=this.get(\"minHeight\")||0,b=this.get(\"maxWidth\")||0,l=this.get(\"maxHeight\")||0;b=Math.min(n,b),l=Math.min(s,l);var d=0;if(this.tabs_.length)for(var g,u=0;g=this.tabs_[u];u++){var c=this.getElementSize_(g.tab,b,l),y=this.getElementSize_(g.content,b,l);h<c.width&&(h=c.width),d+=c.width,p<c.height&&(p=c.height),c.height>a&&(a=c.height),h<y.width&&(h=y.width),p<y.height&&(p=y.height)}else{var _=this.get(\"content\");if(\"string\"==typeof _&&(_=this.htmlToDocumentFragment_(_)),_){var y=this.getElementSize_(_,b,l);h<y.width&&(h=y.width),p<y.height&&(p=y.height)}}b&&(h=Math.min(h,b)),l&&(p=Math.min(p,l)),h=Math.max(h,d),h==d&&(h+=2*e),o=2*o,h=Math.max(h,o),h>n&&(h=n),p>s&&(p=s-a),this.tabsContainer_&&(this.tabHeight_=a,this.tabsContainer_.style.width=this.px(d)),this.contentContainer_.style.width=this.px(h),this.contentContainer_.style.height=this.px(p)}},InfoBubble.prototype.getAnchorHeight_=function(){var t=this.get(\"anchor\");if(t){var e=this.get(\"anchorPoint\");if(e)return-1*e.y}return 0},InfoBubble.prototype.anchorPoint_changed=function(){this.draw()},InfoBubble.prototype.anchorPoint_changed=InfoBubble.prototype.anchorPoint_changed,InfoBubble.prototype.positionCloseButton_=function(){var t=(this.getBorderRadius_(),this.getBorderWidth_()),e=2,o=2;this.tabs_.length&&this.tabHeight_&&(o+=this.tabHeight_),o+=t,e+=t;var r=this.contentContainer_;r&&r.clientHeight<r.scrollHeight&&(e+=15),this.close_.style.right=this.px(e),this.close_.style.top=this.px(o)},RichMarker.prototype=new google.maps.OverlayView,window.RichMarker=RichMarker,RichMarker.prototype.getVisible=function(){return this.get(\"visible\")},RichMarker.prototype.getVisible=RichMarker.prototype.getVisible,RichMarker.prototype.setVisible=function(t){this.set(\"visible\",t)},RichMarker.prototype.setVisible=RichMarker.prototype.setVisible,RichMarker.prototype.visible_changed=function(){this.ready_&&(this.markerWrapper_.style.display=this.getVisible()?\"\":\"none\",this.draw())},RichMarker.prototype.visible_changed=RichMarker.prototype.visible_changed,RichMarker.prototype.setFlat=function(t){this.set(\"flat\",!!t)},RichMarker.prototype.setFlat=RichMarker.prototype.setFlat,RichMarker.prototype.getFlat=function(){return this.get(\"flat\")},RichMarker.prototype.getFlat=RichMarker.prototype.getFlat,RichMarker.prototype.getWidth=function(){return this.get(\"width\")},RichMarker.prototype.getWidth=RichMarker.prototype.getWidth,RichMarker.prototype.getHeight=function(){return this.get(\"height\")},RichMarker.prototype.getHeight=RichMarker.prototype.getHeight,RichMarker.prototype.setShadow=function(t){this.set(\"shadow\",t),this.flat_changed()},RichMarker.prototype.setShadow=RichMarker.prototype.setShadow,RichMarker.prototype.getShadow=function(){return this.get(\"shadow\")},RichMarker.prototype.getShadow=RichMarker.prototype.getShadow,RichMarker.prototype.flat_changed=function(){this.ready_&&(this.markerWrapper_.style.boxShadow=this.markerWrapper_.style.webkitBoxShadow=this.markerWrapper_.style.MozBoxShadow=this.getFlat()?\"\":this.getShadow())},RichMarker.prototype.flat_changed=RichMarker.prototype.flat_changed,RichMarker.prototype.setZIndex=function(t){this.set(\"zIndex\",t)},RichMarker.prototype.setZIndex=RichMarker.prototype.setZIndex,RichMarker.prototype.getZIndex=function(){return this.get(\"zIndex\")},RichMarker.prototype.getZIndex=RichMarker.prototype.getZIndex,RichMarker.prototype.zIndex_changed=function(){this.getZIndex()&&this.ready_&&(this.markerWrapper_.style.zIndex=this.getZIndex())},RichMarker.prototype.zIndex_changed=RichMarker.prototype.zIndex_changed,RichMarker.prototype.getDraggable=function(){return this.get(\"draggable\")},RichMarker.prototype.getDraggable=RichMarker.prototype.getDraggable,RichMarker.prototype.setDraggable=function(t){this.set(\"draggable\",!!t)},RichMarker.prototype.setDraggable=RichMarker.prototype.setDraggable,RichMarker.prototype.draggable_changed=function(){this.ready_&&(this.getDraggable()?this.addDragging_(this.markerWrapper_):this.removeDragListeners_())},RichMarker.prototype.draggable_changed=RichMarker.prototype.draggable_changed,RichMarker.prototype.getPosition=function(){return this.get(\"position\")},RichMarker.prototype.getPosition=RichMarker.prototype.getPosition,RichMarker.prototype.setPosition=function(t){this.set(\"position\",t)},RichMarker.prototype.setPosition=RichMarker.prototype.setPosition,RichMarker.prototype.position_changed=function(){this.draw()},RichMarker.prototype.position_changed=RichMarker.prototype.position_changed,RichMarker.prototype.getAnchor=function(){return this.get(\"anchor\")},RichMarker.prototype.getAnchor=RichMarker.prototype.getAnchor,RichMarker.prototype.setAnchor=function(t){this.set(\"anchor\",t)},RichMarker.prototype.setAnchor=RichMarker.prototype.setAnchor,RichMarker.prototype.anchor_changed=function(){this.draw()},RichMarker.prototype.anchor_changed=RichMarker.prototype.anchor_changed,RichMarker.prototype.htmlToDocumentFragment_=function(t){var e=document.createElement(\"DIV\");if(e.innerHTML=t,1==e.childNodes.length)return e.removeChild(e.firstChild);for(var o=document.createDocumentFragment();e.firstChild;)o.appendChild(e.firstChild);return o},RichMarker.prototype.removeChildren_=function(t){if(t)for(var e;e=t.firstChild;)t.removeChild(e)},RichMarker.prototype.setContent=function(t){this.set(\"content\",t)},RichMarker.prototype.setContent=RichMarker.prototype.setContent,RichMarker.prototype.getContent=function(){return this.get(\"content\")},RichMarker.prototype.getContent=RichMarker.prototype.getContent,RichMarker.prototype.content_changed=function(){if(this.markerContent_){this.removeChildren_(this.markerContent_);var t=this.getContent();if(t){\"string\"==typeof t&&(t=t.replace(/^\\s*([\\S\\s]*)\\b\\s*$/,\"$1\"),t=this.htmlToDocumentFragment_(t)),this.markerContent_.appendChild(t);for(var e,o=this,r=this.markerContent_.getElementsByTagName(\"IMG\"),i=0;e=r[i];i++)google.maps.event.addDomListener(e,\"mousedown\",function(t){o.getDraggable()&&(t.preventDefault&&t.preventDefault(),t.returnValue=!1)}),google.maps.event.addDomListener(e,\"load\",function(){o.draw()});google.maps.event.trigger(this,\"domready\")}this.ready_&&this.draw()}},RichMarker.prototype.content_changed=RichMarker.prototype.content_changed,RichMarker.prototype.setCursor_=function(t){if(this.ready_){var e=\"\";navigator.userAgent.indexOf(\"Gecko/\")!==-1?(\"dragging\"==t&&(e=\"-moz-grabbing\"),\"dragready\"==t&&(e=\"-moz-grab\"),\"draggable\"==t&&(e=\"pointer\")):(\"dragging\"!=t&&\"dragready\"!=t||(e=\"move\"),\"draggable\"==t&&(e=\"pointer\")),this.markerWrapper_.style.cursor!=e&&(this.markerWrapper_.style.cursor=e)}},RichMarker.prototype.startDrag=function(t){if(this.getDraggable()&&!this.dragging_){this.dragging_=!0;var e=this.getMap();this.mapDraggable_=e.get(\"draggable\"),e.set(\"draggable\",!1),this.mouseX_=t.clientX,this.mouseY_=t.clientY,this.setCursor_(\"dragready\"),this.markerWrapper_.style.MozUserSelect=\"none\",this.markerWrapper_.style.KhtmlUserSelect=\"none\",this.markerWrapper_.style.WebkitUserSelect=\"none\",this.markerWrapper_.unselectable=\"on\",this.markerWrapper_.onselectstart=function(){return!1},this.addDraggingListeners_(),google.maps.event.trigger(this,\"dragstart\")}},RichMarker.prototype.stopDrag=function(){this.getDraggable()&&this.dragging_&&(this.dragging_=!1,this.getMap().set(\"draggable\",this.mapDraggable_),this.mouseX_=this.mouseY_=this.mapDraggable_=null,this.markerWrapper_.style.MozUserSelect=\"\",this.markerWrapper_.style.KhtmlUserSelect=\"\",this.markerWrapper_.style.WebkitUserSelect=\"\",this.markerWrapper_.unselectable=\"off\",this.markerWrapper_.onselectstart=function(){},this.removeDraggingListeners_(),this.setCursor_(\"draggable\"),google.maps.event.trigger(this,\"dragend\"),this.draw())},RichMarker.prototype.drag=function(t){if(!this.getDraggable()||!this.dragging_)return void this.stopDrag();var e=this.mouseX_-t.clientX,o=this.mouseY_-t.clientY;this.mouseX_=t.clientX,this.mouseY_=t.clientY;var r=parseInt(this.markerWrapper_.style.left,10)-e,i=parseInt(this.markerWrapper_.style.top,10)-o;this.markerWrapper_.style.left=r+\"px\",this.markerWrapper_.style.top=i+\"px\";var n=this.getOffset_(),s=new google.maps.Point(r-n.width,i-n.height),a=this.getProjection();this.setPosition(a.fromDivPixelToLatLng(s)),this.setCursor_(\"dragging\"),google.maps.event.trigger(this,\"drag\")},RichMarker.prototype.removeDragListeners_=function(){this.draggableListener_&&(google.maps.event.removeListener(this.draggableListener_),delete this.draggableListener_),this.setCursor_(\"\")},RichMarker.prototype.addDragging_=function(t){if(t){var e=this;this.draggableListener_=google.maps.event.addDomListener(t,\"mousedown\",function(t){e.startDrag(t)}),this.setCursor_(\"draggable\")}},RichMarker.prototype.addDraggingListeners_=function(){var t=this;this.markerWrapper_.setCapture?(this.markerWrapper_.setCapture(!0),this.draggingListeners_=[google.maps.event.addDomListener(this.markerWrapper_,\"mousemove\",function(e){t.drag(e)},!0),google.maps.event.addDomListener(this.markerWrapper_,\"mouseup\",function(){t.stopDrag(),t.markerWrapper_.releaseCapture()},!0)]):this.draggingListeners_=[google.maps.event.addDomListener(window,\"mousemove\",function(e){t.drag(e)},!0),google.maps.event.addDomListener(window,\"mouseup\",function(){t.stopDrag()},!0)]},RichMarker.prototype.removeDraggingListeners_=function(){if(this.draggingListeners_){for(var t,e=0;t=this.draggingListeners_[e];e++)google.maps.event.removeListener(t);this.draggingListeners_.length=0}},RichMarker.prototype.getOffset_=function(){var t=this.getAnchor();if(\"object\"==typeof t)return t;var e=new google.maps.Size(0,0);if(!this.markerContent_)return e;var o=this.markerContent_.offsetWidth,r=this.markerContent_.offsetHeight;switch(t){case RichMarkerPosition.TOP_LEFT:break;case RichMarkerPosition.TOP:e.width=-o/2;break;case RichMarkerPosition.TOP_RIGHT:e.width=-o;break;case RichMarkerPosition.LEFT:e.height=-r/2;break;case RichMarkerPosition.MIDDLE:e.width=-o/2,e.height=-r/2;break;case RichMarkerPosition.RIGHT:e.width=-o,e.height=-r/2;break;case RichMarkerPosition.BOTTOM_LEFT:e.height=-r;break;case RichMarkerPosition.BOTTOM:e.width=-o/2,e.height=-r;break;case RichMarkerPosition.BOTTOM_RIGHT:e.width=-o,e.height=-r}return e},RichMarker.prototype.onAdd=function(){if(this.markerWrapper_||(this.markerWrapper_=document.createElement(\"DIV\"),this.markerWrapper_.style.position=\"absolute\"),this.getZIndex()&&(this.markerWrapper_.style.zIndex=this.getZIndex()),this.markerWrapper_.style.display=this.getVisible()?\"\":\"none\",!this.markerContent_){this.markerContent_=document.createElement(\"DIV\"),this.markerWrapper_.appendChild(this.markerContent_);var t=this;google.maps.event.addDomListener(this.markerContent_,\"click\",function(e){google.maps.event.trigger(t,\"click\",e)}),google.maps.event.addDomListener(this.markerContent_,\"mouseover\",function(e){google.maps.event.trigger(t,\"mouseover\",e)}),google.maps.event.addDomListener(this.markerContent_,\"mouseout\",function(e){google.maps.event.trigger(t,\"mouseout\",e)})}this.ready_=!0,this.content_changed(),this.flat_changed(),this.draggable_changed();var e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.markerWrapper_),google.maps.event.trigger(this,\"ready\")},RichMarker.prototype.onAdd=RichMarker.prototype.onAdd,RichMarker.prototype.draw=function(){if(this.ready_&&!this.dragging_){var t=this.getProjection();if(t){var e=this.get(\"position\"),o=t.fromLatLngToDivPixel(e),r=this.getOffset_();this.markerWrapper_.style.top=o.y+r.height+\"px\",this.markerWrapper_.style.left=o.x+r.width+\"px\";var i=this.markerContent_.offsetHeight,n=this.markerContent_.offsetWidth;n!=this.get(\"width\")&&this.set(\"width\",n),i!=this.get(\"height\")&&this.set(\"height\",i)}}},RichMarker.prototype.draw=RichMarker.prototype.draw,RichMarker.prototype.onRemove=function(){this.markerWrapper_&&this.markerWrapper_.parentNode&&this.markerWrapper_.parentNode.removeChild(this.markerWrapper_),this.removeDragListeners_()},RichMarker.prototype.onRemove=RichMarker.prototype.onRemove;var RichMarkerPosition={TOP_LEFT:1,TOP:2,TOP_RIGHT:3,LEFT:4,MIDDLE:5,RIGHT:6,BOTTOM_LEFT:7,BOTTOM:8,BOTTOM_RIGHT:9};window.RichMarkerPosition=RichMarkerPosition;";
var mod_pagespeed_4b9q3qwNoJ = "function AutoCenter(){var e=new google.maps.LatLngBounds;$.each(markers,function(i,a){e.extend(a.position)}),map.fitBounds(e);var i=google.maps.event.addListener(map,\"idle\",function(){map.setZoom(15),google.maps.event.removeListener(i)})}var locations=[[40.678178,-73.944158,\"gl-restaurant-icon\"]],map=new google.maps.Map(document.getElementById(\"gl-map-small\"),{scrollwheel:!1,styles:[{featureType:\"administrative.neighborhood\",elementType:\"geometry\",stylers:[{visibility:\"on\"}]},{featureType:\"administrative.land_parcel\",elementType:\"geometry.fill\",stylers:[{visibility:\"simplified\"},{hue:\"#ffa900\"}]}],center:new google.maps.LatLng(40.754799,(-73.906746))}),marker,i,markers=new Array,infowindow=new google.maps.InfoWindow;for(i=0;i<locations.length;i++){var lat=locations[i][0],lng=locations[i][1],markerIcon='<div class=\"gl-marker-icon '+locations[i][2]+'\"><div class=\"gl-map-marker-img\"><img src=\"images/'+locations[i][2]+'.svg\"/></div></div>';marker=new RichMarker({position:new google.maps.LatLng(lat,lng),map:map,icon:locations[i][2],flat:!0,anchor:RichMarkerPosition.MIDDLE,content:markerIcon}),markers.push(marker)}AutoCenter(),$(\".gm-style-iw\").next(\"div\").hide();";
