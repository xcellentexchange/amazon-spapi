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

/**
 * The ListingsItemPutRequest model module.
 * @module listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ListingsItemPutRequest
 * @version 2021-08-01
 */
export class ListingsItemPutRequest {
  /**
   * Constructs a new <code>ListingsItemPutRequest</code>.
   * The request body schema for the `putListingsItem` operation.
   * @alias module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ListingsItemPutRequest
   * @class
   * @param productType {String} The Amazon product type of the listings item.
   * @param attributes {Object} A JSON object containing structured listings item attribute data keyed by attribute name.
   */
  constructor(productType, attributes) {
    this.productType = productType;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>ListingsItemPutRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ListingsItemPutRequest} obj Optional instance to populate.
   * @return {module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ListingsItemPutRequest} The populated <code>ListingsItemPutRequest</code> instance.
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
      obj = obj || new ListingsItemPutRequest();
      if (data.hasOwnProperty('productType'))
        obj.productType = ApiClient.convertToType(data['productType'], 'String');
      if (data.hasOwnProperty('requirements'))
        obj.requirements = ApiClient.convertToType(data['requirements'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = ApiClient.convertToType(data['attributes'], Object);
    }
    return obj;
  }
}

/**
 * The Amazon product type of the listings item.
 * @member {String} productType
 */
ListingsItemPutRequest.prototype.productType = undefined;

/**
 * Allowed values for the <code>requirements</code> property.
 * @enum {String}
 * @readonly
 */
ListingsItemPutRequest.RequirementsEnum = {
  /**
   * value: "LISTING"
   * @const
   */
  LISTING: "LISTING",

  /**
   * value: "LISTING_PRODUCT_ONLY"
   * @const
   */
  LISTING_PRODUCT_ONLY: "LISTING_PRODUCT_ONLY",

  /**
   * value: "LISTING_OFFER_ONLY"
   * @const
   */
  LISTING_OFFER_ONLY: "LISTING_OFFER_ONLY"
};

/**
 * The name of the requirements set for the provided data.
 * @member {module:listingsItems_2021-08-01/js-client.listingsItems_2021-08-01.model/ListingsItemPutRequest.RequirementsEnum} requirements
 */
ListingsItemPutRequest.prototype.requirements = undefined;

/**
 * A JSON object containing structured listings item attribute data keyed by attribute name.
 * @member {Object} attributes
 */
ListingsItemPutRequest.prototype.attributes = undefined;


