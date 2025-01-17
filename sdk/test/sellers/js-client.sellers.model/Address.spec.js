/*
 * Selling Partner API for Sellers
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API's operations, data types, and schemas.
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
    define(['expect.js', '../../../src/sellers/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/sellers/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForSellers);
  }
}(this, function(expect, SellingPartnerApiForSellers) {
  'use strict';

  var instance;

  describe('sellers', function() {
    describe('Address', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForSellers.Address();
      });

      it('should create an instance of Address', function() {
        // TODO: update the code to test Address
        expect(instance).to.be.a(SellingPartnerApiForSellers.Address);
      });

      it('should have the property addressLine1 (base name: "addressLine1")', function() {
        // TODO: update the code to test the property addressLine1
        expect(instance).to.have.property('addressLine1');
        // expect(instance.addressLine1).to.be(expectedValueLiteral);
      });

      it('should have the property addressLine2 (base name: "addressLine2")', function() {
        // TODO: update the code to test the property addressLine2
        expect(instance).to.have.property('addressLine2');
        // expect(instance.addressLine2).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "countryCode")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property stateOrProvinceCode (base name: "stateOrProvinceCode")', function() {
        // TODO: update the code to test the property stateOrProvinceCode
        expect(instance).to.have.property('stateOrProvinceCode');
        // expect(instance.stateOrProvinceCode).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property postalCode (base name: "postalCode")', function() {
        // TODO: update the code to test the property postalCode
        expect(instance).to.have.property('postalCode');
        // expect(instance.postalCode).to.be(expectedValueLiteral);
      });

    });
  });

}));
