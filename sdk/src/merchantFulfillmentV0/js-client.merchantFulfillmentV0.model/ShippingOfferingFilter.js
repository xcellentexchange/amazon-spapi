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
import {CarrierWillPickUpOption} from './CarrierWillPickUpOption.js';
import {DeliveryExperienceOption} from './DeliveryExperienceOption.js';

/**
 * The ShippingOfferingFilter model module.
 * @module merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingOfferingFilter
 * @version v0
 */
export class ShippingOfferingFilter {
  /**
   * Constructs a new <code>ShippingOfferingFilter</code>.
   * Filter for use when requesting eligible shipping services.
   * @alias module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingOfferingFilter
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShippingOfferingFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingOfferingFilter} obj Optional instance to populate.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingOfferingFilter} The populated <code>ShippingOfferingFilter</code> instance.
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
      obj = obj || new ShippingOfferingFilter();
      if (data.hasOwnProperty('IncludePackingSlipWithLabel'))
        obj.includePackingSlipWithLabel = ApiClient.convertToType(data['IncludePackingSlipWithLabel'], 'Boolean');
      if (data.hasOwnProperty('IncludeComplexShippingOptions'))
        obj.includeComplexShippingOptions = ApiClient.convertToType(data['IncludeComplexShippingOptions'], 'Boolean');
      if (data.hasOwnProperty('CarrierWillPickUp'))
        obj.carrierWillPickUp = CarrierWillPickUpOption.constructFromObject(data['CarrierWillPickUp']);
      if (data.hasOwnProperty('DeliveryExperience'))
        obj.deliveryExperience = DeliveryExperienceOption.constructFromObject(data['DeliveryExperience']);
    }
    return obj;
  }
}

/**
 * When true, include a packing slip with the label.
 * @member {Boolean} includePackingSlipWithLabel
 */
ShippingOfferingFilter.prototype.includePackingSlipWithLabel = undefined;

/**
 * When true, include complex shipping options.
 * @member {Boolean} includeComplexShippingOptions
 */
ShippingOfferingFilter.prototype.includeComplexShippingOptions = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/CarrierWillPickUpOption} carrierWillPickUp
 */
ShippingOfferingFilter.prototype.carrierWillPickUp = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/DeliveryExperienceOption} deliveryExperience
 */
ShippingOfferingFilter.prototype.deliveryExperience = undefined;

