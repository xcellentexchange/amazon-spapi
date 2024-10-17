/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import {PackageStatus} from './PackageStatus.js';
import {TrackingId} from './TrackingId.js';

/**
 * The NonPartneredSmallParcelPackageOutput model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/NonPartneredSmallParcelPackageOutput
 * @version v0
 */
export class NonPartneredSmallParcelPackageOutput {
  /**
   * Constructs a new <code>NonPartneredSmallParcelPackageOutput</code>.
   * Carrier, tracking number, and status information for the package.
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/NonPartneredSmallParcelPackageOutput
   * @class
   * @param carrierName {String} The carrier that you are using for the inbound shipment.
   * @param trackingId {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TrackingId} 
   * @param packageStatus {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PackageStatus} 
   */
  constructor(carrierName, trackingId, packageStatus) {
    this.carrierName = carrierName;
    this.trackingId = trackingId;
    this.packageStatus = packageStatus;
  }

  /**
   * Constructs a <code>NonPartneredSmallParcelPackageOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/NonPartneredSmallParcelPackageOutput} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/NonPartneredSmallParcelPackageOutput} The populated <code>NonPartneredSmallParcelPackageOutput</code> instance.
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
      obj = obj || new NonPartneredSmallParcelPackageOutput();
      if (data.hasOwnProperty('CarrierName'))
        obj.carrierName = ApiClient.convertToType(data['CarrierName'], 'String');
      if (data.hasOwnProperty('TrackingId'))
        obj.trackingId = TrackingId.constructFromObject(data['TrackingId']);
      if (data.hasOwnProperty('PackageStatus'))
        obj.packageStatus = PackageStatus.constructFromObject(data['PackageStatus']);
    }
    return obj;
  }
}

/**
 * The carrier that you are using for the inbound shipment.
 * @member {String} carrierName
 */
NonPartneredSmallParcelPackageOutput.prototype.carrierName = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TrackingId} trackingId
 */
NonPartneredSmallParcelPackageOutput.prototype.trackingId = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PackageStatus} packageStatus
 */
NonPartneredSmallParcelPackageOutput.prototype.packageStatus = undefined;

