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
 * The NetworkComminglingTransactionEvent model module.
 * @module financesV0/js-client.financesV0.model/NetworkComminglingTransactionEvent
 * @version v0
 */
export class NetworkComminglingTransactionEvent {
  /**
   * Constructs a new <code>NetworkComminglingTransactionEvent</code>.
   * A network commingling transaction event.
   * @alias module:financesV0/js-client.financesV0.model/NetworkComminglingTransactionEvent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>NetworkComminglingTransactionEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/NetworkComminglingTransactionEvent} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/NetworkComminglingTransactionEvent} The populated <code>NetworkComminglingTransactionEvent</code> instance.
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
      obj = obj || new NetworkComminglingTransactionEvent();
      if (data.hasOwnProperty('TransactionType'))
        obj.transactionType = ApiClient.convertToType(data['TransactionType'], 'String');
      if (data.hasOwnProperty('PostedDate'))
        obj.postedDate = ModelDate.constructFromObject(data['PostedDate']);
      if (data.hasOwnProperty('NetCoTransactionID'))
        obj.netCoTransactionID = ApiClient.convertToType(data['NetCoTransactionID'], 'String');
      if (data.hasOwnProperty('SwapReason'))
        obj.swapReason = ApiClient.convertToType(data['SwapReason'], 'String');
      if (data.hasOwnProperty('ASIN'))
        obj.ASIN = ApiClient.convertToType(data['ASIN'], 'String');
      if (data.hasOwnProperty('MarketplaceId'))
        obj.marketplaceId = ApiClient.convertToType(data['MarketplaceId'], 'String');
      if (data.hasOwnProperty('TaxExclusiveAmount'))
        obj.taxExclusiveAmount = Currency.constructFromObject(data['TaxExclusiveAmount']);
      if (data.hasOwnProperty('TaxAmount'))
        obj.taxAmount = Currency.constructFromObject(data['TaxAmount']);
    }
    return obj;
  }
}

/**
 * The type of network item swap.  Possible values:  * `NetCo`: A Fulfillment by Amazon inventory pooling transaction. Available only in the India marketplace.  * `ComminglingVAT`: A commingling VAT transaction. Available only in the Spain, UK, France, Germany, and Italy marketplaces.
 * @member {String} transactionType
 */
NetworkComminglingTransactionEvent.prototype.transactionType = undefined;

/**
 * The date and time when the financial event was posted.
 * @member {module:financesV0/js-client.financesV0.model/ModelDate} postedDate
 */
NetworkComminglingTransactionEvent.prototype.postedDate = undefined;

/**
 * The identifier for the network item swap.
 * @member {String} netCoTransactionID
 */
NetworkComminglingTransactionEvent.prototype.netCoTransactionID = undefined;

/**
 * The reason for the network item swap.
 * @member {String} swapReason
 */
NetworkComminglingTransactionEvent.prototype.swapReason = undefined;

/**
 * The Amazon Standard Identification Number (ASIN) of the swapped item.
 * @member {String} ASIN
 */
NetworkComminglingTransactionEvent.prototype.ASIN = undefined;

/**
 * The marketplace in which the event took place.
 * @member {String} marketplaceId
 */
NetworkComminglingTransactionEvent.prototype.marketplaceId = undefined;

/**
 * The price of the swapped item minus `TaxAmount`.
 * @member {module:financesV0/js-client.financesV0.model/Currency} taxExclusiveAmount
 */
NetworkComminglingTransactionEvent.prototype.taxExclusiveAmount = undefined;

/**
 * The tax on the network item swap paid by the seller.
 * @member {module:financesV0/js-client.financesV0.model/Currency} taxAmount
 */
NetworkComminglingTransactionEvent.prototype.taxAmount = undefined;


