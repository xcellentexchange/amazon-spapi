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
import {Constraints} from './Constraints.js';
import {InputTargetType} from './InputTargetType.js';
import {RestrictedSetValues} from './RestrictedSetValues.js';

/**
 * The SellerInputDefinition model module.
 * @module merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/SellerInputDefinition
 * @version v0
 */
export class SellerInputDefinition {
  /**
   * Constructs a new <code>SellerInputDefinition</code>.
   * Specifies characteristics that apply to a seller input.
   * @alias module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/SellerInputDefinition
   * @class
   * @param isRequired {Boolean} When true, the additional input field is required.
   * @param dataType {String} The data type of the additional input field.
   * @param constraints {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Constraints} 
   * @param inputDisplayText {String} The display text for the additional input field.
   * @param storedValue {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AdditionalSellerInput} 
   */
  constructor(isRequired, dataType, constraints, inputDisplayText, storedValue) {
    this.isRequired = isRequired;
    this.dataType = dataType;
    this.constraints = constraints;
    this.inputDisplayText = inputDisplayText;
    this.storedValue = storedValue;
  }

  /**
   * Constructs a <code>SellerInputDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/SellerInputDefinition} obj Optional instance to populate.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/SellerInputDefinition} The populated <code>SellerInputDefinition</code> instance.
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
      obj = obj || new SellerInputDefinition();
      if (data.hasOwnProperty('IsRequired'))
        obj.isRequired = ApiClient.convertToType(data['IsRequired'], 'Boolean');
      if (data.hasOwnProperty('DataType'))
        obj.dataType = ApiClient.convertToType(data['DataType'], 'String');
      if (data.hasOwnProperty('Constraints'))
        obj.constraints = Constraints.constructFromObject(data['Constraints']);
      if (data.hasOwnProperty('InputDisplayText'))
        obj.inputDisplayText = ApiClient.convertToType(data['InputDisplayText'], 'String');
      if (data.hasOwnProperty('InputTarget'))
        obj.inputTarget = InputTargetType.constructFromObject(data['InputTarget']);
      if (data.hasOwnProperty('StoredValue'))
        obj.storedValue = AdditionalSellerInput.constructFromObject(data['StoredValue']);
      if (data.hasOwnProperty('RestrictedSetValues'))
        obj.restrictedSetValues = RestrictedSetValues.constructFromObject(data['RestrictedSetValues']);
    }
    return obj;
  }
}

/**
 * When true, the additional input field is required.
 * @member {Boolean} isRequired
 */
SellerInputDefinition.prototype.isRequired = undefined;

/**
 * The data type of the additional input field.
 * @member {String} dataType
 */
SellerInputDefinition.prototype.dataType = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Constraints} constraints
 */
SellerInputDefinition.prototype.constraints = undefined;

/**
 * The display text for the additional input field.
 * @member {String} inputDisplayText
 */
SellerInputDefinition.prototype.inputDisplayText = undefined;

/**
 * Whether the seller input applies to the item or the shipment.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/InputTargetType} inputTarget
 */
SellerInputDefinition.prototype.inputTarget = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AdditionalSellerInput} storedValue
 */
SellerInputDefinition.prototype.storedValue = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/RestrictedSetValues} restrictedSetValues
 */
SellerInputDefinition.prototype.restrictedSetValues = undefined;


