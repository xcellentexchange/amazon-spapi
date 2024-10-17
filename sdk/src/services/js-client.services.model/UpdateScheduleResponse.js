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
import {ErrorList} from './ErrorList.js';
import {UpdateScheduleRecord} from './UpdateScheduleRecord.js';

/**
 * The UpdateScheduleResponse model module.
 * @module services/js-client.services.model/UpdateScheduleResponse
 * @version v1
 */
export class UpdateScheduleResponse {
  /**
   * Constructs a new <code>UpdateScheduleResponse</code>.
   * Response schema for the `updateSchedule` operation.
   * @alias module:services/js-client.services.model/UpdateScheduleResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdateScheduleResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services/js-client.services.model/UpdateScheduleResponse} obj Optional instance to populate.
   * @return {module:services/js-client.services.model/UpdateScheduleResponse} The populated <code>UpdateScheduleResponse</code> instance.
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
      obj = obj || new UpdateScheduleResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = ApiClient.convertToType(data['payload'], [UpdateScheduleRecord]);
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * Contains the `UpdateScheduleRecords` for which the error/warning has occurred.
 * @member {Array.<module:services/js-client.services.model/UpdateScheduleRecord>} payload
 */
UpdateScheduleResponse.prototype.payload = undefined;

/**
 * Errors encountered, if any.
 * @member {module:services/js-client.services.model/ErrorList} errors
 */
UpdateScheduleResponse.prototype.errors = undefined;

