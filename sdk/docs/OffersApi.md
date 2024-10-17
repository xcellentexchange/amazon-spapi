# SellingPartnerApiForReplenishment.OffersApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listOfferMetrics**](OffersApi.md#listOfferMetrics) | **POST** /replenishment/2022-11-07/offers/metrics/search | 
[**listOffers**](OffersApi.md#listOffers) | **POST** /replenishment/2022-11-07/offers/search | 


<a name="listOfferMetrics"></a>
# **listOfferMetrics**
> ListOfferMetricsResponse listOfferMetrics(opts)



Returns aggregated replenishment program metrics for a selling partner's offers.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForReplenishment} from 'selling_partner_api_for_replenishment';

let apiInstance = new SellingPartnerApiForReplenishment.OffersApi();

let opts = { 
  'body': new SellingPartnerApiForReplenishment.ListOfferMetricsRequest() // ListOfferMetricsRequest | The request body for the `listOfferMetrics` operation.
};
apiInstance.listOfferMetrics(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ListOfferMetricsRequest**](ListOfferMetricsRequest.md)| The request body for the `listOfferMetrics` operation. | [optional] 

### Return type

[**ListOfferMetricsResponse**](ListOfferMetricsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listOffers"></a>
# **listOffers**
> ListOffersResponse listOffers(opts)



Returns the details of a selling partner's replenishment program offers.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForReplenishment} from 'selling_partner_api_for_replenishment';

let apiInstance = new SellingPartnerApiForReplenishment.OffersApi();

let opts = { 
  'body': new SellingPartnerApiForReplenishment.ListOffersRequest() // ListOffersRequest | The request body for the `listOffers` operation.
};
apiInstance.listOffers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ListOffersRequest**](ListOffersRequest.md)| The request body for the `listOffers` operation. | [optional] 

### Return type

[**ListOffersResponse**](ListOffersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

