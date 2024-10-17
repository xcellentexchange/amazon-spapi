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
import {PrepInstruction} from './PrepInstruction.js';
import {PrepOwner} from './PrepOwner.js';

/**
 * The PrepDetails model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepDetails
 * @version v0
 */
export class PrepDetails {
  /**
   * Constructs a new <code>PrepDetails</code>.
   * Preparation instructions and who is responsible for the preparation.
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepDetails
   * @class
   * @param prepInstruction {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepInstruction} 
   * @param prepOwner {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepOwner} 
   */
  constructor(prepInstruction, prepOwner) {
    this.prepInstruction = prepInstruction;
    this.prepOwner = prepOwner;
  }

  /**
   * Constructs a <code>PrepDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepDetails} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepDetails} The populated <code>PrepDetails</code> instance.
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
      obj = obj || new PrepDetails();
      if (data.hasOwnProperty('PrepInstruction'))
        obj.prepInstruction = PrepInstruction.constructFromObject(data['PrepInstruction']);
      if (data.hasOwnProperty('PrepOwner'))
        obj.prepOwner = PrepOwner.constructFromObject(data['PrepOwner']);
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepInstruction} prepInstruction
 */
PrepDetails.prototype.prepInstruction = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepOwner} prepOwner
 */
PrepDetails.prototype.prepOwner = undefined;

