# SellingPartnerApiForPricing.ProductPricingApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompetitiveSummary**](ProductPricingApi.md#getCompetitiveSummary) | **POST** /batches/products/pricing/2022-05-01/items/competitiveSummary | 
[**getFeaturedOfferExpectedPriceBatch**](ProductPricingApi.md#getFeaturedOfferExpectedPriceBatch) | **POST** /batches/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice | 


<a name="getCompetitiveSummary"></a>
# **getCompetitiveSummary**
> CompetitiveSummaryBatchResponse getCompetitiveSummary(requests)



Returns the competitive summary response including featured buying options for the ASIN and `marketplaceId` combination.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForPricing} from 'selling_partner_api_for_pricing';

let apiInstance = new SellingPartnerApiForPricing.ProductPricingApi();

let requests = new SellingPartnerApiForPricing.CompetitiveSummaryBatchRequest(); // CompetitiveSummaryBatchRequest | The batch of `getCompetitiveSummary` requests.

apiInstance.getCompetitiveSummary(requests).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requests** | [**CompetitiveSummaryBatchRequest**](CompetitiveSummaryBatchRequest.md)| The batch of `getCompetitiveSummary` requests. | 

### Return type

[**CompetitiveSummaryBatchResponse**](CompetitiveSummaryBatchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeaturedOfferExpectedPriceBatch"></a>
# **getFeaturedOfferExpectedPriceBatch**
> GetFeaturedOfferExpectedPriceBatchResponse getFeaturedOfferExpectedPriceBatch(getFeaturedOfferExpectedPriceBatchRequestBody)



Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed, because competing offers may change, and different offers may be featured based on other factors, including fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForPricing} from 'selling_partner_api_for_pricing';

let apiInstance = new SellingPartnerApiForPricing.ProductPricingApi();

let getFeaturedOfferExpectedPriceBatchRequestBody = new SellingPartnerApiForPricing.GetFeaturedOfferExpectedPriceBatchRequest(); // GetFeaturedOfferExpectedPriceBatchRequest | The batch of `getFeaturedOfferExpectedPrice` requests.

apiInstance.getFeaturedOfferExpectedPriceBatch(getFeaturedOfferExpectedPriceBatchRequestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getFeaturedOfferExpectedPriceBatchRequestBody** | [**GetFeaturedOfferExpectedPriceBatchRequest**](GetFeaturedOfferExpectedPriceBatchRequest.md)| The batch of `getFeaturedOfferExpectedPrice` requests. | 

### Return type

[**GetFeaturedOfferExpectedPriceBatchResponse**](GetFeaturedOfferExpectedPriceBatchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

