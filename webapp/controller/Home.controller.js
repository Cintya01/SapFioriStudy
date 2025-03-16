sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.projectfreestyleui5.controller.Home", {
        onInit() {
            this._oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },
        onPress: function () {
            let salute = this._oResourceBundle.getText("btntext1");
			MessageToast.show(salute);
		}
    });
});