/*
 * Selling Partner API for A+ Content Management
 * With the A+ Content API, you can build applications that help selling partners add rich marketing content to their Amazon product detail pages. A+ content helps selling partners share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners assemble content by choosing from content modules and adding images and text.
 *
 * OpenAPI spec version: 2020-11-01
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
    define(['expect.js', '../../../src/aplusContent_2020-11-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/aplusContent_2020-11-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForAContentManagement);
  }
}(this, function(expect, SellingPartnerApiForAContentManagement) {
  'use strict';

  var instance;

  describe('aplusContent_2020-11-01', function() {
    describe('PostContentDocumentAsinRelationsRequest', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForAContentManagement.PostContentDocumentAsinRelationsRequest();
      });

      it('should create an instance of PostContentDocumentAsinRelationsRequest', function() {
        // TODO: update the code to test PostContentDocumentAsinRelationsRequest
        expect(instance).to.be.a(SellingPartnerApiForAContentManagement.PostContentDocumentAsinRelationsRequest);
      });

      it('should have the property asinSet (base name: "asinSet")', function() {
        // TODO: update the code to test the property asinSet
        expect(instance).to.have.property('asinSet');
        // expect(instance.asinSet).to.be(expectedValueLiteral);
      });

    });
  });

}));