/*
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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
    define(['expect.js', '../../../src/vendorOrders/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorOrders/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForRetailProcurementOrders);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementOrders) {
  'use strict';

  var instance;

  describe('vendorOrders', function() {
    describe('OrderItemStatusReceivingStatus', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementOrders.OrderItemStatusReceivingStatus();
      });

      it('should create an instance of OrderItemStatusReceivingStatus', function() {
        // TODO: update the code to test OrderItemStatusReceivingStatus
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementOrders.OrderItemStatusReceivingStatus);
      });

      it('should have the property receiveStatus (base name: "receiveStatus")', function() {
        // TODO: update the code to test the property receiveStatus
        expect(instance).to.have.property('receiveStatus');
        // expect(instance.receiveStatus).to.be(expectedValueLiteral);
      });

      it('should have the property receivedQuantity (base name: "receivedQuantity")', function() {
        // TODO: update the code to test the property receivedQuantity
        expect(instance).to.have.property('receivedQuantity');
        // expect(instance.receivedQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property lastReceiveDate (base name: "lastReceiveDate")', function() {
        // TODO: update the code to test the property lastReceiveDate
        expect(instance).to.have.property('lastReceiveDate');
        // expect(instance.lastReceiveDate).to.be(expectedValueLiteral);
      });

    });
  });

}));