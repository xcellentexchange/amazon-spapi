/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
import {Route} from './Route.js';
import {Weight} from './Weight.js';

/**
 * The ImportDetails model module.
 * @module vendorShipments/js-client.vendorShipments.model/ImportDetails
 * @version v1
 */
export class ImportDetails {
  /**
   * Constructs a new <code>ImportDetails</code>.
   * Provide these fields only if this shipment is a direct import.
   * @alias module:vendorShipments/js-client.vendorShipments.model/ImportDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ImportDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:vendorShipments/js-client.vendorShipments.model/ImportDetails} obj Optional instance to populate.
   * @return {module:vendorShipments/js-client.vendorShipments.model/ImportDetails} The populated <code>ImportDetails</code> instance.
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
      obj = obj || new ImportDetails();
      if (data.hasOwnProperty('methodOfPayment'))
        obj.methodOfPayment = ApiClient.convertToType(data['methodOfPayment'], 'String');
      if (data.hasOwnProperty('sealNumber'))
        obj.sealNumber = ApiClient.convertToType(data['sealNumber'], 'String');
      if (data.hasOwnProperty('route'))
        obj.route = Route.constructFromObject(data['route']);
      if (data.hasOwnProperty('importContainers'))
        obj.importContainers = ApiClient.convertToType(data['importContainers'], 'String');
      if (data.hasOwnProperty('billableWeight'))
        obj.billableWeight = Weight.constructFromObject(data['billableWeight']);
      if (data.hasOwnProperty('estimatedShipByDate'))
        obj.estimatedShipByDate = ApiClient.convertToType(data['estimatedShipByDate'], 'Date');
      if (data.hasOwnProperty('handlingInstructions'))
        obj.handlingInstructions = ApiClient.convertToType(data['handlingInstructions'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>methodOfPayment</code> property.
 * @enum {String}
 * @readonly
 */
ImportDetails.MethodOfPaymentEnum = {
  /**
   * value: "PaidByBuyer"
   * @const
   */
  paidByBuyer: "PaidByBuyer",

  /**
   * value: "CollectOnDelivery"
   * @const
   */
  collectOnDelivery: "CollectOnDelivery",

  /**
   * value: "DefinedByBuyerAndSeller"
   * @const
   */
  definedByBuyerAndSeller: "DefinedByBuyerAndSeller",

  /**
   * value: "FOBPortOfCall"
   * @const
   */
  fOBPortOfCall: "FOBPortOfCall",

  /**
   * value: "PrepaidBySeller"
   * @const
   */
  prepaidBySeller: "PrepaidBySeller",

  /**
   * value: "PaidBySeller"
   * @const
   */
  paidBySeller: "PaidBySeller"
};

/**
 * This is used for import purchase orders only. If the recipient requests, this field will contain the shipment method of payment.
 * @member {module:vendorShipments/js-client.vendorShipments.model/ImportDetails.MethodOfPaymentEnum} methodOfPayment
 */
ImportDetails.prototype.methodOfPayment = undefined;

/**
 * The container's seal number.
 * @member {String} sealNumber
 */
ImportDetails.prototype.sealNumber = undefined;

/**
 * The route and stop details for this shipment.
 * @member {module:vendorShipments/js-client.vendorShipments.model/Route} route
 */
ImportDetails.prototype.route = undefined;

/**
 * Types and numbers of container(s) for import purchase orders. Can be a comma-separated list if shipment has multiple containers.
 * @member {String} importContainers
 */
ImportDetails.prototype.importContainers = undefined;

/**
 * Billable weight of the direct imports shipment.
 * @member {module:vendorShipments/js-client.vendorShipments.model/Weight} billableWeight
 */
ImportDetails.prototype.billableWeight = undefined;

/**
 * Date on which the shipment is expected to be shipped. This value should not be in the past and not more than 60 days out in the future.
 * @member {Date} estimatedShipByDate
 */
ImportDetails.prototype.estimatedShipByDate = undefined;

/**
 * Allowed values for the <code>handlingInstructions</code> property.
 * @enum {String}
 * @readonly
 */
ImportDetails.HandlingInstructionsEnum = {
  /**
   * value: "Oversized"
   * @const
   */
  oversized: "Oversized",

  /**
   * value: "Fragile"
   * @const
   */
  fragile: "Fragile",

  /**
   * value: "Food"
   * @const
   */
  food: "Food",

  /**
   * value: "HandleWithCare"
   * @const
   */
  handleWithCare: "HandleWithCare"
};

/**
 * Identification of the instructions on how specified item/carton/pallet should be handled.
 * @member {module:vendorShipments/js-client.vendorShipments.model/ImportDetails.HandlingInstructionsEnum} handlingInstructions
 */
ImportDetails.prototype.handlingInstructions = undefined;

