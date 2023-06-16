import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    	given('the user has not specified a number of events in a city to display', () => {

    	});

    	when('the user selects a city in which to view events', () => {
            AppWrapper = mount(<App />);
    	});

    	then('the default number will be 32', () => {
            expect(AppWrapper.state('eventCount')).toEqual(32);
    	});
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
    	given('the user does not want to view all events', () => {
            AppWrapper = await mount(<App />);
    	});

    	when('the user wishes to adjust how many events are displayed', () => {
            AppWrapper.update();
            let NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
            const eventObject = { target: { value: 2 }};
            NumberOfEventsWrapper.find('.numberOfEvents').simulate(
             'change',
             eventObject
            );
    	});

    	then('the user should be able to adjust how many events are displayed', () => {
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    	});
    });

});