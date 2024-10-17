/*
 * Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information that is relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range. 
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
    define(['expect.js', '../../../src/financesV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/financesV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFinances);
  }
}(this, function(expect, SellingPartnerApiForFinances) {
  'use strict';

  var instance;

  describe('financesV0', function() {
    describe('ServiceFeeEvent', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFinances.ServiceFeeEvent();
      });

      it('should create an instance of ServiceFeeEvent', function() {
        // TODO: update the code to test ServiceFeeEvent
        expect(instance).to.be.a(SellingPartnerApiForFinances.ServiceFeeEvent);
      });

      it('should have the property amazonOrderId (base name: "AmazonOrderId")', function() {
        // TODO: update the code to test the property amazonOrderId
        expect(instance).to.have.property('amazonOrderId');
        // expect(instance.amazonOrderId).to.be(expectedValueLiteral);
      });

      it('should have the property feeReason (base name: "FeeReason")', function() {
        // TODO: update the code to test the property feeReason
        expect(instance).to.have.property('feeReason');
        // expect(instance.feeReason).to.be(expectedValueLiteral);
      });

      it('should have the property feeList (base name: "FeeList")', function() {
        // TODO: update the code to test the property feeList
        expect(instance).to.have.property('feeList');
        // expect(instance.feeList).to.be(expectedValueLiteral);
      });

      it('should have the property sellerSKU (base name: "SellerSKU")', function() {
        // TODO: update the code to test the property sellerSKU
        expect(instance).to.have.property('sellerSKU');
        // expect(instance.sellerSKU).to.be(expectedValueLiteral);
      });

      it('should have the property fnSKU (base name: "FnSKU")', function() {
        // TODO: update the code to test the property fnSKU
        expect(instance).to.have.property('fnSKU');
        // expect(instance.fnSKU).to.be(expectedValueLiteral);
      });

      it('should have the property feeDescription (base name: "FeeDescription")', function() {
        // TODO: update the code to test the property feeDescription
        expect(instance).to.have.property('feeDescription');
        // expect(instance.feeDescription).to.be(expectedValueLiteral);
      });

      it('should have the property ASIN (base name: "ASIN")', function() {
        // TODO: update the code to test the property ASIN
        expect(instance).to.have.property('ASIN');
        // expect(instance.ASIN).to.be(expectedValueLiteral);
      });

      it('should have the property storeName (base name: "StoreName")', function() {
        // TODO: update the code to test the property storeName
        expect(instance).to.have.property('storeName');
        // expect(instance.storeName).to.be(expectedValueLiteral);
      });

    });
  });

}));