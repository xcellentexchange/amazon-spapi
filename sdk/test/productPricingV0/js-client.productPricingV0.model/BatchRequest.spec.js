/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
    define(['expect.js', '../../../src/productPricingV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/productPricingV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForPricing);
  }
}(this, function(expect, SellingPartnerApiForPricing) {
  'use strict';

  var instance;

  describe('productPricingV0', function() {
    describe('BatchRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForPricing.BatchRequest();
      });

      it('should create an instance of BatchRequest', function() {
        // TODO: update the code to test BatchRequest
        expect(instance).to.be.a(SellingPartnerApiForPricing.BatchRequest);
      });

      it('should have the property uri (base name: "uri")', function() {
        // TODO: update the code to test the property uri
        expect(instance).to.have.property('uri');
        // expect(instance.uri).to.be(expectedValueLiteral);
      });

      it('should have the property method (base name: "method")', function() {
        // TODO: update the code to test the property method
        expect(instance).to.have.property('method');
        // expect(instance.method).to.be(expectedValueLiteral);
      });

      it('should have the property headers (base name: "headers")', function() {
        // TODO: update the code to test the property headers
        expect(instance).to.have.property('headers');
        // expect(instance.headers).to.be(expectedValueLiteral);
      });

    });
  });

}));
