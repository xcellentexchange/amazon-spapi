/*
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * OpenAPI spec version: 2022-11-07
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
    define(['expect.js', '../../../src/replenishment-2022-11-07/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/replenishment-2022-11-07/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForReplenishment);
  }
}(this, function(expect, SellingPartnerApiForReplenishment) {
  'use strict';

  var instance;

  describe('replenishment-2022-11-07', function() {
    describe('GetSellingPartnerMetricsResponseMetric', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      });

      it('should create an instance of GetSellingPartnerMetricsResponseMetric', function() {
        // TODO: update the code to test GetSellingPartnerMetricsResponseMetric
        expect(instance).to.be.a(SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric);
      });

      it('should have the property notDeliveredDueToOOS (base name: "notDeliveredDueToOOS")', function() {
        // TODO: update the code to test the property notDeliveredDueToOOS
        expect(instance).to.have.property('notDeliveredDueToOOS');
        // expect(instance.notDeliveredDueToOOS).to.be(expectedValueLiteral);
      });

      it('should have the property totalSubscriptionsRevenue (base name: "totalSubscriptionsRevenue")', function() {
        // TODO: update the code to test the property totalSubscriptionsRevenue
        expect(instance).to.have.property('totalSubscriptionsRevenue');
        // expect(instance.totalSubscriptionsRevenue).to.be(expectedValueLiteral);
      });

      it('should have the property shippedSubscriptionUnits (base name: "shippedSubscriptionUnits")', function() {
        // TODO: update the code to test the property shippedSubscriptionUnits
        expect(instance).to.have.property('shippedSubscriptionUnits');
        // expect(instance.shippedSubscriptionUnits).to.be(expectedValueLiteral);
      });

      it('should have the property activeSubscriptions (base name: "activeSubscriptions")', function() {
        // TODO: update the code to test the property activeSubscriptions
        expect(instance).to.have.property('activeSubscriptions');
        // expect(instance.activeSubscriptions).to.be(expectedValueLiteral);
      });

      it('should have the property subscriberAverageRevenue (base name: "subscriberAverageRevenue")', function() {
        // TODO: update the code to test the property subscriberAverageRevenue
        expect(instance).to.have.property('subscriberAverageRevenue');
        // expect(instance.subscriberAverageRevenue).to.be(expectedValueLiteral);
      });

      it('should have the property nonSubscriberAverageRevenue (base name: "nonSubscriberAverageRevenue")', function() {
        // TODO: update the code to test the property nonSubscriberAverageRevenue
        expect(instance).to.have.property('nonSubscriberAverageRevenue');
        // expect(instance.nonSubscriberAverageRevenue).to.be(expectedValueLiteral);
      });

      it('should have the property lostRevenueDueToOOS (base name: "lostRevenueDueToOOS")', function() {
        // TODO: update the code to test the property lostRevenueDueToOOS
        expect(instance).to.have.property('lostRevenueDueToOOS');
        // expect(instance.lostRevenueDueToOOS).to.be(expectedValueLiteral);
      });

      it('should have the property subscriberAverageReorders (base name: "subscriberAverageReorders")', function() {
        // TODO: update the code to test the property subscriberAverageReorders
        expect(instance).to.have.property('subscriberAverageReorders');
        // expect(instance.subscriberAverageReorders).to.be(expectedValueLiteral);
      });

      it('should have the property nonSubscriberAverageReorders (base name: "nonSubscriberAverageReorders")', function() {
        // TODO: update the code to test the property nonSubscriberAverageReorders
        expect(instance).to.have.property('nonSubscriberAverageReorders');
        // expect(instance.nonSubscriberAverageReorders).to.be(expectedValueLiteral);
      });

      it('should have the property couponsRevenuePenetration (base name: "couponsRevenuePenetration")', function() {
        // TODO: update the code to test the property couponsRevenuePenetration
        expect(instance).to.have.property('couponsRevenuePenetration');
        // expect(instance.couponsRevenuePenetration).to.be(expectedValueLiteral);
      });

      it('should have the property timeInterval (base name: "timeInterval")', function() {
        // TODO: update the code to test the property timeInterval
        expect(instance).to.have.property('timeInterval');
        // expect(instance.timeInterval).to.be(expectedValueLiteral);
      });

      it('should have the property currencyCode (base name: "currencyCode")', function() {
        // TODO: update the code to test the property currencyCode
        expect(instance).to.have.property('currencyCode');
        // expect(instance.currencyCode).to.be(expectedValueLiteral);
      });

    });
  });

}));
