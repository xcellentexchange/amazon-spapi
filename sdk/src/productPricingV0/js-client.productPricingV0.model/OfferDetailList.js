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
import {OfferDetail} from './OfferDetail.js';

/**
 * The OfferDetailList model module.
 * @module productPricingV0/js-client.productPricingV0.model/OfferDetailList
 * @version v0
 */
export class OfferDetailList extends Array {
  /**
   * Constructs a new <code>OfferDetailList</code>.
   * @alias module:productPricingV0/js-client.productPricingV0.model/OfferDetailList
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>OfferDetailList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricingV0/js-client.productPricingV0.model/OfferDetailList} obj Optional instance to populate.
   * @return {module:productPricingV0/js-client.productPricingV0.model/OfferDetailList} The populated <code>OfferDetailList</code> instance.
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
      obj = obj || new OfferDetailList();
      ApiClient.constructFromObject(data, obj, 'OfferDetail');
    }
    return obj;
  }
}

