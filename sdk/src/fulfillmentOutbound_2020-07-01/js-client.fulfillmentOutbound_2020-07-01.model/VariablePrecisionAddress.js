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
 * The VariablePrecisionAddress model module.
 * @module fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/VariablePrecisionAddress
 * @version 2020-07-01
 */
export class VariablePrecisionAddress {
  /**
   * Constructs a new <code>VariablePrecisionAddress</code>.
   * A physical address with varying degrees of precision. A more precise address can provide more accurate results than country code and postal code alone.
   * @alias module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/VariablePrecisionAddress
   * @class
   * @param postalCode {String} The postal code of the address.
   * @param countryCode {String} The two digit country code. In ISO 3166-1 alpha-2 format.
   */
  constructor(postalCode, countryCode) {
    this.postalCode = postalCode;
    this.countryCode = countryCode;
  }

  /**
   * Constructs a <code>VariablePrecisionAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/VariablePrecisionAddress} obj Optional instance to populate.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/VariablePrecisionAddress} The populated <code>VariablePrecisionAddress</code> instance.
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
      obj = obj || new VariablePrecisionAddress();
      if (data.hasOwnProperty('addressLine1'))
        obj.addressLine1 = ApiClient.convertToType(data['addressLine1'], 'String');
      if (data.hasOwnProperty('addressLine2'))
        obj.addressLine2 = ApiClient.convertToType(data['addressLine2'], 'String');
      if (data.hasOwnProperty('addressLine3'))
        obj.addressLine3 = ApiClient.convertToType(data['addressLine3'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('districtOrCounty'))
        obj.districtOrCounty = ApiClient.convertToType(data['districtOrCounty'], 'String');
      if (data.hasOwnProperty('stateOrRegion'))
        obj.stateOrRegion = ApiClient.convertToType(data['stateOrRegion'], 'String');
      if (data.hasOwnProperty('postalCode'))
        obj.postalCode = ApiClient.convertToType(data['postalCode'], 'String');
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = ApiClient.convertToType(data['countryCode'], 'String');
    }
    return obj;
  }
}

/**
 * The first line of the address.
 * @member {String} addressLine1
 */
VariablePrecisionAddress.prototype.addressLine1 = undefined;

/**
 * Additional address information, if required.
 * @member {String} addressLine2
 */
VariablePrecisionAddress.prototype.addressLine2 = undefined;

/**
 * Additional address information, if required.
 * @member {String} addressLine3
 */
VariablePrecisionAddress.prototype.addressLine3 = undefined;

/**
 * The city where the person, business, or institution is located. This property should not be used in Japan.
 * @member {String} city
 */
VariablePrecisionAddress.prototype.city = undefined;

/**
 * The district or county where the person, business, or institution is located.
 * @member {String} districtOrCounty
 */
VariablePrecisionAddress.prototype.districtOrCounty = undefined;

/**
 * The state or region where the person, business or institution is located.
 * @member {String} stateOrRegion
 */
VariablePrecisionAddress.prototype.stateOrRegion = undefined;

/**
 * The postal code of the address.
 * @member {String} postalCode
 */
VariablePrecisionAddress.prototype.postalCode = undefined;

/**
 * The two digit country code. In ISO 3166-1 alpha-2 format.
 * @member {String} countryCode
 */
VariablePrecisionAddress.prototype.countryCode = undefined;

