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
import {Currency} from './Currency.js';

/**
 * The Breakdown model module.
 * @module finances_2024-06-19/js-client.finances_2024-06-19.model/Breakdown
 * @version 2024-06-19
 */
export class Breakdown {
  /**
   * Constructs a new <code>Breakdown</code>.
   * Details about the movement of money in the financial transaction. Breakdowns are further categorized into breakdown types, breakdown amounts, and further breakdowns.
   * @alias module:finances_2024-06-19/js-client.finances_2024-06-19.model/Breakdown
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Breakdown</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:finances_2024-06-19/js-client.finances_2024-06-19.model/Breakdown} obj Optional instance to populate.
   * @return {module:finances_2024-06-19/js-client.finances_2024-06-19.model/Breakdown} The populated <code>Breakdown</code> instance.
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
      obj = obj || new Breakdown();
      if (data.hasOwnProperty('breakdownType'))
        obj.breakdownType = ApiClient.convertToType(data['breakdownType'], 'String');
      if (data.hasOwnProperty('breakdownAmount'))
        obj.breakdownAmount = Currency.constructFromObject(data['breakdownAmount']);
      if (data.hasOwnProperty('breakdowns'))
        obj.breakdowns = Breakdown.constructFromObject(data['breakdowns']);
    }
    return obj;
  }
}

/**
 * The type of charge.
 * @member {String} breakdownType
 */
Breakdown.prototype.breakdownType = undefined;

/**
 * The monetary amount of the charge.
 * @member {module:finances_2024-06-19/js-client.finances_2024-06-19.model/Currency} breakdownAmount
 */
Breakdown.prototype.breakdownAmount = undefined;

/**
 * Further breakdowns of `BreakdownType`.
 * @member {module:finances_2024-06-19/js-client.finances_2024-06-19.model/Breakdown} breakdowns
 */
Breakdown.prototype.breakdowns = undefined;

