# SellingPartnerApiForDirectFulfillmentPayments.InvoiceDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceNumber** | **String** | The unique invoice number. | 
**invoiceDate** | **Date** | Invoice date. | 
**referenceNumber** | **String** | An additional unique reference number used for regulatory or other purposes. | [optional] 
**remitToParty** | [**PartyIdentification**](PartyIdentification.md) | Name, address and tax details of the party receiving the payment of this invoice. | 
**shipFromParty** | [**PartyIdentification**](PartyIdentification.md) | Warehouse code of the vendor as in the order. | 
**billToParty** | [**PartyIdentification**](PartyIdentification.md) | Name, address and tax details of the party to whom this invoice is issued. | [optional] 
**shipToCountryCode** | **String** | Ship-to country code. | [optional] 
**paymentTermsCode** | **String** | The payment terms for the invoice. | [optional] 
**invoiceTotal** | [**Money**](Money.md) | Total amount details of the invoice. | 
**taxTotals** | [**[TaxDetail]**](TaxDetail.md) | Individual tax details per line item. | [optional] 
**additionalDetails** | [**[AdditionalDetails]**](AdditionalDetails.md) | Additional details provided by the selling party, for tax-related or other purposes. | [optional] 
**chargeDetails** | [**[ChargeDetails]**](ChargeDetails.md) | Total charge amount details for all line items. | [optional] 
**items** | [**[InvoiceItem]**](InvoiceItem.md) | Provides the details of the items in this invoice. | 


