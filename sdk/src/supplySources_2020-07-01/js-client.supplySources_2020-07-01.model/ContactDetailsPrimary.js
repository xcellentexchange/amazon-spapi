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
import {EmailAddress} from './EmailAddress.js';

/**
 * The ContactDetailsPrimary model module.
 * @module supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/ContactDetailsPrimary
 * @version 2020-07-01
 */
export class ContactDetailsPrimary {
  /**
   * Constructs a new <code>ContactDetailsPrimary</code>.
   * @alias module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/ContactDetailsPrimary
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ContactDetailsPrimary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/ContactDetailsPrimary} obj Optional instance to populate.
   * @return {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/ContactDetailsPrimary} The populated <code>ContactDetailsPrimary</code> instance.
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
      obj = obj || new ContactDetailsPrimary();
      if (data.hasOwnProperty('email'))
        obj.email = EmailAddress.constructFromObject(data['email']);
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:supplySources_2020-07-01/js-client.supplySources_2020-07-01.model/EmailAddress} email
 */
ContactDetailsPrimary.prototype.email = undefined;

/**
 * The phone number of the person, business or institution.
 * @member {String} phone
 */
ContactDetailsPrimary.prototype.phone = undefined;


