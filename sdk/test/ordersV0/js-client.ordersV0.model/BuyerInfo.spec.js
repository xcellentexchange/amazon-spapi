/*
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
    define(['expect.js', '../../../src/ordersV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/ordersV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForOrders);
  }
}(this, function(expect, SellingPartnerApiForOrders) {
  'use strict';

  var instance;

  describe('ordersV0', function() {
    describe('BuyerInfo', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForOrders.BuyerInfo();
      });

      it('should create an instance of BuyerInfo', function() {
        // TODO: update the code to test BuyerInfo
        expect(instance).to.be.a(SellingPartnerApiForOrders.BuyerInfo);
      });

      it('should have the property buyerEmail (base name: "BuyerEmail")', function() {
        // TODO: update the code to test the property buyerEmail
        expect(instance).to.have.property('buyerEmail');
        // expect(instance.buyerEmail).to.be(expectedValueLiteral);
      });

      it('should have the property buyerName (base name: "BuyerName")', function() {
        // TODO: update the code to test the property buyerName
        expect(instance).to.have.property('buyerName');
        // expect(instance.buyerName).to.be(expectedValueLiteral);
      });

      it('should have the property buyerCounty (base name: "BuyerCounty")', function() {
        // TODO: update the code to test the property buyerCounty
        expect(instance).to.have.property('buyerCounty');
        // expect(instance.buyerCounty).to.be(expectedValueLiteral);
      });

      it('should have the property buyerTaxInfo (base name: "BuyerTaxInfo")', function() {
        // TODO: update the code to test the property buyerTaxInfo
        expect(instance).to.have.property('buyerTaxInfo');
        // expect(instance.buyerTaxInfo).to.be(expectedValueLiteral);
      });

      it('should have the property purchaseOrderNumber (base name: "PurchaseOrderNumber")', function() {
        // TODO: update the code to test the property purchaseOrderNumber
        expect(instance).to.have.property('purchaseOrderNumber');
        // expect(instance.purchaseOrderNumber).to.be(expectedValueLiteral);
      });

    });
  });

}));
