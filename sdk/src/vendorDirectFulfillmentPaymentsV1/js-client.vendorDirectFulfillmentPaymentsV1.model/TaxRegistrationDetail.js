/*
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor's invoice data.
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
 * The TaxRegistrationDetail model module.
 * @module vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/TaxRegistrationDetail
 * @version v1
 */
export class TaxRegistrationDetail {
  /**
   * Constructs a new <code>TaxRegistrationDetail</code>.
   * Tax registration details of the entity.
   * @alias module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/TaxRegistrationDetail
   * @class
   * @param taxRegistrationNumber {String} Tax registration number for the entity. For example, VAT ID or Consumption Tax ID.
   */
  constructor(taxRegistrationNumber) {
    this.taxRegistrationNumber = taxRegistrationNumber;
  }

  /**
   * Constructs a <code>TaxRegistrationDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/TaxRegistrationDetail} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/TaxRegistrationDetail} The populated <code>TaxRegistrationDetail</code> instance.
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
      obj = obj || new TaxRegistrationDetail();
      if (data.hasOwnProperty('taxRegistrationType'))
        obj.taxRegistrationType = ApiClient.convertToType(data['taxRegistrationType'], 'String');
      if (data.hasOwnProperty('taxRegistrationNumber'))
        obj.taxRegistrationNumber = ApiClient.convertToType(data['taxRegistrationNumber'], 'String');
      if (data.hasOwnProperty('taxRegistrationAddress'))
        obj.taxRegistrationAddress = Address.constructFromObject(data['taxRegistrationAddress']);
      if (data.hasOwnProperty('taxRegistrationMessage'))
        obj.taxRegistrationMessage = ApiClient.convertToType(data['taxRegistrationMessage'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>taxRegistrationType</code> property.
 * @enum {String}
 * @readonly
 */
TaxRegistrationDetail.TaxRegistrationTypeEnum = {
  /**
   * value: "VAT"
   * @const
   */
  VAT: "VAT",

  /**
   * value: "GST"
   * @const
   */
  GST: "GST"
};

/**
 * Tax registration type for the entity.
 * @member {module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/TaxRegistrationDetail.TaxRegistrationTypeEnum} taxRegistrationType
 */
TaxRegistrationDetail.prototype.taxRegistrationType = undefined;

/**
 * Tax registration number for the entity. For example, VAT ID or Consumption Tax ID.
 * @member {String} taxRegistrationNumber
 */
TaxRegistrationDetail.prototype.taxRegistrationNumber = undefined;

/**
 * Address associated with the tax registration number.
 * @member {module:vendorDirectFulfillmentPaymentsV1/js-client.vendorDirectFulfillmentPaymentsV1.model/Address} taxRegistrationAddress
 */
TaxRegistrationDetail.prototype.taxRegistrationAddress = undefined;

/**
 * Tax registration message that can be used for additional tax related details.
 * @member {String} taxRegistrationMessage
 */
TaxRegistrationDetail.prototype.taxRegistrationMessage = undefined;


