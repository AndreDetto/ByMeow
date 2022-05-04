(function(g){var window=this;'use strict';var P3=function(a){g.W.call(this,{F:"div",K:"ytp-miniplayer-ui"});this.Se=!1;this.player=a;this.P(a,"minimized",this.Yg);this.P(a,"onStateChange",this.nJ)},Q3=function(a){g.OJ.call(this,a);
this.j=new P3(this.player);this.j.hide();g.pJ(this.player,this.j.element,4);a.xf()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(P3,g.W);g.h=P3.prototype;
g.h.SG=function(){this.tooltip=new g.MN(this.player,this);g.H(this,this.tooltip);g.pJ(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Dc=new g.KK(this.player);g.H(this,this.Dc);this.Ch=new g.W({F:"div",K:"ytp-miniplayer-scrim"});g.H(this,this.Ch);this.Ch.xa(this.element);this.P(this.Ch.element,"click",this.uC);var a=new g.W({F:"button",Ba:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"Close"},R:[g.PG()]});g.H(this,a);a.xa(this.Ch.element);this.P(a.element,"click",this.Hj);
a=new g.YZ(this.player,this);g.H(this,a);a.xa(this.Ch.element);this.Zq=new g.W({F:"div",K:"ytp-miniplayer-controls"});g.H(this,this.Zq);this.Zq.xa(this.Ch.element);this.P(this.Zq.element,"click",this.uC);var b=new g.W({F:"div",K:"ytp-miniplayer-button-container"});g.H(this,b);b.xa(this.Zq.element);a=new g.W({F:"div",K:"ytp-miniplayer-play-button-container"});g.H(this,a);a.xa(this.Zq.element);var c=new g.W({F:"div",K:"ytp-miniplayer-button-container"});g.H(this,c);c.xa(this.Zq.element);this.nQ=new g.kM(this.player,
this,!1);g.H(this,this.nQ);this.nQ.xa(b.element);b=new g.iM(this.player,this);g.H(this,b);b.xa(a.element);this.nextButton=new g.kM(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.xa(c.element);this.Fh=new g.yN(this.player,this);g.H(this,this.Fh);this.Fh.xa(this.Ch.element);this.vc=new g.uM(this.player,this);g.H(this,this.vc);g.pJ(this.player,this.vc.element,4);this.jC=new g.W({F:"div",K:"ytp-miniplayer-buttons"});g.H(this,this.jC);g.pJ(this.player,this.jC.element,4);a=new g.W({F:"button",
Ba:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"Close"},R:[g.PG()]});g.H(this,a);a.xa(this.jC.element);this.P(a.element,"click",this.Hj);a=new g.W({F:"button",Ba:["ytp-miniplayer-replay-button","ytp-button"],T:{"aria-label":"Close"},R:[g.VG()]});g.H(this,a);a.xa(this.jC.element);this.P(a.element,"click",this.oZ);this.P(this.player,"presentingplayerstatechange",this.Xc);this.P(this.player,"appresize",this.ub);this.P(this.player,"fullscreentoggled",this.ub);this.ub()};
g.h.show=function(){this.ue=new g.jp(this.Xr,null,this);this.ue.start();this.Se||(this.SG(),this.Se=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.vc.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.ue&&(this.ue.dispose(),this.ue=void 0);g.W.prototype.hide.call(this);this.player.xf()||(this.Se&&this.vc.hide(),this.player.loadModule("annotations_module"))};
g.h.ea=function(){this.ue&&(this.ue.dispose(),this.ue=void 0);g.W.prototype.ea.call(this)};
g.h.Hj=function(){this.player.stopVideo();this.player.La("onCloseMiniplayer")};
g.h.oZ=function(){this.player.playVideo()};
g.h.uC=function(a){if(a.target===this.Ch.element||a.target===this.Zq.element)this.player.S().L("kevlar_miniplayer_play_pause_on_scrim")?g.RF(this.player.vb())?this.player.pauseVideo():this.player.playVideo():this.player.La("onExpandMiniplayer")};
g.h.Yg=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.xf())};
g.h.Sd=function(){this.vc.Qb();this.Fh.Qb()};
g.h.Xr=function(){this.Sd();this.ue&&this.ue.start()};
g.h.Xc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.h.ub=function(){g.KM(this.vc,0,this.player.Va().getPlayerSize().width,!1);g.xM(this.vc)};
g.h.nJ=function(a){this.player.xf()&&(0===a?this.hide():this.show())};
g.h.kc=function(){return this.tooltip};
g.h.Ff=function(){return!1};
g.h.fg=function(){return!1};
g.h.yj=function(){return!1};
g.h.sz=function(){};
g.h.Wo=function(){};
g.h.nu=function(){};
g.h.wp=function(){return null};
g.h.Rx=function(){return null};
g.h.Ak=function(){return new g.tm(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.us=function(a,b,c,d,e){var f=0,k=d=0,l=g.Hm(a);if(b){c=g.rp(b,"ytp-prev-button")||g.rp(b,"ytp-next-button");var m=g.rp(b,"ytp-play-button"),n=g.rp(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Fm(b,this.element),k=b.x,f=b.y-12):n&&(k=g.rp(b,"ytp-miniplayer-button-top-left"),f=g.Fm(b,this.element),b=g.Hm(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=this.player.Va().getPlayerSize().width;e=f+(e||0);l=g.qh(k,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Dm=function(){};
g.h.Rl=function(){return!1};g.w(Q3,g.OJ);Q3.prototype.create=function(){};
Q3.prototype.Zi=function(){return!1};
Q3.prototype.load=function(){this.player.hideControls();this.j.show()};
Q3.prototype.unload=function(){this.player.showControls();this.j.hide()};g.CJ("miniplayer",Q3);})(_yt_player);
