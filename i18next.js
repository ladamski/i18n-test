import i18next from 'i18next';

// plurals, see https://www.i18next.com/translation-function/plurals
i18next.init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: false,
    resources: {
        en: {
            translation: {
                "tab_one": "Close one tab",
                "tab_other": "Close {{count}} tabs"
            }            
        },
        pl: {
            translation: {
                "tab_one": "Zamknij kartę",
                "tab_few": "Zamknij {{count}} karty", // applies to some languages like PL that support multiple plurals, not EN
                "tab_many": "Zamknij {{count}} kart",
            }            
        },
    }
});

// initialized and ready to go!
//  document.getElementById('output').innerHTML = i18next.t('key');
console.log('** EN')
console.log(i18next.t('tab', {count: 1}) );
console.log(i18next.t('tab', {count: 3}) );
console.log(i18next.t('tab', {count: 500}) );
i18next.changeLanguage('pl')
console.log('** PL')
console.log(i18next.t('tab', {count: 1}) );
console.log(i18next.t('tab', {count: 3}) );
console.log(i18next.t('tab', {count: 500}) );
