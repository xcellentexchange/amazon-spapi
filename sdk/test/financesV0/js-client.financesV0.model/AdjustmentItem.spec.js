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
    describe('AdjustmentItem', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFinances.AdjustmentItem();
      });

      it('should create an instance of AdjustmentItem', function() {
        // TODO: update the code to test AdjustmentItem
        expect(instance).to.be.a(SellingPartnerApiForFinances.AdjustmentItem);
      });

      it('should have the property quantity (base name: "Quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property perUnitAmount (base name: "PerUnitAmount")', function() {
        // TODO: update the code to test the property perUnitAmount
        expect(instance).to.have.property('perUnitAmount');
        // expect(instance.perUnitAmount).to.be(expectedValueLiteral);
      });

      it('should have the property totalAmount (base name: "TotalAmount")', function() {
        // TODO: update the code to test the property totalAmount
        expect(instance).to.have.property('totalAmount');
        // expect(instance.totalAmount).to.be(expectedValueLiteral);
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

      it('should have the property productDescription (base name: "ProductDescription")', function() {
        // TODO: update the code to test the property productDescription
        expect(instance).to.have.property('productDescription');
        // expect(instance.productDescription).to.be(expectedValueLiteral);
      });

      it('should have the property ASIN (base name: "ASIN")', function() {
        // TODO: update the code to test the property ASIN
        expect(instance).to.have.property('ASIN');
        // expect(instance.ASIN).to.be(expectedValueLiteral);
      });

    });
  });

}));
