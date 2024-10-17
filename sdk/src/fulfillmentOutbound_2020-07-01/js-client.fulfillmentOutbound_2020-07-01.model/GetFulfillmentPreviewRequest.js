/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
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
import {FeatureSettings} from './FeatureSettings.js';
import {GetFulfillmentPreviewItemList} from './GetFulfillmentPreviewItemList.js';
import {ShippingSpeedCategoryList} from './ShippingSpeedCategoryList.js';

/**
 * The GetFulfillmentPreviewRequest model module.
 * @module fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/GetFulfillmentPreviewRequest
 * @version 2020-07-01
 */
export class GetFulfillmentPreviewRequest {
  /**
   * Constructs a new <code>GetFulfillmentPreviewRequest</code>.
   * The request body schema for the `getFulfillmentPreview` operation.
   * @alias module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/GetFulfillmentPreviewRequest
   * @class
   * @param address {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Address} The destination address for the fulfillment order preview.
   * @param items {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/GetFulfillmentPreviewItemList} Identifying information and quantity information for the items in the fulfillment order preview.
   */
  constructor(address, items) {
    this.address = address;
    this.items = items;
  }

  /**
   * Constructs a <code>GetFulfillmentPreviewRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/GetFulfillmentPreviewRequest} obj Optional instance to populate.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/GetFulfillmentPreviewRequest} The populated <code>GetFulfillmentPreviewRequest</code> instance.
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
      obj = obj || new GetFulfillmentPreviewRequest();
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
      if (data.hasOwnProperty('items'))
        obj.items = GetFulfillmentPreviewItemList.constructFromObject(data['items']);
      if (data.hasOwnProperty('shippingSpeedCategories'))
        obj.shippingSpeedCategories = ShippingSpeedCategoryList.constructFromObject(data['shippingSpeedCategories']);
      if (data.hasOwnProperty('includeCODFulfillmentPreview'))
        obj.includeCODFulfillmentPreview = ApiClient.convertToType(data['includeCODFulfillmentPreview'], 'Boolean');
      if (data.hasOwnProperty('includeDeliveryWindows'))
        obj.includeDeliveryWindows = ApiClient.convertToType(data['includeDeliveryWindows'], 'Boolean');
      if (data.hasOwnProperty('featureConstraints'))
        obj.featureConstraints = ApiClient.convertToType(data['featureConstraints'], [FeatureSettings]);
    }
    return obj;
  }
}

/**
 * The marketplace the fulfillment order is placed against.
 * @member {String} marketplaceId
 */
GetFulfillmentPreviewRequest.prototype.marketplaceId = undefined;

/**
 * The destination address for the fulfillment order preview.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/Address} address
 */
GetFulfillmentPreviewRequest.prototype.address = undefined;

/**
 * Identifying information and quantity information for the items in the fulfillment order preview.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/GetFulfillmentPreviewItemList} items
 */
GetFulfillmentPreviewRequest.prototype.items = undefined;

/**
 * A list of shipping methods used for creating fulfillment order previews.  Possible values:  * `Standard` - Standard shipping method. * `Expedited` - Expedited shipping method. * `Priority` - Priority shipping method. * `ScheduledDelivery` - Scheduled Delivery shipping method. Note: Shipping method service level agreements vary by marketplace. Sellers should refer to the Seller Central website in their marketplace for shipping method service level agreements and fulfillment fees.
 * @member {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/ShippingSpeedCategoryList} shippingSpeedCategories
 */
GetFulfillmentPreviewRequest.prototype.shippingSpeedCategories = undefined;

/**
 * When true, returns all fulfillment order previews both for COD and not for COD. Otherwise, returns only fulfillment order previews that are not for COD.
 * @member {Boolean} includeCODFulfillmentPreview
 */
GetFulfillmentPreviewRequest.prototype.includeCODFulfillmentPreview = undefined;

/**
 * When true, returns the `ScheduledDeliveryInfo` response object, which contains the available delivery windows for a Scheduled Delivery. The `ScheduledDeliveryInfo` response object can only be returned for fulfillment order previews with `ShippingSpeedCategories` = `ScheduledDelivery`.
 * @member {Boolean} includeDeliveryWindows
 */
GetFulfillmentPreviewRequest.prototype.includeDeliveryWindows = undefined;

/**
 * A list of features and their fulfillment policies to apply to the order.
 * @member {Array.<module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/FeatureSettings>} featureConstraints
 */
GetFulfillmentPreviewRequest.prototype.featureConstraints = undefined;

