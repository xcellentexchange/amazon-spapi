/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, see the [Catalog Items API Use Case Guide](doc:catalog-items-api-v2020-12-01-use-case-guide).
 *
 * OpenAPI spec version: 2020-12-01
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
import {ErrorList} from '../js-client.catalogItems_2020-12-01.model/ErrorList.js';
import {Item} from '../js-client.catalogItems_2020-12-01.model/Item.js';
import {ItemSearchResults} from '../js-client.catalogItems_2020-12-01.model/ItemSearchResults.js';

/**
* Catalog service.
* @module catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.api/CatalogApi
* @version 2020-12-01
*/
export class CatalogApi {

    /**
    * Constructs a new CatalogApi. 
    * @alias module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.api/CatalogApi
    * @class
    * @param {module:catalogItems_2020-12-01/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:catalogItems_2020-12-01/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Retrieves details for an item in the Amazon catalog.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
     * @param {Array.<String>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/String>} opts.includedData A comma-delimited list of data sets to include in the response. Default: summaries.
     * @param {String} opts.locale Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/Item} and HTTP response
     */
    getCatalogItemWithHttpInfo(asin, marketplaceIds, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'asin' is set
      if (asin === undefined || asin === null) {
        throw new Error("Missing the required parameter 'asin' when calling getCatalogItem");
      }

      // verify the required parameter 'marketplaceIds' is set
      if (marketplaceIds === undefined || marketplaceIds === null) {
        throw new Error("Missing the required parameter 'marketplaceIds' when calling getCatalogItem");
      }


      let pathParams = {
        'asin': asin
      };
      let queryParams = {
        'marketplaceIds': this.apiClient.buildCollectionParam(marketplaceIds, 'csv'),
        'includedData': this.apiClient.buildCollectionParam(opts['includedData'], 'csv'),
        'locale': opts['locale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Item;

      return this.apiClient.callApi(
        '/catalog/2020-12-01/items/{asin}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves details for an item in the Amazon catalog.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} asin The Amazon Standard Identification Number (ASIN) of the item.
     * @param {Array.<String>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/String>} opts.includedData A comma-delimited list of data sets to include in the response. Default: summaries.
     * @param {String} opts.locale Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/Item}
     */
    getCatalogItem(asin, marketplaceIds, opts) {
      return this.getCatalogItemWithHttpInfo(asin, marketplaceIds, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search for and return a list of Amazon catalog items and associated information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Array.<String>} keywords A comma-delimited list of words or item identifiers to search the Amazon catalog for.
     * @param {Array.<String>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/String>} opts.includedData A comma-delimited list of data sets to include in the response. Default: summaries.
     * @param {Array.<String>} opts.brandNames A comma-delimited list of brand names to limit the search to.
     * @param {Array.<String>} opts.classificationIds A comma-delimited list of classification identifiers to limit the search to.
     * @param {Number} opts.pageSize Number of results to be returned per page. (default to 10)
     * @param {String} opts.pageToken A token to fetch a certain page when there are multiple pages worth of results.
     * @param {String} opts.keywordsLocale The language the keywords are provided in. Defaults to the primary locale of the marketplace.
     * @param {String} opts.locale Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemSearchResults} and HTTP response
     */
    searchCatalogItemsWithHttpInfo(keywords, marketplaceIds, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'keywords' is set
      if (keywords === undefined || keywords === null) {
        throw new Error("Missing the required parameter 'keywords' when calling searchCatalogItems");
      }

      // verify the required parameter 'marketplaceIds' is set
      if (marketplaceIds === undefined || marketplaceIds === null) {
        throw new Error("Missing the required parameter 'marketplaceIds' when calling searchCatalogItems");
      }


      let pathParams = {
      };
      let queryParams = {
        'keywords': this.apiClient.buildCollectionParam(keywords, 'csv'),
        'marketplaceIds': this.apiClient.buildCollectionParam(marketplaceIds, 'csv'),
        'includedData': this.apiClient.buildCollectionParam(opts['includedData'], 'csv'),
        'brandNames': this.apiClient.buildCollectionParam(opts['brandNames'], 'csv'),
        'classificationIds': this.apiClient.buildCollectionParam(opts['classificationIds'], 'csv'),
        'pageSize': opts['pageSize'],
        'pageToken': opts['pageToken'],
        'keywordsLocale': opts['keywordsLocale'],
        'locale': opts['locale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ItemSearchResults;

      return this.apiClient.callApi(
        '/catalog/2020-12-01/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Search for and return a list of Amazon catalog items and associated information.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Array.<String>} keywords A comma-delimited list of words or item identifiers to search the Amazon catalog for.
     * @param {Array.<String>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/String>} opts.includedData A comma-delimited list of data sets to include in the response. Default: summaries.
     * @param {Array.<String>} opts.brandNames A comma-delimited list of brand names to limit the search to.
     * @param {Array.<String>} opts.classificationIds A comma-delimited list of classification identifiers to limit the search to.
     * @param {Number} opts.pageSize Number of results to be returned per page. (default to 10)
     * @param {String} opts.pageToken A token to fetch a certain page when there are multiple pages worth of results.
     * @param {String} opts.keywordsLocale The language the keywords are provided in. Defaults to the primary locale of the marketplace.
     * @param {String} opts.locale Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:catalogItems_2020-12-01/js-client.catalogItems_2020-12-01.model/ItemSearchResults}
     */
    searchCatalogItems(keywords, marketplaceIds, opts) {
      return this.searchCatalogItemsWithHttpInfo(keywords, marketplaceIds, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
