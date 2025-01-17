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
    describe('OfferType', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForPricing.OfferType();
      });

      it('should create an instance of OfferType', function() {
        // TODO: update the code to test OfferType
        expect(instance).to.be.a(SellingPartnerApiForPricing.OfferType);
      });

      it('should have the property offerType (base name: "offerType")', function() {
        // TODO: update the code to test the property offerType
        expect(instance).to.have.property('offerType');
        // expect(instance.offerType).to.be(expectedValueLiteral);
      });

      it('should have the property buyingPrice (base name: "BuyingPrice")', function() {
        // TODO: update the code to test the property buyingPrice
        expect(instance).to.have.property('buyingPrice');
        // expect(instance.buyingPrice).to.be(expectedValueLiteral);
      });

      it('should have the property regularPrice (base name: "RegularPrice")', function() {
        // TODO: update the code to test the property regularPrice
        expect(instance).to.have.property('regularPrice');
        // expect(instance.regularPrice).to.be(expectedValueLiteral);
      });

      it('should have the property businessPrice (base name: "businessPrice")', function() {
        // TODO: update the code to test the property businessPrice
        expect(instance).to.have.property('businessPrice');
        // expect(instance.businessPrice).to.be(expectedValueLiteral);
      });

      it('should have the property quantityDiscountPrices (base name: "quantityDiscountPrices")', function() {
        // TODO: update the code to test the property quantityDiscountPrices
        expect(instance).to.have.property('quantityDiscountPrices');
        // expect(instance.quantityDiscountPrices).to.be(expectedValueLiteral);
      });

      it('should have the property fulfillmentChannel (base name: "FulfillmentChannel")', function() {
        // TODO: update the code to test the property fulfillmentChannel
        expect(instance).to.have.property('fulfillmentChannel');
        // expect(instance.fulfillmentChannel).to.be(expectedValueLiteral);
      });

      it('should have the property itemCondition (base name: "ItemCondition")', function() {
        // TODO: update the code to test the property itemCondition
        expect(instance).to.have.property('itemCondition');
        // expect(instance.itemCondition).to.be(expectedValueLiteral);
      });

      it('should have the property itemSubCondition (base name: "ItemSubCondition")', function() {
        // TODO: update the code to test the property itemSubCondition
        expect(instance).to.have.property('itemSubCondition');
        // expect(instance.itemSubCondition).to.be(expectedValueLiteral);
      });

      it('should have the property sellerSKU (base name: "SellerSKU")', function() {
        // TODO: update the code to test the property sellerSKU
        expect(instance).to.have.property('sellerSKU');
        // expect(instance.sellerSKU).to.be(expectedValueLiteral);
      });

    });
  });

}));
