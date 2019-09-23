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
      .pause(3500)
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
      .click("//span[text()='Mr']")
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
      .setValue('input[name=family_size]', '4')
      .setValue('input[name=number_of_dependant]', '2')
      .click('div[data-name=highest_level_of_dependent]')
      .useXpath()
      .execute(
        'document.querySelectorAll("[data-name=\'highest_level_of_dependent\']")[0].children[2].children[1].click()'
      )
      .useCss()
      .click('div[data-name=family_income_per_month]')
      .useXpath()
      .execute(
        'document.querySelectorAll("[data-name=\'family_income_per_month\']")[0].children[2].children[1].click()'
      )
      .execute(
        'document.getElementsByTagName("button")[1].click()'
      )
      .useCss();
  },

  'step five: add guarantor info': function(browser) {
    browser
      .click('div[data-name=grt_title]')
      .useXpath()
      .execute(
        'document.querySelectorAll("[data-name=\'grt_title\']")[0].children[2].children[1].click()'
      )
      .useCss()
      .setValue('input[name=grt_surname]', 'Test')
      .setValue('input[name=grt_first_name]', 'Guarantor')
      .click('div[data-name=grt_gender]')
      .useXpath()
      .execute(
        'document.querySelectorAll("[data-name=\'grt_gender\']")[0].children[2].children[1].click()'
      )
      .useCss()
      .setValue('input[name=grt_relations]', 'Friend')
      .setValue('input[name=grt_residential_address]', 'Fake Street 123')
      .setValue('input[name=grt_occupation]', 'Guarantor')
      .setValue('input[name=grt_phone]', '0184848282')
      .setValue('input[name=grt_district]', 'District')
      .setValue('input[name=grt_region]', 'Region')
      .useXpath()
      .execute('document.getElementsByTagName("button")[2].click()')
      .pause(3000)
      .end();
  }
};
