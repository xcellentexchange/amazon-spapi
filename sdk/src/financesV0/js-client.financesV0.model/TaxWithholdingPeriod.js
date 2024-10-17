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
import {ModelDate} from './ModelDate.js';

/**
 * The TaxWithholdingPeriod model module.
 * @module financesV0/js-client.financesV0.model/TaxWithholdingPeriod
 * @version v0
 */
export class TaxWithholdingPeriod {
  /**
   * Constructs a new <code>TaxWithholdingPeriod</code>.
   * The period during which tax withholding on a seller's account is calculated.
   * @alias module:financesV0/js-client.financesV0.model/TaxWithholdingPeriod
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TaxWithholdingPeriod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/TaxWithholdingPeriod} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/TaxWithholdingPeriod} The populated <code>TaxWithholdingPeriod</code> instance.
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
      obj = obj || new TaxWithholdingPeriod();
      if (data.hasOwnProperty('StartDate'))
        obj.startDate = ModelDate.constructFromObject(data['StartDate']);
      if (data.hasOwnProperty('EndDate'))
        obj.endDate = ModelDate.constructFromObject(data['EndDate']);
    }
    return obj;
  }
}

/**
 * Start of the time range.
 * @member {module:financesV0/js-client.financesV0.model/ModelDate} startDate
 */
TaxWithholdingPeriod.prototype.startDate = undefined;

/**
 * End of the time range.
 * @member {module:financesV0/js-client.financesV0.model/ModelDate} endDate
 */
TaxWithholdingPeriod.prototype.endDate = undefined;


