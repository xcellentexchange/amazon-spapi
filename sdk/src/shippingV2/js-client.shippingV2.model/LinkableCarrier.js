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
import {LinkableAccountTypeList} from './LinkableAccountTypeList.js';

/**
 * The LinkableCarrier model module.
 * @module shippingV2/js-client.shippingV2.model/LinkableCarrier
 * @version v2
 */
export class LinkableCarrier {
  /**
   * Constructs a new <code>LinkableCarrier</code>.
   * Info About Linkable Carrier
   * @alias module:shippingV2/js-client.shippingV2.model/LinkableCarrier
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LinkableCarrier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shippingV2/js-client.shippingV2.model/LinkableCarrier} obj Optional instance to populate.
   * @return {module:shippingV2/js-client.shippingV2.model/LinkableCarrier} The populated <code>LinkableCarrier</code> instance.
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
      obj = obj || new LinkableCarrier();
      if (data.hasOwnProperty('carrierId'))
        obj.carrierId = CarrierId.constructFromObject(data['carrierId']);
      if (data.hasOwnProperty('linkableAccountTypes'))
        obj.linkableAccountTypes = LinkableAccountTypeList.constructFromObject(data['linkableAccountTypes']);
    }
    return obj;
  }
}

/**
 * @member {module:shippingV2/js-client.shippingV2.model/CarrierId} carrierId
 */
LinkableCarrier.prototype.carrierId = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/LinkableAccountTypeList} linkableAccountTypes
 */
LinkableCarrier.prototype.linkableAccountTypes = undefined;

