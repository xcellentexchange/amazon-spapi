/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory. 
 *
 * OpenAPI spec version: 2024-05-09
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
    define(['expect.js', '../../../src/awd_2024-05-09/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/awd_2024-05-09/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForAmazonWarehousingAndDistribution);
  }
}(this, function(expect, TheSellingPartnerApiForAmazonWarehousingAndDistribution) {
  'use strict';

  var instance;

  describe('awd_2024-05-09', function() {
    describe('PackageVolume', function() {
      beforeEach(function() {
        instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.PackageVolume();
      });

      it('should create an instance of PackageVolume', function() {
        // TODO: update the code to test PackageVolume
        expect(instance).to.be.a(TheSellingPartnerApiForAmazonWarehousingAndDistribution.PackageVolume);
      });

      it('should have the property unitOfMeasurement (base name: "unitOfMeasurement")', function() {
        // TODO: update the code to test the property unitOfMeasurement
        expect(instance).to.have.property('unitOfMeasurement');
        // expect(instance.unitOfMeasurement).to.be(expectedValueLiteral);
      });

      it('should have the property volume (base name: "volume")', function() {
        // TODO: update the code to test the property volume
        expect(instance).to.have.property('volume');
        // expect(instance.volume).to.be(expectedValueLiteral);
      });

    });
  });

}));
