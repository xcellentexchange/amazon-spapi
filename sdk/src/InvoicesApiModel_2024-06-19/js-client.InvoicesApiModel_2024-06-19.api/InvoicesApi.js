/*
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
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
import {ErrorList} from '../js-client.InvoicesApiModel_2024-06-19.model/ErrorList.js';
import {ExportInvoicesRequest} from '../js-client.InvoicesApiModel_2024-06-19.model/ExportInvoicesRequest.js';
import {ExportInvoicesResponse} from '../js-client.InvoicesApiModel_2024-06-19.model/ExportInvoicesResponse.js';
import {GetInvoiceResponse} from '../js-client.InvoicesApiModel_2024-06-19.model/GetInvoiceResponse.js';
import {GetInvoicesAttributesResponse} from '../js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesAttributesResponse.js';
import {GetInvoicesDocumentResponse} from '../js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesDocumentResponse.js';
import {GetInvoicesExportResponse} from '../js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesExportResponse.js';
import {GetInvoicesExportsResponse} from '../js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesExportsResponse.js';
import {GetInvoicesResponse} from '../js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesResponse.js';

/**
* Invoices service.
* @module InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.api/InvoicesApi
* @version 2024-06-19
*/
export class InvoicesApi {

    /**
    * Constructs a new InvoicesApi. 
    * @alias module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.api/InvoicesApi
    * @class
    * @param {module:InvoicesApiModel_2024-06-19/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:InvoicesApiModel_2024-06-19/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates an invoice export request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.167 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ExportInvoicesRequest} body Information required to create the export request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ExportInvoicesResponse} and HTTP response
     */
    createInvoicesExportWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createInvoicesExport");
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
      let returnType = ExportInvoicesResponse;

      return this.apiClient.callApi(
        '/tax/invoices/2024-06-19/exports', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Creates an invoice export request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.167 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ExportInvoicesRequest} body Information required to create the export request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ExportInvoicesResponse}
     */
    createInvoicesExport(body) {
      return this.createInvoicesExportWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns invoice data for the specified invoice. This operation returns only a subset of the invoices data; refer to the response definition to get all the possible attributes. To get the full invoice, use the `createInvoicesExport` operation to start an export request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} marketplaceId The marketplace from which you want the invoice.
     * @param {String} invoiceId The invoice identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoiceResponse} and HTTP response
     */
    getInvoiceWithHttpInfo(marketplaceId, invoiceId) {
      let postBody = null;

      // verify the required parameter 'marketplaceId' is set
      if (marketplaceId === undefined || marketplaceId === null) {
        throw new Error("Missing the required parameter 'marketplaceId' when calling getInvoice");
      }

      // verify the required parameter 'invoiceId' is set
      if (invoiceId === undefined || invoiceId === null) {
        throw new Error("Missing the required parameter 'invoiceId' when calling getInvoice");
      }


      let pathParams = {
        'invoiceId': invoiceId
      };
      let queryParams = {
        'marketplaceId': marketplaceId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetInvoiceResponse;

      return this.apiClient.callApi(
        '/tax/invoices/2024-06-19/invoices/{invoiceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns invoice data for the specified invoice. This operation returns only a subset of the invoices data; refer to the response definition to get all the possible attributes. To get the full invoice, use the `createInvoicesExport` operation to start an export request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} marketplaceId The marketplace from which you want the invoice.
     * @param {String} invoiceId The invoice identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoiceResponse}
     */
    getInvoice(marketplaceId, invoiceId) {
      return this.getInvoiceWithHttpInfo(marketplaceId, invoiceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns invoice details for the invoices that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} marketplaceId The response includes only the invoices that match the specified marketplace.
     * @param {Object} opts Optional parameters
     * @param {String} opts.transactionIdentifierName The name of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the `transactionIdentifierId` field.Use the `getInvoicesAttributes` operation to check `transactionIdentifierName` options.
     * @param {Number} opts.pageSize The maximum number of invoices you want to return in a single call.  Minimum: 1  Maximum: 200
     * @param {Date} opts.dateEnd The latest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is the current date-time.
     * @param {String} opts.transactionType The marketplace-specific classification of the transaction type for which the invoice was created. Use the `getInvoicesAttributes` operation to check `transactionType` options.
     * @param {String} opts.transactionIdentifierId The ID of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the `transactionIdentifierName` field.
     * @param {Date} opts.dateStart The earliest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 24 hours prior to the time of the request.
     * @param {String} opts.series Return invoices with the specified series number.
     * @param {String} opts.nextToken The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
     * @param {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/String} opts.sortOrder Sort the invoices in the response in ascending or descending order.
     * @param {String} opts.invoiceType The marketplace-specific classification of the invoice type. Use the `getInvoicesAttributes` operation to check `invoiceType` options.
     * @param {Array.<String>} opts.statuses A list of statuses that you can use to filter invoices. Use the `getInvoicesAttributes` operation to check invoice status options.  Min count: 1
     * @param {String} opts.externalInvoiceId Return invoices that match this external ID. This is typically the Government Invoice ID.
     * @param {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/String} opts.sortBy The attribute by which you want to sort the invoices in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesResponse} and HTTP response
     */
    getInvoicesWithHttpInfo(marketplaceId, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'marketplaceId' is set
      if (marketplaceId === undefined || marketplaceId === null) {
        throw new Error("Missing the required parameter 'marketplaceId' when calling getInvoices");
      }


      let pathParams = {
      };
      let queryParams = {
        'transactionIdentifierName': opts['transactionIdentifierName'],
        'pageSize': opts['pageSize'],
        'dateEnd': opts['dateEnd'],
        'marketplaceId': marketplaceId,
        'transactionType': opts['transactionType'],
        'transactionIdentifierId': opts['transactionIdentifierId'],
        'dateStart': opts['dateStart'],
        'series': opts['series'],
        'nextToken': opts['nextToken'],
        'sortOrder': opts['sortOrder'],
        'invoiceType': opts['invoiceType'],
        'statuses': this.apiClient.buildCollectionParam(opts['statuses'], 'csv'),
        'externalInvoiceId': opts['externalInvoiceId'],
        'sortBy': opts['sortBy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetInvoicesResponse;

      return this.apiClient.callApi(
        '/tax/invoices/2024-06-19/invoices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns invoice details for the invoices that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} marketplaceId The response includes only the invoices that match the specified marketplace.
     * @param {Object} opts Optional parameters
     * @param {String} opts.transactionIdentifierName The name of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the `transactionIdentifierId` field.Use the `getInvoicesAttributes` operation to check `transactionIdentifierName` options.
     * @param {Number} opts.pageSize The maximum number of invoices you want to return in a single call.  Minimum: 1  Maximum: 200
     * @param {Date} opts.dateEnd The latest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is the current date-time.
     * @param {String} opts.transactionType The marketplace-specific classification of the transaction type for which the invoice was created. Use the `getInvoicesAttributes` operation to check `transactionType` options.
     * @param {String} opts.transactionIdentifierId The ID of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the `transactionIdentifierName` field.
     * @param {Date} opts.dateStart The earliest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 24 hours prior to the time of the request.
     * @param {String} opts.series Return invoices with the specified series number.
     * @param {String} opts.nextToken The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
     * @param {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/String} opts.sortOrder Sort the invoices in the response in ascending or descending order.
     * @param {String} opts.invoiceType The marketplace-specific classification of the invoice type. Use the `getInvoicesAttributes` operation to check `invoiceType` options.
     * @param {Array.<String>} opts.statuses A list of statuses that you can use to filter invoices. Use the `getInvoicesAttributes` operation to check invoice status options.  Min count: 1
     * @param {String} opts.externalInvoiceId Return invoices that match this external ID. This is typically the Government Invoice ID.
     * @param {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/String} opts.sortBy The attribute by which you want to sort the invoices in the response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesResponse}
     */
    getInvoices(marketplaceId, opts) {
      return this.getInvoicesWithHttpInfo(marketplaceId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns marketplace-dependent schemas and their respective set of possible values.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} marketplaceId The marketplace identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesAttributesResponse} and HTTP response
     */
    getInvoicesAttributesWithHttpInfo(marketplaceId) {
      let postBody = null;

      // verify the required parameter 'marketplaceId' is set
      if (marketplaceId === undefined || marketplaceId === null) {
        throw new Error("Missing the required parameter 'marketplaceId' when calling getInvoicesAttributes");
      }


      let pathParams = {
      };
      let queryParams = {
        'marketplaceId': marketplaceId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetInvoicesAttributesResponse;

      return this.apiClient.callApi(
        '/tax/invoices/2024-06-19/attributes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns marketplace-dependent schemas and their respective set of possible values.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} marketplaceId The marketplace identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesAttributesResponse}
     */
    getInvoicesAttributes(marketplaceId) {
      return this.getInvoicesAttributesWithHttpInfo(marketplaceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the invoice document's ID and URL. Use the URL to download the ZIP file, which contains the invoices from the corresponding `createInvoicesExport` request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} invoicesDocumentId The export document identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesDocumentResponse} and HTTP response
     */
    getInvoicesDocumentWithHttpInfo(invoicesDocumentId) {
      let postBody = null;

      // verify the required parameter 'invoicesDocumentId' is set
      if (invoicesDocumentId === undefined || invoicesDocumentId === null) {
        throw new Error("Missing the required parameter 'invoicesDocumentId' when calling getInvoicesDocument");
      }


      let pathParams = {
        'invoicesDocumentId': invoicesDocumentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetInvoicesDocumentResponse;

      return this.apiClient.callApi(
        '/tax/invoices/2024-06-19/documents/{invoicesDocumentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the invoice document's ID and URL. Use the URL to download the ZIP file, which contains the invoices from the corresponding `createInvoicesExport` request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} invoicesDocumentId The export document identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesDocumentResponse}
     */
    getInvoicesDocument(invoicesDocumentId) {
      return this.getInvoicesDocumentWithHttpInfo(invoicesDocumentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns invoice export details (including the `exportDocumentId`, if available) for the export that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} exportId The unique identifier for the export.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesExportResponse} and HTTP response
     */
    getInvoicesExportWithHttpInfo(exportId) {
      let postBody = null;

      // verify the required parameter 'exportId' is set
      if (exportId === undefined || exportId === null) {
        throw new Error("Missing the required parameter 'exportId' when calling getInvoicesExport");
      }


      let pathParams = {
        'exportId': exportId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetInvoicesExportResponse;

      return this.apiClient.callApi(
        '/tax/invoices/2024-06-19/exports/{exportId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns invoice export details (including the `exportDocumentId`, if available) for the export that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} exportId The unique identifier for the export.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesExportResponse}
     */
    getInvoicesExport(exportId) {
      return this.getInvoicesExportWithHttpInfo(exportId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns invoice exports details for exports that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} marketplaceId The returned exports match the specified marketplace.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.dateStart The earliest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 30 days ago.
     * @param {String} opts.nextToken The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
     * @param {Number} opts.pageSize The maximum number of invoices to return in a single call.  Minimum: 1  Maximum: 100
     * @param {Date} opts.dateEnd The latest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default value is the time of the request.
     * @param {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/String} opts.status Return exports matching the status specified. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesExportsResponse} and HTTP response
     */
    getInvoicesExportsWithHttpInfo(marketplaceId, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'marketplaceId' is set
      if (marketplaceId === undefined || marketplaceId === null) {
        throw new Error("Missing the required parameter 'marketplaceId' when calling getInvoicesExports");
      }


      let pathParams = {
      };
      let queryParams = {
        'marketplaceId': marketplaceId,
        'dateStart': opts['dateStart'],
        'nextToken': opts['nextToken'],
        'pageSize': opts['pageSize'],
        'dateEnd': opts['dateEnd'],
        'status': opts['status']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetInvoicesExportsResponse;

      return this.apiClient.callApi(
        '/tax/invoices/2024-06-19/exports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns invoice exports details for exports that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 20 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} marketplaceId The returned exports match the specified marketplace.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.dateStart The earliest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 30 days ago.
     * @param {String} opts.nextToken The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
     * @param {Number} opts.pageSize The maximum number of invoices to return in a single call.  Minimum: 1  Maximum: 100
     * @param {Date} opts.dateEnd The latest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default value is the time of the request.
     * @param {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/String} opts.status Return exports matching the status specified. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/GetInvoicesExportsResponse}
     */
    getInvoicesExports(marketplaceId, opts) {
      return this.getInvoicesExportsWithHttpInfo(marketplaceId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
