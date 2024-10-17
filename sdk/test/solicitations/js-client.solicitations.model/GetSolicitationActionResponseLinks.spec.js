/*
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient's Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
    define(['expect.js', '../../../src/solicitations/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/solicitations/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForSolicitations);
  }
}(this, function(expect, SellingPartnerApiForSolicitations) {
  'use strict';

  var instance;

  describe('solicitations', function() {
    describe('GetSolicitationActionResponseLinks', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForSolicitations.GetSolicitationActionResponseLinks();
      });

      it('should create an instance of GetSolicitationActionResponseLinks', function() {
        // TODO: update the code to test GetSolicitationActionResponseLinks
        expect(instance).to.be.a(SellingPartnerApiForSolicitations.GetSolicitationActionResponseLinks);
      });

      it('should have the property self (base name: "self")', function() {
        // TODO: update the code to test the property self
        expect(instance).to.have.property('self');
        // expect(instance.self).to.be(expectedValueLiteral);
      });

      it('should have the property schema (base name: "schema")', function() {
        // TODO: update the code to test the property schema
        expect(instance).to.have.property('schema');
        // expect(instance.schema).to.be(expectedValueLiteral);
      });

    });
  });

}));
