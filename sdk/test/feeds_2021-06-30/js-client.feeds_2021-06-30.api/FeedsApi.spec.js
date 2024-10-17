/*
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * OpenAPI spec version: 2021-06-30
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
    define(['expect.js', '../../../src/feeds_2021-06-30/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/feeds_2021-06-30/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFeeds);
  }
}(this, function(expect, SellingPartnerApiForFeeds) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForFeeds.FeedsApi();
  });

  describe('feeds_2021-06-30', function() {
    describe('FeedsApi', function() {
      describe('cancelFeed', function() {
        it('should call cancelFeed successfully', function(done) {
          // TODO: uncomment, update parameter values for cancelFeed call
          /*
          var feedId = "feedId_example";

          instance.cancelFeed(feedId).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createFeed', function() {
        it('should call createFeed successfully', function(done) {
          // TODO: uncomment, update parameter values for createFeed call and complete the assertions
          /*
          var body = new SellingPartnerApiForFeeds.CreateFeedSpecification();
          body.feedType = "";
          body.marketplaceIds = [""];
          body.inputFeedDocumentId = "";
          body.feedOptions = new SellingPartnerApiForFeeds.FeedOptions();

          instance.createFeed(body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForFeeds.CreateFeedResponse);
            expect(data.feedId).to.be.a('string');
            // expect(data.feedId).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createFeedDocument', function() {
        it('should call createFeedDocument successfully', function(done) {
          // TODO: uncomment, update parameter values for createFeedDocument call and complete the assertions
          /*
          var body = new SellingPartnerApiForFeeds.CreateFeedDocumentSpecification();
          body.contentType = "";

          instance.createFeedDocument(body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForFeeds.CreateFeedDocumentResponse);
            expect(data.feedDocumentId).to.be.a('string');
            // expect(data.feedDocumentId).to.be("");
            expect(data.url).to.be.a('string');
            // expect(data.url).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFeed', function() {
        it('should call getFeed successfully', function(done) {
          // TODO: uncomment, update parameter values for getFeed call and complete the assertions
          /*
          var feedId = "feedId_example";

          instance.getFeed(feedId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForFeeds.Feed);
            expect(data.feedId).to.be.a('string');
            // expect(data.feedId).to.be("");
            expect(data.feedType).to.be.a('string');
            // expect(data.feedType).to.be("");
            {
              let dataCtr = data.marketplaceIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }
            expect(data.createdTime).to.be.a(Date);
            // expect(data.createdTime).to.be(new Date());
            expect(data.processingStatus).to.be.a('string');
            // expect(data.processingStatus).to.be("CANCELLED");
            expect(data.processingStartTime).to.be.a(Date);
            // expect(data.processingStartTime).to.be(new Date());
            expect(data.processingEndTime).to.be.a(Date);
            // expect(data.processingEndTime).to.be(new Date());
            expect(data.resultFeedDocumentId).to.be.a('string');
            // expect(data.resultFeedDocumentId).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFeedDocument', function() {
        it('should call getFeedDocument successfully', function(done) {
          // TODO: uncomment, update parameter values for getFeedDocument call and complete the assertions
          /*
          var feedDocumentId = "feedDocumentId_example";

          instance.getFeedDocument(feedDocumentId).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForFeeds.FeedDocument);
            expect(data.feedDocumentId).to.be.a('string');
            // expect(data.feedDocumentId).to.be("");
            expect(data.url).to.be.a('string');
            // expect(data.url).to.be("");
            expect(data.compressionAlgorithm).to.be.a('string');
            // expect(data.compressionAlgorithm).to.be("GZIP");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFeeds', function() {
        it('should call getFeeds successfully', function(done) {
          // TODO: uncomment, update parameter values for getFeeds call and complete the assertions
          /*
          var opts = {};
          opts.feedTypes = ["feedTypes_example"];
          opts.marketplaceIds = ["marketplaceIds_example"];
          opts.pageSize = 10;
          opts.processingStatuses = ["processingStatuses_example"];
          opts.createdSince = new Date("2013-10-20T19:20:30+01:00");
          opts.createdUntil = new Date("2013-10-20T19:20:30+01:00");
          opts.nextToken = "nextToken_example";

          instance.getFeeds(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SellingPartnerApiForFeeds.GetFeedsResponse);
            expect(data.feeds).to.be.a(SellingPartnerApiForFeeds.FeedList);
                expect(data.nextToken).to.be.a('string');
            // expect(data.nextToken).to.be("");

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
