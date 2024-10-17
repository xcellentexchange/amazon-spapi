/*
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
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
    define(['expect.js', '../../../src/vendorDirectFulfillmentShipping_2021-12-28/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorDirectFulfillmentShipping_2021-12-28/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentShipping);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentShipping) {
  'use strict';

  var instance;

  describe('vendorDirectFulfillmentShipping_2021-12-28', function() {
    describe('Pagination', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentShipping.Pagination();
      });

      it('should create an instance of Pagination', function() {
        // TODO: update the code to test Pagination
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.Pagination);
      });

      it('should have the property nextToken (base name: "nextToken")', function() {
        // TODO: update the code to test the property nextToken
        expect(instance).to.have.property('nextToken');
        // expect(instance.nextToken).to.be(expectedValueLiteral);
      });

    });
  });

}));
