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
    describe('GetOffersResult', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForPricing.GetOffersResult();
      });

      it('should create an instance of GetOffersResult', function() {
        // TODO: update the code to test GetOffersResult
        expect(instance).to.be.a(SellingPartnerApiForPricing.GetOffersResult);
      });

      it('should have the property marketplaceID (base name: "MarketplaceID")', function() {
        // TODO: update the code to test the property marketplaceID
        expect(instance).to.have.property('marketplaceID');
        // expect(instance.marketplaceID).to.be(expectedValueLiteral);
      });

      it('should have the property ASIN (base name: "ASIN")', function() {
        // TODO: update the code to test the property ASIN
        expect(instance).to.have.property('ASIN');
        // expect(instance.ASIN).to.be(expectedValueLiteral);
      });

      it('should have the property SKU (base name: "SKU")', function() {
        // TODO: update the code to test the property SKU
        expect(instance).to.have.property('SKU');
        // expect(instance.SKU).to.be(expectedValueLiteral);
      });

      it('should have the property itemCondition (base name: "ItemCondition")', function() {
        // TODO: update the code to test the property itemCondition
        expect(instance).to.have.property('itemCondition');
        // expect(instance.itemCondition).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property identifier (base name: "Identifier")', function() {
        // TODO: update the code to test the property identifier
        expect(instance).to.have.property('identifier');
        // expect(instance.identifier).to.be(expectedValueLiteral);
      });

      it('should have the property summary (base name: "Summary")', function() {
        // TODO: update the code to test the property summary
        expect(instance).to.have.property('summary');
        // expect(instance.summary).to.be(expectedValueLiteral);
      });

      it('should have the property offers (base name: "Offers")', function() {
        // TODO: update the code to test the property offers
        expect(instance).to.have.property('offers');
        // expect(instance.offers).to.be(expectedValueLiteral);
      });

    });
  });

}));
