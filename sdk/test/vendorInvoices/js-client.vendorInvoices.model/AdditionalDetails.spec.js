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
    describe('AdditionalDetails', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementPayments.AdditionalDetails();
      });

      it('should create an instance of AdditionalDetails', function() {
        // TODO: update the code to test AdditionalDetails
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementPayments.AdditionalDetails);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property detail (base name: "detail")', function() {
        // TODO: update the code to test the property detail
        expect(instance).to.have.property('detail');
        // expect(instance.detail).to.be(expectedValueLiteral);
      });

      it('should have the property languageCode (base name: "languageCode")', function() {
        // TODO: update the code to test the property languageCode
        expect(instance).to.have.property('languageCode');
        // expect(instance.languageCode).to.be(expectedValueLiteral);
      });

    });
  });

}));