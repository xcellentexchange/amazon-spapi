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
    describe('GetQueriesResponsePagination', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForDataKiosk.GetQueriesResponsePagination();
      });

      it('should create an instance of GetQueriesResponsePagination', function() {
        // TODO: update the code to test GetQueriesResponsePagination
        expect(instance).to.be.a(SellingPartnerApiForDataKiosk.GetQueriesResponsePagination);
      });

      it('should have the property nextToken (base name: "nextToken")', function() {
        // TODO: update the code to test the property nextToken
        expect(instance).to.have.property('nextToken');
        // expect(instance.nextToken).to.be(expectedValueLiteral);
      });

    });
  });

}));
