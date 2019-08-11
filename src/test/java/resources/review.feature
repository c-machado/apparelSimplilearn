@Ignore
#Feature: As a user I want to write a review for the product selected in the page so I can rate the product
#
#  Background:
#    Given I am at "product" page
#
#  Scenario: Unsuccessful rating a product
#    When I click on write a review
#    And I fill out the field with less than 50 characters
#    And I click on Rating
#    And I click on Continue
#    Then I should see a notification error

