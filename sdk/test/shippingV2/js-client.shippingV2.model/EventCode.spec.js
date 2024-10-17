/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
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
    define(['expect.js', '../../../src/shippingV2/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/shippingV2/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AmazonShippingApi);
  }
}(this, function(expect, AmazonShippingApi) {
  'use strict';

  var instance;

  describe('shippingV2', function() {
    describe('EventCode', function() {
      beforeEach(function() {
        instance = AmazonShippingApi.EventCode;
      });

      it('should create an instance of EventCode', function() {
        // TODO: update the code to test EventCode
        expect(instance).to.be.a('object');
      });

      it('should have the property readyForReceive', function() {
        expect(instance).to.have.property('readyForReceive');
        expect(instance.readyForReceive).to.be("ReadyForReceive");
      });

      it('should have the property pickupDone', function() {
        expect(instance).to.have.property('pickupDone');
        expect(instance.pickupDone).to.be("PickupDone");
      });

      it('should have the property delivered', function() {
        expect(instance).to.have.property('delivered');
        expect(instance.delivered).to.be("Delivered");
      });

      it('should have the property departed', function() {
        expect(instance).to.have.property('departed');
        expect(instance.departed).to.be("Departed");
      });

      it('should have the property deliveryAttempted', function() {
        expect(instance).to.have.property('deliveryAttempted');
        expect(instance.deliveryAttempted).to.be("DeliveryAttempted");
      });

      it('should have the property lost', function() {
        expect(instance).to.have.property('lost');
        expect(instance.lost).to.be("Lost");
      });

      it('should have the property outForDelivery', function() {
        expect(instance).to.have.property('outForDelivery');
        expect(instance.outForDelivery).to.be("OutForDelivery");
      });

      it('should have the property arrivedAtCarrierFacility', function() {
        expect(instance).to.have.property('arrivedAtCarrierFacility');
        expect(instance.arrivedAtCarrierFacility).to.be("ArrivedAtCarrierFacility");
      });

      it('should have the property rejected', function() {
        expect(instance).to.have.property('rejected');
        expect(instance.rejected).to.be("Rejected");
      });

      it('should have the property undeliverable', function() {
        expect(instance).to.have.property('undeliverable');
        expect(instance.undeliverable).to.be("Undeliverable");
      });

      it('should have the property pickupCancelled', function() {
        expect(instance).to.have.property('pickupCancelled');
        expect(instance.pickupCancelled).to.be("PickupCancelled");
      });

    });
  });

}));