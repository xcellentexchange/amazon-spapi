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
import {OrderItemSerialNumber} from './OrderItemSerialNumber.js';

/**
 * The OrderItemSerialNumbers model module.
 * @module easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/OrderItemSerialNumbers
 * @version 2022-03-23
 */
export class OrderItemSerialNumbers extends Array {
  /**
   * Constructs a new <code>OrderItemSerialNumbers</code>.
   * A list of serial numbers for the items associated with the `OrderItemId` value.
   * @alias module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/OrderItemSerialNumbers
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>OrderItemSerialNumbers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/OrderItemSerialNumbers} obj Optional instance to populate.
   * @return {module:easyShip_2022-03-23/js-client.easyShip_2022-03-23.model/OrderItemSerialNumbers} The populated <code>OrderItemSerialNumbers</code> instance.
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
      obj = obj || new OrderItemSerialNumbers();
      ApiClient.constructFromObject(data, obj, 'OrderItemSerialNumber');
    }
    return obj;
  }
}
