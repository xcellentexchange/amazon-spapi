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
    describe('PaymentTerms', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementPayments.PaymentTerms();
      });

      it('should create an instance of PaymentTerms', function() {
        // TODO: update the code to test PaymentTerms
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementPayments.PaymentTerms);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property discountPercent (base name: "discountPercent")', function() {
        // TODO: update the code to test the property discountPercent
        expect(instance).to.have.property('discountPercent');
        // expect(instance.discountPercent).to.be(expectedValueLiteral);
      });

      it('should have the property discountDueDays (base name: "discountDueDays")', function() {
        // TODO: update the code to test the property discountDueDays
        expect(instance).to.have.property('discountDueDays');
        // expect(instance.discountDueDays).to.be(expectedValueLiteral);
      });

      it('should have the property netDueDays (base name: "netDueDays")', function() {
        // TODO: update the code to test the property netDueDays
        expect(instance).to.have.property('netDueDays');
        // expect(instance.netDueDays).to.be(expectedValueLiteral);
      });

    });
  });

}));
