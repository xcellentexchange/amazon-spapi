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
    describe('PartneredSmallParcelDataOutput', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFulfillmentInbound.PartneredSmallParcelDataOutput();
      });

      it('should create an instance of PartneredSmallParcelDataOutput', function() {
        // TODO: update the code to test PartneredSmallParcelDataOutput
        expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.PartneredSmallParcelDataOutput);
      });

      it('should have the property packageList (base name: "PackageList")', function() {
        // TODO: update the code to test the property packageList
        expect(instance).to.have.property('packageList');
        // expect(instance.packageList).to.be(expectedValueLiteral);
      });

      it('should have the property partneredEstimate (base name: "PartneredEstimate")', function() {
        // TODO: update the code to test the property partneredEstimate
        expect(instance).to.have.property('partneredEstimate');
        // expect(instance.partneredEstimate).to.be(expectedValueLiteral);
      });

    });
  });

}));
