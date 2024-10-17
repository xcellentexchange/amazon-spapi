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
    describe('Event', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForShipping.Event();
      });

      it('should create an instance of Event', function() {
        // TODO: update the code to test Event
        expect(instance).to.be.a(SellingPartnerApiForShipping.Event);
      });

      it('should have the property eventCode (base name: "eventCode")', function() {
        // TODO: update the code to test the property eventCode
        expect(instance).to.have.property('eventCode');
        // expect(instance.eventCode).to.be(expectedValueLiteral);
      });

      it('should have the property eventTime (base name: "eventTime")', function() {
        // TODO: update the code to test the property eventTime
        expect(instance).to.have.property('eventTime');
        // expect(instance.eventTime).to.be(expectedValueLiteral);
      });

      it('should have the property location (base name: "location")', function() {
        // TODO: update the code to test the property location
        expect(instance).to.have.property('location');
        // expect(instance.location).to.be(expectedValueLiteral);
      });

    });
  });

}));
