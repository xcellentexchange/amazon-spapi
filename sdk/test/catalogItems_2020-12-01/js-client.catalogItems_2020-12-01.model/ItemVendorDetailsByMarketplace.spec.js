/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, see the [Catalog Items API Use Case Guide](doc:catalog-items-api-v2020-12-01-use-case-guide).
 *
 * OpenAPI spec version: 2020-12-01
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
    define(['expect.js', '../../../src/catalogItems_2020-12-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/catalogItems_2020-12-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForCatalogItems);
  }
}(this, function(expect, SellingPartnerApiForCatalogItems) {
  'use strict';

  var instance;

  describe('catalogItems_2020-12-01', function() {
    describe('ItemVendorDetailsByMarketplace', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForCatalogItems.ItemVendorDetailsByMarketplace();
      });

      it('should create an instance of ItemVendorDetailsByMarketplace', function() {
        // TODO: update the code to test ItemVendorDetailsByMarketplace
        expect(instance).to.be.a(SellingPartnerApiForCatalogItems.ItemVendorDetailsByMarketplace);
      });

      it('should have the property marketplaceId (base name: "marketplaceId")', function() {
        // TODO: update the code to test the property marketplaceId
        expect(instance).to.have.property('marketplaceId');
        // expect(instance.marketplaceId).to.be(expectedValueLiteral);
      });

      it('should have the property brandCode (base name: "brandCode")', function() {
        // TODO: update the code to test the property brandCode
        expect(instance).to.have.property('brandCode');
        // expect(instance.brandCode).to.be(expectedValueLiteral);
      });

      it('should have the property categoryCode (base name: "categoryCode")', function() {
        // TODO: update the code to test the property categoryCode
        expect(instance).to.have.property('categoryCode');
        // expect(instance.categoryCode).to.be(expectedValueLiteral);
      });

      it('should have the property manufacturerCode (base name: "manufacturerCode")', function() {
        // TODO: update the code to test the property manufacturerCode
        expect(instance).to.have.property('manufacturerCode');
        // expect(instance.manufacturerCode).to.be(expectedValueLiteral);
      });

      it('should have the property manufacturerCodeParent (base name: "manufacturerCodeParent")', function() {
        // TODO: update the code to test the property manufacturerCodeParent
        expect(instance).to.have.property('manufacturerCodeParent');
        // expect(instance.manufacturerCodeParent).to.be(expectedValueLiteral);
      });

      it('should have the property productGroup (base name: "productGroup")', function() {
        // TODO: update the code to test the property productGroup
        expect(instance).to.have.property('productGroup');
        // expect(instance.productGroup).to.be(expectedValueLiteral);
      });

      it('should have the property replenishmentCategory (base name: "replenishmentCategory")', function() {
        // TODO: update the code to test the property replenishmentCategory
        expect(instance).to.have.property('replenishmentCategory');
        // expect(instance.replenishmentCategory).to.be(expectedValueLiteral);
      });

      it('should have the property subcategoryCode (base name: "subcategoryCode")', function() {
        // TODO: update the code to test the property subcategoryCode
        expect(instance).to.have.property('subcategoryCode');
        // expect(instance.subcategoryCode).to.be(expectedValueLiteral);
      });

    });
  });

}));
