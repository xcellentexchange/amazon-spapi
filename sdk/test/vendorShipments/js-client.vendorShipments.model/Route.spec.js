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
    describe('Route', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementShipments.Route();
      });

      it('should create an instance of Route', function() {
        // TODO: update the code to test Route
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.Route);
      });

      it('should have the property stops (base name: "stops")', function() {
        // TODO: update the code to test the property stops
        expect(instance).to.have.property('stops');
        // expect(instance.stops).to.be(expectedValueLiteral);
      });

    });
  });

}));
