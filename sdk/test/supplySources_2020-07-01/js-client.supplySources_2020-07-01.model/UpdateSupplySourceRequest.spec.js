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
    describe('UpdateSupplySourceRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForSupplySources.UpdateSupplySourceRequest();
      });

      it('should create an instance of UpdateSupplySourceRequest', function() {
        // TODO: update the code to test UpdateSupplySourceRequest
        expect(instance).to.be.a(SellingPartnerApiForSupplySources.UpdateSupplySourceRequest);
      });

      it('should have the property alias (base name: "alias")', function() {
        // TODO: update the code to test the property alias
        expect(instance).to.have.property('alias');
        // expect(instance.alias).to.be(expectedValueLiteral);
      });

      it('should have the property configuration (base name: "configuration")', function() {
        // TODO: update the code to test the property configuration
        expect(instance).to.have.property('configuration');
        // expect(instance.configuration).to.be(expectedValueLiteral);
      });

      it('should have the property capabilities (base name: "capabilities")', function() {
        // TODO: update the code to test the property capabilities
        expect(instance).to.have.property('capabilities');
        // expect(instance.capabilities).to.be(expectedValueLiteral);
      });

    });
  });

}));
