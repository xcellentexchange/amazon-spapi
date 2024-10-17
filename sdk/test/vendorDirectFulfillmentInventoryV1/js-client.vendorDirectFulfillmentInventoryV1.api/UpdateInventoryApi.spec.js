/*
 * Selling Partner API for Direct Fulfillment Inventory Updates
 * The Selling Partner API for Direct Fulfillment Inventory Updates provides programmatic access to a direct fulfillment vendor's inventory updates.
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
    define(['expect.js', '../../../src/vendorDirectFulfillmentInventoryV1/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorDirectFulfillmentInventoryV1/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentInventoryUpdates);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentInventoryUpdates) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForDirectFulfillmentInventoryUpdates.UpdateInventoryApi();
  });

  describe('vendorDirectFulfillmentInventoryV1', function() {
    describe('UpdateInventoryApi', function() {
      describe('submitInventoryUpdate', function() {
        it('should call submitInventoryUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for submitInventoryUpdate call and complete the assertions
          /*
          var body = new SellingPartnerApiForDirectFulfillmentInventoryUpdates.SubmitInventoryUpdateRequest();
          body.inventory = new SellingPartnerApiForDirectFulfillmentInventoryUpdates.InventoryUpdate();
          body.inventory.sellingParty = new SellingPartnerApiForDirectFulfillmentInventoryUpdates.PartyIdentification();
          body.inventory.sellingParty.partyId = "";
          body.inventory.isFullUpdate = false;
          body.inventory.items = [new SellingPartnerApiForDirectFulfillmentInventoryUpdates.ItemDetails()];
          body.inventory.items[0].buyerProductIdentifier = "";
          body.inventory.items[0].vendorProductIdentifier = "";
          body.inventory.items[0].availableQuantity = new SellingPartnerApiForDirectFulfillmentInventoryUpdates.ItemQuantity();
          body.inventory.items[0].availableQuantity.amount = 0;
          body.inventory.items[0].availableQuantity.unitOfMeasure = "";
          body.inventory.items[0].isObsolete = false;
          var warehouseId = "warehouseId_example";

          instance.submitInventoryUpdate(body, warehouseId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForDirectFulfillmentInventoryUpdates.SubmitInventoryUpdateResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForDirectFulfillmentInventoryUpdates.TransactionReference);
                  expect(data.payload.transactionId).to.be.a('string');
              // expect(data.payload.transactionId).to.be("");
            expect(data.errors).to.be.a(SellingPartnerApiForDirectFulfillmentInventoryUpdates.ErrorList);
    
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