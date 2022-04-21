import i18next from 'i18next';
// import Backend from 'i18next-http-backend';
import ICU from "i18next-icu";

// plurals, see https://www.i18next.com/translation-function/plurals
i18next
    .use(ICU)
    // .use(Backend)
    .init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: false,
    resources: {
        en: {
            translation: {
                tab: `Close {count, plural,
one {# tab}
other {# tabs}
}`            
            }            
        },
        pl: {
            translation: {
                tab: `Zamknij {count, plural,
one {kartę}
few {# karty}
other {# kart}
}`
            }            
        },
    }
});

// initialized and ready to go!
console.log('** EN')
console.log(i18next.t('tab', {count: 1}) );
console.log(i18next.t('tab', {count: 3}) );
console.log(i18next.t('tab', {count: 500}) );
i18next.changeLanguage('pl')
console.log('** PL')
console.log(i18next.t('tab', {count: 1}) );
console.log(i18next.t('tab', {count: 3}) );
console.log(i18next.t('tab', {count: 500}), 'comment' );
