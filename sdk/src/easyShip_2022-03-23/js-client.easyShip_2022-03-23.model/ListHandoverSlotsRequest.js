/*
 * Selling Partner API for Easy Ship
 * The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.  Your Easy Ship applications can:  * Get available time slots for packages to be scheduled for delivery.  * Schedule, reschedule, and cancel Easy Ship orders.  * Print labels, invoices, and warranties.  See the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) for the differences in Easy Ship operations by marketplace.
 *
 * OpenAPI spec version: 2022-03-23
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
import {AmazonOrderId} from './AmazonOrderId.js';
import {Dimensions} from './Dimensions.js';
import {ModelString} from './ModelString.js';
import {Weight} from './Weight.js';

/**
 * The ListHandoverSlotsRequest model module.
 * @module easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ListHandoverSlotsRequest
 * @version 2022-03-23
 */
export class ListHandoverSlotsRequest {
  /**
   * Constructs a new <code>ListHandoverSlotsRequest</code>.
   * The request schema for the `listHandoverSlots` operation.
   * @alias module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ListHandoverSlotsRequest
   * @class
   * @param marketplaceId {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ModelString} 
   * @param amazonOrderId {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/AmazonOrderId} 
   * @param packageDimensions {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/Dimensions} 
   * @param packageWeight {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/Weight} 
   */
  constructor(marketplaceId, amazonOrderId, packageDimensions, packageWeight) {
    this.marketplaceId = marketplaceId;
    this.amazonOrderId = amazonOrderId;
    this.packageDimensions = packageDimensions;
    this.packageWeight = packageWeight;
  }

  /**
   * Constructs a <code>ListHandoverSlotsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ListHandoverSlotsRequest} obj Optional instance to populate.
   * @return {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ListHandoverSlotsRequest} The populated <code>ListHandoverSlotsRequest</code> instance.
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
      obj = obj || new ListHandoverSlotsRequest();
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ModelString.constructFromObject(data['marketplaceId']);
      if (data.hasOwnProperty('amazonOrderId'))
        obj.amazonOrderId = AmazonOrderId.constructFromObject(data['amazonOrderId']);
      if (data.hasOwnProperty('packageDimensions'))
        obj.packageDimensions = Dimensions.constructFromObject(data['packageDimensions']);
      if (data.hasOwnProperty('packageWeight'))
        obj.packageWeight = Weight.constructFromObject(data['packageWeight']);
    }
    return obj;
  }
}

/**
 * @member {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ModelString} marketplaceId
 */
ListHandoverSlotsRequest.prototype.marketplaceId = undefined;

/**
 * @member {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/AmazonOrderId} amazonOrderId
 */
ListHandoverSlotsRequest.prototype.amazonOrderId = undefined;

/**
 * @member {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/Dimensions} packageDimensions
 */
ListHandoverSlotsRequest.prototype.packageDimensions = undefined;

/**
 * @member {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/Weight} packageWeight
 */
ListHandoverSlotsRequest.prototype.packageWeight = undefined;


