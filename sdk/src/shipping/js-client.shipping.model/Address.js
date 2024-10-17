/*
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
 *
 * OpenAPI spec version: v1
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
import {City} from './City.js';
import {CountryCode} from './CountryCode.js';
import {PostalCode} from './PostalCode.js';
import {StateOrRegion} from './StateOrRegion.js';

/**
 * The Address model module.
 * @module shipping/js-client.shipping.model/Address
 * @version v1
 */
export class Address {
  /**
   * Constructs a new <code>Address</code>.
   * The address.
   * @alias module:shipping/js-client.shipping.model/Address
   * @class
   * @param name {String} The name of the person, business or institution at that address.
   * @param addressLine1 {String} First line of that address.
   * @param stateOrRegion {module:shipping/js-client.shipping.model/StateOrRegion} 
   * @param city {module:shipping/js-client.shipping.model/City} 
   * @param countryCode {module:shipping/js-client.shipping.model/CountryCode} 
   * @param postalCode {module:shipping/js-client.shipping.model/PostalCode} 
   */
  constructor(name, addressLine1, stateOrRegion, city, countryCode, postalCode) {
    this.name = name;
    this.addressLine1 = addressLine1;
    this.stateOrRegion = stateOrRegion;
    this.city = city;
    this.countryCode = countryCode;
    this.postalCode = postalCode;
  }

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping/js-client.shipping.model/Address} obj Optional instance to populate.
   * @return {module:shipping/js-client.shipping.model/Address} The populated <code>Address</code> instance.
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
      obj = obj || new Address();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('addressLine1'))
        obj.addressLine1 = ApiClient.convertToType(data['addressLine1'], 'String');
      if (data.hasOwnProperty('addressLine2'))
        obj.addressLine2 = ApiClient.convertToType(data['addressLine2'], 'String');
      if (data.hasOwnProperty('addressLine3'))
        obj.addressLine3 = ApiClient.convertToType(data['addressLine3'], 'String');
      if (data.hasOwnProperty('stateOrRegion'))
        obj.stateOrRegion = StateOrRegion.constructFromObject(data['stateOrRegion']);
      if (data.hasOwnProperty('city'))
        obj.city = City.constructFromObject(data['city']);
      if (data.hasOwnProperty('countryCode'))
        obj.countryCode = CountryCode.constructFromObject(data['countryCode']);
      if (data.hasOwnProperty('postalCode'))
        obj.postalCode = PostalCode.constructFromObject(data['postalCode']);
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('copyEmails'))
        obj.copyEmails = ApiClient.convertToType(data['copyEmails'], ['String']);
      if (data.hasOwnProperty('phoneNumber'))
        obj.phoneNumber = ApiClient.convertToType(data['phoneNumber'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the person, business or institution at that address.
 * @member {String} name
 */
Address.prototype.name = undefined;

/**
 * First line of that address.
 * @member {String} addressLine1
 */
Address.prototype.addressLine1 = undefined;

/**
 * Additional address information, if required.
 * @member {String} addressLine2
 */
Address.prototype.addressLine2 = undefined;

/**
 * Additional address information, if required.
 * @member {String} addressLine3
 */
Address.prototype.addressLine3 = undefined;

/**
 * @member {module:shipping/js-client.shipping.model/StateOrRegion} stateOrRegion
 */
Address.prototype.stateOrRegion = undefined;

/**
 * @member {module:shipping/js-client.shipping.model/City} city
 */
Address.prototype.city = undefined;

/**
 * @member {module:shipping/js-client.shipping.model/CountryCode} countryCode
 */
Address.prototype.countryCode = undefined;

/**
 * @member {module:shipping/js-client.shipping.model/PostalCode} postalCode
 */
Address.prototype.postalCode = undefined;

/**
 * The email address of the contact associated with the address.
 * @member {String} email
 */
Address.prototype.email = undefined;

/**
 * The email cc addresses of the contact associated with the address.
 * @member {Array.<String>} copyEmails
 */
Address.prototype.copyEmails = undefined;

/**
 * The phone number of the person, business or institution located at that address.
 * @member {String} phoneNumber
 */
Address.prototype.phoneNumber = undefined;

