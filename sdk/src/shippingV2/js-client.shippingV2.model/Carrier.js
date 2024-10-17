/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
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
import {CarrierId} from './CarrierId.js';
import {CarrierName} from './CarrierName.js';

/**
 * The Carrier model module.
 * @module shippingV2/js-client.shippingV2.model/Carrier
 * @version v2
 */
export class Carrier {
  /**
   * Constructs a new <code>Carrier</code>.
   * Carrier Related Info
   * @alias module:shippingV2/js-client.shippingV2.model/Carrier
   * @class
   * @param id {module:shippingV2/js-client.shippingV2.model/CarrierId} 
   * @param name {module:shippingV2/js-client.shippingV2.model/CarrierName} 
   */
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  /**
   * Constructs a <code>Carrier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shippingV2/js-client.shippingV2.model/Carrier} obj Optional instance to populate.
   * @return {module:shippingV2/js-client.shippingV2.model/Carrier} The populated <code>Carrier</code> instance.
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
      obj = obj || new Carrier();
      if (data.hasOwnProperty('id'))
        obj.id = CarrierId.constructFromObject(data['id']);
      if (data.hasOwnProperty('name'))
        obj.name = CarrierName.constructFromObject(data['name']);
    }
    return obj;
  }
}

/**
 * @member {module:shippingV2/js-client.shippingV2.model/CarrierId} id
 */
Carrier.prototype.id = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/CarrierName} name
 */
Carrier.prototype.name = undefined;


