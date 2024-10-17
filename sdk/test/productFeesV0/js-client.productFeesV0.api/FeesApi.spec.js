/*
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src/productFeesV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/productFeesV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForProductFees);
  }
}(this, function(expect, SellingPartnerApiForProductFees) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForProductFees.FeesApi();
  });

  describe('productFeesV0', function() {
    describe('FeesApi', function() {
      describe('getMyFeesEstimateForASIN', function() {
        it('should call getMyFeesEstimateForASIN successfully', function(done) {
          // TODO: uncomment, update parameter values for getMyFeesEstimateForASIN call and complete the assertions
          /*
          var body = new SellingPartnerApiForProductFees.GetMyFeesEstimateRequest();
          body.feesEstimateRequest = new SellingPartnerApiForProductFees.FeesEstimateRequest();
          body.feesEstimateRequest.marketplaceId = "";
          body.feesEstimateRequest.isAmazonFulfilled = false;
          body.feesEstimateRequest.priceToEstimateFees = new SellingPartnerApiForProductFees.PriceToEstimateFees();
          body.feesEstimateRequest.priceToEstimateFees.listingPrice = new SellingPartnerApiForProductFees.MoneyType();
          body.feesEstimateRequest.priceToEstimateFees.listingPrice.currencyCode = "";
          body.feesEstimateRequest.priceToEstimateFees.listingPrice.amount = ;
          body.feesEstimateRequest.priceToEstimateFees.shipping = new SellingPartnerApiForProductFees.MoneyType();
          body.feesEstimateRequest.priceToEstimateFees.shipping.currencyCode = "";
          body.feesEstimateRequest.priceToEstimateFees.shipping.amount = ;
          body.feesEstimateRequest.priceToEstimateFees.points = new SellingPartnerApiForProductFees.Points();
          body.feesEstimateRequest.priceToEstimateFees.points.pointsNumber = 0;
          body.feesEstimateRequest.priceToEstimateFees.points.pointsMonetaryValue = new SellingPartnerApiForProductFees.MoneyType();
          body.feesEstimateRequest.priceToEstimateFees.points.pointsMonetaryValue.currencyCode = "";
          body.feesEstimateRequest.priceToEstimateFees.points.pointsMonetaryValue.amount = ;
          body.feesEstimateRequest.identifier = "";
          body.feesEstimateRequest.optionalFulfillmentProgram = new SellingPartnerApiForProductFees.OptionalFulfillmentProgram();
          var asin = "asin_example";

          instance.getMyFeesEstimateForASIN(body, asin).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForProductFees.GetMyFeesEstimateResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForProductFees.GetMyFeesEstimateResult);
                  expect(data.payload.feesEstimateResult).to.be.a(SellingPartnerApiForProductFees.FeesEstimateResult);
                    expect(data.payload.feesEstimateResult.status).to.be.a('string');
                // expect(data.payload.feesEstimateResult.status).to.be("");
                expect(data.payload.feesEstimateResult.feesEstimateIdentifier).to.be.a(SellingPartnerApiForProductFees.FeesEstimateIdentifier);
                      expect(data.payload.feesEstimateResult.feesEstimateIdentifier.marketplaceId).to.be.a('string');
                  // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.marketplaceId).to.be("");
                  expect(data.payload.feesEstimateResult.feesEstimateIdentifier.sellerId).to.be.a('string');
                  // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.sellerId).to.be("");
                  expect(data.payload.feesEstimateResult.feesEstimateIdentifier.idType).to.be.a(SellingPartnerApiForProductFees.IdType);
                      expect(data.payload.feesEstimateResult.feesEstimateIdentifier.idValue).to.be.a('string');
                  // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.idValue).to.be("");
                  expect(data.payload.feesEstimateResult.feesEstimateIdentifier.isAmazonFulfilled).to.be.a('boolean');
                  // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.isAmazonFulfilled).to.be(false);
                  expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees).to.be.a(SellingPartnerApiForProductFees.PriceToEstimateFees);
                        expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.listingPrice).to.be.a(SellingPartnerApiForProductFees.MoneyType);
                          expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.listingPrice.currencyCode).to.be.a('string');
                      // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.listingPrice.currencyCode).to.be("");
                      expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.listingPrice.amount).to.be.a('number');
                      // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.listingPrice.amount).to.be();
                    expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.shipping).to.be.a(SellingPartnerApiForProductFees.MoneyType);
                          expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.shipping.currencyCode).to.be.a('string');
                      // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.shipping.currencyCode).to.be("");
                      expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.shipping.amount).to.be.a('number');
                      // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.shipping.amount).to.be();
                    expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points).to.be.a(SellingPartnerApiForProductFees.Points);
                          expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points.pointsNumber).to.be.a('number');
                      // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points.pointsNumber).to.be(0);
                      expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points.pointsMonetaryValue).to.be.a(SellingPartnerApiForProductFees.MoneyType);
                            expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points.pointsMonetaryValue.currencyCode).to.be.a('string');
                        // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points.pointsMonetaryValue.currencyCode).to.be("");
                        expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points.pointsMonetaryValue.amount).to.be.a('number');
                        // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points.pointsMonetaryValue.amount).to.be();
                  expect(data.payload.feesEstimateResult.feesEstimateIdentifier.sellerInputIdentifier).to.be.a('string');
                  // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.sellerInputIdentifier).to.be("");
                  expect(data.payload.feesEstimateResult.feesEstimateIdentifier.optionalFulfillmentProgram).to.be.a(SellingPartnerApiForProductFees.OptionalFulfillmentProgram);
          
                expect(data.payload.feesEstimateResult.feesEstimate).to.be.a(SellingPartnerApiForProductFees.FeesEstimate);
                      expect(data.payload.feesEstimateResult.feesEstimate.timeOfFeesEstimation).to.be.a(Date);
                  // expect(data.payload.feesEstimateResult.feesEstimate.timeOfFeesEstimation).to.be(new Date());
                  expect(data.payload.feesEstimateResult.feesEstimate.totalFeesEstimate).to.be.a(SellingPartnerApiForProductFees.MoneyType);
                        expect(data.payload.feesEstimateResult.feesEstimate.totalFeesEstimate.currencyCode).to.be.a('string');
                    // expect(data.payload.feesEstimateResult.feesEstimate.totalFeesEstimate.currencyCode).to.be("");
                    expect(data.payload.feesEstimateResult.feesEstimate.totalFeesEstimate.amount).to.be.a('number');
                    // expect(data.payload.feesEstimateResult.feesEstimate.totalFeesEstimate.amount).to.be();
                  expect(data.payload.feesEstimateResult.feesEstimate.feeDetailList).to.be.a(SellingPartnerApiForProductFees.FeeDetailList);
          
                expect(data.payload.feesEstimateResult.error).to.be.a(SellingPartnerApiForProductFees.FeesEstimateError);
                      expect(data.payload.feesEstimateResult.error.type).to.be.a('string');
                  // expect(data.payload.feesEstimateResult.error.type).to.be("");
                  expect(data.payload.feesEstimateResult.error.code).to.be.a('string');
                  // expect(data.payload.feesEstimateResult.error.code).to.be("");
                  expect(data.payload.feesEstimateResult.error.message).to.be.a('string');
                  // expect(data.payload.feesEstimateResult.error.message).to.be("");
                  expect(data.payload.feesEstimateResult.error.detail).to.be.a(SellingPartnerApiForProductFees.FeesEstimateErrorDetail);
          
            expect(data.errors).to.be.a(SellingPartnerApiForProductFees.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getMyFeesEstimateForSKU', function() {
        it('should call getMyFeesEstimateForSKU successfully', function(done) {
          // TODO: uncomment, update parameter values for getMyFeesEstimateForSKU call and complete the assertions
          /*
          var body = new SellingPartnerApiForProductFees.GetMyFeesEstimateRequest();
          body.feesEstimateRequest = new SellingPartnerApiForProductFees.FeesEstimateRequest();
          body.feesEstimateRequest.marketplaceId = "";
          body.feesEstimateRequest.isAmazonFulfilled = false;
          body.feesEstimateRequest.priceToEstimateFees = new SellingPartnerApiForProductFees.PriceToEstimateFees();
          body.feesEstimateRequest.priceToEstimateFees.listingPrice = new SellingPartnerApiForProductFees.MoneyType();
          body.feesEstimateRequest.priceToEstimateFees.listingPrice.currencyCode = "";
          body.feesEstimateRequest.priceToEstimateFees.listingPrice.amount = ;
          body.feesEstimateRequest.priceToEstimateFees.shipping = new SellingPartnerApiForProductFees.MoneyType();
          body.feesEstimateRequest.priceToEstimateFees.shipping.currencyCode = "";
          body.feesEstimateRequest.priceToEstimateFees.shipping.amount = ;
          body.feesEstimateRequest.priceToEstimateFees.points = new SellingPartnerApiForProductFees.Points();
          body.feesEstimateRequest.priceToEstimateFees.points.pointsNumber = 0;
          body.feesEstimateRequest.priceToEstimateFees.points.pointsMonetaryValue = new SellingPartnerApiForProductFees.MoneyType();
          body.feesEstimateRequest.priceToEstimateFees.points.pointsMonetaryValue.currencyCode = "";
          body.feesEstimateRequest.priceToEstimateFees.points.pointsMonetaryValue.amount = ;
          body.feesEstimateRequest.identifier = "";
          body.feesEstimateRequest.optionalFulfillmentProgram = new SellingPartnerApiForProductFees.OptionalFulfillmentProgram();
          var sellerSKU = "sellerSKU_example";

          instance.getMyFeesEstimateForSKU(body, sellerSKU).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForProductFees.GetMyFeesEstimateResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForProductFees.GetMyFeesEstimateResult);
                  expect(data.payload.feesEstimateResult).to.be.a(SellingPartnerApiForProductFees.FeesEstimateResult);
                    expect(data.payload.feesEstimateResult.status).to.be.a('string');
                // expect(data.payload.feesEstimateResult.status).to.be("");
                expect(data.payload.feesEstimateResult.feesEstimateIdentifier).to.be.a(SellingPartnerApiForProductFees.FeesEstimateIdentifier);
                      expect(data.payload.feesEstimateResult.feesEstimateIdentifier.marketplaceId).to.be.a('string');
                  // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.marketplaceId).to.be("");
                  expect(data.payload.feesEstimateResult.feesEstimateIdentifier.sellerId).to.be.a('string');
                  // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.sellerId).to.be("");
                  expect(data.payload.feesEstimateResult.feesEstimateIdentifier.idType).to.be.a(SellingPartnerApiForProductFees.IdType);
                      expect(data.payload.feesEstimateResult.feesEstimateIdentifier.idValue).to.be.a('string');
                  // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.idValue).to.be("");
                  expect(data.payload.feesEstimateResult.feesEstimateIdentifier.isAmazonFulfilled).to.be.a('boolean');
                  // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.isAmazonFulfilled).to.be(false);
                  expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees).to.be.a(SellingPartnerApiForProductFees.PriceToEstimateFees);
                        expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.listingPrice).to.be.a(SellingPartnerApiForProductFees.MoneyType);
                          expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.listingPrice.currencyCode).to.be.a('string');
                      // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.listingPrice.currencyCode).to.be("");
                      expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.listingPrice.amount).to.be.a('number');
                      // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.listingPrice.amount).to.be();
                    expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.shipping).to.be.a(SellingPartnerApiForProductFees.MoneyType);
                          expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.shipping.currencyCode).to.be.a('string');
                      // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.shipping.currencyCode).to.be("");
                      expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.shipping.amount).to.be.a('number');
                      // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.shipping.amount).to.be();
                    expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points).to.be.a(SellingPartnerApiForProductFees.Points);
                          expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points.pointsNumber).to.be.a('number');
                      // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points.pointsNumber).to.be(0);
                      expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points.pointsMonetaryValue).to.be.a(SellingPartnerApiForProductFees.MoneyType);
                            expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points.pointsMonetaryValue.currencyCode).to.be.a('string');
                        // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points.pointsMonetaryValue.currencyCode).to.be("");
                        expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points.pointsMonetaryValue.amount).to.be.a('number');
                        // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.priceToEstimateFees.points.pointsMonetaryValue.amount).to.be();
                  expect(data.payload.feesEstimateResult.feesEstimateIdentifier.sellerInputIdentifier).to.be.a('string');
                  // expect(data.payload.feesEstimateResult.feesEstimateIdentifier.sellerInputIdentifier).to.be("");
                  expect(data.payload.feesEstimateResult.feesEstimateIdentifier.optionalFulfillmentProgram).to.be.a(SellingPartnerApiForProductFees.OptionalFulfillmentProgram);
          
                expect(data.payload.feesEstimateResult.feesEstimate).to.be.a(SellingPartnerApiForProductFees.FeesEstimate);
                      expect(data.payload.feesEstimateResult.feesEstimate.timeOfFeesEstimation).to.be.a(Date);
                  // expect(data.payload.feesEstimateResult.feesEstimate.timeOfFeesEstimation).to.be(new Date());
                  expect(data.payload.feesEstimateResult.feesEstimate.totalFeesEstimate).to.be.a(SellingPartnerApiForProductFees.MoneyType);
                        expect(data.payload.feesEstimateResult.feesEstimate.totalFeesEstimate.currencyCode).to.be.a('string');
                    // expect(data.payload.feesEstimateResult.feesEstimate.totalFeesEstimate.currencyCode).to.be("");
                    expect(data.payload.feesEstimateResult.feesEstimate.totalFeesEstimate.amount).to.be.a('number');
                    // expect(data.payload.feesEstimateResult.feesEstimate.totalFeesEstimate.amount).to.be();
                  expect(data.payload.feesEstimateResult.feesEstimate.feeDetailList).to.be.a(SellingPartnerApiForProductFees.FeeDetailList);
          
                expect(data.payload.feesEstimateResult.error).to.be.a(SellingPartnerApiForProductFees.FeesEstimateError);
                      expect(data.payload.feesEstimateResult.error.type).to.be.a('string');
                  // expect(data.payload.feesEstimateResult.error.type).to.be("");
                  expect(data.payload.feesEstimateResult.error.code).to.be.a('string');
                  // expect(data.payload.feesEstimateResult.error.code).to.be("");
                  expect(data.payload.feesEstimateResult.error.message).to.be.a('string');
                  // expect(data.payload.feesEstimateResult.error.message).to.be("");
                  expect(data.payload.feesEstimateResult.error.detail).to.be.a(SellingPartnerApiForProductFees.FeesEstimateErrorDetail);
          
            expect(data.errors).to.be.a(SellingPartnerApiForProductFees.ErrorList);
    
            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getMyFeesEstimates', function() {
        it('should call getMyFeesEstimates successfully', function(done) {
          // TODO: uncomment, update parameter values for getMyFeesEstimates call and complete the assertions
          /*
          var body = new SellingPartnerApiForProductFees.GetMyFeesEstimatesRequest();

          instance.getMyFeesEstimates(body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForProductFees.GetMyFeesEstimatesResponse);

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