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
    describe('Poa', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForServices.Poa();
      });

      it('should create an instance of Poa', function() {
        // TODO: update the code to test Poa
        expect(instance).to.be.a(SellingPartnerApiForServices.Poa);
      });

      it('should have the property appointmentTime (base name: "appointmentTime")', function() {
        // TODO: update the code to test the property appointmentTime
        expect(instance).to.have.property('appointmentTime');
        // expect(instance.appointmentTime).to.be(expectedValueLiteral);
      });

      it('should have the property technicians (base name: "technicians")', function() {
        // TODO: update the code to test the property technicians
        expect(instance).to.have.property('technicians');
        // expect(instance.technicians).to.be(expectedValueLiteral);
      });

      it('should have the property uploadingTechnician (base name: "uploadingTechnician")', function() {
        // TODO: update the code to test the property uploadingTechnician
        expect(instance).to.have.property('uploadingTechnician');
        // expect(instance.uploadingTechnician).to.be(expectedValueLiteral);
      });

      it('should have the property uploadTime (base name: "uploadTime")', function() {
        // TODO: update the code to test the property uploadTime
        expect(instance).to.have.property('uploadTime');
        // expect(instance.uploadTime).to.be(expectedValueLiteral);
      });

      it('should have the property poaType (base name: "poaType")', function() {
        // TODO: update the code to test the property poaType
        expect(instance).to.have.property('poaType');
        // expect(instance.poaType).to.be(expectedValueLiteral);
      });

    });
  });

}));
