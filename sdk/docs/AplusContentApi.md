# SellingPartnerApiForAContentManagement.AplusContentApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContentDocument**](AplusContentApi.md#createContentDocument) | **POST** /aplus/2020-11-01/contentDocuments | 
[**getContentDocument**](AplusContentApi.md#getContentDocument) | **GET** /aplus/2020-11-01/contentDocuments/{contentReferenceKey} | 
[**listContentDocumentAsinRelations**](AplusContentApi.md#listContentDocumentAsinRelations) | **GET** /aplus/2020-11-01/contentDocuments/{contentReferenceKey}/asins | 
[**postContentDocumentApprovalSubmission**](AplusContentApi.md#postContentDocumentApprovalSubmission) | **POST** /aplus/2020-11-01/contentDocuments/{contentReferenceKey}/approvalSubmissions | 
[**postContentDocumentAsinRelations**](AplusContentApi.md#postContentDocumentAsinRelations) | **POST** /aplus/2020-11-01/contentDocuments/{contentReferenceKey}/asins | 
[**postContentDocumentSuspendSubmission**](AplusContentApi.md#postContentDocumentSuspendSubmission) | **POST** /aplus/2020-11-01/contentDocuments/{contentReferenceKey}/suspendSubmissions | 
[**searchContentDocuments**](AplusContentApi.md#searchContentDocuments) | **GET** /aplus/2020-11-01/contentDocuments | 
[**searchContentPublishRecords**](AplusContentApi.md#searchContentPublishRecords) | **GET** /aplus/2020-11-01/contentPublishRecords | 
[**updateContentDocument**](AplusContentApi.md#updateContentDocument) | **POST** /aplus/2020-11-01/contentDocuments/{contentReferenceKey} | 
[**validateContentDocumentAsinRelations**](AplusContentApi.md#validateContentDocumentAsinRelations) | **POST** /aplus/2020-11-01/contentAsinValidations | 


<a name="createContentDocument"></a>
# **createContentDocument**
> PostContentDocumentResponse createContentDocument(marketplaceId, postContentDocumentRequest)



Creates a new A+ Content document.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.

### Example
```javascript
import {SellingPartnerApiForAContentManagement} from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();

let marketplaceId = "marketplaceId_example"; // String | The identifier for the marketplace where the A+ Content is published.

let postContentDocumentRequest = new SellingPartnerApiForAContentManagement.PostContentDocumentRequest(); // PostContentDocumentRequest | The content document request details.

apiInstance.createContentDocument(marketplaceId, postContentDocumentRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The identifier for the marketplace where the A+ Content is published. | 
 **postContentDocumentRequest** | [**PostContentDocumentRequest**](PostContentDocumentRequest.md)| The content document request details. | 

### Return type

[**PostContentDocumentResponse**](PostContentDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContentDocument"></a>
# **getContentDocument**
> GetContentDocumentResponse getContentDocument(contentReferenceKey, marketplaceId, includedDataSet)



Returns an A+ Content document, if available.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.

### Example
```javascript
import {SellingPartnerApiForAContentManagement} from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();

let contentReferenceKey = "contentReferenceKey_example"; // String | The unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ Content identifier.

let marketplaceId = "marketplaceId_example"; // String | The identifier for the marketplace where the A+ Content is published.

let includedDataSet = ["includedDataSet_example"]; // [String] | The set of A+ Content data types to include in the response.

apiInstance.getContentDocument(contentReferenceKey, marketplaceId, includedDataSet).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentReferenceKey** | **String**| The unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ Content identifier. | 
 **marketplaceId** | **String**| The identifier for the marketplace where the A+ Content is published. | 
 **includedDataSet** | [**[String]**](String.md)| The set of A+ Content data types to include in the response. | 

### Return type

[**GetContentDocumentResponse**](GetContentDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listContentDocumentAsinRelations"></a>
# **listContentDocumentAsinRelations**
> ListContentDocumentAsinRelationsResponse listContentDocumentAsinRelations(contentReferenceKey, marketplaceId, opts)



Returns a list of ASINs related to the specified A+ Content document, if available. If you do not include the asinSet parameter, the operation returns all ASINs related to the content document.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.

### Example
```javascript
import {SellingPartnerApiForAContentManagement} from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();

let contentReferenceKey = "contentReferenceKey_example"; // String | The unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ Content identifier.

let marketplaceId = "marketplaceId_example"; // String | The identifier for the marketplace where the A+ Content is published.

let opts = { 
  'includedDataSet': ["includedDataSet_example"], // [String] | The set of A+ Content data types to include in the response. If you do not include this parameter, the operation returns the related ASINs without metadata.
  'asinSet': ["asinSet_example"], // [String] | The set of ASINs.
  'pageToken': "pageToken_example" // String | A page token from the nextPageToken response element returned by your previous call to this operation. nextPageToken is returned when the results of a call exceed the page size. To get the next page of results, call the operation and include pageToken as the only parameter. Specifying pageToken with any other parameter will cause the request to fail. When no nextPageToken value is returned there are no more pages to return. A pageToken value is not usable across different operations.
};
apiInstance.listContentDocumentAsinRelations(contentReferenceKey, marketplaceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentReferenceKey** | **String**| The unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ Content identifier. | 
 **marketplaceId** | **String**| The identifier for the marketplace where the A+ Content is published. | 
 **includedDataSet** | [**[String]**](String.md)| The set of A+ Content data types to include in the response. If you do not include this parameter, the operation returns the related ASINs without metadata. | [optional] 
 **asinSet** | [**[String]**](String.md)| The set of ASINs. | [optional] 
 **pageToken** | **String**| A page token from the nextPageToken response element returned by your previous call to this operation. nextPageToken is returned when the results of a call exceed the page size. To get the next page of results, call the operation and include pageToken as the only parameter. Specifying pageToken with any other parameter will cause the request to fail. When no nextPageToken value is returned there are no more pages to return. A pageToken value is not usable across different operations. | [optional] 

### Return type

[**ListContentDocumentAsinRelationsResponse**](ListContentDocumentAsinRelationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postContentDocumentApprovalSubmission"></a>
# **postContentDocumentApprovalSubmission**
> PostContentDocumentApprovalSubmissionResponse postContentDocumentApprovalSubmission(contentReferenceKey, marketplaceId)



Submits an A+ Content document for review, approval, and publishing.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.

### Example
```javascript
import {SellingPartnerApiForAContentManagement} from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();

let contentReferenceKey = "contentReferenceKey_example"; // String | The unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ content identifier.

let marketplaceId = "marketplaceId_example"; // String | The identifier for the marketplace where the A+ Content is published.

apiInstance.postContentDocumentApprovalSubmission(contentReferenceKey, marketplaceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentReferenceKey** | **String**| The unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ content identifier. | 
 **marketplaceId** | **String**| The identifier for the marketplace where the A+ Content is published. | 

### Return type

[**PostContentDocumentApprovalSubmissionResponse**](PostContentDocumentApprovalSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postContentDocumentAsinRelations"></a>
# **postContentDocumentAsinRelations**
> PostContentDocumentAsinRelationsResponse postContentDocumentAsinRelations(contentReferenceKey, marketplaceId, postContentDocumentAsinRelationsRequest)



Replaces all ASINs related to the specified A+ Content document, if available. This may add or remove ASINs, depending on the current set of related ASINs. Removing an ASIN has the side effect of suspending the content document from that ASIN.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.

### Example
```javascript
import {SellingPartnerApiForAContentManagement} from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();

let contentReferenceKey = "contentReferenceKey_example"; // String | The unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ content identifier.

let marketplaceId = "marketplaceId_example"; // String | The identifier for the marketplace where the A+ Content is published.

let postContentDocumentAsinRelationsRequest = new SellingPartnerApiForAContentManagement.PostContentDocumentAsinRelationsRequest(); // PostContentDocumentAsinRelationsRequest | The content document ASIN relations request details.

apiInstance.postContentDocumentAsinRelations(contentReferenceKey, marketplaceId, postContentDocumentAsinRelationsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentReferenceKey** | **String**| The unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ content identifier. | 
 **marketplaceId** | **String**| The identifier for the marketplace where the A+ Content is published. | 
 **postContentDocumentAsinRelationsRequest** | [**PostContentDocumentAsinRelationsRequest**](PostContentDocumentAsinRelationsRequest.md)| The content document ASIN relations request details. | 

### Return type

[**PostContentDocumentAsinRelationsResponse**](PostContentDocumentAsinRelationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postContentDocumentSuspendSubmission"></a>
# **postContentDocumentSuspendSubmission**
> PostContentDocumentSuspendSubmissionResponse postContentDocumentSuspendSubmission(contentReferenceKey, marketplaceId)



Submits a request to suspend visible A+ Content. This neither deletes the content document nor the ASIN relations.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.

### Example
```javascript
import {SellingPartnerApiForAContentManagement} from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();

let contentReferenceKey = "contentReferenceKey_example"; // String | The unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ content identifier.

let marketplaceId = "marketplaceId_example"; // String | The identifier for the marketplace where the A+ Content is published.

apiInstance.postContentDocumentSuspendSubmission(contentReferenceKey, marketplaceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentReferenceKey** | **String**| The unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ content identifier. | 
 **marketplaceId** | **String**| The identifier for the marketplace where the A+ Content is published. | 

### Return type

[**PostContentDocumentSuspendSubmissionResponse**](PostContentDocumentSuspendSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchContentDocuments"></a>
# **searchContentDocuments**
> SearchContentDocumentsResponse searchContentDocuments(marketplaceId, opts)



Returns a list of all A+ Content documents assigned to a selling partner. This operation returns only the metadata of the A+ Content documents. Call the getContentDocument operation to get the actual contents of the A+ Content documents.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.

### Example
```javascript
import {SellingPartnerApiForAContentManagement} from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();

let marketplaceId = "marketplaceId_example"; // String | The identifier for the marketplace where the A+ Content is published.

let opts = { 
  'pageToken': "pageToken_example" // String | A page token from the nextPageToken response element returned by your previous call to this operation. nextPageToken is returned when the results of a call exceed the page size. To get the next page of results, call the operation and include pageToken as the only parameter. Specifying pageToken with any other parameter will cause the request to fail. When no nextPageToken value is returned there are no more pages to return. A pageToken value is not usable across different operations.
};
apiInstance.searchContentDocuments(marketplaceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The identifier for the marketplace where the A+ Content is published. | 
 **pageToken** | **String**| A page token from the nextPageToken response element returned by your previous call to this operation. nextPageToken is returned when the results of a call exceed the page size. To get the next page of results, call the operation and include pageToken as the only parameter. Specifying pageToken with any other parameter will cause the request to fail. When no nextPageToken value is returned there are no more pages to return. A pageToken value is not usable across different operations. | [optional] 

### Return type

[**SearchContentDocumentsResponse**](SearchContentDocumentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchContentPublishRecords"></a>
# **searchContentPublishRecords**
> SearchContentPublishRecordsResponse searchContentPublishRecords(marketplaceId, asin, opts)



Searches for A+ Content publishing records, if available.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.

### Example
```javascript
import {SellingPartnerApiForAContentManagement} from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();

let marketplaceId = "marketplaceId_example"; // String | The identifier for the marketplace where the A+ Content is published.

let asin = "asin_example"; // String | The Amazon Standard Identification Number (ASIN).

let opts = { 
  'pageToken': "pageToken_example" // String | A page token from the nextPageToken response element returned by your previous call to this operation. nextPageToken is returned when the results of a call exceed the page size. To get the next page of results, call the operation and include pageToken as the only parameter. Specifying pageToken with any other parameter will cause the request to fail. When no nextPageToken value is returned there are no more pages to return. A pageToken value is not usable across different operations.
};
apiInstance.searchContentPublishRecords(marketplaceId, asin, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The identifier for the marketplace where the A+ Content is published. | 
 **asin** | **String**| The Amazon Standard Identification Number (ASIN). | 
 **pageToken** | **String**| A page token from the nextPageToken response element returned by your previous call to this operation. nextPageToken is returned when the results of a call exceed the page size. To get the next page of results, call the operation and include pageToken as the only parameter. Specifying pageToken with any other parameter will cause the request to fail. When no nextPageToken value is returned there are no more pages to return. A pageToken value is not usable across different operations. | [optional] 

### Return type

[**SearchContentPublishRecordsResponse**](SearchContentPublishRecordsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContentDocument"></a>
# **updateContentDocument**
> PostContentDocumentResponse updateContentDocument(contentReferenceKey, marketplaceId, postContentDocumentRequest)



Updates an existing A+ Content document.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.

### Example
```javascript
import {SellingPartnerApiForAContentManagement} from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();

let contentReferenceKey = "contentReferenceKey_example"; // String | The unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ Content identifier.

let marketplaceId = "marketplaceId_example"; // String | The identifier for the marketplace where the A+ Content is published.

let postContentDocumentRequest = new SellingPartnerApiForAContentManagement.PostContentDocumentRequest(); // PostContentDocumentRequest | The content document request details.

apiInstance.updateContentDocument(contentReferenceKey, marketplaceId, postContentDocumentRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentReferenceKey** | **String**| The unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ Content identifier. | 
 **marketplaceId** | **String**| The identifier for the marketplace where the A+ Content is published. | 
 **postContentDocumentRequest** | [**PostContentDocumentRequest**](PostContentDocumentRequest.md)| The content document request details. | 

### Return type

[**PostContentDocumentResponse**](PostContentDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateContentDocumentAsinRelations"></a>
# **validateContentDocumentAsinRelations**
> ValidateContentDocumentAsinRelationsResponse validateContentDocumentAsinRelations(marketplaceId, postContentDocumentRequest, opts)



Checks if the A+ Content document is valid for use on a set of ASINs.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.

### Example
```javascript
import {SellingPartnerApiForAContentManagement} from 'selling_partner_api_for_a_content_management';

let apiInstance = new SellingPartnerApiForAContentManagement.AplusContentApi();

let marketplaceId = "marketplaceId_example"; // String | The identifier for the marketplace where the A+ Content is published.

let postContentDocumentRequest = new SellingPartnerApiForAContentManagement.PostContentDocumentRequest(); // PostContentDocumentRequest | The content document request details.

let opts = { 
  'asinSet': ["asinSet_example"] // [String] | The set of ASINs.
};
apiInstance.validateContentDocumentAsinRelations(marketplaceId, postContentDocumentRequest, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceId** | **String**| The identifier for the marketplace where the A+ Content is published. | 
 **postContentDocumentRequest** | [**PostContentDocumentRequest**](PostContentDocumentRequest.md)| The content document request details. | 
 **asinSet** | [**[String]**](String.md)| The set of ASINs. | [optional] 

### Return type

[**ValidateContentDocumentAsinRelationsResponse**](ValidateContentDocumentAsinRelationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

