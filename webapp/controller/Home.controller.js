sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    "com/bootcamp/sapui5/projectfreestyleui5/utils/HomeHelper"
], (Controller, MessageToast, HomeHelper) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.projectfreestyleui5.controller.Home", {
        onInit() {
            this._oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            this.oRouter = this.getOwnerComponent().getRouter();
        },
        onPressed: function () {
            let salute = this._oResourceBundle.getText("btntext1");
			MessageToast.show(salute);
		},
        
        onPress: async function(){
            let oDatos = await HomeHelper.getDataProducts();
            await HomeHelper.setProductModel(this, oDatos[0].results);
        },

        onItemPress: function(oEvent){
            let oSource = oEvent.getSource();

            let oDatos = oSource.getBindingContext("ProductCollection").getObject();

            this.oRouter.navTo("detail", {
                ProductID: oDatos.ProductID
            });
        }

        // onSearch: function (event) {
		// 	if (event.getParameter("searchButtonPressed")) {
        //         if (this.oDatos && this.oDatos.length > 0) {
        //             let searchTerm = event.getParameter("query"); 
        //             let filteredResults = this.oDatos.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

        //             if (filteredResults.length > 0) {

        //                 HomeHelper.setProductModel(this, filteredResults);
        //                 MessageToast.show("Found " + filteredResults.length + " products");
        //             } else {
        //                 MessageToast.show("No products found for: " + searchTerm);
        //             }
        //         } else {
        //             MessageToast.show("No data available for search.");
        //         }
		// 	}
		// }
    });
});