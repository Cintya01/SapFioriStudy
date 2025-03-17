sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/projectfreestyleui5/utils/HomeHelper"
  ], (Controller, HomeHelper) => {
    "use strict";
  
    return Controller.extend("com.bootcamp.sapui5.projectfreestyleui5.view.Detail", {
        onInit() {

            let oRouter = sap.ui.core.UIComponent.getRouterFor(this);

            oRouter.getRouter("detail").attachPatternMatched(this._onObjectMatched, this);

           
           
        },
        _onObjectMatched: function (oEvent){
            let sProductID = oEvent.getParameter("arguments").ProductID;

            this.getView().bindElement({
                path: "/Products(" + sProductID +")",
                parameters:{
                    expand: "Order_Details"
                }
            })
        }
    });
  });