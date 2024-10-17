/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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
import {AttributeSetList} from './AttributeSetList.js';
import {CompetitivePricingType} from './CompetitivePricingType.js';
import {IdentifierType} from './IdentifierType.js';
import {OffersList} from './OffersList.js';
import {RelationshipList} from './RelationshipList.js';
import {SalesRankList} from './SalesRankList.js';

/**
 * The Product model module.
 * @module productPricingV0/js-client.productPricingV0.model/Product
 * @version v0
 */
export class Product {
  /**
   * Constructs a new <code>Product</code>.
   * An item.
   * @alias module:productPricingV0/js-client.productPricingV0.model/Product
   * @class
   * @param identifiers {module:productPricingV0/js-client.productPricingV0.model/IdentifierType} 
   */
  constructor(identifiers) {
    this.identifiers = identifiers;
  }

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:productPricingV0/js-client.productPricingV0.model/Product} obj Optional instance to populate.
   * @return {module:productPricingV0/js-client.productPricingV0.model/Product} The populated <code>Product</code> instance.
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
      obj = obj || new Product();
      if (data.hasOwnProperty('Identifiers'))
        obj.identifiers = IdentifierType.constructFromObject(data['Identifiers']);
      if (data.hasOwnProperty('AttributeSets'))
        obj.attributeSets = AttributeSetList.constructFromObject(data['AttributeSets']);
      if (data.hasOwnProperty('Relationships'))
        obj.relationships = RelationshipList.constructFromObject(data['Relationships']);
      if (data.hasOwnProperty('CompetitivePricing'))
        obj.competitivePricing = CompetitivePricingType.constructFromObject(data['CompetitivePricing']);
      if (data.hasOwnProperty('SalesRankings'))
        obj.salesRankings = SalesRankList.constructFromObject(data['SalesRankings']);
      if (data.hasOwnProperty('Offers'))
        obj.offers = OffersList.constructFromObject(data['Offers']);
    }
    return obj;
  }
}

/**
 * @member {module:productPricingV0/js-client.productPricingV0.model/IdentifierType} identifiers
 */
Product.prototype.identifiers = undefined;

/**
 * @member {module:productPricingV0/js-client.productPricingV0.model/AttributeSetList} attributeSets
 */
Product.prototype.attributeSets = undefined;

/**
 * @member {module:productPricingV0/js-client.productPricingV0.model/RelationshipList} relationships
 */
Product.prototype.relationships = undefined;

/**
 * @member {module:productPricingV0/js-client.productPricingV0.model/CompetitivePricingType} competitivePricing
 */
Product.prototype.competitivePricing = undefined;

/**
 * @member {module:productPricingV0/js-client.productPricingV0.model/SalesRankList} salesRankings
 */
Product.prototype.salesRankings = undefined;

/**
 * @member {module:productPricingV0/js-client.productPricingV0.model/OffersList} offers
 */
Product.prototype.offers = undefined;


