Feature: Contact

  @ContactScenario1
  Scenario: User sends a contact message after login
    Given the user is on the login page
    When the user enters a valid username and password
    And clicks the login button
    Then the user should be redirected to the dashboard
    When the user opens the contact form
    And fills the contact form with "test@email.com", "Test User", and "This is a test message"
    And submits the contact form
    Then the contact form should be sent successfully