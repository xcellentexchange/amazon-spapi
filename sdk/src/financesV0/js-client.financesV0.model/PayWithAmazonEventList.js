/*
 * Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information that is relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range. 
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
import {PayWithAmazonEvent} from './PayWithAmazonEvent.js';

/**
 * The PayWithAmazonEventList model module.
 * @module financesV0/js-client.financesV0.model/PayWithAmazonEventList
 * @version v0
 */
export class PayWithAmazonEventList extends Array {
  /**
   * Constructs a new <code>PayWithAmazonEventList</code>.
   * A list of events related to the seller's Pay with Amazon account.
   * @alias module:financesV0/js-client.financesV0.model/PayWithAmazonEventList
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>PayWithAmazonEventList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/PayWithAmazonEventList} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/PayWithAmazonEventList} The populated <code>PayWithAmazonEventList</code> instance.
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
      obj = obj || new PayWithAmazonEventList();
      ApiClient.constructFromObject(data, obj, 'PayWithAmazonEvent');
    }
    return obj;
  }
}

