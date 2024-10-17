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

/**
 * The TermsAndConditionsNotAcceptedCarrier model module.
 * @module merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TermsAndConditionsNotAcceptedCarrier
 * @version v0
 */
export class TermsAndConditionsNotAcceptedCarrier {
  /**
   * Constructs a new <code>TermsAndConditionsNotAcceptedCarrier</code>.
   * A carrier whose terms and conditions have not been accepted by the seller.
   * @alias module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TermsAndConditionsNotAcceptedCarrier
   * @class
   * @param carrierName {String} The name of the carrier.
   */
  constructor(carrierName) {
    this.carrierName = carrierName;
  }

  /**
   * Constructs a <code>TermsAndConditionsNotAcceptedCarrier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TermsAndConditionsNotAcceptedCarrier} obj Optional instance to populate.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/TermsAndConditionsNotAcceptedCarrier} The populated <code>TermsAndConditionsNotAcceptedCarrier</code> instance.
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
      obj = obj || new TermsAndConditionsNotAcceptedCarrier();
      if (data.hasOwnProperty('CarrierName'))
        obj.carrierName = ApiClient.convertToType(data['CarrierName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the carrier.
 * @member {String} carrierName
 */
TermsAndConditionsNotAcceptedCarrier.prototype.carrierName = undefined;


