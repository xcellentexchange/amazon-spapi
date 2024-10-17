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
    describe('ConfirmShipmentRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForOrders.ConfirmShipmentRequest();
      });

      it('should create an instance of ConfirmShipmentRequest', function() {
        // TODO: update the code to test ConfirmShipmentRequest
        expect(instance).to.be.a(SellingPartnerApiForOrders.ConfirmShipmentRequest);
      });

      it('should have the property packageDetail (base name: "packageDetail")', function() {
        // TODO: update the code to test the property packageDetail
        expect(instance).to.have.property('packageDetail');
        // expect(instance.packageDetail).to.be(expectedValueLiteral);
      });

      it('should have the property codCollectionMethod (base name: "codCollectionMethod")', function() {
        // TODO: update the code to test the property codCollectionMethod
        expect(instance).to.have.property('codCollectionMethod');
        // expect(instance.codCollectionMethod).to.be(expectedValueLiteral);
      });

      it('should have the property marketplaceId (base name: "marketplaceId")', function() {
        // TODO: update the code to test the property marketplaceId
        expect(instance).to.have.property('marketplaceId');
        // expect(instance.marketplaceId).to.be(expectedValueLiteral);
      });

    });
  });

}));