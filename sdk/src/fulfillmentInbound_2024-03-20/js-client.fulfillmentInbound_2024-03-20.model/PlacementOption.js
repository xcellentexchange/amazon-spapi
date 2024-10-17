/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
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
import {Incentive} from './Incentive.js';

/**
 * The PlacementOption model module.
 * @module fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/PlacementOption
 * @version 2024-03-20
 */
export class PlacementOption {
  /**
   * Constructs a new <code>PlacementOption</code>.
   * Contains information pertaining to the placement of the contents of an inbound plan and the related costs.
   * @alias module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/PlacementOption
   * @class
   * @param discounts {Array.<module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/Incentive>} Discount for the offered option.
   * @param fees {Array.<module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/Incentive>} The fee for the offered option.
   * @param placementOptionId {String} The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs.
   * @param shipmentIds {Array.<String>} Shipment ids.
   * @param status {String} The status of a placement option. Possible values: `OFFERED`, `ACCEPTED`, `EXPIRED`.
   */
  constructor(discounts, fees, placementOptionId, shipmentIds, status) {
    this.discounts = discounts;
    this.fees = fees;
    this.placementOptionId = placementOptionId;
    this.shipmentIds = shipmentIds;
    this.status = status;
  }

  /**
   * Constructs a <code>PlacementOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/PlacementOption} obj Optional instance to populate.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/PlacementOption} The populated <code>PlacementOption</code> instance.
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
      obj = obj || new PlacementOption();
      if (data.hasOwnProperty('discounts'))
        obj.discounts = ApiClient.convertToType(data['discounts'], [Incentive]);
      if (data.hasOwnProperty('expiration'))
        obj.expiration = ApiClient.convertToType(data['expiration'], 'Date');
      if (data.hasOwnProperty('fees'))
        obj.fees = ApiClient.convertToType(data['fees'], [Incentive]);
      if (data.hasOwnProperty('placementOptionId'))
        obj.placementOptionId = ApiClient.convertToType(data['placementOptionId'], 'String');
      if (data.hasOwnProperty('shipmentIds'))
        obj.shipmentIds = ApiClient.convertToType(data['shipmentIds'], ['String']);
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * Discount for the offered option.
 * @member {Array.<module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/Incentive>} discounts
 */
PlacementOption.prototype.discounts = undefined;

/**
 * The expiration date of the placement option. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.
 * @member {Date} expiration
 */
PlacementOption.prototype.expiration = undefined;

/**
 * The fee for the offered option.
 * @member {Array.<module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/Incentive>} fees
 */
PlacementOption.prototype.fees = undefined;

/**
 * The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs.
 * @member {String} placementOptionId
 */
PlacementOption.prototype.placementOptionId = undefined;

/**
 * Shipment ids.
 * @member {Array.<String>} shipmentIds
 */
PlacementOption.prototype.shipmentIds = undefined;

/**
 * The status of a placement option. Possible values: `OFFERED`, `ACCEPTED`, `EXPIRED`.
 * @member {String} status
 */
PlacementOption.prototype.status = undefined;

