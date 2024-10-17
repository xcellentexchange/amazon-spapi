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
    describe('PrepInstruction', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForFulfillmentInbound.PrepInstruction;
      });

      it('should create an instance of PrepInstruction', function() {
        // TODO: update the code to test PrepInstruction
        expect(instance).to.be.a('object');
      });

      it('should have the property polybagging', function() {
        expect(instance).to.have.property('polybagging');
        expect(instance.polybagging).to.be("Polybagging");
      });

      it('should have the property bubbleWrapping', function() {
        expect(instance).to.have.property('bubbleWrapping');
        expect(instance.bubbleWrapping).to.be("BubbleWrapping");
      });

      it('should have the property taping', function() {
        expect(instance).to.have.property('taping');
        expect(instance.taping).to.be("Taping");
      });

      it('should have the property blackShrinkWrapping', function() {
        expect(instance).to.have.property('blackShrinkWrapping');
        expect(instance.blackShrinkWrapping).to.be("BlackShrinkWrapping");
      });

      it('should have the property labeling', function() {
        expect(instance).to.have.property('labeling');
        expect(instance.labeling).to.be("Labeling");
      });

      it('should have the property hangGarment', function() {
        expect(instance).to.have.property('hangGarment');
        expect(instance.hangGarment).to.be("HangGarment");
      });

      it('should have the property setCreation', function() {
        expect(instance).to.have.property('setCreation');
        expect(instance.setCreation).to.be("SetCreation");
      });

      it('should have the property boxing', function() {
        expect(instance).to.have.property('boxing');
        expect(instance.boxing).to.be("Boxing");
      });

      it('should have the property removeFromHanger', function() {
        expect(instance).to.have.property('removeFromHanger');
        expect(instance.removeFromHanger).to.be("RemoveFromHanger");
      });

      it('should have the property debundle', function() {
        expect(instance).to.have.property('debundle');
        expect(instance.debundle).to.be("Debundle");
      });

      it('should have the property suffocationStickering', function() {
        expect(instance).to.have.property('suffocationStickering');
        expect(instance.suffocationStickering).to.be("SuffocationStickering");
      });

      it('should have the property capSealing', function() {
        expect(instance).to.have.property('capSealing');
        expect(instance.capSealing).to.be("CapSealing");
      });

      it('should have the property setStickering', function() {
        expect(instance).to.have.property('setStickering');
        expect(instance.setStickering).to.be("SetStickering");
      });

      it('should have the property blankStickering', function() {
        expect(instance).to.have.property('blankStickering');
        expect(instance.blankStickering).to.be("BlankStickering");
      });

      it('should have the property shipsInProductPackaging', function() {
        expect(instance).to.have.property('shipsInProductPackaging');
        expect(instance.shipsInProductPackaging).to.be("ShipsInProductPackaging");
      });

      it('should have the property noPrep', function() {
        expect(instance).to.have.property('noPrep');
        expect(instance.noPrep).to.be("NoPrep");
      });

    });
  });

}));
