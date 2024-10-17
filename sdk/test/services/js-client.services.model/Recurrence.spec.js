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
    describe('Recurrence', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForServices.Recurrence();
      });

      it('should create an instance of Recurrence', function() {
        // TODO: update the code to test Recurrence
        expect(instance).to.be.a(SellingPartnerApiForServices.Recurrence);
      });

      it('should have the property endTime (base name: "endTime")', function() {
        // TODO: update the code to test the property endTime
        expect(instance).to.have.property('endTime');
        // expect(instance.endTime).to.be(expectedValueLiteral);
      });

      it('should have the property daysOfWeek (base name: "daysOfWeek")', function() {
        // TODO: update the code to test the property daysOfWeek
        expect(instance).to.have.property('daysOfWeek');
        // expect(instance.daysOfWeek).to.be(expectedValueLiteral);
      });

      it('should have the property daysOfMonth (base name: "daysOfMonth")', function() {
        // TODO: update the code to test the property daysOfMonth
        expect(instance).to.have.property('daysOfMonth');
        // expect(instance.daysOfMonth).to.be(expectedValueLiteral);
      });

    });
  });

}));