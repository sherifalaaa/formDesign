/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojarraydataprovider', 'ojs/ojknockout', 'ojs/ojinputtext', 
  'ojs/ojdatetimepicker', 'ojs/ojselectcombobox', 'ojs/ojcheckboxset', 'ojs/ojvalidation-number', 'ojs/ojvalidation-datetime',
  'ojs/ojtable'],
 function(oj, ko, $,ArrayDataProvider) {
  
    function DashboardViewModel() {
      var self = this;
      
      var deptArray = [{componentCategory: "Foreign Air Group", componentCode: '41 700 863 0', ComponentDescription: 'AIR GROUP FOR 2-AXLE SEMI-TRAILER WABCO', UOM: 'EA', Qty: '1.00'},
                      {componentCategory: "Foreign Axles", componentCode: '30.16.744.409', ComponentDescription: 'ABPW -TRAILER AXLE HZ16010-EG', UOM: 'EA', Qty: '2.00'},
                      {componentCategory: "Foreign King Pin", componentCode: 'KGZ1012000109', ComponentDescription: 'KING PIN 2-1412 JOST', UOM: 'EA', Qty: '1.00'},
                      {componentCategory: "Local Steel", componentCode: 'SSTSHT02*125*25', ComponentDescription: 'Steel Sheet 2X1250X2500mm St.37 DIN1541', UOM: 'KG', Qty: '42.88'},
                      {componentCategory: "Local Steel", componentCode: 'SSTSHT03*150*60', ComponentDescription: 'Steel sheet 3x1500x6000mm', UOM: 'KG', Qty: '386.56'},
                      {componentCategory: "Local Steel", componentCode: 'SSTSHT04*150*60', ComponentDescription: 'Steel sheet 4x1500x6000mm', UOM: 'KG', Qty: '354.68'},
                      {componentCategory: "Local Steel", componentCode: 'SSTSHT05*150*60', ComponentDescription: 'Steel sheet 5x1500x6000mm', UOM: 'KG', Qty: '446.09'},
                      {componentCategory: "Local Steel", componentCode: 'SSTSHT06*150*60', ComponentDescription: 'Steel sheet 6x1500x6000mm', UOM: 'KG', Qty: '487.99'},
                      {componentCategory: "Local Steel", componentCode: 'SSTSHT08*150*60', ComponentDescription: 'Steel sheet 8x1500x6000mm', UOM: 'KG', Qty: '713.14'},
                      {componentCategory: "Local Steel", componentCode: 'SSTSHT10*150*60', ComponentDescription: 'Steel sheet 10x1500x6000mm', UOM: 'KG', Qty: '26.27'},
                      {componentCategory: "Local Steel", componentCode: 'SSTSHT12*150*60', ComponentDescription: 'Steel sheet 12x1500x6000mm', UOM: 'KG', Qty: '1309.27'},
                      {componentCategory: "Local Steel", componentCode: 'SSTSHTC05*250*50', ComponentDescription: 'Embossed Steel Sheet 4/5x2500x1250mm St.37 Import', UOM: 'KG', Qty: '1,105.54'},
                      {componentCategory: "Local Steel", componentCode: 'SSTIPE055', ComponentDescription: 'Standard Beam IPE550 DIN-EN 1025,ST52-3U', UOM: 'KG', Qty: '2,651.06'},
                      {componentCategory: "Local Steel", componentCode: 'SSTIPE020', ComponentDescription: 'Standard Beam IPE200 DIN-EN 1025', UOM: 'KG', Qty: '560.00'},
                      {componentCategory: "Local Steel", componentCode: '4SSTUPN020', ComponentDescription: 'UPN 200 DIN1026(12000mm) ST 44', UOM: 'KG', Qty: '61.86'},
                      {componentCategory: "Local Steel", componentCode: 'SSTROD014', ComponentDescription: 'Steel Round Bar D=14mm ST.37 DIN1013', UOM: 'KG', Qty: '0.35'},
                      {componentCategory: "Local Steel", componentCode: 'SSTSQT202015', ComponentDescription: 'SQUARE TUPE 20 X20 X 1.5 mm', UOM: 'MT', Qty: '118.87'},
                      {componentCategory: "Local Steel", componentCode: 'SSTRCT030202', ComponentDescription: 'RECTANGULAR TUBE 30X20X2mm', UOM: 'MT', Qty: '1.64'},
                      {componentCategory: "Local Steel", componentCode: 'SSTRNT051032', ComponentDescription: 'ST.ROUND TUB 51X3.2 DIN 2448', UOM: 'MT', Qty: '5.46'},
                      {componentCategory: "Local Steel", componentCode: 'SSTRNT635010', ComponentDescription: 'ST.ROUND TUBE 63.5X10mm. DIN2448', UOM: 'MT', Qty: '2.31'}];
   
        self.deptObservableArray = ko.observableArray(deptArray);
        self.dataprovider = new ArrayDataProvider(self.deptObservableArray, {keyAttributes: 'ComponentDescription'});
      
      
      
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
