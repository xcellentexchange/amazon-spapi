/*
 * Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data
 * The Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data provides programmatic access to vendor direct fulfillment sandbox test data.
 *
 * OpenAPI spec version: 2021-10-28
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
    define(['expect.js', '../../../src/vendorDirectFulfillmentSandboxData_2021-10-28/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/vendorDirectFulfillmentSandboxData_2021-10-28/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForVendorDirectFulfillmentSandboxTestData);
  }
}(this, function(expect, SellingPartnerApiForVendorDirectFulfillmentSandboxTestData) {
  'use strict';

  var instance;

  describe('vendorDirectFulfillmentSandboxData_2021-10-28', function() {
    describe('Pagination', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForVendorDirectFulfillmentSandboxTestData.Pagination();
      });

      it('should create an instance of Pagination', function() {
        // TODO: update the code to test Pagination
        expect(instance).to.be.a(SellingPartnerApiForVendorDirectFulfillmentSandboxTestData.Pagination);
      });

      it('should have the property nextToken (base name: "nextToken")', function() {
        // TODO: update the code to test the property nextToken
        expect(instance).to.have.property('nextToken');
        // expect(instance.nextToken).to.be(expectedValueLiteral);
      });

    });
  });

}));