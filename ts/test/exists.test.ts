
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SepomexSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await SepomexSDK.test()
    equal(null !== testsdk, true)
  })

})
