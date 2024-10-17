# TheSellingPartnerApiForFinances.ListTransactionsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nextToken** | **String** | The response includes `nextToken` when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages. | [optional] 
**transactions** | [**Transactions**](Transactions.md) |  | [optional] 


