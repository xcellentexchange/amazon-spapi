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
    describe('CreateReturnItem', function() {
      beforeEach(function() {
        instance = new SellingPartnerApisForFulfillmentOutbound.CreateReturnItem();
      });

      it('should create an instance of CreateReturnItem', function() {
        // TODO: update the code to test CreateReturnItem
        expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.CreateReturnItem);
      });

      it('should have the property sellerReturnItemId (base name: "sellerReturnItemId")', function() {
        // TODO: update the code to test the property sellerReturnItemId
        expect(instance).to.have.property('sellerReturnItemId');
        // expect(instance.sellerReturnItemId).to.be(expectedValueLiteral);
      });

      it('should have the property sellerFulfillmentOrderItemId (base name: "sellerFulfillmentOrderItemId")', function() {
        // TODO: update the code to test the property sellerFulfillmentOrderItemId
        expect(instance).to.have.property('sellerFulfillmentOrderItemId');
        // expect(instance.sellerFulfillmentOrderItemId).to.be(expectedValueLiteral);
      });

      it('should have the property amazonShipmentId (base name: "amazonShipmentId")', function() {
        // TODO: update the code to test the property amazonShipmentId
        expect(instance).to.have.property('amazonShipmentId');
        // expect(instance.amazonShipmentId).to.be(expectedValueLiteral);
      });

      it('should have the property returnReasonCode (base name: "returnReasonCode")', function() {
        // TODO: update the code to test the property returnReasonCode
        expect(instance).to.have.property('returnReasonCode');
        // expect(instance.returnReasonCode).to.be(expectedValueLiteral);
      });

      it('should have the property returnComment (base name: "returnComment")', function() {
        // TODO: update the code to test the property returnComment
        expect(instance).to.have.property('returnComment');
        // expect(instance.returnComment).to.be(expectedValueLiteral);
      });

    });
  });

}));
