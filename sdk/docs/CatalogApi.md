# SellingPartnerApiForCatalogItems.CatalogApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCatalogItem**](CatalogApi.md#getCatalogItem) | **GET** /catalog/2022-04-01/items/{asin} | 
[**searchCatalogItems**](CatalogApi.md#searchCatalogItems) | **GET** /catalog/2022-04-01/items | 


<a name="getCatalogItem"></a>
# **getCatalogItem**
> Item getCatalogItem(asin, marketplaceIds, opts)



Retrieves details for an item in the Amazon catalog.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to the [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForCatalogItems} from 'selling_partner_api_for_catalog_items';

let apiInstance = new SellingPartnerApiForCatalogItems.CatalogApi();

let asin = "asin_example"; // String | The Amazon Standard Identification Number (ASIN) of the item.

let marketplaceIds = ["ATVPDKIKX0DER"]; // [String] | A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.

let opts = { 
  'includedData': ["[\"summaries\"]"], // [String] | A comma-delimited list of data sets to include in the response. Default: `summaries`.
  'locale': "en_US" // String | Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
};
apiInstance.getCatalogItem(asin, marketplaceIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asin** | **String**| The Amazon Standard Identification Number (ASIN) of the item. | 
 **marketplaceIds** | [**[String]**](String.md)| A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces. | 
 **includedData** | [**[String]**](String.md)| A comma-delimited list of data sets to include in the response. Default: `summaries`. | [optional] [default to ["summaries"]]
 **locale** | **String**| Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace. | [optional] 

### Return type

[**Item**](Item.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchCatalogItems"></a>
# **searchCatalogItems**
> ItemSearchResults searchCatalogItems(marketplaceIds, opts)



Search for and return a list of Amazon catalog items and associated information either by identifier or by keywords.  **Usage Plans:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to the [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example
```javascript
import {SellingPartnerApiForCatalogItems} from 'selling_partner_api_for_catalog_items';

let apiInstance = new SellingPartnerApiForCatalogItems.CatalogApi();

let marketplaceIds = ["ATVPDKIKX0DER"]; // [String] | A comma-delimited list of Amazon marketplace identifiers for the request.

let opts = { 
  'identifiers': ["shoes"], // [String] | A comma-delimited list of product identifiers to search the Amazon catalog for. **Note:** Cannot be used with `keywords`.
  'identifiersType': "ASIN", // String | Type of product identifiers to search the Amazon catalog for. **Note:** Required when `identifiers` are provided.
  'includedData': ["[\"summaries\"]"], // [String] | A comma-delimited list of data sets to include in the response. Default: `summaries`.
  'locale': "en_US", // String | Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
  'sellerId': "sellerId_example", // String | A selling partner identifier, such as a seller account or vendor code. **Note:** Required when `identifiersType` is `SKU`.
  'keywords': ["shoes"], // [String] | A comma-delimited list of words to search the Amazon catalog for. **Note:** Cannot be used with `identifiers`.
  'brandNames': ["Beautiful Boats"], // [String] | A comma-delimited list of brand names to limit the search for `keywords`-based queries. **Note:** Cannot be used with `identifiers`.
  'classificationIds': ["12345678"], // [String] | A comma-delimited list of classification identifiers to limit the search for `keywords`-based queries. **Note:** Cannot be used with `identifiers`.
  'pageSize': 10, // Number | Number of results to be returned per page.
  'pageToken': "sdlkj234lkj234lksjdflkjwdflkjsfdlkj234234234234", // String | A token to fetch a certain page when there are multiple pages worth of results.
  'keywordsLocale': "en_US" // String | The language of the keywords provided for `keywords`-based queries. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with `identifiers`.
};
apiInstance.searchCatalogItems(marketplaceIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceIds** | [**[String]**](String.md)| A comma-delimited list of Amazon marketplace identifiers for the request. | 
 **identifiers** | [**[String]**](String.md)| A comma-delimited list of product identifiers to search the Amazon catalog for. **Note:** Cannot be used with `keywords`. | [optional] 
 **identifiersType** | **String**| Type of product identifiers to search the Amazon catalog for. **Note:** Required when `identifiers` are provided. | [optional] 
 **includedData** | [**[String]**](String.md)| A comma-delimited list of data sets to include in the response. Default: `summaries`. | [optional] [default to ["summaries"]]
 **locale** | **String**| Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace. | [optional] 
 **sellerId** | **String**| A selling partner identifier, such as a seller account or vendor code. **Note:** Required when `identifiersType` is `SKU`. | [optional] 
 **keywords** | [**[String]**](String.md)| A comma-delimited list of words to search the Amazon catalog for. **Note:** Cannot be used with `identifiers`. | [optional] 
 **brandNames** | [**[String]**](String.md)| A comma-delimited list of brand names to limit the search for `keywords`-based queries. **Note:** Cannot be used with `identifiers`. | [optional] 
 **classificationIds** | [**[String]**](String.md)| A comma-delimited list of classification identifiers to limit the search for `keywords`-based queries. **Note:** Cannot be used with `identifiers`. | [optional] 
 **pageSize** | **Number**| Number of results to be returned per page. | [optional] [default to 10]
 **pageToken** | **String**| A token to fetch a certain page when there are multiple pages worth of results. | [optional] 
 **keywordsLocale** | **String**| The language of the keywords provided for `keywords`-based queries. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with `identifiers`. | [optional] 

### Return type

[**ItemSearchResults**](ItemSearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

