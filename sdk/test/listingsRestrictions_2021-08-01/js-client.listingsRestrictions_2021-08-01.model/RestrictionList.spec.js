/*
 * Selling Partner API for Listings Restrictions
 * The Selling Partner API for Listings Restrictions provides programmatic access to restrictions on Amazon catalog listings.  For more information, see the [Listings Restrictions API Use Case Guide](doc:listings-restrictions-api-v2021-08-01-use-case-guide).
 *
 * OpenAPI spec version: 2021-08-01
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
    define(['expect.js', '../../../src/listingsRestrictions_2021-08-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/listingsRestrictions_2021-08-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForListingsRestrictions);
  }
}(this, function(expect, SellingPartnerApiForListingsRestrictions) {
  'use strict';

  var instance;

  describe('listingsRestrictions_2021-08-01', function() {
    describe('RestrictionList', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForListingsRestrictions.RestrictionList();
      });

      it('should create an instance of RestrictionList', function() {
        // TODO: update the code to test RestrictionList
        expect(instance).to.be.a(SellingPartnerApiForListingsRestrictions.RestrictionList);
      });

      it('should have the property restrictions (base name: "restrictions")', function() {
        // TODO: update the code to test the property restrictions
        expect(instance).to.have.property('restrictions');
        // expect(instance.restrictions).to.be(expectedValueLiteral);
      });

    });
  });

}));
