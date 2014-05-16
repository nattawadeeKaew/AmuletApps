function Controller() {
    function closeWindow() {
        $.addwin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "search";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addwin = Ti.UI.createWindow({
        backgroundColor: "black",
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: false,
        height: "100%",
        width: "100%",
        id: "addwin"
    });
    $.__views.addwin && $.addTopLevelView($.__views.addwin);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "true",
        height: "100%",
        width: "100%"
    });
    $.__views.addwin.add($.__views.scrollView);
    $.__views.__alloyId127 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId127"
    });
    $.__views.scrollView.add($.__views.__alloyId127);
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
    $.__views.__alloyId127.add($.__views.header);
    $.__views.search_back = Ti.UI.createView({
        top: 0,
        bottom: 0,
        left: 10,
        width: "30dp",
        id: "search_back"
    });
    $.__views.header.add($.__views.search_back);
    closeWindow ? $.__views.search_back.addEventListener("click", closeWindow) : __defers["$.__views.search_back!click!closeWindow"] = true;
    $.__views.addImage1 = Ti.UI.createImageView({
        height: 30,
        width: 30,
        color: "#FFFFFF",
        backgroundColor: "#000000",
        image: "/b4.png",
        touchEnabled: false,
        id: "addImage1"
    });
    $.__views.search_back.add($.__views.addImage1);
    $.__views.__alloyId128 = Ti.UI.createView({
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
        id: "__alloyId128"
    });
    $.__views.header.add($.__views.__alloyId128);
    $.__views.searchText = Ti.UI.createView({
        height: 30,
        width: 200,
        color: "#FFFFFF",
        backgroundColor: "#000000",
        image: "/b3.png",
        touchEnabled: false,
        id: "searchText"
    });
    $.__views.header.add($.__views.searchText);
    $.__views.searchInput = Ti.UI.createTextField({
        width: "200",
        color: "#FFFFFF",
        font: {
            fontSize: "15"
        },
        id: "searchInput"
    });
    $.__views.searchText.add($.__views.searchInput);
    $.__views.__alloyId129 = Ti.UI.createView({
        height: "35dp",
        width: "3dp",
        top: "1dp",
        right: "50dp",
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
        id: "__alloyId129"
    });
    $.__views.header.add($.__views.__alloyId129);
    $.__views.search = Ti.UI.createView({
        top: 0,
        bottom: 0,
        right: 10,
        width: "30dp",
        id: "search"
    });
    $.__views.header.add($.__views.search);
    $.__views.addImage = Ti.UI.createImageView({
        height: 30,
        width: 30,
        color: "#FFFFFF",
        backgroundColor: "#000000",
        image: "/s4.png",
        touchEnabled: false,
        id: "addImage"
    });
    $.__views.search.add($.__views.addImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Alloy.Collections.amulet;
    __defers["$.__views.search_back!click!closeWindow"] && $.__views.search_back.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;