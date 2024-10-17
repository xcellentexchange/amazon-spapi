/*
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * OpenAPI spec version: 2022-11-07
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
    define(['expect.js', '../../../src/replenishment-2022-11-07/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/replenishment-2022-11-07/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForReplenishment);
  }
}(this, function(expect, SellingPartnerApiForReplenishment) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForReplenishment.SellingpartnersApi();
  });

  describe('replenishment-2022-11-07', function() {
    describe('SellingpartnersApi', function() {
      describe('getSellingPartnerMetrics', function() {
        it('should call getSellingPartnerMetrics successfully', function(done) {
          // TODO: uncomment, update parameter values for getSellingPartnerMetrics call and complete the assertions
          /*
          var opts = {};
          opts.body = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsRequest();
          opts.body.aggregationFrequency = new SellingPartnerApiForReplenishment.AggregationFrequency();
          opts.body.timeInterval = new SellingPartnerApiForReplenishment.TimeInterval();
          opts.body.timeInterval.startDate = new Date();
          opts.body.timeInterval.endDate = new Date();
          opts.body.metrics = [new SellingPartnerApiForReplenishment.Metric()];
          opts.body.timePeriodType = new SellingPartnerApiForReplenishment.TimePeriodType();
          opts.body.marketplaceId = new SellingPartnerApiForReplenishment.MarketplaceId();
          opts.body.programTypes = new SellingPartnerApiForReplenishment.ProgramTypes();

          instance.getSellingPartnerMetrics(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponse);
            {
              let dataCtr = data.metrics;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric);
                expect(data.notDeliveredDueToOOS).to.be.a('number');
                // expect(data.notDeliveredDueToOOS).to.be(0.0);
                expect(data.totalSubscriptionsRevenue).to.be.a('number');
                // expect(data.totalSubscriptionsRevenue).to.be(0.0);
                expect(data.shippedSubscriptionUnits).to.be.a('number');
                // expect(data.shippedSubscriptionUnits).to.be();
                expect(data.activeSubscriptions).to.be.a('number');
                // expect(data.activeSubscriptions).to.be();
                expect(data.subscriberAverageRevenue).to.be.a('number');
                // expect(data.subscriberAverageRevenue).to.be(0.0);
                expect(data.nonSubscriberAverageRevenue).to.be.a('number');
                // expect(data.nonSubscriberAverageRevenue).to.be(0.0);
                expect(data.lostRevenueDueToOOS).to.be.a('number');
                // expect(data.lostRevenueDueToOOS).to.be(0.0);
                expect(data.subscriberAverageReorders).to.be.a('number');
                // expect(data.subscriberAverageReorders).to.be(0.0);
                expect(data.nonSubscriberAverageReorders).to.be.a('number');
                // expect(data.nonSubscriberAverageReorders).to.be(0.0);
                expect(data.couponsRevenuePenetration).to.be.a('number');
                // expect(data.couponsRevenuePenetration).to.be(0.0);
                expect(data.timeInterval).to.be.a(SellingPartnerApiForReplenishment.TimeInterval);
                      expect(data.timeInterval.startDate).to.be.a(Date);
                  // expect(data.timeInterval.startDate).to.be(new Date());
                  expect(data.timeInterval.endDate).to.be.a(Date);
                  // expect(data.timeInterval.endDate).to.be(new Date());
                expect(data.currencyCode).to.be.a('string');
                // expect(data.currencyCode).to.be("");
              }
            }

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