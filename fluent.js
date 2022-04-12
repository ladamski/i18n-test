import {FluentBundle, FluentResource} from "@fluent/bundle";

let enResource = new FluentResource(`
tabs-close = {$tabCount ->
    [one] Close {$tabCount} tab
   *[other] Close {$tabCount} tabs
}`
)

let plResource = new FluentResource(`
tabs-close = {$tabCount ->
    [one] Zamknij kartę
    [few] Zamknij {$tabCount} karty
   *[many] Zamknij { $tabCount } kart
}`
)

let enBundle = new FluentBundle("en-US");
enBundle.addResource(enResource);

let plBundle = new FluentBundle("pl-PL");
plBundle.addResource(plResource);

let enWelcome = enBundle.getMessage("tabs-close");
if (enWelcome.value) {
    console.log('** EN')
    console.log(enBundle.formatPattern(enWelcome.value, {tabCount: 1}))
    console.log(enBundle.formatPattern(enWelcome.value, {tabCount: 3}))
    console.log(enBundle.formatPattern(enWelcome.value, {tabCount: 500}))
}

let plWelcome = plBundle.getMessage("tabs-close");
if (plWelcome.value) {
    console.log('** PL')
    console.log(plBundle.formatPattern(plWelcome.value, {tabCount: 1}))
    console.log(plBundle.formatPattern(plWelcome.value, {tabCount: 3}))
    console.log(plBundle.formatPattern(plWelcome.value, {tabCount: 500}))
}
