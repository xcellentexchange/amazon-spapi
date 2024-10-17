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
    describe('ResearchingQuantity', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFbaInventory.ResearchingQuantity();
      });

      it('should create an instance of ResearchingQuantity', function() {
        // TODO: update the code to test ResearchingQuantity
        expect(instance).to.be.a(SellingPartnerApiForFbaInventory.ResearchingQuantity);
      });

      it('should have the property totalResearchingQuantity (base name: "totalResearchingQuantity")', function() {
        // TODO: update the code to test the property totalResearchingQuantity
        expect(instance).to.have.property('totalResearchingQuantity');
        // expect(instance.totalResearchingQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property researchingQuantityBreakdown (base name: "researchingQuantityBreakdown")', function() {
        // TODO: update the code to test the property researchingQuantityBreakdown
        expect(instance).to.have.property('researchingQuantityBreakdown');
        // expect(instance.researchingQuantityBreakdown).to.be(expectedValueLiteral);
      });

    });
  });

}));