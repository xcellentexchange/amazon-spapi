/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
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
    define(['expect.js', '../../../src/vendorDirectFulfillmentOrdersV1/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorDirectFulfillmentOrdersV1/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentOrders);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentOrders) {
  'use strict';

  var instance;

  describe('vendorDirectFulfillmentOrdersV1', function() {
    describe('OrderAcknowledgementItem', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentOrders.OrderAcknowledgementItem();
      });

      it('should create an instance of OrderAcknowledgementItem', function() {
        // TODO: update the code to test OrderAcknowledgementItem
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentOrders.OrderAcknowledgementItem);
      });

      it('should have the property purchaseOrderNumber (base name: "purchaseOrderNumber")', function() {
        // TODO: update the code to test the property purchaseOrderNumber
        expect(instance).to.have.property('purchaseOrderNumber');
        // expect(instance.purchaseOrderNumber).to.be(expectedValueLiteral);
      });

      it('should have the property vendorOrderNumber (base name: "vendorOrderNumber")', function() {
        // TODO: update the code to test the property vendorOrderNumber
        expect(instance).to.have.property('vendorOrderNumber');
        // expect(instance.vendorOrderNumber).to.be(expectedValueLiteral);
      });

      it('should have the property acknowledgementDate (base name: "acknowledgementDate")', function() {
        // TODO: update the code to test the property acknowledgementDate
        expect(instance).to.have.property('acknowledgementDate');
        // expect(instance.acknowledgementDate).to.be(expectedValueLiteral);
      });

      it('should have the property acknowledgementStatus (base name: "acknowledgementStatus")', function() {
        // TODO: update the code to test the property acknowledgementStatus
        expect(instance).to.have.property('acknowledgementStatus');
        // expect(instance.acknowledgementStatus).to.be(expectedValueLiteral);
      });

      it('should have the property sellingParty (base name: "sellingParty")', function() {
        // TODO: update the code to test the property sellingParty
        expect(instance).to.have.property('sellingParty');
        // expect(instance.sellingParty).to.be(expectedValueLiteral);
      });

      it('should have the property shipFromParty (base name: "shipFromParty")', function() {
        // TODO: update the code to test the property shipFromParty
        expect(instance).to.have.property('shipFromParty');
        // expect(instance.shipFromParty).to.be(expectedValueLiteral);
      });

      it('should have the property itemAcknowledgements (base name: "itemAcknowledgements")', function() {
        // TODO: update the code to test the property itemAcknowledgements
        expect(instance).to.have.property('itemAcknowledgements');
        // expect(instance.itemAcknowledgements).to.be(expectedValueLiteral);
      });

    });
  });

}));
