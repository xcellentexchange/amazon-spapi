/*
 * Selling Partner API for Sellers
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API's operations, data types, and schemas.
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src/sellers/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/sellers/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForSellers);
  }
}(this, function(expect, SellingPartnerApiForSellers) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForSellers.SellersApi();
  });

  describe('sellers', function() {
    describe('SellersApi', function() {
      describe('getAccount', function() {
        it('should call getAccount successfully', function(done) {
          // TODO: uncomment getAccount call and complete the assertions
          /*

          instance.getAccount().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForSellers.GetAccountResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForSellers.Account);
                  {
                let dataCtr = data.payload.marketplaceLevelAttributes;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(SellingPartnerApiForSellers.MarketplaceLevelAttributes);
                  expect(data.marketplace).to.be.a(SellingPartnerApiForSellers.Marketplace);
                        expect(data.marketplace.id).to.be.a('string');
                    // expect(data.marketplace.id).to.be("");
                    expect(data.marketplace.name).to.be.a('string');
                    // expect(data.marketplace.name).to.be("");
                    expect(data.marketplace.countryCode).to.be.a('string');
                    // expect(data.marketplace.countryCode).to.be("");
                    expect(data.marketplace.defaultCurrencyCode).to.be.a('string');
                    // expect(data.marketplace.defaultCurrencyCode).to.be("");
                    expect(data.marketplace.defaultLanguageCode).to.be.a('string');
                    // expect(data.marketplace.defaultLanguageCode).to.be("");
                    expect(data.marketplace.domainName).to.be.a('string');
                    // expect(data.marketplace.domainName).to.be("");
                  expect(data.storeName).to.be.a('string');
                  // expect(data.storeName).to.be("");
                  expect(data.listingStatus).to.be.a('string');
                  // expect(data.listingStatus).to.be("ACTIVE");
                  expect(data.sellingPlan).to.be.a('string');
                  // expect(data.sellingPlan).to.be("PROFESSIONAL");
                }
              }
              expect(data.payload.businessType).to.be.a('string');
              // expect(data.payload.businessType).to.be("CHARITY");
              expect(data.payload.business).to.be.a(SellingPartnerApiForSellers.Business);
                    expect(data.payload.business.name).to.be.a('string');
                // expect(data.payload.business.name).to.be("");
                expect(data.payload.business.registeredBusinessAddress).to.be.a(SellingPartnerApiForSellers.Address);
                      expect(data.payload.business.registeredBusinessAddress.addressLine1).to.be.a('string');
                  // expect(data.payload.business.registeredBusinessAddress.addressLine1).to.be("");
                  expect(data.payload.business.registeredBusinessAddress.addressLine2).to.be.a('string');
                  // expect(data.payload.business.registeredBusinessAddress.addressLine2).to.be("");
                  expect(data.payload.business.registeredBusinessAddress.countryCode).to.be.a('string');
                  // expect(data.payload.business.registeredBusinessAddress.countryCode).to.be("");
                  expect(data.payload.business.registeredBusinessAddress.stateOrProvinceCode).to.be.a('string');
                  // expect(data.payload.business.registeredBusinessAddress.stateOrProvinceCode).to.be("");
                  expect(data.payload.business.registeredBusinessAddress.city).to.be.a('string');
                  // expect(data.payload.business.registeredBusinessAddress.city).to.be("");
                  expect(data.payload.business.registeredBusinessAddress.postalCode).to.be.a('string');
                  // expect(data.payload.business.registeredBusinessAddress.postalCode).to.be("");
                expect(data.payload.business.companyRegistrationNumber).to.be.a('string');
                // expect(data.payload.business.companyRegistrationNumber).to.be("");
                expect(data.payload.business.companyTaxIdentificationNumber).to.be.a('string');
                // expect(data.payload.business.companyTaxIdentificationNumber).to.be("");
                expect(data.payload.business.nonLatinName).to.be.a('string');
                // expect(data.payload.business.nonLatinName).to.be("");
              expect(data.payload.primaryContact).to.be.a(SellingPartnerApiForSellers.PrimaryContact);
                    expect(data.payload.primaryContact.name).to.be.a('string');
                // expect(data.payload.primaryContact.name).to.be("");
                expect(data.payload.primaryContact.address).to.be.a(SellingPartnerApiForSellers.Address);
                      expect(data.payload.primaryContact.address.addressLine1).to.be.a('string');
                  // expect(data.payload.primaryContact.address.addressLine1).to.be("");
                  expect(data.payload.primaryContact.address.addressLine2).to.be.a('string');
                  // expect(data.payload.primaryContact.address.addressLine2).to.be("");
                  expect(data.payload.primaryContact.address.countryCode).to.be.a('string');
                  // expect(data.payload.primaryContact.address.countryCode).to.be("");
                  expect(data.payload.primaryContact.address.stateOrProvinceCode).to.be.a('string');
                  // expect(data.payload.primaryContact.address.stateOrProvinceCode).to.be("");
                  expect(data.payload.primaryContact.address.city).to.be.a('string');
                  // expect(data.payload.primaryContact.address.city).to.be("");
                  expect(data.payload.primaryContact.address.postalCode).to.be.a('string');
                  // expect(data.payload.primaryContact.address.postalCode).to.be("");
                expect(data.payload.primaryContact.nonLatinName).to.be.a('string');
                // expect(data.payload.primaryContact.nonLatinName).to.be("");
            expect(data.errors).to.be.a(SellingPartnerApiForSellers.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getMarketplaceParticipations', function() {
        it('should call getMarketplaceParticipations successfully', function(done) {
          // TODO: uncomment getMarketplaceParticipations call and complete the assertions
          /*

          instance.getMarketplaceParticipations().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForSellers.GetMarketplaceParticipationsResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForSellers.MarketplaceParticipationList);
                expect(data.errors).to.be.a(SellingPartnerApiForSellers.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
