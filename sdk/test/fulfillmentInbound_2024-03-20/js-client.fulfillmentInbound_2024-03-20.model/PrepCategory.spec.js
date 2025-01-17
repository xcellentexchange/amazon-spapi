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
    describe('PrepCategory', function() {
      beforeEach(function() {
        instance = TheSellingPartnerApiForFbaInboundOperations.PrepCategory;
      });

      it('should create an instance of PrepCategory', function() {
        // TODO: update the code to test PrepCategory
        expect(instance).to.be.a('object');
      });

      it('should have the property ADULT', function() {
        expect(instance).to.have.property('ADULT');
        expect(instance.ADULT).to.be("ADULT");
      });

      it('should have the property BABY', function() {
        expect(instance).to.have.property('BABY');
        expect(instance.BABY).to.be("BABY");
      });

      it('should have the property FC_PROVIDED', function() {
        expect(instance).to.have.property('FC_PROVIDED');
        expect(instance.FC_PROVIDED).to.be("FC_PROVIDED");
      });

      it('should have the property FRAGILE', function() {
        expect(instance).to.have.property('FRAGILE');
        expect(instance.FRAGILE).to.be("FRAGILE");
      });

      it('should have the property GRANULAR', function() {
        expect(instance).to.have.property('GRANULAR');
        expect(instance.GRANULAR).to.be("GRANULAR");
      });

      it('should have the property HANGER', function() {
        expect(instance).to.have.property('HANGER');
        expect(instance.HANGER).to.be("HANGER");
      });

      it('should have the property LIQUID', function() {
        expect(instance).to.have.property('LIQUID');
        expect(instance.LIQUID).to.be("LIQUID");
      });

      it('should have the property PERFORATED', function() {
        expect(instance).to.have.property('PERFORATED');
        expect(instance.PERFORATED).to.be("PERFORATED");
      });

      it('should have the property SET', function() {
        expect(instance).to.have.property('SET');
        expect(instance.SET).to.be("SET");
      });

      it('should have the property SHARP', function() {
        expect(instance).to.have.property('SHARP');
        expect(instance.SHARP).to.be("SHARP");
      });

      it('should have the property SMALL', function() {
        expect(instance).to.have.property('SMALL');
        expect(instance.SMALL).to.be("SMALL");
      });

      it('should have the property TEXTILE', function() {
        expect(instance).to.have.property('TEXTILE');
        expect(instance.TEXTILE).to.be("TEXTILE");
      });

      it('should have the property UNKNOWN', function() {
        expect(instance).to.have.property('UNKNOWN');
        expect(instance.UNKNOWN).to.be("UNKNOWN");
      });

      it('should have the property NONE', function() {
        expect(instance).to.have.property('NONE');
        expect(instance.NONE).to.be("NONE");
      });

    });
  });

}));
