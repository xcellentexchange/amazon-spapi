/*
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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
import {AppointmentSlot} from './AppointmentSlot.js';

/**
 * The AppointmentSlotReport model module.
 * @module services/js-client.services.model/AppointmentSlotReport
 * @version v1
 */
export class AppointmentSlotReport {
  /**
   * Constructs a new <code>AppointmentSlotReport</code>.
   * Availability information as per the service context queried.
   * @alias module:services/js-client.services.model/AppointmentSlotReport
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AppointmentSlotReport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services/js-client.services.model/AppointmentSlotReport} obj Optional instance to populate.
   * @return {module:services/js-client.services.model/AppointmentSlotReport} The populated <code>AppointmentSlotReport</code> instance.
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
      obj = obj || new AppointmentSlotReport();
      if (data.hasOwnProperty('schedulingType'))
        obj.schedulingType = ApiClient.convertToType(data['schedulingType'], 'String');
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'Date');
      if (data.hasOwnProperty('endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'Date');
      if (data.hasOwnProperty('appointmentSlots'))
        obj.appointmentSlots = ApiClient.convertToType(data['appointmentSlots'], [AppointmentSlot]);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>schedulingType</code> property.
 * @enum {String}
 * @readonly
 */
AppointmentSlotReport.SchedulingTypeEnum = {
  /**
   * value: "REAL_TIME_SCHEDULING"
   * @const
   */
  REAL_TIME_SCHEDULING: "REAL_TIME_SCHEDULING",

  /**
   * value: "NON_REAL_TIME_SCHEDULING"
   * @const
   */
  NON_REAL_TIME_SCHEDULING: "NON_REAL_TIME_SCHEDULING"
};

/**
 * Defines the type of slots.
 * @member {module:services/js-client.services.model/AppointmentSlotReport.SchedulingTypeEnum} schedulingType
 */
AppointmentSlotReport.prototype.schedulingType = undefined;

/**
 * Start Time from which the appointment slots are generated in ISO 8601 format.
 * @member {Date} startTime
 */
AppointmentSlotReport.prototype.startTime = undefined;

/**
 * End Time up to which the appointment slots are generated in ISO 8601 format.
 * @member {Date} endTime
 */
AppointmentSlotReport.prototype.endTime = undefined;

/**
 * A list of time windows along with associated capacity in which the service can be performed.
 * @member {Array.<module:services/js-client.services.model/AppointmentSlot>} appointmentSlots
 */
AppointmentSlotReport.prototype.appointmentSlots = undefined;


