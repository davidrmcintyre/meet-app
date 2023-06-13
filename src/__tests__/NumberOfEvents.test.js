import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render number of events', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render number of events input', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEventsInput')).toHaveLength(1);
  });

  test('render number of events label', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEventsLabel')).toHaveLength(1);
  });

  test('render number of events input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('query');
    expect(NumberOfEventsWrapper.find('.numberOfEventsInput').prop('value')).toBe(
      numberOfEvents
    );
  });

  test('change state when input changes', () => {
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find('.numberOfEventsInput').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('query')).toBe(10);
  });
});
