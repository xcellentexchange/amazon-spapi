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
    describe('RemovalShipmentEvent', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFinances.RemovalShipmentEvent();
      });

      it('should create an instance of RemovalShipmentEvent', function() {
        // TODO: update the code to test RemovalShipmentEvent
        expect(instance).to.be.a(SellingPartnerApiForFinances.RemovalShipmentEvent);
      });

      it('should have the property postedDate (base name: "PostedDate")', function() {
        // TODO: update the code to test the property postedDate
        expect(instance).to.have.property('postedDate');
        // expect(instance.postedDate).to.be(expectedValueLiteral);
      });

      it('should have the property merchantOrderId (base name: "MerchantOrderId")', function() {
        // TODO: update the code to test the property merchantOrderId
        expect(instance).to.have.property('merchantOrderId');
        // expect(instance.merchantOrderId).to.be(expectedValueLiteral);
      });

      it('should have the property orderId (base name: "OrderId")', function() {
        // TODO: update the code to test the property orderId
        expect(instance).to.have.property('orderId');
        // expect(instance.orderId).to.be(expectedValueLiteral);
      });

      it('should have the property transactionType (base name: "TransactionType")', function() {
        // TODO: update the code to test the property transactionType
        expect(instance).to.have.property('transactionType');
        // expect(instance.transactionType).to.be(expectedValueLiteral);
      });

      it('should have the property storeName (base name: "StoreName")', function() {
        // TODO: update the code to test the property storeName
        expect(instance).to.have.property('storeName');
        // expect(instance.storeName).to.be(expectedValueLiteral);
      });

      it('should have the property removalShipmentItemList (base name: "RemovalShipmentItemList")', function() {
        // TODO: update the code to test the property removalShipmentItemList
        expect(instance).to.have.property('removalShipmentItemList');
        // expect(instance.removalShipmentItemList).to.be(expectedValueLiteral);
      });

    });
  });

}));
