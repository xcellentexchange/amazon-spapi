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
import {ParkingConfiguration} from './ParkingConfiguration.js';

/**
 * The InStorePickupConfiguration model module.
 * @module supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/InStorePickupConfiguration
 * @version 2020-07-01
 */
export class InStorePickupConfiguration {
  /**
   * Constructs a new <code>InStorePickupConfiguration</code>.
   * The in-store pickup configuration of a supply source.
   * @alias module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/InStorePickupConfiguration
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InStorePickupConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/InStorePickupConfiguration} obj Optional instance to populate.
   * @return {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/InStorePickupConfiguration} The populated <code>InStorePickupConfiguration</code> instance.
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
      obj = obj || new InStorePickupConfiguration();
      if (data.hasOwnProperty('isSupported'))
        obj.isSupported = ApiClient.convertToType(data['isSupported'], 'Boolean');
      if (data.hasOwnProperty('parkingConfiguration'))
        obj.parkingConfiguration = ParkingConfiguration.constructFromObject(data['parkingConfiguration']);
    }
    return obj;
  }
}

/**
 * When true, in-store pickup is supported by the supply source (default: `isSupported` value in `PickupChannel`).
 * @member {Boolean} isSupported
 */
InStorePickupConfiguration.prototype.isSupported = undefined;

/**
 * The parking configuration for in-store pickup.
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/ParkingConfiguration} parkingConfiguration
 */
InStorePickupConfiguration.prototype.parkingConfiguration = undefined;

