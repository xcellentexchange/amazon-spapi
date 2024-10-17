/*
 * Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information that is relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range. 
 *
 * OpenAPI spec version: v0
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
import {AdhocDisbursementEvent} from './js-client.financesV0.model/AdhocDisbursementEvent.js';
import {AdhocDisbursementEventList} from './js-client.financesV0.model/AdhocDisbursementEventList.js';
import {AdjustmentEvent} from './js-client.financesV0.model/AdjustmentEvent.js';
import {AdjustmentEventList} from './js-client.financesV0.model/AdjustmentEventList.js';
import {AdjustmentItem} from './js-client.financesV0.model/AdjustmentItem.js';
import {AdjustmentItemList} from './js-client.financesV0.model/AdjustmentItemList.js';
import {AffordabilityExpenseEvent} from './js-client.financesV0.model/AffordabilityExpenseEvent.js';
import {AffordabilityExpenseEventList} from './js-client.financesV0.model/AffordabilityExpenseEventList.js';
import {BigDecimal} from './js-client.financesV0.model/BigDecimal.js';
import {CapacityReservationBillingEvent} from './js-client.financesV0.model/CapacityReservationBillingEvent.js';
import {CapacityReservationBillingEventList} from './js-client.financesV0.model/CapacityReservationBillingEventList.js';
import {ChargeComponent} from './js-client.financesV0.model/ChargeComponent.js';
import {ChargeComponentList} from './js-client.financesV0.model/ChargeComponentList.js';
import {ChargeInstrument} from './js-client.financesV0.model/ChargeInstrument.js';
import {ChargeInstrumentList} from './js-client.financesV0.model/ChargeInstrumentList.js';
import {ChargeRefundEvent} from './js-client.financesV0.model/ChargeRefundEvent.js';
import {ChargeRefundEventList} from './js-client.financesV0.model/ChargeRefundEventList.js';
import {ChargeRefundTransaction} from './js-client.financesV0.model/ChargeRefundTransaction.js';
import {ChargeRefundTransactions} from './js-client.financesV0.model/ChargeRefundTransactions.js';
import {CouponPaymentEvent} from './js-client.financesV0.model/CouponPaymentEvent.js';
import {CouponPaymentEventList} from './js-client.financesV0.model/CouponPaymentEventList.js';
import {Currency} from './js-client.financesV0.model/Currency.js';
import {DebtRecoveryEvent} from './js-client.financesV0.model/DebtRecoveryEvent.js';
import {DebtRecoveryEventList} from './js-client.financesV0.model/DebtRecoveryEventList.js';
import {DebtRecoveryItem} from './js-client.financesV0.model/DebtRecoveryItem.js';
import {DebtRecoveryItemList} from './js-client.financesV0.model/DebtRecoveryItemList.js';
import {DirectPayment} from './js-client.financesV0.model/DirectPayment.js';
import {DirectPaymentList} from './js-client.financesV0.model/DirectPaymentList.js';
import {Error} from './js-client.financesV0.model/Error.js';
import {ErrorList} from './js-client.financesV0.model/ErrorList.js';
import {FBALiquidationEvent} from './js-client.financesV0.model/FBALiquidationEvent.js';
import {FBALiquidationEventList} from './js-client.financesV0.model/FBALiquidationEventList.js';
import {FailedAdhocDisbursementEvent} from './js-client.financesV0.model/FailedAdhocDisbursementEvent.js';
import {FailedAdhocDisbursementEventList} from './js-client.financesV0.model/FailedAdhocDisbursementEventList.js';
import {FeeComponent} from './js-client.financesV0.model/FeeComponent.js';
import {FeeComponentList} from './js-client.financesV0.model/FeeComponentList.js';
import {FinancialEventGroup} from './js-client.financesV0.model/FinancialEventGroup.js';
import {FinancialEventGroupList} from './js-client.financesV0.model/FinancialEventGroupList.js';
import {FinancialEvents} from './js-client.financesV0.model/FinancialEvents.js';
import {ImagingServicesFeeEvent} from './js-client.financesV0.model/ImagingServicesFeeEvent.js';
import {ImagingServicesFeeEventList} from './js-client.financesV0.model/ImagingServicesFeeEventList.js';
import {ListFinancialEventGroupsPayload} from './js-client.financesV0.model/ListFinancialEventGroupsPayload.js';
import {ListFinancialEventGroupsResponse} from './js-client.financesV0.model/ListFinancialEventGroupsResponse.js';
import {ListFinancialEventsPayload} from './js-client.financesV0.model/ListFinancialEventsPayload.js';
import {ListFinancialEventsResponse} from './js-client.financesV0.model/ListFinancialEventsResponse.js';
import {LoanServicingEvent} from './js-client.financesV0.model/LoanServicingEvent.js';
import {LoanServicingEventList} from './js-client.financesV0.model/LoanServicingEventList.js';
import {ModelDate} from './js-client.financesV0.model/ModelDate.js';
import {NetworkComminglingTransactionEvent} from './js-client.financesV0.model/NetworkComminglingTransactionEvent.js';
import {NetworkComminglingTransactionEventList} from './js-client.financesV0.model/NetworkComminglingTransactionEventList.js';
import {PayWithAmazonEvent} from './js-client.financesV0.model/PayWithAmazonEvent.js';
import {PayWithAmazonEventList} from './js-client.financesV0.model/PayWithAmazonEventList.js';
import {ProductAdsPaymentEvent} from './js-client.financesV0.model/ProductAdsPaymentEvent.js';
import {ProductAdsPaymentEventList} from './js-client.financesV0.model/ProductAdsPaymentEventList.js';
import {Promotion} from './js-client.financesV0.model/Promotion.js';
import {PromotionList} from './js-client.financesV0.model/PromotionList.js';
import {RemovalShipmentAdjustmentEvent} from './js-client.financesV0.model/RemovalShipmentAdjustmentEvent.js';
import {RemovalShipmentAdjustmentEventList} from './js-client.financesV0.model/RemovalShipmentAdjustmentEventList.js';
import {RemovalShipmentEvent} from './js-client.financesV0.model/RemovalShipmentEvent.js';
import {RemovalShipmentEventList} from './js-client.financesV0.model/RemovalShipmentEventList.js';
import {RemovalShipmentItem} from './js-client.financesV0.model/RemovalShipmentItem.js';
import {RemovalShipmentItemAdjustment} from './js-client.financesV0.model/RemovalShipmentItemAdjustment.js';
import {RemovalShipmentItemList} from './js-client.financesV0.model/RemovalShipmentItemList.js';
import {RentalTransactionEvent} from './js-client.financesV0.model/RentalTransactionEvent.js';
import {RentalTransactionEventList} from './js-client.financesV0.model/RentalTransactionEventList.js';
import {RetrochargeEvent} from './js-client.financesV0.model/RetrochargeEvent.js';
import {RetrochargeEventList} from './js-client.financesV0.model/RetrochargeEventList.js';
import {SAFETReimbursementEvent} from './js-client.financesV0.model/SAFETReimbursementEvent.js';
import {SAFETReimbursementEventList} from './js-client.financesV0.model/SAFETReimbursementEventList.js';
import {SAFETReimbursementItem} from './js-client.financesV0.model/SAFETReimbursementItem.js';
import {SAFETReimbursementItemList} from './js-client.financesV0.model/SAFETReimbursementItemList.js';
import {SellerDealPaymentEvent} from './js-client.financesV0.model/SellerDealPaymentEvent.js';
import {SellerDealPaymentEventList} from './js-client.financesV0.model/SellerDealPaymentEventList.js';
import {SellerReviewEnrollmentPaymentEvent} from './js-client.financesV0.model/SellerReviewEnrollmentPaymentEvent.js';
import {SellerReviewEnrollmentPaymentEventList} from './js-client.financesV0.model/SellerReviewEnrollmentPaymentEventList.js';
import {ServiceFeeEvent} from './js-client.financesV0.model/ServiceFeeEvent.js';
import {ServiceFeeEventList} from './js-client.financesV0.model/ServiceFeeEventList.js';
import {ShipmentEvent} from './js-client.financesV0.model/ShipmentEvent.js';
import {ShipmentEventList} from './js-client.financesV0.model/ShipmentEventList.js';
import {ShipmentItem} from './js-client.financesV0.model/ShipmentItem.js';
import {ShipmentItemList} from './js-client.financesV0.model/ShipmentItemList.js';
import {ShipmentSettleEventList} from './js-client.financesV0.model/ShipmentSettleEventList.js';
import {SolutionProviderCreditEvent} from './js-client.financesV0.model/SolutionProviderCreditEvent.js';
import {SolutionProviderCreditEventList} from './js-client.financesV0.model/SolutionProviderCreditEventList.js';
import {TDSReimbursementEvent} from './js-client.financesV0.model/TDSReimbursementEvent.js';
import {TDSReimbursementEventList} from './js-client.financesV0.model/TDSReimbursementEventList.js';
import {TaxWithheldComponent} from './js-client.financesV0.model/TaxWithheldComponent.js';
import {TaxWithheldComponentList} from './js-client.financesV0.model/TaxWithheldComponentList.js';
import {TaxWithholdingEvent} from './js-client.financesV0.model/TaxWithholdingEvent.js';
import {TaxWithholdingEventList} from './js-client.financesV0.model/TaxWithholdingEventList.js';
import {TaxWithholdingPeriod} from './js-client.financesV0.model/TaxWithholdingPeriod.js';
import {TrialShipmentEvent} from './js-client.financesV0.model/TrialShipmentEvent.js';
import {TrialShipmentEventList} from './js-client.financesV0.model/TrialShipmentEventList.js';
import {ValueAddedServiceChargeEvent} from './js-client.financesV0.model/ValueAddedServiceChargeEvent.js';
import {ValueAddedServiceChargeEventList} from './js-client.financesV0.model/ValueAddedServiceChargeEventList.js';
import {DefaultApi} from './js-client.financesV0.api/DefaultApi.js';


/**
* The_Selling_Partner_API_for_Finances_provides_financial_information_that_is_relevant_to_a_sellers_business__You_can_obtain_financial_events_for_a_given_order_financial_event_group_or_date_range_without_having_to_wait_until_a_statement_period_closes__You_can_also_obtain_financial_event_groups_for_a_given_date_range__.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellingPartnerApiForFinances = require('financesV0/index'); // See note below*.
* var xxxSvc = new SellingPartnerApiForFinances.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellingPartnerApiForFinances.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['financesV0/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellingPartnerApiForFinances.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellingPartnerApiForFinances.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module financesV0/index
* @version v0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:financesV0/ApiClient}
     */
    ApiClient,

    /**
     * The AdhocDisbursementEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/AdhocDisbursementEvent}
     */
    AdhocDisbursementEvent,

    /**
     * The AdhocDisbursementEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/AdhocDisbursementEventList}
     */
    AdhocDisbursementEventList,

    /**
     * The AdjustmentEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/AdjustmentEvent}
     */
    AdjustmentEvent,

    /**
     * The AdjustmentEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/AdjustmentEventList}
     */
    AdjustmentEventList,

    /**
     * The AdjustmentItem model constructor.
     * @property {module:financesV0/js-client.financesV0.model/AdjustmentItem}
     */
    AdjustmentItem,

    /**
     * The AdjustmentItemList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/AdjustmentItemList}
     */
    AdjustmentItemList,

    /**
     * The AffordabilityExpenseEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/AffordabilityExpenseEvent}
     */
    AffordabilityExpenseEvent,

    /**
     * The AffordabilityExpenseEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/AffordabilityExpenseEventList}
     */
    AffordabilityExpenseEventList,

    /**
     * The BigDecimal model constructor.
     * @property {module:financesV0/js-client.financesV0.model/BigDecimal}
     */
    BigDecimal,

    /**
     * The CapacityReservationBillingEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/CapacityReservationBillingEvent}
     */
    CapacityReservationBillingEvent,

    /**
     * The CapacityReservationBillingEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/CapacityReservationBillingEventList}
     */
    CapacityReservationBillingEventList,

    /**
     * The ChargeComponent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ChargeComponent}
     */
    ChargeComponent,

    /**
     * The ChargeComponentList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ChargeComponentList}
     */
    ChargeComponentList,

    /**
     * The ChargeInstrument model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ChargeInstrument}
     */
    ChargeInstrument,

    /**
     * The ChargeInstrumentList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ChargeInstrumentList}
     */
    ChargeInstrumentList,

    /**
     * The ChargeRefundEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ChargeRefundEvent}
     */
    ChargeRefundEvent,

    /**
     * The ChargeRefundEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ChargeRefundEventList}
     */
    ChargeRefundEventList,

    /**
     * The ChargeRefundTransaction model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ChargeRefundTransaction}
     */
    ChargeRefundTransaction,

    /**
     * The ChargeRefundTransactions model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ChargeRefundTransactions}
     */
    ChargeRefundTransactions,

    /**
     * The CouponPaymentEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/CouponPaymentEvent}
     */
    CouponPaymentEvent,

    /**
     * The CouponPaymentEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/CouponPaymentEventList}
     */
    CouponPaymentEventList,

    /**
     * The Currency model constructor.
     * @property {module:financesV0/js-client.financesV0.model/Currency}
     */
    Currency,

    /**
     * The DebtRecoveryEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/DebtRecoveryEvent}
     */
    DebtRecoveryEvent,

    /**
     * The DebtRecoveryEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/DebtRecoveryEventList}
     */
    DebtRecoveryEventList,

    /**
     * The DebtRecoveryItem model constructor.
     * @property {module:financesV0/js-client.financesV0.model/DebtRecoveryItem}
     */
    DebtRecoveryItem,

    /**
     * The DebtRecoveryItemList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/DebtRecoveryItemList}
     */
    DebtRecoveryItemList,

    /**
     * The DirectPayment model constructor.
     * @property {module:financesV0/js-client.financesV0.model/DirectPayment}
     */
    DirectPayment,

    /**
     * The DirectPaymentList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/DirectPaymentList}
     */
    DirectPaymentList,

    /**
     * The Error model constructor.
     * @property {module:financesV0/js-client.financesV0.model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ErrorList}
     */
    ErrorList,

    /**
     * The FBALiquidationEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/FBALiquidationEvent}
     */
    FBALiquidationEvent,

    /**
     * The FBALiquidationEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/FBALiquidationEventList}
     */
    FBALiquidationEventList,

    /**
     * The FailedAdhocDisbursementEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/FailedAdhocDisbursementEvent}
     */
    FailedAdhocDisbursementEvent,

    /**
     * The FailedAdhocDisbursementEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/FailedAdhocDisbursementEventList}
     */
    FailedAdhocDisbursementEventList,

    /**
     * The FeeComponent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/FeeComponent}
     */
    FeeComponent,

    /**
     * The FeeComponentList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/FeeComponentList}
     */
    FeeComponentList,

    /**
     * The FinancialEventGroup model constructor.
     * @property {module:financesV0/js-client.financesV0.model/FinancialEventGroup}
     */
    FinancialEventGroup,

    /**
     * The FinancialEventGroupList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/FinancialEventGroupList}
     */
    FinancialEventGroupList,

    /**
     * The FinancialEvents model constructor.
     * @property {module:financesV0/js-client.financesV0.model/FinancialEvents}
     */
    FinancialEvents,

    /**
     * The ImagingServicesFeeEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ImagingServicesFeeEvent}
     */
    ImagingServicesFeeEvent,

    /**
     * The ImagingServicesFeeEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ImagingServicesFeeEventList}
     */
    ImagingServicesFeeEventList,

    /**
     * The ListFinancialEventGroupsPayload model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ListFinancialEventGroupsPayload}
     */
    ListFinancialEventGroupsPayload,

    /**
     * The ListFinancialEventGroupsResponse model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ListFinancialEventGroupsResponse}
     */
    ListFinancialEventGroupsResponse,

    /**
     * The ListFinancialEventsPayload model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ListFinancialEventsPayload}
     */
    ListFinancialEventsPayload,

    /**
     * The ListFinancialEventsResponse model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ListFinancialEventsResponse}
     */
    ListFinancialEventsResponse,

    /**
     * The LoanServicingEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/LoanServicingEvent}
     */
    LoanServicingEvent,

    /**
     * The LoanServicingEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/LoanServicingEventList}
     */
    LoanServicingEventList,

    /**
     * The ModelDate model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ModelDate}
     */
    ModelDate,

    /**
     * The NetworkComminglingTransactionEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/NetworkComminglingTransactionEvent}
     */
    NetworkComminglingTransactionEvent,

    /**
     * The NetworkComminglingTransactionEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/NetworkComminglingTransactionEventList}
     */
    NetworkComminglingTransactionEventList,

    /**
     * The PayWithAmazonEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/PayWithAmazonEvent}
     */
    PayWithAmazonEvent,

    /**
     * The PayWithAmazonEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/PayWithAmazonEventList}
     */
    PayWithAmazonEventList,

    /**
     * The ProductAdsPaymentEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ProductAdsPaymentEvent}
     */
    ProductAdsPaymentEvent,

    /**
     * The ProductAdsPaymentEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ProductAdsPaymentEventList}
     */
    ProductAdsPaymentEventList,

    /**
     * The Promotion model constructor.
     * @property {module:financesV0/js-client.financesV0.model/Promotion}
     */
    Promotion,

    /**
     * The PromotionList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/PromotionList}
     */
    PromotionList,

    /**
     * The RemovalShipmentAdjustmentEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/RemovalShipmentAdjustmentEvent}
     */
    RemovalShipmentAdjustmentEvent,

    /**
     * The RemovalShipmentAdjustmentEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/RemovalShipmentAdjustmentEventList}
     */
    RemovalShipmentAdjustmentEventList,

    /**
     * The RemovalShipmentEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/RemovalShipmentEvent}
     */
    RemovalShipmentEvent,

    /**
     * The RemovalShipmentEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/RemovalShipmentEventList}
     */
    RemovalShipmentEventList,

    /**
     * The RemovalShipmentItem model constructor.
     * @property {module:financesV0/js-client.financesV0.model/RemovalShipmentItem}
     */
    RemovalShipmentItem,

    /**
     * The RemovalShipmentItemAdjustment model constructor.
     * @property {module:financesV0/js-client.financesV0.model/RemovalShipmentItemAdjustment}
     */
    RemovalShipmentItemAdjustment,

    /**
     * The RemovalShipmentItemList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/RemovalShipmentItemList}
     */
    RemovalShipmentItemList,

    /**
     * The RentalTransactionEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/RentalTransactionEvent}
     */
    RentalTransactionEvent,

    /**
     * The RentalTransactionEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/RentalTransactionEventList}
     */
    RentalTransactionEventList,

    /**
     * The RetrochargeEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/RetrochargeEvent}
     */
    RetrochargeEvent,

    /**
     * The RetrochargeEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/RetrochargeEventList}
     */
    RetrochargeEventList,

    /**
     * The SAFETReimbursementEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/SAFETReimbursementEvent}
     */
    SAFETReimbursementEvent,

    /**
     * The SAFETReimbursementEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/SAFETReimbursementEventList}
     */
    SAFETReimbursementEventList,

    /**
     * The SAFETReimbursementItem model constructor.
     * @property {module:financesV0/js-client.financesV0.model/SAFETReimbursementItem}
     */
    SAFETReimbursementItem,

    /**
     * The SAFETReimbursementItemList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/SAFETReimbursementItemList}
     */
    SAFETReimbursementItemList,

    /**
     * The SellerDealPaymentEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/SellerDealPaymentEvent}
     */
    SellerDealPaymentEvent,

    /**
     * The SellerDealPaymentEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/SellerDealPaymentEventList}
     */
    SellerDealPaymentEventList,

    /**
     * The SellerReviewEnrollmentPaymentEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/SellerReviewEnrollmentPaymentEvent}
     */
    SellerReviewEnrollmentPaymentEvent,

    /**
     * The SellerReviewEnrollmentPaymentEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/SellerReviewEnrollmentPaymentEventList}
     */
    SellerReviewEnrollmentPaymentEventList,

    /**
     * The ServiceFeeEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ServiceFeeEvent}
     */
    ServiceFeeEvent,

    /**
     * The ServiceFeeEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ServiceFeeEventList}
     */
    ServiceFeeEventList,

    /**
     * The ShipmentEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ShipmentEvent}
     */
    ShipmentEvent,

    /**
     * The ShipmentEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ShipmentEventList}
     */
    ShipmentEventList,

    /**
     * The ShipmentItem model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ShipmentItem}
     */
    ShipmentItem,

    /**
     * The ShipmentItemList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ShipmentItemList}
     */
    ShipmentItemList,

    /**
     * The ShipmentSettleEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ShipmentSettleEventList}
     */
    ShipmentSettleEventList,

    /**
     * The SolutionProviderCreditEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/SolutionProviderCreditEvent}
     */
    SolutionProviderCreditEvent,

    /**
     * The SolutionProviderCreditEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/SolutionProviderCreditEventList}
     */
    SolutionProviderCreditEventList,

    /**
     * The TDSReimbursementEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/TDSReimbursementEvent}
     */
    TDSReimbursementEvent,

    /**
     * The TDSReimbursementEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/TDSReimbursementEventList}
     */
    TDSReimbursementEventList,

    /**
     * The TaxWithheldComponent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/TaxWithheldComponent}
     */
    TaxWithheldComponent,

    /**
     * The TaxWithheldComponentList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/TaxWithheldComponentList}
     */
    TaxWithheldComponentList,

    /**
     * The TaxWithholdingEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/TaxWithholdingEvent}
     */
    TaxWithholdingEvent,

    /**
     * The TaxWithholdingEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/TaxWithholdingEventList}
     */
    TaxWithholdingEventList,

    /**
     * The TaxWithholdingPeriod model constructor.
     * @property {module:financesV0/js-client.financesV0.model/TaxWithholdingPeriod}
     */
    TaxWithholdingPeriod,

    /**
     * The TrialShipmentEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/TrialShipmentEvent}
     */
    TrialShipmentEvent,

    /**
     * The TrialShipmentEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/TrialShipmentEventList}
     */
    TrialShipmentEventList,

    /**
     * The ValueAddedServiceChargeEvent model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ValueAddedServiceChargeEvent}
     */
    ValueAddedServiceChargeEvent,

    /**
     * The ValueAddedServiceChargeEventList model constructor.
     * @property {module:financesV0/js-client.financesV0.model/ValueAddedServiceChargeEventList}
     */
    ValueAddedServiceChargeEventList,

    /**
    * The DefaultApi service constructor.
    * @property {module:financesV0/js-client.financesV0.api/DefaultApi}
    */
    DefaultApi
};
