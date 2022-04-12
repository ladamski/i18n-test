import {createIntl, createIntlCache, defineMessages, formatMessage} from '@formatjs/intl'
// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache()

const enIntl = createIntl({ locale: 'en' }, cache)
const plIntl = createIntl({ locale: 'pl' }, cache)

const enMessages = defineMessages({
  closeTabs: {
    id: 'app.closeTabs',
    defaultMessage: `Close {tabCount, plural,
  one {# tab}
  other {# tabs}
}`,
    description: 'Close prompt',
  },
})

const plMessages = defineMessages({
  closeTabs: {
    id: 'app.closeTabs',
    defaultMessage: `Zamknij {tabCount, plural,
one {kartę}
few {# karty}
other {# kart}
}`,
    description: 'Close prompt',
  },
})

console.log('** EN')
console.log(enIntl.formatMessage(enMessages.closeTabs, {tabCount: 1}))
console.log(enIntl.formatMessage(enMessages.closeTabs, {tabCount: 2}))
console.log(enIntl.formatMessage(enMessages.closeTabs, {tabCount: 500}))
console.log('** PL')
console.log(plIntl.formatMessage(plMessages.closeTabs, {tabCount: 1}))
console.log(plIntl.formatMessage(plMessages.closeTabs, {tabCount: 2}))
console.log(plIntl.formatMessage(plMessages.closeTabs, {tabCount: 500}))
