/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
 *
 * OpenAPI spec version: v0
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
import {DecimalWithUnits} from './DecimalWithUnits.js';

/**
 * The Image model module.
 * @module catalogItemsV0/js-client.catalogItemsV0.model/Image
 * @version v0
 */
export class Image {
  /**
   * Constructs a new <code>Image</code>.
   * The image attribute of the item.
   * @alias module:catalogItemsV0/js-client.catalogItemsV0.model/Image
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:catalogItemsV0/js-client.catalogItemsV0.model/Image} obj Optional instance to populate.
   * @return {module:catalogItemsV0/js-client.catalogItemsV0.model/Image} The populated <code>Image</code> instance.
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
      obj = obj || new Image();
      if (data.hasOwnProperty('URL'))
        obj.URL = ApiClient.convertToType(data['URL'], 'String');
      if (data.hasOwnProperty('Height'))
        obj.height = DecimalWithUnits.constructFromObject(data['Height']);
      if (data.hasOwnProperty('Width'))
        obj.width = DecimalWithUnits.constructFromObject(data['Width']);
    }
    return obj;
  }
}

/**
 * The image URL attribute of the item.
 * @member {String} URL
 */
Image.prototype.URL = undefined;

/**
 * The image height attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} height
 */
Image.prototype.height = undefined;

/**
 * The image width attribute of the item.
 * @member {module:catalogItemsV0/js-client.catalogItemsV0.model/DecimalWithUnits} width
 */
Image.prototype.width = undefined;

