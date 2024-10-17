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
import {Currency} from './Currency.js';
import {ModelDate} from './ModelDate.js';

/**
 * The ValueAddedServiceChargeEvent model module.
 * @module financesV0/js-client.financesV0.model/ValueAddedServiceChargeEvent
 * @version v0
 */
export class ValueAddedServiceChargeEvent {
  /**
   * Constructs a new <code>ValueAddedServiceChargeEvent</code>.
   * An event related to a value added service charge.
   * @alias module:financesV0/js-client.financesV0.model/ValueAddedServiceChargeEvent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ValueAddedServiceChargeEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/ValueAddedServiceChargeEvent} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/ValueAddedServiceChargeEvent} The populated <code>ValueAddedServiceChargeEvent</code> instance.
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
      obj = obj || new ValueAddedServiceChargeEvent();
      if (data.hasOwnProperty('TransactionType'))
        obj.transactionType = ApiClient.convertToType(data['TransactionType'], 'String');
      if (data.hasOwnProperty('PostedDate'))
        obj.postedDate = ModelDate.constructFromObject(data['PostedDate']);
      if (data.hasOwnProperty('Description'))
        obj.description = ApiClient.convertToType(data['Description'], 'String');
      if (data.hasOwnProperty('TransactionAmount'))
        obj.transactionAmount = Currency.constructFromObject(data['TransactionAmount']);
    }
    return obj;
  }
}

/**
 * The transaction type. For example, 'Other Support Service fees'
 * @member {String} transactionType
 */
ValueAddedServiceChargeEvent.prototype.transactionType = undefined;

/**
 * The date and time when the financial event was posted.
 * @member {module:financesV0/js-client.financesV0.model/ModelDate} postedDate
 */
ValueAddedServiceChargeEvent.prototype.postedDate = undefined;

/**
 * A short description of the service charge event.
 * @member {String} description
 */
ValueAddedServiceChargeEvent.prototype.description = undefined;

/**
 * The amount of the service charge event.
 * @member {module:financesV0/js-client.financesV0.model/Currency} transactionAmount
 */
ValueAddedServiceChargeEvent.prototype.transactionAmount = undefined;

