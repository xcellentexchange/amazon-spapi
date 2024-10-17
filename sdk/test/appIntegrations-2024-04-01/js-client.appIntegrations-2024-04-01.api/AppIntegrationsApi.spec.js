/*
 * The Selling Partner API for third party application integrations.
 * With the AppIntegrations API v2024-04-01, you can send notifications to Amazon Selling Partners and display the notifications in Seller Central.
 *
 * OpenAPI spec version: 2024-04-01
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
    define(['expect.js', '../../../src/appIntegrations-2024-04-01/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/appIntegrations-2024-04-01/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForThirdPartyApplicationIntegrations);
  }
}(this, function(expect, TheSellingPartnerApiForThirdPartyApplicationIntegrations) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.AppIntegrationsApi();
  });

  describe('appIntegrations-2024-04-01', function() {
    describe('AppIntegrationsApi', function() {
      describe('createNotification', function() {
        it('should call createNotification successfully', function(done) {
          // TODO: uncomment, update parameter values for createNotification call and complete the assertions
          /*
          var body = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.CreateNotificationRequest();
          body.templateId = "";
          body.notificationParameters = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.NotificationParameters();
          body.marketplaceId = "";

          instance.createNotification(body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(TheSellingPartnerApiForThirdPartyApplicationIntegrations.CreateNotificationResponse);
            expect(data.notificationId).to.be.a('string');
            // expect(data.notificationId).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteNotifications', function() {
        it('should call deleteNotifications successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteNotifications call
          /*
          var body = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.DeleteNotificationsRequest();
          body.templateId = "";
          body.deletionReason = "INCORRECT_CONTENT";

          instance.deleteNotifications(body).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('recordActionFeedback', function() {
        it('should call recordActionFeedback successfully', function(done) {
          // TODO: uncomment, update parameter values for recordActionFeedback call
          /*
          var notificationId = "notificationId_example";
          var body = new TheSellingPartnerApiForThirdPartyApplicationIntegrations.RecordActionFeedbackRequest();
          body.feedbackActionCode = "SELLER_ACTION_COMPLETED";

          instance.recordActionFeedback(notificationId, body).then(function(data) {

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
