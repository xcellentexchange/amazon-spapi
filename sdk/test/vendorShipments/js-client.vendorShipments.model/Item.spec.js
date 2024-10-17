/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
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
    define(['expect.js', '../../../src/vendorShipments/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorShipments/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForRetailProcurementShipments);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementShipments) {
  'use strict';

  var instance;

  describe('vendorShipments', function() {
    describe('Item', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementShipments.Item();
      });

      it('should create an instance of Item', function() {
        // TODO: update the code to test Item
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.Item);
      });

      it('should have the property itemSequenceNumber (base name: "itemSequenceNumber")', function() {
        // TODO: update the code to test the property itemSequenceNumber
        expect(instance).to.have.property('itemSequenceNumber');
        // expect(instance.itemSequenceNumber).to.be(expectedValueLiteral);
      });

      it('should have the property amazonProductIdentifier (base name: "amazonProductIdentifier")', function() {
        // TODO: update the code to test the property amazonProductIdentifier
        expect(instance).to.have.property('amazonProductIdentifier');
        // expect(instance.amazonProductIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property vendorProductIdentifier (base name: "vendorProductIdentifier")', function() {
        // TODO: update the code to test the property vendorProductIdentifier
        expect(instance).to.have.property('vendorProductIdentifier');
        // expect(instance.vendorProductIdentifier).to.be(expectedValueLiteral);
      });

      it('should have the property shippedQuantity (base name: "shippedQuantity")', function() {
        // TODO: update the code to test the property shippedQuantity
        expect(instance).to.have.property('shippedQuantity');
        // expect(instance.shippedQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property itemDetails (base name: "itemDetails")', function() {
        // TODO: update the code to test the property itemDetails
        expect(instance).to.have.property('itemDetails');
        // expect(instance.itemDetails).to.be(expectedValueLiteral);
      });

    });
  });

}));