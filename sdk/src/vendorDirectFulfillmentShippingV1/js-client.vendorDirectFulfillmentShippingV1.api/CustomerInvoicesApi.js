/*
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor's shipping data.
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
import {GetCustomerInvoiceResponse} from '../js-client.vendorDirectFulfillmentShippingV1.model/GetCustomerInvoiceResponse.js';
import {GetCustomerInvoicesResponse} from '../js-client.vendorDirectFulfillmentShippingV1.model/GetCustomerInvoicesResponse.js';

/**
* CustomerInvoices service.
* @module vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.api/CustomerInvoicesApi
* @version v1
*/
export class CustomerInvoicesApi {

    /**
    * Constructs a new CustomerInvoicesApi. 
    * @alias module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.api/CustomerInvoicesApi
    * @class
    * @param {module:vendorDirectFulfillmentShippingV1/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:vendorDirectFulfillmentShippingV1/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a customer invoice based on the `purchaseOrderNumber` that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} purchaseOrderNumber Purchase order number of the shipment for which to return the invoice.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/GetCustomerInvoiceResponse} and HTTP response
     */
    getCustomerInvoiceWithHttpInfo(purchaseOrderNumber) {
      let postBody = null;

      // verify the required parameter 'purchaseOrderNumber' is set
      if (purchaseOrderNumber === undefined || purchaseOrderNumber === null) {
        throw new Error("Missing the required parameter 'purchaseOrderNumber' when calling getCustomerInvoice");
      }


      let pathParams = {
        'purchaseOrderNumber': purchaseOrderNumber
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetCustomerInvoiceResponse;

      return this.apiClient.callApi(
        '/vendor/directFulfillment/shipping/v1/customerInvoices/{purchaseOrderNumber}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a customer invoice based on the `purchaseOrderNumber` that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {String} purchaseOrderNumber Purchase order number of the shipment for which to return the invoice.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/GetCustomerInvoiceResponse}
     */
    getCustomerInvoice(purchaseOrderNumber) {
      return this.getCustomerInvoiceWithHttpInfo(purchaseOrderNumber)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of customer invoices created during a time frame that you specify. You define the  time frame using the `createdAfter` and `createdBefore` parameters. You must use both of these parameters. The date range to search must be no more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Date} createdAfter Orders that became available after this date and time will be included in the result. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date/time format.
     * @param {Date} createdBefore Orders that became available before this date and time will be included in the result. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date/time format.
     * @param {Object} opts Optional parameters
     * @param {String} opts.shipFromPartyId The vendor `warehouseId` for order fulfillment. If not specified, the result will contain orders for all warehouses.
     * @param {Number} opts.limit The limit to the number of records returned
     * @param {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/String} opts.sortOrder Sort ASC or DESC by order creation date.
     * @param {String} opts.nextToken Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/GetCustomerInvoicesResponse} and HTTP response
     */
    getCustomerInvoicesWithHttpInfo(createdAfter, createdBefore, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'createdAfter' is set
      if (createdAfter === undefined || createdAfter === null) {
        throw new Error("Missing the required parameter 'createdAfter' when calling getCustomerInvoices");
      }

      // verify the required parameter 'createdBefore' is set
      if (createdBefore === undefined || createdBefore === null) {
        throw new Error("Missing the required parameter 'createdBefore' when calling getCustomerInvoices");
      }


      let pathParams = {
      };
      let queryParams = {
        'shipFromPartyId': opts['shipFromPartyId'],
        'limit': opts['limit'],
        'createdAfter': createdAfter,
        'createdBefore': createdBefore,
        'sortOrder': opts['sortOrder'],
        'nextToken': opts['nextToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetCustomerInvoicesResponse;

      return this.apiClient.callApi(
        '/vendor/directFulfillment/shipping/v1/customerInvoices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a list of customer invoices created during a time frame that you specify. You define the  time frame using the `createdAfter` and `createdBefore` parameters. You must use both of these parameters. The date range to search must be no more than 7 days.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {Date} createdAfter Orders that became available after this date and time will be included in the result. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date/time format.
     * @param {Date} createdBefore Orders that became available before this date and time will be included in the result. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date/time format.
     * @param {Object} opts Optional parameters
     * @param {String} opts.shipFromPartyId The vendor `warehouseId` for order fulfillment. If not specified, the result will contain orders for all warehouses.
     * @param {Number} opts.limit The limit to the number of records returned
     * @param {module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/String} opts.sortOrder Sort ASC or DESC by order creation date.
     * @param {String} opts.nextToken Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:vendorDirectFulfillmentShippingV1/js-client.vendorDirectFulfillmentShippingV1.model/GetCustomerInvoicesResponse}
     */
    getCustomerInvoices(createdAfter, createdBefore, opts) {
      return this.getCustomerInvoicesWithHttpInfo(createdAfter, createdBefore, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
