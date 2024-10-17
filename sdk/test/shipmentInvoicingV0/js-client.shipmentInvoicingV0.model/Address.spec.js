/*
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
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
    define(['expect.js', '../../../src/shipmentInvoicingV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/shipmentInvoicingV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForShipmentInvoicing);
  }
}(this, function(expect, SellingPartnerApiForShipmentInvoicing) {
  'use strict';

  var instance;

  describe('shipmentInvoicingV0', function() {
    describe('Address', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForShipmentInvoicing.Address();
      });

      it('should create an instance of Address', function() {
        // TODO: update the code to test Address
        expect(instance).to.be.a(SellingPartnerApiForShipmentInvoicing.Address);
      });

      it('should have the property name (base name: "Name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property addressLine1 (base name: "AddressLine1")', function() {
        // TODO: update the code to test the property addressLine1
        expect(instance).to.have.property('addressLine1');
        // expect(instance.addressLine1).to.be(expectedValueLiteral);
      });

      it('should have the property addressLine2 (base name: "AddressLine2")', function() {
        // TODO: update the code to test the property addressLine2
        expect(instance).to.have.property('addressLine2');
        // expect(instance.addressLine2).to.be(expectedValueLiteral);
      });

      it('should have the property addressLine3 (base name: "AddressLine3")', function() {
        // TODO: update the code to test the property addressLine3
        expect(instance).to.have.property('addressLine3');
        // expect(instance.addressLine3).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "City")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property county (base name: "County")', function() {
        // TODO: update the code to test the property county
        expect(instance).to.have.property('county');
        // expect(instance.county).to.be(expectedValueLiteral);
      });

      it('should have the property district (base name: "District")', function() {
        // TODO: update the code to test the property district
        expect(instance).to.have.property('district');
        // expect(instance.district).to.be(expectedValueLiteral);
      });

      it('should have the property stateOrRegion (base name: "StateOrRegion")', function() {
        // TODO: update the code to test the property stateOrRegion
        expect(instance).to.have.property('stateOrRegion');
        // expect(instance.stateOrRegion).to.be(expectedValueLiteral);
      });

      it('should have the property postalCode (base name: "PostalCode")', function() {
        // TODO: update the code to test the property postalCode
        expect(instance).to.have.property('postalCode');
        // expect(instance.postalCode).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "CountryCode")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property phone (base name: "Phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property addressType (base name: "AddressType")', function() {
        // TODO: update the code to test the property addressType
        expect(instance).to.have.property('addressType');
        // expect(instance.addressType).to.be(expectedValueLiteral);
      });

    });
  });

}));