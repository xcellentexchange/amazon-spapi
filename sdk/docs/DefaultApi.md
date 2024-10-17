# TheSellingPartnerApiForFinances.DefaultApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTransactions**](DefaultApi.md#listTransactions) | **GET** /finances/2024-06-19/transactions | 


<a name="listTransactions"></a>
# **listTransactions**
> ListTransactionsResponse listTransactions(postedAfter, opts)



Returns transactions for the given parameters. Orders from the last 48 hours might not be included in financial events.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 10 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table contains the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits).

### Example
```javascript
import {TheSellingPartnerApiForFinances} from 'the_selling_partner_api_for_finances';

let apiInstance = new TheSellingPartnerApiForFinances.DefaultApi();

let postedAfter = new Date("2023-01-12"); // Date | The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request.

let opts = { 
  'postedBefore': new Date("2023-02-12"), // Date | The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than `PostedAfter` and more than two minutes before the request was submitted. If `PostedAfter` and `PostedBefore` are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request.
  'marketplaceId': "ATIV93840DER", // String | The ID of the marketplace from which you want to retrieve transactions.
  'nextToken': "jehgri34yo7jr9e8f984tr9i4o" // String | The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.
};
apiInstance.listTransactions(postedAfter, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postedAfter** | **Date**| The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request. | 
 **postedBefore** | **Date**| The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than `PostedAfter` and more than two minutes before the request was submitted. If `PostedAfter` and `PostedBefore` are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request. | [optional] 
 **marketplaceId** | **String**| The ID of the marketplace from which you want to retrieve transactions. | [optional] 
 **nextToken** | **String**| The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages. | [optional] 

### Return type

[**ListTransactionsResponse**](ListTransactionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

