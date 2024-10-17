/*
 * Selling Partner API for Uploads
 * The Uploads API lets you upload files that you can programmatically access using other Selling Partner APIs, such as the A+ Content API and the Messaging API.
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
    define(['expect.js', '../../../src/uploads_2020-11-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/uploads_2020-11-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForUploads);
  }
}(this, function(expect, SellingPartnerApiForUploads) {
  'use strict';

  var instance;

  describe('uploads_2020-11-01', function() {
    describe('UploadDestination', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForUploads.UploadDestination();
      });

      it('should create an instance of UploadDestination', function() {
        // TODO: update the code to test UploadDestination
        expect(instance).to.be.a(SellingPartnerApiForUploads.UploadDestination);
      });

      it('should have the property uploadDestinationId (base name: "uploadDestinationId")', function() {
        // TODO: update the code to test the property uploadDestinationId
        expect(instance).to.have.property('uploadDestinationId');
        // expect(instance.uploadDestinationId).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property headers (base name: "headers")', function() {
        // TODO: update the code to test the property headers
        expect(instance).to.have.property('headers');
        // expect(instance.headers).to.be(expectedValueLiteral);
      });

    });
  });

}));
