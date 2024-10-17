/*
 * Selling Partner API for A+ Content Management
 * With the A+ Content API, you can build applications that help selling partners add rich marketing content to their Amazon product detail pages. A+ content helps selling partners share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners assemble content by choosing from content modules and adding images and text.
 *
 * OpenAPI spec version: 2020-11-01
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
import {StandardTextListBlock} from './StandardTextListBlock.js';
import {TextComponent} from './TextComponent.js';

/**
 * The StandardHeaderTextListBlock model module.
 * @module aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardHeaderTextListBlock
 * @version 2020-11-01
 */
export class StandardHeaderTextListBlock {
  /**
   * Constructs a new <code>StandardHeaderTextListBlock</code>.
   * The A+ standard fixed-length list of text, with a related headline.
   * @alias module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardHeaderTextListBlock
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>StandardHeaderTextListBlock</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardHeaderTextListBlock} obj Optional instance to populate.
   * @return {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardHeaderTextListBlock} The populated <code>StandardHeaderTextListBlock</code> instance.
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
      obj = obj || new StandardHeaderTextListBlock();
      if (data.hasOwnProperty('headline'))
        obj.headline = TextComponent.constructFromObject(data['headline']);
      if (data.hasOwnProperty('block'))
        obj.block = StandardTextListBlock.constructFromObject(data['block']);
    }
    return obj;
  }
}

/**
 * @member {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/TextComponent} headline
 */
StandardHeaderTextListBlock.prototype.headline = undefined;

/**
 * @member {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardTextListBlock} block
 */
StandardHeaderTextListBlock.prototype.block = undefined;

