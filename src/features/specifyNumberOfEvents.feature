Feature: Specify number of events

    Scenario: When user hasn’t specified a number, 32 is the default number

        Given the user has not specified a number of events in a city to display
        When the user selects a city in which to view events
        Then the default number will be 32

    Scenario: User can change the number of events they want to see

        Given the user does not want to view all events
        When the user wishes to adjust how many events are displayed
        Then the user should be able to adjust how many events are displayed

