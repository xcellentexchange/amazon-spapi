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
import {AppointmentSlotTime} from './AppointmentSlotTime.js';

/**
 * The SelfShipAppointmentDetails model module.
 * @module fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/SelfShipAppointmentDetails
 * @version 2024-03-20
 */
export class SelfShipAppointmentDetails {
  /**
   * Constructs a new <code>SelfShipAppointmentDetails</code>.
   * Appointment details for carrier pickup or fulfillment center appointments.
   * @alias module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/SelfShipAppointmentDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SelfShipAppointmentDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/SelfShipAppointmentDetails} obj Optional instance to populate.
   * @return {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/SelfShipAppointmentDetails} The populated <code>SelfShipAppointmentDetails</code> instance.
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
      obj = obj || new SelfShipAppointmentDetails();
      if (data.hasOwnProperty('appointmentId'))
        obj.appointmentId = ApiClient.convertToType(data['appointmentId'], 'Number');
      if (data.hasOwnProperty('appointmentSlotTime'))
        obj.appointmentSlotTime = AppointmentSlotTime.constructFromObject(data['appointmentSlotTime']);
      if (data.hasOwnProperty('appointmentStatus'))
        obj.appointmentStatus = ApiClient.convertToType(data['appointmentStatus'], 'String');
    }
    return obj;
  }
}

/**
 * Identifier for appointment.
 * @member {Number} appointmentId
 */
SelfShipAppointmentDetails.prototype.appointmentId = undefined;

/**
 * @member {module:fulfillmentInbound_2024-03-20/js-client.fulfillmentInbound_2024-03-20.model/AppointmentSlotTime} appointmentSlotTime
 */
SelfShipAppointmentDetails.prototype.appointmentSlotTime = undefined;

/**
 * Status of the appointment.
 * @member {String} appointmentStatus
 */
SelfShipAppointmentDetails.prototype.appointmentStatus = undefined;

