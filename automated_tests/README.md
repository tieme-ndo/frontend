# Automated Tests using Nightwatch

## Description

Automated actions against a real browser using Nightwatch, Webdriver.io and chromedriver.
This test should not run in a shared database. You should always run it in a test environment with its dedicated database.

## Requirements to run
- Chrome installed locally in your device
- ENV variables: `REACT_APP_URL`, `ADMIN_USER_TEST`, `ADMIN_PASSWORD_TEST`
- `REACT_APP_URL`: It's the url against the test is going to be executed. By default, if none, will use localhost.
- `ADMIN_USER_TEST`: Admin username used to log in and perform the different interactions. By default uses `adminusertest`.
- `ADMIN_PASSWORD_TEST`: Password for the Admin username. By default uses `123456`.

## How to run
Execute `$ yarn run nightwatch`.

## Actions covered
- Login using `ADMIN_USER_TEST`.
- Create a new farmer.
- Edit a farmer.
- Delete a farmer
