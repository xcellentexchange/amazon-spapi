/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
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
    define(['expect.js', '../../../src/fulfillmentOutbound_2020-07-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentOutbound_2020-07-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApisForFulfillmentOutbound);
  }
}(this, function(expect, SellingPartnerApisForFulfillmentOutbound) {
  'use strict';

  var instance;

  describe('fulfillmentOutbound_2020-07-01', function() {
    describe('UpdateFulfillmentOrderItem', function() {
      beforeEach(function() {
        instance = new SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderItem();
      });

      it('should create an instance of UpdateFulfillmentOrderItem', function() {
        // TODO: update the code to test UpdateFulfillmentOrderItem
        expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderItem);
      });

      it('should have the property sellerSku (base name: "sellerSku")', function() {
        // TODO: update the code to test the property sellerSku
        expect(instance).to.have.property('sellerSku');
        // expect(instance.sellerSku).to.be(expectedValueLiteral);
      });

      it('should have the property sellerFulfillmentOrderItemId (base name: "sellerFulfillmentOrderItemId")', function() {
        // TODO: update the code to test the property sellerFulfillmentOrderItemId
        expect(instance).to.have.property('sellerFulfillmentOrderItemId');
        // expect(instance.sellerFulfillmentOrderItemId).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property giftMessage (base name: "giftMessage")', function() {
        // TODO: update the code to test the property giftMessage
        expect(instance).to.have.property('giftMessage');
        // expect(instance.giftMessage).to.be(expectedValueLiteral);
      });

      it('should have the property displayableComment (base name: "displayableComment")', function() {
        // TODO: update the code to test the property displayableComment
        expect(instance).to.have.property('displayableComment');
        // expect(instance.displayableComment).to.be(expectedValueLiteral);
      });

      it('should have the property fulfillmentNetworkSku (base name: "fulfillmentNetworkSku")', function() {
        // TODO: update the code to test the property fulfillmentNetworkSku
        expect(instance).to.have.property('fulfillmentNetworkSku');
        // expect(instance.fulfillmentNetworkSku).to.be(expectedValueLiteral);
      });

      it('should have the property orderItemDisposition (base name: "orderItemDisposition")', function() {
        // TODO: update the code to test the property orderItemDisposition
        expect(instance).to.have.property('orderItemDisposition');
        // expect(instance.orderItemDisposition).to.be(expectedValueLiteral);
      });

      it('should have the property perUnitDeclaredValue (base name: "perUnitDeclaredValue")', function() {
        // TODO: update the code to test the property perUnitDeclaredValue
        expect(instance).to.have.property('perUnitDeclaredValue');
        // expect(instance.perUnitDeclaredValue).to.be(expectedValueLiteral);
      });

      it('should have the property perUnitPrice (base name: "perUnitPrice")', function() {
        // TODO: update the code to test the property perUnitPrice
        expect(instance).to.have.property('perUnitPrice');
        // expect(instance.perUnitPrice).to.be(expectedValueLiteral);
      });

      it('should have the property perUnitTax (base name: "perUnitTax")', function() {
        // TODO: update the code to test the property perUnitTax
        expect(instance).to.have.property('perUnitTax');
        // expect(instance.perUnitTax).to.be(expectedValueLiteral);
      });

    });
  });

}));
