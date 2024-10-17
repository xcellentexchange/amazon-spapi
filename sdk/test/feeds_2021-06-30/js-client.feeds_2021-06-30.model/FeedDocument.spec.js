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
    describe('FeedDocument', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFeeds.FeedDocument();
      });

      it('should create an instance of FeedDocument', function() {
        // TODO: update the code to test FeedDocument
        expect(instance).to.be.a(SellingPartnerApiForFeeds.FeedDocument);
      });

      it('should have the property feedDocumentId (base name: "feedDocumentId")', function() {
        // TODO: update the code to test the property feedDocumentId
        expect(instance).to.have.property('feedDocumentId');
        // expect(instance.feedDocumentId).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property compressionAlgorithm (base name: "compressionAlgorithm")', function() {
        // TODO: update the code to test the property compressionAlgorithm
        expect(instance).to.have.property('compressionAlgorithm');
        // expect(instance.compressionAlgorithm).to.be(expectedValueLiteral);
      });

    });
  });

}));
