/*
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * OpenAPI spec version: 2021-08-01
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
import {IssueEnforcementAction} from './IssueEnforcementAction.js';
import {IssueExemption} from './IssueExemption.js';

/**
 * The IssueEnforcements model module.
 * @module listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/IssueEnforcements
 * @version 2021-08-01
 */
export class IssueEnforcements {
  /**
   * Constructs a new <code>IssueEnforcements</code>.
   * This field provides information about the enforcement actions taken by Amazon that affect the publishing or status of a listing. It also includes details about any associated exemptions.
   * @alias module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/IssueEnforcements
   * @class
   * @param actions {Array.<module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/IssueEnforcementAction>} List of enforcement actions taken by Amazon that affect the publishing or status of a listing.
   * @param exemption {module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/IssueExemption} The \"exemption\" field serves to convey the status of enforcement actions by Amazon.
   */
  constructor(actions, exemption) {
    this.actions = actions;
    this.exemption = exemption;
  }

  /**
   * Constructs a <code>IssueEnforcements</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/IssueEnforcements} obj Optional instance to populate.
   * @return {module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/IssueEnforcements} The populated <code>IssueEnforcements</code> instance.
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
      obj = obj || new IssueEnforcements();
      if (data.hasOwnProperty('actions'))
        obj.actions = ApiClient.convertToType(data['actions'], [IssueEnforcementAction]);
      if (data.hasOwnProperty('exemption'))
        obj.exemption = IssueExemption.constructFromObject(data['exemption']);
    }
    return obj;
  }
}

/**
 * List of enforcement actions taken by Amazon that affect the publishing or status of a listing.
 * @member {Array.<module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/IssueEnforcementAction>} actions
 */
IssueEnforcements.prototype.actions = undefined;

/**
 * The \"exemption\" field serves to convey the status of enforcement actions by Amazon.
 * @member {module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/IssueExemption} exemption
 */
IssueEnforcements.prototype.exemption = undefined;


