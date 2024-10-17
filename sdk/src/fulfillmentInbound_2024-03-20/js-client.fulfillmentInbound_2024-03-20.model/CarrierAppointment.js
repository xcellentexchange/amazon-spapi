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

/**
 * The CarrierAppointment model module.
 * @module fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/CarrierAppointment
 * @version 2024-03-20
 */
export class CarrierAppointment {
  /**
   * Constructs a new <code>CarrierAppointment</code>.
   * Contains details for a transportation carrier appointment. This appointment is vended out by Amazon and is an indicator for when a transportation carrier is accepting shipments to be picked up.
   * @alias module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/CarrierAppointment
   * @class
   * @param endTime {Date} The end timestamp of the appointment in UTC.
   * @param startTime {Date} The start timestamp of the appointment in UTC.
   */
  constructor(endTime, startTime) {
    this.endTime = endTime;
    this.startTime = startTime;
  }

  /**
   * Constructs a <code>CarrierAppointment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/CarrierAppointment} obj Optional instance to populate.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/CarrierAppointment} The populated <code>CarrierAppointment</code> instance.
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
      obj = obj || new CarrierAppointment();
      if (data.hasOwnProperty('endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'Date');
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'Date');
    }
    return obj;
  }
}

/**
 * The end timestamp of the appointment in UTC.
 * @member {Date} endTime
 */
CarrierAppointment.prototype.endTime = undefined;

/**
 * The start timestamp of the appointment in UTC.
 * @member {Date} startTime
 */
CarrierAppointment.prototype.startTime = undefined;


