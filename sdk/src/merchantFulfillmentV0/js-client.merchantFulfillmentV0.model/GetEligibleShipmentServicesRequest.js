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
import {ShipmentRequestDetails} from './ShipmentRequestDetails.js';
import {ShippingOfferingFilter} from './ShippingOfferingFilter.js';

/**
 * The GetEligibleShipmentServicesRequest model module.
 * @module merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesRequest
 * @version v0
 */
export class GetEligibleShipmentServicesRequest {
  /**
   * Constructs a new <code>GetEligibleShipmentServicesRequest</code>.
   * Request schema.
   * @alias module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesRequest
   * @class
   * @param shipmentRequestDetails {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShipmentRequestDetails} Shipment information required for requesting shipping service offers.
   */
  constructor(shipmentRequestDetails) {
    this.shipmentRequestDetails = shipmentRequestDetails;
  }

  /**
   * Constructs a <code>GetEligibleShipmentServicesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesRequest} obj Optional instance to populate.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/GetEligibleShipmentServicesRequest} The populated <code>GetEligibleShipmentServicesRequest</code> instance.
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
      obj = obj || new GetEligibleShipmentServicesRequest();
      if (data.hasOwnProperty('ShipmentRequestDetails'))
        obj.shipmentRequestDetails = ShipmentRequestDetails.constructFromObject(data['ShipmentRequestDetails']);
      if (data.hasOwnProperty('ShippingOfferingFilter'))
        obj.shippingOfferingFilter = ShippingOfferingFilter.constructFromObject(data['ShippingOfferingFilter']);
    }
    return obj;
  }
}

/**
 * Shipment information required for requesting shipping service offers.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShipmentRequestDetails} shipmentRequestDetails
 */
GetEligibleShipmentServicesRequest.prototype.shipmentRequestDetails = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingOfferingFilter} shippingOfferingFilter
 */
GetEligibleShipmentServicesRequest.prototype.shippingOfferingFilter = undefined;

