/*
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * OpenAPI spec version: 2022-11-07
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
    define(['expect.js', '../../../src/replenishment-2022-11-07/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/replenishment-2022-11-07/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForReplenishment);
  }
}(this, function(expect, SellingPartnerApiForReplenishment) {
  'use strict';

  var instance;

  describe('replenishment-2022-11-07', function() {
    describe('GetSellingPartnerMetricsRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsRequest();
      });

      it('should create an instance of GetSellingPartnerMetricsRequest', function() {
        // TODO: update the code to test GetSellingPartnerMetricsRequest
        expect(instance).to.be.a(SellingPartnerApiForReplenishment.GetSellingPartnerMetricsRequest);
      });

      it('should have the property aggregationFrequency (base name: "aggregationFrequency")', function() {
        // TODO: update the code to test the property aggregationFrequency
        expect(instance).to.have.property('aggregationFrequency');
        // expect(instance.aggregationFrequency).to.be(expectedValueLiteral);
      });

      it('should have the property timeInterval (base name: "timeInterval")', function() {
        // TODO: update the code to test the property timeInterval
        expect(instance).to.have.property('timeInterval');
        // expect(instance.timeInterval).to.be(expectedValueLiteral);
      });

      it('should have the property metrics (base name: "metrics")', function() {
        // TODO: update the code to test the property metrics
        expect(instance).to.have.property('metrics');
        // expect(instance.metrics).to.be(expectedValueLiteral);
      });

      it('should have the property timePeriodType (base name: "timePeriodType")', function() {
        // TODO: update the code to test the property timePeriodType
        expect(instance).to.have.property('timePeriodType');
        // expect(instance.timePeriodType).to.be(expectedValueLiteral);
      });

      it('should have the property marketplaceId (base name: "marketplaceId")', function() {
        // TODO: update the code to test the property marketplaceId
        expect(instance).to.have.property('marketplaceId');
        // expect(instance.marketplaceId).to.be(expectedValueLiteral);
      });

      it('should have the property programTypes (base name: "programTypes")', function() {
        // TODO: update the code to test the property programTypes
        expect(instance).to.have.property('programTypes');
        // expect(instance.programTypes).to.be(expectedValueLiteral);
      });

    });
  });

}));
