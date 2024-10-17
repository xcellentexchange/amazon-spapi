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
    describe('AggregationTimePeriod', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForNotifications.AggregationTimePeriod;
      });

      it('should create an instance of AggregationTimePeriod', function() {
        // TODO: update the code to test AggregationTimePeriod
        expect(instance).to.be.a('object');
      });

      it('should have the property fiveMinutes', function() {
        expect(instance).to.have.property('fiveMinutes');
        expect(instance.fiveMinutes).to.be("FiveMinutes");
      });

      it('should have the property tenMinutes', function() {
        expect(instance).to.have.property('tenMinutes');
        expect(instance.tenMinutes).to.be("TenMinutes");
      });

    });
  });

}));
