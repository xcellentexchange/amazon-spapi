/*
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
 *
 * OpenAPI spec version: v1
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

/**
 * The CreateInventoryItemRequest model module.
 * @module fbaInventory/js-client.fbaInventory.model/CreateInventoryItemRequest
 * @version v1
 */
export class CreateInventoryItemRequest {
  /**
   * Constructs a new <code>CreateInventoryItemRequest</code>.
   * An item to be created in the inventory.
   * @alias module:fbaInventory/js-client.fbaInventory.model/CreateInventoryItemRequest
   * @class
   * @param sellerSku {String} The seller SKU of the item.
   * @param marketplaceId {String} The marketplaceId.
   * @param productName {String} The name of the item.
   */
  constructor(sellerSku, marketplaceId, productName) {
    this.sellerSku = sellerSku;
    this.marketplaceId = marketplaceId;
    this.productName = productName;
  }

  /**
   * Constructs a <code>CreateInventoryItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fbaInventory/js-client.fbaInventory.model/CreateInventoryItemRequest} obj Optional instance to populate.
   * @return {module:fbaInventory/js-client.fbaInventory.model/CreateInventoryItemRequest} The populated <code>CreateInventoryItemRequest</code> instance.
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
      obj = obj || new CreateInventoryItemRequest();
      if (data.hasOwnProperty('sellerSku'))
        obj.sellerSku = ApiClient.convertToType(data['sellerSku'], 'String');
      if (data.hasOwnProperty('marketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['marketplaceId'], 'String');
      if (data.hasOwnProperty('productName'))
        obj.productName = ApiClient.convertToType(data['productName'], 'String');
    }
    return obj;
  }
}

/**
 * The seller SKU of the item.
 * @member {String} sellerSku
 */
CreateInventoryItemRequest.prototype.sellerSku = undefined;

/**
 * The marketplaceId.
 * @member {String} marketplaceId
 */
CreateInventoryItemRequest.prototype.marketplaceId = undefined;

/**
 * The name of the item.
 * @member {String} productName
 */
CreateInventoryItemRequest.prototype.productName = undefined;


