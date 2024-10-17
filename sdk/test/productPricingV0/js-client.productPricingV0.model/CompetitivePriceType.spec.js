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
    describe('CompetitivePriceType', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForPricing.CompetitivePriceType();
      });

      it('should create an instance of CompetitivePriceType', function() {
        // TODO: update the code to test CompetitivePriceType
        expect(instance).to.be.a(SellingPartnerApiForPricing.CompetitivePriceType);
      });

      it('should have the property competitivePriceId (base name: "CompetitivePriceId")', function() {
        // TODO: update the code to test the property competitivePriceId
        expect(instance).to.have.property('competitivePriceId');
        // expect(instance.competitivePriceId).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "Price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property condition (base name: "condition")', function() {
        // TODO: update the code to test the property condition
        expect(instance).to.have.property('condition');
        // expect(instance.condition).to.be(expectedValueLiteral);
      });

      it('should have the property subcondition (base name: "subcondition")', function() {
        // TODO: update the code to test the property subcondition
        expect(instance).to.have.property('subcondition');
        // expect(instance.subcondition).to.be(expectedValueLiteral);
      });

      it('should have the property offerType (base name: "offerType")', function() {
        // TODO: update the code to test the property offerType
        expect(instance).to.have.property('offerType');
        // expect(instance.offerType).to.be(expectedValueLiteral);
      });

      it('should have the property quantityTier (base name: "quantityTier")', function() {
        // TODO: update the code to test the property quantityTier
        expect(instance).to.have.property('quantityTier');
        // expect(instance.quantityTier).to.be(expectedValueLiteral);
      });

      it('should have the property quantityDiscountType (base name: "quantityDiscountType")', function() {
        // TODO: update the code to test the property quantityDiscountType
        expect(instance).to.have.property('quantityDiscountType');
        // expect(instance.quantityDiscountType).to.be(expectedValueLiteral);
      });

      it('should have the property sellerId (base name: "sellerId")', function() {
        // TODO: update the code to test the property sellerId
        expect(instance).to.have.property('sellerId');
        // expect(instance.sellerId).to.be(expectedValueLiteral);
      });

      it('should have the property belongsToRequester (base name: "belongsToRequester")', function() {
        // TODO: update the code to test the property belongsToRequester
        expect(instance).to.have.property('belongsToRequester');
        // expect(instance.belongsToRequester).to.be(expectedValueLiteral);
      });

    });
  });

}));
