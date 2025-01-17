/*
 * Selling Partner API for FBA Inbound Eligibilty
 * With the FBA Inbound Eligibility API, you can build applications that let sellers get eligibility previews for items before shipping them to Amazon's fulfillment centers. With this API you can find out if an item is eligible for inbound shipment to Amazon's fulfillment centers in a specific marketplace. You can also find out if an item is eligible for using the manufacturer barcode for FBA inventory tracking. Sellers can use this information to inform their decisions about which items to ship Amazon's fulfillment centers.
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
    define(['expect.js', '../../../src/fbaInbound/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fbaInbound/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFbaInboundEligibilty);
  }
}(this, function(expect, SellingPartnerApiForFbaInboundEligibilty) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForFbaInboundEligibilty.FbaInboundApi();
  });

  describe('fbaInbound', function() {
    describe('FbaInboundApi', function() {
      describe('getItemEligibilityPreview', function() {
        it('should call getItemEligibilityPreview successfully', function(done) {
          // TODO: uncomment, update parameter values for getItemEligibilityPreview call and complete the assertions
          /*
          var asin = "asin_example";
          var program = "program_example";
          var opts = {};
          opts.marketplaceIds = ["marketplaceIds_example"];

          instance.getItemEligibilityPreview(asin, program, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForFbaInboundEligibilty.GetItemEligibilityPreviewResponse);
            expect(data.payload).to.be.a(SellingPartnerApiForFbaInboundEligibilty.ItemEligibilityPreview);
                  expect(data.payload.asin).to.be.a('string');
              // expect(data.payload.asin).to.be("");
              expect(data.payload.marketplaceId).to.be.a('string');
              // expect(data.payload.marketplaceId).to.be("");
              expect(data.payload.program).to.be.a('string');
              // expect(data.payload.program).to.be("INBOUND");
              expect(data.payload.isEligibleForProgram).to.be.a('boolean');
              // expect(data.payload.isEligibleForProgram).to.be(false);
              {
                let dataCtr = data.payload.ineligibilityReasonList;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  // expect(data).to.be("FBA_INB_0004");
                }
              }
            expect(data.errors).to.be.a(SellingPartnerApiForFbaInboundEligibilty.ErrorList);
    
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
