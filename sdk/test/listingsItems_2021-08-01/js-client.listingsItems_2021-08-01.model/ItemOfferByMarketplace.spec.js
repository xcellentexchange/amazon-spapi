/*
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * OpenAPI spec version: 2021-08-01
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
    define(['expect.js', '../../../src/listingsItems_2021-08-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/listingsItems_2021-08-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForListingsItems);
  }
}(this, function(expect, SellingPartnerApiForListingsItems) {
  'use strict';

  var instance;

  describe('listingsItems_2021-08-01', function() {
    describe('ItemOfferByMarketplace', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForListingsItems.ItemOfferByMarketplace();
      });

      it('should create an instance of ItemOfferByMarketplace', function() {
        // TODO: update the code to test ItemOfferByMarketplace
        expect(instance).to.be.a(SellingPartnerApiForListingsItems.ItemOfferByMarketplace);
      });

      it('should have the property marketplaceId (base name: "marketplaceId")', function() {
        // TODO: update the code to test the property marketplaceId
        expect(instance).to.have.property('marketplaceId');
        // expect(instance.marketplaceId).to.be(expectedValueLiteral);
      });

      it('should have the property offerType (base name: "offerType")', function() {
        // TODO: update the code to test the property offerType
        expect(instance).to.have.property('offerType');
        // expect(instance.offerType).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property points (base name: "points")', function() {
        // TODO: update the code to test the property points
        expect(instance).to.have.property('points');
        // expect(instance.points).to.be(expectedValueLiteral);
      });

      it('should have the property audience (base name: "audience")', function() {
        // TODO: update the code to test the property audience
        expect(instance).to.have.property('audience');
        // expect(instance.audience).to.be(expectedValueLiteral);
      });

    });
  });

}));