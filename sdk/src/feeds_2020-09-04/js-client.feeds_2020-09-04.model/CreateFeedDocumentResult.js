/*
 * Selling Partner API for Feeds
 * Effective **June 27, 2024**, the Selling Partner API for Feeds v2020-09-04 will no longer be available and all calls to it will fail. Integrations that rely on the Feeds API must migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
 *
 * OpenAPI spec version: 2020-09-04
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
import {FeedDocumentEncryptionDetails} from './FeedDocumentEncryptionDetails.js';

/**
 * The CreateFeedDocumentResult model module.
 * @module feeds_2020-09-04/js-client.feeds_2020-09-04.model/CreateFeedDocumentResult
 * @version 2020-09-04
 */
export class CreateFeedDocumentResult {
  /**
   * Constructs a new <code>CreateFeedDocumentResult</code>.
   * Information required to encrypt and upload a feed document's contents.
   * @alias module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/CreateFeedDocumentResult
   * @class
   * @param feedDocumentId {String} The identifier of the feed document.
   * @param url {String} The presigned URL for uploading the feed contents. This URL expires after 5 minutes.
   * @param encryptionDetails {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/FeedDocumentEncryptionDetails} 
   */
  constructor(feedDocumentId, url, encryptionDetails) {
    this.feedDocumentId = feedDocumentId;
    this.url = url;
    this.encryptionDetails = encryptionDetails;
  }

  /**
   * Constructs a <code>CreateFeedDocumentResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/CreateFeedDocumentResult} obj Optional instance to populate.
   * @return {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/CreateFeedDocumentResult} The populated <code>CreateFeedDocumentResult</code> instance.
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
      obj = obj || new CreateFeedDocumentResult();
      if (data.hasOwnProperty('feedDocumentId'))
        obj.feedDocumentId = ApiClient.convertToType(data['feedDocumentId'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('encryptionDetails'))
        obj.encryptionDetails = FeedDocumentEncryptionDetails.constructFromObject(data['encryptionDetails']);
    }
    return obj;
  }
}

/**
 * The identifier of the feed document.
 * @member {String} feedDocumentId
 */
CreateFeedDocumentResult.prototype.feedDocumentId = undefined;

/**
 * The presigned URL for uploading the feed contents. This URL expires after 5 minutes.
 * @member {String} url
 */
CreateFeedDocumentResult.prototype.url = undefined;

/**
 * @member {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/FeedDocumentEncryptionDetails} encryptionDetails
 */
CreateFeedDocumentResult.prototype.encryptionDetails = undefined;


