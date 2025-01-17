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
import {NonPartneredSmallParcelPackageOutputList} from './NonPartneredSmallParcelPackageOutputList.js';

/**
 * The NonPartneredSmallParcelDataOutput model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/NonPartneredSmallParcelDataOutput
 * @version v0
 */
export class NonPartneredSmallParcelDataOutput {
  /**
   * Constructs a new <code>NonPartneredSmallParcelDataOutput</code>.
   * Information returned by Amazon about a Small Parcel shipment by a carrier that has not partnered with Amazon.
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/NonPartneredSmallParcelDataOutput
   * @class
   * @param packageList {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/NonPartneredSmallParcelPackageOutputList} 
   */
  constructor(packageList) {
    this.packageList = packageList;
  }

  /**
   * Constructs a <code>NonPartneredSmallParcelDataOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/NonPartneredSmallParcelDataOutput} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/NonPartneredSmallParcelDataOutput} The populated <code>NonPartneredSmallParcelDataOutput</code> instance.
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
      obj = obj || new NonPartneredSmallParcelDataOutput();
      if (data.hasOwnProperty('PackageList'))
        obj.packageList = NonPartneredSmallParcelPackageOutputList.constructFromObject(data['PackageList']);
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/NonPartneredSmallParcelPackageOutputList} packageList
 */
NonPartneredSmallParcelDataOutput.prototype.packageList = undefined;


