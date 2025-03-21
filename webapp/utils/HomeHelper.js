sap.ui.define([
"com/bootcamp/sapui5/projectfreestyleui5/utils/HomeService",
"sap/ui/model/json/JSONModel"
], function (HomeService, JSONModel){
    "use strict";

    return {
		init: function (oNorthwindModel) {
			this._oNorthwindModel = oNorthwindModel;
		},

		getDataProducts: async function() {
           let oFilters = [];
            return HomeService.readProducts(this._oNorthwindModel, oFilters);
        },

         setProductModel: async function (oController, aDatos) {
               let oListModel = oController.getOwnerComponent().getModel('ProductCollection');
                if(!oListModel){
                const oModel  = new JSONModel([]);
                oModel.setSizeLimit(1000000);	
                oController.getOwnerComponent().setModel(oModel, "ProductCollection");  
                oListModel = oController.getOwnerComponent().getModel('ProductCollection');
            }

            oListModel.setData(aDatos);
        },


	};
});