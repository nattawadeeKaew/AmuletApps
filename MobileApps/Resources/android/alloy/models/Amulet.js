exports.definition = {
    config: {
        columns: {
            division: "string",
            year: "int",
            groups: "string",
            provice: "string",
            type: "string",
            kind: "string",
            observe: "string",
            coverpic: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "amulet"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("amulet", exports.definition, []);

collection = Alloy.C("amulet", exports.definition, model);

exports.Model = model;

exports.Collection = collection;