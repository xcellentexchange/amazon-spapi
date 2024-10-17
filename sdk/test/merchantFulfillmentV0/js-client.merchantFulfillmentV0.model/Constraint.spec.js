/*
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
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
    define(['expect.js', '../../../src/merchantFulfillmentV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/merchantFulfillmentV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForMerchantFulfillment);
  }
}(this, function(expect, SellingPartnerApiForMerchantFulfillment) {
  'use strict';

  var instance;

  describe('merchantFulfillmentV0', function() {
    describe('Constraint', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForMerchantFulfillment.Constraint();
      });

      it('should create an instance of Constraint', function() {
        // TODO: update the code to test Constraint
        expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.Constraint);
      });

      it('should have the property validationRegEx (base name: "ValidationRegEx")', function() {
        // TODO: update the code to test the property validationRegEx
        expect(instance).to.have.property('validationRegEx');
        // expect(instance.validationRegEx).to.be(expectedValueLiteral);
      });

      it('should have the property validationString (base name: "ValidationString")', function() {
        // TODO: update the code to test the property validationString
        expect(instance).to.have.property('validationString');
        // expect(instance.validationString).to.be(expectedValueLiteral);
      });

    });
  });

}));
