/*
 * Selling Partner API for Tokens 
 * The Selling Partner API for Tokens provides a secure way to access a customer's PII (Personally Identifiable Information). You can call the Tokens API to get a Restricted Data Token (RDT) for one or more restricted resources that you specify. The RDT authorizes subsequent calls to restricted operations that correspond to the restricted resources that you specified.  For more information, see the [Tokens API Use Case Guide](doc:tokens-api-use-case-guide).
 *
 * OpenAPI spec version: 2021-03-01
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
import {CreateRestrictedDataTokenRequest} from '../js-client.tokens_2021-03-01.model/CreateRestrictedDataTokenRequest.js';
import {CreateRestrictedDataTokenResponse} from '../js-client.tokens_2021-03-01.model/CreateRestrictedDataTokenResponse.js';
import {ErrorList} from '../js-client.tokens_2021-03-01.model/ErrorList.js';

/**
* Tokens service.
* @module tokens_2021-03-01/js-client.tokens_2021-03-01.api/TokensApi
* @version 2021-03-01
*/
export class TokensApi {

    /**
    * Constructs a new TokensApi. 
    * @alias module:tokens_2021-03-01/js-client.tokens_2021-03-01.api/TokensApi
    * @class
    * @param {module:tokens_2021-03-01/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:tokens_2021-03-01/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a Restricted Data Token (RDT) for one or more restricted resources that you specify. A restricted resource is the HTTP method and path from a restricted operation that returns Personally Identifiable Information (PII), plus a dataElements value that indicates the type of PII requested. See the Tokens API Use Case Guide for a list of restricted operations. Use the RDT returned here as the access token in subsequent calls to the corresponding restricted operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:tokens_2021-03-01/js-client.tokens_2021-03-01.model/CreateRestrictedDataTokenRequest} body The restricted data token request details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:tokens_2021-03-01/js-client.tokens_2021-03-01.model/CreateRestrictedDataTokenResponse} and HTTP response
     */
    createRestrictedDataTokenWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createRestrictedDataToken");
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
      let returnType = CreateRestrictedDataTokenResponse;

      return this.apiClient.callApi(
        '/tokens/2021-03-01/restrictedDataToken', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a Restricted Data Token (RDT) for one or more restricted resources that you specify. A restricted resource is the HTTP method and path from a restricted operation that returns Personally Identifiable Information (PII), plus a dataElements value that indicates the type of PII requested. See the Tokens API Use Case Guide for a list of restricted operations. Use the RDT returned here as the access token in subsequent calls to the corresponding restricted operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:tokens_2021-03-01/js-client.tokens_2021-03-01.model/CreateRestrictedDataTokenRequest} body The restricted data token request details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:tokens_2021-03-01/js-client.tokens_2021-03-01.model/CreateRestrictedDataTokenResponse}
     */
    createRestrictedDataToken(body) {
      return this.createRestrictedDataTokenWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
