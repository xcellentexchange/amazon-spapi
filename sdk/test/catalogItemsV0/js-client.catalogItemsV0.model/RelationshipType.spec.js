/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
 *
 * OpenAPI spec version: v0
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
    define(['expect.js', '../../../src/catalogItemsV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/catalogItemsV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForCatalogItems);
  }
}(this, function(expect, SellingPartnerApiForCatalogItems) {
  'use strict';

  var instance;

  describe('catalogItemsV0', function() {
    describe('RelationshipType', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForCatalogItems.RelationshipType();
      });

      it('should create an instance of RelationshipType', function() {
        // TODO: update the code to test RelationshipType
        expect(instance).to.be.a(SellingPartnerApiForCatalogItems.RelationshipType);
      });

      it('should have the property identifiers (base name: "Identifiers")', function() {
        // TODO: update the code to test the property identifiers
        expect(instance).to.have.property('identifiers');
        // expect(instance.identifiers).to.be(expectedValueLiteral);
      });

      it('should have the property color (base name: "Color")', function() {
        // TODO: update the code to test the property color
        expect(instance).to.have.property('color');
        // expect(instance.color).to.be(expectedValueLiteral);
      });

      it('should have the property edition (base name: "Edition")', function() {
        // TODO: update the code to test the property edition
        expect(instance).to.have.property('edition');
        // expect(instance.edition).to.be(expectedValueLiteral);
      });

      it('should have the property flavor (base name: "Flavor")', function() {
        // TODO: update the code to test the property flavor
        expect(instance).to.have.property('flavor');
        // expect(instance.flavor).to.be(expectedValueLiteral);
      });

      it('should have the property gemType (base name: "GemType")', function() {
        // TODO: update the code to test the property gemType
        expect(instance).to.have.property('gemType');
        // expect(instance.gemType).to.be(expectedValueLiteral);
      });

      it('should have the property golfClubFlex (base name: "GolfClubFlex")', function() {
        // TODO: update the code to test the property golfClubFlex
        expect(instance).to.have.property('golfClubFlex');
        // expect(instance.golfClubFlex).to.be(expectedValueLiteral);
      });

      it('should have the property handOrientation (base name: "HandOrientation")', function() {
        // TODO: update the code to test the property handOrientation
        expect(instance).to.have.property('handOrientation');
        // expect(instance.handOrientation).to.be(expectedValueLiteral);
      });

      it('should have the property hardwarePlatform (base name: "HardwarePlatform")', function() {
        // TODO: update the code to test the property hardwarePlatform
        expect(instance).to.have.property('hardwarePlatform');
        // expect(instance.hardwarePlatform).to.be(expectedValueLiteral);
      });

      it('should have the property materialType (base name: "MaterialType")', function() {
        // TODO: update the code to test the property materialType
        expect(instance).to.have.property('materialType');
        // expect(instance.materialType).to.be(expectedValueLiteral);
      });

      it('should have the property metalType (base name: "MetalType")', function() {
        // TODO: update the code to test the property metalType
        expect(instance).to.have.property('metalType');
        // expect(instance.metalType).to.be(expectedValueLiteral);
      });

      it('should have the property model (base name: "Model")', function() {
        // TODO: update the code to test the property model
        expect(instance).to.have.property('model');
        // expect(instance.model).to.be(expectedValueLiteral);
      });

      it('should have the property operatingSystem (base name: "OperatingSystem")', function() {
        // TODO: update the code to test the property operatingSystem
        expect(instance).to.have.property('operatingSystem');
        // expect(instance.operatingSystem).to.be(expectedValueLiteral);
      });

      it('should have the property productTypeSubcategory (base name: "ProductTypeSubcategory")', function() {
        // TODO: update the code to test the property productTypeSubcategory
        expect(instance).to.have.property('productTypeSubcategory');
        // expect(instance.productTypeSubcategory).to.be(expectedValueLiteral);
      });

      it('should have the property ringSize (base name: "RingSize")', function() {
        // TODO: update the code to test the property ringSize
        expect(instance).to.have.property('ringSize');
        // expect(instance.ringSize).to.be(expectedValueLiteral);
      });

      it('should have the property shaftMaterial (base name: "ShaftMaterial")', function() {
        // TODO: update the code to test the property shaftMaterial
        expect(instance).to.have.property('shaftMaterial');
        // expect(instance.shaftMaterial).to.be(expectedValueLiteral);
      });

      it('should have the property scent (base name: "Scent")', function() {
        // TODO: update the code to test the property scent
        expect(instance).to.have.property('scent');
        // expect(instance.scent).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "Size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

      it('should have the property sizePerPearl (base name: "SizePerPearl")', function() {
        // TODO: update the code to test the property sizePerPearl
        expect(instance).to.have.property('sizePerPearl');
        // expect(instance.sizePerPearl).to.be(expectedValueLiteral);
      });

      it('should have the property golfClubLoft (base name: "GolfClubLoft")', function() {
        // TODO: update the code to test the property golfClubLoft
        expect(instance).to.have.property('golfClubLoft');
        // expect(instance.golfClubLoft).to.be(expectedValueLiteral);
      });

      it('should have the property totalDiamondWeight (base name: "TotalDiamondWeight")', function() {
        // TODO: update the code to test the property totalDiamondWeight
        expect(instance).to.have.property('totalDiamondWeight');
        // expect(instance.totalDiamondWeight).to.be(expectedValueLiteral);
      });

      it('should have the property totalGemWeight (base name: "TotalGemWeight")', function() {
        // TODO: update the code to test the property totalGemWeight
        expect(instance).to.have.property('totalGemWeight');
        // expect(instance.totalGemWeight).to.be(expectedValueLiteral);
      });

      it('should have the property packageQuantity (base name: "PackageQuantity")', function() {
        // TODO: update the code to test the property packageQuantity
        expect(instance).to.have.property('packageQuantity');
        // expect(instance.packageQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property itemDimensions (base name: "ItemDimensions")', function() {
        // TODO: update the code to test the property itemDimensions
        expect(instance).to.have.property('itemDimensions');
        // expect(instance.itemDimensions).to.be(expectedValueLiteral);
      });

    });
  });

}));
