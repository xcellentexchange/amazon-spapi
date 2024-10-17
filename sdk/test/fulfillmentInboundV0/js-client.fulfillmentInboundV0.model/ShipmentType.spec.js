/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
    define(['expect.js', '../../../src/fulfillmentInboundV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/fulfillmentInboundV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFulfillmentInbound);
  }
}(this, function(expect, SellingPartnerApiForFulfillmentInbound) {
  'use strict';

  var instance;

  describe('fulfillmentInboundV0', function() {
    describe('ShipmentType', function() {
      beforeEach(function() {
        instance = SellingPartnerApiForFulfillmentInbound.ShipmentType;
      });

      it('should create an instance of ShipmentType', function() {
        // TODO: update the code to test ShipmentType
        expect(instance).to.be.a('object');
      });

      it('should have the property SP', function() {
        expect(instance).to.have.property('SP');
        expect(instance.SP).to.be("SP");
      });

      it('should have the property LTL', function() {
        expect(instance).to.have.property('LTL');
        expect(instance.LTL).to.be("LTL");
      });

    });
  });

}));
