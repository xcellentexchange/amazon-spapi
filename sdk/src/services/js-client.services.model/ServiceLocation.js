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
import {Address} from './Address.js';

/**
 * The ServiceLocation model module.
 * @module services/js-client.services.model/ServiceLocation
 * @version v1
 */
export class ServiceLocation {
  /**
   * Constructs a new <code>ServiceLocation</code>.
   * Information about the location of the service job.
   * @alias module:services/js-client.services.model/ServiceLocation
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ServiceLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:services/js-client.services.model/ServiceLocation} obj Optional instance to populate.
   * @return {module:services/js-client.services.model/ServiceLocation} The populated <code>ServiceLocation</code> instance.
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
      obj = obj || new ServiceLocation();
      if (data.hasOwnProperty('serviceLocationType'))
        obj.serviceLocationType = ApiClient.convertToType(data['serviceLocationType'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>serviceLocationType</code> property.
 * @enum {String}
 * @readonly
 */
ServiceLocation.ServiceLocationTypeEnum = {
  /**
   * value: "IN_HOME"
   * @const
   */
  IN_HOME: "IN_HOME",

  /**
   * value: "IN_STORE"
   * @const
   */
  IN_STORE: "IN_STORE",

  /**
   * value: "ONLINE"
   * @const
   */
  ONLINE: "ONLINE"
};

/**
 * The location of the service job.
 * @member {module:services/js-client.services.model/ServiceLocation.ServiceLocationTypeEnum} serviceLocationType
 */
ServiceLocation.prototype.serviceLocationType = undefined;

/**
 * The shipping address for the service job.
 * @member {module:services/js-client.services.model/Address} address
 */
ServiceLocation.prototype.address = undefined;


