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
    describe('StandardSingleImageSpecsDetailModule', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForAContentManagement.StandardSingleImageSpecsDetailModule();
      });

      it('should create an instance of StandardSingleImageSpecsDetailModule', function() {
        // TODO: update the code to test StandardSingleImageSpecsDetailModule
        expect(instance).to.be.a(SellingPartnerApiForAContentManagement.StandardSingleImageSpecsDetailModule);
      });

      it('should have the property headline (base name: "headline")', function() {
        // TODO: update the code to test the property headline
        expect(instance).to.have.property('headline');
        // expect(instance.headline).to.be(expectedValueLiteral);
      });

      it('should have the property image (base name: "image")', function() {
        // TODO: update the code to test the property image
        expect(instance).to.have.property('image');
        // expect(instance.image).to.be(expectedValueLiteral);
      });

      it('should have the property descriptionHeadline (base name: "descriptionHeadline")', function() {
        // TODO: update the code to test the property descriptionHeadline
        expect(instance).to.have.property('descriptionHeadline');
        // expect(instance.descriptionHeadline).to.be(expectedValueLiteral);
      });

      it('should have the property descriptionBlock1 (base name: "descriptionBlock1")', function() {
        // TODO: update the code to test the property descriptionBlock1
        expect(instance).to.have.property('descriptionBlock1');
        // expect(instance.descriptionBlock1).to.be(expectedValueLiteral);
      });

      it('should have the property descriptionBlock2 (base name: "descriptionBlock2")', function() {
        // TODO: update the code to test the property descriptionBlock2
        expect(instance).to.have.property('descriptionBlock2');
        // expect(instance.descriptionBlock2).to.be(expectedValueLiteral);
      });

      it('should have the property specificationHeadline (base name: "specificationHeadline")', function() {
        // TODO: update the code to test the property specificationHeadline
        expect(instance).to.have.property('specificationHeadline');
        // expect(instance.specificationHeadline).to.be(expectedValueLiteral);
      });

      it('should have the property specificationListBlock (base name: "specificationListBlock")', function() {
        // TODO: update the code to test the property specificationListBlock
        expect(instance).to.have.property('specificationListBlock');
        // expect(instance.specificationListBlock).to.be(expectedValueLiteral);
      });

      it('should have the property specificationTextBlock (base name: "specificationTextBlock")', function() {
        // TODO: update the code to test the property specificationTextBlock
        expect(instance).to.have.property('specificationTextBlock');
        // expect(instance.specificationTextBlock).to.be(expectedValueLiteral);
      });

    });
  });

}));