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
    describe('BoxContentsFeeDetails', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFulfillmentInbound.BoxContentsFeeDetails();
      });

      it('should create an instance of BoxContentsFeeDetails', function() {
        // TODO: update the code to test BoxContentsFeeDetails
        expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.BoxContentsFeeDetails);
      });

      it('should have the property totalUnits (base name: "TotalUnits")', function() {
        // TODO: update the code to test the property totalUnits
        expect(instance).to.have.property('totalUnits');
        // expect(instance.totalUnits).to.be(expectedValueLiteral);
      });

      it('should have the property feePerUnit (base name: "FeePerUnit")', function() {
        // TODO: update the code to test the property feePerUnit
        expect(instance).to.have.property('feePerUnit');
        // expect(instance.feePerUnit).to.be(expectedValueLiteral);
      });

      it('should have the property totalFee (base name: "TotalFee")', function() {
        // TODO: update the code to test the property totalFee
        expect(instance).to.have.property('totalFee');
        // expect(instance.totalFee).to.be(expectedValueLiteral);
      });

    });
  });

}));