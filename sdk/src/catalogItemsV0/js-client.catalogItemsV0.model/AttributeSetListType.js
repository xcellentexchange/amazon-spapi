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

import {ApiClient} from '../ApiClient.js';
import {CreatorType} from './CreatorType.js';
import {DecimalWithUnits} from './DecimalWithUnits.js';
import {DimensionType} from './DimensionType.js';
import {Image} from './Image.js';
import {LanguageType} from './LanguageType.js';
import {Price} from './Price.js';

/**
 * The AttributeSetListType model module.
 * @module catalogItemsV0/js-client.catalogItemsV0.model/AttributeSetListType
 * @version v0
 */
export class AttributeSetListType {
  /**
   * Constructs a new <code>AttributeSetListType</code>.
   * The attributes of the item.
   * @alias module:catalogItemsV0/js-client.catalogItemsV0.model/AttributeSetListType
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AttributeSetListType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItemsV0/js-client.catalogItemsV0.model/AttributeSetListType} obj Optional instance to populate.
   * @return {module:catalogItemsV0/js-client.catalogItemsV0.model/AttributeSetListType} The populated <code>AttributeSetListType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new AttributeSetListType();
      if (data.hasOwnProperty('Actor'))
        obj.actor = ApiClient.convertToType(data['Actor'], ['String']);
      if (data.hasOwnProperty('Artist'))
        obj.artist = ApiClient.convertToType(data['Artist'], ['String']);
      if (data.hasOwnProperty('AspectRatio'))
        obj.aspectRatio = ApiClient.convertToType(data['AspectRatio'], 'String');
      if (data.hasOwnProperty('AudienceRating'))
        obj.audienceRating = ApiClient.convertToType(data['AudienceRating'], 'String');
      if (data.hasOwnProperty('Author'))
        obj.author = ApiClient.convertToType(data['Author'], ['String']);
      if (data.hasOwnProperty('BackFinding'))
        obj.backFinding = ApiClient.convertToType(data['BackFinding'], 'String');
      if (data.hasOwnProperty('BandMaterialType'))
        obj.bandMaterialType = ApiClient.convertToType(data['BandMaterialType'], 'String');
      if (data.hasOwnProperty('Binding'))
        obj.binding = ApiClient.convertToType(data['Binding'], 'String');
      if (data.hasOwnProperty('BlurayRegion'))
        obj.blurayRegion = ApiClient.convertToType(data['BlurayRegion'], 'String');
      if (data.hasOwnProperty('Brand'))
        obj.brand = ApiClient.convertToType(data['Brand'], 'String');
      if (data.hasOwnProperty('CeroAgeRating'))
        obj.ceroAgeRating = ApiClient.convertToType(data['CeroAgeRating'], 'String');
      if (data.hasOwnProperty('ChainType'))
        obj.chainType = ApiClient.convertToType(data['ChainType'], 'String');
      if (data.hasOwnProperty('ClaspType'))
        obj.claspType = ApiClient.convertToType(data['ClaspType'], 'String');
      if (data.hasOwnProperty('Color'))
        obj.color = ApiClient.convertToType(data['Color'], 'String');
      if (data.hasOwnProperty('CpuManufacturer'))
        obj.cpuManufacturer = ApiClient.convertToType(data['CpuManufacturer'], 'String');
      if (data.hasOwnProperty('CpuSpeed'))
        obj.cpuSpeed = DecimalWithUnits.constructFromObject(data['CpuSpeed']);
      if (data.hasOwnProperty('CpuType'))
        obj.cpuType = ApiClient.convertToType(data['CpuType'], 'String');
      if (data.hasOwnProperty('Creator'))
        obj.creator = ApiClient.convertToType(data['Creator'], [CreatorType]);
      if (data.hasOwnProperty('Department'))
        obj.department = ApiClient.convertToType(data['Department'], 'String');
      if (data.hasOwnProperty('Director'))
        obj.director = ApiClient.convertToType(data['Director'], ['String']);
      if (data.hasOwnProperty('DisplaySize'))
        obj.displaySize = DecimalWithUnits.constructFromObject(data['DisplaySize']);
      if (data.hasOwnProperty('Edition'))
        obj.edition = ApiClient.convertToType(data['Edition'], 'String');
      if (data.hasOwnProperty('EpisodeSequence'))
        obj.episodeSequence = ApiClient.convertToType(data['EpisodeSequence'], 'String');
      if (data.hasOwnProperty('EsrbAgeRating'))
        obj.esrbAgeRating = ApiClient.convertToType(data['EsrbAgeRating'], 'String');
      if (data.hasOwnProperty('Feature'))
        obj.feature = ApiClient.convertToType(data['Feature'], ['String']);
      if (data.hasOwnProperty('Flavor'))
        obj.flavor = ApiClient.convertToType(data['Flavor'], 'String');
      if (data.hasOwnProperty('Format'))
        obj.format = ApiClient.convertToType(data['Format'], ['String']);
      if (data.hasOwnProperty('GemType'))
        obj.gemType = ApiClient.convertToType(data['GemType'], ['String']);
      if (data.hasOwnProperty('Genre'))
        obj.genre = ApiClient.convertToType(data['Genre'], 'String');
      if (data.hasOwnProperty('GolfClubFlex'))
        obj.golfClubFlex = ApiClient.convertToType(data['GolfClubFlex'], 'String');
      if (data.hasOwnProperty('GolfClubLoft'))
        obj.golfClubLoft = DecimalWithUnits.constructFromObject(data['GolfClubLoft']);
      if (data.hasOwnProperty('HandOrientation'))
        obj.handOrientation = ApiClient.convertToType(data['HandOrientation'], 'String');
      if (data.hasOwnProperty('HardDiskInterface'))
        obj.hardDiskInterface = ApiClient.convertToType(data['HardDiskInterface'], 'String');
      if (data.hasOwnProperty('HardDiskSize'))
        obj.hardDiskSize = DecimalWithUnits.constructFromObject(data['HardDiskSize']);
      if (data.hasOwnProperty('HardwarePlatform'))
        obj.hardwarePlatform = ApiClient.convertToType(data['HardwarePlatform'], 'String');
      if (data.hasOwnProperty('HazardousMaterialType'))
        obj.hazardousMaterialType = ApiClient.convertToType(data['HazardousMaterialType'], 'String');
      if (data.hasOwnProperty('ItemDimensions'))
        obj.itemDimensions = DimensionType.constructFromObject(data['ItemDimensions']);
      if (data.hasOwnProperty('IsAdultProduct'))
        obj.isAdultProduct = ApiClient.convertToType(data['IsAdultProduct'], 'Boolean');
      if (data.hasOwnProperty('IsAutographed'))
        obj.isAutographed = ApiClient.convertToType(data['IsAutographed'], 'Boolean');
      if (data.hasOwnProperty('IsEligibleForTradeIn'))
        obj.isEligibleForTradeIn = ApiClient.convertToType(data['IsEligibleForTradeIn'], 'Boolean');
      if (data.hasOwnProperty('IsMemorabilia'))
        obj.isMemorabilia = ApiClient.convertToType(data['IsMemorabilia'], 'Boolean');
      if (data.hasOwnProperty('IssuesPerYear'))
        obj.issuesPerYear = ApiClient.convertToType(data['IssuesPerYear'], 'String');
      if (data.hasOwnProperty('ItemPartNumber'))
        obj.itemPartNumber = ApiClient.convertToType(data['ItemPartNumber'], 'String');
      if (data.hasOwnProperty('Label'))
        obj.label = ApiClient.convertToType(data['Label'], 'String');
      if (data.hasOwnProperty('Languages'))
        obj.languages = ApiClient.convertToType(data['Languages'], [LanguageType]);
      if (data.hasOwnProperty('LegalDisclaimer'))
        obj.legalDisclaimer = ApiClient.convertToType(data['LegalDisclaimer'], 'String');
      if (data.hasOwnProperty('ListPrice'))
        obj.listPrice = Price.constructFromObject(data['ListPrice']);
      if (data.hasOwnProperty('Manufacturer'))
        obj.manufacturer = ApiClient.convertToType(data['Manufacturer'], 'String');
      if (data.hasOwnProperty('ManufacturerMaximumAge'))
        obj.manufacturerMaximumAge = DecimalWithUnits.constructFromObject(data['ManufacturerMaximumAge']);
      if (data.hasOwnProperty('ManufacturerMinimumAge'))
        obj.manufacturerMinimumAge = DecimalWithUnits.constructFromObject(data['ManufacturerMinimumAge']);
      if (data.hasOwnProperty('ManufacturerPartsWarrantyDescription'))
        obj.manufacturerPartsWarrantyDescription = ApiClient.convertToType(data['ManufacturerPartsWarrantyDescription'], 'String');
      if (data.hasOwnProperty('MaterialType'))
        obj.materialType = ApiClient.convertToType(data['MaterialType'], ['String']);
      if (data.hasOwnProperty('MaximumResolution'))
        obj.maximumResolution = DecimalWithUnits.constructFromObject(data['MaximumResolution']);
      if (data.hasOwnProperty('MediaType'))
        obj.mediaType = ApiClient.convertToType(data['MediaType'], ['String']);
      if (data.hasOwnProperty('MetalStamp'))
        obj.metalStamp = ApiClient.convertToType(data['MetalStamp'], 'String');
      if (data.hasOwnProperty('MetalType'))
        obj.metalType = ApiClient.convertToType(data['MetalType'], 'String');
      if (data.hasOwnProperty('Model'))
        obj.model = ApiClient.convertToType(data['Model'], 'String');
      if (data.hasOwnProperty('NumberOfDiscs'))
        obj.numberOfDiscs = ApiClient.convertToType(data['NumberOfDiscs'], 'Number');
      if (data.hasOwnProperty('NumberOfIssues'))
        obj.numberOfIssues = ApiClient.convertToType(data['NumberOfIssues'], 'Number');
      if (data.hasOwnProperty('NumberOfItems'))
        obj.numberOfItems = ApiClient.convertToType(data['NumberOfItems'], 'Number');
      if (data.hasOwnProperty('NumberOfPages'))
        obj.numberOfPages = ApiClient.convertToType(data['NumberOfPages'], 'Number');
      if (data.hasOwnProperty('NumberOfTracks'))
        obj.numberOfTracks = ApiClient.convertToType(data['NumberOfTracks'], 'Number');
      if (data.hasOwnProperty('OperatingSystem'))
        obj.operatingSystem = ApiClient.convertToType(data['OperatingSystem'], ['String']);
      if (data.hasOwnProperty('OpticalZoom'))
        obj.opticalZoom = DecimalWithUnits.constructFromObject(data['OpticalZoom']);
      if (data.hasOwnProperty('PackageDimensions'))
        obj.packageDimensions = DimensionType.constructFromObject(data['PackageDimensions']);
      if (data.hasOwnProperty('PackageQuantity'))
        obj.packageQuantity = ApiClient.convertToType(data['PackageQuantity'], 'Number');
      if (data.hasOwnProperty('PartNumber'))
        obj.partNumber = ApiClient.convertToType(data['PartNumber'], 'String');
      if (data.hasOwnProperty('PegiRating'))
        obj.pegiRating = ApiClient.convertToType(data['PegiRating'], 'String');
      if (data.hasOwnProperty('Platform'))
        obj.platform = ApiClient.convertToType(data['Platform'], ['String']);
      if (data.hasOwnProperty('ProcessorCount'))
        obj.processorCount = ApiClient.convertToType(data['ProcessorCount'], 'Number');
      if (data.hasOwnProperty('ProductGroup'))
        obj.productGroup = ApiClient.convertToType(data['ProductGroup'], 'String');
      if (data.hasOwnProperty('ProductTypeName'))
        obj.productTypeName = ApiClient.convertToType(data['ProductTypeName'], 'String');
      if (data.hasOwnProperty('ProductTypeSubcategory'))
        obj.productTypeSubcategory = ApiClient.convertToType(data['ProductTypeSubcategory'], 'String');
      if (data.hasOwnProperty('PublicationDate'))
        obj.publicationDate = ApiClient.convertToType(data['PublicationDate'], 'String');
      if (data.hasOwnProperty('Publisher'))
        obj.publisher = ApiClient.convertToType(data['Publisher'], 'String');
      if (data.hasOwnProperty('RegionCode'))
        obj.regionCode = ApiClient.convertToType(data['RegionCode'], 'String');
      if (data.hasOwnProperty('ReleaseDate'))
        obj.releaseDate = ApiClient.convertToType(data['ReleaseDate'], 'String');
      if (data.hasOwnProperty('RingSize'))
        obj.ringSize = ApiClient.convertToType(data['RingSize'], 'String');
      if (data.hasOwnProperty('RunningTime'))
        obj.runningTime = DecimalWithUnits.constructFromObject(data['RunningTime']);
      if (data.hasOwnProperty('ShaftMaterial'))
        obj.shaftMaterial = ApiClient.convertToType(data['ShaftMaterial'], 'String');
      if (data.hasOwnProperty('Scent'))
        obj.scent = ApiClient.convertToType(data['Scent'], 'String');
      if (data.hasOwnProperty('SeasonSequence'))
        obj.seasonSequence = ApiClient.convertToType(data['SeasonSequence'], 'String');
      if (data.hasOwnProperty('SeikodoProductCode'))
        obj.seikodoProductCode = ApiClient.convertToType(data['SeikodoProductCode'], 'String');
      if (data.hasOwnProperty('Size'))
        obj.size = ApiClient.convertToType(data['Size'], 'String');
      if (data.hasOwnProperty('SizePerPearl'))
        obj.sizePerPearl = ApiClient.convertToType(data['SizePerPearl'], 'String');
      if (data.hasOwnProperty('SmallImage'))
        obj.smallImage = Image.constructFromObject(data['SmallImage']);
      if (data.hasOwnProperty('Studio'))
        obj.studio = ApiClient.convertToType(data['Studio'], 'String');
      if (data.hasOwnProperty('SubscriptionLength'))
        obj.subscriptionLength = DecimalWithUnits.constructFromObject(data['SubscriptionLength']);
      if (data.hasOwnProperty('SystemMemorySize'))
        obj.systemMemorySize = DecimalWithUnits.constructFromObject(data['SystemMemorySize']);
      if (data.hasOwnProperty('SystemMemoryType'))
        obj.systemMemoryType = ApiClient.convertToType(data['SystemMemoryType'], 'String');
      if (data.hasOwnProperty('TheatricalReleaseDate'))
        obj.theatricalReleaseDate = ApiClient.convertToType(data['TheatricalReleaseDate'], 'String');
      if (data.hasOwnProperty('Title'))
        obj.title = ApiClient.convertToType(data['Title'], 'String');
      if (data.hasOwnProperty('TotalDiamondWeight'))
        obj.totalDiamondWeight = DecimalWithUnits.constructFromObject(data['TotalDiamondWeight']);
      if (data.hasOwnProperty('TotalGemWeight'))
        obj.totalGemWeight = DecimalWithUnits.constructFromObject(data['TotalGemWeight']);
      if (data.hasOwnProperty('Warranty'))
        obj.warranty = ApiClient.convertToType(data['Warranty'], 'String');
      if (data.hasOwnProperty('WeeeTaxValue'))
        obj.weeeTaxValue = Price.constructFromObject(data['WeeeTaxValue']);
    }
    return obj;
  }
}

/**
 * The actor attributes of the item.
 * @member {Array.<String>} actor
 */
AttributeSetListType.prototype.actor = undefined;

/**
 * The artist attributes of the item.
 * @member {Array.<String>} artist
 */
AttributeSetListType.prototype.artist = undefined;

/**
 * The aspect ratio attribute of the item.
 * @member {String} aspectRatio
 */
AttributeSetListType.prototype.aspectRatio = undefined;

/**
 * The audience rating attribute of the item.
 * @member {String} audienceRating
 */
AttributeSetListType.prototype.audienceRating = undefined;

/**
 * The author attributes of the item.
 * @member {Array.<String>} author
 */
AttributeSetListType.prototype.author = undefined;

/**
 * The back finding attribute of the item.
 * @member {String} backFinding
 */
AttributeSetListType.prototype.backFinding = undefined;

/**
 * The band material type attribute of the item.
 * @member {String} bandMaterialType
 */
AttributeSetListType.prototype.bandMaterialType = undefined;

/**
 * The binding attribute of the item.
 * @member {String} binding
 */
AttributeSetListType.prototype.binding = undefined;

/**
 * The Bluray region attribute of the item.
 * @member {String} blurayRegion
 */
AttributeSetListType.prototype.blurayRegion = undefined;

/**
 * The brand attribute of the item.
 * @member {String} brand
 */
AttributeSetListType.prototype.brand = undefined;

/**
 * The CERO age rating attribute of the item.
 * @member {String} ceroAgeRating
 */
AttributeSetListType.prototype.ceroAgeRating = undefined;

/**
 * The chain type attribute of the item.
 * @member {String} chainType
 */
AttributeSetListType.prototype.chainType = undefined;

/**
 * The clasp type attribute of the item.
 * @member {String} claspType
 */
AttributeSetListType.prototype.claspType = undefined;

/**
 * The color attribute of the item.
 * @member {String} color
 */
AttributeSetListType.prototype.color = undefined;

/**
 * The CPU manufacturer attribute of the item.
 * @member {String} cpuManufacturer
 */
AttributeSetListType.prototype.cpuManufacturer = undefined;

/**
 * The CPU speed attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} cpuSpeed
 */
AttributeSetListType.prototype.cpuSpeed = undefined;

/**
 * The CPU type attribute of the item.
 * @member {String} cpuType
 */
AttributeSetListType.prototype.cpuType = undefined;

/**
 * The creator attributes of the item.
 * @member {Array.<module:catalogItemsV0/js-client.catalogItemsV0.model/CreatorType>} creator
 */
AttributeSetListType.prototype.creator = undefined;

/**
 * The department attribute of the item.
 * @member {String} department
 */
AttributeSetListType.prototype.department = undefined;

/**
 * The director attributes of the item.
 * @member {Array.<String>} director
 */
AttributeSetListType.prototype.director = undefined;

/**
 * The display size attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} displaySize
 */
AttributeSetListType.prototype.displaySize = undefined;

/**
 * The edition attribute of the item.
 * @member {String} edition
 */
AttributeSetListType.prototype.edition = undefined;

/**
 * The episode sequence attribute of the item.
 * @member {String} episodeSequence
 */
AttributeSetListType.prototype.episodeSequence = undefined;

/**
 * The ESRB age rating attribute of the item.
 * @member {String} esrbAgeRating
 */
AttributeSetListType.prototype.esrbAgeRating = undefined;

/**
 * The feature attributes of the item
 * @member {Array.<String>} feature
 */
AttributeSetListType.prototype.feature = undefined;

/**
 * The flavor attribute of the item.
 * @member {String} flavor
 */
AttributeSetListType.prototype.flavor = undefined;

/**
 * The format attributes of the item.
 * @member {Array.<String>} format
 */
AttributeSetListType.prototype.format = undefined;

/**
 * The gem type attributes of the item.
 * @member {Array.<String>} gemType
 */
AttributeSetListType.prototype.gemType = undefined;

/**
 * The genre attribute of the item.
 * @member {String} genre
 */
AttributeSetListType.prototype.genre = undefined;

/**
 * The golf club flex attribute of the item.
 * @member {String} golfClubFlex
 */
AttributeSetListType.prototype.golfClubFlex = undefined;

/**
 * The golf club loft attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} golfClubLoft
 */
AttributeSetListType.prototype.golfClubLoft = undefined;

/**
 * The hand orientation attribute of the item.
 * @member {String} handOrientation
 */
AttributeSetListType.prototype.handOrientation = undefined;

/**
 * The hard disk interface attribute of the item.
 * @member {String} hardDiskInterface
 */
AttributeSetListType.prototype.hardDiskInterface = undefined;

/**
 * The hard disk size attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} hardDiskSize
 */
AttributeSetListType.prototype.hardDiskSize = undefined;

/**
 * The hardware platform attribute of the item.
 * @member {String} hardwarePlatform
 */
AttributeSetListType.prototype.hardwarePlatform = undefined;

/**
 * The hazardous material type attribute of the item.
 * @member {String} hazardousMaterialType
 */
AttributeSetListType.prototype.hazardousMaterialType = undefined;

/**
 * The item dimensions attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DimensionType} itemDimensions
 */
AttributeSetListType.prototype.itemDimensions = undefined;

/**
 * The adult product attribute of the item.
 * @member {Boolean} isAdultProduct
 */
AttributeSetListType.prototype.isAdultProduct = undefined;

/**
 * The autographed attribute of the item.
 * @member {Boolean} isAutographed
 */
AttributeSetListType.prototype.isAutographed = undefined;

/**
 * The is eligible for trade in attribute of the item.
 * @member {Boolean} isEligibleForTradeIn
 */
AttributeSetListType.prototype.isEligibleForTradeIn = undefined;

/**
 * The is memorabilia attribute of the item.
 * @member {Boolean} isMemorabilia
 */
AttributeSetListType.prototype.isMemorabilia = undefined;

/**
 * The issues per year attribute of the item.
 * @member {String} issuesPerYear
 */
AttributeSetListType.prototype.issuesPerYear = undefined;

/**
 * The item part number attribute of the item.
 * @member {String} itemPartNumber
 */
AttributeSetListType.prototype.itemPartNumber = undefined;

/**
 * The label attribute of the item.
 * @member {String} label
 */
AttributeSetListType.prototype.label = undefined;

/**
 * The languages attribute of the item.
 * @member {Array.<module:catalogItemsV0/js-client.catalogItemsV0.model/LanguageType>} languages
 */
AttributeSetListType.prototype.languages = undefined;

/**
 * The legal disclaimer attribute of the item.
 * @member {String} legalDisclaimer
 */
AttributeSetListType.prototype.legalDisclaimer = undefined;

/**
 * The list price attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/Price} listPrice
 */
AttributeSetListType.prototype.listPrice = undefined;

/**
 * The manufacturer attribute of the item.
 * @member {String} manufacturer
 */
AttributeSetListType.prototype.manufacturer = undefined;

/**
 * The manufacturer maximum age attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} manufacturerMaximumAge
 */
AttributeSetListType.prototype.manufacturerMaximumAge = undefined;

/**
 * The manufacturer minimum age attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} manufacturerMinimumAge
 */
AttributeSetListType.prototype.manufacturerMinimumAge = undefined;

/**
 * The manufacturer parts warranty description attribute of the item.
 * @member {String} manufacturerPartsWarrantyDescription
 */
AttributeSetListType.prototype.manufacturerPartsWarrantyDescription = undefined;

/**
 * The material type attributes of the item.
 * @member {Array.<String>} materialType
 */
AttributeSetListType.prototype.materialType = undefined;

/**
 * The maximum resolution attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} maximumResolution
 */
AttributeSetListType.prototype.maximumResolution = undefined;

/**
 * The media type attributes of the item.
 * @member {Array.<String>} mediaType
 */
AttributeSetListType.prototype.mediaType = undefined;

/**
 * The metal stamp attribute of the item.
 * @member {String} metalStamp
 */
AttributeSetListType.prototype.metalStamp = undefined;

/**
 * The metal type attribute of the item.
 * @member {String} metalType
 */
AttributeSetListType.prototype.metalType = undefined;

/**
 * The model attribute of the item.
 * @member {String} model
 */
AttributeSetListType.prototype.model = undefined;

/**
 * The number of discs attribute of the item.
 * @member {Number} numberOfDiscs
 */
AttributeSetListType.prototype.numberOfDiscs = undefined;

/**
 * The number of issues attribute of the item.
 * @member {Number} numberOfIssues
 */
AttributeSetListType.prototype.numberOfIssues = undefined;

/**
 * The number of items attribute of the item.
 * @member {Number} numberOfItems
 */
AttributeSetListType.prototype.numberOfItems = undefined;

/**
 * The number of pages attribute of the item.
 * @member {Number} numberOfPages
 */
AttributeSetListType.prototype.numberOfPages = undefined;

/**
 * The number of tracks attribute of the item.
 * @member {Number} numberOfTracks
 */
AttributeSetListType.prototype.numberOfTracks = undefined;

/**
 * The operating system attributes of the item.
 * @member {Array.<String>} operatingSystem
 */
AttributeSetListType.prototype.operatingSystem = undefined;

/**
 * The optical zoom attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} opticalZoom
 */
AttributeSetListType.prototype.opticalZoom = undefined;

/**
 * The package dimensions attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DimensionType} packageDimensions
 */
AttributeSetListType.prototype.packageDimensions = undefined;

/**
 * The package quantity attribute of the item.
 * @member {Number} packageQuantity
 */
AttributeSetListType.prototype.packageQuantity = undefined;

/**
 * The part number attribute of the item.
 * @member {String} partNumber
 */
AttributeSetListType.prototype.partNumber = undefined;

/**
 * The PEGI rating attribute of the item.
 * @member {String} pegiRating
 */
AttributeSetListType.prototype.pegiRating = undefined;

/**
 * The platform attributes of the item.
 * @member {Array.<String>} platform
 */
AttributeSetListType.prototype.platform = undefined;

/**
 * The processor count attribute of the item.
 * @member {Number} processorCount
 */
AttributeSetListType.prototype.processorCount = undefined;

/**
 * The product group attribute of the item.
 * @member {String} productGroup
 */
AttributeSetListType.prototype.productGroup = undefined;

/**
 * The product type name attribute of the item.
 * @member {String} productTypeName
 */
AttributeSetListType.prototype.productTypeName = undefined;

/**
 * The product type subcategory attribute of the item.
 * @member {String} productTypeSubcategory
 */
AttributeSetListType.prototype.productTypeSubcategory = undefined;

/**
 * The publication date attribute of the item.
 * @member {String} publicationDate
 */
AttributeSetListType.prototype.publicationDate = undefined;

/**
 * The publisher attribute of the item.
 * @member {String} publisher
 */
AttributeSetListType.prototype.publisher = undefined;

/**
 * The region code attribute of the item.
 * @member {String} regionCode
 */
AttributeSetListType.prototype.regionCode = undefined;

/**
 * The release date attribute of the item.
 * @member {String} releaseDate
 */
AttributeSetListType.prototype.releaseDate = undefined;

/**
 * The ring size attribute of the item.
 * @member {String} ringSize
 */
AttributeSetListType.prototype.ringSize = undefined;

/**
 * The running time attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} runningTime
 */
AttributeSetListType.prototype.runningTime = undefined;

/**
 * The shaft material attribute of the item.
 * @member {String} shaftMaterial
 */
AttributeSetListType.prototype.shaftMaterial = undefined;

/**
 * The scent attribute of the item.
 * @member {String} scent
 */
AttributeSetListType.prototype.scent = undefined;

/**
 * The season sequence attribute of the item.
 * @member {String} seasonSequence
 */
AttributeSetListType.prototype.seasonSequence = undefined;

/**
 * The Seikodo product code attribute of the item.
 * @member {String} seikodoProductCode
 */
AttributeSetListType.prototype.seikodoProductCode = undefined;

/**
 * The size attribute of the item.
 * @member {String} size
 */
AttributeSetListType.prototype.size = undefined;

/**
 * The size per pearl attribute of the item.
 * @member {String} sizePerPearl
 */
AttributeSetListType.prototype.sizePerPearl = undefined;

/**
 * The small image attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/Image} smallImage
 */
AttributeSetListType.prototype.smallImage = undefined;

/**
 * The studio attribute of the item.
 * @member {String} studio
 */
AttributeSetListType.prototype.studio = undefined;

/**
 * The subscription length attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} subscriptionLength
 */
AttributeSetListType.prototype.subscriptionLength = undefined;

/**
 * The system memory size attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} systemMemorySize
 */
AttributeSetListType.prototype.systemMemorySize = undefined;

/**
 * The system memory type attribute of the item.
 * @member {String} systemMemoryType
 */
AttributeSetListType.prototype.systemMemoryType = undefined;

/**
 * The theatrical release date attribute of the item.
 * @member {String} theatricalReleaseDate
 */
AttributeSetListType.prototype.theatricalReleaseDate = undefined;

/**
 * The title attribute of the item.
 * @member {String} title
 */
AttributeSetListType.prototype.title = undefined;

/**
 * The total diamond weight attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} totalDiamondWeight
 */
AttributeSetListType.prototype.totalDiamondWeight = undefined;

/**
 * The total gem weight attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} totalGemWeight
 */
AttributeSetListType.prototype.totalGemWeight = undefined;

/**
 * The warranty attribute of the item.
 * @member {String} warranty
 */
AttributeSetListType.prototype.warranty = undefined;

/**
 * The WEEE tax value attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/Price} weeeTaxValue
 */
AttributeSetListType.prototype.weeeTaxValue = undefined;

