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
    describe('DecoratorType', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForAContentManagement.DecoratorType;
      });

      it('should create an instance of DecoratorType', function() {
        // TODO: update the code to test DecoratorType
        expect(instance).to.be.a('object');
      });

      it('should have the property LIST_ITEM', function() {
        expect(instance).to.have.property('LIST_ITEM');
        expect(instance.LIST_ITEM).to.be("LIST_ITEM");
      });

      it('should have the property LIST_ORDERED', function() {
        expect(instance).to.have.property('LIST_ORDERED');
        expect(instance.LIST_ORDERED).to.be("LIST_ORDERED");
      });

      it('should have the property LIST_UNORDERED', function() {
        expect(instance).to.have.property('LIST_UNORDERED');
        expect(instance.LIST_UNORDERED).to.be("LIST_UNORDERED");
      });

      it('should have the property STYLE_BOLD', function() {
        expect(instance).to.have.property('STYLE_BOLD');
        expect(instance.STYLE_BOLD).to.be("STYLE_BOLD");
      });

      it('should have the property STYLE_ITALIC', function() {
        expect(instance).to.have.property('STYLE_ITALIC');
        expect(instance.STYLE_ITALIC).to.be("STYLE_ITALIC");
      });

      it('should have the property STYLE_LINEBREAK', function() {
        expect(instance).to.have.property('STYLE_LINEBREAK');
        expect(instance.STYLE_LINEBREAK).to.be("STYLE_LINEBREAK");
      });

      it('should have the property STYLE_PARAGRAPH', function() {
        expect(instance).to.have.property('STYLE_PARAGRAPH');
        expect(instance.STYLE_PARAGRAPH).to.be("STYLE_PARAGRAPH");
      });

      it('should have the property STYLE_UNDERLINE', function() {
        expect(instance).to.have.property('STYLE_UNDERLINE');
        expect(instance.STYLE_UNDERLINE).to.be("STYLE_UNDERLINE");
      });

    });
  });

}));
