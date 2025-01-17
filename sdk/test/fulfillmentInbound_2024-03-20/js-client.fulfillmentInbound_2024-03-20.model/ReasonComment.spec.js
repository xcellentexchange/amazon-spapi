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
    describe('ReasonComment', function() {
      beforeEach(function() {
        instance = TheSellingPartnerApiForFbaInboundOperations.ReasonComment;
      });

      it('should create an instance of ReasonComment', function() {
        // TODO: update the code to test ReasonComment
        expect(instance).to.be.a('object');
      });

      it('should have the property APPOINTMENT_REQUESTED_BY_MISTAKE', function() {
        expect(instance).to.have.property('APPOINTMENT_REQUESTED_BY_MISTAKE');
        expect(instance.APPOINTMENT_REQUESTED_BY_MISTAKE).to.be("APPOINTMENT_REQUESTED_BY_MISTAKE");
      });

      it('should have the property VEHICLE_DELAY', function() {
        expect(instance).to.have.property('VEHICLE_DELAY');
        expect(instance.VEHICLE_DELAY).to.be("VEHICLE_DELAY");
      });

      it('should have the property SLOT_NOT_SUITABLE', function() {
        expect(instance).to.have.property('SLOT_NOT_SUITABLE');
        expect(instance.SLOT_NOT_SUITABLE).to.be("SLOT_NOT_SUITABLE");
      });

      it('should have the property OUTSIDE_CARRIER_BUSINESS_HOURS', function() {
        expect(instance).to.have.property('OUTSIDE_CARRIER_BUSINESS_HOURS');
        expect(instance.OUTSIDE_CARRIER_BUSINESS_HOURS).to.be("OUTSIDE_CARRIER_BUSINESS_HOURS");
      });

      it('should have the property UNFAVOURABLE_EXTERNAL_CONDITIONS', function() {
        expect(instance).to.have.property('UNFAVOURABLE_EXTERNAL_CONDITIONS');
        expect(instance.UNFAVOURABLE_EXTERNAL_CONDITIONS).to.be("UNFAVOURABLE_EXTERNAL_CONDITIONS");
      });

      it('should have the property PROCUREMENT_DELAY', function() {
        expect(instance).to.have.property('PROCUREMENT_DELAY');
        expect(instance.PROCUREMENT_DELAY).to.be("PROCUREMENT_DELAY");
      });

      it('should have the property SHIPPING_PLAN_CHANGED', function() {
        expect(instance).to.have.property('SHIPPING_PLAN_CHANGED');
        expect(instance.SHIPPING_PLAN_CHANGED).to.be("SHIPPING_PLAN_CHANGED");
      });

      it('should have the property INCREASED_QUANTITY', function() {
        expect(instance).to.have.property('INCREASED_QUANTITY');
        expect(instance.INCREASED_QUANTITY).to.be("INCREASED_QUANTITY");
      });

      it('should have the property OTHER', function() {
        expect(instance).to.have.property('OTHER');
        expect(instance.OTHER).to.be("OTHER");
      });

    });
  });

}));
