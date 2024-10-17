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

  describe('fbaInventory', function() {
    describe('InventorySummary', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFbaInventory.InventorySummary();
      });

      it('should create an instance of InventorySummary', function() {
        // TODO: update the code to test InventorySummary
        expect(instance).to.be.a(SellingPartnerApiForFbaInventory.InventorySummary);
      });

      it('should have the property asin (base name: "asin")', function() {
        // TODO: update the code to test the property asin
        expect(instance).to.have.property('asin');
        // expect(instance.asin).to.be(expectedValueLiteral);
      });

      it('should have the property fnSku (base name: "fnSku")', function() {
        // TODO: update the code to test the property fnSku
        expect(instance).to.have.property('fnSku');
        // expect(instance.fnSku).to.be(expectedValueLiteral);
      });

      it('should have the property sellerSku (base name: "sellerSku")', function() {
        // TODO: update the code to test the property sellerSku
        expect(instance).to.have.property('sellerSku');
        // expect(instance.sellerSku).to.be(expectedValueLiteral);
      });

      it('should have the property condition (base name: "condition")', function() {
        // TODO: update the code to test the property condition
        expect(instance).to.have.property('condition');
        // expect(instance.condition).to.be(expectedValueLiteral);
      });

      it('should have the property inventoryDetails (base name: "inventoryDetails")', function() {
        // TODO: update the code to test the property inventoryDetails
        expect(instance).to.have.property('inventoryDetails');
        // expect(instance.inventoryDetails).to.be(expectedValueLiteral);
      });

      it('should have the property lastUpdatedTime (base name: "lastUpdatedTime")', function() {
        // TODO: update the code to test the property lastUpdatedTime
        expect(instance).to.have.property('lastUpdatedTime');
        // expect(instance.lastUpdatedTime).to.be(expectedValueLiteral);
      });

      it('should have the property productName (base name: "productName")', function() {
        // TODO: update the code to test the property productName
        expect(instance).to.have.property('productName');
        // expect(instance.productName).to.be(expectedValueLiteral);
      });

      it('should have the property totalQuantity (base name: "totalQuantity")', function() {
        // TODO: update the code to test the property totalQuantity
        expect(instance).to.have.property('totalQuantity');
        // expect(instance.totalQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property stores (base name: "stores")', function() {
        // TODO: update the code to test the property stores
        expect(instance).to.have.property('stores');
        // expect(instance.stores).to.be(expectedValueLiteral);
      });

    });
  });

}));