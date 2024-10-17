/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import {InboundShipmentHeader} from './InboundShipmentHeader.js';
import {InboundShipmentItemList} from './InboundShipmentItemList.js';

/**
 * The InboundShipmentRequest model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentRequest
 * @version v0
 */
export class InboundShipmentRequest {
  /**
   * Constructs a new <code>InboundShipmentRequest</code>.
   * The request schema for an inbound shipment.
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentRequest
   * @class
   * @param inboundShipmentHeader {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentHeader} 
   * @param inboundShipmentItems {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentItemList} 
   * @param marketplaceId {String} A marketplace identifier. Specifies the marketplace where the product would be stored.
   */
  constructor(inboundShipmentHeader, inboundShipmentItems, marketplaceId) {
    this.inboundShipmentHeader = inboundShipmentHeader;
    this.inboundShipmentItems = inboundShipmentItems;
    this.marketplaceId = marketplaceId;
  }

  /**
   * Constructs a <code>InboundShipmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentRequest} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentRequest} The populated <code>InboundShipmentRequest</code> instance.
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
      obj = obj || new InboundShipmentRequest();
      if (data.hasOwnProperty('InboundShipmentHeader'))
        obj.inboundShipmentHeader = InboundShipmentHeader.constructFromObject(data['InboundShipmentHeader']);
      if (data.hasOwnProperty('InboundShipmentItems'))
        obj.inboundShipmentItems = InboundShipmentItemList.constructFromObject(data['InboundShipmentItems']);
      if (data.hasOwnProperty('MarketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['MarketplaceId'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentHeader} inboundShipmentHeader
 */
InboundShipmentRequest.prototype.inboundShipmentHeader = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentItemList} inboundShipmentItems
 */
InboundShipmentRequest.prototype.inboundShipmentItems = undefined;

/**
 * A marketplace identifier. Specifies the marketplace where the product would be stored.
 * @member {String} marketplaceId
 */
InboundShipmentRequest.prototype.marketplaceId = undefined;


