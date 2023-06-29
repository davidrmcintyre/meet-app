# CityCrawler (Meet-App)

![Desktop App View](/img/desktopappview.jpg)

## Features, User Stories & BDD Scenarios

### Feature 1: Filter events by city.

**User story**

As a user I should be able to filter events by city So that I can see the list of events that take place in that city.

**Scenarios**

Scenario 1: When user hasn't searched for a city, show upcoming events from all cities. **Given** user hasn’t searched for any city 
**When** the user opens the app 
**Then** the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city. 
**Given** the main page is open 
**When** user starts typing in the city textbox 
**Then** the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list. 
**Given** the user was typing “Berlin” in the city textbox And the list of suggested cities is showing 
**When** the user selects a city (e.g., “Berlin, Germany”) from the list 
**Then** their city should be changed to that city (i.e., “Berlin, Germany”) And the list of suggestions should disappear And the user should receive a list of upcoming events in that city

### Feature 2: Show/Hide an events details.

**User Story**

As a user I should be able to show and hide events details so that I can get information about events that I have interest in.

**Scenarios**

Scenario 1: An event element is collapsed by default.

**Given** the user has not yet selected a city
**When** the user opens the app and performs no action
**Then** the events should be collapsed by default

Scenraio 2: User can expand an event to see its details

**Given** the user has chosen an event of interest
**When** the user clicks on the chosen event
**Then** The events details are displayed

Scenario 3: User can collapse an event to hide its details

**Given** the user has chosen and opened an event, and no longer needs the details
**When**  the user clicks on the event
**Then** the event will collapse and hide the details

### Feature 3: Specify number of events

**User Story**

As a user I should be able to specify the number of displayed events So that I have control about how many events are displayed.

**Scenarios**

Scenario 1: When user hasn’t specified a number, 32 is the default number

**Given** the user has not specified a number of events in a city to display
**When** the user selects a city in which to view events
**Then** the default number will be 32

Scenario 2: User can change the number of events they want to see

**Given** the user does not want to view all events
**When** the user wishes to adjust how many events are displayed
**Then** the user should be able to adjust how many events are displayed

### Feature 4: Use the app when offline

**User Story**

As a user I should be able to use the app when offline So that I can access event information even when there is not internet available

**Scenarios**

Scenario 1: Show cached data when there’s no internet connection

**Given** the user has lost internet connection
**When** the user access the app
**Then** the cached data within the app should still be accessible

Scenario 2: Show error when user changes the settings (city, time range)

**Given** the user has changed their settings in the app
**When** the user next opens the app or returns from the settings screen
**Then** an error should display informing the user that changes have been made

### Feature 5: Data Visuasiation

**User Story**

As a user I should be able to view a chart which displays the number of upcoming events in each city

**Scenarios**

Scenario 1: Show a chart with the number of upcoming events in each city

**Given** the user has not selected a city
**When** the user wants to compare events between cities
**Then** they should be able to access a chart with the number of upcoming events in each city
 
## How this app uses serverless functions.

**Feature 1:** Filter events by city
For this feature, the app will use a serverless function to handle the filtering logic on the backend. When the user searches for a city, the frontend can trigger the serverless function with the search query. The function can then retrieve the list of events from the API, filter them based on the city, and return the filtered results to the frontend.

**Feature 2:** Show/Hide event details
Serverless functions are not so necessary for this feature as it primarily involves client-side interactivity. The show/hide functionality can be implemented using JavaScript and DOM manipulation on the client-side.

**Feature 3:** Specify the number of events
Similar to Feature 1, a serverless function will be used to handle the logic of fetching and filtering the events based on the specified number. The frontend can trigger the function with the desired number of events, and the function can retrieve the appropriate number of events from the database or API and return them to the frontend.

**Feature 4:** Use the app when offline
To enable offline functionality, the app will use caching as well as local storage to keep the app running offline

**Feature 5:** Data Visualization
For data visualization, the app will use serverless functions to generate the chart data. When the user requests the chart, the frontend can trigger a serverless function that fetches the necessary data from the API, perform any required calculations and returns the processed data to the frontend. 

