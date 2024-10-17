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
import {ShipmentType} from './ShipmentType.js';

/**
 * The TransportHeader model module.
 * @module fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TransportHeader
 * @version v0
 */
export class TransportHeader {
  /**
   * Constructs a new <code>TransportHeader</code>.
   * The shipping identifier, information about whether the shipment is by an Amazon-partnered carrier, and information about whether the shipment is Small Parcel or Less Than Truckload/Full Truckload (LTL/FTL).
   * @alias module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TransportHeader
   * @class
   * @param sellerId {String} The Amazon seller identifier.
   * @param shipmentId {String} A shipment identifier originally returned by the createInboundShipmentPlan operation.
   * @param isPartnered {Boolean} Indicates whether a putTransportDetails request is for a partnered carrier.  Possible values:  * true – Request is for an Amazon-partnered carrier.  * false – Request is for a non-Amazon-partnered carrier.
   * @param shipmentType {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/ShipmentType} 
   */
  constructor(sellerId, shipmentId, isPartnered, shipmentType) {
    this.sellerId = sellerId;
    this.shipmentId = shipmentId;
    this.isPartnered = isPartnered;
    this.shipmentType = shipmentType;
  }

  /**
   * Constructs a <code>TransportHeader</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TransportHeader} obj Optional instance to populate.
   * @return {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/TransportHeader} The populated <code>TransportHeader</code> instance.
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
      obj = obj || new TransportHeader();
      if (data.hasOwnProperty('SellerId'))
        obj.sellerId = ApiClient.convertToType(data['SellerId'], 'String');
      if (data.hasOwnProperty('ShipmentId'))
        obj.shipmentId = ApiClient.convertToType(data['ShipmentId'], 'String');
      if (data.hasOwnProperty('IsPartnered'))
        obj.isPartnered = ApiClient.convertToType(data['IsPartnered'], 'Boolean');
      if (data.hasOwnProperty('ShipmentType'))
        obj.shipmentType = ShipmentType.constructFromObject(data['ShipmentType']);
    }
    return obj;
  }
}

/**
 * The Amazon seller identifier.
 * @member {String} sellerId
 */
TransportHeader.prototype.sellerId = undefined;

/**
 * A shipment identifier originally returned by the createInboundShipmentPlan operation.
 * @member {String} shipmentId
 */
TransportHeader.prototype.shipmentId = undefined;

/**
 * Indicates whether a putTransportDetails request is for a partnered carrier.  Possible values:  * true – Request is for an Amazon-partnered carrier.  * false – Request is for a non-Amazon-partnered carrier.
 * @member {Boolean} isPartnered
 */
TransportHeader.prototype.isPartnered = undefined;

/**
 * @member {module:fulfillmentInboundV0/js-client.fulfillmentInboundV0.model/ShipmentType} shipmentType
 */
TransportHeader.prototype.shipmentType = undefined;

