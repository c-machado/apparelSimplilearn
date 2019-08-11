Feature: As a user I want to register in the Apparel page so I can manage my billing data

  Scenario Outline: Successful register
    Given I am at home page
    When I click to sign in
    And I fill out a valid "<email>"
    And I click to create account
    And I fill out the personal info "<title>""<firstName>""<lastName>""<password>""<days>""<months>""<years>""<newsletter>""<offers>"with the correct information
    And I fill out the additional info "<company>""<address>""<address2>""<city>""<state>""<zip>""<country>""<additionalInfo>""<homePhone>""<mobilePhone>""<addressAlias>" with the correct information
    And I click on the Register button
    Then I should be registered
    Examples:
      | email               | title | firstName | lastName | password | days | months | years | newsletter | offers | company | address | address2  | city   | state | zip   | country | additionalInfo| homePhone  | mobilePhone | addressAlias |
      | dcmu6@gmail.com | Mr    | Carolina  | Machado  | 123456   | 8    | 9      | 1990  | y          | y      | Huge    | calle 2 | calle 100 | Bogota | 3     | 11000 | 21      | none          | 3002114915 | 13300776732 | hugeDir     |


  Scenario Outline: Unsuccessful register
    Given I am at home page
    When I click to sign in
    And I fill out a valid "<email>"
    And I click to create account
    And I fill out the personal info "<title>""<firstName>""<lastName>""<password>""<days>""<months>""<years>""<newsletter>""<offers>"with the correct information
    And I fill out the additional info "<company>""<address>""<address2>""<city>""<state>""<zip>""<country>""<additionalInfo>""<homePhone>""<mobilePhone>""<addressAlias>" with the correct information
    And I click on the Register button
    And I click on the Register button
    Then I should see an error notification
    Examples:
      | email           | title | firstName | lastName | password | days | months | years | newsletter | offers | company | address | address2  | city   | state | zip   | country | additionalInfo| homePhone  | mobilePhone | addressAlias |
      | dcmu16@gmail.com | Mr    | Carolina  | Machado  | 123456   | 8    | 9      | 1990  | y          | y      | Huge    | calle 2 | calle 100 | Bogota | 3     | 1100  | blank   | none          | 3002114915 | 13300776732 | hugeDir     |
