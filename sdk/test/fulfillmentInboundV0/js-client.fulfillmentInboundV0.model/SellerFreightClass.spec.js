/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
    define(['expect.js', '../../../src/fulfillmentInboundV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentInboundV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFulfillmentInbound);
  }
}(this, function(expect, SellingPartnerApiForFulfillmentInbound) {
  'use strict';

  var instance;

  describe('fulfillmentInboundV0', function() {
    describe('SellerFreightClass', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForFulfillmentInbound.SellerFreightClass;
      });

      it('should create an instance of SellerFreightClass', function() {
        // TODO: update the code to test SellerFreightClass
        expect(instance).to.be.a('object');
      });

      it('should have the property _50', function() {
        expect(instance).to.have.property('_50');
        expect(instance._50).to.be("50");
      });

      it('should have the property _55', function() {
        expect(instance).to.have.property('_55');
        expect(instance._55).to.be("55");
      });

      it('should have the property _60', function() {
        expect(instance).to.have.property('_60');
        expect(instance._60).to.be("60");
      });

      it('should have the property _65', function() {
        expect(instance).to.have.property('_65');
        expect(instance._65).to.be("65");
      });

      it('should have the property _70', function() {
        expect(instance).to.have.property('_70');
        expect(instance._70).to.be("70");
      });

      it('should have the property _775', function() {
        expect(instance).to.have.property('_775');
        expect(instance._775).to.be("77.5");
      });

      it('should have the property _85', function() {
        expect(instance).to.have.property('_85');
        expect(instance._85).to.be("85");
      });

      it('should have the property _925', function() {
        expect(instance).to.have.property('_925');
        expect(instance._925).to.be("92.5");
      });

      it('should have the property _100', function() {
        expect(instance).to.have.property('_100');
        expect(instance._100).to.be("100");
      });

      it('should have the property _110', function() {
        expect(instance).to.have.property('_110');
        expect(instance._110).to.be("110");
      });

      it('should have the property _125', function() {
        expect(instance).to.have.property('_125');
        expect(instance._125).to.be("125");
      });

      it('should have the property _150', function() {
        expect(instance).to.have.property('_150');
        expect(instance._150).to.be("150");
      });

      it('should have the property _175', function() {
        expect(instance).to.have.property('_175');
        expect(instance._175).to.be("175");
      });

      it('should have the property _200', function() {
        expect(instance).to.have.property('_200');
        expect(instance._200).to.be("200");
      });

      it('should have the property _250', function() {
        expect(instance).to.have.property('_250');
        expect(instance._250).to.be("250");
      });

      it('should have the property _300', function() {
        expect(instance).to.have.property('_300');
        expect(instance._300).to.be("300");
      });

      it('should have the property _400', function() {
        expect(instance).to.have.property('_400');
        expect(instance._400).to.be("400");
      });

      it('should have the property _500', function() {
        expect(instance).to.have.property('_500');
        expect(instance._500).to.be("500");
      });

    });
  });

}));