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
import {ReasonComment} from './ReasonComment.js';

/**
 * The ScheduleSelfShipAppointmentRequest model module.
 * @module fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ScheduleSelfShipAppointmentRequest
 * @version 2024-03-20
 */
export class ScheduleSelfShipAppointmentRequest {
  /**
   * Constructs a new <code>ScheduleSelfShipAppointmentRequest</code>.
   * The `scheduleSelfShipAppointment` request.
   * @alias module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ScheduleSelfShipAppointmentRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ScheduleSelfShipAppointmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ScheduleSelfShipAppointmentRequest} obj Optional instance to populate.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ScheduleSelfShipAppointmentRequest} The populated <code>ScheduleSelfShipAppointmentRequest</code> instance.
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
      obj = obj || new ScheduleSelfShipAppointmentRequest();
      if (data.hasOwnProperty('reasonComment'))
        obj.reasonComment = ReasonComment.constructFromObject(data['reasonComment']);
    }
    return obj;
  }
}

/**
 * @member {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/ReasonComment} reasonComment
 */
ScheduleSelfShipAppointmentRequest.prototype.reasonComment = undefined;


