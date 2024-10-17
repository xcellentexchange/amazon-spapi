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
import {AdditionalSellerInput} from './AdditionalSellerInput.js';

/**
 * The AdditionalSellerInputs model module.
 * @module merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AdditionalSellerInputs
 * @version v0
 */
export class AdditionalSellerInputs {
  /**
   * Constructs a new <code>AdditionalSellerInputs</code>.
   * An additional set of seller inputs required to purchase shipping.
   * @alias module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AdditionalSellerInputs
   * @class
   * @param additionalInputFieldName {String} The name of the additional input field.
   * @param additionalSellerInput {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AdditionalSellerInput} 
   */
  constructor(additionalInputFieldName, additionalSellerInput) {
    this.additionalInputFieldName = additionalInputFieldName;
    this.additionalSellerInput = additionalSellerInput;
  }

  /**
   * Constructs a <code>AdditionalSellerInputs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AdditionalSellerInputs} obj Optional instance to populate.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AdditionalSellerInputs} The populated <code>AdditionalSellerInputs</code> instance.
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
      obj = obj || new AdditionalSellerInputs();
      if (data.hasOwnProperty('AdditionalInputFieldName'))
        obj.additionalInputFieldName = ApiClient.convertToType(data['AdditionalInputFieldName'], 'String');
      if (data.hasOwnProperty('AdditionalSellerInput'))
        obj.additionalSellerInput = AdditionalSellerInput.constructFromObject(data['AdditionalSellerInput']);
    }
    return obj;
  }
}

/**
 * The name of the additional input field.
 * @member {String} additionalInputFieldName
 */
AdditionalSellerInputs.prototype.additionalInputFieldName = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AdditionalSellerInput} additionalSellerInput
 */
AdditionalSellerInputs.prototype.additionalSellerInput = undefined;


