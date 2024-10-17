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
    describe('AddressTypeEnum', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForShipmentInvoicing.AddressTypeEnum;
      });

      it('should create an instance of AddressTypeEnum', function() {
        // TODO: update the code to test AddressTypeEnum
        expect(instance).to.be.a('object');
      });

      it('should have the property residential', function() {
        expect(instance).to.have.property('residential');
        expect(instance.residential).to.be("Residential");
      });

      it('should have the property commercial', function() {
        expect(instance).to.have.property('commercial');
        expect(instance.commercial).to.be("Commercial");
      });

    });
  });

}));