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
    describe('AllowanceDetails', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForRetailProcurementPayments.AllowanceDetails();
      });

      it('should create an instance of AllowanceDetails', function() {
        // TODO: update the code to test AllowanceDetails
        expect(instance).to.be.a(SellingPartnerApiForRetailProcurementPayments.AllowanceDetails);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property allowanceAmount (base name: "allowanceAmount")', function() {
        // TODO: update the code to test the property allowanceAmount
        expect(instance).to.have.property('allowanceAmount');
        // expect(instance.allowanceAmount).to.be(expectedValueLiteral);
      });

      it('should have the property taxDetails (base name: "taxDetails")', function() {
        // TODO: update the code to test the property taxDetails
        expect(instance).to.have.property('taxDetails');
        // expect(instance.taxDetails).to.be(expectedValueLiteral);
      });

    });
  });

}));
