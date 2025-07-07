Feature: User Authentication tests

Background:
    Given User navigates to the application
    And User click on the login link

Scenario: Login should be success
    Given User enter the username as "TestUser@2"
    And User enter the password as "TestUser@2"
    When User click on the login button
    Then Login should be success

Scenario: Login should be failed
    Given User enter the username as "TestUser@2"
    And User enter the password as ""
    When User click on the login button
    Then Login should fail