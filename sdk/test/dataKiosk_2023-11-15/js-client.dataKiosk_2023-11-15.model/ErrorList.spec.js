/*
 * Selling Partner API for Data Kiosk
 * The Selling Partner API for Data Kiosk lets you submit GraphQL queries from a variety of schemas to help selling partners manage their businesses.
 *
 * OpenAPI spec version: 2023-11-15
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
    define(['expect.js', '../../../src/dataKiosk_2023-11-15/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/dataKiosk_2023-11-15/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForDataKiosk);
  }
}(this, function(expect, SellingPartnerApiForDataKiosk) {
  'use strict';

  var instance;

  describe('dataKiosk_2023-11-15', function() {
    describe('ErrorList', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDataKiosk.ErrorList();
      });

      it('should create an instance of ErrorList', function() {
        // TODO: update the code to test ErrorList
        expect(instance).to.be.a(SellingPartnerApiForDataKiosk.ErrorList);
      });

      it('should have the property errors (base name: "errors")', function() {
        // TODO: update the code to test the property errors
        expect(instance).to.have.property('errors');
        // expect(instance.errors).to.be(expectedValueLiteral);
      });

    });
  });

}));
