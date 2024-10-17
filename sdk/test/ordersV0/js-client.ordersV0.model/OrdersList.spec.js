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
    describe('OrdersList', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForOrders.OrdersList();
      });

      it('should create an instance of OrdersList', function() {
        // TODO: update the code to test OrdersList
        expect(instance).to.be.a(SellingPartnerApiForOrders.OrdersList);
      });

      it('should have the property orders (base name: "Orders")', function() {
        // TODO: update the code to test the property orders
        expect(instance).to.have.property('orders');
        // expect(instance.orders).to.be(expectedValueLiteral);
      });

      it('should have the property nextToken (base name: "NextToken")', function() {
        // TODO: update the code to test the property nextToken
        expect(instance).to.have.property('nextToken');
        // expect(instance.nextToken).to.be(expectedValueLiteral);
      });

      it('should have the property lastUpdatedBefore (base name: "LastUpdatedBefore")', function() {
        // TODO: update the code to test the property lastUpdatedBefore
        expect(instance).to.have.property('lastUpdatedBefore');
        // expect(instance.lastUpdatedBefore).to.be(expectedValueLiteral);
      });

      it('should have the property createdBefore (base name: "CreatedBefore")', function() {
        // TODO: update the code to test the property createdBefore
        expect(instance).to.have.property('createdBefore');
        // expect(instance.createdBefore).to.be(expectedValueLiteral);
      });

    });
  });

}));
