function Controller() {
    function __alloyId126(e) {
        if (e && e.fromAdapter) return;
        __alloyId126.opts || {};
        var models = __alloyId125.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId122 = models[i];
            __alloyId122.__transform = {};
            var __alloyId124 = Ti.UI.createTableViewRow({
                color: "#FFFFFF",
                font: {
                    fontSize: "24"
                },
                height: "40",
                title: "undefined" != typeof __alloyId122.__transform["title"] ? __alloyId122.__transform["title"] : __alloyId122.get("title"),
                division: "undefined" != typeof __alloyId122.__transform["division"] ? __alloyId122.__transform["division"] : __alloyId122.get("division"),
                year: "undefined" != typeof __alloyId122.__transform["year"] ? __alloyId122.__transform["year"] : __alloyId122.get("year"),
                groups: "undefined" != typeof __alloyId122.__transform["groups"] ? __alloyId122.__transform["groups"] : __alloyId122.get("groups"),
                provice: "undefined" != typeof __alloyId122.__transform["provice"] ? __alloyId122.__transform["provice"] : __alloyId122.get("provice"),
                type: "undefined" != typeof __alloyId122.__transform["type"] ? __alloyId122.__transform["type"] : __alloyId122.get("type"),
                kind: "undefined" != typeof __alloyId122.__transform["kind"] ? __alloyId122.__transform["kind"] : __alloyId122.get("kind"),
                observe: "undefined" != typeof __alloyId122.__transform["observe"] ? __alloyId122.__transform["observe"] : __alloyId122.get("observe")
            });
            rows.push(__alloyId124);
            showAmulet ? __alloyId124.addEventListener("click", showAmulet) : __defers["__alloyId124!click!showAmulet"] = true;
        }
        $.__views.__alloyId121.setData(rows);
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
    function search() {
        var mysearchAmulet = Alloy.createController("search", {}).getView();
        mysearchAmulet.open();
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
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: false,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "true",
        height: "100%",
        width: "100%"
    });
    $.__views.index.add($.__views.scrollView);
    $.__views.__alloyId117 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId117"
    });
    $.__views.scrollView.add($.__views.__alloyId117);
    $.__views.header = Ti.UI.createView({
        top: Alloy.Globals.top,
        height: "40",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#000000",
                offset: 0
            }, {
                color: "#000000",
                offset: 1
            } ]
        },
        id: "header",
        layout: "horizental"
    });
    $.__views.__alloyId117.add($.__views.header);
    $.__views.addView1 = Ti.UI.createView({
        top: 0,
        bottom: 0,
        left: 10,
        width: "30dp",
        id: "addView1"
    });
    $.__views.header.add($.__views.addView1);
    $.__views.addImage1 = Ti.UI.createImageView({
        height: 30,
        width: 30,
        color: "#FFFFFF",
        backgroundColor: "#000000",
        image: "/m3.png",
        touchEnabled: false,
        id: "addImage1"
    });
    $.__views.addView1.add($.__views.addImage1);
    $.__views.__alloyId118 = Ti.UI.createView({
        height: "35dp",
        width: "3dp",
        top: "1dp",
        left: "45dp",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "100%",
                y: "0%"
            },
            colors: [ {
                color: "#000000",
                offset: 0
            }, {
                color: "#000000",
                offset: .5
            }, {
                color: "#000000",
                offset: 1
            } ]
        },
        id: "__alloyId118"
    });
    $.__views.header.add($.__views.__alloyId118);
    $.__views.addamulettext = Ti.UI.createView({
        top: 0,
        bottom: 0,
        left: 20,
        width: "200dp",
        id: "addamulettext"
    });
    $.__views.header.add($.__views.addamulettext);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: "30dp",
        color: "#FFFFFF",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "กูรูพระเครื่อง",
        id: "title"
    });
    $.__views.addamulettext.add($.__views.title);
    $.__views.__alloyId119 = Ti.UI.createView({
        height: "35dp",
        width: "3dp",
        top: "1dp",
        right: "80dp",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "100%",
                y: "0%"
            },
            colors: [ {
                color: "#000000",
                offset: 0
            }, {
                color: "#000000",
                offset: .5
            }, {
                color: "#000000",
                offset: 1
            } ]
        },
        id: "__alloyId119"
    });
    $.__views.header.add($.__views.__alloyId119);
    $.__views.addView2 = Ti.UI.createView({
        top: 0,
        bottom: 0,
        right: 45,
        width: "30dp",
        id: "addView2"
    });
    $.__views.header.add($.__views.addView2);
    search ? $.__views.addView2.addEventListener("click", search) : __defers["$.__views.addView2!click!search"] = true;
    $.__views.addImage2 = Ti.UI.createImageView({
        height: 30,
        width: 30,
        color: "#FFFFFF",
        backgroundColor: "#000000",
        image: "/s4.png",
        touchEnabled: false,
        id: "addImage2"
    });
    $.__views.addView2.add($.__views.addImage2);
    $.__views.__alloyId120 = Ti.UI.createView({
        height: "35dp",
        width: "3dp",
        top: "1dp",
        right: "40dp",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "100%",
                y: "0%"
            },
            colors: [ {
                color: "#000000",
                offset: 0
            }, {
                color: "#000000",
                offset: .5
            }, {
                color: "#000000",
                offset: 1
            } ]
        },
        id: "__alloyId120"
    });
    $.__views.header.add($.__views.__alloyId120);
    $.__views.addView = Ti.UI.createView({
        top: 0,
        bottom: 0,
        right: 10,
        width: "30dp",
        id: "addView"
    });
    $.__views.header.add($.__views.addView);
    addAmulet ? $.__views.addView.addEventListener("click", addAmulet) : __defers["$.__views.addView!click!addAmulet"] = true;
    $.__views.addImage = Ti.UI.createImageView({
        height: 30,
        width: 30,
        color: "#FFFFFF",
        backgroundColor: "#000000",
        image: "/b9.png",
        touchEnabled: false,
        id: "addImage"
    });
    $.__views.addView.add($.__views.addImage);
    $.__views.__alloyId121 = Ti.UI.createTableView({
        id: "__alloyId121"
    });
    $.__views.__alloyId117.add($.__views.__alloyId121);
    var __alloyId125 = Alloy.Collections["amulet"] || amulet;
    __alloyId125.on("fetch destroy change add remove reset", __alloyId126);
    exports.destroy = function() {
        __alloyId125.off("fetch destroy change add remove reset", __alloyId126);
    };
    _.extend($, $.__views);
    var myAmulet = Alloy.Collections.amulet;
    var amulets = Alloy.createModel("amulet", {
        title: "เหรียญหลวงปู่กินรี จันทิโย",
        division: "หลวงปู่กินรี ",
        year: "2519 ",
        groups: "อีสาน ",
        provice: "นครพนม ",
        type: "เหรียญ ",
        kind: "เนื้อนวโลหะ ",
        observe: "ลักษณะเหรียญเป็นรูปทรงคล้ายใบโพธิ์ มีหู ด้านหน้าเหรียญ"
    });
    myAmulet.add(amulets);
    amulets.save();
    $.index.open();
    $.index.open();
    __defers["$.__views.addView2!click!search"] && $.__views.addView2.addEventListener("click", search);
    __defers["$.__views.addView!click!addAmulet"] && $.__views.addView.addEventListener("click", addAmulet);
    __defers["__alloyId124!click!showAmulet"] && __alloyId124.addEventListener("click", showAmulet);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;