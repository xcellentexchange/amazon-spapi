# Amazon Selling Partner Client API

## About this repository

This repository was created by using [Amazon's JavaScript SDK for Node.js](https://github.com/amzn/selling-partner-api-models/tree/main/clients/sellingpartner-api-aa-javascript) by following the [Tutorial: Automate your SP-API Calls Using a JavaScript SDK for Node.js](https://developer-docs.amazon.com/sp-api/docs/tutorial-automate-your-sp-api-calls-using-javascript-sdk-for-node-js).

## How to install

```bash
npm install git+git@github.com:xcellentexchange/amazon-spapi.git
```

### Calling SP-API operation with LWA credentials

```javascript
import { SellersApi, ApiClient as SellersApiClient } from 'amazon-spapi/sdk/src/sellers/index.js'

const sellerApiClient = new SellersApiClient('https://sellingpartnerapi-na.amazon.com')
const sellerApi = new SellersApi(sellerApiClient)
sellerApiClient.enableAutoRetrievalAccessToken('<client ID>', '<client secret>', '<refresh token>')
const participations = await sellerApi.getMarketplaceParticipations()
```

### Calling RDT-required SP-API operation with LWA credentials

```javascript
import { OrdersV0Api, ApiClient as OrdersApiClient } from 'amazon-spapi/sdk/src/ordersV0/index.js'

const ordersApiClient = new OrdersApiClient('https://sellingpartnerapi-fe.amazon.com')
ordersApiClient.enableAutoRetrievalRestrictedDataToken('<client ID>', '<client secret>', '<refresh token>', ['buyerInfo', 'shippingAddress'])
const ordersApi = new OrdersV0Api(ordersApiClient)
const order = await ordersApi.getOrder('<order ID to retrieve>')
```

### Calling SP-API with access token

In case you manage LWA token refresh flow, you can explicitly use the access token you got yourself for your SP-API call as follows.

```javascript
import { SellersApi, ApiClient as SellersApiClient } from 'amazon-spapi/sdk/src/sellers/index.js'

const sellerApiClient = new SellersApiClient('https://sellingpartnerapi-fe.amazon.com')
const sellerApi = new SellersApi(sellerApiClient)
sellerApiClient.applyXAmzAccessTokenToRequest('<access token you retrieve yourself>')
const participations = await sellerApi.getMarketplaceParticipations()
```

### LWA Token refresh helper

The following code shows how to use `LwaAuthClient` to execute token refresh flow.

```javascript
import { LwaAuthClient } from 'amazon-spapi/src/helper/LwaAuthClient.mjs'

const lwaClient = new LwaAuthClient('<client ID>', '<client secret>', '<refresh token>')
const accessToken = await lwaClient.getAccessToken()
```
