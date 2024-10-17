/*
 * Selling Partner API for Merchant Fulfillment
 * The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.
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
import {TermsAndConditionsNotAcceptedCarrier} from './TermsAndConditionsNotAcceptedCarrier.js';

/**
 * The TermsAndConditionsNotAcceptedCarrierList model module.
 * @module merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TermsAndConditionsNotAcceptedCarrierList
 * @version v0
 */
export class TermsAndConditionsNotAcceptedCarrierList extends Array {
  /**
   * Constructs a new <code>TermsAndConditionsNotAcceptedCarrierList</code>.
   * List of carriers whose terms and conditions were not accepted by the seller.
   * @alias module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TermsAndConditionsNotAcceptedCarrierList
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>TermsAndConditionsNotAcceptedCarrierList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TermsAndConditionsNotAcceptedCarrierList} obj Optional instance to populate.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TermsAndConditionsNotAcceptedCarrierList} The populated <code>TermsAndConditionsNotAcceptedCarrierList</code> instance.
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
      obj = obj || new TermsAndConditionsNotAcceptedCarrierList();
      ApiClient.constructFromObject(data, obj, 'TermsAndConditionsNotAcceptedCarrier');
    }
    return obj;
  }
}

