/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
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
    define(['expect.js', '../../../src/fulfillmentInbound_2024-03-20/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentInbound_2024-03-20/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForFbaInboundOperations);
  }
}(this, function(expect, TheSellingPartnerApiForFbaInboundOperations) {
  'use strict';

  var instance;

  describe('fulfillmentInbound_2024-03-20', function() {
    describe('OwnerConstraint', function() {
      beforeEach(function() {
        instance = TheSellingPartnerApiForFbaInboundOperations.OwnerConstraint;
      });

      it('should create an instance of OwnerConstraint', function() {
        // TODO: update the code to test OwnerConstraint
        expect(instance).to.be.a('object');
      });

      it('should have the property AMAZON_ONLY', function() {
        expect(instance).to.have.property('AMAZON_ONLY');
        expect(instance.AMAZON_ONLY).to.be("AMAZON_ONLY");
      });

      it('should have the property NONE_ONLY', function() {
        expect(instance).to.have.property('NONE_ONLY');
        expect(instance.NONE_ONLY).to.be("NONE_ONLY");
      });

      it('should have the property SELLER_ONLY', function() {
        expect(instance).to.have.property('SELLER_ONLY');
        expect(instance.SELLER_ONLY).to.be("SELLER_ONLY");
      });

    });
  });

}));