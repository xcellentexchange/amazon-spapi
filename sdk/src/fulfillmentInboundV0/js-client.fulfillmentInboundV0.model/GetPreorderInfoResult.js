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
import {DateStringType} from './DateStringType.js';

/**
 * The GetPreorderInfoResult model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetPreorderInfoResult
 * @version v0
 */
export class GetPreorderInfoResult {
  /**
   * Constructs a new <code>GetPreorderInfoResult</code>.
   * Result for the get preorder info operation
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetPreorderInfoResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetPreorderInfoResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetPreorderInfoResult} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/GetPreorderInfoResult} The populated <code>GetPreorderInfoResult</code> instance.
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
      obj = obj || new GetPreorderInfoResult();
      if (data.hasOwnProperty('ShipmentContainsPreorderableItems'))
        obj.shipmentContainsPreorderableItems = ApiClient.convertToType(data['ShipmentContainsPreorderableItems'], 'Boolean');
      if (data.hasOwnProperty('ShipmentConfirmedForPreorder'))
        obj.shipmentConfirmedForPreorder = ApiClient.convertToType(data['ShipmentConfirmedForPreorder'], 'Boolean');
      if (data.hasOwnProperty('NeedByDate'))
        obj.needByDate = DateStringType.constructFromObject(data['NeedByDate']);
      if (data.hasOwnProperty('ConfirmedFulfillableDate'))
        obj.confirmedFulfillableDate = DateStringType.constructFromObject(data['ConfirmedFulfillableDate']);
    }
    return obj;
  }
}

/**
 * Indicates whether the shipment contains items that have been enabled for pre-order. For more information about enabling items for pre-order, see the Seller Central Help.
 * @member {Boolean} shipmentContainsPreorderableItems
 */
GetPreorderInfoResult.prototype.shipmentContainsPreorderableItems = undefined;

/**
 * Indicates whether this shipment has been confirmed for pre-order.
 * @member {Boolean} shipmentConfirmedForPreorder
 */
GetPreorderInfoResult.prototype.shipmentConfirmedForPreorder = undefined;

/**
 * Date that the shipment would need to arrive at an Amazon fulfillment center to avoid delivery promise breaks for pre-ordered items if this shipment is later confirmed for pre-order. In YYYY-MM-DD format. See also the confirmPreorder operation.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/DateStringType} needByDate
 */
GetPreorderInfoResult.prototype.needByDate = undefined;

/**
 * Date in YYYY-MM-DD format that determines which pre-order items in the shipment are eligible for pre-order. If this shipment is confirmed for pre-order with a subsequent call to the confirmPreorder operation, the pre-order Buy Box will appear for any pre-order items in the shipment with a release date on or after this date. Call the getShipmentItems operation to get the release dates for the pre-order items in this shipment.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/DateStringType} confirmedFulfillableDate
 */
GetPreorderInfoResult.prototype.confirmedFulfillableDate = undefined;


