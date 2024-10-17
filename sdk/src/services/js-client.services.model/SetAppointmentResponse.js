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
import {AppointmentId} from './AppointmentId.js';
import {ErrorList} from './ErrorList.js';
import {WarningList} from './WarningList.js';

/**
 * The SetAppointmentResponse model module.
 * @module services/js-client.services.model/SetAppointmentResponse
 * @version v1
 */
export class SetAppointmentResponse {
  /**
   * Constructs a new <code>SetAppointmentResponse</code>.
   * Response schema for the `addAppointmentForServiceJobByServiceJobId` and `rescheduleAppointmentForServiceJobByServiceJobId` operations.
   * @alias module:services/js-client.services.model/SetAppointmentResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SetAppointmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services/js-client.services.model/SetAppointmentResponse} obj Optional instance to populate.
   * @return {module:services/js-client.services.model/SetAppointmentResponse} The populated <code>SetAppointmentResponse</code> instance.
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
      obj = obj || new SetAppointmentResponse();
      if (data.hasOwnProperty('appointmentId'))
        obj.appointmentId = AppointmentId.constructFromObject(data['appointmentId']);
      if (data.hasOwnProperty('warnings'))
        obj.warnings = WarningList.constructFromObject(data['warnings']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * New appointment identifier generated during the `addAppointmentForServiceJobByServiceJobId` or `rescheduleAppointmentForServiceJobByServiceJobId` operations.
 * @member {module:services/js-client.services.model/AppointmentId} appointmentId
 */
SetAppointmentResponse.prototype.appointmentId = undefined;

/**
 * Warnings generated during the `addAppointmentForServiceJobByServiceJobId` or `rescheduleAppointmentForServiceJobByServiceJobId` operations.
 * @member {module:services/js-client.services.model/WarningList} warnings
 */
SetAppointmentResponse.prototype.warnings = undefined;

/**
 * Errors occurred during during the `addAppointmentForServiceJobByServiceJobId` or `rescheduleAppointmentForServiceJobByServiceJobId` operations.
 * @member {module:services/js-client.services.model/ErrorList} errors
 */
SetAppointmentResponse.prototype.errors = undefined;

