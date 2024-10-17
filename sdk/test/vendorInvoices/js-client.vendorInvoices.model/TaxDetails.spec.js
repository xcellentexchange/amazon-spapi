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
    describe('TaxDetails', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementPayments.TaxDetails();
      });

      it('should create an instance of TaxDetails', function() {
        // TODO: update the code to test TaxDetails
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementPayments.TaxDetails);
      });

      it('should have the property taxType (base name: "taxType")', function() {
        // TODO: update the code to test the property taxType
        expect(instance).to.have.property('taxType');
        // expect(instance.taxType).to.be(expectedValueLiteral);
      });

      it('should have the property taxRate (base name: "taxRate")', function() {
        // TODO: update the code to test the property taxRate
        expect(instance).to.have.property('taxRate');
        // expect(instance.taxRate).to.be(expectedValueLiteral);
      });

      it('should have the property taxAmount (base name: "taxAmount")', function() {
        // TODO: update the code to test the property taxAmount
        expect(instance).to.have.property('taxAmount');
        // expect(instance.taxAmount).to.be(expectedValueLiteral);
      });

      it('should have the property taxableAmount (base name: "taxableAmount")', function() {
        // TODO: update the code to test the property taxableAmount
        expect(instance).to.have.property('taxableAmount');
        // expect(instance.taxableAmount).to.be(expectedValueLiteral);
      });

    });
  });

}));
