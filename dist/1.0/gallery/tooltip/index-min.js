KISSY.add("brix/gallery/tooltip/index",function(t,e,n){function r(t){var e=this;t.el&&(e.set("trigger",t.el),delete t.el),r.superclass.constructor.apply(this,arguments)}return r.ATTRS={trigger:{value:!1},triggerType:{value:"mouse"},mouseDelay:{value:1},toggle:{value:!1},width:{value:200},align:{setter:function(t){return t.offset||("tl"==t.points[0]&&"bl"==t.points[1]||"tr"==t.points[0]&&"br"==t.points[1]?t.offset=[0,-8]:"bl"==t.points[0]&&"tl"==t.points[1]||"br"==t.points[0]&&"tr"==t.points[1]?t.offset=[0,8]:"tr"==t.points[0]&&"tl"==t.points[1]||"br"==t.points[0]&&"bl"==t.points[1]?t.offset=[8,0]:("tl"==t.points[0]&&"tr"==t.points[1]||"bl"==t.points[0]&&"br"==t.points[1])&&(t.offset=[-8,0])),t},getter:function(t){return t||(t={node:!1,points:["bl","tl"],offset:[0,0]}),t}},content:{setter:function(t){var e=this,n=t||"",r=e.get("align")||{};return r.points||(r.points=["br","tl"]),n='<div class="arrow arrow-'+r.points[0]+"-"+r.points[1]+'"><div></div></div><div class="tooltip-bd">'+n+"</div>"}},elCls:{value:"tooltip"},prefixCls:{value:"tooltip-"},closable:{value:!0},mask:{value:!1},tmpl:{value:null},data:{}},t.extend(r,n,{initializer:function(){var n=this,r=n.get("align"),i=n.get("trigger");if(!r.node&&i&&(r.node=i,n.set("align",r)),n.on("hide",function(){n._clearHiddenTimer()}),i){var a=n.get("triggerType"),o="click";"mouse"==a?(o="mouseenter",t.all(i).on("mouseenter",function(t){t.preventDefault(),n._clearHiddenTimer(),n.show()})):n.get("toggle")?t.all(i).on(o,function(t){t.preventDefault(),n.toggle()}):t.all(i).on(o,function(t){t.preventDefault(),n.show()}),t.all(i).on("mouseleave",function(t){t.preventDefault(),n._setHiddenTimer()})}n.on("afterRenderUI",function(){n.get("el").on("mouseleave",n._setHiddenTimer,n).on("mouseenter",n._clearHiddenTimer,n);var t=n.get("el").one(".tooltip-ext-close");if(t.one(".tooltip-ext-close-x").html("&#223"),n.get("tmpl")){var r=n.get("contentEl");n.get("content")&&(r=r.one(".tooltip-bd")),n.pagelet=new e({container:r,tmpl:n.get("tmpl"),data:n.get("data")})}})},destructor:function(){var t=this;t.pagelet&&(t.pagelet.destroy(),t.pagelet=null)},toggle:function(){var e=this,n=e.get("el");n&&!t.isString(n)?"hidden"==n.css("visibility")?e.show():e.hide():e.show()},_setHiddenTimer:function(){var e=this,n=e.get("mouseDelay");n&&(e._clearHiddenTimer(),e._hiddenTimer=t.later(function(){e.hide()},1e3*e.get("mouseDelay")))},_clearHiddenTimer:function(){var t=this;t._hiddenTimer&&(t._hiddenTimer.cancel(),t._hiddenTimer=void 0)}}),r},{requires:["brix/core/pagelet","overlay"]});