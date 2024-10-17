/*
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listing Items API Use Case Guide](doc:listings-items-api-v2020-09-01-use-case-guide).
 *
 * OpenAPI spec version: 2020-09-01
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
import {ErrorList} from '../js-client.listingsItems_2020-09-01.model/ErrorList.js';
import {ListingsItemPatchRequest} from '../js-client.listingsItems_2020-09-01.model/ListingsItemPatchRequest.js';
import {ListingsItemPutRequest} from '../js-client.listingsItems_2020-09-01.model/ListingsItemPutRequest.js';
import {ListingsItemSubmissionResponse} from '../js-client.listingsItems_2020-09-01.model/ListingsItemSubmissionResponse.js';

/**
* Listings service.
* @module listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.api/ListingsApi
* @version 2020-09-01
*/
export class ListingsApi {

    /**
    * Constructs a new ListingsApi. 
    * @alias module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.api/ListingsApi
    * @class
    * @param {module:listingsItems_2020-09-01/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:listingsItems_2020-09-01/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete a listings item for a selling partner.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
     * @param {String} sku A selling partner provided identifier for an Amazon listing.
     * @param {Array.<String>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.issueLocale A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \"en_US\", \"fr_CA\", \"fr_FR\". Localized messages default to \"en_US\" when a localization is not available in the specified locale.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/ListingsItemSubmissionResponse} and HTTP response
     */
    deleteListingsItemWithHttpInfo(sellerId, sku, marketplaceIds, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'sellerId' is set
      if (sellerId === undefined || sellerId === null) {
        throw new Error("Missing the required parameter 'sellerId' when calling deleteListingsItem");
      }

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling deleteListingsItem");
      }

      // verify the required parameter 'marketplaceIds' is set
      if (marketplaceIds === undefined || marketplaceIds === null) {
        throw new Error("Missing the required parameter 'marketplaceIds' when calling deleteListingsItem");
      }


      let pathParams = {
        'sellerId': sellerId,
        'sku': sku
      };
      let queryParams = {
        'marketplaceIds': this.apiClient.buildCollectionParam(marketplaceIds, 'csv'),
        'issueLocale': opts['issueLocale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ListingsItemSubmissionResponse;

      return this.apiClient.callApi(
        '/listings/2020-09-01/items/{sellerId}/{sku}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a listings item for a selling partner.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
     * @param {String} sku A selling partner provided identifier for an Amazon listing.
     * @param {Array.<String>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.issueLocale A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \"en_US\", \"fr_CA\", \"fr_FR\". Localized messages default to \"en_US\" when a localization is not available in the specified locale.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/ListingsItemSubmissionResponse}
     */
    deleteListingsItem(sellerId, sku, marketplaceIds, opts) {
      return this.deleteListingsItemWithHttpInfo(sellerId, sku, marketplaceIds, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
     * @param {String} sku A selling partner provided identifier for an Amazon listing.
     * @param {Array.<String>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
     * @param {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/ListingsItemPatchRequest} body The request body schema for the patchListingsItem operation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.issueLocale A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \"en_US\", \"fr_CA\", \"fr_FR\". Localized messages default to \"en_US\" when a localization is not available in the specified locale.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/ListingsItemSubmissionResponse} and HTTP response
     */
    patchListingsItemWithHttpInfo(sellerId, sku, marketplaceIds, body, opts) {
      opts = opts || {};
      let postBody = body;

      // verify the required parameter 'sellerId' is set
      if (sellerId === undefined || sellerId === null) {
        throw new Error("Missing the required parameter 'sellerId' when calling patchListingsItem");
      }

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling patchListingsItem");
      }

      // verify the required parameter 'marketplaceIds' is set
      if (marketplaceIds === undefined || marketplaceIds === null) {
        throw new Error("Missing the required parameter 'marketplaceIds' when calling patchListingsItem");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchListingsItem");
      }


      let pathParams = {
        'sellerId': sellerId,
        'sku': sku
      };
      let queryParams = {
        'marketplaceIds': this.apiClient.buildCollectionParam(marketplaceIds, 'csv'),
        'issueLocale': opts['issueLocale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ListingsItemSubmissionResponse;

      return this.apiClient.callApi(
        '/listings/2020-09-01/items/{sellerId}/{sku}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
     * @param {String} sku A selling partner provided identifier for an Amazon listing.
     * @param {Array.<String>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
     * @param {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/ListingsItemPatchRequest} body The request body schema for the patchListingsItem operation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.issueLocale A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \"en_US\", \"fr_CA\", \"fr_FR\". Localized messages default to \"en_US\" when a localization is not available in the specified locale.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/ListingsItemSubmissionResponse}
     */
    patchListingsItem(sellerId, sku, marketplaceIds, body, opts) {
      return this.patchListingsItemWithHttpInfo(sellerId, sku, marketplaceIds, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a new or fully-updates an existing listings item for a selling partner.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
     * @param {String} sku A selling partner provided identifier for an Amazon listing.
     * @param {Array.<String>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
     * @param {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/ListingsItemPutRequest} body The request body schema for the putListingsItem operation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.issueLocale A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \"en_US\", \"fr_CA\", \"fr_FR\". Localized messages default to \"en_US\" when a localization is not available in the specified locale.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/ListingsItemSubmissionResponse} and HTTP response
     */
    putListingsItemWithHttpInfo(sellerId, sku, marketplaceIds, body, opts) {
      opts = opts || {};
      let postBody = body;

      // verify the required parameter 'sellerId' is set
      if (sellerId === undefined || sellerId === null) {
        throw new Error("Missing the required parameter 'sellerId' when calling putListingsItem");
      }

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling putListingsItem");
      }

      // verify the required parameter 'marketplaceIds' is set
      if (marketplaceIds === undefined || marketplaceIds === null) {
        throw new Error("Missing the required parameter 'marketplaceIds' when calling putListingsItem");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putListingsItem");
      }


      let pathParams = {
        'sellerId': sellerId,
        'sku': sku
      };
      let queryParams = {
        'marketplaceIds': this.apiClient.buildCollectionParam(marketplaceIds, 'csv'),
        'issueLocale': opts['issueLocale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ListingsItemSubmissionResponse;

      return this.apiClient.callApi(
        '/listings/2020-09-01/items/{sellerId}/{sku}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a new or fully-updates an existing listings item for a selling partner.  **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding).  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} sellerId A selling partner identifier, such as a merchant account or vendor code.
     * @param {String} sku A selling partner provided identifier for an Amazon listing.
     * @param {Array.<String>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
     * @param {module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/ListingsItemPutRequest} body The request body schema for the putListingsItem operation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.issueLocale A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \"en_US\", \"fr_CA\", \"fr_FR\". Localized messages default to \"en_US\" when a localization is not available in the specified locale.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:listingsItems_2020-09-01/js-client.listingsItems_2020-09-01.model/ListingsItemSubmissionResponse}
     */
    putListingsItem(sellerId, sku, marketplaceIds, body, opts) {
      return this.putListingsItemWithHttpInfo(sellerId, sku, marketplaceIds, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}