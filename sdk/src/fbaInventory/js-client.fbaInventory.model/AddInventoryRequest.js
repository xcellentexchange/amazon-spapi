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
import {InventoryItems} from './InventoryItems.js';

/**
 * The AddInventoryRequest model module.
 * @module fbaInventory/js-client.fbaInventory.model/AddInventoryRequest
 * @version v1
 */
export class AddInventoryRequest {
  /**
   * Constructs a new <code>AddInventoryRequest</code>.
   * The object with the list of Inventory to be added
   * @alias module:fbaInventory/js-client.fbaInventory.model/AddInventoryRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AddInventoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fbaInventory/js-client.fbaInventory.model/AddInventoryRequest} obj Optional instance to populate.
   * @return {module:fbaInventory/js-client.fbaInventory.model/AddInventoryRequest} The populated <code>AddInventoryRequest</code> instance.
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
      obj = obj || new AddInventoryRequest();
      if (data.hasOwnProperty('inventoryItems'))
        obj.inventoryItems = InventoryItems.constructFromObject(data['inventoryItems']);
    }
    return obj;
  }
}

/**
 * @member {module:fbaInventory/js-client.fbaInventory.model/InventoryItems} inventoryItems
 */
AddInventoryRequest.prototype.inventoryItems = undefined;

