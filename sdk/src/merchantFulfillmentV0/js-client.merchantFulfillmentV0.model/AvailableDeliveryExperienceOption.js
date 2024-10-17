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
import {CurrencyAmount} from './CurrencyAmount.js';
import {DeliveryExperienceOption} from './DeliveryExperienceOption.js';

/**
 * The AvailableDeliveryExperienceOption model module.
 * @module merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableDeliveryExperienceOption
 * @version v0
 */
export class AvailableDeliveryExperienceOption {
  /**
   * Constructs a new <code>AvailableDeliveryExperienceOption</code>.
   * The available delivery confirmation options, and the fee charged, if any.
   * @alias module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableDeliveryExperienceOption
   * @class
   * @param deliveryExperienceOption {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/DeliveryExperienceOption} 
   * @param charge {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/CurrencyAmount} 
   */
  constructor(deliveryExperienceOption, charge) {
    this.deliveryExperienceOption = deliveryExperienceOption;
    this.charge = charge;
  }

  /**
   * Constructs a <code>AvailableDeliveryExperienceOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableDeliveryExperienceOption} obj Optional instance to populate.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AvailableDeliveryExperienceOption} The populated <code>AvailableDeliveryExperienceOption</code> instance.
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
      obj = obj || new AvailableDeliveryExperienceOption();
      if (data.hasOwnProperty('DeliveryExperienceOption'))
        obj.deliveryExperienceOption = DeliveryExperienceOption.constructFromObject(data['DeliveryExperienceOption']);
      if (data.hasOwnProperty('Charge'))
        obj.charge = CurrencyAmount.constructFromObject(data['Charge']);
    }
    return obj;
  }
}

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/DeliveryExperienceOption} deliveryExperienceOption
 */
AvailableDeliveryExperienceOption.prototype.deliveryExperienceOption = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/CurrencyAmount} charge
 */
AvailableDeliveryExperienceOption.prototype.charge = undefined;


