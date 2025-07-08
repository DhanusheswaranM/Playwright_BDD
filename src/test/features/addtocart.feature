Feature: Add to cart

Background:
    Given User navigates to the application
    

Scenario: Add to the cart should be success
    And User click on the login link
    Given User enter the username as "<username>"
    And User enter the password as "<password>"
    When User click on the login button
    Then User search the book "<book>"
    And User add the book to cart
    And User can view the book carted 

Examples:
| username   | password     | book          |
| TestUser@2 | TestUser@2   | roomies       |
# | TestUser@2 | TestUser@2   | Rot & Ruin    |

@fail
Scenario: Add to cart should be failed
    Then User search the book "<book>"
    And User dosent see the book that is provided "<book>"

Examples:
| book          |
| The alchemist |