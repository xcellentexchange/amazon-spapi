/*
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
import {SubstitutionOptionList} from './SubstitutionOptionList.js';

/**
 * The SubstitutionPreferences model module.
 * @module ordersV0/js-client.ordersV0.model/SubstitutionPreferences
 * @version v0
 */
export class SubstitutionPreferences {
  /**
   * Constructs a new <code>SubstitutionPreferences</code>.
   * Substitution preferences for an order item.
   * @alias module:ordersV0/js-client.ordersV0.model/SubstitutionPreferences
   * @class
   * @param substitutionType {module:ordersV0/js-client.ordersV0.model/SubstitutionPreferences.SubstitutionTypeEnum} The type of substitution that these preferences represent.
   */
  constructor(substitutionType) {
    this.substitutionType = substitutionType;
  }

  /**
   * Constructs a <code>SubstitutionPreferences</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ordersV0/js-client.ordersV0.model/SubstitutionPreferences} obj Optional instance to populate.
   * @return {module:ordersV0/js-client.ordersV0.model/SubstitutionPreferences} The populated <code>SubstitutionPreferences</code> instance.
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
      obj = obj || new SubstitutionPreferences();
      if (data.hasOwnProperty('SubstitutionType'))
        obj.substitutionType = ApiClient.convertToType(data['SubstitutionType'], 'String');
      if (data.hasOwnProperty('SubstitutionOptions'))
        obj.substitutionOptions = SubstitutionOptionList.constructFromObject(data['SubstitutionOptions']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>substitutionType</code> property.
 * @enum {String}
 * @readonly
 */
SubstitutionPreferences.SubstitutionTypeEnum = {
  /**
   * value: "CUSTOMER_PREFERENCE"
   * @const
   */
  CUSTOMER_PREFERENCE: "CUSTOMER_PREFERENCE",

  /**
   * value: "AMAZON_RECOMMENDED"
   * @const
   */
  AMAZON_RECOMMENDED: "AMAZON_RECOMMENDED",

  /**
   * value: "DO_NOT_SUBSTITUTE"
   * @const
   */
  DO_NOT_SUBSTITUTE: "DO_NOT_SUBSTITUTE"
};

/**
 * The type of substitution that these preferences represent.
 * @member {module:ordersV0/js-client.ordersV0.model/SubstitutionPreferences.SubstitutionTypeEnum} substitutionType
 */
SubstitutionPreferences.prototype.substitutionType = undefined;

/**
 * Substitution options for the order item.
 * @member {module:ordersV0/js-client.ordersV0.model/SubstitutionOptionList} substitutionOptions
 */
SubstitutionPreferences.prototype.substitutionOptions = undefined;

