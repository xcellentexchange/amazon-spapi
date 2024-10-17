/*
 * Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information that is relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range. 
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
    define(['expect.js', '../../../src/financesV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/financesV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFinances);
  }
}(this, function(expect, SellingPartnerApiForFinances) {
  'use strict';

  var instance;

  describe('financesV0', function() {
    describe('RemovalShipmentItemAdjustment', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFinances.RemovalShipmentItemAdjustment();
      });

      it('should create an instance of RemovalShipmentItemAdjustment', function() {
        // TODO: update the code to test RemovalShipmentItemAdjustment
        expect(instance).to.be.a(SellingPartnerApiForFinances.RemovalShipmentItemAdjustment);
      });

      it('should have the property removalShipmentItemId (base name: "RemovalShipmentItemId")', function() {
        // TODO: update the code to test the property removalShipmentItemId
        expect(instance).to.have.property('removalShipmentItemId');
        // expect(instance.removalShipmentItemId).to.be(expectedValueLiteral);
      });

      it('should have the property taxCollectionModel (base name: "TaxCollectionModel")', function() {
        // TODO: update the code to test the property taxCollectionModel
        expect(instance).to.have.property('taxCollectionModel');
        // expect(instance.taxCollectionModel).to.be(expectedValueLiteral);
      });

      it('should have the property fulfillmentNetworkSKU (base name: "FulfillmentNetworkSKU")', function() {
        // TODO: update the code to test the property fulfillmentNetworkSKU
        expect(instance).to.have.property('fulfillmentNetworkSKU');
        // expect(instance.fulfillmentNetworkSKU).to.be(expectedValueLiteral);
      });

      it('should have the property adjustedQuantity (base name: "AdjustedQuantity")', function() {
        // TODO: update the code to test the property adjustedQuantity
        expect(instance).to.have.property('adjustedQuantity');
        // expect(instance.adjustedQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property revenueAdjustment (base name: "RevenueAdjustment")', function() {
        // TODO: update the code to test the property revenueAdjustment
        expect(instance).to.have.property('revenueAdjustment');
        // expect(instance.revenueAdjustment).to.be(expectedValueLiteral);
      });

      it('should have the property taxAmountAdjustment (base name: "TaxAmountAdjustment")', function() {
        // TODO: update the code to test the property taxAmountAdjustment
        expect(instance).to.have.property('taxAmountAdjustment');
        // expect(instance.taxAmountAdjustment).to.be(expectedValueLiteral);
      });

      it('should have the property taxWithheldAdjustment (base name: "TaxWithheldAdjustment")', function() {
        // TODO: update the code to test the property taxWithheldAdjustment
        expect(instance).to.have.property('taxWithheldAdjustment');
        // expect(instance.taxWithheldAdjustment).to.be(expectedValueLiteral);
      });

    });
  });

}));