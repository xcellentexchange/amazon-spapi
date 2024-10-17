# SellingPartnerApiForListingsItems.PatchOperation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | **String** | Type of JSON Patch operation. Supported JSON Patch operations include add, replace, and delete. Refer to [JavaScript Object Notation (JSON) Patch](https://tools.ietf.org/html/rfc6902) for more information. | 
**path** | **String** | JSON Pointer path of the element to patch. Refer to [JavaScript Object Notation (JSON) Patch](https://tools.ietf.org/html/rfc6902) for more information. | 
**value** | **[Object]** | JSON value to add, replace, or delete. | [optional] 


<a name="OpEnum"></a>
## Enum: OpEnum


* `add` (value: `"add"`)

* `replace` (value: `"replace"`)

* `_delete` (value: `"delete"`)




