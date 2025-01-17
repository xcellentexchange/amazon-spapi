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
import {Address} from './Address.js';
import {CarrierId} from './CarrierId.js';
import {ClientReferenceDetails} from './ClientReferenceDetails.js';
import {DateRange} from './DateRange.js';

/**
 * The GetCollectionFormHistoryRequest model module.
 * @module shippingV2/js-client.shippingV2.model/GetCollectionFormHistoryRequest
 * @version v2
 */
export class GetCollectionFormHistoryRequest {
  /**
   * Constructs a new <code>GetCollectionFormHistoryRequest</code>.
   * The request schema to get query collections form history API .
   * @alias module:shippingV2/js-client.shippingV2.model/GetCollectionFormHistoryRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetCollectionFormHistoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shippingV2/js-client.shippingV2.model/GetCollectionFormHistoryRequest} obj Optional instance to populate.
   * @return {module:shippingV2/js-client.shippingV2.model/GetCollectionFormHistoryRequest} The populated <code>GetCollectionFormHistoryRequest</code> instance.
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
      obj = obj || new GetCollectionFormHistoryRequest();
      if (data.hasOwnProperty('clientReferenceDetails'))
        obj.clientReferenceDetails = ClientReferenceDetails.constructFromObject(data['clientReferenceDetails']);
      if (data.hasOwnProperty('maxResults'))
        obj.maxResults = ApiClient.convertToType(data['maxResults'], 'Number');
      if (data.hasOwnProperty('carrierId'))
        obj.carrierId = CarrierId.constructFromObject(data['carrierId']);
      if (data.hasOwnProperty('shipFromAddress'))
        obj.shipFromAddress = Address.constructFromObject(data['shipFromAddress']);
      if (data.hasOwnProperty('dateRange'))
        obj.dateRange = DateRange.constructFromObject(data['dateRange']);
    }
    return obj;
  }
}

/**
 * @member {module:shippingV2/js-client.shippingV2.model/ClientReferenceDetails} clientReferenceDetails
 */
GetCollectionFormHistoryRequest.prototype.clientReferenceDetails = undefined;

/**
 * max Number of Results for query .
 * @member {Number} maxResults
 */
GetCollectionFormHistoryRequest.prototype.maxResults = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/CarrierId} carrierId
 */
GetCollectionFormHistoryRequest.prototype.carrierId = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/Address} shipFromAddress
 */
GetCollectionFormHistoryRequest.prototype.shipFromAddress = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/DateRange} dateRange
 */
GetCollectionFormHistoryRequest.prototype.dateRange = undefined;


