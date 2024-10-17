/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
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
import {Decimal} from './Decimal.js';
import {Money} from './Money.js';

/**
 * The TaxDetails model module.
 * @module vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/TaxDetails
 * @version v1
 */
export class TaxDetails {
  /**
   * Constructs a new <code>TaxDetails</code>.
   * The order's tax details.
   * @alias module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/TaxDetails
   * @class
   * @param taxAmount {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/Money} 
   */
  constructor(taxAmount) {
    this.taxAmount = taxAmount;
  }

  /**
   * Constructs a <code>TaxDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/TaxDetails} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/TaxDetails} The populated <code>TaxDetails</code> instance.
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
      obj = obj || new TaxDetails();
      if (data.hasOwnProperty('taxRate'))
        obj.taxRate = Decimal.constructFromObject(data['taxRate']);
      if (data.hasOwnProperty('taxAmount'))
        obj.taxAmount = Money.constructFromObject(data['taxAmount']);
      if (data.hasOwnProperty('taxableAmount'))
        obj.taxableAmount = Money.constructFromObject(data['taxableAmount']);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/Decimal} taxRate
 */
TaxDetails.prototype.taxRate = undefined;

/**
 * @member {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/Money} taxAmount
 */
TaxDetails.prototype.taxAmount = undefined;

/**
 * @member {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/Money} taxableAmount
 */
TaxDetails.prototype.taxableAmount = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
TaxDetails.TypeEnum = {
  /**
   * value: "CONSUMPTION"
   * @const
   */
  CONSUMPTION: "CONSUMPTION",

  /**
   * value: "GST"
   * @const
   */
  GST: "GST",

  /**
   * value: "MwSt."
   * @const
   */
  mwSt_: "MwSt.",

  /**
   * value: "PST"
   * @const
   */
  PST: "PST",

  /**
   * value: "TOTAL"
   * @const
   */
  TOTAL: "TOTAL",

  /**
   * value: "TVA"
   * @const
   */
  TVA: "TVA",

  /**
   * value: "VAT"
   * @const
   */
  VAT: "VAT"
};

/**
 * Tax type.
 * @member {module:vendorDirectFulfillmentOrdersV1/js-client.vendorDirectFulfillmentOrdersV1.model/TaxDetails.TypeEnum} type
 */
TaxDetails.prototype.type = undefined;


