/*
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * OpenAPI spec version: 2020-07-01
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
    define(['expect.js', '../../../src/supplySources_2020-07-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/supplySources_2020-07-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForSupplySources);
  }
}(this, function(expect, SellingPartnerApiForSupplySources) {
  'use strict';

  var instance;

  describe('supplySources_2020-07-01', function() {
    describe('SupplySourceListInner', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForSupplySources.SupplySourceListInner();
      });

      it('should create an instance of SupplySourceListInner', function() {
        // TODO: update the code to test SupplySourceListInner
        expect(instance).to.be.a(SellingPartnerApiForSupplySources.SupplySourceListInner);
      });

      it('should have the property alias (base name: "alias")', function() {
        // TODO: update the code to test the property alias
        expect(instance).to.have.property('alias');
        // expect(instance.alias).to.be(expectedValueLiteral);
      });

      it('should have the property supplySourceId (base name: "supplySourceId")', function() {
        // TODO: update the code to test the property supplySourceId
        expect(instance).to.have.property('supplySourceId');
        // expect(instance.supplySourceId).to.be(expectedValueLiteral);
      });

      it('should have the property supplySourceCode (base name: "supplySourceCode")', function() {
        // TODO: update the code to test the property supplySourceCode
        expect(instance).to.have.property('supplySourceCode');
        // expect(instance.supplySourceCode).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

    });
  });

}));
