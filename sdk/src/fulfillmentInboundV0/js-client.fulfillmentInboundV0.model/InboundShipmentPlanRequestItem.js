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
import {Condition} from './Condition.js';
import {PrepDetailsList} from './PrepDetailsList.js';
import {Quantity} from './Quantity.js';

/**
 * The InboundShipmentPlanRequestItem model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentPlanRequestItem
 * @version v0
 */
export class InboundShipmentPlanRequestItem {
  /**
   * Constructs a new <code>InboundShipmentPlanRequestItem</code>.
   * Item information for creating an inbound shipment plan. Submitted with a call to the createInboundShipmentPlan operation.
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentPlanRequestItem
   * @class
   * @param sellerSKU {String} The seller SKU of the item.
   * @param ASIN {String} The Amazon Standard Identification Number (ASIN) of the item.
   * @param condition {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Condition} 
   * @param quantity {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Quantity} 
   */
  constructor(sellerSKU, ASIN, condition, quantity) {
    this.sellerSKU = sellerSKU;
    this.ASIN = ASIN;
    this.condition = condition;
    this.quantity = quantity;
  }

  /**
   * Constructs a <code>InboundShipmentPlanRequestItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentPlanRequestItem} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/InboundShipmentPlanRequestItem} The populated <code>InboundShipmentPlanRequestItem</code> instance.
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
      obj = obj || new InboundShipmentPlanRequestItem();
      if (data.hasOwnProperty('SellerSKU'))
        obj.sellerSKU = ApiClient.convertToType(data['SellerSKU'], 'String');
      if (data.hasOwnProperty('ASIN'))
        obj.ASIN = ApiClient.convertToType(data['ASIN'], 'String');
      if (data.hasOwnProperty('Condition'))
        obj.condition = Condition.constructFromObject(data['Condition']);
      if (data.hasOwnProperty('Quantity'))
        obj.quantity = Quantity.constructFromObject(data['Quantity']);
      if (data.hasOwnProperty('QuantityInCase'))
        obj.quantityInCase = Quantity.constructFromObject(data['QuantityInCase']);
      if (data.hasOwnProperty('PrepDetailsList'))
        obj.prepDetailsList = PrepDetailsList.constructFromObject(data['PrepDetailsList']);
    }
    return obj;
  }
}

/**
 * The seller SKU of the item.
 * @member {String} sellerSKU
 */
InboundShipmentPlanRequestItem.prototype.sellerSKU = undefined;

/**
 * The Amazon Standard Identification Number (ASIN) of the item.
 * @member {String} ASIN
 */
InboundShipmentPlanRequestItem.prototype.ASIN = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Condition} condition
 */
InboundShipmentPlanRequestItem.prototype.condition = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Quantity} quantity
 */
InboundShipmentPlanRequestItem.prototype.quantity = undefined;

/**
 * The item quantity in each case, for case-packed items. Note that QuantityInCase multiplied by the number of cases in the inbound shipment equals Quantity. Also note that all of the boxes of an inbound shipment must either be case packed or individually packed. For that reason, when you submit the createInboundShipmentPlan operation, the value of QuantityInCase must be provided for every item in the shipment or for none of the items in the shipment.
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/Quantity} quantityInCase
 */
InboundShipmentPlanRequestItem.prototype.quantityInCase = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/PrepDetailsList} prepDetailsList
 */
InboundShipmentPlanRequestItem.prototype.prepDetailsList = undefined;


