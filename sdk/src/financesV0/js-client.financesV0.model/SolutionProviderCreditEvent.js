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

import {ApiClient} from '../ApiClient.js';
import {Currency} from './Currency.js';
import {ModelDate} from './ModelDate.js';

/**
 * The SolutionProviderCreditEvent model module.
 * @module financesV0/js-client.financesV0.model/SolutionProviderCreditEvent
 * @version v0
 */
export class SolutionProviderCreditEvent {
  /**
   * Constructs a new <code>SolutionProviderCreditEvent</code>.
   * A credit given to a solution provider.
   * @alias module:financesV0/js-client.financesV0.model/SolutionProviderCreditEvent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SolutionProviderCreditEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/SolutionProviderCreditEvent} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/SolutionProviderCreditEvent} The populated <code>SolutionProviderCreditEvent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new SolutionProviderCreditEvent();
      if (data.hasOwnProperty('ProviderTransactionType'))
        obj.providerTransactionType = ApiClient.convertToType(data['ProviderTransactionType'], 'String');
      if (data.hasOwnProperty('SellerOrderId'))
        obj.sellerOrderId = ApiClient.convertToType(data['SellerOrderId'], 'String');
      if (data.hasOwnProperty('MarketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['MarketplaceId'], 'String');
      if (data.hasOwnProperty('MarketplaceCountryCode'))
        obj.marketplaceCountryCode = ApiClient.convertToType(data['MarketplaceCountryCode'], 'String');
      if (data.hasOwnProperty('SellerId'))
        obj.sellerId = ApiClient.convertToType(data['SellerId'], 'String');
      if (data.hasOwnProperty('SellerStoreName'))
        obj.sellerStoreName = ApiClient.convertToType(data['SellerStoreName'], 'String');
      if (data.hasOwnProperty('ProviderId'))
        obj.providerId = ApiClient.convertToType(data['ProviderId'], 'String');
      if (data.hasOwnProperty('ProviderStoreName'))
        obj.providerStoreName = ApiClient.convertToType(data['ProviderStoreName'], 'String');
      if (data.hasOwnProperty('TransactionAmount'))
        obj.transactionAmount = Currency.constructFromObject(data['TransactionAmount']);
      if (data.hasOwnProperty('TransactionCreationDate'))
        obj.transactionCreationDate = ModelDate.constructFromObject(data['TransactionCreationDate']);
    }
    return obj;
  }
}

/**
 * The transaction type.
 * @member {String} providerTransactionType
 */
SolutionProviderCreditEvent.prototype.providerTransactionType = undefined;

/**
 * A seller-defined identifier for an order.
 * @member {String} sellerOrderId
 */
SolutionProviderCreditEvent.prototype.sellerOrderId = undefined;

/**
 * The identifier of the marketplace where the order was placed.
 * @member {String} marketplaceId
 */
SolutionProviderCreditEvent.prototype.marketplaceId = undefined;

/**
 * The two-letter country code of the country associated with the marketplace where the order was placed.
 * @member {String} marketplaceCountryCode
 */
SolutionProviderCreditEvent.prototype.marketplaceCountryCode = undefined;

/**
 * The Amazon-defined identifier of the seller.
 * @member {String} sellerId
 */
SolutionProviderCreditEvent.prototype.sellerId = undefined;

/**
 * The store name where the payment event occurred.
 * @member {String} sellerStoreName
 */
SolutionProviderCreditEvent.prototype.sellerStoreName = undefined;

/**
 * The Amazon-defined identifier of the solution provider.
 * @member {String} providerId
 */
SolutionProviderCreditEvent.prototype.providerId = undefined;

/**
 * The store name where the payment event occurred.
 * @member {String} providerStoreName
 */
SolutionProviderCreditEvent.prototype.providerStoreName = undefined;

/**
 * The amount of the credit.
 * @member {module:financesV0/js-client.financesV0.model/Currency} transactionAmount
 */
SolutionProviderCreditEvent.prototype.transactionAmount = undefined;

/**
 * The date and time that the credit transaction was created, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
 * @member {module:financesV0/js-client.financesV0.model/ModelDate} transactionCreationDate
 */
SolutionProviderCreditEvent.prototype.transactionCreationDate = undefined;


