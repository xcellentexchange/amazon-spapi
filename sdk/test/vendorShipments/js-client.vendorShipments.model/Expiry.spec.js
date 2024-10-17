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
    describe('Expiry', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementShipments.Expiry();
      });

      it('should create an instance of Expiry', function() {
        // TODO: update the code to test Expiry
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.Expiry);
      });

      it('should have the property manufacturerDate (base name: "manufacturerDate")', function() {
        // TODO: update the code to test the property manufacturerDate
        expect(instance).to.have.property('manufacturerDate');
        // expect(instance.manufacturerDate).to.be(expectedValueLiteral);
      });

      it('should have the property expiryDate (base name: "expiryDate")', function() {
        // TODO: update the code to test the property expiryDate
        expect(instance).to.have.property('expiryDate');
        // expect(instance.expiryDate).to.be(expectedValueLiteral);
      });

      it('should have the property expiryAfterDuration (base name: "expiryAfterDuration")', function() {
        // TODO: update the code to test the property expiryAfterDuration
        expect(instance).to.have.property('expiryAfterDuration');
        // expect(instance.expiryAfterDuration).to.be(expectedValueLiteral);
      });

    });
  });

}));