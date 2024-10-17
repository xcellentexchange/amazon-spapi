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
    describe('AttributeSetListType', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForCatalogItems.AttributeSetListType();
      });

      it('should create an instance of AttributeSetListType', function() {
        // TODO: update the code to test AttributeSetListType
        expect(instance).to.be.a(SellingPartnerApiForCatalogItems.AttributeSetListType);
      });

      it('should have the property actor (base name: "Actor")', function() {
        // TODO: update the code to test the property actor
        expect(instance).to.have.property('actor');
        // expect(instance.actor).to.be(expectedValueLiteral);
      });

      it('should have the property artist (base name: "Artist")', function() {
        // TODO: update the code to test the property artist
        expect(instance).to.have.property('artist');
        // expect(instance.artist).to.be(expectedValueLiteral);
      });

      it('should have the property aspectRatio (base name: "AspectRatio")', function() {
        // TODO: update the code to test the property aspectRatio
        expect(instance).to.have.property('aspectRatio');
        // expect(instance.aspectRatio).to.be(expectedValueLiteral);
      });

      it('should have the property audienceRating (base name: "AudienceRating")', function() {
        // TODO: update the code to test the property audienceRating
        expect(instance).to.have.property('audienceRating');
        // expect(instance.audienceRating).to.be(expectedValueLiteral);
      });

      it('should have the property author (base name: "Author")', function() {
        // TODO: update the code to test the property author
        expect(instance).to.have.property('author');
        // expect(instance.author).to.be(expectedValueLiteral);
      });

      it('should have the property backFinding (base name: "BackFinding")', function() {
        // TODO: update the code to test the property backFinding
        expect(instance).to.have.property('backFinding');
        // expect(instance.backFinding).to.be(expectedValueLiteral);
      });

      it('should have the property bandMaterialType (base name: "BandMaterialType")', function() {
        // TODO: update the code to test the property bandMaterialType
        expect(instance).to.have.property('bandMaterialType');
        // expect(instance.bandMaterialType).to.be(expectedValueLiteral);
      });

      it('should have the property binding (base name: "Binding")', function() {
        // TODO: update the code to test the property binding
        expect(instance).to.have.property('binding');
        // expect(instance.binding).to.be(expectedValueLiteral);
      });

      it('should have the property blurayRegion (base name: "BlurayRegion")', function() {
        // TODO: update the code to test the property blurayRegion
        expect(instance).to.have.property('blurayRegion');
        // expect(instance.blurayRegion).to.be(expectedValueLiteral);
      });

      it('should have the property brand (base name: "Brand")', function() {
        // TODO: update the code to test the property brand
        expect(instance).to.have.property('brand');
        // expect(instance.brand).to.be(expectedValueLiteral);
      });

      it('should have the property ceroAgeRating (base name: "CeroAgeRating")', function() {
        // TODO: update the code to test the property ceroAgeRating
        expect(instance).to.have.property('ceroAgeRating');
        // expect(instance.ceroAgeRating).to.be(expectedValueLiteral);
      });

      it('should have the property chainType (base name: "ChainType")', function() {
        // TODO: update the code to test the property chainType
        expect(instance).to.have.property('chainType');
        // expect(instance.chainType).to.be(expectedValueLiteral);
      });

      it('should have the property claspType (base name: "ClaspType")', function() {
        // TODO: update the code to test the property claspType
        expect(instance).to.have.property('claspType');
        // expect(instance.claspType).to.be(expectedValueLiteral);
      });

      it('should have the property color (base name: "Color")', function() {
        // TODO: update the code to test the property color
        expect(instance).to.have.property('color');
        // expect(instance.color).to.be(expectedValueLiteral);
      });

      it('should have the property cpuManufacturer (base name: "CpuManufacturer")', function() {
        // TODO: update the code to test the property cpuManufacturer
        expect(instance).to.have.property('cpuManufacturer');
        // expect(instance.cpuManufacturer).to.be(expectedValueLiteral);
      });

      it('should have the property cpuSpeed (base name: "CpuSpeed")', function() {
        // TODO: update the code to test the property cpuSpeed
        expect(instance).to.have.property('cpuSpeed');
        // expect(instance.cpuSpeed).to.be(expectedValueLiteral);
      });

      it('should have the property cpuType (base name: "CpuType")', function() {
        // TODO: update the code to test the property cpuType
        expect(instance).to.have.property('cpuType');
        // expect(instance.cpuType).to.be(expectedValueLiteral);
      });

      it('should have the property creator (base name: "Creator")', function() {
        // TODO: update the code to test the property creator
        expect(instance).to.have.property('creator');
        // expect(instance.creator).to.be(expectedValueLiteral);
      });

      it('should have the property department (base name: "Department")', function() {
        // TODO: update the code to test the property department
        expect(instance).to.have.property('department');
        // expect(instance.department).to.be(expectedValueLiteral);
      });

      it('should have the property director (base name: "Director")', function() {
        // TODO: update the code to test the property director
        expect(instance).to.have.property('director');
        // expect(instance.director).to.be(expectedValueLiteral);
      });

      it('should have the property displaySize (base name: "DisplaySize")', function() {
        // TODO: update the code to test the property displaySize
        expect(instance).to.have.property('displaySize');
        // expect(instance.displaySize).to.be(expectedValueLiteral);
      });

      it('should have the property edition (base name: "Edition")', function() {
        // TODO: update the code to test the property edition
        expect(instance).to.have.property('edition');
        // expect(instance.edition).to.be(expectedValueLiteral);
      });

      it('should have the property episodeSequence (base name: "EpisodeSequence")', function() {
        // TODO: update the code to test the property episodeSequence
        expect(instance).to.have.property('episodeSequence');
        // expect(instance.episodeSequence).to.be(expectedValueLiteral);
      });

      it('should have the property esrbAgeRating (base name: "EsrbAgeRating")', function() {
        // TODO: update the code to test the property esrbAgeRating
        expect(instance).to.have.property('esrbAgeRating');
        // expect(instance.esrbAgeRating).to.be(expectedValueLiteral);
      });

      it('should have the property feature (base name: "Feature")', function() {
        // TODO: update the code to test the property feature
        expect(instance).to.have.property('feature');
        // expect(instance.feature).to.be(expectedValueLiteral);
      });

      it('should have the property flavor (base name: "Flavor")', function() {
        // TODO: update the code to test the property flavor
        expect(instance).to.have.property('flavor');
        // expect(instance.flavor).to.be(expectedValueLiteral);
      });

      it('should have the property format (base name: "Format")', function() {
        // TODO: update the code to test the property format
        expect(instance).to.have.property('format');
        // expect(instance.format).to.be(expectedValueLiteral);
      });

      it('should have the property gemType (base name: "GemType")', function() {
        // TODO: update the code to test the property gemType
        expect(instance).to.have.property('gemType');
        // expect(instance.gemType).to.be(expectedValueLiteral);
      });

      it('should have the property genre (base name: "Genre")', function() {
        // TODO: update the code to test the property genre
        expect(instance).to.have.property('genre');
        // expect(instance.genre).to.be(expectedValueLiteral);
      });

      it('should have the property golfClubFlex (base name: "GolfClubFlex")', function() {
        // TODO: update the code to test the property golfClubFlex
        expect(instance).to.have.property('golfClubFlex');
        // expect(instance.golfClubFlex).to.be(expectedValueLiteral);
      });

      it('should have the property golfClubLoft (base name: "GolfClubLoft")', function() {
        // TODO: update the code to test the property golfClubLoft
        expect(instance).to.have.property('golfClubLoft');
        // expect(instance.golfClubLoft).to.be(expectedValueLiteral);
      });

      it('should have the property handOrientation (base name: "HandOrientation")', function() {
        // TODO: update the code to test the property handOrientation
        expect(instance).to.have.property('handOrientation');
        // expect(instance.handOrientation).to.be(expectedValueLiteral);
      });

      it('should have the property hardDiskInterface (base name: "HardDiskInterface")', function() {
        // TODO: update the code to test the property hardDiskInterface
        expect(instance).to.have.property('hardDiskInterface');
        // expect(instance.hardDiskInterface).to.be(expectedValueLiteral);
      });

      it('should have the property hardDiskSize (base name: "HardDiskSize")', function() {
        // TODO: update the code to test the property hardDiskSize
        expect(instance).to.have.property('hardDiskSize');
        // expect(instance.hardDiskSize).to.be(expectedValueLiteral);
      });

      it('should have the property hardwarePlatform (base name: "HardwarePlatform")', function() {
        // TODO: update the code to test the property hardwarePlatform
        expect(instance).to.have.property('hardwarePlatform');
        // expect(instance.hardwarePlatform).to.be(expectedValueLiteral);
      });

      it('should have the property hazardousMaterialType (base name: "HazardousMaterialType")', function() {
        // TODO: update the code to test the property hazardousMaterialType
        expect(instance).to.have.property('hazardousMaterialType');
        // expect(instance.hazardousMaterialType).to.be(expectedValueLiteral);
      });

      it('should have the property itemDimensions (base name: "ItemDimensions")', function() {
        // TODO: update the code to test the property itemDimensions
        expect(instance).to.have.property('itemDimensions');
        // expect(instance.itemDimensions).to.be(expectedValueLiteral);
      });

      it('should have the property isAdultProduct (base name: "IsAdultProduct")', function() {
        // TODO: update the code to test the property isAdultProduct
        expect(instance).to.have.property('isAdultProduct');
        // expect(instance.isAdultProduct).to.be(expectedValueLiteral);
      });

      it('should have the property isAutographed (base name: "IsAutographed")', function() {
        // TODO: update the code to test the property isAutographed
        expect(instance).to.have.property('isAutographed');
        // expect(instance.isAutographed).to.be(expectedValueLiteral);
      });

      it('should have the property isEligibleForTradeIn (base name: "IsEligibleForTradeIn")', function() {
        // TODO: update the code to test the property isEligibleForTradeIn
        expect(instance).to.have.property('isEligibleForTradeIn');
        // expect(instance.isEligibleForTradeIn).to.be(expectedValueLiteral);
      });

      it('should have the property isMemorabilia (base name: "IsMemorabilia")', function() {
        // TODO: update the code to test the property isMemorabilia
        expect(instance).to.have.property('isMemorabilia');
        // expect(instance.isMemorabilia).to.be(expectedValueLiteral);
      });

      it('should have the property issuesPerYear (base name: "IssuesPerYear")', function() {
        // TODO: update the code to test the property issuesPerYear
        expect(instance).to.have.property('issuesPerYear');
        // expect(instance.issuesPerYear).to.be(expectedValueLiteral);
      });

      it('should have the property itemPartNumber (base name: "ItemPartNumber")', function() {
        // TODO: update the code to test the property itemPartNumber
        expect(instance).to.have.property('itemPartNumber');
        // expect(instance.itemPartNumber).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "Label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

      it('should have the property languages (base name: "Languages")', function() {
        // TODO: update the code to test the property languages
        expect(instance).to.have.property('languages');
        // expect(instance.languages).to.be(expectedValueLiteral);
      });

      it('should have the property legalDisclaimer (base name: "LegalDisclaimer")', function() {
        // TODO: update the code to test the property legalDisclaimer
        expect(instance).to.have.property('legalDisclaimer');
        // expect(instance.legalDisclaimer).to.be(expectedValueLiteral);
      });

      it('should have the property listPrice (base name: "ListPrice")', function() {
        // TODO: update the code to test the property listPrice
        expect(instance).to.have.property('listPrice');
        // expect(instance.listPrice).to.be(expectedValueLiteral);
      });

      it('should have the property manufacturer (base name: "Manufacturer")', function() {
        // TODO: update the code to test the property manufacturer
        expect(instance).to.have.property('manufacturer');
        // expect(instance.manufacturer).to.be(expectedValueLiteral);
      });

      it('should have the property manufacturerMaximumAge (base name: "ManufacturerMaximumAge")', function() {
        // TODO: update the code to test the property manufacturerMaximumAge
        expect(instance).to.have.property('manufacturerMaximumAge');
        // expect(instance.manufacturerMaximumAge).to.be(expectedValueLiteral);
      });

      it('should have the property manufacturerMinimumAge (base name: "ManufacturerMinimumAge")', function() {
        // TODO: update the code to test the property manufacturerMinimumAge
        expect(instance).to.have.property('manufacturerMinimumAge');
        // expect(instance.manufacturerMinimumAge).to.be(expectedValueLiteral);
      });

      it('should have the property manufacturerPartsWarrantyDescription (base name: "ManufacturerPartsWarrantyDescription")', function() {
        // TODO: update the code to test the property manufacturerPartsWarrantyDescription
        expect(instance).to.have.property('manufacturerPartsWarrantyDescription');
        // expect(instance.manufacturerPartsWarrantyDescription).to.be(expectedValueLiteral);
      });

      it('should have the property materialType (base name: "MaterialType")', function() {
        // TODO: update the code to test the property materialType
        expect(instance).to.have.property('materialType');
        // expect(instance.materialType).to.be(expectedValueLiteral);
      });

      it('should have the property maximumResolution (base name: "MaximumResolution")', function() {
        // TODO: update the code to test the property maximumResolution
        expect(instance).to.have.property('maximumResolution');
        // expect(instance.maximumResolution).to.be(expectedValueLiteral);
      });

      it('should have the property mediaType (base name: "MediaType")', function() {
        // TODO: update the code to test the property mediaType
        expect(instance).to.have.property('mediaType');
        // expect(instance.mediaType).to.be(expectedValueLiteral);
      });

      it('should have the property metalStamp (base name: "MetalStamp")', function() {
        // TODO: update the code to test the property metalStamp
        expect(instance).to.have.property('metalStamp');
        // expect(instance.metalStamp).to.be(expectedValueLiteral);
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

      it('should have the property numberOfDiscs (base name: "NumberOfDiscs")', function() {
        // TODO: update the code to test the property numberOfDiscs
        expect(instance).to.have.property('numberOfDiscs');
        // expect(instance.numberOfDiscs).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfIssues (base name: "NumberOfIssues")', function() {
        // TODO: update the code to test the property numberOfIssues
        expect(instance).to.have.property('numberOfIssues');
        // expect(instance.numberOfIssues).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfItems (base name: "NumberOfItems")', function() {
        // TODO: update the code to test the property numberOfItems
        expect(instance).to.have.property('numberOfItems');
        // expect(instance.numberOfItems).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfPages (base name: "NumberOfPages")', function() {
        // TODO: update the code to test the property numberOfPages
        expect(instance).to.have.property('numberOfPages');
        // expect(instance.numberOfPages).to.be(expectedValueLiteral);
      });

      it('should have the property numberOfTracks (base name: "NumberOfTracks")', function() {
        // TODO: update the code to test the property numberOfTracks
        expect(instance).to.have.property('numberOfTracks');
        // expect(instance.numberOfTracks).to.be(expectedValueLiteral);
      });

      it('should have the property operatingSystem (base name: "OperatingSystem")', function() {
        // TODO: update the code to test the property operatingSystem
        expect(instance).to.have.property('operatingSystem');
        // expect(instance.operatingSystem).to.be(expectedValueLiteral);
      });

      it('should have the property opticalZoom (base name: "OpticalZoom")', function() {
        // TODO: update the code to test the property opticalZoom
        expect(instance).to.have.property('opticalZoom');
        // expect(instance.opticalZoom).to.be(expectedValueLiteral);
      });

      it('should have the property packageDimensions (base name: "PackageDimensions")', function() {
        // TODO: update the code to test the property packageDimensions
        expect(instance).to.have.property('packageDimensions');
        // expect(instance.packageDimensions).to.be(expectedValueLiteral);
      });

      it('should have the property packageQuantity (base name: "PackageQuantity")', function() {
        // TODO: update the code to test the property packageQuantity
        expect(instance).to.have.property('packageQuantity');
        // expect(instance.packageQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property partNumber (base name: "PartNumber")', function() {
        // TODO: update the code to test the property partNumber
        expect(instance).to.have.property('partNumber');
        // expect(instance.partNumber).to.be(expectedValueLiteral);
      });

      it('should have the property pegiRating (base name: "PegiRating")', function() {
        // TODO: update the code to test the property pegiRating
        expect(instance).to.have.property('pegiRating');
        // expect(instance.pegiRating).to.be(expectedValueLiteral);
      });

      it('should have the property platform (base name: "Platform")', function() {
        // TODO: update the code to test the property platform
        expect(instance).to.have.property('platform');
        // expect(instance.platform).to.be(expectedValueLiteral);
      });

      it('should have the property processorCount (base name: "ProcessorCount")', function() {
        // TODO: update the code to test the property processorCount
        expect(instance).to.have.property('processorCount');
        // expect(instance.processorCount).to.be(expectedValueLiteral);
      });

      it('should have the property productGroup (base name: "ProductGroup")', function() {
        // TODO: update the code to test the property productGroup
        expect(instance).to.have.property('productGroup');
        // expect(instance.productGroup).to.be(expectedValueLiteral);
      });

      it('should have the property productTypeName (base name: "ProductTypeName")', function() {
        // TODO: update the code to test the property productTypeName
        expect(instance).to.have.property('productTypeName');
        // expect(instance.productTypeName).to.be(expectedValueLiteral);
      });

      it('should have the property productTypeSubcategory (base name: "ProductTypeSubcategory")', function() {
        // TODO: update the code to test the property productTypeSubcategory
        expect(instance).to.have.property('productTypeSubcategory');
        // expect(instance.productTypeSubcategory).to.be(expectedValueLiteral);
      });

      it('should have the property publicationDate (base name: "PublicationDate")', function() {
        // TODO: update the code to test the property publicationDate
        expect(instance).to.have.property('publicationDate');
        // expect(instance.publicationDate).to.be(expectedValueLiteral);
      });

      it('should have the property publisher (base name: "Publisher")', function() {
        // TODO: update the code to test the property publisher
        expect(instance).to.have.property('publisher');
        // expect(instance.publisher).to.be(expectedValueLiteral);
      });

      it('should have the property regionCode (base name: "RegionCode")', function() {
        // TODO: update the code to test the property regionCode
        expect(instance).to.have.property('regionCode');
        // expect(instance.regionCode).to.be(expectedValueLiteral);
      });

      it('should have the property releaseDate (base name: "ReleaseDate")', function() {
        // TODO: update the code to test the property releaseDate
        expect(instance).to.have.property('releaseDate');
        // expect(instance.releaseDate).to.be(expectedValueLiteral);
      });

      it('should have the property ringSize (base name: "RingSize")', function() {
        // TODO: update the code to test the property ringSize
        expect(instance).to.have.property('ringSize');
        // expect(instance.ringSize).to.be(expectedValueLiteral);
      });

      it('should have the property runningTime (base name: "RunningTime")', function() {
        // TODO: update the code to test the property runningTime
        expect(instance).to.have.property('runningTime');
        // expect(instance.runningTime).to.be(expectedValueLiteral);
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

      it('should have the property seasonSequence (base name: "SeasonSequence")', function() {
        // TODO: update the code to test the property seasonSequence
        expect(instance).to.have.property('seasonSequence');
        // expect(instance.seasonSequence).to.be(expectedValueLiteral);
      });

      it('should have the property seikodoProductCode (base name: "SeikodoProductCode")', function() {
        // TODO: update the code to test the property seikodoProductCode
        expect(instance).to.have.property('seikodoProductCode');
        // expect(instance.seikodoProductCode).to.be(expectedValueLiteral);
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

      it('should have the property smallImage (base name: "SmallImage")', function() {
        // TODO: update the code to test the property smallImage
        expect(instance).to.have.property('smallImage');
        // expect(instance.smallImage).to.be(expectedValueLiteral);
      });

      it('should have the property studio (base name: "Studio")', function() {
        // TODO: update the code to test the property studio
        expect(instance).to.have.property('studio');
        // expect(instance.studio).to.be(expectedValueLiteral);
      });

      it('should have the property subscriptionLength (base name: "SubscriptionLength")', function() {
        // TODO: update the code to test the property subscriptionLength
        expect(instance).to.have.property('subscriptionLength');
        // expect(instance.subscriptionLength).to.be(expectedValueLiteral);
      });

      it('should have the property systemMemorySize (base name: "SystemMemorySize")', function() {
        // TODO: update the code to test the property systemMemorySize
        expect(instance).to.have.property('systemMemorySize');
        // expect(instance.systemMemorySize).to.be(expectedValueLiteral);
      });

      it('should have the property systemMemoryType (base name: "SystemMemoryType")', function() {
        // TODO: update the code to test the property systemMemoryType
        expect(instance).to.have.property('systemMemoryType');
        // expect(instance.systemMemoryType).to.be(expectedValueLiteral);
      });

      it('should have the property theatricalReleaseDate (base name: "TheatricalReleaseDate")', function() {
        // TODO: update the code to test the property theatricalReleaseDate
        expect(instance).to.have.property('theatricalReleaseDate');
        // expect(instance.theatricalReleaseDate).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "Title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
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

      it('should have the property warranty (base name: "Warranty")', function() {
        // TODO: update the code to test the property warranty
        expect(instance).to.have.property('warranty');
        // expect(instance.warranty).to.be(expectedValueLiteral);
      });

      it('should have the property weeeTaxValue (base name: "WeeeTaxValue")', function() {
        // TODO: update the code to test the property weeeTaxValue
        expect(instance).to.have.property('weeeTaxValue');
        // expect(instance.weeeTaxValue).to.be(expectedValueLiteral);
      });

    });
  });

}));