Feature: Login

  @Scenrio1
  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters a valid username and password
    And clicks the login button
    Then the user should be redirected to the dashboard

  @Scenrio2
  Scenario Outline: Login with multiple credentials
    Given the user is on the login page
    When the user enters "<username>" and "<password>"
    And clicks the login button
    Then the user should be redirected to the dashboard

    Examples:
      | username           | password |
      | testing@tes435.com | Testing  |
      | testuser2          | pass456  |
