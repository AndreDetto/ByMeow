(function(g){var window=this;'use strict';var IWa=function(a,b){a.La("onAutonavCoundownStarted",b)},X2=function(a,b,c){g.O(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.wf(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.bD&&(b.lengthText?(e=b.lengthText||null,f=b.Pr||null):b.lengthSeconds&&(e=g.HH(b.lengthSeconds),f=g.HH(b.lengthSeconds,!0)));var k=!!d;d=k&&"RD"===g.YC(d).type;var l=b instanceof g.bD?b.isLivePlayback:null,m=b instanceof g.bD?b.isUpcoming:null;c={title:b.title,author:b.author,author_and_views:b.shortViewCount?b.author+" \u2022 "+b.shortViewCount:b.author,aria_label:b.ariaLabel||g.tF("Watch $TITLE",{TITLE:b.title}),duration:e,
timestamp:f,url:b.Xl(),is_live:l,is_upcoming:m,is_list:k,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:b.shortViewCount?b.shortViewCount+" \u2022 "+b.publishedTimeText:b.publishedTimeText,autoplayAlternativeHeader:b.Lo};b instanceof g.aD&&(c.playlist_length=b.playlistLength);a.update(c)},Y2=function(a){var b=a.S(),c=b.j;
g.W.call(this,{F:"a",K:"ytp-autonav-suggestion-card",T:{href:"{{url}}",target:c?b.J:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},R:[{F:"div",Ba:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],T:{style:"{{background}}"},R:[{F:"div",T:{"aria-label":"{{timestamp}}"},Ba:["ytp-autonav-timestamp"],Z:"{{duration}}"},{F:"div",Ba:["ytp-autonav-live-stamp"],Z:"Live"},{F:"div",
Ba:["ytp-autonav-upcoming-stamp"],Z:"Upcoming"},{F:"div",K:"ytp-autonav-list-overlay",R:[{F:"div",K:"ytp-autonav-mix-text",Z:"Mix"},{F:"div",K:"ytp-autonav-mix-icon"}]}]},{F:"div",Ba:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],Z:"{{title}}"},{F:"div",Ba:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],Z:"{{author}}"},{F:"div",Ba:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],Z:"{{views_and_publish_time}}"}]});this.G=a;this.suggestion=
null;this.j=c;this.Ja("click",this.onClick);this.Ja("keypress",this.onKeyPress)},$2=function(a,b){b=void 0===b?!1:b;
g.W.call(this,{F:"div",K:"ytp-autonav-endscreen-countdown-container"});var c=this;this.I=b;this.D=void 0;this.u=0;b=a.S();var d=b.j;this.G=a;this.suggestion=null;this.onVideoDataChange("newdata",this.G.getVideoData());this.P(a,"videodatachange",this.onVideoDataChange);this.j=new g.W({F:"div",K:"ytp-autonav-endscreen-upnext-container",T:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},R:[{F:"div",
K:"ytp-autonav-endscreen-upnext-header"},{F:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",Z:"{{autoplayAlternativeHeader}}"},{F:"a",K:"ytp-autonav-endscreen-link-container",T:{href:"{{url}}",target:d?b.J:""},R:[{F:"div",K:"ytp-autonav-endscreen-upnext-thumbnail",T:{style:"{{background}}"},R:[{F:"div",T:{"aria-label":"{{timestamp}}"},Ba:["ytp-autonav-timestamp"],Z:"{{duration}}"},{F:"div",Ba:["ytp-autonav-live-stamp"],Z:"Live"},{F:"div",Ba:["ytp-autonav-upcoming-stamp"],Z:"Upcoming"}]},
{F:"div",K:"ytp-autonav-endscreen-video-info",R:[{F:"div",K:"ytp-autonav-endscreen-premium-badge"},{F:"div",K:"ytp-autonav-endscreen-upnext-title",Z:"{{title}}"},{F:"div",K:"ytp-autonav-endscreen-upnext-author",Z:"{{author}}"},{F:"div",K:"ytp-autonav-view-and-date",Z:"{{views_and_publish_time}}"},{F:"div",K:"ytp-autonav-author-and-view",Z:"{{author_and_views}}"}]}]}]});g.H(this,this.j);this.j.xa(this.element);d||this.P(this.j.ya("ytp-autonav-endscreen-link-container"),"click",this.sL);this.G.xb(this.element,
this,115127);this.G.xb(this.j.ya("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.W({F:"div",K:"ytp-autonav-overlay"});g.H(this,this.overlay);this.overlay.xa(this.element);this.B=new g.W({F:"div",K:"ytp-autonav-endscreen-button-container"});g.H(this,this.B);this.B.xa(this.element);this.cancelButton=new g.W({F:"button",Ba:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],T:{"aria-label":"Cancel autoplay"},Z:"Cancel"});g.H(this,this.cancelButton);
this.cancelButton.xa(this.B.element);this.cancelButton.Ja("click",this.gU,this);this.G.xb(this.cancelButton.element,this,115129);this.playButton=new g.W({F:"a",Ba:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],T:{href:"{{url}}",role:"button","aria-label":"Play next video"},Z:"Play Now"});g.H(this,this.playButton);this.playButton.xa(this.B.element);this.playButton.Ja("click",this.sL,this);this.G.xb(this.playButton.element,this,115130);this.C=new g.L(function(){Z2(c)},
500);
g.H(this,this.C);this.rL();this.P(a,"autonavvisibility",this.rL)},c3=function(a){var b=a.G.Ak(!0,a.G.isFullscreen());
g.O(a.element,"ytp-autonav-endscreen-small-mode",a.fg(b));g.O(a.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.iD);g.O(a.G.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.G.Te());g.O(a.G.getRootNode(),"countdown-running",a.Si());g.O(a.element,"ytp-player-content",a.G.Te());g.wm(a.overlay.element,{width:b.width+"px"});if(!a.Si()){a.G.Te()?a3(a,Math.round(b3(a)/1E3)):a3(a);b=!!a.suggestion&&!!a.suggestion.Lo;var c=a.G.Te()||!b;g.O(a.element,"ytp-autonav-endscreen-upnext-alternative-header-only",
!c&&b);g.O(a.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.IG(a.B,a.G.Te())}},Z2=function(a){var b=b3(a),c=Math,d=c.min;
var e=a.u?Date.now()-a.u:0;c=d.call(c,e,b);a3(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Si()?a.select(!0):a.Si()&&a.C.start()},b3=function(a){if(a.G.isFullscreen()){var b;
a=null==(b=a.G.getVideoData())?void 0:b.Rw;return-1===a||void 0===a?8E3:a}return 0<=a.G.gp()?a.G.gp():g.RA(a.G.S().experiments,"autoplay_time")||1E4},a3=function(a,b){b=void 0===b?-1:b;
a=a.j.ya("ytp-autonav-endscreen-upnext-header");g.Th(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.Sh("Up next in $SECONDS".slice(0,d)));var e=g.Qh("span");g.qp(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Yh(e,b);a.appendChild(e);a.appendChild(g.Sh("Up next in $SECONDS".slice(d+c.length)));return}}g.Yh(a,"Up next")},d3=function(a,b){g.W.call(this,{F:"div",
Ba:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},e3=function(a){g.W.call(this,{F:"div",
Ba:["ytp-upnext","ytp-player-content"],T:{"aria-label":"{{aria_label}}"},R:[{F:"div",K:"ytp-cued-thumbnail-overlay-image",T:{style:"{{background}}"}},{F:"span",K:"ytp-upnext-top",R:[{F:"span",K:"ytp-upnext-header",Z:"Up Next"},{F:"span",K:"ytp-upnext-title",Z:"{{title}}"},{F:"span",K:"ytp-upnext-author",Z:"{{author}}"}]},{F:"a",K:"ytp-upnext-autoplay-icon",T:{role:"button",href:"{{url}}","aria-label":"Play next video"},R:[{F:"svg",T:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},R:[{F:"circle",
K:"ytp-svg-autoplay-circle",T:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{F:"circle",K:"ytp-svg-autoplay-ring",T:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{F:"path",K:"ytp-svg-fill",T:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{F:"span",K:"ytp-upnext-bottom",R:[{F:"span",K:"ytp-upnext-cancel"},{F:"span",K:"ytp-upnext-paused",Z:"Autoplay is paused"}]}]});
this.api=a;this.cancelButton=null;this.D=this.ya("ytp-svg-autoplay-ring");this.B=this.notification=this.j=this.suggestion=null;this.C=new g.L(this.LA,5E3,this);this.u=0;var b=this.ya("ytp-upnext-cancel");this.cancelButton=new g.W({F:"button",Ba:["ytp-upnext-cancel-button","ytp-button"],T:{tabindex:"0","aria-label":"Cancel autoplay"},Z:"Cancel"});g.H(this,this.cancelButton);this.cancelButton.Ja("click",this.hU,this);this.cancelButton.xa(b);this.cancelButton&&this.api.xb(this.cancelButton.element,this,
115129);g.H(this,this.C);this.api.xb(this.element,this,18788);b=this.ya("ytp-upnext-autoplay-icon");this.P(b,"click",this.iU);this.api.xb(b,this,115130);this.tL();this.P(a,"autonavvisibility",this.tL);this.P(a,"mdxnowautoplaying",this.DY);this.P(a,"mdxautoplaycanceled",this.EY);g.O(this.element,"ytp-upnext-mobile",this.api.S().isMobile)},JWa=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.Rw;return-1===a||void 0===a?8E3:a}return 0<=a.api.gp()?a.api.gp():g.RA(a.api.S().experiments,"autoplay_time")||1E4},f3=function(a,b){b=JWa(a,b);
var c=Math,d=c.min;var e=(0,g.R)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Si()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Si()&&a.j.start()},g3=function(a){d3.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.W({F:"div",K:"ytp-suggestion-panel",R:[{F:"div",Ba:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],Z:"More videos"}]});this.J=new g.W({F:"div",K:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.I=!1;this.u=new $2(this.player);g.H(this,this.u);this.u.xa(this.element);a.getVideoData().rd?this.j=this.u:(this.j=new e3(a),g.pJ(this.player,this.j.element,4),g.H(this,this.j));this.overlay=new g.W({F:"div",K:"ytp-autonav-overlay-cancelled-state"});
g.H(this,this.overlay);this.overlay.xa(this.element);this.C=new g.Wz(this);g.H(this,this.C);g.H(this,this.table);this.table.xa(this.element);this.table.show();g.H(this,this.J);this.J.xa(this.table.element);this.hide()},h3=function(a){var b=a.Te();
b!==a.D&&(a.D=b,a.player.X("autonavvisibility"),a.D?(a.u!==a.j&&a.u.hide(),a.table.hide()):(a.u!==a.j&&a.u.show(),a.table.show()))},i3=function(a){d3.call(this,a,"subscribecard-endscreen");
this.j=new g.W({F:"div",K:"ytp-subscribe-card",R:[{F:"img",K:"ytp-author-image",T:{src:"{{profilePicture}}"}},{F:"div",K:"ytp-subscribe-card-right",R:[{F:"div",K:"ytp-author-name",Z:"{{author}}"},{F:"div",K:"html5-subscribe-button-container"}]}]});g.H(this,this.j);this.j.xa(this.element);var b=a.getVideoData();this.subscribeButton=new g.UK("Subscribe",null,"Unsubscribe",null,!0,!1,b.bk,b.subscribed,"trailer-endscreen",null,null,a);g.H(this,this.subscribeButton);this.subscribeButton.xa(this.j.ya("html5-subscribe-button-container"));
this.P(a,"videodatachange",this.Ea);this.Ea();this.hide()},j3=function(a){var b=a.S(),c=g.$z||g.YB?{style:"will-change: opacity"}:void 0,d=b.j,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.W.call(this,{F:"a",Ba:e,T:{href:"{{url}}",target:d?b.J:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},R:[{F:"div",K:"ytp-videowall-still-image",T:{style:"{{background}}"}},{F:"span",K:"ytp-videowall-still-info",R:[{F:"span",K:"ytp-videowall-still-info-bg",R:[{F:"span",K:"ytp-videowall-still-info-content",T:c,R:[{F:"span",K:"ytp-videowall-still-info-title",Z:"{{title}}"},{F:"span",
K:"ytp-videowall-still-info-author",Z:"{{author_and_views}}"},{F:"span",K:"ytp-videowall-still-info-live",Z:"Live"},{F:"span",K:"ytp-videowall-still-info-duration",Z:"{{duration}}"}]}]}]},{F:"span",Ba:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],R:[{F:"span",K:"ytp-videowall-still-listlabel-icon"},"Playlist",{F:"span",K:"ytp-videowall-still-listlabel-length",R:[" (",{F:"span",Z:"{{playlist_length}}"},")"]}]},{F:"span",Ba:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
R:[{F:"span",K:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{F:"span",K:"ytp-videowall-still-listlabel-length",Z:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.j=new g.Wz(this);g.H(this,this.j);this.Ja("click",this.onClick);this.Ja("keypress",this.onKeyPress);this.j.P(a,"videodatachange",this.onVideoDataChange);a.Rh(this.element,this);this.onVideoDataChange()},k3=function(a){d3.call(this,a,"videowall-endscreen");
var b=this;this.G=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.J=!1;this.N=null;this.u=new g.Wz(this);g.H(this,this.u);this.I=new g.L(function(){g.N(b.element,"ytp-show-tiles")},0);
g.H(this,this.I);var c=new g.W({F:"button",Ba:["ytp-button","ytp-endscreen-previous"],T:{"aria-label":"Previous"},R:[g.NG()]});g.H(this,c);c.xa(this.element);c.Ja("click",this.mU,this);this.table=new g.FG({F:"div",K:"ytp-endscreen-content"});g.H(this,this.table);this.table.xa(this.element);c=new g.W({F:"button",Ba:["ytp-button","ytp-endscreen-next"],T:{"aria-label":"Next"},R:[g.OG()]});g.H(this,c);c.xa(this.element);c.Ja("click",this.lU,this);a.getVideoData().rd?this.j=new $2(a,!0):this.j=new e3(a);
g.H(this,this.j);g.pJ(this.player,this.j.element,4);this.hide()},l3=function(a){return g.qJ(a.player)&&a.Zw()&&!a.C},m3=function(a){var b=a.Te();
b!==a.J&&(a.J=b,a.player.X("autonavvisibility"))},n3=function(a){g.OJ.call(this,a);
var b=this;this.endScreen=null;this.j=this.u=this.B=!1;this.listeners=new g.Wz(this);g.H(this,this.listeners);this.env=a.S();KWa(a)?(this.B=!0,LWa(this),this.j?this.endScreen=new g3(a):this.endScreen=new k3(this.player)):this.env.Le?this.endScreen=new i3(this.player):this.endScreen=new d3(this.player);g.H(this,this.endScreen);g.pJ(this.player,this.endScreen.element,4);MWa(this);this.listeners.P(a,"videodatachange",this.onVideoDataChange,this);this.listeners.P(a,g.xw("endscreen"),function(c){b.onCueRangeEnter(c)});
this.listeners.P(a,g.yw("endscreen"),function(c){b.onCueRangeExit(c)})},LWa=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Vh&&a.u===b.rd)return!1;a.j=b.Vh;a.u=b.rd;return!0},KWa=function(a){a=a.S();
return!a.C&&a.Bc&&!a.Le},MWa=function(a){a.player.Kf("endscreen");
var b=a.player.getVideoData();b=new g.vw(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.vw(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.Yd([b,c])};
g.iJ.prototype.gp=g.ca(4,function(){return this.app.gp()});
g.nT.prototype.gp=g.ca(3,function(){return this.getVideoData().QO});g.w(Y2,g.W);Y2.prototype.select=function(){(this.G.jl(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.xx||void 0)||this.G.L("web_player_endscreen_double_log_fix_killswitch"))&&this.G.rb(this.element)};
Y2.prototype.onClick=function(a){g.nK(a,this.G,this.j,this.suggestion.sessionData||void 0)&&this.select()};
Y2.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.ju(a)||(this.select(),g.iu(a))}};g.w($2,g.W);g.h=$2.prototype;g.h.rA=function(a){this.suggestion!==a&&(this.suggestion=a,X2(this.j,a),this.playButton.Ha("url",this.suggestion.Xl()),c3(this))};
g.h.Si=function(){return 0<this.u};
g.h.Jv=function(){this.Si()||(this.u=Date.now(),Z2(this),IWa(this.G,b3(this)),g.O(this.G.getRootNode(),"countdown-running",this.Si()))};
g.h.ls=function(){this.qo();Z2(this);var a=this.j.ya("ytp-autonav-endscreen-upnext-header");a&&g.Yh(a,"Up next")};
g.h.qo=function(){this.Si()&&(this.C.stop(),this.u=0)};
g.h.select=function(a){this.G.nextVideo(!1,void 0===a?!1:a);this.qo()};
g.h.sL=function(a){g.nK(a,this.G)&&(a.currentTarget===this.playButton.element?this.G.rb(this.playButton.element):a.currentTarget===this.j.ya("ytp-autonav-endscreen-link-container")&&(a=this.j.ya("ytp-autonav-endscreen-link-container"),this.G.Ua(a,!0),this.G.rb(a)),this.select())};
g.h.gU=function(){this.G.rb(this.cancelButton.element);g.kJ(this.G,!0);this.D&&this.G.La("innertubeCommand",this.D)};
g.h.onVideoDataChange=function(a,b){var c;this.D=null==(c=b.e1)?void 0:c.command};
g.h.rL=function(){var a=this.G.Te();this.I&&this.ob!==a&&g.IG(this,a);c3(this);this.G.Ua(this.element,a);this.G.Ua(this.cancelButton.element,a);this.G.Ua(this.j.ya("ytp-autonav-endscreen-link-container"),a);this.G.Ua(this.playButton.element,a)};
g.h.fg=function(a){return 400>a.width||459>a.height};g.w(d3,g.W);g.h=d3.prototype;g.h.create=function(){this.created=!0};
g.h.destroy=function(){this.created=!1};
g.h.Zw=function(){return!1};
g.h.Te=function(){return!1};
g.h.tO=function(){return!1};g.w(e3,g.W);g.h=e3.prototype;g.h.LA=function(){this.notification&&(this.C.stop(),this.wc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.h.rA=function(a){this.suggestion=a;X2(this,a,"hqdefault.jpg")};
g.h.tL=function(){g.IG(this,this.api.Te());this.api.Ua(this.element,this.api.Te());this.api.Ua(this.ya("ytp-upnext-autoplay-icon"),this.api.Te());this.cancelButton&&this.api.Ua(this.cancelButton.element,this.api.Te())};
g.h.MY=function(){window.focus();this.LA()};
g.h.Jv=function(a){var b=this;this.Si()||(g.yu("a11y-announce","Up Next "+this.suggestion.title),this.u=(0,g.R)(),this.j=new g.L(function(){f3(b,a)},25),f3(this,a),IWa(this.api,JWa(this,a)));
g.tp(this.element,"ytp-upnext-autoplay-paused")};
g.h.hide=function(){g.W.prototype.hide.call(this)};
g.h.Si=function(){return!!this.j};
g.h.ls=function(){this.qo();this.u=(0,g.R)();f3(this);g.N(this.element,"ytp-upnext-autoplay-paused")};
g.h.qo=function(){this.Si()&&(this.j.dispose(),this.j=null)};
g.h.select=function(a){a=void 0===a?!1:a;if(this.api.S().L("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.LA(),this.notification=new Notification("Up Next",{body:this.suggestion.title,icon:this.suggestion.wf()}),this.B=this.P(this.notification,"click",this.MY),this.C.start())}this.qo();this.api.nextVideo(!1,a)};
g.h.iU=function(a){!g.Xh(this.cancelButton.element,g.eu(a))&&g.nK(a,this.api)&&(this.api.Te()&&this.api.rb(this.ya("ytp-upnext-autoplay-icon")),this.select())};
g.h.hU=function(){this.api.Te()&&this.cancelButton&&this.api.rb(this.cancelButton.element);g.kJ(this.api,!0)};
g.h.DY=function(a){this.api.getPresentingPlayerType();this.show();this.Jv(a)};
g.h.EY=function(){this.api.getPresentingPlayerType();this.qo();this.hide()};
g.h.ea=function(){this.qo();this.LA();g.W.prototype.ea.call(this)};g.w(g3,d3);g.h=g3.prototype;g.h.create=function(){d3.prototype.create.call(this);this.C.P(this.player,"appresize",this.Hw);this.C.P(this.player,"onVideoAreaChange",this.Hw);this.C.P(this.player,"videodatachange",this.onVideoDataChange);this.C.P(this.player,"autonavchange",this.uL);this.C.P(this.player,"autonavcancel",this.jU);this.onVideoDataChange()};
g.h.show=function(){d3.prototype.show.call(this);(this.I||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.kJ(this.player,!1);g.qJ(this.player)&&this.Zw()&&!this.B?(h3(this),2===this.videoData.autonavState?this.player.S().L("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Jv():3===this.videoData.autonavState&&this.j.ls()):(g.kJ(this.player,!0),h3(this));this.Hw()};
g.h.hide=function(){d3.prototype.hide.call(this);this.j.ls();h3(this)};
g.h.Hw=function(){var a=this.player.Ak(!0,this.player.isFullscreen());h3(this);c3(this.u);g.O(this.element,"ytp-autonav-cancelled-small-mode",this.fg(a));g.O(this.element,"ytp-autonav-cancelled-tiny-mode",this.SB(a));g.O(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.wm(this.overlay.element,{width:a.width+"px"});if(!this.D){a=g.r(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.r(b.value);b=c.next().value;c=c.next().value;g.O(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.h.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){this.j.rA(a[0]);this.j!==this.u&&this.u.rA(a[0]);for(var b=0;b<NWa.length;++b){var c=NWa[b];if(a&&a[c]){this.videos[b]=new Y2(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,X2(d,c));g.H(this,this.videos[b]);this.videos[b].xa(this.J.element)}}}this.Hw()}};
g.h.uL=function(a){1===a?(this.I=!1,this.B=this.videoData.clientPlaybackNonce,this.j.qo(),this.ob&&this.Hw()):(this.I=!0,this.Te()&&(2===a?this.j.Jv():3===a&&this.j.ls()))};
g.h.jU=function(a){a?this.uL(1):(this.B=null,this.I=!1)};
g.h.Zw=function(){return 1!==this.videoData.autonavState};
g.h.fg=function(a){return(910>a.width||459>a.height)&&!this.SB(a)&&!(400>=a.width||360>=a.height)};
g.h.SB=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.h.Te=function(){return this.ob&&g.qJ(this.player)&&this.Zw()&&!this.B};
var NWa=[1,3,2,4];g.w(i3,d3);i3.prototype.Ea=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.bk;var b=this.subscribeButton;a.subscribed?b.u():b.B()};g.w(j3,g.W);j3.prototype.select=function(){(this.api.jl(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.xx||void 0)||this.api.L("web_player_endscreen_double_log_fix_killswitch"))&&this.api.rb(this.element)};
j3.prototype.onClick=function(a){g.nK(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
j3.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.ju(a)||(this.select(),g.iu(a))}};
j3.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.S();this.u=a.D?!1:b.j};g.w(k3,d3);g.h=k3.prototype;g.h.create=function(){d3.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Nm();this.u.P(this.player,"appresize",this.Nm);this.u.P(this.player,"onVideoAreaChange",this.Nm);this.u.P(this.player,"videodatachange",this.onVideoDataChange);this.u.P(this.player,"autonavchange",this.zE);this.u.P(this.player,"autonavcancel",this.kU);a=this.videoData.autonavState;a!==this.N&&this.zE(a);this.u.P(this.element,"transitionend",this.a_)};
g.h.destroy=function(){g.Wu(this.u);g.pf(this.stills);this.stills=[];d3.prototype.destroy.call(this);g.tp(this.element,"ytp-show-tiles");this.I.stop();this.N=this.videoData.autonavState};
g.h.Zw=function(){return 1!==this.videoData.autonavState};
g.h.show=function(){d3.prototype.show.call(this);g.tp(this.element,"ytp-show-tiles");this.player.S().isMobile?g.mp(this.I):this.I.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.kJ(this.player,!1);l3(this)?(m3(this),2===this.videoData.autonavState?this.player.S().L("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Jv():3===this.videoData.autonavState&&this.j.ls()):(g.kJ(this.player,!0),m3(this))};
g.h.hide=function(){d3.prototype.hide.call(this);this.j.ls();m3(this)};
g.h.a_=function(a){g.eu(a)===this.element&&this.Nm()};
g.h.Nm=function(){if(this.videoData&&this.videoData.suggestions&&this.videoData.suggestions.length){g.N(this.element,"ytp-endscreen-paginate");var a=this.G.Ak(!0,this.G.isFullscreen()),b=g.fJ(this.G);b&&(b=b.Ff()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.videoData.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var p=b/2,q=e/2,t=b<=f-2&&n>=q*m,v=e<=k-2&&n>=p*m;if((p+
1)/q*d/c>c/(p/(q+1)*d)&&v)n-=p*m,e+=2;else if(t)n-=q*m,b+=2;else if(v)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Gm(a,m,n);g.wm(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.j.rA(this.videoData.suggestions[0]);this.j instanceof $2&&c3(this.j);g.O(this.element,"ytp-endscreen-takeover",l3(this));m3(this);m+=4;n+=4;for(f=
c=0;f<b;f++)for(k=0;k<e;k++)if(q=c,p=0,d&&f>=b-2&&k>=e-2?p=1:0===k%2&&0===f%2&&(2>k&&2>f?0===k&&0===f&&(p=2):p=2),q=g.rh(q+this.B,l),0!==p){t=this.stills[c];t||(t=new j3(this.player),this.stills[c]=t,a.appendChild(t.element));v=Math.floor(n*k/e);var x=Math.floor(m*f/b),y=Math.floor(n*(k+p)/e)-v-4,z=Math.floor(m*(f+p)/b)-x-4;g.Cm(t.element,x,v);g.Gm(t.element,z,y);g.wm(t.element,"transitionDelay",(k+f)/20+"s");g.O(t.element,"ytp-videowall-still-mini",1===p);g.O(t.element,"ytp-videowall-still-large",
2<p);p=t;q=this.videoData.suggestions[q];p.suggestion!==q&&(p.suggestion=q,t=p.api.S(),v=g.rp(p.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",X2(p,q,v),g.$B(t)&&(v=q.Xl(),x={},t.oa&&g.BI(x,t.loaderUrl),v=g.Vi(v,g.AI(x,"emb_rel_end")),p.Ha("url",v)),(q=(q=q.sessionData)&&q.itct)&&p.api.Wk(p.element,q));c++}g.O(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.Vh(e.element),g.of(e);this.stills.length=c}};
g.h.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.Nm())};
g.h.lU=function(){this.B+=this.stills.length;this.Nm()};
g.h.mU=function(){this.B-=this.stills.length;this.Nm()};
g.h.tO=function(){return this.j.Si()};
g.h.zE=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.j.qo(),this.ob&&this.Nm()):(this.D=!0,this.ob&&l3(this)&&(2===a?this.j.Jv():3===a&&this.j.ls()))};
g.h.kU=function(a){if(a){for(a=0;a<this.stills.length;a++)this.G.Ua(this.stills[a].element,!0);this.zE(1)}else this.C=null,this.D=!1;this.Nm()};
g.h.Te=function(){return this.ob&&l3(this)};g.w(n3,g.OJ);g.h=n3.prototype;g.h.Hs=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!KWa(this.player)||b;var c=a.lf||g.kC(a.B),d=this.player.Ex();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.h.Te=function(){return this.endScreen.Te()};
g.h.EW=function(){return this.Te()?this.endScreen.tO():!1};
g.h.ea=function(){this.player.Kf("endscreen");g.OJ.prototype.ea.call(this)};
g.h.load=function(){var a=this.player.getVideoData();var b=a.HO;if(b&&b.videoId){var c=this.player.jb().Wd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].videoId&&!a.HL?a=!1:(this.player.jl(b.videoId,void 0,void 0,!0,!0,b),c&&c.aC("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.OJ.prototype.load.call(this),this.endScreen.show())};
g.h.unload=function(){g.OJ.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.h.onCueRangeEnter=function(a){this.Hs()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.h.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.h.onVideoDataChange=function(){MWa(this);this.B&&LWa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new g3(this.player):this.endScreen=new k3(this.player),g.H(this,this.endScreen),g.pJ(this.player,this.endScreen.element,4))};g.CJ("endscreen",n3);})(_yt_player);