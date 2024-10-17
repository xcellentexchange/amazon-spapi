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
import {StandardImageTextBlock} from './StandardImageTextBlock.js';

/**
 * The StandardFourImageTextQuadrantModule model module.
 * @module aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardFourImageTextQuadrantModule
 * @version 2020-11-01
 */
export class StandardFourImageTextQuadrantModule {
  /**
   * Constructs a new <code>StandardFourImageTextQuadrantModule</code>.
   * Four standard images with text, presented on a grid of four quadrants.
   * @alias module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardFourImageTextQuadrantModule
   * @class
   * @param block1 {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardImageTextBlock} 
   * @param block2 {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardImageTextBlock} 
   * @param block3 {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardImageTextBlock} 
   * @param block4 {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardImageTextBlock} 
   */
  constructor(block1, block2, block3, block4) {
    this.block1 = block1;
    this.block2 = block2;
    this.block3 = block3;
    this.block4 = block4;
  }

  /**
   * Constructs a <code>StandardFourImageTextQuadrantModule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardFourImageTextQuadrantModule} obj Optional instance to populate.
   * @return {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardFourImageTextQuadrantModule} The populated <code>StandardFourImageTextQuadrantModule</code> instance.
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
      obj = obj || new StandardFourImageTextQuadrantModule();
      if (data.hasOwnProperty('block1'))
        obj.block1 = StandardImageTextBlock.constructFromObject(data['block1']);
      if (data.hasOwnProperty('block2'))
        obj.block2 = StandardImageTextBlock.constructFromObject(data['block2']);
      if (data.hasOwnProperty('block3'))
        obj.block3 = StandardImageTextBlock.constructFromObject(data['block3']);
      if (data.hasOwnProperty('block4'))
        obj.block4 = StandardImageTextBlock.constructFromObject(data['block4']);
    }
    return obj;
  }
}

/**
 * @member {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardImageTextBlock} block1
 */
StandardFourImageTextQuadrantModule.prototype.block1 = undefined;

/**
 * @member {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardImageTextBlock} block2
 */
StandardFourImageTextQuadrantModule.prototype.block2 = undefined;

/**
 * @member {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardImageTextBlock} block3
 */
StandardFourImageTextQuadrantModule.prototype.block3 = undefined;

/**
 * @member {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/StandardImageTextBlock} block4
 */
StandardFourImageTextQuadrantModule.prototype.block4 = undefined;


