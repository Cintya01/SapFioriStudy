sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    "com/bootcamp/sapui5/projectfreestyleui5/utils/HomeHelper"
], (Controller, MessageToast, HomeHelper) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.projectfreestyleui5.controller.Home", {
        onInit() {
            //this._oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },
        // onPress: function () {
        //     let salute = this._oResourceBundle.getText("btntext1");
		// 	MessageToast.show(salute);
		// }
        
        onPress: async function(){
            let oDatos = await HomeHelper.getDataProducts();
            //await HomeHelper.setProductModel(this, oDatos[0].results);
        }
    });
});