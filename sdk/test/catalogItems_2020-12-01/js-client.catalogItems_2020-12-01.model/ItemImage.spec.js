/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, see the [Catalog Items API Use Case Guide](doc:catalog-items-api-v2020-12-01-use-case-guide).
 *
 * OpenAPI spec version: 2020-12-01
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
    define(['expect.js', '../../../src/catalogItems_2020-12-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/catalogItems_2020-12-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForCatalogItems);
  }
}(this, function(expect, SellingPartnerApiForCatalogItems) {
  'use strict';

  var instance;

  describe('catalogItems_2020-12-01', function() {
    describe('ItemImage', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForCatalogItems.ItemImage();
      });

      it('should create an instance of ItemImage', function() {
        // TODO: update the code to test ItemImage
        expect(instance).to.be.a(SellingPartnerApiForCatalogItems.ItemImage);
      });

      it('should have the property variant (base name: "variant")', function() {
        // TODO: update the code to test the property variant
        expect(instance).to.have.property('variant');
        // expect(instance.variant).to.be(expectedValueLiteral);
      });

      it('should have the property link (base name: "link")', function() {
        // TODO: update the code to test the property link
        expect(instance).to.have.property('link');
        // expect(instance.link).to.be(expectedValueLiteral);
      });

      it('should have the property height (base name: "height")', function() {
        // TODO: update the code to test the property height
        expect(instance).to.have.property('height');
        // expect(instance.height).to.be(expectedValueLiteral);
      });

      it('should have the property width (base name: "width")', function() {
        // TODO: update the code to test the property width
        expect(instance).to.have.property('width');
        // expect(instance.width).to.be(expectedValueLiteral);
      });

    });
  });

}));
