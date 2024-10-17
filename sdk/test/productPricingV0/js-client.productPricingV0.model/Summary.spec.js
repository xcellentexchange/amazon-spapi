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
    describe('Summary', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForPricing.Summary();
      });

      it('should create an instance of Summary', function() {
        // TODO: update the code to test Summary
        expect(instance).to.be.a(SellingPartnerApiForPricing.Summary);
      });

      it('should have the property totalOfferCount (base name: "TotalOfferCount")', function() {
        // TODO: update the code to test the property totalOfferCount
        expect(instance).to.have.property('totalOfferCount');
        // expect(instance.totalOfferCount).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfOffers (base name: "NumberOfOffers")', function() {
        // TODO: update the code to test the property numberOfOffers
        expect(instance).to.have.property('numberOfOffers');
        // expect(instance.numberOfOffers).to.be(expectedValueLiteral);
      });

      it('should have the property lowestPrices (base name: "LowestPrices")', function() {
        // TODO: update the code to test the property lowestPrices
        expect(instance).to.have.property('lowestPrices');
        // expect(instance.lowestPrices).to.be(expectedValueLiteral);
      });

      it('should have the property buyBoxPrices (base name: "BuyBoxPrices")', function() {
        // TODO: update the code to test the property buyBoxPrices
        expect(instance).to.have.property('buyBoxPrices');
        // expect(instance.buyBoxPrices).to.be(expectedValueLiteral);
      });

      it('should have the property listPrice (base name: "ListPrice")', function() {
        // TODO: update the code to test the property listPrice
        expect(instance).to.have.property('listPrice');
        // expect(instance.listPrice).to.be(expectedValueLiteral);
      });

      it('should have the property competitivePriceThreshold (base name: "CompetitivePriceThreshold")', function() {
        // TODO: update the code to test the property competitivePriceThreshold
        expect(instance).to.have.property('competitivePriceThreshold');
        // expect(instance.competitivePriceThreshold).to.be(expectedValueLiteral);
      });

      it('should have the property suggestedLowerPricePlusShipping (base name: "SuggestedLowerPricePlusShipping")', function() {
        // TODO: update the code to test the property suggestedLowerPricePlusShipping
        expect(instance).to.have.property('suggestedLowerPricePlusShipping');
        // expect(instance.suggestedLowerPricePlusShipping).to.be(expectedValueLiteral);
      });

      it('should have the property salesRankings (base name: "SalesRankings")', function() {
        // TODO: update the code to test the property salesRankings
        expect(instance).to.have.property('salesRankings');
        // expect(instance.salesRankings).to.be(expectedValueLiteral);
      });

      it('should have the property buyBoxEligibleOffers (base name: "BuyBoxEligibleOffers")', function() {
        // TODO: update the code to test the property buyBoxEligibleOffers
        expect(instance).to.have.property('buyBoxEligibleOffers');
        // expect(instance.buyBoxEligibleOffers).to.be(expectedValueLiteral);
      });

      it('should have the property offersAvailableTime (base name: "OffersAvailableTime")', function() {
        // TODO: update the code to test the property offersAvailableTime
        expect(instance).to.have.property('offersAvailableTime');
        // expect(instance.offersAvailableTime).to.be(expectedValueLiteral);
      });

    });
  });

}));