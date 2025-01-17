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
    describe('TransportDetailInput', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFulfillmentInbound.TransportDetailInput();
      });

      it('should create an instance of TransportDetailInput', function() {
        // TODO: update the code to test TransportDetailInput
        expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.TransportDetailInput);
      });

      it('should have the property partneredSmallParcelData (base name: "PartneredSmallParcelData")', function() {
        // TODO: update the code to test the property partneredSmallParcelData
        expect(instance).to.have.property('partneredSmallParcelData');
        // expect(instance.partneredSmallParcelData).to.be(expectedValueLiteral);
      });

      it('should have the property nonPartneredSmallParcelData (base name: "NonPartneredSmallParcelData")', function() {
        // TODO: update the code to test the property nonPartneredSmallParcelData
        expect(instance).to.have.property('nonPartneredSmallParcelData');
        // expect(instance.nonPartneredSmallParcelData).to.be(expectedValueLiteral);
      });

      it('should have the property partneredLtlData (base name: "PartneredLtlData")', function() {
        // TODO: update the code to test the property partneredLtlData
        expect(instance).to.have.property('partneredLtlData');
        // expect(instance.partneredLtlData).to.be(expectedValueLiteral);
      });

      it('should have the property nonPartneredLtlData (base name: "NonPartneredLtlData")', function() {
        // TODO: update the code to test the property nonPartneredLtlData
        expect(instance).to.have.property('nonPartneredLtlData');
        // expect(instance.nonPartneredLtlData).to.be(expectedValueLiteral);
      });

    });
  });

}));
