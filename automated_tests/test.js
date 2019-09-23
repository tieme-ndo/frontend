module.exports = {
  'step one: login': function(browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 1000)
      .setValue('input[name=username]', 'david')
      .setValue('input[name=password]', '1234567')
      .click('button');
  },
  'step two: click add farmer': function(browser) {
    browser
      .pause(3000)
      .assert.containsText('body', 'All Farmers')
      .useXpath()
      .click("//*[contains(text(),'Add Farmer')]")
      .pause(1000);
  },
  'step three: add farmer info': function(browser) {
    browser
      .useCss()
      .click('div[data-name=title]')
      .useXpath()
      .click("//span[text()='Miss']")
      .useCss()
      .setValue('input[name=first_name]', 'Automated')
      .setValue('input[name=surname]', 'Test')
      .click('div[data-name=marital_status]')
      .useXpath()
      .click("//span[text()='Single']")
      .useCss()
      .click('div[data-name=gender]')
      .useXpath()
      .click("//span[text()='Male']")
      .useCss()
      .setValue('input[name=place_of_birth]', 'Amazing Place')
      .setValue('input[name=date_of_birth]', '01011985')
      .click('div[data-name=id_type]')
      .useXpath()
      .click("//span[text()='National ID']")
      .useCss()
      .setValue('input[name=id_number]', 'C-01011985')
      .setValue('input[name=district]', 'District')
      .setValue('input[name=region]', 'Region')
      .setValue('input[name=community_name]', 'Community')
      .setValue('input[name=house_name]', 'House')
      .setValue('input[name=house_number]', '1')
      .setValue('input[name=nearest_landmark]', 'Landmark')
      .setValue('input[name=Phone_1]', '02424284829')
      .setValue('input[name=Phone_2]', '02535673262')
      .click('div[data-name=education_level]')
      .useXpath()
      .click("//span[text()='Tertiary']")
      .useCss()
      .setValue('input[name=occupation]', 'Farmer')
      .click('div[data-name=expected_income_per_month]')
      .useXpath()
      .click("//span[text()='Less than GHC 500']")
      .useCss()
      .setValue('input[name=major_source_of_income_name]', 'Farm')
      .setValue('input[name=major_source_of_income_amount]', '499')
      .setValue('input[name=minor_source_of_income_name]', 'Farm')
      .setValue('input[name=minor_source_of_income_amount]', '199')
      .useXpath()
      .click("//*[contains(text(),'Next')]")
      .useCss();
  },

  'step four: add family info': function(browser) {
    browser
      .pause(2000)
      .end();
  }
};
