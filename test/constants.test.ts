import { INIT_CODE_HASH } from '../src/constants'

import { bytecode } from '@infinitywallet/infinity-core/build/InfinityPair.json'
import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    })
    it('matches computed bytecode hash', () => {
      expect(INIT_CODE_HASH).toEqual('0xe1abf0101f3e1c81c47056520722910d4e628bc13e1fb9b3f7cc3b877b34b959')
    })
  })
})
