/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
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
import {ItemLabelPageType} from './ItemLabelPageType.js';
import {LabelPrintType} from './LabelPrintType.js';
import {MskuQuantity} from './MskuQuantity.js';

/**
 * The CreateMarketplaceItemLabelsRequest model module.
 * @module fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/CreateMarketplaceItemLabelsRequest
 * @version 2024-03-20
 */
export class CreateMarketplaceItemLabelsRequest {
  /**
   * Constructs a new <code>CreateMarketplaceItemLabelsRequest</code>.
   * The `createMarketplaceItemLabels` request.
   * @alias module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/CreateMarketplaceItemLabelsRequest
   * @class
   * @param labelType {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/LabelPrintType} 
   * @param marketplaceId {String} The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
   * @param mskuQuantities {Array.<module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/MskuQuantity>} Represents the quantity of an MSKU to print item labels for.
   */
  constructor(labelType, marketplaceId, mskuQuantities) {
    this.labelType = labelType;
    this.marketplaceId = marketplaceId;
    this.mskuQuantities = mskuQuantities;
  }

  /**
   * Constructs a <code>CreateMarketplaceItemLabelsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/CreateMarketplaceItemLabelsRequest} obj Optional instance to populate.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/CreateMarketplaceItemLabelsRequest} The populated <code>CreateMarketplaceItemLabelsRequest</code> instance.
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
      obj = obj || new CreateMarketplaceItemLabelsRequest();
      if (data.hasOwnProperty('height'))
        obj.height = ApiClient.convertToType(data['height'], 'Number');
      if (data.hasOwnProperty('labelType'))
        obj.labelType = LabelPrintType.constructFromObject(data['labelType']);
      if (data.hasOwnProperty('localeCode'))
        obj.localeCode = ApiClient.convertToType(data['localeCode'], 'String');
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('mskuQuantities'))
        obj.mskuQuantities = ApiClient.convertToType(data['mskuQuantities'], [MskuQuantity]);
      if (data.hasOwnProperty('pageType'))
        obj.pageType = ItemLabelPageType.constructFromObject(data['pageType']);
      if (data.hasOwnProperty('width'))
        obj.width = ApiClient.convertToType(data['width'], 'Number');
    }
    return obj;
  }
}

/**
 * The height of the item label.
 * @member {Number} height
 */
CreateMarketplaceItemLabelsRequest.prototype.height = undefined;

/**
 * @member {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/LabelPrintType} labelType
 */
CreateMarketplaceItemLabelsRequest.prototype.labelType = undefined;

/**
 * The locale code constructed from ISO 639 language code and ISO 3166-1 alpha-2 standard of country codes separated by an underscore character.
 * @member {String} localeCode
 * @default 'en_US'
 */
CreateMarketplaceItemLabelsRequest.prototype.localeCode = 'en_US';

/**
 * The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
 * @member {String} marketplaceId
 */
CreateMarketplaceItemLabelsRequest.prototype.marketplaceId = undefined;

/**
 * Represents the quantity of an MSKU to print item labels for.
 * @member {Array.<module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/MskuQuantity>} mskuQuantities
 */
CreateMarketplaceItemLabelsRequest.prototype.mskuQuantities = undefined;

/**
 * @member {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ItemLabelPageType} pageType
 */
CreateMarketplaceItemLabelsRequest.prototype.pageType = undefined;

/**
 * The width of the item label.
 * @member {Number} width
 */
CreateMarketplaceItemLabelsRequest.prototype.width = undefined;


