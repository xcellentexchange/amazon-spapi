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
import {Address} from './Address.js';

/**
 * The ShipmentDestination model module.
 * @module fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ShipmentDestination
 * @version 2024-03-20
 */
export class ShipmentDestination {
  /**
   * Constructs a new <code>ShipmentDestination</code>.
   * The Amazon fulfillment center address and warehouse ID.
   * @alias module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ShipmentDestination
   * @class
   * @param destinationType {String} The type of destination for this shipment. Possible values: `AMAZON_OPTIMIZED`, `AMAZON_WAREHOUSE`.
   */
  constructor(destinationType) {
    this.destinationType = destinationType;
  }

  /**
   * Constructs a <code>ShipmentDestination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ShipmentDestination} obj Optional instance to populate.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ShipmentDestination} The populated <code>ShipmentDestination</code> instance.
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
      obj = obj || new ShipmentDestination();
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
      if (data.hasOwnProperty('destinationType'))
        obj.destinationType = ApiClient.convertToType(data['destinationType'], 'String');
      if (data.hasOwnProperty('warehouseId'))
        obj.warehouseId = ApiClient.convertToType(data['warehouseId'], 'String');
    }
    return obj;
  }
}

/**
 * The address the shipment should be sent to. Empty if the destination type is `AMAZON_OPTIMIZED`.
 * @member {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/Address} address
 */
ShipmentDestination.prototype.address = undefined;

/**
 * The type of destination for this shipment. Possible values: `AMAZON_OPTIMIZED`, `AMAZON_WAREHOUSE`.
 * @member {String} destinationType
 */
ShipmentDestination.prototype.destinationType = undefined;

/**
 * The warehouse that the shipment should be sent to. Empty if the destination type is `AMAZON_OPTIMIZED`.
 * @member {String} warehouseId
 */
ShipmentDestination.prototype.warehouseId = undefined;

