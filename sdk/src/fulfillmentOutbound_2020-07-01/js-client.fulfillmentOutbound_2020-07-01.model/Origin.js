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

/**
 * The Origin model module.
 * @module fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Origin
 * @version 2020-07-01
 */
export class Origin {
  /**
   * Constructs a new <code>Origin</code>.
   * The origin for the delivery offer.
   * @alias module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Origin
   * @class
   * @param countryCode {String} The two digit country code the items should ship from. In ISO 3166-1 alpha-2 format.
   */
  constructor(countryCode) {
    this.countryCode = countryCode;
  }

  /**
   * Constructs a <code>Origin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Origin} obj Optional instance to populate.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Origin} The populated <code>Origin</code> instance.
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
      obj = obj || new Origin();
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
    }
    return obj;
  }
}

/**
 * The two digit country code the items should ship from. In ISO 3166-1 alpha-2 format.
 * @member {String} countryCode
 */
Origin.prototype.countryCode = undefined;


