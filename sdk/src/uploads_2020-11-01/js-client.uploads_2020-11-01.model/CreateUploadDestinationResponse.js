/*
 * Selling Partner API for Uploads
 * The Uploads API lets you upload files that you can programmatically access using other Selling Partner APIs, such as the A+ Content API and the Messaging API.
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
import {ErrorList} from './ErrorList.js';
import {UploadDestination} from './UploadDestination.js';

/**
 * The CreateUploadDestinationResponse model module.
 * @module uploads_2020-11-01/js-client.uploads_2020-11-01.model/CreateUploadDestinationResponse
 * @version 2020-11-01
 */
export class CreateUploadDestinationResponse {
  /**
   * Constructs a new <code>CreateUploadDestinationResponse</code>.
   * The response schema for the createUploadDestination operation.
   * @alias module:uploads_2020-11-01/js-client.uploads_2020-11-01.model/CreateUploadDestinationResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateUploadDestinationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:uploads_2020-11-01/js-client.uploads_2020-11-01.model/CreateUploadDestinationResponse} obj Optional instance to populate.
   * @return {module:uploads_2020-11-01/js-client.uploads_2020-11-01.model/CreateUploadDestinationResponse} The populated <code>CreateUploadDestinationResponse</code> instance.
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
      obj = obj || new CreateUploadDestinationResponse();
      if (data.hasOwnProperty('payload'))
        obj.payload = UploadDestination.constructFromObject(data['payload']);
      if (data.hasOwnProperty('errors'))
        obj.errors = ErrorList.constructFromObject(data['errors']);
    }
    return obj;
  }
}

/**
 * @member {module:uploads_2020-11-01/js-client.uploads_2020-11-01.model/UploadDestination} payload
 */
CreateUploadDestinationResponse.prototype.payload = undefined;

/**
 * @member {module:uploads_2020-11-01/js-client.uploads_2020-11-01.model/ErrorList} errors
 */
CreateUploadDestinationResponse.prototype.errors = undefined;


