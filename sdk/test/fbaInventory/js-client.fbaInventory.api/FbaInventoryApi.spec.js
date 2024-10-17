/*
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
 *
 * OpenAPI spec version: v1
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
    define(['expect.js', '../../../src/fbaInventory/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fbaInventory/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFbaInventory);
  }
}(this, function(expect, SellingPartnerApiForFbaInventory) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForFbaInventory.FbaInventoryApi();
  });

  describe('fbaInventory', function() {
    describe('FbaInventoryApi', function() {
      describe('addInventory', function() {
        it('should call addInventory successfully', function(done) {
          // TODO: uncomment, update parameter values for addInventory call and complete the assertions
          /*
          var xAmznIdempotencyToken = "xAmznIdempotencyToken_example";
          var addInventoryRequestBody = new SellingPartnerApiForFbaInventory.AddInventoryRequest();
          addInventoryRequestBody.inventoryItems = new SellingPartnerApiForFbaInventory.InventoryItems();

          instance.addInventory(xAmznIdempotencyToken, addInventoryRequestBody).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForFbaInventory.AddInventoryResponse);
            expect(data.errors).to.be.a(SellingPartnerApiForFbaInventory.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createInventoryItem', function() {
        it('should call createInventoryItem successfully', function(done) {
          // TODO: uncomment, update parameter values for createInventoryItem call and complete the assertions
          /*
          var createInventoryItemRequestBody = new SellingPartnerApiForFbaInventory.CreateInventoryItemRequest();
          createInventoryItemRequestBody.sellerSku = "";
          createInventoryItemRequestBody.marketplaceId = "";
          createInventoryItemRequestBody.productName = "";

          instance.createInventoryItem(createInventoryItemRequestBody).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForFbaInventory.CreateInventoryItemResponse);
            expect(data.errors).to.be.a(SellingPartnerApiForFbaInventory.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteInventoryItem', function() {
        it('should call deleteInventoryItem successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteInventoryItem call and complete the assertions
          /*
          var sellerSku = "sellerSku_example";
          var marketplaceId = "marketplaceId_example";

          instance.deleteInventoryItem(sellerSku, marketplaceId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForFbaInventory.DeleteInventoryItemResponse);
            expect(data.errors).to.be.a(SellingPartnerApiForFbaInventory.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getInventorySummaries', function() {
        it('should call getInventorySummaries successfully', function(done) {
          // TODO: uncomment, update parameter values for getInventorySummaries call and complete the assertions
          /*
          var granularityType = "granularityType_example";
          var granularityId = "granularityId_example";
          var marketplaceIds = ["marketplaceIds_example"];
          var opts = {};
          opts.details = false;
          opts.startDateTime = new Date("2013-10-20T19:20:30+01:00");
          opts.sellerSkus = ["sellerSkus_example"];
          opts.sellerSku = "sellerSku_example";
          opts.nextToken = "nextToken_example";

          instance.getInventorySummaries(granularityType, granularityId, marketplaceIds, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForFbaInventory.GetInventorySummariesResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForFbaInventory.GetInventorySummariesResult);
                  expect(data.payload.granularity).to.be.a(SellingPartnerApiForFbaInventory.Granularity);
                    expect(data.payload.granularity.granularityType).to.be.a('string');
                // expect(data.payload.granularity.granularityType).to.be("");
                expect(data.payload.granularity.granularityId).to.be.a('string');
                // expect(data.payload.granularity.granularityId).to.be("");
              expect(data.payload.inventorySummaries).to.be.a(SellingPartnerApiForFbaInventory.InventorySummaries);
      
            expect(data.pagination).to.be.a(SellingPartnerApiForFbaInventory.Pagination);
                  expect(data.pagination.nextToken).to.be.a('string');
              // expect(data.pagination.nextToken).to.be("");
            expect(data.errors).to.be.a(SellingPartnerApiForFbaInventory.ErrorList);
    
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