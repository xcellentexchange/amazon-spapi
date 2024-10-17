/*
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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
    define(['expect.js', '../../../src/vendorInvoices/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorInvoices/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForRetailProcurementPayments);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementPayments) {
  'use strict';

  var instance;

  describe('vendorInvoices', function() {
    describe('Address', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementPayments.Address();
      });

      it('should create an instance of Address', function() {
        // TODO: update the code to test Address
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementPayments.Address);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property addressLine1 (base name: "addressLine1")', function() {
        // TODO: update the code to test the property addressLine1
        expect(instance).to.have.property('addressLine1');
        // expect(instance.addressLine1).to.be(expectedValueLiteral);
      });

      it('should have the property addressLine2 (base name: "addressLine2")', function() {
        // TODO: update the code to test the property addressLine2
        expect(instance).to.have.property('addressLine2');
        // expect(instance.addressLine2).to.be(expectedValueLiteral);
      });

      it('should have the property addressLine3 (base name: "addressLine3")', function() {
        // TODO: update the code to test the property addressLine3
        expect(instance).to.have.property('addressLine3');
        // expect(instance.addressLine3).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property county (base name: "county")', function() {
        // TODO: update the code to test the property county
        expect(instance).to.have.property('county');
        // expect(instance.county).to.be(expectedValueLiteral);
      });

      it('should have the property district (base name: "district")', function() {
        // TODO: update the code to test the property district
        expect(instance).to.have.property('district');
        // expect(instance.district).to.be(expectedValueLiteral);
      });

      it('should have the property stateOrRegion (base name: "stateOrRegion")', function() {
        // TODO: update the code to test the property stateOrRegion
        expect(instance).to.have.property('stateOrRegion');
        // expect(instance.stateOrRegion).to.be(expectedValueLiteral);
      });

      it('should have the property postalOrZipCode (base name: "postalOrZipCode")', function() {
        // TODO: update the code to test the property postalOrZipCode
        expect(instance).to.have.property('postalOrZipCode');
        // expect(instance.postalOrZipCode).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "countryCode")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property phone (base name: "phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

    });
  });

}));