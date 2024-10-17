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
    describe('TaxRegistrationDetail', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDirectFulfillmentPayments.TaxRegistrationDetail();
      });

      it('should create an instance of TaxRegistrationDetail', function() {
        // TODO: update the code to test TaxRegistrationDetail
        expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentPayments.TaxRegistrationDetail);
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

      it('should have the property taxRegistrationAddress (base name: "taxRegistrationAddress")', function() {
        // TODO: update the code to test the property taxRegistrationAddress
        expect(instance).to.have.property('taxRegistrationAddress');
        // expect(instance.taxRegistrationAddress).to.be(expectedValueLiteral);
      });

      it('should have the property taxRegistrationMessage (base name: "taxRegistrationMessage")', function() {
        // TODO: update the code to test the property taxRegistrationMessage
        expect(instance).to.have.property('taxRegistrationMessage');
        // expect(instance.taxRegistrationMessage).to.be(expectedValueLiteral);
      });

    });
  });

}));