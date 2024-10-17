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
    describe('NonPartneredLtlDataInput', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFulfillmentInbound.NonPartneredLtlDataInput();
      });

      it('should create an instance of NonPartneredLtlDataInput', function() {
        // TODO: update the code to test NonPartneredLtlDataInput
        expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.NonPartneredLtlDataInput);
      });

      it('should have the property carrierName (base name: "CarrierName")', function() {
        // TODO: update the code to test the property carrierName
        expect(instance).to.have.property('carrierName');
        // expect(instance.carrierName).to.be(expectedValueLiteral);
      });

      it('should have the property proNumber (base name: "ProNumber")', function() {
        // TODO: update the code to test the property proNumber
        expect(instance).to.have.property('proNumber');
        // expect(instance.proNumber).to.be(expectedValueLiteral);
      });

    });
  });

}));