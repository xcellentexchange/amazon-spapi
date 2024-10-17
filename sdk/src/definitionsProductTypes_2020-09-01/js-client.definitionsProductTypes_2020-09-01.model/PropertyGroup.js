/*
 * Selling Partner API for Product Type Definitions
 * The Selling Partner API for Product Type Definitions provides programmatic access to attribute and data requirements for product types in the Amazon catalog. Use this API to return the JSON Schema for a product type that you can then use with other Selling Partner APIs, such as the Selling Partner API for Listings Items, the Selling Partner API for Catalog Items, and the Selling Partner API for Feeds (for JSON-based listing feeds).  For more information, see the [Product Type Definitions API Use Case Guide](doc:product-type-api-use-case-guide).
 *
 * OpenAPI spec version: 2020-09-01
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

/**
 * The PropertyGroup model module.
 * @module definitionsProductTypes_2020-09-01/js-client.definitionsProductTypes_2020-09-01.model/PropertyGroup
 * @version 2020-09-01
 */
export class PropertyGroup {
  /**
   * Constructs a new <code>PropertyGroup</code>.
   * A property group represents a logical grouping of schema properties that can be used for display or informational purposes.
   * @alias module:definitionsProductTypes_2020-09-01/js-client.definitionsProductTypes_2020-09-01.model/PropertyGroup
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PropertyGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:definitionsProductTypes_2020-09-01/js-client.definitionsProductTypes_2020-09-01.model/PropertyGroup} obj Optional instance to populate.
   * @return {module:definitionsProductTypes_2020-09-01/js-client.definitionsProductTypes_2020-09-01.model/PropertyGroup} The populated <code>PropertyGroup</code> instance.
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
      obj = obj || new PropertyGroup();
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('propertyNames'))
        obj.propertyNames = ApiClient.convertToType(data['propertyNames'], ['String']);
    }
    return obj;
  }
}

/**
 * The display label of the property group.
 * @member {String} title
 */
PropertyGroup.prototype.title = undefined;

/**
 * The description of the property group.
 * @member {String} description
 */
PropertyGroup.prototype.description = undefined;

/**
 * The names of the schema properties for the property group.
 * @member {Array.<String>} propertyNames
 */
PropertyGroup.prototype.propertyNames = undefined;

