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
import {AplusPaginatedResponse} from './AplusPaginatedResponse.js';
import {AsinMetadataSet} from './AsinMetadataSet.js';
import {MessageSet} from './MessageSet.js';
import {PageToken} from './PageToken.js';

/**
 * The ListContentDocumentAsinRelationsResponse model module.
 * @module aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/ListContentDocumentAsinRelationsResponse
 * @version 2020-11-01
 */
export class ListContentDocumentAsinRelationsResponse extends AplusPaginatedResponse {
  /**
   * Constructs a new <code>ListContentDocumentAsinRelationsResponse</code>.
   * @alias module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/ListContentDocumentAsinRelationsResponse
   * @class
   * @extends module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/AplusPaginatedResponse
   * @param asinMetadataSet {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/AsinMetadataSet} 
   */
  constructor(asinMetadataSet) {
    super();
    this.asinMetadataSet = asinMetadataSet;
  }

  /**
   * Constructs a <code>ListContentDocumentAsinRelationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/ListContentDocumentAsinRelationsResponse} obj Optional instance to populate.
   * @return {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/ListContentDocumentAsinRelationsResponse} The populated <code>ListContentDocumentAsinRelationsResponse</code> instance.
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
      obj = obj || new ListContentDocumentAsinRelationsResponse();
      AplusPaginatedResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('asinMetadataSet'))
        obj.asinMetadataSet = AsinMetadataSet.constructFromObject(data['asinMetadataSet']);
    }
    return obj;
  }
}

/**
 * @member {module:aplusContent_2020-11-01/js-client.aplusContent_2020-11-01.model/AsinMetadataSet} asinMetadataSet
 */
ListContentDocumentAsinRelationsResponse.prototype.asinMetadataSet = undefined;


