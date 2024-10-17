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
    describe('InboundShipmentHeader', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFulfillmentInbound.InboundShipmentHeader();
      });

      it('should create an instance of InboundShipmentHeader', function() {
        // TODO: update the code to test InboundShipmentHeader
        expect(instance).to.be.a(SellingPartnerApiForFulfillmentInbound.InboundShipmentHeader);
      });

      it('should have the property shipmentName (base name: "ShipmentName")', function() {
        // TODO: update the code to test the property shipmentName
        expect(instance).to.have.property('shipmentName');
        // expect(instance.shipmentName).to.be(expectedValueLiteral);
      });

      it('should have the property shipFromAddress (base name: "ShipFromAddress")', function() {
        // TODO: update the code to test the property shipFromAddress
        expect(instance).to.have.property('shipFromAddress');
        // expect(instance.shipFromAddress).to.be(expectedValueLiteral);
      });

      it('should have the property destinationFulfillmentCenterId (base name: "DestinationFulfillmentCenterId")', function() {
        // TODO: update the code to test the property destinationFulfillmentCenterId
        expect(instance).to.have.property('destinationFulfillmentCenterId');
        // expect(instance.destinationFulfillmentCenterId).to.be(expectedValueLiteral);
      });

      it('should have the property areCasesRequired (base name: "AreCasesRequired")', function() {
        // TODO: update the code to test the property areCasesRequired
        expect(instance).to.have.property('areCasesRequired');
        // expect(instance.areCasesRequired).to.be(expectedValueLiteral);
      });

      it('should have the property shipmentStatus (base name: "ShipmentStatus")', function() {
        // TODO: update the code to test the property shipmentStatus
        expect(instance).to.have.property('shipmentStatus');
        // expect(instance.shipmentStatus).to.be(expectedValueLiteral);
      });

      it('should have the property labelPrepPreference (base name: "LabelPrepPreference")', function() {
        // TODO: update the code to test the property labelPrepPreference
        expect(instance).to.have.property('labelPrepPreference');
        // expect(instance.labelPrepPreference).to.be(expectedValueLiteral);
      });

      it('should have the property intendedBoxContentsSource (base name: "IntendedBoxContentsSource")', function() {
        // TODO: update the code to test the property intendedBoxContentsSource
        expect(instance).to.have.property('intendedBoxContentsSource');
        // expect(instance.intendedBoxContentsSource).to.be(expectedValueLiteral);
      });

    });
  });

}));