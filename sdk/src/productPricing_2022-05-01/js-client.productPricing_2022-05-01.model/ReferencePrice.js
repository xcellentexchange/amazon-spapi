/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-05-01
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
import {MoneyType} from './MoneyType.js';

/**
 * The ReferencePrice model module.
 * @module productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/ReferencePrice
 * @version 2022-05-01
 */
export class ReferencePrice {
  /**
   * Constructs a new <code>ReferencePrice</code>.
   * The reference price for the given ASIN `marketplaceId` combination. 
   * @alias module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/ReferencePrice
   * @class
   * @param name {String} The name of the reference price like `CompetitivePriceThreshold`.
   * @param price {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/MoneyType} The reference price for the ASIN `marketplaceId` combination. 
   */
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  /**
   * Constructs a <code>ReferencePrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/ReferencePrice} obj Optional instance to populate.
   * @return {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/ReferencePrice} The populated <code>ReferencePrice</code> instance.
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
      obj = obj || new ReferencePrice();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('price'))
        obj.price = MoneyType.constructFromObject(data['price']);
    }
    return obj;
  }
}

/**
 * The name of the reference price like `CompetitivePriceThreshold`.
 * @member {String} name
 */
ReferencePrice.prototype.name = undefined;

/**
 * The reference price for the ASIN `marketplaceId` combination. 
 * @member {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/MoneyType} price
 */
ReferencePrice.prototype.price = undefined;


