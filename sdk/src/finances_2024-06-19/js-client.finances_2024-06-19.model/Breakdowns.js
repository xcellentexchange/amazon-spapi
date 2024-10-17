/*
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * OpenAPI spec version: 2024-06-19
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
import {Breakdown} from './Breakdown.js';

/**
 * The Breakdowns model module.
 * @module finances_2024-06-19/js-client.finances_2024-06-19.model/Breakdowns
 * @version 2024-06-19
 */
export class Breakdowns extends Array {
  /**
   * Constructs a new <code>Breakdowns</code>.
   * A list of breakdowns that provide details on how the total amount is calculated for the transaction.
   * @alias module:finances_2024-06-19/js-client.finances_2024-06-19.model/Breakdowns
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>Breakdowns</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:finances_2024-06-19/js-client.finances_2024-06-19.model/Breakdowns} obj Optional instance to populate.
   * @return {module:finances_2024-06-19/js-client.finances_2024-06-19.model/Breakdowns} The populated <code>Breakdowns</code> instance.
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
      obj = obj || new Breakdowns();
      ApiClient.constructFromObject(data, obj, 'Breakdown');
    }
    return obj;
  }
}

