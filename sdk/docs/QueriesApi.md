# SellingPartnerApiForDataKiosk.QueriesApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelQuery**](QueriesApi.md#cancelQuery) | **DELETE** /dataKiosk/2023-11-15/queries/{queryId} | 
[**createQuery**](QueriesApi.md#createQuery) | **POST** /dataKiosk/2023-11-15/queries | 
[**getDocument**](QueriesApi.md#getDocument) | **GET** /dataKiosk/2023-11-15/documents/{documentId} | 
[**getQueries**](QueriesApi.md#getQueries) | **GET** /dataKiosk/2023-11-15/queries | 
[**getQuery**](QueriesApi.md#getQuery) | **GET** /dataKiosk/2023-11-15/queries/{queryId} | 


<a name="cancelQuery"></a>
# **cancelQuery**
> cancelQuery(queryId)



Cancels the query specified by the `queryId` parameter. Only queries with a non-terminal `processingStatus` (`IN_QUEUE`, `IN_PROGRESS`) can be cancelled. Cancelling a query that already has a `processingStatus` of `CANCELLED` will no-op. Cancelled queries are returned in subsequent calls to the `getQuery` and `getQueries` operations.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForDataKiosk} from 'selling_partner_api_for_data_kiosk';

let apiInstance = new SellingPartnerApiForDataKiosk.QueriesApi();

let queryId = "queryId_example"; // String | The identifier for the query. This identifier is unique only in combination with a selling partner account ID.

apiInstance.cancelQuery(queryId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryId** | **String**| The identifier for the query. This identifier is unique only in combination with a selling partner account ID. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createQuery"></a>
# **createQuery**
> CreateQueryResponse createQuery(body)



Creates a Data Kiosk query request.  **Note:** The retention of a query varies based on the fields requested. Each field within a schema is annotated with a `@resultRetention` directive that defines how long a query containing that field will be retained. When a query contains multiple fields with different retentions, the shortest (minimum) retention is applied. The retention of a query's resulting documents always matches the retention of the query.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForDataKiosk} from 'selling_partner_api_for_data_kiosk';

let apiInstance = new SellingPartnerApiForDataKiosk.QueriesApi();

let body = new SellingPartnerApiForDataKiosk.CreateQuerySpecification(); // CreateQuerySpecification | The body of the request.

apiInstance.createQuery(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateQuerySpecification**](CreateQuerySpecification.md)| The body of the request. | 

### Return type

[**CreateQueryResponse**](CreateQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDocument"></a>
# **getDocument**
> GetDocumentResponse getDocument(documentId)



Returns the information required for retrieving a Data Kiosk document's contents. See the `createQuery` operation for details about document retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForDataKiosk} from 'selling_partner_api_for_data_kiosk';

let apiInstance = new SellingPartnerApiForDataKiosk.QueriesApi();

let documentId = "documentId_example"; // String | The identifier for the Data Kiosk document.

apiInstance.getDocument(documentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| The identifier for the Data Kiosk document. | 

### Return type

[**GetDocumentResponse**](GetDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQueries"></a>
# **getQueries**
> GetQueriesResponse getQueries(opts)



Returns details for the Data Kiosk queries that match the specified filters. See the `createQuery` operation for details about query retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForDataKiosk} from 'selling_partner_api_for_data_kiosk';

let apiInstance = new SellingPartnerApiForDataKiosk.QueriesApi();

let opts = { 
  'processingStatuses': ["processingStatuses_example"], // [String] | A list of processing statuses used to filter queries.
  'pageSize': 10, // Number | The maximum number of queries to return in a single call.
  'createdSince': new Date("2013-10-20T19:20:30+01:00"), // Date | The earliest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is 90 days ago.
  'createdUntil': new Date("2013-10-20T19:20:30+01:00"), // Date | The latest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is the time of the `getQueries` request.
  'paginationToken': "paginationToken_example" // String | A token to fetch a certain page of results when there are multiple pages of results available. The value of this token is fetched from the `pagination.nextToken` field returned in the `GetQueriesResponse` object. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of `pageSize` which can be modified between calls to `getQueries`. In the absence of this token value, `getQueries` returns the first page of results.
};
apiInstance.getQueries(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processingStatuses** | [**[String]**](String.md)| A list of processing statuses used to filter queries. | [optional] 
 **pageSize** | **Number**| The maximum number of queries to return in a single call. | [optional] [default to 10]
 **createdSince** | **Date**| The earliest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is 90 days ago. | [optional] 
 **createdUntil** | **Date**| The latest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is the time of the `getQueries` request. | [optional] 
 **paginationToken** | **String**| A token to fetch a certain page of results when there are multiple pages of results available. The value of this token is fetched from the `pagination.nextToken` field returned in the `GetQueriesResponse` object. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of `pageSize` which can be modified between calls to `getQueries`. In the absence of this token value, `getQueries` returns the first page of results. | [optional] 

### Return type

[**GetQueriesResponse**](GetQueriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getQuery"></a>
# **getQuery**
> Query getQuery(queryId)



Returns query details for the query specified by the `queryId` parameter. See the `createQuery` operation for details about query retention.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForDataKiosk} from 'selling_partner_api_for_data_kiosk';

let apiInstance = new SellingPartnerApiForDataKiosk.QueriesApi();

let queryId = "queryId_example"; // String | The query identifier.

apiInstance.getQuery(queryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryId** | **String**| The query identifier. | 

### Return type

[**Query**](Query.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

