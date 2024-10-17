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
    describe('TaxRegistrationDetails', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementShipments.TaxRegistrationDetails();
      });

      it('should create an instance of TaxRegistrationDetails', function() {
        // TODO: update the code to test TaxRegistrationDetails
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.TaxRegistrationDetails);
      });

      it('should have the property taxRegistrationType (base name: "taxRegistrationType")', function() {
        // TODO: update the code to test the property taxRegistrationType
        expect(instance).to.have.property('taxRegistrationType');
        // expect(instance.taxRegistrationType).to.be(expectedValueLiteral);
      });

      it('should have the property taxRegistrationNumber (base name: "taxRegistrationNumber")', function() {
        // TODO: update the code to test the property taxRegistrationNumber
        expect(instance).to.have.property('taxRegistrationNumber');
        // expect(instance.taxRegistrationNumber).to.be(expectedValueLiteral);
      });

    });
  });

}));