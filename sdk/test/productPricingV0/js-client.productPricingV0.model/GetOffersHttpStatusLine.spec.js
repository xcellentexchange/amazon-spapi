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
    describe('GetOffersHttpStatusLine', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForPricing.GetOffersHttpStatusLine();
      });

      it('should create an instance of GetOffersHttpStatusLine', function() {
        // TODO: update the code to test GetOffersHttpStatusLine
        expect(instance).to.be.a(SellingPartnerApiForPricing.GetOffersHttpStatusLine);
      });

      it('should have the property statusCode (base name: "statusCode")', function() {
        // TODO: update the code to test the property statusCode
        expect(instance).to.have.property('statusCode');
        // expect(instance.statusCode).to.be(expectedValueLiteral);
      });

      it('should have the property reasonPhrase (base name: "reasonPhrase")', function() {
        // TODO: update the code to test the property reasonPhrase
        expect(instance).to.have.property('reasonPhrase');
        // expect(instance.reasonPhrase).to.be(expectedValueLiteral);
      });

    });
  });

}));