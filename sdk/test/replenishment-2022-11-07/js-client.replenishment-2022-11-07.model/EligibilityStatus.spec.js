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
    describe('EligibilityStatus', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForReplenishment.EligibilityStatus;
      });

      it('should create an instance of EligibilityStatus', function() {
        // TODO: update the code to test EligibilityStatus
        expect(instance).to.be.a('object');
      });

      it('should have the property ELIGIBLE', function() {
        expect(instance).to.have.property('ELIGIBLE');
        expect(instance.ELIGIBLE).to.be("ELIGIBLE");
      });

      it('should have the property INELIGIBLE', function() {
        expect(instance).to.have.property('INELIGIBLE');
        expect(instance.INELIGIBLE).to.be("INELIGIBLE");
      });

      it('should have the property SUSPENDED', function() {
        expect(instance).to.have.property('SUSPENDED');
        expect(instance.SUSPENDED).to.be("SUSPENDED");
      });

      it('should have the property REPLENISHMENT_ONLY_ORDERING', function() {
        expect(instance).to.have.property('REPLENISHMENT_ONLY_ORDERING');
        expect(instance.REPLENISHMENT_ONLY_ORDERING).to.be("REPLENISHMENT_ONLY_ORDERING");
      });

    });
  });

}));