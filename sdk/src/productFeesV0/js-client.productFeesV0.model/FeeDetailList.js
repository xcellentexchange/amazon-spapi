/*
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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
import {FeeDetail} from './FeeDetail.js';

/**
 * The FeeDetailList model module.
 * @module productFeesV0/js-client.productFeesV0.model/FeeDetailList
 * @version v0
 */
export class FeeDetailList extends Array {
  /**
   * Constructs a new <code>FeeDetailList</code>.
   * A list of other fees that contribute to a given fee.
   * @alias module:productFeesV0/js-client.productFeesV0.model/FeeDetailList
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>FeeDetailList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productFeesV0/js-client.productFeesV0.model/FeeDetailList} obj Optional instance to populate.
   * @return {module:productFeesV0/js-client.productFeesV0.model/FeeDetailList} The populated <code>FeeDetailList</code> instance.
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
      obj = obj || new FeeDetailList();
      ApiClient.constructFromObject(data, obj, 'FeeDetail');
    }
    return obj;
  }
}
