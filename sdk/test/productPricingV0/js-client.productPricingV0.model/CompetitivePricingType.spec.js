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
    describe('CompetitivePricingType', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForPricing.CompetitivePricingType();
      });

      it('should create an instance of CompetitivePricingType', function() {
        // TODO: update the code to test CompetitivePricingType
        expect(instance).to.be.a(SellingPartnerApiForPricing.CompetitivePricingType);
      });

      it('should have the property competitivePrices (base name: "CompetitivePrices")', function() {
        // TODO: update the code to test the property competitivePrices
        expect(instance).to.have.property('competitivePrices');
        // expect(instance.competitivePrices).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfOfferListings (base name: "NumberOfOfferListings")', function() {
        // TODO: update the code to test the property numberOfOfferListings
        expect(instance).to.have.property('numberOfOfferListings');
        // expect(instance.numberOfOfferListings).to.be(expectedValueLiteral);
      });

      it('should have the property tradeInValue (base name: "TradeInValue")', function() {
        // TODO: update the code to test the property tradeInValue
        expect(instance).to.have.property('tradeInValue');
        // expect(instance.tradeInValue).to.be(expectedValueLiteral);
      });

    });
  });

}));