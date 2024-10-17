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
    describe('ServiceJob', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForServices.ServiceJob();
      });

      it('should create an instance of ServiceJob', function() {
        // TODO: update the code to test ServiceJob
        expect(instance).to.be.a(SellingPartnerApiForServices.ServiceJob);
      });

      it('should have the property createTime (base name: "createTime")', function() {
        // TODO: update the code to test the property createTime
        expect(instance).to.have.property('createTime');
        // expect(instance.createTime).to.be(expectedValueLiteral);
      });

      it('should have the property serviceJobId (base name: "serviceJobId")', function() {
        // TODO: update the code to test the property serviceJobId
        expect(instance).to.have.property('serviceJobId');
        // expect(instance.serviceJobId).to.be(expectedValueLiteral);
      });

      it('should have the property serviceJobStatus (base name: "serviceJobStatus")', function() {
        // TODO: update the code to test the property serviceJobStatus
        expect(instance).to.have.property('serviceJobStatus');
        // expect(instance.serviceJobStatus).to.be(expectedValueLiteral);
      });

      it('should have the property scopeOfWork (base name: "scopeOfWork")', function() {
        // TODO: update the code to test the property scopeOfWork
        expect(instance).to.have.property('scopeOfWork');
        // expect(instance.scopeOfWork).to.be(expectedValueLiteral);
      });

      it('should have the property seller (base name: "seller")', function() {
        // TODO: update the code to test the property seller
        expect(instance).to.have.property('seller');
        // expect(instance.seller).to.be(expectedValueLiteral);
      });

      it('should have the property serviceJobProvider (base name: "serviceJobProvider")', function() {
        // TODO: update the code to test the property serviceJobProvider
        expect(instance).to.have.property('serviceJobProvider');
        // expect(instance.serviceJobProvider).to.be(expectedValueLiteral);
      });

      it('should have the property preferredAppointmentTimes (base name: "preferredAppointmentTimes")', function() {
        // TODO: update the code to test the property preferredAppointmentTimes
        expect(instance).to.have.property('preferredAppointmentTimes');
        // expect(instance.preferredAppointmentTimes).to.be(expectedValueLiteral);
      });

      it('should have the property appointments (base name: "appointments")', function() {
        // TODO: update the code to test the property appointments
        expect(instance).to.have.property('appointments');
        // expect(instance.appointments).to.be(expectedValueLiteral);
      });

      it('should have the property serviceOrderId (base name: "serviceOrderId")', function() {
        // TODO: update the code to test the property serviceOrderId
        expect(instance).to.have.property('serviceOrderId');
        // expect(instance.serviceOrderId).to.be(expectedValueLiteral);
      });

      it('should have the property marketplaceId (base name: "marketplaceId")', function() {
        // TODO: update the code to test the property marketplaceId
        expect(instance).to.have.property('marketplaceId');
        // expect(instance.marketplaceId).to.be(expectedValueLiteral);
      });

      it('should have the property storeId (base name: "storeId")', function() {
        // TODO: update the code to test the property storeId
        expect(instance).to.have.property('storeId');
        // expect(instance.storeId).to.be(expectedValueLiteral);
      });

      it('should have the property buyer (base name: "buyer")', function() {
        // TODO: update the code to test the property buyer
        expect(instance).to.have.property('buyer');
        // expect(instance.buyer).to.be(expectedValueLiteral);
      });

      it('should have the property associatedItems (base name: "associatedItems")', function() {
        // TODO: update the code to test the property associatedItems
        expect(instance).to.have.property('associatedItems');
        // expect(instance.associatedItems).to.be(expectedValueLiteral);
      });

      it('should have the property serviceLocation (base name: "serviceLocation")', function() {
        // TODO: update the code to test the property serviceLocation
        expect(instance).to.have.property('serviceLocation');
        // expect(instance.serviceLocation).to.be(expectedValueLiteral);
      });

    });
  });

}));
