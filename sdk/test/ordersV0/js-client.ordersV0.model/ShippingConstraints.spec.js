/*
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
    define(['expect.js', '../../../src/ordersV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/ordersV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForOrders);
  }
}(this, function(expect, SellingPartnerApiForOrders) {
  'use strict';

  var instance;

  describe('ordersV0', function() {
    describe('ShippingConstraints', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForOrders.ShippingConstraints();
      });

      it('should create an instance of ShippingConstraints', function() {
        // TODO: update the code to test ShippingConstraints
        expect(instance).to.be.a(SellingPartnerApiForOrders.ShippingConstraints);
      });

      it('should have the property palletDelivery (base name: "PalletDelivery")', function() {
        // TODO: update the code to test the property palletDelivery
        expect(instance).to.have.property('palletDelivery');
        // expect(instance.palletDelivery).to.be(expectedValueLiteral);
      });

      it('should have the property signatureConfirmation (base name: "SignatureConfirmation")', function() {
        // TODO: update the code to test the property signatureConfirmation
        expect(instance).to.have.property('signatureConfirmation');
        // expect(instance.signatureConfirmation).to.be(expectedValueLiteral);
      });

      it('should have the property recipientIdentityVerification (base name: "RecipientIdentityVerification")', function() {
        // TODO: update the code to test the property recipientIdentityVerification
        expect(instance).to.have.property('recipientIdentityVerification');
        // expect(instance.recipientIdentityVerification).to.be(expectedValueLiteral);
      });

      it('should have the property recipientAgeVerification (base name: "RecipientAgeVerification")', function() {
        // TODO: update the code to test the property recipientAgeVerification
        expect(instance).to.have.property('recipientAgeVerification');
        // expect(instance.recipientAgeVerification).to.be(expectedValueLiteral);
      });

    });
  });

}));