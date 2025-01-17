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

/**
 * The MarketplaceId model module.
 * @module productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/MarketplaceId
 * @version 2022-05-01
 */
export class MarketplaceId {
  /**
   * Constructs a new <code>MarketplaceId</code>.
   * A marketplace identifier. Specifies the marketplace for which data is returned.
   * @alias module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/MarketplaceId
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MarketplaceId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/MarketplaceId} obj Optional instance to populate.
   * @return {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/MarketplaceId} The populated <code>MarketplaceId</code> instance.
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
      obj = obj || new MarketplaceId();
    }
    return obj;
  }
}

