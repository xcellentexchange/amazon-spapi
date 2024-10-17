/*
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor's invoice data.
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
    define(['expect.js', '../../../src/vendorDirectFulfillmentPaymentsV1/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorDirectFulfillmentPaymentsV1/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentPayments);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentPayments) {
  'use strict';

  var instance;

  describe('vendorDirectFulfillmentPaymentsV1', function() {
    describe('TaxDetail', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentPayments.TaxDetail();
      });

      it('should create an instance of TaxDetail', function() {
        // TODO: update the code to test TaxDetail
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentPayments.TaxDetail);
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