exports.definition = {
	config: {
		columns: {
		    "division" : "string",
		    "year" : "int",
		    "groups" : "string",
		    "provice" : "string",
		    "type" : "string",
		    "kind" : "string",
		    "observe" : "string",
		    "coverpic": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "amulet"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};