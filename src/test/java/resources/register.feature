Feature: As a user I want to register in the Apparel page so I can manage my billing data

  Scenario: Successful register
    Given I am at "home" page
    When I click to sign in
    And I choose the create option
    And I fill out the register form with the correct information
    And I click on the Register button
    Then I should be registered
    And I should see a notification

  Scenario Outline: Unsuccessful register
    Given I am at "home" page
    When I click to sign in
    And I choose the create option
    And I fill out the register form information
    But I do not select a "<country>" value
    And I do not enter a valid "<post code>" value
    Examples:
      | country | post code |
      | blank |  111 |
    And I click on the Register button
    Then I should see an error notification
