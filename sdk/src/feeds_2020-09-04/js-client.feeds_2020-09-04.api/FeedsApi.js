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

import {ApiClient} from "../ApiClient.js";
import {CancelFeedResponse} from '../js-client.feeds_2020-09-04.model/CancelFeedResponse.js';
import {CreateFeedDocumentResponse} from '../js-client.feeds_2020-09-04.model/CreateFeedDocumentResponse.js';
import {CreateFeedDocumentSpecification} from '../js-client.feeds_2020-09-04.model/CreateFeedDocumentSpecification.js';
import {CreateFeedResponse} from '../js-client.feeds_2020-09-04.model/CreateFeedResponse.js';
import {CreateFeedSpecification} from '../js-client.feeds_2020-09-04.model/CreateFeedSpecification.js';
import {GetFeedDocumentResponse} from '../js-client.feeds_2020-09-04.model/GetFeedDocumentResponse.js';
import {GetFeedResponse} from '../js-client.feeds_2020-09-04.model/GetFeedResponse.js';
import {GetFeedsResponse} from '../js-client.feeds_2020-09-04.model/GetFeedsResponse.js';

/**
* Feeds service.
* @module feeds_2020-09-04/js-client.feeds_2020-09-04.api/FeedsApi
* @version 2020-09-04
*/
export class FeedsApi {

    /**
    * Constructs a new FeedsApi. 
    * @alias module:feeds_2020-09-04/js-client.feeds_2020-09-04.api/FeedsApi
    * @class
    * @param {module:feeds_2020-09-04/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:feeds_2020-09-04/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Effective June 27, 2023, the `cancelFeed` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
     * @param {String} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/CancelFeedResponse} and HTTP response
     */
    cancelFeedWithHttpInfo(feedId) {
      let postBody = null;

      // verify the required parameter 'feedId' is set
      if (feedId === undefined || feedId === null) {
        throw new Error("Missing the required parameter 'feedId' when calling cancelFeed");
      }


      let pathParams = {
        'feedId': feedId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CancelFeedResponse;

      return this.apiClient.callApi(
        '/feeds/2020-09-04/feeds/{feedId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Effective June 27, 2023, the `cancelFeed` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
     * @param {String} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/CancelFeedResponse}
     */
    cancelFeed(feedId) {
      return this.cancelFeedWithHttpInfo(feedId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Effective June 27, 2023, the `createFeed` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
     * @param {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/CreateFeedSpecification} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/CreateFeedResponse} and HTTP response
     */
    createFeedWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createFeed");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateFeedResponse;

      return this.apiClient.callApi(
        '/feeds/2020-09-04/feeds', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Effective June 27, 2023, the `createFeed` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
     * @param {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/CreateFeedSpecification} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/CreateFeedResponse}
     */
    createFeed(body) {
      return this.createFeedWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Effective June 27, 2023, the `createFeedDocument` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
     * @param {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/CreateFeedDocumentSpecification} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/CreateFeedDocumentResponse} and HTTP response
     */
    createFeedDocumentWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createFeedDocument");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateFeedDocumentResponse;

      return this.apiClient.callApi(
        '/feeds/2020-09-04/documents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Effective June 27, 2023, the `createFeedDocument` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
     * @param {module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/CreateFeedDocumentSpecification} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/CreateFeedDocumentResponse}
     */
    createFeedDocument(body) {
      return this.createFeedDocumentWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Effective June 27, 2023, the `getFeed` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
     * @param {String} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/GetFeedResponse} and HTTP response
     */
    getFeedWithHttpInfo(feedId) {
      let postBody = null;

      // verify the required parameter 'feedId' is set
      if (feedId === undefined || feedId === null) {
        throw new Error("Missing the required parameter 'feedId' when calling getFeed");
      }


      let pathParams = {
        'feedId': feedId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetFeedResponse;

      return this.apiClient.callApi(
        '/feeds/2020-09-04/feeds/{feedId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Effective June 27, 2023, the `getFeed` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
     * @param {String} feedId The identifier for the feed. This identifier is unique only in combination with a seller ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/GetFeedResponse}
     */
    getFeed(feedId) {
      return this.getFeedWithHttpInfo(feedId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Effective June 27, 2023, the `getFeedDocument` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
     * @param {String} feedDocumentId The identifier of the feed document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/GetFeedDocumentResponse} and HTTP response
     */
    getFeedDocumentWithHttpInfo(feedDocumentId) {
      let postBody = null;

      // verify the required parameter 'feedDocumentId' is set
      if (feedDocumentId === undefined || feedDocumentId === null) {
        throw new Error("Missing the required parameter 'feedDocumentId' when calling getFeedDocument");
      }


      let pathParams = {
        'feedDocumentId': feedDocumentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetFeedDocumentResponse;

      return this.apiClient.callApi(
        '/feeds/2020-09-04/documents/{feedDocumentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Effective June 27, 2023, the `getFeedDocument` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
     * @param {String} feedDocumentId The identifier of the feed document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/GetFeedDocumentResponse}
     */
    getFeedDocument(feedDocumentId) {
      return this.getFeedDocumentWithHttpInfo(feedDocumentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Effective June 27, 2023, the `getFeeds` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.feedTypes A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required.
     * @param {Array.<String>} opts.marketplaceIds A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify.
     * @param {Number} opts.pageSize The maximum number of feeds to return in a single call. (default to 10)
     * @param {Array.<module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/String>} opts.processingStatuses A list of processing statuses used to filter feeds.
     * @param {Date} opts.createdSince The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days.
     * @param {Date} opts.createdUntil The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now.
     * @param {String} opts.nextToken A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/GetFeedsResponse} and HTTP response
     */
    getFeedsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'feedTypes': this.apiClient.buildCollectionParam(opts['feedTypes'], 'csv'),
        'marketplaceIds': this.apiClient.buildCollectionParam(opts['marketplaceIds'], 'csv'),
        'pageSize': opts['pageSize'],
        'processingStatuses': this.apiClient.buildCollectionParam(opts['processingStatuses'], 'csv'),
        'createdSince': opts['createdSince'],
        'createdUntil': opts['createdUntil'],
        'nextToken': opts['nextToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetFeedsResponse;

      return this.apiClient.callApi(
        '/feeds/2020-09-04/feeds', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Effective June 27, 2023, the `getFeeds` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.feedTypes A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required.
     * @param {Array.<String>} opts.marketplaceIds A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify.
     * @param {Number} opts.pageSize The maximum number of feeds to return in a single call. (default to 10)
     * @param {Array.<module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/String>} opts.processingStatuses A list of processing statuses used to filter feeds.
     * @param {Date} opts.createdSince The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days.
     * @param {Date} opts.createdUntil The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now.
     * @param {String} opts.nextToken A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:feeds_2020-09-04/js-client.feeds_2020-09-04.model/GetFeedsResponse}
     */
    getFeeds(opts) {
      return this.getFeedsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}