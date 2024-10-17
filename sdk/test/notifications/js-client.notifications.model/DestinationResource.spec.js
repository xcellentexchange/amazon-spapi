/*
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
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
    define(['expect.js', '../../../src/notifications/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/notifications/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForNotifications);
  }
}(this, function(expect, SellingPartnerApiForNotifications) {
  'use strict';

  var instance;

  describe('notifications', function() {
    describe('DestinationResource', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForNotifications.DestinationResource();
      });

      it('should create an instance of DestinationResource', function() {
        // TODO: update the code to test DestinationResource
        expect(instance).to.be.a(SellingPartnerApiForNotifications.DestinationResource);
      });

      it('should have the property sqs (base name: "sqs")', function() {
        // TODO: update the code to test the property sqs
        expect(instance).to.have.property('sqs');
        // expect(instance.sqs).to.be(expectedValueLiteral);
      });

      it('should have the property eventBridge (base name: "eventBridge")', function() {
        // TODO: update the code to test the property eventBridge
        expect(instance).to.have.property('eventBridge');
        // expect(instance.eventBridge).to.be(expectedValueLiteral);
      });

    });
  });

}));