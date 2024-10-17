/*
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
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
    define(['expect.js', '../../../src/shipping/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/shipping/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForShipping);
  }
}(this, function(expect, SellingPartnerApiForShipping) {
  'use strict';

  var instance;

  describe('shipping', function() {
    describe('AcceptedRate', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForShipping.AcceptedRate();
      });

      it('should create an instance of AcceptedRate', function() {
        // TODO: update the code to test AcceptedRate
        expect(instance).to.be.a(SellingPartnerApiForShipping.AcceptedRate);
      });

      it('should have the property totalCharge (base name: "totalCharge")', function() {
        // TODO: update the code to test the property totalCharge
        expect(instance).to.have.property('totalCharge');
        // expect(instance.totalCharge).to.be(expectedValueLiteral);
      });

      it('should have the property billedWeight (base name: "billedWeight")', function() {
        // TODO: update the code to test the property billedWeight
        expect(instance).to.have.property('billedWeight');
        // expect(instance.billedWeight).to.be(expectedValueLiteral);
      });

      it('should have the property serviceType (base name: "serviceType")', function() {
        // TODO: update the code to test the property serviceType
        expect(instance).to.have.property('serviceType');
        // expect(instance.serviceType).to.be(expectedValueLiteral);
      });

      it('should have the property promise (base name: "promise")', function() {
        // TODO: update the code to test the property promise
        expect(instance).to.have.property('promise');
        // expect(instance.promise).to.be(expectedValueLiteral);
      });

    });
  });

}));
