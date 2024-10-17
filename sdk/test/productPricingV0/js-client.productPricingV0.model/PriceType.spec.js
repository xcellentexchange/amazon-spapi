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
    describe('PriceType', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForPricing.PriceType();
      });

      it('should create an instance of PriceType', function() {
        // TODO: update the code to test PriceType
        expect(instance).to.be.a(SellingPartnerApiForPricing.PriceType);
      });

      it('should have the property landedPrice (base name: "LandedPrice")', function() {
        // TODO: update the code to test the property landedPrice
        expect(instance).to.have.property('landedPrice');
        // expect(instance.landedPrice).to.be(expectedValueLiteral);
      });

      it('should have the property listingPrice (base name: "ListingPrice")', function() {
        // TODO: update the code to test the property listingPrice
        expect(instance).to.have.property('listingPrice');
        // expect(instance.listingPrice).to.be(expectedValueLiteral);
      });

      it('should have the property shipping (base name: "Shipping")', function() {
        // TODO: update the code to test the property shipping
        expect(instance).to.have.property('shipping');
        // expect(instance.shipping).to.be(expectedValueLiteral);
      });

      it('should have the property points (base name: "Points")', function() {
        // TODO: update the code to test the property points
        expect(instance).to.have.property('points');
        // expect(instance.points).to.be(expectedValueLiteral);
      });

    });
  });

}));