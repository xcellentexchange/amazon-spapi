/*
 * Selling Partner API for Sellers
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API's operations, data types, and schemas.
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
import {Address} from './Address.js';

/**
 * The Business model module.
 * @module sellers/js-client.sellers.model/Business
 * @version v1
 */
export class Business {
  /**
   * Constructs a new <code>Business</code>.
   * Information about the seller's business. Certain fields may be omitted depending on the seller's `businessType`.
   * @alias module:sellers/js-client.sellers.model/Business
   * @class
   * @param name {String} The registered business name.
   * @param registeredBusinessAddress {module:sellers/js-client.sellers.model/Address} The registered business address.
   */
  constructor(name, registeredBusinessAddress) {
    this.name = name;
    this.registeredBusinessAddress = registeredBusinessAddress;
  }

  /**
   * Constructs a <code>Business</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:sellers/js-client.sellers.model/Business} obj Optional instance to populate.
   * @return {module:sellers/js-client.sellers.model/Business} The populated <code>Business</code> instance.
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
      obj = obj || new Business();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('registeredBusinessAddress'))
        obj.registeredBusinessAddress = Address.constructFromObject(data['registeredBusinessAddress']);
      if (data.hasOwnProperty('companyRegistrationNumber'))
        obj.companyRegistrationNumber = ApiClient.convertToType(data['companyRegistrationNumber'], 'String');
      if (data.hasOwnProperty('companyTaxIdentificationNumber'))
        obj.companyTaxIdentificationNumber = ApiClient.convertToType(data['companyTaxIdentificationNumber'], 'String');
      if (data.hasOwnProperty('nonLatinName'))
        obj.nonLatinName = ApiClient.convertToType(data['nonLatinName'], 'String');
    }
    return obj;
  }
}

/**
 * The registered business name.
 * @member {String} name
 */
Business.prototype.name = undefined;

/**
 * The registered business address.
 * @member {module:sellers/js-client.sellers.model/Address} registeredBusinessAddress
 */
Business.prototype.registeredBusinessAddress = undefined;

/**
 * The seller's company registration number, if applicable. This field will be absent for individual sellers and sole proprietorships.
 * @member {String} companyRegistrationNumber
 */
Business.prototype.companyRegistrationNumber = undefined;

/**
 * The seller's company tax identification number, if applicable. This field will be present for certain business types only, such as sole proprietorships.
 * @member {String} companyTaxIdentificationNumber
 */
Business.prototype.companyTaxIdentificationNumber = undefined;

/**
 * The non-Latin script version of the registered business name, if applicable.
 * @member {String} nonLatinName
 */
Business.prototype.nonLatinName = undefined;


