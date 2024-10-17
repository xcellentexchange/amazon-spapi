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
import {NonPartneredLtlDataInput} from './NonPartneredLtlDataInput.js';
import {NonPartneredSmallParcelDataInput} from './NonPartneredSmallParcelDataInput.js';
import {PartneredLtlDataInput} from './PartneredLtlDataInput.js';
import {PartneredSmallParcelDataInput} from './PartneredSmallParcelDataInput.js';

/**
 * The TransportDetailInput model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TransportDetailInput
 * @version v0
 */
export class TransportDetailInput {
  /**
   * Constructs a new <code>TransportDetailInput</code>.
   * Information required to create an Amazon-partnered carrier shipping estimate, or to alert the Amazon fulfillment center to the arrival of an inbound shipment by a non-Amazon-partnered carrier.
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TransportDetailInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransportDetailInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TransportDetailInput} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TransportDetailInput} The populated <code>TransportDetailInput</code> instance.
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
      obj = obj || new TransportDetailInput();
      if (data.hasOwnProperty('PartneredSmallParcelData'))
        obj.partneredSmallParcelData = PartneredSmallParcelDataInput.constructFromObject(data['PartneredSmallParcelData']);
      if (data.hasOwnProperty('NonPartneredSmallParcelData'))
        obj.nonPartneredSmallParcelData = NonPartneredSmallParcelDataInput.constructFromObject(data['NonPartneredSmallParcelData']);
      if (data.hasOwnProperty('PartneredLtlData'))
        obj.partneredLtlData = PartneredLtlDataInput.constructFromObject(data['PartneredLtlData']);
      if (data.hasOwnProperty('NonPartneredLtlData'))
        obj.nonPartneredLtlData = NonPartneredLtlDataInput.constructFromObject(data['NonPartneredLtlData']);
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PartneredSmallParcelDataInput} partneredSmallParcelData
 */
TransportDetailInput.prototype.partneredSmallParcelData = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/NonPartneredSmallParcelDataInput} nonPartneredSmallParcelData
 */
TransportDetailInput.prototype.nonPartneredSmallParcelData = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PartneredLtlDataInput} partneredLtlData
 */
TransportDetailInput.prototype.partneredLtlData = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/NonPartneredLtlDataInput} nonPartneredLtlData
 */
TransportDetailInput.prototype.nonPartneredLtlData = undefined;

