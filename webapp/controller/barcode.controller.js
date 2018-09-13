sap.ui.define(["sap/m/MessageToast", "sap/ui/core/mvc/Controller"], 

function (MessageToast, Controller) { "use strict";
	
	var PageController = Controller.extend("sap.m.sample.Button.Page", {
	
	
		onPressCam: function (oEvent) {
			MessageToast.show("Leyendo");
			
			navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    			destinationType: Camera.DestinationType.DATA_URL
			});

			function onSuccess(imageData) {
			    var image = document.getElementById("myImage");
			    image.src = "data:image/jpeg;base64," + imageData;
			}
			
			function onFail(message) {
			    MessageToast.show("Failed because: " + message);
			}
		},
			
		onPressBarcode: function (oEvent) {
			
			MessageToast.show("Leyendo");
			cordova.plugins.barcodeScanner.scan(
				function(result) { MessageToast.show(result.text); }, // OK
				function(error){ MessageToast.show(error); }		  // ERROR
			);
			
		}
	});
	return PageController;

});