/*
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * OpenAPI spec version: 2024-06-19
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
import {ErrorList} from '../js-client.finances_2024-06-19.model/ErrorList.js';
import {ListTransactionsResponse} from '../js-client.finances_2024-06-19.model/ListTransactionsResponse.js';

/**
* Default service.
* @module finances_2024-06-19/js-client.finances_2024-06-19.api/DefaultApi
* @version 2024-06-19
*/
export class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:finances_2024-06-19/js-client.finances_2024-06-19.api/DefaultApi
    * @class
    * @param {module:finances_2024-06-19/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:finances_2024-06-19/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns transactions for the given parameters. Orders from the last 48 hours might not be included in financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
     * @param {Date} postedAfter The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.postedBefore The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than `PostedAfter` and more than two minutes before the request was submitted. If `PostedAfter` and `PostedBefore` are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request.
     * @param {String} opts.marketplaceId The ID of the marketplace from which you want to retrieve transactions.
     * @param {String} opts.nextToken The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:finances_2024-06-19/js-client.finances_2024-06-19.model/ListTransactionsResponse} and HTTP response
     */
    listTransactionsWithHttpInfo(postedAfter, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'postedAfter' is set
      if (postedAfter === undefined || postedAfter === null) {
        throw new Error("Missing the required parameter 'postedAfter' when calling listTransactions");
      }


      let pathParams = {
      };
      let queryParams = {
        'postedAfter': postedAfter,
        'postedBefore': opts['postedBefore'],
        'marketplaceId': opts['marketplaceId'],
        'nextToken': opts['nextToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ListTransactionsResponse;

      return this.apiClient.callApi(
        '/finances/2024-06-19/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns transactions for the given parameters. Orders from the last 48 hours might not be included in financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).
     * @param {Date} postedAfter The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.postedBefore The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than `PostedAfter` and more than two minutes before the request was submitted. If `PostedAfter` and `PostedBefore` are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request.
     * @param {String} opts.marketplaceId The ID of the marketplace from which you want to retrieve transactions.
     * @param {String} opts.nextToken The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:finances_2024-06-19/js-client.finances_2024-06-19.model/ListTransactionsResponse}
     */
    listTransactions(postedAfter, opts) {
      return this.listTransactionsWithHttpInfo(postedAfter, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}