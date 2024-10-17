/*
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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
    define(['expect.js', '../../../src/productFeesV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/productFeesV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForProductFees);
  }
}(this, function(expect, SellingPartnerApiForProductFees) {
  'use strict';

  var instance;

  describe('productFeesV0', function() {
    describe('FeesEstimate', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForProductFees.FeesEstimate();
      });

      it('should create an instance of FeesEstimate', function() {
        // TODO: update the code to test FeesEstimate
        expect(instance).to.be.a(SellingPartnerApiForProductFees.FeesEstimate);
      });

      it('should have the property timeOfFeesEstimation (base name: "TimeOfFeesEstimation")', function() {
        // TODO: update the code to test the property timeOfFeesEstimation
        expect(instance).to.have.property('timeOfFeesEstimation');
        // expect(instance.timeOfFeesEstimation).to.be(expectedValueLiteral);
      });

      it('should have the property totalFeesEstimate (base name: "TotalFeesEstimate")', function() {
        // TODO: update the code to test the property totalFeesEstimate
        expect(instance).to.have.property('totalFeesEstimate');
        // expect(instance.totalFeesEstimate).to.be(expectedValueLiteral);
      });

      it('should have the property feeDetailList (base name: "FeeDetailList")', function() {
        // TODO: update the code to test the property feeDetailList
        expect(instance).to.have.property('feeDetailList');
        // expect(instance.feeDetailList).to.be(expectedValueLiteral);
      });

    });
  });

}));