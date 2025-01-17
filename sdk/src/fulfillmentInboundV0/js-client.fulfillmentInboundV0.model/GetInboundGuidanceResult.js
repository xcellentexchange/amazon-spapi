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
import {ASINInboundGuidanceList} from './ASINInboundGuidanceList.js';
import {InvalidASINList} from './InvalidASINList.js';
import {InvalidSKUList} from './InvalidSKUList.js';
import {SKUInboundGuidanceList} from './SKUInboundGuidanceList.js';

/**
 * The GetInboundGuidanceResult model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetInboundGuidanceResult
 * @version v0
 */
export class GetInboundGuidanceResult {
  /**
   * Constructs a new <code>GetInboundGuidanceResult</code>.
   * Result for the get inbound guidance operation
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetInboundGuidanceResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetInboundGuidanceResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetInboundGuidanceResult} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetInboundGuidanceResult} The populated <code>GetInboundGuidanceResult</code> instance.
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
      obj = obj || new GetInboundGuidanceResult();
      if (data.hasOwnProperty('SKUInboundGuidanceList'))
        obj.sKUInboundGuidanceList = SKUInboundGuidanceList.constructFromObject(data['SKUInboundGuidanceList']);
      if (data.hasOwnProperty('InvalidSKUList'))
        obj.invalidSKUList = InvalidSKUList.constructFromObject(data['InvalidSKUList']);
      if (data.hasOwnProperty('ASINInboundGuidanceList'))
        obj.aSINInboundGuidanceList = ASINInboundGuidanceList.constructFromObject(data['ASINInboundGuidanceList']);
      if (data.hasOwnProperty('InvalidASINList'))
        obj.invalidASINList = InvalidASINList.constructFromObject(data['InvalidASINList']);
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/SKUInboundGuidanceList} sKUInboundGuidanceList
 */
GetInboundGuidanceResult.prototype.sKUInboundGuidanceList = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InvalidSKUList} invalidSKUList
 */
GetInboundGuidanceResult.prototype.invalidSKUList = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/ASINInboundGuidanceList} aSINInboundGuidanceList
 */
GetInboundGuidanceResult.prototype.aSINInboundGuidanceList = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InvalidASINList} invalidASINList
 */
GetInboundGuidanceResult.prototype.invalidASINList = undefined;


