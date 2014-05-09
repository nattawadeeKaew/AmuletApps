function Controller() {
    function __alloyId120(e) {
        if (e && e.fromAdapter) return;
        __alloyId120.opts || {};
        var models = __alloyId119.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId116 = models[i];
            __alloyId116.__transform = {};
            var __alloyId118 = Ti.UI.createTableViewRow({
                color: "#FFFFFF",
                font: {
                    fontSize: "24"
                },
                height: "40",
                title: "undefined" != typeof __alloyId116.__transform["title"] ? __alloyId116.__transform["title"] : __alloyId116.get("title"),
                division: "undefined" != typeof __alloyId116.__transform["division"] ? __alloyId116.__transform["division"] : __alloyId116.get("division"),
                year: "undefined" != typeof __alloyId116.__transform["year"] ? __alloyId116.__transform["year"] : __alloyId116.get("year"),
                groups: "undefined" != typeof __alloyId116.__transform["groups"] ? __alloyId116.__transform["groups"] : __alloyId116.get("groups"),
                provice: "undefined" != typeof __alloyId116.__transform["provice"] ? __alloyId116.__transform["provice"] : __alloyId116.get("provice"),
                type: "undefined" != typeof __alloyId116.__transform["type"] ? __alloyId116.__transform["type"] : __alloyId116.get("type"),
                kind: "undefined" != typeof __alloyId116.__transform["kind"] ? __alloyId116.__transform["kind"] : __alloyId116.get("kind"),
                observe: "undefined" != typeof __alloyId116.__transform["observe"] ? __alloyId116.__transform["observe"] : __alloyId116.get("observe")
            });
            rows.push(__alloyId118);
            showAmulet ? __alloyId118.addEventListener("click", showAmulet) : __defers["__alloyId118!click!showAmulet"] = true;
        }
        $.__views.__alloyId115.setData(rows);
    }
    function __alloyId123() {
        $.__views.index.removeEventListener("open", __alloyId123);
        if ($.__views.index.activity) $.__views.index.activity.onCreateOptionsMenu = function(e) {
            var __alloyId122 = {
                title: "เพิ่มพระ",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM,
                id: "__alloyId121"
            };
            $.__views.__alloyId121 = e.menu.add(_.pick(__alloyId122, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId121.applyProperties(_.omit(__alloyId122, Alloy.Android.menuItemCreateArgs));
            addAmulet ? $.__views.__alloyId121.addEventListener("click", addAmulet) : __defers["$.__views.__alloyId121!click!addAmulet"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function showAmulet(event) {
        var selectedAmulet = event.source;
        var args = {
            title: selectedAmulet.title,
            division: selectedAmulet.division,
            year: selectedAmulet.year,
            groups: selectedAmulet.groups,
            provice: selectedAmulet.provice,
            type: selectedAmulet.type,
            kind: selectedAmulet.kind,
            observe: selectedAmulet.observe
        };
        var amuletview = Alloy.createController("amuletdetails", args).getView();
        amuletview.open();
    }
    function addAmulet() {
        var myaddAmulet = Alloy.createController("addamulet", {}).getView();
        myaddAmulet.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("amulet");
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "black",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId115 = Ti.UI.createTableView({
        id: "__alloyId115"
    });
    $.__views.index.add($.__views.__alloyId115);
    var __alloyId119 = Alloy.Collections["amulet"] || amulet;
    __alloyId119.on("fetch destroy change add remove reset", __alloyId120);
    $.__views.index.addEventListener("open", __alloyId123);
    exports.destroy = function() {
        __alloyId119.off("fetch destroy change add remove reset", __alloyId120);
    };
    _.extend($, $.__views);
    var myAmulet = Alloy.Collections.amulet;
    var amulets = Alloy.createModel("amulet", {
        title: "พระผง",
        division: "รุ่น 2",
        year: "c",
        groups: "a",
        provice: "b",
        type: "d",
        kind: "e",
        observe: "f"
    });
    myAmulet.add(amulets);
    amulets.save();
    $.index.open();
    __defers["__alloyId118!click!showAmulet"] && __alloyId118.addEventListener("click", showAmulet);
    __defers["$.__views.__alloyId121!click!addAmulet"] && $.__views.__alloyId121.addEventListener("click", addAmulet);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;