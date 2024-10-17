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
import {HttpHeaders} from './HttpHeaders.js';
import {HttpStatusLine} from './HttpStatusLine.js';

/**
 * The BatchResponse model module.
 * @module productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/BatchResponse
 * @version 2022-05-01
 */
export class BatchResponse {
  /**
   * Constructs a new <code>BatchResponse</code>.
   * The common properties for responses to individual requests within a batch.
   * @alias module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/BatchResponse
   * @class
   * @param headers {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/HttpHeaders} 
   * @param status {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/HttpStatusLine} 
   */
  constructor(headers, status) {
    this.headers = headers;
    this.status = status;
  }

  /**
   * Constructs a <code>BatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/BatchResponse} obj Optional instance to populate.
   * @return {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/BatchResponse} The populated <code>BatchResponse</code> instance.
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
      obj = obj || new BatchResponse();
      if (data.hasOwnProperty('headers'))
        obj.headers = HttpHeaders.constructFromObject(data['headers']);
      if (data.hasOwnProperty('status'))
        obj.status = HttpStatusLine.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * @member {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/HttpHeaders} headers
 */
BatchResponse.prototype.headers = undefined;

/**
 * @member {module:productPricing_2022-05-01/js-client.productPricing_2022-05-01.model/HttpStatusLine} status
 */
BatchResponse.prototype.status = undefined;

