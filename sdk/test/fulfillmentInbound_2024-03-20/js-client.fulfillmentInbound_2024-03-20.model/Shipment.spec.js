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
    describe('Shipment', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForFbaInboundOperations.Shipment();
      });

      it('should create an instance of Shipment', function() {
        // TODO: update the code to test Shipment
        expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.Shipment);
      });

      it('should have the property amazonReferenceId (base name: "amazonReferenceId")', function() {
        // TODO: update the code to test the property amazonReferenceId
        expect(instance).to.have.property('amazonReferenceId');
        // expect(instance.amazonReferenceId).to.be(expectedValueLiteral);
      });

      it('should have the property contactInformation (base name: "contactInformation")', function() {
        // TODO: update the code to test the property contactInformation
        expect(instance).to.have.property('contactInformation');
        // expect(instance.contactInformation).to.be(expectedValueLiteral);
      });

      it('should have the property dates (base name: "dates")', function() {
        // TODO: update the code to test the property dates
        expect(instance).to.have.property('dates');
        // expect(instance.dates).to.be(expectedValueLiteral);
      });

      it('should have the property destination (base name: "destination")', function() {
        // TODO: update the code to test the property destination
        expect(instance).to.have.property('destination');
        // expect(instance.destination).to.be(expectedValueLiteral);
      });

      it('should have the property freightInformation (base name: "freightInformation")', function() {
        // TODO: update the code to test the property freightInformation
        expect(instance).to.have.property('freightInformation');
        // expect(instance.freightInformation).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property placementOptionId (base name: "placementOptionId")', function() {
        // TODO: update the code to test the property placementOptionId
        expect(instance).to.have.property('placementOptionId');
        // expect(instance.placementOptionId).to.be(expectedValueLiteral);
      });

      it('should have the property selectedDeliveryWindow (base name: "selectedDeliveryWindow")', function() {
        // TODO: update the code to test the property selectedDeliveryWindow
        expect(instance).to.have.property('selectedDeliveryWindow');
        // expect(instance.selectedDeliveryWindow).to.be(expectedValueLiteral);
      });

      it('should have the property selectedTransportationOptionId (base name: "selectedTransportationOptionId")', function() {
        // TODO: update the code to test the property selectedTransportationOptionId
        expect(instance).to.have.property('selectedTransportationOptionId');
        // expect(instance.selectedTransportationOptionId).to.be(expectedValueLiteral);
      });

      it('should have the property selfShipAppointmentDetails (base name: "selfShipAppointmentDetails")', function() {
        // TODO: update the code to test the property selfShipAppointmentDetails
        expect(instance).to.have.property('selfShipAppointmentDetails');
        // expect(instance.selfShipAppointmentDetails).to.be(expectedValueLiteral);
      });

      it('should have the property shipmentConfirmationId (base name: "shipmentConfirmationId")', function() {
        // TODO: update the code to test the property shipmentConfirmationId
        expect(instance).to.have.property('shipmentConfirmationId');
        // expect(instance.shipmentConfirmationId).to.be(expectedValueLiteral);
      });

      it('should have the property shipmentId (base name: "shipmentId")', function() {
        // TODO: update the code to test the property shipmentId
        expect(instance).to.have.property('shipmentId');
        // expect(instance.shipmentId).to.be(expectedValueLiteral);
      });

      it('should have the property source (base name: "source")', function() {
        // TODO: update the code to test the property source
        expect(instance).to.have.property('source');
        // expect(instance.source).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property trackingDetails (base name: "trackingDetails")', function() {
        // TODO: update the code to test the property trackingDetails
        expect(instance).to.have.property('trackingDetails');
        // expect(instance.trackingDetails).to.be(expectedValueLiteral);
      });

    });
  });

}));
