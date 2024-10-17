# SellingPartnerApiForRetailProcurementPayments.Invoice

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceType** | **String** | Identifies the type of invoice. | 
**id** | **String** | Unique number relating to the charges defined in this document. This will be invoice number if the document type is Invoice or CreditNote number if the document type is Credit Note. Failure to provide this reference will result in a rejection. | 
**referenceNumber** | **String** | An additional unique reference number used for regulatory or other purposes. | [optional] 
**_date** | **Date** | Date when the invoice/credit note information was generated in the origin's accounting system. The invoice date should be on or after the purchase order creation date. | 
**remitToParty** | [**PartyIdentification**](PartyIdentification.md) | Name, address, and tax details of the party receiving the payment of this invoice. | 
**shipToParty** | [**PartyIdentification**](PartyIdentification.md) | Name, address, and tax details of the party receiving a shipment of products. | [optional] 
**shipFromParty** | [**PartyIdentification**](PartyIdentification.md) | Name, address, and tax details of the party sending a shipment of products. | [optional] 
**billToParty** | [**PartyIdentification**](PartyIdentification.md) | Name, address, and tax details of the party to whom this invoice is issued. | [optional] 
**paymentTerms** | [**PaymentTerms**](PaymentTerms.md) | The payment terms for the invoice. | [optional] 
**invoiceTotal** | [**Money**](Money.md) | Total monetary amount charged in the invoice or full value of credit note to be paid including all relevant taxes. It is the total amount of invoice (including charges, less allowances) before terms discount (if discount is applicable). | 
**taxDetails** | [**[TaxDetails]**](TaxDetails.md) | Total tax amount details for all line items. | [optional] 
**additionalDetails** | [**[AdditionalDetails]**](AdditionalDetails.md) | Additional details provided by the selling party, for tax related or other purposes. | [optional] 
**chargeDetails** | [**[ChargeDetails]**](ChargeDetails.md) | Total charge amount details for all line items. | [optional] 
**allowanceDetails** | [**[AllowanceDetails]**](AllowanceDetails.md) | Total allowance amount details for all line items. | [optional] 
**items** | [**[InvoiceItem]**](InvoiceItem.md) | The list of invoice items. | [optional] 


<a name="InvoiceTypeEnum"></a>
## Enum: InvoiceTypeEnum


* `invoice` (value: `"Invoice"`)

* `creditNote` (value: `"CreditNote"`)




