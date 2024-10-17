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
import {AccessPointDetails} from './AccessPointDetails.js';
import {Address} from './Address.js';
import {ChannelDetails} from './ChannelDetails.js';
import {ClientReferenceDetails} from './ClientReferenceDetails.js';
import {PackageList} from './PackageList.js';
import {ShipmentType} from './ShipmentType.js';
import {ShipperInstruction} from './ShipperInstruction.js';
import {TaxDetailList} from './TaxDetailList.js';
import {ValueAddedServiceDetails} from './ValueAddedServiceDetails.js';

/**
 * The GetRatesRequest model module.
 * @module shippingV2/js-client.shippingV2.model/GetRatesRequest
 * @version v2
 */
export class GetRatesRequest {
  /**
   * Constructs a new <code>GetRatesRequest</code>.
   * The request schema for the getRates operation. When the channelType is Amazon, the shipTo address is not required and will be ignored.
   * @alias module:shippingV2/js-client.shippingV2.model/GetRatesRequest
   * @class
   * @param shipFrom {module:shippingV2/js-client.shippingV2.model/Address} The ship from address.
   * @param packages {module:shippingV2/js-client.shippingV2.model/PackageList} 
   * @param channelDetails {module:shippingV2/js-client.shippingV2.model/ChannelDetails} 
   */
  constructor(shipFrom, packages, channelDetails) {
    this.shipFrom = shipFrom;
    this.packages = packages;
    this.channelDetails = channelDetails;
  }

  /**
   * Constructs a <code>GetRatesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shippingV2/js-client.shippingV2.model/GetRatesRequest} obj Optional instance to populate.
   * @return {module:shippingV2/js-client.shippingV2.model/GetRatesRequest} The populated <code>GetRatesRequest</code> instance.
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
      obj = obj || new GetRatesRequest();
      if (data.hasOwnProperty('shipTo'))
        obj.shipTo = Address.constructFromObject(data['shipTo']);
      if (data.hasOwnProperty('shipFrom'))
        obj.shipFrom = Address.constructFromObject(data['shipFrom']);
      if (data.hasOwnProperty('returnTo'))
        obj.returnTo = Address.constructFromObject(data['returnTo']);
      if (data.hasOwnProperty('shipDate'))
        obj.shipDate = ApiClient.convertToType(data['shipDate'], 'Date');
      if (data.hasOwnProperty('shipperInstruction'))
        obj.shipperInstruction = ShipperInstruction.constructFromObject(data['shipperInstruction']);
      if (data.hasOwnProperty('packages'))
        obj.packages = PackageList.constructFromObject(data['packages']);
      if (data.hasOwnProperty('valueAddedServices'))
        obj.valueAddedServices = ValueAddedServiceDetails.constructFromObject(data['valueAddedServices']);
      if (data.hasOwnProperty('taxDetails'))
        obj.taxDetails = TaxDetailList.constructFromObject(data['taxDetails']);
      if (data.hasOwnProperty('channelDetails'))
        obj.channelDetails = ChannelDetails.constructFromObject(data['channelDetails']);
      if (data.hasOwnProperty('clientReferenceDetails'))
        obj.clientReferenceDetails = ClientReferenceDetails.constructFromObject(data['clientReferenceDetails']);
      if (data.hasOwnProperty('shipmentType'))
        obj.shipmentType = ShipmentType.constructFromObject(data['shipmentType']);
      if (data.hasOwnProperty('destinationAccessPointDetails'))
        obj.destinationAccessPointDetails = AccessPointDetails.constructFromObject(data['destinationAccessPointDetails']);
    }
    return obj;
  }
}

/**
 * The ship to address.
 * @member {module:shippingV2/js-client.shippingV2.model/Address} shipTo
 */
GetRatesRequest.prototype.shipTo = undefined;

/**
 * The ship from address.
 * @member {module:shippingV2/js-client.shippingV2.model/Address} shipFrom
 */
GetRatesRequest.prototype.shipFrom = undefined;

/**
 * The return to address.
 * @member {module:shippingV2/js-client.shippingV2.model/Address} returnTo
 */
GetRatesRequest.prototype.returnTo = undefined;

/**
 * The ship date and time (the requested pickup). This defaults to the current date and time.
 * @member {Date} shipDate
 */
GetRatesRequest.prototype.shipDate = undefined;

/**
 * This field describe shipper instruction.
 * @member {module:shippingV2/js-client.shippingV2.model/ShipperInstruction} shipperInstruction
 */
GetRatesRequest.prototype.shipperInstruction = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/PackageList} packages
 */
GetRatesRequest.prototype.packages = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/ValueAddedServiceDetails} valueAddedServices
 */
GetRatesRequest.prototype.valueAddedServices = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/TaxDetailList} taxDetails
 */
GetRatesRequest.prototype.taxDetails = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/ChannelDetails} channelDetails
 */
GetRatesRequest.prototype.channelDetails = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/ClientReferenceDetails} clientReferenceDetails
 */
GetRatesRequest.prototype.clientReferenceDetails = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/ShipmentType} shipmentType
 */
GetRatesRequest.prototype.shipmentType = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/AccessPointDetails} destinationAccessPointDetails
 */
GetRatesRequest.prototype.destinationAccessPointDetails = undefined;

