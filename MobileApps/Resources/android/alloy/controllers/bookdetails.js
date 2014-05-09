function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "bookdetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.bookdetails = Ti.UI.createWindow({
        backgroundColor: "black",
        id: "bookdetails"
    });
    $.__views.bookdetails && $.addTopLevelView($.__views.bookdetails);
    $.__views.__alloyId103 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId103"
    });
    $.__views.bookdetails.add($.__views.__alloyId103);
    $.__views.titleLabel = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: "20"
        },
        left: "10",
        id: "titleLabel"
    });
    $.__views.__alloyId103.add($.__views.titleLabel);
    $.__views.divisionLabel = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: "20"
        },
        left: "10",
        id: "divisionLabel"
    });
    $.__views.__alloyId103.add($.__views.divisionLabel);
    $.__views.yearLabel = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: "20"
        },
        left: "10",
        id: "yearLabel"
    });
    $.__views.__alloyId103.add($.__views.yearLabel);
    $.__views.groupLabel = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: "20"
        },
        left: "10",
        id: "groupLabel"
    });
    $.__views.__alloyId103.add($.__views.groupLabel);
    $.__views.proviceLabel = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: "20"
        },
        left: "10",
        id: "proviceLabel"
    });
    $.__views.__alloyId103.add($.__views.proviceLabel);
    $.__views.typeLabel = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: "20"
        },
        left: "10",
        id: "typeLabel"
    });
    $.__views.__alloyId103.add($.__views.typeLabel);
    $.__views.kindLabel = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: "20"
        },
        left: "10",
        id: "kindLabel"
    });
    $.__views.__alloyId103.add($.__views.kindLabel);
    $.__views.observeLabel = Ti.UI.createLabel({
        color: "#FFFFFF",
        font: {
            fontSize: "20"
        },
        left: "10",
        id: "observeLabel"
    });
    $.__views.__alloyId103.add($.__views.observeLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.titleLabel.text = args.title || "Default Title";
    $.divisionLabel.text = args.division || "Default division";
    $.yearLabel.text = args.year || "Default year";
    $.groupLabel.text = args.groups || "Default group";
    $.proviceLabel.text = args.provice || "Default provice";
    $.typeLabel.text = args.type || "Default type";
    $.kindLabel.text = args.kind || "Default kind";
    $.observeLabel.text = args.observe || "Default observe";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;