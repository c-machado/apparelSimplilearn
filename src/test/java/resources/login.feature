Feature: As a registered user I want to be able to login in the Apparel page, so I can have a custom experience

  Background:
    Given The login form is displayed in the Apparel Homepage

  Scenario Outline:  Successful login
    When I fill out the login form with "<username>" and "<password>" information
    And I click on the Sign in button in the login form
    Then I should see the logo off menu at the top's page
    Examples:
      | username            | password |
      | dcmachado@gmail.com | E123?asd |

  Scenario Outline: Unsuccessful login
    When I fill out the login form with wrong information
    And I click on the Sign in button in the login form
    Then I should see an error message
    And I should see the text color red
    And I should see an error "<message>"
    Examples:
      | message            |
      | User invalid credentials|

    Scenario Outline: Successful log off
      When I click on the log off button
      Then I should see a notification "<message>"
    Examples:
      | message            |
      | User invalid credentials|
