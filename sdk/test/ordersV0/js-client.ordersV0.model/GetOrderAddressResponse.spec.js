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
    describe('GetOrderAddressResponse', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForOrders.GetOrderAddressResponse();
      });

      it('should create an instance of GetOrderAddressResponse', function() {
        // TODO: update the code to test GetOrderAddressResponse
        expect(instance).to.be.a(SellingPartnerApiForOrders.GetOrderAddressResponse);
      });

      it('should have the property payload (base name: "payload")', function() {
        // TODO: update the code to test the property payload
        expect(instance).to.have.property('payload');
        // expect(instance.payload).to.be(expectedValueLiteral);
      });

      it('should have the property errors (base name: "errors")', function() {
        // TODO: update the code to test the property errors
        expect(instance).to.have.property('errors');
        // expect(instance.errors).to.be(expectedValueLiteral);
      });

    });
  });

}));
