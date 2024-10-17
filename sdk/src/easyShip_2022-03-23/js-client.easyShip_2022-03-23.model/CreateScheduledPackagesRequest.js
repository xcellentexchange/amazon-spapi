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
import {LabelFormat} from './LabelFormat.js';
import {ModelString} from './ModelString.js';
import {OrderScheduleDetails} from './OrderScheduleDetails.js';

/**
 * The CreateScheduledPackagesRequest model module.
 * @module easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/CreateScheduledPackagesRequest
 * @version 2022-03-23
 */
export class CreateScheduledPackagesRequest {
  /**
   * Constructs a new <code>CreateScheduledPackagesRequest</code>.
   * The request body for the POST /easyShip/2022-03-23/packages/bulk API.
   * @alias module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/CreateScheduledPackagesRequest
   * @class
   * @param marketplaceId {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ModelString} 
   * @param orderScheduleDetailsList {Array.<module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/OrderScheduleDetails>} An array allowing users to specify orders to be scheduled.
   * @param labelFormat {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/LabelFormat} 
   */
  constructor(marketplaceId, orderScheduleDetailsList, labelFormat) {
    this.marketplaceId = marketplaceId;
    this.orderScheduleDetailsList = orderScheduleDetailsList;
    this.labelFormat = labelFormat;
  }

  /**
   * Constructs a <code>CreateScheduledPackagesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/CreateScheduledPackagesRequest} obj Optional instance to populate.
   * @return {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/CreateScheduledPackagesRequest} The populated <code>CreateScheduledPackagesRequest</code> instance.
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
      obj = obj || new CreateScheduledPackagesRequest();
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ModelString.constructFromObject(data['marketplaceId']);
      if (data.hasOwnProperty('orderScheduleDetailsList'))
        obj.orderScheduleDetailsList = ApiClient.convertToType(data['orderScheduleDetailsList'], [OrderScheduleDetails]);
      if (data.hasOwnProperty('labelFormat'))
        obj.labelFormat = LabelFormat.constructFromObject(data['labelFormat']);
    }
    return obj;
  }
}

/**
 * @member {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/ModelString} marketplaceId
 */
CreateScheduledPackagesRequest.prototype.marketplaceId = undefined;

/**
 * An array allowing users to specify orders to be scheduled.
 * @member {Array.<module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/OrderScheduleDetails>} orderScheduleDetailsList
 */
CreateScheduledPackagesRequest.prototype.orderScheduleDetailsList = undefined;

/**
 * @member {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/LabelFormat} labelFormat
 */
CreateScheduledPackagesRequest.prototype.labelFormat = undefined;

