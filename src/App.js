import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken} from './api';
import './nprogress.css';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
    currentLocation: 'all',
    errorText: '',
    showWelcomeScreen: undefined,
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events,
          locations: extractLocations(events),
        });
      }
    });
  }

  offlineWarning = () => {
    if (!navigator.online){
      this.setState({
        errorText: 'You are offline, information may not be up to date.'
      })
    }
  }
 

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    const { currentLocation } = this.state;
    if (location) {
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);
      const eventsToShow = locationEvents.slice(0, eventCount);
      this.setState({
        events: eventsToShow,
        currentLocation: location,
        numberOfEvents: eventCount,
      });
    });
  } else {
    getEvents().then((events) => {
      const locationEvents = (currentLocation === 'all') 
      ? events
      : events.filter((event) => event.location === currentLocation);
      const eventsToShow = locationEvents.slice(0, eventCount);
      this.setState({
        events: eventsToShow,
        numberOfEvents: eventCount,
      });
    });
  }
}

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    const { events } = this.state;
    const eventsToShow = events.length > 32 ? events.slice(0, this.state.numberOfEvents) : events;
    return (
      <div className='App'>
        <WarningAlert text={this.state.errorText} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents}/>
        <EventList events={eventsToShow} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken(); }} />
      </div>
    );
  }
}

export default App;
