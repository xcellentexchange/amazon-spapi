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
import {Amount} from './Amount.js';
import {TimeStampStringType} from './TimeStampStringType.js';

/**
 * The PartneredEstimate model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PartneredEstimate
 * @version v0
 */
export class PartneredEstimate {
  /**
   * Constructs a new <code>PartneredEstimate</code>.
   * The estimated shipping cost for a shipment using an Amazon-partnered carrier.
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PartneredEstimate
   * @class
   * @param amount {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Amount} The amount that the Amazon-partnered carrier will charge to ship the inbound shipment.
   */
  constructor(amount) {
    this.amount = amount;
  }

  /**
   * Constructs a <code>PartneredEstimate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PartneredEstimate} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PartneredEstimate} The populated <code>PartneredEstimate</code> instance.
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
      obj = obj || new PartneredEstimate();
      if (data.hasOwnProperty('Amount'))
        obj.amount = Amount.constructFromObject(data['Amount']);
      if (data.hasOwnProperty('ConfirmDeadline'))
        obj.confirmDeadline = TimeStampStringType.constructFromObject(data['ConfirmDeadline']);
      if (data.hasOwnProperty('VoidDeadline'))
        obj.voidDeadline = TimeStampStringType.constructFromObject(data['VoidDeadline']);
    }
    return obj;
  }
}

/**
 * The amount that the Amazon-partnered carrier will charge to ship the inbound shipment.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Amount} amount
 */
PartneredEstimate.prototype.amount = undefined;

/**
 * The date in ISO 8601 date time format by which this estimate must be confirmed. After this date the estimate is no longer valid and cannot be confirmed.  Returned only if the TransportStatus value of the inbound shipment is ESTIMATED.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TimeStampStringType} confirmDeadline
 */
PartneredEstimate.prototype.confirmDeadline = undefined;

/**
 * The date in ISO 8601 date time format after which a confirmed transportation request can no longer be voided. This date is 24 hours after a Small Parcel shipment transportation request is confirmed or one hour after a Less Than Truckload/Full Truckload (LTL/FTL) shipment transportation request is confirmed. After the void deadline passes the seller's account will be charged for the shipping cost.  Returned only if the TransportStatus value of the inbound shipment is CONFIRMED.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TimeStampStringType} voidDeadline
 */
PartneredEstimate.prototype.voidDeadline = undefined;

