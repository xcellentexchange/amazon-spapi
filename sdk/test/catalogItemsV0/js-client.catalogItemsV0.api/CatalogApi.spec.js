/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
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
    define(['expect.js', '../../../src/catalogItemsV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/catalogItemsV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForCatalogItems);
  }
}(this, function(expect, SellingPartnerApiForCatalogItems) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForCatalogItems.CatalogApi();
  });

  describe('catalogItemsV0', function() {
    describe('CatalogApi', function() {
      describe('getCatalogItem', function() {
        it('should call getCatalogItem successfully', function(done) {
          // TODO: uncomment, update parameter values for getCatalogItem call and complete the assertions
          /*
          var marketplaceId = "marketplaceId_example";
          var asin = "asin_example";

          instance.getCatalogItem(marketplaceId, asin).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForCatalogItems.GetCatalogItemResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForCatalogItems.Item);
                  expect(data.payload.identifiers).to.be.a(SellingPartnerApiForCatalogItems.IdentifierType);
                    expect(data.payload.identifiers.marketplaceASIN).to.be.a(SellingPartnerApiForCatalogItems.ASINIdentifier);
                      expect(data.payload.identifiers.marketplaceASIN.marketplaceId).to.be.a('string');
                  // expect(data.payload.identifiers.marketplaceASIN.marketplaceId).to.be("");
                  expect(data.payload.identifiers.marketplaceASIN.ASIN).to.be.a('string');
                  // expect(data.payload.identifiers.marketplaceASIN.ASIN).to.be("");
                expect(data.payload.identifiers.sKUIdentifier).to.be.a(SellingPartnerApiForCatalogItems.SellerSKUIdentifier);
                      expect(data.payload.identifiers.sKUIdentifier.marketplaceId).to.be.a('string');
                  // expect(data.payload.identifiers.sKUIdentifier.marketplaceId).to.be("");
                  expect(data.payload.identifiers.sKUIdentifier.sellerId).to.be.a('string');
                  // expect(data.payload.identifiers.sKUIdentifier.sellerId).to.be("");
                  expect(data.payload.identifiers.sKUIdentifier.sellerSKU).to.be.a('string');
                  // expect(data.payload.identifiers.sKUIdentifier.sellerSKU).to.be("");
              expect(data.payload.attributeSets).to.be.a(SellingPartnerApiForCatalogItems.AttributeSetList);
                  expect(data.payload.relationships).to.be.a(SellingPartnerApiForCatalogItems.RelationshipList);
                  expect(data.payload.salesRankings).to.be.a(SellingPartnerApiForCatalogItems.SalesRankList);
      
            expect(data.errors).to.be.a(SellingPartnerApiForCatalogItems.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listCatalogCategories', function() {
        it('should call listCatalogCategories successfully', function(done) {
          // TODO: uncomment, update parameter values for listCatalogCategories call and complete the assertions
          /*
          var marketplaceId = "marketplaceId_example";
          var opts = {};
          opts.ASIN = "ASIN_example";
          opts.sellerSKU = "sellerSKU_example";

          instance.listCatalogCategories(marketplaceId, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForCatalogItems.ListCatalogCategoriesResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForCatalogItems.ListOfCategories);
                expect(data.errors).to.be.a(SellingPartnerApiForCatalogItems.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listCatalogItems', function() {
        it('should call listCatalogItems successfully', function(done) {
          // TODO: uncomment, update parameter values for listCatalogItems call and complete the assertions
          /*
          var marketplaceId = "marketplaceId_example";
          var opts = {};
          opts.query = "query_example";
          opts.queryContextId = "queryContextId_example";
          opts.sellerSKU = "sellerSKU_example";
          opts.UPC = "UPC_example";
          opts.EAN = "EAN_example";
          opts.ISBN = "ISBN_example";
          opts.JAN = "JAN_example";

          instance.listCatalogItems(marketplaceId, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForCatalogItems.ListCatalogItemsResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForCatalogItems.ListMatchingItemsResponse);
                  expect(data.payload.items).to.be.a(SellingPartnerApiForCatalogItems.ItemList);
      
            expect(data.errors).to.be.a(SellingPartnerApiForCatalogItems.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));