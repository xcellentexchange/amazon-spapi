/*
 * Selling Partner API for Direct Fulfillment Transaction Status
 * The Selling Partner API for Direct Fulfillment Transaction Status provides programmatic access to a direct fulfillment vendor's transaction status.
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
    define(['expect.js', '../../../src/vendorDirectFulfillmentTransactionsV1/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorDirectFulfillmentTransactionsV1/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentTransactionStatus);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentTransactionStatus) {
  'use strict';

  var instance;

  describe('vendorDirectFulfillmentTransactionsV1', function() {
    describe('GetTransactionResponse', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentTransactionStatus.GetTransactionResponse();
      });

      it('should create an instance of GetTransactionResponse', function() {
        // TODO: update the code to test GetTransactionResponse
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentTransactionStatus.GetTransactionResponse);
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