/*
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src/shipmentInvoicingV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/shipmentInvoicingV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForShipmentInvoicing);
  }
}(this, function(expect, SellingPartnerApiForShipmentInvoicing) {
  'use strict';

  var instance;

  describe('shipmentInvoicingV0', function() {
    describe('TaxClassification', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForShipmentInvoicing.TaxClassification();
      });

      it('should create an instance of TaxClassification', function() {
        // TODO: update the code to test TaxClassification
        expect(instance).to.be.a(SellingPartnerApiForShipmentInvoicing.TaxClassification);
      });

      it('should have the property name (base name: "Name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "Value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

    });
  });

}));
