# SellingPartnerApiForFinances.AffordabilityExpenseEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazonOrderId** | **String** | An Amazon-defined identifier for an order. | [optional] 
**postedDate** | [**ModelDate**](ModelDate.md) | The date and time when the financial event was created. | [optional] 
**marketplaceId** | **String** | The Amazon-defined marketplace identifier. | [optional] 
**transactionType** | **String** | The type of transaction.   Possible values:  * `Charge`: an affordability promotion expense. * `Refund`: an affordability promotion expense reversal. | [optional] 
**baseExpense** | [**Currency**](Currency.md) | The amount charged for clicks incurred under the Sponsored Products program. | [optional] 
**taxTypeCGST** | [**Currency**](Currency.md) | Central Goods and Service Tax, charged and collected by the central government. | 
**taxTypeSGST** | [**Currency**](Currency.md) | State Goods and Service Tax, charged and collected by the state government. | 
**taxTypeIGST** | [**Currency**](Currency.md) | Integrated Goods and Service Tax, charged and collected by the central government. | 
**totalExpense** | [**Currency**](Currency.md) | The total amount charged to the seller. `TotalExpense` = `BaseExpense` + `TaxTypeIGST` + `TaxTypeCGST` + `TaxTypeSGST`. | [optional] 


