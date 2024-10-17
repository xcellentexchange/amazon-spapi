/*
 * Selling Partner API for Sellers
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API's operations, data types, and schemas.
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
import {MarketplaceParticipation} from './MarketplaceParticipation.js';

/**
 * The MarketplaceParticipationList model module.
 * @module sellers/js-client.sellers.model/MarketplaceParticipationList
 * @version v1
 */
export class MarketplaceParticipationList extends Array {
  /**
   * Constructs a new <code>MarketplaceParticipationList</code>.
   * List of marketplace participations.
   * @alias module:sellers/js-client.sellers.model/MarketplaceParticipationList
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>MarketplaceParticipationList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:sellers/js-client.sellers.model/MarketplaceParticipationList} obj Optional instance to populate.
   * @return {module:sellers/js-client.sellers.model/MarketplaceParticipationList} The populated <code>MarketplaceParticipationList</code> instance.
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
      obj = obj || new MarketplaceParticipationList();
      ApiClient.constructFromObject(data, obj, 'MarketplaceParticipation');
    }
    return obj;
  }
}
