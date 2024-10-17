/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
    define(['expect.js', '../../../src/fulfillmentInboundV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentInboundV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFulfillmentInbound);
  }
}(this, function(expect, SellingPartnerApiForFulfillmentInbound) {
  'use strict';

  var instance;

  describe('fulfillmentInboundV0', function() {
    describe('PartneredEstimate', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFulfillmentInbound.PartneredEstimate();
      });

      it('should create an instance of PartneredEstimate', function() {
        // TODO: update the code to test PartneredEstimate
        expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.PartneredEstimate);
      });

      it('should have the property amount (base name: "Amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property confirmDeadline (base name: "ConfirmDeadline")', function() {
        // TODO: update the code to test the property confirmDeadline
        expect(instance).to.have.property('confirmDeadline');
        // expect(instance.confirmDeadline).to.be(expectedValueLiteral);
      });

      it('should have the property voidDeadline (base name: "VoidDeadline")', function() {
        // TODO: update the code to test the property voidDeadline
        expect(instance).to.have.property('voidDeadline');
        // expect(instance.voidDeadline).to.be(expectedValueLiteral);
      });

    });
  });

}));