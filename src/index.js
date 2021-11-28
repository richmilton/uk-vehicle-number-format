const currentFormat = 'LLNNLLL'
const niManxFormat = 'LLLNNNN'
const diplomatic = 'NNNLNNN'

const ukHistorical = [
  'LN',
  'LNN',
  'LNNN',
  'LNNNN',
  'LLN',
  'LLNN',
  'LLNNN',
  'LLNNNN',
  'LLLN',
  'LLLNN',
  'LLLNNN',
  'NL',
  'NLL',
  'NLLL',
  'NNL',
  'NNLL',
  'NNLLL',
  'NNNL',
  'NNNLL',
  'NNNLLL',
  'NNNNL',
  'NNNNLL',
  'LLLNL',
  'LLLNNL',
  'LLLNNNL',
  'LNLLL',
  'LNNLLL',
  'LNNNLLL'
]

const getRegPattern = regChars => regChars
  .map(c => /[0-9]/.test(c) ? 'N' : 'L')
  .join('')

const validate = reg => {
  const upperCaseReg = reg.toUpperCase()
  const pattern = getRegPattern(reg.split(''))

  if (pattern === currentFormat) return true
  if (pattern === niManxFormat && /I|Z|MAN/.test(upperCaseReg)) return true
  if (pattern === diplomatic && /D/.test(upperCaseReg)) return true
  if (ukHistorical.includes(pattern) && reg[pattern.indexOf('N')] !== '0') return true

  return false
}

const formatReg = reg => {
  const regChars = reg.split('')
  const format = getRegPattern(regChars)

  if (format === diplomatic) {
    return regChars.join('').replace(/D/, ' D ')
  }

  let index = format.indexOf('LLL')
  let spaceIndex = 0

  if (index === 0) spaceIndex = 3
  if (index > 0) spaceIndex = index

  if (index === -1) {
    index = format.indexOf('LL')
    if (index === 0) spaceIndex = 2
    if (index > 0) spaceIndex = index
  }

  if (index === -1) {
    index = format.indexOf('L')
    if (index === 0) spaceIndex = 1
    if (index > 0) spaceIndex = index
  }

  if (spaceIndex) regChars.splice(spaceIndex, 0, ' ')

  return regChars.join('').toUpperCase()
}

module.exports = {
  formatReg,
  validate
}
