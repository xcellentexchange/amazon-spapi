/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
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
    define(['expect.js', '../../../src/fulfillmentOutbound_2020-07-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentOutbound_2020-07-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApisForFulfillmentOutbound);
  }
}(this, function(expect, SellingPartnerApisForFulfillmentOutbound) {
  'use strict';

  var instance;

  describe('fulfillmentOutbound_2020-07-01', function() {
    describe('GetFulfillmentPreviewRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApisForFulfillmentOutbound.GetFulfillmentPreviewRequest();
      });

      it('should create an instance of GetFulfillmentPreviewRequest', function() {
        // TODO: update the code to test GetFulfillmentPreviewRequest
        expect(instance).to.be.a(SellingPartnerApisForFulfillmentOutbound.GetFulfillmentPreviewRequest);
      });

      it('should have the property marketplaceId (base name: "marketplaceId")', function() {
        // TODO: update the code to test the property marketplaceId
        expect(instance).to.have.property('marketplaceId');
        // expect(instance.marketplaceId).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property items (base name: "items")', function() {
        // TODO: update the code to test the property items
        expect(instance).to.have.property('items');
        // expect(instance.items).to.be(expectedValueLiteral);
      });

      it('should have the property shippingSpeedCategories (base name: "shippingSpeedCategories")', function() {
        // TODO: update the code to test the property shippingSpeedCategories
        expect(instance).to.have.property('shippingSpeedCategories');
        // expect(instance.shippingSpeedCategories).to.be(expectedValueLiteral);
      });

      it('should have the property includeCODFulfillmentPreview (base name: "includeCODFulfillmentPreview")', function() {
        // TODO: update the code to test the property includeCODFulfillmentPreview
        expect(instance).to.have.property('includeCODFulfillmentPreview');
        // expect(instance.includeCODFulfillmentPreview).to.be(expectedValueLiteral);
      });

      it('should have the property includeDeliveryWindows (base name: "includeDeliveryWindows")', function() {
        // TODO: update the code to test the property includeDeliveryWindows
        expect(instance).to.have.property('includeDeliveryWindows');
        // expect(instance.includeDeliveryWindows).to.be(expectedValueLiteral);
      });

      it('should have the property featureConstraints (base name: "featureConstraints")', function() {
        // TODO: update the code to test the property featureConstraints
        expect(instance).to.have.property('featureConstraints');
        // expect(instance.featureConstraints).to.be(expectedValueLiteral);
      });

    });
  });

}));