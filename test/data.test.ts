import { ChainId, WETH, Token, Fetcher } from '../src'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3') // DAI
    expect(token.decimals).toEqual(18)
  })

  it('Token:CACHE', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.BSCTESTNET, '0xa849A256995215E013108cd3835fA3feE2CECd21') // STest
    expect(token.decimals).toEqual(8)
  })

  it('Pair', async () => {
    const token = new Token(ChainId.BSCTESTNET, '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867', 18) // DAI
    const pair = await Fetcher.fetchPairData(WETH[ChainId.BSCTESTNET], token)
    expect(pair.liquidityToken.address).toEqual('0xA1F15f443AF0EbA3c500cBf51f13AAfeff0710CD')
  })
})
