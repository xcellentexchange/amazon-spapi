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
    describe('SupplySourceConfiguration', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForSupplySources.SupplySourceConfiguration();
      });

      it('should create an instance of SupplySourceConfiguration', function() {
        // TODO: update the code to test SupplySourceConfiguration
        expect(instance).to.be.a(SellingPartnerApiForSupplySources.SupplySourceConfiguration);
      });

      it('should have the property operationalConfiguration (base name: "operationalConfiguration")', function() {
        // TODO: update the code to test the property operationalConfiguration
        expect(instance).to.have.property('operationalConfiguration');
        // expect(instance.operationalConfiguration).to.be(expectedValueLiteral);
      });

      it('should have the property timezone (base name: "timezone")', function() {
        // TODO: update the code to test the property timezone
        expect(instance).to.have.property('timezone');
        // expect(instance.timezone).to.be(expectedValueLiteral);
      });

    });
  });

}));
