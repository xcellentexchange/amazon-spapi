/*
 * Selling Partner API for Messaging
 * With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
    define(['expect.js', '../../../src/messaging/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/messaging/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForMessaging);
  }
}(this, function(expect, SellingPartnerApiForMessaging) {
  'use strict';

  var instance;

  describe('messaging', function() {
    describe('CreateWarrantyRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForMessaging.CreateWarrantyRequest();
      });

      it('should create an instance of CreateWarrantyRequest', function() {
        // TODO: update the code to test CreateWarrantyRequest
        expect(instance).to.be.a(SellingPartnerApiForMessaging.CreateWarrantyRequest);
      });

      it('should have the property attachments (base name: "attachments")', function() {
        // TODO: update the code to test the property attachments
        expect(instance).to.have.property('attachments');
        // expect(instance.attachments).to.be(expectedValueLiteral);
      });

      it('should have the property coverageStartDate (base name: "coverageStartDate")', function() {
        // TODO: update the code to test the property coverageStartDate
        expect(instance).to.have.property('coverageStartDate');
        // expect(instance.coverageStartDate).to.be(expectedValueLiteral);
      });

      it('should have the property coverageEndDate (base name: "coverageEndDate")', function() {
        // TODO: update the code to test the property coverageEndDate
        expect(instance).to.have.property('coverageEndDate');
        // expect(instance.coverageEndDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
