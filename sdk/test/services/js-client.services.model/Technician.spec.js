/*
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
    define(['expect.js', '../../../src/services/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/services/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForServices);
  }
}(this, function(expect, SellingPartnerApiForServices) {
  'use strict';

  var instance;

  describe('services', function() {
    describe('Technician', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForServices.Technician();
      });

      it('should create an instance of Technician', function() {
        // TODO: update the code to test Technician
        expect(instance).to.be.a(SellingPartnerApiForServices.Technician);
      });

      it('should have the property technicianId (base name: "technicianId")', function() {
        // TODO: update the code to test the property technicianId
        expect(instance).to.have.property('technicianId');
        // expect(instance.technicianId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

    });
  });

}));