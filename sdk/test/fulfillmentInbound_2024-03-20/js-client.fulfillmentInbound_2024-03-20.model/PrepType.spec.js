/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
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
    define(['expect.js', '../../../src/fulfillmentInbound_2024-03-20/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentInbound_2024-03-20/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForFbaInboundOperations);
  }
}(this, function(expect, TheSellingPartnerApiForFbaInboundOperations) {
  'use strict';

  var instance;

  describe('fulfillmentInbound_2024-03-20', function() {
    describe('PrepType', function() {
      beforeEach(function() {
        instance = TheSellingPartnerApiForFbaInboundOperations.PrepType;
      });

      it('should create an instance of PrepType', function() {
        // TODO: update the code to test PrepType
        expect(instance).to.be.a('object');
      });

      it('should have the property BLACK_SHRINKWRAP', function() {
        expect(instance).to.have.property('BLACK_SHRINKWRAP');
        expect(instance.BLACK_SHRINKWRAP).to.be("ITEM_BLACK_SHRINKWRAP");
      });

      it('should have the property BLANKSTK', function() {
        expect(instance).to.have.property('BLANKSTK');
        expect(instance.BLANKSTK).to.be("ITEM_BLANKSTK");
      });

      it('should have the property BOXING', function() {
        expect(instance).to.have.property('BOXING');
        expect(instance.BOXING).to.be("ITEM_BOXING");
      });

      it('should have the property BUBBLEWRAP', function() {
        expect(instance).to.have.property('BUBBLEWRAP');
        expect(instance.BUBBLEWRAP).to.be("ITEM_BUBBLEWRAP");
      });

      it('should have the property CAP_SEALING', function() {
        expect(instance).to.have.property('CAP_SEALING');
        expect(instance.CAP_SEALING).to.be("ITEM_CAP_SEALING");
      });

      it('should have the property DEBUNDLE', function() {
        expect(instance).to.have.property('DEBUNDLE');
        expect(instance.DEBUNDLE).to.be("ITEM_DEBUNDLE");
      });

      it('should have the property HANG_GARMENT', function() {
        expect(instance).to.have.property('HANG_GARMENT');
        expect(instance.HANG_GARMENT).to.be("ITEM_HANG_GARMENT");
      });

      it('should have the property LABELING', function() {
        expect(instance).to.have.property('LABELING');
        expect(instance.LABELING).to.be("ITEM_LABELING");
      });

      it('should have the property NO_PREP', function() {
        expect(instance).to.have.property('NO_PREP');
        expect(instance.NO_PREP).to.be("ITEM_NO_PREP");
      });

      it('should have the property POLYBAGGING', function() {
        expect(instance).to.have.property('POLYBAGGING');
        expect(instance.POLYBAGGING).to.be("ITEM_POLYBAGGING");
      });

      it('should have the property RMOVHANG', function() {
        expect(instance).to.have.property('RMOVHANG');
        expect(instance.RMOVHANG).to.be("ITEM_RMOVHANG");
      });

      it('should have the property SETCREAT', function() {
        expect(instance).to.have.property('SETCREAT');
        expect(instance.SETCREAT).to.be("ITEM_SETCREAT");
      });

      it('should have the property SETSTK', function() {
        expect(instance).to.have.property('SETSTK');
        expect(instance.SETSTK).to.be("ITEM_SETSTK");
      });

      it('should have the property SIOC', function() {
        expect(instance).to.have.property('SIOC');
        expect(instance.SIOC).to.be("ITEM_SIOC");
      });

      it('should have the property SUFFOSTK', function() {
        expect(instance).to.have.property('SUFFOSTK');
        expect(instance.SUFFOSTK).to.be("ITEM_SUFFOSTK");
      });

      it('should have the property TAPING', function() {
        expect(instance).to.have.property('TAPING');
        expect(instance.TAPING).to.be("ITEM_TAPING");
      });

    });
  });

}));