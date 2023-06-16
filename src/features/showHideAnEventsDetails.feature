Feature: Show/Hide an events details

    Scenario:  An event element is collapsed by default.

        Given the user has not yet selected a city
        When the user opens the app and performs no action
        Then the events should be collapsed by default

    Scenario: User can expand an event to see its details.

        Given the user has chosen an event of interest
        When the user clicks on the chosen event
        Then The events details are displayed

    Scenario: User can collapse an event to hide its details

        Given the user has chosen and opened an event
        When the user clicks on the event
        Then the event will collapse and hide the details

