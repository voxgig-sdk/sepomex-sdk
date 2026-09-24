
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SepomexSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = SepomexSDK.test()
    equal(testsdk instanceof SepomexSDK, true,
      'SepomexSDK.test() must return a client synchronously')
  })

})
