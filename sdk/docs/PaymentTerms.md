# SellingPartnerApiForRetailProcurementPayments.PaymentTerms

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The payment term type for the invoice. | [optional] 
**discountPercent** | [**Decimal**](Decimal.md) | The discount percent value, which is good until the discount due date. | [optional] 
**discountDueDays** | **Number** | The number of calendar days from the base date (Invoice date) until the discount is no longer valid. | [optional] 
**netDueDays** | **Number** | The number of calendar days from the base date (invoice date) until the total amount on the invoice is due. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `basic` (value: `"Basic"`)

* `endOfMonth` (value: `"EndOfMonth"`)

* `fixedDate` (value: `"FixedDate"`)

* `proximo` (value: `"Proximo"`)

* `paymentDueUponReceiptOfInvoice` (value: `"PaymentDueUponReceiptOfInvoice"`)

* `letterofCredit` (value: `"LetterofCredit"`)




