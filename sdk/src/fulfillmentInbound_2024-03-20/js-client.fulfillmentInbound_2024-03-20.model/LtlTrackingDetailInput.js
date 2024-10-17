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

/**
 * The LtlTrackingDetailInput model module.
 * @module fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/LtlTrackingDetailInput
 * @version 2024-03-20
 */
export class LtlTrackingDetailInput {
  /**
   * Constructs a new <code>LtlTrackingDetailInput</code>.
   * Contains input information to update Less-Than-Truckload (LTL) tracking information.
   * @alias module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/LtlTrackingDetailInput
   * @class
   * @param freightBillNumber {Array.<String>} Number associated with the freight bill.
   */
  constructor(freightBillNumber) {
    this.freightBillNumber = freightBillNumber;
  }

  /**
   * Constructs a <code>LtlTrackingDetailInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/LtlTrackingDetailInput} obj Optional instance to populate.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/LtlTrackingDetailInput} The populated <code>LtlTrackingDetailInput</code> instance.
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
      obj = obj || new LtlTrackingDetailInput();
      if (data.hasOwnProperty('billOfLadingNumber'))
        obj.billOfLadingNumber = ApiClient.convertToType(data['billOfLadingNumber'], 'String');
      if (data.hasOwnProperty('freightBillNumber'))
        obj.freightBillNumber = ApiClient.convertToType(data['freightBillNumber'], ['String']);
    }
    return obj;
  }
}

/**
 * The number of the carrier shipment acknowledgement document.
 * @member {String} billOfLadingNumber
 */
LtlTrackingDetailInput.prototype.billOfLadingNumber = undefined;

/**
 * Number associated with the freight bill.
 * @member {Array.<String>} freightBillNumber
 */
LtlTrackingDetailInput.prototype.freightBillNumber = undefined;

