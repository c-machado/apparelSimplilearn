Feature: As a user I want to search for a product so I can easily find it in the page

  Background:
    Given I am at the home page

  Scenario Outline: Performing a successful search
    When I type "<category>" in the search field
    And I click on the search button
    Then I should see the expected number of results
    And I should see results for "<category>"
    Examples:
      | category |
      | Dress |
#
#  Scenario: Performing a no results search
#    When I type "smith" in the search field
#    And I click on the search button
#    Then I should see zero results
