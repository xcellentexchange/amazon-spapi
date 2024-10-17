/*
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from './ApiClient.js';
import {AdditionalDetails} from './js-client.vendorInvoices.model/AdditionalDetails.js';
import {Address} from './js-client.vendorInvoices.model/Address.js';
import {AllowanceDetails} from './js-client.vendorInvoices.model/AllowanceDetails.js';
import {ChargeDetails} from './js-client.vendorInvoices.model/ChargeDetails.js';
import {CreditNoteDetails} from './js-client.vendorInvoices.model/CreditNoteDetails.js';
import {DateTime} from './js-client.vendorInvoices.model/DateTime.js';
import {Decimal} from './js-client.vendorInvoices.model/Decimal.js';
import {Error} from './js-client.vendorInvoices.model/Error.js';
import {ErrorList} from './js-client.vendorInvoices.model/ErrorList.js';
import {Invoice} from './js-client.vendorInvoices.model/Invoice.js';
import {InvoiceItem} from './js-client.vendorInvoices.model/InvoiceItem.js';
import {ItemQuantity} from './js-client.vendorInvoices.model/ItemQuantity.js';
import {Money} from './js-client.vendorInvoices.model/Money.js';
import {PartyIdentification} from './js-client.vendorInvoices.model/PartyIdentification.js';
import {PaymentTerms} from './js-client.vendorInvoices.model/PaymentTerms.js';
import {SubmitInvoicesRequest} from './js-client.vendorInvoices.model/SubmitInvoicesRequest.js';
import {SubmitInvoicesResponse} from './js-client.vendorInvoices.model/SubmitInvoicesResponse.js';
import {TaxDetails} from './js-client.vendorInvoices.model/TaxDetails.js';
import {TaxRegistrationDetails} from './js-client.vendorInvoices.model/TaxRegistrationDetails.js';
import {TransactionId} from './js-client.vendorInvoices.model/TransactionId.js';
import {VendorPaymentsApi} from './js-client.vendorInvoices.api/VendorPaymentsApi.js';


/**
* The_Selling_Partner_API_for_Retail_Procurement_Payments_provides_programmatic_access_to_vendors_payments_data_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForRetailProcurementPayments = require('vendorInvoices/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForRetailProcurementPayments.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForRetailProcurementPayments.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['vendorInvoices/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForRetailProcurementPayments.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForRetailProcurementPayments.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module vendorInvoices/index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:vendorInvoices/ApiClient}
     */
    ApiClient,

    /**
     * The AdditionalDetails model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/AdditionalDetails}
     */
    AdditionalDetails,

    /**
     * The Address model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/Address}
     */
    Address,

    /**
     * The AllowanceDetails model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/AllowanceDetails}
     */
    AllowanceDetails,

    /**
     * The ChargeDetails model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/ChargeDetails}
     */
    ChargeDetails,

    /**
     * The CreditNoteDetails model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/CreditNoteDetails}
     */
    CreditNoteDetails,

    /**
     * The DateTime model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/DateTime}
     */
    DateTime,

    /**
     * The Decimal model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/Decimal}
     */
    Decimal,

    /**
     * The Error model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/ErrorList}
     */
    ErrorList,

    /**
     * The Invoice model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/Invoice}
     */
    Invoice,

    /**
     * The InvoiceItem model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/InvoiceItem}
     */
    InvoiceItem,

    /**
     * The ItemQuantity model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/ItemQuantity}
     */
    ItemQuantity,

    /**
     * The Money model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/Money}
     */
    Money,

    /**
     * The PartyIdentification model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/PartyIdentification}
     */
    PartyIdentification,

    /**
     * The PaymentTerms model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/PaymentTerms}
     */
    PaymentTerms,

    /**
     * The SubmitInvoicesRequest model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/SubmitInvoicesRequest}
     */
    SubmitInvoicesRequest,

    /**
     * The SubmitInvoicesResponse model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/SubmitInvoicesResponse}
     */
    SubmitInvoicesResponse,

    /**
     * The TaxDetails model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/TaxDetails}
     */
    TaxDetails,

    /**
     * The TaxRegistrationDetails model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/TaxRegistrationDetails}
     */
    TaxRegistrationDetails,

    /**
     * The TransactionId model constructor.
     * @property {module:vendorInvoices/js-client.vendorInvoices.model/TransactionId}
     */
    TransactionId,

    /**
    * The VendorPaymentsApi service constructor.
    * @property {module:vendorInvoices/js-client.vendorInvoices.api/VendorPaymentsApi}
    */
    VendorPaymentsApi
};
