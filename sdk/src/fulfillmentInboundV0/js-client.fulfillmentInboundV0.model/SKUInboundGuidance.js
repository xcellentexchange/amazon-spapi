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
import {GuidanceReasonList} from './GuidanceReasonList.js';
import {InboundGuidance} from './InboundGuidance.js';

/**
 * The SKUInboundGuidance model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/SKUInboundGuidance
 * @version v0
 */
export class SKUInboundGuidance {
  /**
   * Constructs a new <code>SKUInboundGuidance</code>.
   * Reasons why a given seller SKU is not recommended for shipment to Amazon's fulfillment network.
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/SKUInboundGuidance
   * @class
   * @param sellerSKU {String} The seller SKU of the item.
   * @param ASIN {String} The Amazon Standard Identification Number (ASIN) of the item.
   * @param inboundGuidance {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundGuidance} Specific inbound guidance for an item.
   */
  constructor(sellerSKU, ASIN, inboundGuidance) {
    this.sellerSKU = sellerSKU;
    this.ASIN = ASIN;
    this.inboundGuidance = inboundGuidance;
  }

  /**
   * Constructs a <code>SKUInboundGuidance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/SKUInboundGuidance} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/SKUInboundGuidance} The populated <code>SKUInboundGuidance</code> instance.
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
      obj = obj || new SKUInboundGuidance();
      if (data.hasOwnProperty('SellerSKU'))
        obj.sellerSKU = ApiClient.convertToType(data['SellerSKU'], 'String');
      if (data.hasOwnProperty('ASIN'))
        obj.ASIN = ApiClient.convertToType(data['ASIN'], 'String');
      if (data.hasOwnProperty('InboundGuidance'))
        obj.inboundGuidance = InboundGuidance.constructFromObject(data['InboundGuidance']);
      if (data.hasOwnProperty('GuidanceReasonList'))
        obj.guidanceReasonList = GuidanceReasonList.constructFromObject(data['GuidanceReasonList']);
    }
    return obj;
  }
}

/**
 * The seller SKU of the item.
 * @member {String} sellerSKU
 */
SKUInboundGuidance.prototype.sellerSKU = undefined;

/**
 * The Amazon Standard Identification Number (ASIN) of the item.
 * @member {String} ASIN
 */
SKUInboundGuidance.prototype.ASIN = undefined;

/**
 * Specific inbound guidance for an item.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundGuidance} inboundGuidance
 */
SKUInboundGuidance.prototype.inboundGuidance = undefined;

/**
 * A list of reasons for the current inbound guidance for this item.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GuidanceReasonList} guidanceReasonList
 */
SKUInboundGuidance.prototype.guidanceReasonList = undefined;

