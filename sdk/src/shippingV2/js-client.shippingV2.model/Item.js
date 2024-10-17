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
import {Currency} from './Currency.js';
import {DangerousGoodsDetails} from './DangerousGoodsDetails.js';
import {DirectFulfillmentItemIdentifiers} from './DirectFulfillmentItemIdentifiers.js';
import {InvoiceDetails} from './InvoiceDetails.js';
import {LiquidVolume} from './LiquidVolume.js';
import {Weight} from './Weight.js';

/**
 * The Item model module.
 * @module shippingV2/js-client.shippingV2.model/Item
 * @version v2
 */
export class Item {
  /**
   * Constructs a new <code>Item</code>.
   * An item in a package.
   * @alias module:shippingV2/js-client.shippingV2.model/Item
   * @class
   * @param quantity {Number} The number of units. This value is required.
   */
  constructor(quantity) {
    this.quantity = quantity;
  }

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shippingV2/js-client.shippingV2.model/Item} obj Optional instance to populate.
   * @return {module:shippingV2/js-client.shippingV2.model/Item} The populated <code>Item</code> instance.
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
      obj = obj || new Item();
      if (data.hasOwnProperty('itemValue'))
        obj.itemValue = Currency.constructFromObject(data['itemValue']);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('itemIdentifier'))
        obj.itemIdentifier = ApiClient.convertToType(data['itemIdentifier'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('weight'))
        obj.weight = Weight.constructFromObject(data['weight']);
      if (data.hasOwnProperty('liquidVolume'))
        obj.liquidVolume = LiquidVolume.constructFromObject(data['liquidVolume']);
      if (data.hasOwnProperty('isHazmat'))
        obj.isHazmat = ApiClient.convertToType(data['isHazmat'], 'Boolean');
      if (data.hasOwnProperty('dangerousGoodsDetails'))
        obj.dangerousGoodsDetails = DangerousGoodsDetails.constructFromObject(data['dangerousGoodsDetails']);
      if (data.hasOwnProperty('productType'))
        obj.productType = ApiClient.convertToType(data['productType'], 'String');
      if (data.hasOwnProperty('invoiceDetails'))
        obj.invoiceDetails = InvoiceDetails.constructFromObject(data['invoiceDetails']);
      if (data.hasOwnProperty('serialNumbers'))
        obj.serialNumbers = ApiClient.convertToType(data['serialNumbers'], ['String']);
      if (data.hasOwnProperty('directFulfillmentItemIdentifiers'))
        obj.directFulfillmentItemIdentifiers = DirectFulfillmentItemIdentifiers.constructFromObject(data['directFulfillmentItemIdentifiers']);
    }
    return obj;
  }
}

/**
 * @member {module:shippingV2/js-client.shippingV2.model/Currency} itemValue
 */
Item.prototype.itemValue = undefined;

/**
 * The product description of the item.
 * @member {String} description
 */
Item.prototype.description = undefined;

/**
 * A unique identifier for an item provided by the client.
 * @member {String} itemIdentifier
 */
Item.prototype.itemIdentifier = undefined;

/**
 * The number of units. This value is required.
 * @member {Number} quantity
 */
Item.prototype.quantity = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/Weight} weight
 */
Item.prototype.weight = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/LiquidVolume} liquidVolume
 */
Item.prototype.liquidVolume = undefined;

/**
 * When true, the item qualifies as hazardous materials (hazmat). Defaults to false.
 * @member {Boolean} isHazmat
 */
Item.prototype.isHazmat = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/DangerousGoodsDetails} dangerousGoodsDetails
 */
Item.prototype.dangerousGoodsDetails = undefined;

/**
 * The product type of the item.
 * @member {String} productType
 */
Item.prototype.productType = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/InvoiceDetails} invoiceDetails
 */
Item.prototype.invoiceDetails = undefined;

/**
 * A list of unique serial numbers in an Amazon package that can be used to guarantee non-fraudulent items. The number of serial numbers in the list must be less than or equal to the quantity of items being shipped. Only applicable when channel source is Amazon.
 * @member {Array.<String>} serialNumbers
 */
Item.prototype.serialNumbers = undefined;

/**
 * @member {module:shippingV2/js-client.shippingV2.model/DirectFulfillmentItemIdentifiers} directFulfillmentItemIdentifiers
 */
Item.prototype.directFulfillmentItemIdentifiers = undefined;

