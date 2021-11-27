import * as assert from 'assert'
import { validate, formatReg } from './index.js'

describe('vehicle number format', () => {
  const currentFormat = 'AB12CDE'

  const originalFormats = [
    'A1', 'AB1', 'ABC2', 'ABC12', 'ABC123', 'A12', 'A123', 'A1234', 'AB12', 'AB123', 'AB1234'
  ]

  const originalReverseFormats = [
    '1A', '1AB', '2ABC', '12ABC', '123ABC', '12A', '123A', '1234A', '12AB', '123AB', '1234AB'
  ]

  const yearSuffix = [
    'ABC1D', 'ABC12D', 'ABC123D'
  ]

  const yearPrefix = [
    'A1ABC', 'A10BCD', 'A123ABC'
  ]

  const oddFormats = {
    northernIreland: 'MIB1234',
    isleOfMan: 'MAN1234',
    diplomatic: '275D286'
  }

  const invalidFormats = [
    'AA', '12', 'AB123CDE', 'ABCD1', 'ABC1234', 'A01BCD', '123X234'
  ]

  describe('validate', () => {
    it('should return true for current format', () => {
      assert.equal(validate(currentFormat), true)
    })

    it('should return true for original formats', () => {
      originalFormats.forEach(reg => {
        assert.equal(validate(reg), true)
      })
    })

    it('should return true for original reverse formats', () => {
      originalReverseFormats.forEach(reg => {
        assert.equal(validate(reg), true)
      })
    })

    it('should return true for year suffix formats', () => {
      yearSuffix.forEach(reg => {
        assert.equal(validate(reg), true)
      })
    })

    it('should return true for year prefix formats', () => {
      yearPrefix.forEach(reg => {
        assert.equal(validate(reg), true)
      })
    })

    it('should return true for Northern Ireland, Isle of Man and diplomatic formats', () => {
      (Object.values(oddFormats)).forEach(reg => {
        assert.equal(validate(reg), true)
      })
    })

    it('should return false for invalid formats', () => {
      invalidFormats.forEach(reg => {
        assert.equal(validate(reg), false)
      })
    })
  })

  describe('formatReg', () => {
    const currentFormatted = 'AB12 CDE'

    const originalFormatted = [
      'A 1', 'AB 1', 'ABC 2', 'ABC 12', 'ABC 123', 'A 12', 'A 123', 'A 1234', 'AB 12', 'AB 123', 'AB 1234'
    ]

    const originalReverseFormatted = [
      '1 A', '1 AB', '2 ABC', '12 ABC', '123 ABC', '12 A', '123 A', '1234 A', '12 AB', '123 AB', '1234 AB'
    ]

    const yearSuffixFormatted = [
      'ABC 1D', 'ABC 12D', 'ABC 123D'
    ]

    const yearPrefixFormatted = [
      'A1 ABC', 'A10 BCD', 'A123 ABC'
    ]

    const oddFormatsFormatted = [
      'MIB 1234', 'MAN 1234', '275 D 286'
    ]

    it('should return correctly formatted for current pattern', () => {
      assert.equal(formatReg(currentFormat), currentFormatted)
    })

    it('should return correctly formatted for original patterns', () => {
      const formatted = originalFormats.map(reg => formatReg(reg))

      formatted.forEach((reg, i) => {
        assert.equal(reg, originalFormatted[i])
      })
    })

    it('should return correctly formatted for original reverse patterns', () => {
      const formatted = originalReverseFormats.map(reg => formatReg(reg))

      formatted.forEach((reg, i) => {
        assert.equal(reg, originalReverseFormatted[i])
      })
    })

    it('should return correctly formatted for year suffix patterns', () => {
      const formatted = yearSuffix.map(reg => formatReg(reg))

      formatted.forEach((reg, i) => {
        assert.equal(reg, yearSuffixFormatted[i])
      })
    })

    it('should return correctly formatted for year prefix patterns', () => {
      const formatted = yearPrefix.map(reg => formatReg(reg))

      formatted.forEach((reg, i) => {
        assert.equal(reg, yearPrefixFormatted[i])
      })
    })

    it('should return correctly formatted for Northern Ireland, Isle of Man and diplomatic patterns', () => {
      const formatted = Object.values(oddFormats).map(reg => formatReg(reg))

      formatted.forEach((reg, i) => {
        assert.equal(reg, oddFormatsFormatted[i])
      })
    })
  })
})
