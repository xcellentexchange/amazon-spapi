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

/**
 * The BigDecimal model module.
 * @module financesV0/js-client.financesV0.model/BigDecimal
 * @version v0
 */
export class BigDecimal {
  /**
   * Constructs a new <code>BigDecimal</code>.
   * A signed decimal number.
   * @alias module:financesV0/js-client.financesV0.model/BigDecimal
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BigDecimal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/BigDecimal} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/BigDecimal} The populated <code>BigDecimal</code> instance.
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
      obj = obj || new BigDecimal();
    }
    return obj;
  }
}

