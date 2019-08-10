@Ignore
Feature: As a registered user I want to be able to login in the Apparel page, so I can have a custom experience

  Background:
    Given The login form is displayed in the Apparel Homepage

    Scenario Outline:  Successful login
      When I fill out the login form with "<username>" and "<password>" information
      And I click on the Sign in button in the login form
      Then I should see the logo off menu at the top's page
      Examples:
        | username            | password |
        | dcmu3@gmail.com | 123456 |

    Scenario Outline: Unsuccessful login
      When I fill out the login form with not valid "<username>" and "<password>" information
      And I click on the Sign in button in the login form
      Then I should see a message error
      Examples:
        | username    | password |
        | dcmu3@gmail | 123456 |

    Scenario Outline: Successful log off
      Given I'm logged in the Apparel website with valid "<username>" and "<password>" information
      When I click on the log off button
      Then I should see a login available
      Examples:
      | username    | password |
      | dcmu3@gmail.com | 123456 |

