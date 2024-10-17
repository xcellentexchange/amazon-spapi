/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
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
import {IneligibleRate} from './IneligibleRate.js';

/**
 * The IneligibleRateList model module.
 * @module shippingV2/js-client.shippingV2.model/IneligibleRateList
 * @version v2
 */
export class IneligibleRateList extends Array {
  /**
   * Constructs a new <code>IneligibleRateList</code>.
   * A list of ineligible shipping service offerings.
   * @alias module:shippingV2/js-client.shippingV2.model/IneligibleRateList
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>IneligibleRateList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shippingV2/js-client.shippingV2.model/IneligibleRateList} obj Optional instance to populate.
   * @return {module:shippingV2/js-client.shippingV2.model/IneligibleRateList} The populated <code>IneligibleRateList</code> instance.
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
      obj = obj || new IneligibleRateList();
      ApiClient.constructFromObject(data, obj, 'IneligibleRate');
    }
    return obj;
  }
}
