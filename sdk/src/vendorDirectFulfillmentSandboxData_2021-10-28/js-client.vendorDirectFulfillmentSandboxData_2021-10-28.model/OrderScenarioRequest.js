/*
 * Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data
 * The Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data provides programmatic access to vendor direct fulfillment sandbox test data.
 *
 * OpenAPI spec version: 2021-10-28
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
import {PartyIdentification} from './PartyIdentification.js';

/**
 * The OrderScenarioRequest model module.
 * @module vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/OrderScenarioRequest
 * @version 2021-10-28
 */
export class OrderScenarioRequest {
  /**
   * Constructs a new <code>OrderScenarioRequest</code>.
   * The party identifiers required to generate the test data.
   * @alias module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/OrderScenarioRequest
   * @class
   * @param sellingParty {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/PartyIdentification} The identifier for the selling party or vendor.
   * @param shipFromParty {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/PartyIdentification} The warehouse code for the vendor.
   */
  constructor(sellingParty, shipFromParty) {
    this.sellingParty = sellingParty;
    this.shipFromParty = shipFromParty;
  }

  /**
   * Constructs a <code>OrderScenarioRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/OrderScenarioRequest} obj Optional instance to populate.
   * @return {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/OrderScenarioRequest} The populated <code>OrderScenarioRequest</code> instance.
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
      obj = obj || new OrderScenarioRequest();
      if (data.hasOwnProperty('sellingParty'))
        obj.sellingParty = PartyIdentification.constructFromObject(data['sellingParty']);
      if (data.hasOwnProperty('shipFromParty'))
        obj.shipFromParty = PartyIdentification.constructFromObject(data['shipFromParty']);
    }
    return obj;
  }
}

/**
 * The identifier for the selling party or vendor.
 * @member {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/PartyIdentification} sellingParty
 */
OrderScenarioRequest.prototype.sellingParty = undefined;

/**
 * The warehouse code for the vendor.
 * @member {module:vendorDirectFulfillmentSandboxData_2021-10-28/js-client.vendorDirectFulfillmentSandboxData_2021-10-28.model/PartyIdentification} shipFromParty
 */
OrderScenarioRequest.prototype.shipFromParty = undefined;

