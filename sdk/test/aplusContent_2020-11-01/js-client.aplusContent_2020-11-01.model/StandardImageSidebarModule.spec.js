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
    describe('StandardImageSidebarModule', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForAContentManagement.StandardImageSidebarModule();
      });

      it('should create an instance of StandardImageSidebarModule', function() {
        // TODO: update the code to test StandardImageSidebarModule
        expect(instance).to.be.a(SellingPartnerApiForAContentManagement.StandardImageSidebarModule);
      });

      it('should have the property headline (base name: "headline")', function() {
        // TODO: update the code to test the property headline
        expect(instance).to.have.property('headline');
        // expect(instance.headline).to.be(expectedValueLiteral);
      });

      it('should have the property imageCaptionBlock (base name: "imageCaptionBlock")', function() {
        // TODO: update the code to test the property imageCaptionBlock
        expect(instance).to.have.property('imageCaptionBlock');
        // expect(instance.imageCaptionBlock).to.be(expectedValueLiteral);
      });

      it('should have the property descriptionTextBlock (base name: "descriptionTextBlock")', function() {
        // TODO: update the code to test the property descriptionTextBlock
        expect(instance).to.have.property('descriptionTextBlock');
        // expect(instance.descriptionTextBlock).to.be(expectedValueLiteral);
      });

      it('should have the property descriptionListBlock (base name: "descriptionListBlock")', function() {
        // TODO: update the code to test the property descriptionListBlock
        expect(instance).to.have.property('descriptionListBlock');
        // expect(instance.descriptionListBlock).to.be(expectedValueLiteral);
      });

      it('should have the property sidebarImageTextBlock (base name: "sidebarImageTextBlock")', function() {
        // TODO: update the code to test the property sidebarImageTextBlock
        expect(instance).to.have.property('sidebarImageTextBlock');
        // expect(instance.sidebarImageTextBlock).to.be(expectedValueLiteral);
      });

      it('should have the property sidebarListBlock (base name: "sidebarListBlock")', function() {
        // TODO: update the code to test the property sidebarListBlock
        expect(instance).to.have.property('sidebarListBlock');
        // expect(instance.sidebarListBlock).to.be(expectedValueLiteral);
      });

    });
  });

}));
