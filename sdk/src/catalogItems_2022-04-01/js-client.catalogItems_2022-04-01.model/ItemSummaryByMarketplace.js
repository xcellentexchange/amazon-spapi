/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](doc:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-04-01
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
import {ItemBrowseClassification} from './ItemBrowseClassification.js';
import {ItemContributor} from './ItemContributor.js';

/**
 * The ItemSummaryByMarketplace model module.
 * @module catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemSummaryByMarketplace
 * @version 2022-04-01
 */
export class ItemSummaryByMarketplace {
  /**
   * Constructs a new <code>ItemSummaryByMarketplace</code>.
   * Summary details of an Amazon catalog item for the indicated Amazon marketplace.
   * @alias module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemSummaryByMarketplace
   * @class
   * @param marketplaceId {String} Amazon marketplace identifier.
   */
  constructor(marketplaceId) {
    this.marketplaceId = marketplaceId;
  }

  /**
   * Constructs a <code>ItemSummaryByMarketplace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemSummaryByMarketplace} obj Optional instance to populate.
   * @return {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemSummaryByMarketplace} The populated <code>ItemSummaryByMarketplace</code> instance.
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
      obj = obj || new ItemSummaryByMarketplace();
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('adultProduct'))
        obj.adultProduct = ApiClient.convertToType(data['adultProduct'], 'Boolean');
      if (data.hasOwnProperty('autographed'))
        obj.autographed = ApiClient.convertToType(data['autographed'], 'Boolean');
      if (data.hasOwnProperty('brand'))
        obj.brand = ApiClient.convertToType(data['brand'], 'String');
      if (data.hasOwnProperty('browseClassification'))
        obj.browseClassification = ItemBrowseClassification.constructFromObject(data['browseClassification']);
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('contributors'))
        obj.contributors = ApiClient.convertToType(data['contributors'], [ItemContributor]);
      if (data.hasOwnProperty('itemClassification'))
        obj.itemClassification = ApiClient.convertToType(data['itemClassification'], 'String');
      if (data.hasOwnProperty('itemName'))
        obj.itemName = ApiClient.convertToType(data['itemName'], 'String');
      if (data.hasOwnProperty('manufacturer'))
        obj.manufacturer = ApiClient.convertToType(data['manufacturer'], 'String');
      if (data.hasOwnProperty('memorabilia'))
        obj.memorabilia = ApiClient.convertToType(data['memorabilia'], 'Boolean');
      if (data.hasOwnProperty('modelNumber'))
        obj.modelNumber = ApiClient.convertToType(data['modelNumber'], 'String');
      if (data.hasOwnProperty('packageQuantity'))
        obj.packageQuantity = ApiClient.convertToType(data['packageQuantity'], 'Number');
      if (data.hasOwnProperty('partNumber'))
        obj.partNumber = ApiClient.convertToType(data['partNumber'], 'String');
      if (data.hasOwnProperty('releaseDate'))
        obj.releaseDate = ApiClient.convertToType(data['releaseDate'], 'Date');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'String');
      if (data.hasOwnProperty('style'))
        obj.style = ApiClient.convertToType(data['style'], 'String');
      if (data.hasOwnProperty('tradeInEligible'))
        obj.tradeInEligible = ApiClient.convertToType(data['tradeInEligible'], 'Boolean');
      if (data.hasOwnProperty('websiteDisplayGroup'))
        obj.websiteDisplayGroup = ApiClient.convertToType(data['websiteDisplayGroup'], 'String');
      if (data.hasOwnProperty('websiteDisplayGroupName'))
        obj.websiteDisplayGroupName = ApiClient.convertToType(data['websiteDisplayGroupName'], 'String');
    }
    return obj;
  }
}

/**
 * Amazon marketplace identifier.
 * @member {String} marketplaceId
 */
ItemSummaryByMarketplace.prototype.marketplaceId = undefined;

/**
 * Identifies an Amazon catalog item is intended for an adult audience or is sexual in nature.
 * @member {Boolean} adultProduct
 */
ItemSummaryByMarketplace.prototype.adultProduct = undefined;

/**
 * Identifies an Amazon catalog item is autographed by a player or celebrity.
 * @member {Boolean} autographed
 */
ItemSummaryByMarketplace.prototype.autographed = undefined;

/**
 * Name of the brand associated with an Amazon catalog item.
 * @member {String} brand
 */
ItemSummaryByMarketplace.prototype.brand = undefined;

/**
 * Classification (browse node) associated with an Amazon catalog item.
 * @member {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemBrowseClassification} browseClassification
 */
ItemSummaryByMarketplace.prototype.browseClassification = undefined;

/**
 * Name of the color associated with an Amazon catalog item.
 * @member {String} color
 */
ItemSummaryByMarketplace.prototype.color = undefined;

/**
 * Individual contributors to the creation of an item, such as the authors or actors.
 * @member {Array.<module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemContributor>} contributors
 */
ItemSummaryByMarketplace.prototype.contributors = undefined;

/**
 * Allowed values for the <code>itemClassification</code> property.
 * @enum {String}
 * @readonly
 */
ItemSummaryByMarketplace.ItemClassificationEnum = {
  /**
   * value: "BASE_PRODUCT"
   * @const
   */
  BASE_PRODUCT: "BASE_PRODUCT",

  /**
   * value: "OTHER"
   * @const
   */
  OTHER: "OTHER",

  /**
   * value: "PRODUCT_BUNDLE"
   * @const
   */
  PRODUCT_BUNDLE: "PRODUCT_BUNDLE",

  /**
   * value: "VARIATION_PARENT"
   * @const
   */
  VARIATION_PARENT: "VARIATION_PARENT"
};

/**
 * Classification type associated with the Amazon catalog item.
 * @member {module:catalogItems_2022-04-01/js-client.catalogItems_2022-04-01.model/ItemSummaryByMarketplace.ItemClassificationEnum} itemClassification
 */
ItemSummaryByMarketplace.prototype.itemClassification = undefined;

/**
 * Name, or title, associated with an Amazon catalog item.
 * @member {String} itemName
 */
ItemSummaryByMarketplace.prototype.itemName = undefined;

/**
 * Name of the manufacturer associated with an Amazon catalog item.
 * @member {String} manufacturer
 */
ItemSummaryByMarketplace.prototype.manufacturer = undefined;

/**
 * Identifies an Amazon catalog item is memorabilia valued for its connection with historical events, culture, or entertainment.
 * @member {Boolean} memorabilia
 */
ItemSummaryByMarketplace.prototype.memorabilia = undefined;

/**
 * Model number associated with an Amazon catalog item.
 * @member {String} modelNumber
 */
ItemSummaryByMarketplace.prototype.modelNumber = undefined;

/**
 * Quantity of an Amazon catalog item in one package.
 * @member {Number} packageQuantity
 */
ItemSummaryByMarketplace.prototype.packageQuantity = undefined;

/**
 * Part number associated with an Amazon catalog item.
 * @member {String} partNumber
 */
ItemSummaryByMarketplace.prototype.partNumber = undefined;

/**
 * First date on which an Amazon catalog item is shippable to customers.
 * @member {Date} releaseDate
 */
ItemSummaryByMarketplace.prototype.releaseDate = undefined;

/**
 * Name of the size associated with an Amazon catalog item.
 * @member {String} size
 */
ItemSummaryByMarketplace.prototype.size = undefined;

/**
 * Name of the style associated with an Amazon catalog item.
 * @member {String} style
 */
ItemSummaryByMarketplace.prototype.style = undefined;

/**
 * Identifies an Amazon catalog item is eligible for trade-in.
 * @member {Boolean} tradeInEligible
 */
ItemSummaryByMarketplace.prototype.tradeInEligible = undefined;

/**
 * Identifier of the website display group associated with an Amazon catalog item.
 * @member {String} websiteDisplayGroup
 */
ItemSummaryByMarketplace.prototype.websiteDisplayGroup = undefined;

/**
 * Display name of the website display group associated with an Amazon catalog item.
 * @member {String} websiteDisplayGroupName
 */
ItemSummaryByMarketplace.prototype.websiteDisplayGroupName = undefined;


