/*
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * OpenAPI spec version: v1
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
import {SubmitInvoicesRequest} from '../js-client.vendorInvoices.model/SubmitInvoicesRequest.js';
import {SubmitInvoicesResponse} from '../js-client.vendorInvoices.model/SubmitInvoicesResponse.js';

/**
* VendorPayments service.
* @module vendorInvoices/js-client.vendorInvoices.api/VendorPaymentsApi
* @version v1
*/
export class VendorPaymentsApi {

    /**
    * Constructs a new VendorPaymentsApi. 
    * @alias module:vendorInvoices/js-client.vendorInvoices.api/VendorPaymentsApi
    * @class
    * @param {module:vendorInvoices/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:vendorInvoices/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Submit new invoices to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:vendorInvoices/js-client.vendorInvoices.model/SubmitInvoicesRequest} body The request body containing the invoice data to submit.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:vendorInvoices/js-client.vendorInvoices.model/SubmitInvoicesResponse} and HTTP response
     */
    submitInvoicesWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling submitInvoices");
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
      let returnType = SubmitInvoicesResponse;

      return this.apiClient.callApi(
        '/vendor/payments/v1/invoices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Submit new invoices to Amazon.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:vendorInvoices/js-client.vendorInvoices.model/SubmitInvoicesRequest} body The request body containing the invoice data to submit.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:vendorInvoices/js-client.vendorInvoices.model/SubmitInvoicesResponse}
     */
    submitInvoices(body) {
      return this.submitInvoicesWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
