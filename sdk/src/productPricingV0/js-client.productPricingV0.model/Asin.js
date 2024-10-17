/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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

/**
 * The Asin model module.
 * @module productPricingV0/js-client.productPricingV0.model/Asin
 * @version v0
 */
export class Asin {
  /**
   * Constructs a new <code>Asin</code>.
   * The Amazon Standard Identification Number (ASIN) of the item.
   * @alias module:productPricingV0/js-client.productPricingV0.model/Asin
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Asin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricingV0/js-client.productPricingV0.model/Asin} obj Optional instance to populate.
   * @return {module:productPricingV0/js-client.productPricingV0.model/Asin} The populated <code>Asin</code> instance.
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
      obj = obj || new Asin();
    }
    return obj;
  }
}

