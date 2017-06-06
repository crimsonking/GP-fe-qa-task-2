Feature('Search for Mayfair Roulette game');

Before((I) => {
	I.amOnPage('/en-gb');
});

Scenario('Test game search', (I) => {
	I.seeElement('button.btn-search-magnifier');
	I.click('button.btn-search-magnifier');
	I.seeElement('div.search__form');
	I.click('div.search__form > div > input');
	I.fillField('div.search__form > div > input', "Mayfair Roulette");

	I.click('div.tile');
	I.see('Play Now');
	I.scrollTo('.o-btn--big');
	I.click('Play Now');

	I.waitForVisible('div.modal-header');

	I.see('username');
	I.see('password');
});
