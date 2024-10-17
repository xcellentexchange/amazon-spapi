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
import {HttpMethod} from './HttpMethod.js';
import {HttpRequestHeaders} from './HttpRequestHeaders.js';

/**
 * The BatchRequest model module.
 * @module productPricingV0/js-client.productPricingV0.model/BatchRequest
 * @version v0
 */
export class BatchRequest {
  /**
   * Constructs a new <code>BatchRequest</code>.
   * Common properties of batch requests against individual APIs.
   * @alias module:productPricingV0/js-client.productPricingV0.model/BatchRequest
   * @class
   * @param uri {String} The resource path of the operation you are calling in batch without any query parameters.  If you are calling `getItemOffersBatch`, supply the path of `getItemOffers`.  **Example:** `/products/pricing/v0/items/B000P6Q7MY/offers`  If you are calling `getListingOffersBatch`, supply the path of `getListingOffers`.  **Example:** `/products/pricing/v0/listings/B000P6Q7MY/offers`
   * @param method {module:productPricingV0/js-client.productPricingV0.model/HttpMethod} 
   */
  constructor(uri, method) {
    this.uri = uri;
    this.method = method;
  }

  /**
   * Constructs a <code>BatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricingV0/js-client.productPricingV0.model/BatchRequest} obj Optional instance to populate.
   * @return {module:productPricingV0/js-client.productPricingV0.model/BatchRequest} The populated <code>BatchRequest</code> instance.
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
      obj = obj || new BatchRequest();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
      if (data.hasOwnProperty('method'))
        obj.method = HttpMethod.constructFromObject(data['method']);
      if (data.hasOwnProperty('headers'))
        obj.headers = HttpRequestHeaders.constructFromObject(data['headers']);
    }
    return obj;
  }
}

/**
 * The resource path of the operation you are calling in batch without any query parameters.  If you are calling `getItemOffersBatch`, supply the path of `getItemOffers`.  **Example:** `/products/pricing/v0/items/B000P6Q7MY/offers`  If you are calling `getListingOffersBatch`, supply the path of `getListingOffers`.  **Example:** `/products/pricing/v0/listings/B000P6Q7MY/offers`
 * @member {String} uri
 */
BatchRequest.prototype.uri = undefined;

/**
 * @member {module:productPricingV0/js-client.productPricingV0.model/HttpMethod} method
 */
BatchRequest.prototype.method = undefined;

/**
 * @member {module:productPricingV0/js-client.productPricingV0.model/HttpRequestHeaders} headers
 */
BatchRequest.prototype.headers = undefined;

