KISSY.add("brix/gallery/breadcrumbs/index",function(a,b){function c(){c.superclass.constructor.apply(this,arguments)}return c.ATTRS={},c.ATTACH={".dropdown":{mouseenter:function(b){a.one(b.currentTarget).addClass("dropdownfocus")},mouseleave:function(b){!this.__show&&a.one(b.currentTarget).one(".dropdown-list").css("display")=="none"&&a.one(b.currentTarget).removeClass("dropdownfocus")},click:function(b){this.__show=!0,a.one(b.currentTarget).addClass("dropdownfocus")}}},c.DOCATTACH={"":{click:function(a){this.__show||this.get("el").all(".dropdown").removeClass("dropdownfocus"),this.__show=!1}}},a.extend(c,b,{}),c},{requires:["brix/core/brick"]});