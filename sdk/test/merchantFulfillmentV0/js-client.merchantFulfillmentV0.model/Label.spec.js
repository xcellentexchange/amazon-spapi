/*
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
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
    define(['expect.js', '../../../src/merchantFulfillmentV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/merchantFulfillmentV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForMerchantFulfillment);
  }
}(this, function(expect, SellingPartnerApiForMerchantFulfillment) {
  'use strict';

  var instance;

  describe('merchantFulfillmentV0', function() {
    describe('Label', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForMerchantFulfillment.Label();
      });

      it('should create an instance of Label', function() {
        // TODO: update the code to test Label
        expect(instance).to.be.a(SellingPartnerApiForMerchantFulfillment.Label);
      });

      it('should have the property customTextForLabel (base name: "CustomTextForLabel")', function() {
        // TODO: update the code to test the property customTextForLabel
        expect(instance).to.have.property('customTextForLabel');
        // expect(instance.customTextForLabel).to.be(expectedValueLiteral);
      });

      it('should have the property dimensions (base name: "Dimensions")', function() {
        // TODO: update the code to test the property dimensions
        expect(instance).to.have.property('dimensions');
        // expect(instance.dimensions).to.be(expectedValueLiteral);
      });

      it('should have the property fileContents (base name: "FileContents")', function() {
        // TODO: update the code to test the property fileContents
        expect(instance).to.have.property('fileContents');
        // expect(instance.fileContents).to.be(expectedValueLiteral);
      });

      it('should have the property labelFormat (base name: "LabelFormat")', function() {
        // TODO: update the code to test the property labelFormat
        expect(instance).to.have.property('labelFormat');
        // expect(instance.labelFormat).to.be(expectedValueLiteral);
      });

      it('should have the property standardIdForLabel (base name: "StandardIdForLabel")', function() {
        // TODO: update the code to test the property standardIdForLabel
        expect(instance).to.have.property('standardIdForLabel');
        // expect(instance.standardIdForLabel).to.be(expectedValueLiteral);
      });

    });
  });

}));