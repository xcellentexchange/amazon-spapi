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
import {Address} from './Address.js';
import {SupplySourceAlias} from './SupplySourceAlias.js';
import {SupplySourceCode} from './SupplySourceCode.js';
import {SupplySourceId} from './SupplySourceId.js';

/**
 * The SupplySourceListInner model module.
 * @module supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySourceListInner
 * @version 2020-07-01
 */
export class SupplySourceListInner {
  /**
   * Constructs a new <code>SupplySourceListInner</code>.
   * @alias module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySourceListInner
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SupplySourceListInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySourceListInner} obj Optional instance to populate.
   * @return {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySourceListInner} The populated <code>SupplySourceListInner</code> instance.
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
      obj = obj || new SupplySourceListInner();
      if (data.hasOwnProperty('alias'))
        obj.alias = SupplySourceAlias.constructFromObject(data['alias']);
      if (data.hasOwnProperty('supplySourceId'))
        obj.supplySourceId = SupplySourceId.constructFromObject(data['supplySourceId']);
      if (data.hasOwnProperty('supplySourceCode'))
        obj.supplySourceCode = SupplySourceCode.constructFromObject(data['supplySourceCode']);
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
    }
    return obj;
  }
}

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySourceAlias} alias
 */
SupplySourceListInner.prototype.alias = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySourceId} supplySourceId
 */
SupplySourceListInner.prototype.supplySourceId = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/SupplySourceCode} supplySourceCode
 */
SupplySourceListInner.prototype.supplySourceCode = undefined;

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/Address} address
 */
SupplySourceListInner.prototype.address = undefined;


