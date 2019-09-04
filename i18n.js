const NextI18Next = require('next-i18next/dist/commonjs');

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: 'en',
	otherLanguages: ['en', 'es'],
	fallbackLng: 'en',
	lng: 'en',
});

module.exports = NextI18NextInstance;
