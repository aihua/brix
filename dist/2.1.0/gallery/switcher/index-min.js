KISSY.add("brix/gallery/switcher/index",function(e,t){var i=t.extend({bindUI:function(){var e=this;e.get("switchOn")?e._switchTo(!0):e._switchTo(!1)},_switchTo:function(e){var t=this,a=t.get("el");e?(a.addClass("switcher-on"),t.get("switchStatus")||a.addClass("switcher-no-status")):(a.removeClass("switcher-on"),t.get("switchStatus")||a.removeClass("switcher-no-status")),data={value:a.hasClass("switcher-on")},t.fire(i.FIRES.switched,data)}});return i.ATTRS={switchOn:{value:!1},switchStatus:{value:!0}},i.METHODS={switchTo:function(e){var t=this;t._switchTo(e)}},i.FIRES={switched:"switched"},i.EVENTS={"":{click:function(){var e=this.get("el");this._switchTo(!e.hasClass("switcher-on"))}}},e.augment(i,i.METHODS),i},{requires:["brix/core/brick"]});