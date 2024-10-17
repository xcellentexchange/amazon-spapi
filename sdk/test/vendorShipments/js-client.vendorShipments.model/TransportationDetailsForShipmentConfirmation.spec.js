/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
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
    define(['expect.js', '../../../src/vendorShipments/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorShipments/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForRetailProcurementShipments);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementShipments) {
  'use strict';

  var instance;

  describe('vendorShipments', function() {
    describe('TransportationDetailsForShipmentConfirmation', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementShipments.TransportationDetailsForShipmentConfirmation();
      });

      it('should create an instance of TransportationDetailsForShipmentConfirmation', function() {
        // TODO: update the code to test TransportationDetailsForShipmentConfirmation
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.TransportationDetailsForShipmentConfirmation);
      });

      it('should have the property carrierScac (base name: "carrierScac")', function() {
        // TODO: update the code to test the property carrierScac
        expect(instance).to.have.property('carrierScac');
        // expect(instance.carrierScac).to.be(expectedValueLiteral);
      });

      it('should have the property carrierShipmentReferenceNumber (base name: "carrierShipmentReferenceNumber")', function() {
        // TODO: update the code to test the property carrierShipmentReferenceNumber
        expect(instance).to.have.property('carrierShipmentReferenceNumber');
        // expect(instance.carrierShipmentReferenceNumber).to.be(expectedValueLiteral);
      });

      it('should have the property transportationMode (base name: "transportationMode")', function() {
        // TODO: update the code to test the property transportationMode
        expect(instance).to.have.property('transportationMode');
        // expect(instance.transportationMode).to.be(expectedValueLiteral);
      });

      it('should have the property billOfLadingNumber (base name: "billOfLadingNumber")', function() {
        // TODO: update the code to test the property billOfLadingNumber
        expect(instance).to.have.property('billOfLadingNumber');
        // expect(instance.billOfLadingNumber).to.be(expectedValueLiteral);
      });

    });
  });

}));