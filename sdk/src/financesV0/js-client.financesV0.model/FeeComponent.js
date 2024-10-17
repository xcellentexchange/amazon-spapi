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

/**
 * The FeeComponent model module.
 * @module financesV0/js-client.financesV0.model/FeeComponent
 * @version v0
 */
export class FeeComponent {
  /**
   * Constructs a new <code>FeeComponent</code>.
   * A fee associated with the event.
   * @alias module:financesV0/js-client.financesV0.model/FeeComponent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FeeComponent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/FeeComponent} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/FeeComponent} The populated <code>FeeComponent</code> instance.
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
      obj = obj || new FeeComponent();
      if (data.hasOwnProperty('FeeType'))
        obj.feeType = ApiClient.convertToType(data['FeeType'], 'String');
      if (data.hasOwnProperty('FeeAmount'))
        obj.feeAmount = Currency.constructFromObject(data['FeeAmount']);
    }
    return obj;
  }
}

/**
 * The type of fee. For more information about Selling on Amazon fees, see [Selling on Amazon Fee Schedule](https://sellercentral.amazon.com/gp/help/200336920) on Seller Central. For more information about Fulfillment by Amazon fees, see [FBA features, services and fees](https://sellercentral.amazon.com/gp/help/201074400) on Seller Central.
 * @member {String} feeType
 */
FeeComponent.prototype.feeType = undefined;

/**
 * The amount of the fee.
 * @member {module:financesV0/js-client.financesV0.model/Currency} feeAmount
 */
FeeComponent.prototype.feeAmount = undefined;

