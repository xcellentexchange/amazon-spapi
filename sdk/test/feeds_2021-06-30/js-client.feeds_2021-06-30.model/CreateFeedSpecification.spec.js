/*
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * OpenAPI spec version: 2021-06-30
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
    define(['expect.js', '../../../src/feeds_2021-06-30/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/feeds_2021-06-30/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFeeds);
  }
}(this, function(expect, SellingPartnerApiForFeeds) {
  'use strict';

  var instance;

  describe('feeds_2021-06-30', function() {
    describe('CreateFeedSpecification', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFeeds.CreateFeedSpecification();
      });

      it('should create an instance of CreateFeedSpecification', function() {
        // TODO: update the code to test CreateFeedSpecification
        expect(instance).to.be.a(SellingPartnerApiForFeeds.CreateFeedSpecification);
      });

      it('should have the property feedType (base name: "feedType")', function() {
        // TODO: update the code to test the property feedType
        expect(instance).to.have.property('feedType');
        // expect(instance.feedType).to.be(expectedValueLiteral);
      });

      it('should have the property marketplaceIds (base name: "marketplaceIds")', function() {
        // TODO: update the code to test the property marketplaceIds
        expect(instance).to.have.property('marketplaceIds');
        // expect(instance.marketplaceIds).to.be(expectedValueLiteral);
      });

      it('should have the property inputFeedDocumentId (base name: "inputFeedDocumentId")', function() {
        // TODO: update the code to test the property inputFeedDocumentId
        expect(instance).to.have.property('inputFeedDocumentId');
        // expect(instance.inputFeedDocumentId).to.be(expectedValueLiteral);
      });

      it('should have the property feedOptions (base name: "feedOptions")', function() {
        // TODO: update the code to test the property feedOptions
        expect(instance).to.have.property('feedOptions');
        // expect(instance.feedOptions).to.be(expectedValueLiteral);
      });

    });
  });

}));