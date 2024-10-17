/*
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * OpenAPI spec version: 2021-06-30
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
import {Feed} from './Feed.js';

/**
 * The FeedList model module.
 * @module feeds_2021-06-30/js-client.feeds_2021-06-30.model/FeedList
 * @version 2021-06-30
 */
export class FeedList extends Array {
  /**
   * Constructs a new <code>FeedList</code>.
   * A list of feeds.
   * @alias module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/FeedList
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>FeedList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/FeedList} obj Optional instance to populate.
   * @return {module:feeds_2021-06-30/js-client.feeds_2021-06-30.model/FeedList} The populated <code>FeedList</code> instance.
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
      obj = obj || new FeedList();
      ApiClient.constructFromObject(data, obj, 'Feed');
    }
    return obj;
  }
}

