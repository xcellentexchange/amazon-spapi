/*
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
import {AmazonPrograms} from './AmazonPrograms.js';
import {AssociatedItem} from './AssociatedItem.js';
import {BuyerRequestedCancel} from './BuyerRequestedCancel.js';
import {ItemBuyerInfo} from './ItemBuyerInfo.js';
import {Measurement} from './Measurement.js';
import {Money} from './Money.js';
import {PointsGrantedDetail} from './PointsGrantedDetail.js';
import {ProductInfoDetail} from './ProductInfoDetail.js';
import {PromotionIdList} from './PromotionIdList.js';
import {ShippingConstraints} from './ShippingConstraints.js';
import {SubstitutionPreferences} from './SubstitutionPreferences.js';
import {TaxCollection} from './TaxCollection.js';

/**
 * The OrderItem model module.
 * @module ordersV0/js-client.ordersV0.model/OrderItem
 * @version v0
 */
export class OrderItem {
  /**
   * Constructs a new <code>OrderItem</code>.
   * A single order item.
   * @alias module:ordersV0/js-client.ordersV0.model/OrderItem
   * @class
   * @param ASIN {String} The item's Amazon Standard Identification Number (ASIN).
   * @param orderItemId {String} An Amazon-defined order item identifier.
   * @param quantityOrdered {Number} The number of items in the order. 
   */
  constructor(ASIN, orderItemId, quantityOrdered) {
    this.ASIN = ASIN;
    this.orderItemId = orderItemId;
    this.quantityOrdered = quantityOrdered;
  }

  /**
   * Constructs a <code>OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ordersV0/js-client.ordersV0.model/OrderItem} obj Optional instance to populate.
   * @return {module:ordersV0/js-client.ordersV0.model/OrderItem} The populated <code>OrderItem</code> instance.
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
      obj = obj || new OrderItem();
      if (data.hasOwnProperty('ASIN'))
        obj.ASIN = ApiClient.convertToType(data['ASIN'], 'String');
      if (data.hasOwnProperty('SellerSKU'))
        obj.sellerSKU = ApiClient.convertToType(data['SellerSKU'], 'String');
      if (data.hasOwnProperty('OrderItemId'))
        obj.orderItemId = ApiClient.convertToType(data['OrderItemId'], 'String');
      if (data.hasOwnProperty('AssociatedItems'))
        obj.associatedItems = ApiClient.convertToType(data['AssociatedItems'], [AssociatedItem]);
      if (data.hasOwnProperty('Title'))
        obj.title = ApiClient.convertToType(data['Title'], 'String');
      if (data.hasOwnProperty('QuantityOrdered'))
        obj.quantityOrdered = ApiClient.convertToType(data['QuantityOrdered'], 'Number');
      if (data.hasOwnProperty('QuantityShipped'))
        obj.quantityShipped = ApiClient.convertToType(data['QuantityShipped'], 'Number');
      if (data.hasOwnProperty('ProductInfo'))
        obj.productInfo = ProductInfoDetail.constructFromObject(data['ProductInfo']);
      if (data.hasOwnProperty('PointsGranted'))
        obj.pointsGranted = PointsGrantedDetail.constructFromObject(data['PointsGranted']);
      if (data.hasOwnProperty('ItemPrice'))
        obj.itemPrice = Money.constructFromObject(data['ItemPrice']);
      if (data.hasOwnProperty('ShippingPrice'))
        obj.shippingPrice = Money.constructFromObject(data['ShippingPrice']);
      if (data.hasOwnProperty('ItemTax'))
        obj.itemTax = Money.constructFromObject(data['ItemTax']);
      if (data.hasOwnProperty('ShippingTax'))
        obj.shippingTax = Money.constructFromObject(data['ShippingTax']);
      if (data.hasOwnProperty('ShippingDiscount'))
        obj.shippingDiscount = Money.constructFromObject(data['ShippingDiscount']);
      if (data.hasOwnProperty('ShippingDiscountTax'))
        obj.shippingDiscountTax = Money.constructFromObject(data['ShippingDiscountTax']);
      if (data.hasOwnProperty('PromotionDiscount'))
        obj.promotionDiscount = Money.constructFromObject(data['PromotionDiscount']);
      if (data.hasOwnProperty('PromotionDiscountTax'))
        obj.promotionDiscountTax = Money.constructFromObject(data['PromotionDiscountTax']);
      if (data.hasOwnProperty('PromotionIds'))
        obj.promotionIds = PromotionIdList.constructFromObject(data['PromotionIds']);
      if (data.hasOwnProperty('CODFee'))
        obj.cODFee = Money.constructFromObject(data['CODFee']);
      if (data.hasOwnProperty('CODFeeDiscount'))
        obj.cODFeeDiscount = Money.constructFromObject(data['CODFeeDiscount']);
      if (data.hasOwnProperty('IsGift'))
        obj.isGift = ApiClient.convertToType(data['IsGift'], 'String');
      if (data.hasOwnProperty('ConditionNote'))
        obj.conditionNote = ApiClient.convertToType(data['ConditionNote'], 'String');
      if (data.hasOwnProperty('ConditionId'))
        obj.conditionId = ApiClient.convertToType(data['ConditionId'], 'String');
      if (data.hasOwnProperty('ConditionSubtypeId'))
        obj.conditionSubtypeId = ApiClient.convertToType(data['ConditionSubtypeId'], 'String');
      if (data.hasOwnProperty('ScheduledDeliveryStartDate'))
        obj.scheduledDeliveryStartDate = ApiClient.convertToType(data['ScheduledDeliveryStartDate'], 'String');
      if (data.hasOwnProperty('ScheduledDeliveryEndDate'))
        obj.scheduledDeliveryEndDate = ApiClient.convertToType(data['ScheduledDeliveryEndDate'], 'String');
      if (data.hasOwnProperty('PriceDesignation'))
        obj.priceDesignation = ApiClient.convertToType(data['PriceDesignation'], 'String');
      if (data.hasOwnProperty('TaxCollection'))
        obj.taxCollection = TaxCollection.constructFromObject(data['TaxCollection']);
      if (data.hasOwnProperty('SerialNumberRequired'))
        obj.serialNumberRequired = ApiClient.convertToType(data['SerialNumberRequired'], 'Boolean');
      if (data.hasOwnProperty('IsTransparency'))
        obj.isTransparency = ApiClient.convertToType(data['IsTransparency'], 'Boolean');
      if (data.hasOwnProperty('IossNumber'))
        obj.iossNumber = ApiClient.convertToType(data['IossNumber'], 'String');
      if (data.hasOwnProperty('StoreChainStoreId'))
        obj.storeChainStoreId = ApiClient.convertToType(data['StoreChainStoreId'], 'String');
      if (data.hasOwnProperty('DeemedResellerCategory'))
        obj.deemedResellerCategory = ApiClient.convertToType(data['DeemedResellerCategory'], 'String');
      if (data.hasOwnProperty('BuyerInfo'))
        obj.buyerInfo = ItemBuyerInfo.constructFromObject(data['BuyerInfo']);
      if (data.hasOwnProperty('BuyerRequestedCancel'))
        obj.buyerRequestedCancel = BuyerRequestedCancel.constructFromObject(data['BuyerRequestedCancel']);
      if (data.hasOwnProperty('SerialNumbers'))
        obj.serialNumbers = ApiClient.convertToType(data['SerialNumbers'], ['String']);
      if (data.hasOwnProperty('SubstitutionPreferences'))
        obj.substitutionPreferences = SubstitutionPreferences.constructFromObject(data['SubstitutionPreferences']);
      if (data.hasOwnProperty('Measurement'))
        obj.measurement = Measurement.constructFromObject(data['Measurement']);
      if (data.hasOwnProperty('ShippingConstraints'))
        obj.shippingConstraints = ShippingConstraints.constructFromObject(data['ShippingConstraints']);
      if (data.hasOwnProperty('AmazonPrograms'))
        obj.amazonPrograms = AmazonPrograms.constructFromObject(data['AmazonPrograms']);
    }
    return obj;
  }
}

/**
 * The item's Amazon Standard Identification Number (ASIN).
 * @member {String} ASIN
 */
OrderItem.prototype.ASIN = undefined;

/**
 * The item's seller stock keeping unit (SKU).
 * @member {String} sellerSKU
 */
OrderItem.prototype.sellerSKU = undefined;

/**
 * An Amazon-defined order item identifier.
 * @member {String} orderItemId
 */
OrderItem.prototype.orderItemId = undefined;

/**
 * A list of associated items that a customer has purchased with a product. For example, a tire installation service purchased with tires.
 * @member {Array.<module:ordersV0/js-client.ordersV0.model/AssociatedItem>} associatedItems
 */
OrderItem.prototype.associatedItems = undefined;

/**
 * The item's name.
 * @member {String} title
 */
OrderItem.prototype.title = undefined;

/**
 * The number of items in the order. 
 * @member {Number} quantityOrdered
 */
OrderItem.prototype.quantityOrdered = undefined;

/**
 * The number of items shipped.
 * @member {Number} quantityShipped
 */
OrderItem.prototype.quantityShipped = undefined;

/**
 * The item's product information.
 * @member {module:ordersV0/js-client.ordersV0.model/ProductInfoDetail} productInfo
 */
OrderItem.prototype.productInfo = undefined;

/**
 * The number and value of Amazon Points granted with the purchase of an item.
 * @member {module:ordersV0/js-client.ordersV0.model/PointsGrantedDetail} pointsGranted
 */
OrderItem.prototype.pointsGranted = undefined;

/**
 * The selling price of the order item. Note that an order item is an item and a quantity. This means that the value of `ItemPrice` is equal to the selling price of the item multiplied by the quantity ordered. `ItemPrice` excludes `ShippingPrice` and GiftWrapPrice.
 * @member {module:ordersV0/js-client.ordersV0.model/Money} itemPrice
 */
OrderItem.prototype.itemPrice = undefined;

/**
 * The item's shipping price.
 * @member {module:ordersV0/js-client.ordersV0.model/Money} shippingPrice
 */
OrderItem.prototype.shippingPrice = undefined;

/**
 * The tax on the item price.
 * @member {module:ordersV0/js-client.ordersV0.model/Money} itemTax
 */
OrderItem.prototype.itemTax = undefined;

/**
 * The tax on the shipping price.
 * @member {module:ordersV0/js-client.ordersV0.model/Money} shippingTax
 */
OrderItem.prototype.shippingTax = undefined;

/**
 * The discount on the shipping price.
 * @member {module:ordersV0/js-client.ordersV0.model/Money} shippingDiscount
 */
OrderItem.prototype.shippingDiscount = undefined;

/**
 * The tax on the discount on the shipping price.
 * @member {module:ordersV0/js-client.ordersV0.model/Money} shippingDiscountTax
 */
OrderItem.prototype.shippingDiscountTax = undefined;

/**
 * The total of all promotional discounts in the offer.
 * @member {module:ordersV0/js-client.ordersV0.model/Money} promotionDiscount
 */
OrderItem.prototype.promotionDiscount = undefined;

/**
 * The tax on the total of all promotional discounts in the offer.
 * @member {module:ordersV0/js-client.ordersV0.model/Money} promotionDiscountTax
 */
OrderItem.prototype.promotionDiscountTax = undefined;

/**
 * @member {module:ordersV0/js-client.ordersV0.model/PromotionIdList} promotionIds
 */
OrderItem.prototype.promotionIds = undefined;

/**
 * The fee charged for COD service.
 * @member {module:ordersV0/js-client.ordersV0.model/Money} cODFee
 */
OrderItem.prototype.cODFee = undefined;

/**
 * The discount on the COD fee.
 * @member {module:ordersV0/js-client.ordersV0.model/Money} cODFeeDiscount
 */
OrderItem.prototype.cODFeeDiscount = undefined;

/**
 * Indicates whether the item is a gift.  **Possible values**: `true` and `false`.
 * @member {String} isGift
 */
OrderItem.prototype.isGift = undefined;

/**
 * The condition of the item, as described by the seller.
 * @member {String} conditionNote
 */
OrderItem.prototype.conditionNote = undefined;

/**
 * The condition of the item.  **Possible values**: `New`, `Used`, `Collectible`, `Refurbished`, `Preorder`, and `Club`.
 * @member {String} conditionId
 */
OrderItem.prototype.conditionId = undefined;

/**
 * The subcondition of the item.  **Possible values**: `New`, `Mint`, `Very Good`, `Good`, `Acceptable`, `Poor`, `Club`, `OEM`, `Warranty`, `Refurbished Warranty`, `Refurbished`, `Open Box`, `Any`, and `Other`.
 * @member {String} conditionSubtypeId
 */
OrderItem.prototype.conditionSubtypeId = undefined;

/**
 * The start date of the scheduled delivery window in the time zone for the order destination. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format.
 * @member {String} scheduledDeliveryStartDate
 */
OrderItem.prototype.scheduledDeliveryStartDate = undefined;

/**
 * The end date of the scheduled delivery window in the time zone for the order destination. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format.
 * @member {String} scheduledDeliveryEndDate
 */
OrderItem.prototype.scheduledDeliveryEndDate = undefined;

/**
 * Indicates that the selling price is a special price that is only available for Amazon Business orders. For more information about the Amazon Business Seller Program, refer to the [Amazon Business website](https://www.amazon.com/b2b/info/amazon-business).   **Possible values**: `BusinessPrice`
 * @member {String} priceDesignation
 */
OrderItem.prototype.priceDesignation = undefined;

/**
 * Information about withheld taxes.
 * @member {module:ordersV0/js-client.ordersV0.model/TaxCollection} taxCollection
 */
OrderItem.prototype.taxCollection = undefined;

/**
 * When true, the product type for this item has a serial number.   Only returned for Amazon Easy Ship orders.
 * @member {Boolean} serialNumberRequired
 */
OrderItem.prototype.serialNumberRequired = undefined;

/**
 * When true, the ASIN is enrolled in Transparency. The Transparency serial number that you must submit is determined by:  **1D or 2D Barcode:** This has a **T** logo. Submit either the 29-character alpha-numeric identifier beginning with **AZ** or **ZA**, or the 38-character Serialized Global Trade Item Number (SGTIN). **2D Barcode SN:** Submit the 7- to 20-character serial number barcode, which likely has the prefix **SN**. The serial number is applied to the same side of the packaging as the GTIN (UPC/EAN/ISBN) barcode. **QR code SN:** Submit the URL that the QR code generates.
 * @member {Boolean} isTransparency
 */
OrderItem.prototype.isTransparency = undefined;

/**
 * The IOSS number of the marketplace. Sellers shipping to the EU from outside the EU must provide this IOSS number to their carrier when Amazon has collected the VAT on the sale.
 * @member {String} iossNumber
 */
OrderItem.prototype.iossNumber = undefined;

/**
 * The store chain store identifier. Linked to a specific store in a store chain.
 * @member {String} storeChainStoreId
 */
OrderItem.prototype.storeChainStoreId = undefined;

/**
 * Allowed values for the <code>deemedResellerCategory</code> property.
 * @enum {String}
 * @readonly
 */
OrderItem.DeemedResellerCategoryEnum = {
  /**
   * value: "IOSS"
   * @const
   */
  IOSS: "IOSS",

  /**
   * value: "UOSS"
   * @const
   */
  UOSS: "UOSS"
};

/**
 * The category of deemed reseller. This applies to selling partners that are not based in the EU and is used to help them meet the VAT Deemed Reseller tax laws in the EU and UK.
 * @member {module:ordersV0/js-client.ordersV0.model/OrderItem.DeemedResellerCategoryEnum} deemedResellerCategory
 */
OrderItem.prototype.deemedResellerCategory = undefined;

/**
 * A single item's buyer information.  **Note**: The `BuyerInfo` contains restricted data. Use the Restricted Data Token (RDT) and restricted SPDS roles to access the restricted data in `BuyerInfo`. For example, `BuyerCustomizedInfo` and `GiftMessageText`.
 * @member {module:ordersV0/js-client.ordersV0.model/ItemBuyerInfo} buyerInfo
 */
OrderItem.prototype.buyerInfo = undefined;

/**
 * Information about whether or not a buyer requested cancellation.
 * @member {module:ordersV0/js-client.ordersV0.model/BuyerRequestedCancel} buyerRequestedCancel
 */
OrderItem.prototype.buyerRequestedCancel = undefined;

/**
 * A list of serial numbers for electronic products that are shipped to customers. Returned for FBA orders only.
 * @member {Array.<String>} serialNumbers
 */
OrderItem.prototype.serialNumbers = undefined;

/**
 * Substitution preferences for the order item. This is an optional field that is only present if a seller supports substitutions, as is the case with some grocery sellers.
 * @member {module:ordersV0/js-client.ordersV0.model/SubstitutionPreferences} substitutionPreferences
 */
OrderItem.prototype.substitutionPreferences = undefined;

/**
 * Measurement information for the order item.
 * @member {module:ordersV0/js-client.ordersV0.model/Measurement} measurement
 */
OrderItem.prototype.measurement = undefined;

/**
 * Shipping constraints applicable to this order.
 * @member {module:ordersV0/js-client.ordersV0.model/ShippingConstraints} shippingConstraints
 */
OrderItem.prototype.shippingConstraints = undefined;

/**
 * Contains the list of programs that are associated with an item.
 * @member {module:ordersV0/js-client.ordersV0.model/AmazonPrograms} amazonPrograms
 */
OrderItem.prototype.amazonPrograms = undefined;

