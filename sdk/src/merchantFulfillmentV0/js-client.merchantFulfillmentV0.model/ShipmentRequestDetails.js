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
import {Address} from './Address.js';
import {AmazonOrderId} from './AmazonOrderId.js';
import {ItemList} from './ItemList.js';
import {LabelCustomization} from './LabelCustomization.js';
import {PackageDimensions} from './PackageDimensions.js';
import {SellerOrderId} from './SellerOrderId.js';
import {ShippingServiceOptions} from './ShippingServiceOptions.js';
import {Timestamp} from './Timestamp.js';
import {Weight} from './Weight.js';

/**
 * The ShipmentRequestDetails model module.
 * @module merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShipmentRequestDetails
 * @version v0
 */
export class ShipmentRequestDetails {
  /**
   * Constructs a new <code>ShipmentRequestDetails</code>.
   * Shipment information required for requesting shipping service offers or for creating a shipment.
   * @alias module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShipmentRequestDetails
   * @class
   * @param amazonOrderId {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AmazonOrderId} An Amazon-defined order identifier in 3-7-7 format.
   * @param itemList {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ItemList} 
   * @param shipFromAddress {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Address} The address of the sender.
   * @param packageDimensions {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/PackageDimensions} The package dimensions.
   * @param weight {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Weight} The package weight.
   * @param shippingServiceOptions {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingServiceOptions} Extra services offered by the carrier.
   */
  constructor(amazonOrderId, itemList, shipFromAddress, packageDimensions, weight, shippingServiceOptions) {
    this.amazonOrderId = amazonOrderId;
    this.itemList = itemList;
    this.shipFromAddress = shipFromAddress;
    this.packageDimensions = packageDimensions;
    this.weight = weight;
    this.shippingServiceOptions = shippingServiceOptions;
  }

  /**
   * Constructs a <code>ShipmentRequestDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShipmentRequestDetails} obj Optional instance to populate.
   * @return {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShipmentRequestDetails} The populated <code>ShipmentRequestDetails</code> instance.
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
      obj = obj || new ShipmentRequestDetails();
      if (data.hasOwnProperty('AmazonOrderId'))
        obj.amazonOrderId = AmazonOrderId.constructFromObject(data['AmazonOrderId']);
      if (data.hasOwnProperty('SellerOrderId'))
        obj.sellerOrderId = SellerOrderId.constructFromObject(data['SellerOrderId']);
      if (data.hasOwnProperty('ItemList'))
        obj.itemList = ItemList.constructFromObject(data['ItemList']);
      if (data.hasOwnProperty('ShipFromAddress'))
        obj.shipFromAddress = Address.constructFromObject(data['ShipFromAddress']);
      if (data.hasOwnProperty('PackageDimensions'))
        obj.packageDimensions = PackageDimensions.constructFromObject(data['PackageDimensions']);
      if (data.hasOwnProperty('Weight'))
        obj.weight = Weight.constructFromObject(data['Weight']);
      if (data.hasOwnProperty('MustArriveByDate'))
        obj.mustArriveByDate = Timestamp.constructFromObject(data['MustArriveByDate']);
      if (data.hasOwnProperty('ShipDate'))
        obj.shipDate = Timestamp.constructFromObject(data['ShipDate']);
      if (data.hasOwnProperty('ShippingServiceOptions'))
        obj.shippingServiceOptions = ShippingServiceOptions.constructFromObject(data['ShippingServiceOptions']);
      if (data.hasOwnProperty('LabelCustomization'))
        obj.labelCustomization = LabelCustomization.constructFromObject(data['LabelCustomization']);
    }
    return obj;
  }
}

/**
 * An Amazon-defined order identifier in 3-7-7 format.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/AmazonOrderId} amazonOrderId
 */
ShipmentRequestDetails.prototype.amazonOrderId = undefined;

/**
 * A seller-defined order identifier.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/SellerOrderId} sellerOrderId
 */
ShipmentRequestDetails.prototype.sellerOrderId = undefined;

/**
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ItemList} itemList
 */
ShipmentRequestDetails.prototype.itemList = undefined;

/**
 * The address of the sender.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Address} shipFromAddress
 */
ShipmentRequestDetails.prototype.shipFromAddress = undefined;

/**
 * The package dimensions.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/PackageDimensions} packageDimensions
 */
ShipmentRequestDetails.prototype.packageDimensions = undefined;

/**
 * The package weight.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Weight} weight
 */
ShipmentRequestDetails.prototype.weight = undefined;

/**
 * The date by which the package must arrive to keep the promise to the customer, in ISO 8601 datetime format. If MustArriveByDate is specified, only shipping service offers that can be delivered by that date are returned.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Timestamp} mustArriveByDate
 */
ShipmentRequestDetails.prototype.mustArriveByDate = undefined;

/**
 * When used in a request, this is the date and time that the seller wants to ship the package. When used in a response, this is the date and time that the package can be shipped by the indicated method.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/Timestamp} shipDate
 */
ShipmentRequestDetails.prototype.shipDate = undefined;

/**
 * Extra services offered by the carrier.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/ShippingServiceOptions} shippingServiceOptions
 */
ShipmentRequestDetails.prototype.shippingServiceOptions = undefined;

/**
 * Label customization options.
 * @member {module:merchantFulfillmentV0/js-client.merchantFulfillmentV0.model/LabelCustomization} labelCustomization
 */
ShipmentRequestDetails.prototype.labelCustomization = undefined;


