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
    describe('ListOffersRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForReplenishment.ListOffersRequest();
      });

      it('should create an instance of ListOffersRequest', function() {
        // TODO: update the code to test ListOffersRequest
        expect(instance).to.be.a(SellingPartnerApiForReplenishment.ListOffersRequest);
      });

      it('should have the property pagination (base name: "pagination")', function() {
        // TODO: update the code to test the property pagination
        expect(instance).to.have.property('pagination');
        // expect(instance.pagination).to.be(expectedValueLiteral);
      });

      it('should have the property filters (base name: "filters")', function() {
        // TODO: update the code to test the property filters
        expect(instance).to.have.property('filters');
        // expect(instance.filters).to.be(expectedValueLiteral);
      });

      it('should have the property sort (base name: "sort")', function() {
        // TODO: update the code to test the property sort
        expect(instance).to.have.property('sort');
        // expect(instance.sort).to.be(expectedValueLiteral);
      });

    });
  });

}));