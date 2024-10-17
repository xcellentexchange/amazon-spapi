/*
 * Selling Partner API for Direct Fulfillment Inventory Updates
 * The Selling Partner API for Direct Fulfillment Inventory Updates provides programmatic access to a direct fulfillment vendor's inventory updates.
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
import {ItemDetails} from './ItemDetails.js';
import {PartyIdentification} from './PartyIdentification.js';

/**
 * The InventoryUpdate model module.
 * @module vendorDirectFulfillmentInventoryV1/js-client.vendorDirectFulfillmentInventoryV1.model/InventoryUpdate
 * @version v1
 */
export class InventoryUpdate {
  /**
   * Constructs a new <code>InventoryUpdate</code>.
   * Inventory details required to update some or all items for the requested warehouse.
   * @alias module:vendorDirectFulfillmentInventoryV1/js-client.vendorDirectFulfillmentInventoryV1.model/InventoryUpdate
   * @class
   * @param sellingParty {module:vendorDirectFulfillmentInventoryV1/js-client.vendorDirectFulfillmentInventoryV1.model/PartyIdentification} The ID for the selling party or vendor.
   * @param isFullUpdate {Boolean} When `true`, this request contains a full feed. When `false`, this request contains a partial feed. When sending a full feed, you must send information about all items in the warehouse. Any items not in the full feed are updated as not available. When sending a partial feed, only include the items that need an inventory update. The status of other items will remain unchanged.
   * @param items {Array.<module:vendorDirectFulfillmentInventoryV1/js-client.vendorDirectFulfillmentInventoryV1.model/ItemDetails>} A list of inventory items with updated details, including quantity available.
   */
  constructor(sellingParty, isFullUpdate, items) {
    this.sellingParty = sellingParty;
    this.isFullUpdate = isFullUpdate;
    this.items = items;
  }

  /**
   * Constructs a <code>InventoryUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentInventoryV1/js-client.vendorDirectFulfillmentInventoryV1.model/InventoryUpdate} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentInventoryV1/js-client.vendorDirectFulfillmentInventoryV1.model/InventoryUpdate} The populated <code>InventoryUpdate</code> instance.
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
      obj = obj || new InventoryUpdate();
      if (data.hasOwnProperty('sellingParty'))
        obj.sellingParty = PartyIdentification.constructFromObject(data['sellingParty']);
      if (data.hasOwnProperty('isFullUpdate'))
        obj.isFullUpdate = ApiClient.convertToType(data['isFullUpdate'], 'Boolean');
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [ItemDetails]);
    }
    return obj;
  }
}

/**
 * The ID for the selling party or vendor.
 * @member {module:vendorDirectFulfillmentInventoryV1/js-client.vendorDirectFulfillmentInventoryV1.model/PartyIdentification} sellingParty
 */
InventoryUpdate.prototype.sellingParty = undefined;

/**
 * When `true`, this request contains a full feed. When `false`, this request contains a partial feed. When sending a full feed, you must send information about all items in the warehouse. Any items not in the full feed are updated as not available. When sending a partial feed, only include the items that need an inventory update. The status of other items will remain unchanged.
 * @member {Boolean} isFullUpdate
 */
InventoryUpdate.prototype.isFullUpdate = undefined;

/**
 * A list of inventory items with updated details, including quantity available.
 * @member {Array.<module:vendorDirectFulfillmentInventoryV1/js-client.vendorDirectFulfillmentInventoryV1.model/ItemDetails>} items
 */
InventoryUpdate.prototype.items = undefined;

