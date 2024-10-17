/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
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
import {DeliveryDocumentList} from './DeliveryDocumentList.js';
import {DropOffLocation} from './DropOffLocation.js';

/**
 * The DeliveryInformation model module.
 * @module fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DeliveryInformation
 * @version 2020-07-01
 */
export class DeliveryInformation {
  /**
   * Constructs a new <code>DeliveryInformation</code>.
   * The delivery information for the package. This information is available after the package is delivered.
   * @alias module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DeliveryInformation
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DeliveryInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DeliveryInformation} obj Optional instance to populate.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DeliveryInformation} The populated <code>DeliveryInformation</code> instance.
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
      obj = obj || new DeliveryInformation();
      if (data.hasOwnProperty('deliveryDocumentList'))
        obj.deliveryDocumentList = DeliveryDocumentList.constructFromObject(data['deliveryDocumentList']);
      if (data.hasOwnProperty('dropOffLocation'))
        obj.dropOffLocation = DropOffLocation.constructFromObject(data['dropOffLocation']);
    }
    return obj;
  }
}

/**
 * All of the delivery documents for a package.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DeliveryDocumentList} deliveryDocumentList
 */
DeliveryInformation.prototype.deliveryDocumentList = undefined;

/**
 * The drop off location for a package.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/DropOffLocation} dropOffLocation
 */
DeliveryInformation.prototype.dropOffLocation = undefined;

