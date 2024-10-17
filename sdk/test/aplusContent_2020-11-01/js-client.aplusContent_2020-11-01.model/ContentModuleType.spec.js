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
    describe('ContentModuleType', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForAContentManagement.ContentModuleType;
      });

      it('should create an instance of ContentModuleType', function() {
        // TODO: update the code to test ContentModuleType
        expect(instance).to.be.a('object');
      });

      it('should have the property COMPANY_LOGO', function() {
        expect(instance).to.have.property('COMPANY_LOGO');
        expect(instance.COMPANY_LOGO).to.be("STANDARD_COMPANY_LOGO");
      });

      it('should have the property COMPARISON_TABLE', function() {
        expect(instance).to.have.property('COMPARISON_TABLE');
        expect(instance.COMPARISON_TABLE).to.be("STANDARD_COMPARISON_TABLE");
      });

      it('should have the property FOUR_IMAGE_TEXT', function() {
        expect(instance).to.have.property('FOUR_IMAGE_TEXT');
        expect(instance.FOUR_IMAGE_TEXT).to.be("STANDARD_FOUR_IMAGE_TEXT");
      });

      it('should have the property FOUR_IMAGE_TEXT_QUADRANT', function() {
        expect(instance).to.have.property('FOUR_IMAGE_TEXT_QUADRANT');
        expect(instance.FOUR_IMAGE_TEXT_QUADRANT).to.be("STANDARD_FOUR_IMAGE_TEXT_QUADRANT");
      });

      it('should have the property HEADER_IMAGE_TEXT', function() {
        expect(instance).to.have.property('HEADER_IMAGE_TEXT');
        expect(instance.HEADER_IMAGE_TEXT).to.be("STANDARD_HEADER_IMAGE_TEXT");
      });

      it('should have the property IMAGE_SIDEBAR', function() {
        expect(instance).to.have.property('IMAGE_SIDEBAR');
        expect(instance.IMAGE_SIDEBAR).to.be("STANDARD_IMAGE_SIDEBAR");
      });

      it('should have the property IMAGE_TEXT_OVERLAY', function() {
        expect(instance).to.have.property('IMAGE_TEXT_OVERLAY');
        expect(instance.IMAGE_TEXT_OVERLAY).to.be("STANDARD_IMAGE_TEXT_OVERLAY");
      });

      it('should have the property MULTIPLE_IMAGE_TEXT', function() {
        expect(instance).to.have.property('MULTIPLE_IMAGE_TEXT');
        expect(instance.MULTIPLE_IMAGE_TEXT).to.be("STANDARD_MULTIPLE_IMAGE_TEXT");
      });

      it('should have the property PRODUCT_DESCRIPTION', function() {
        expect(instance).to.have.property('PRODUCT_DESCRIPTION');
        expect(instance.PRODUCT_DESCRIPTION).to.be("STANDARD_PRODUCT_DESCRIPTION");
      });

      it('should have the property SINGLE_IMAGE_HIGHLIGHTS', function() {
        expect(instance).to.have.property('SINGLE_IMAGE_HIGHLIGHTS');
        expect(instance.SINGLE_IMAGE_HIGHLIGHTS).to.be("STANDARD_SINGLE_IMAGE_HIGHLIGHTS");
      });

      it('should have the property SINGLE_IMAGE_SPECS_DETAIL', function() {
        expect(instance).to.have.property('SINGLE_IMAGE_SPECS_DETAIL');
        expect(instance.SINGLE_IMAGE_SPECS_DETAIL).to.be("STANDARD_SINGLE_IMAGE_SPECS_DETAIL");
      });

      it('should have the property SINGLE_SIDE_IMAGE', function() {
        expect(instance).to.have.property('SINGLE_SIDE_IMAGE');
        expect(instance.SINGLE_SIDE_IMAGE).to.be("STANDARD_SINGLE_SIDE_IMAGE");
      });

      it('should have the property TECH_SPECS', function() {
        expect(instance).to.have.property('TECH_SPECS');
        expect(instance.TECH_SPECS).to.be("STANDARD_TECH_SPECS");
      });

      it('should have the property TEXT', function() {
        expect(instance).to.have.property('TEXT');
        expect(instance.TEXT).to.be("STANDARD_TEXT");
      });

      it('should have the property THREE_IMAGE_TEXT', function() {
        expect(instance).to.have.property('THREE_IMAGE_TEXT');
        expect(instance.THREE_IMAGE_TEXT).to.be("STANDARD_THREE_IMAGE_TEXT");
      });

    });
  });

}));