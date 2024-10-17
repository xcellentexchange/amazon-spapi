/*
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * OpenAPI spec version: 2020-07-01
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
import {OperatingHours} from './OperatingHours.js';

/**
 * The OperatingHoursByDay model module.
 * @module supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperatingHoursByDay
 * @version 2020-07-01
 */
export class OperatingHoursByDay {
  /**
   * Constructs a new <code>OperatingHoursByDay</code>.
   * The operating hours per day
   * @alias module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperatingHoursByDay
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OperatingHoursByDay</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperatingHoursByDay} obj Optional instance to populate.
   * @return {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperatingHoursByDay} The populated <code>OperatingHoursByDay</code> instance.
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
      obj = obj || new OperatingHoursByDay();
      if (data.hasOwnProperty('monday'))
        obj.monday = OperatingHours.constructFromObject(data['monday']);
      if (data.hasOwnProperty('tuesday'))
        obj.tuesday = OperatingHours.constructFromObject(data['tuesday']);
      if (data.hasOwnProperty('wednesday'))
        obj.wednesday = OperatingHours.constructFromObject(data['wednesday']);
      if (data.hasOwnProperty('thursday'))
        obj.thursday = OperatingHours.constructFromObject(data['thursday']);
      if (data.hasOwnProperty('friday'))
        obj.friday = OperatingHours.constructFromObject(data['friday']);
      if (data.hasOwnProperty('saturday'))
        obj.saturday = OperatingHours.constructFromObject(data['saturday']);
      if (data.hasOwnProperty('sunday'))
        obj.sunday = OperatingHours.constructFromObject(data['sunday']);
    }
    return obj;
  }
}

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperatingHours} monday
 */
OperatingHoursByDay.prototype.monday = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperatingHours} tuesday
 */
OperatingHoursByDay.prototype.tuesday = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperatingHours} wednesday
 */
OperatingHoursByDay.prototype.wednesday = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperatingHours} thursday
 */
OperatingHoursByDay.prototype.thursday = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperatingHours} friday
 */
OperatingHoursByDay.prototype.friday = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperatingHours} saturday
 */
OperatingHoursByDay.prototype.saturday = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/OperatingHours} sunday
 */
OperatingHoursByDay.prototype.sunday = undefined;


