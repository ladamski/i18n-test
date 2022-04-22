import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import ICU from "i18next-icu";
import { join } from "path"
import { readdirSync, lstatSync } from "fs"

// plurals, see https://www.i18next.com/translation-function/plurals
i18next
    .use(ICU)
    .use(Backend)
    .init({
        // debug: true,
        initImmediate: false,
        fallbackLng: 'en',
        lng: 'en',
        // ns: 'backend-app',
        // defaultNS: 'backend-app',
        backend: {
          loadPath: join(".", './locales/{{lng}}/{{lng}}.json'),
        },
    })

// initialized and ready to go!
console.log('** EN')
console.log(i18next.t('tab.title', {count: 1}) );
console.log(i18next.t('tab.title', {count: 3}) );
console.log(i18next.t('tab.title', {count: 500}) );
i18next.changeLanguage('pl')
console.log('** PL')
console.log(i18next.t('tab.title', {count: 1}) );
console.log(i18next.t('tab.title', {count: 3}) );
console.log(i18next.t('tab.title', {count: 500}) );
