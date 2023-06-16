import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import React from "react";
import App from "../App";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('An event element is collapsed by default.', ({ given, when, then }) => {
    	given('the user has not yet selected a city', () => {

    	});

    	when('the user opens the app and performs no action', () => {
            AppWrapper = mount(<App />);
    	});

    	then('the events should be collapsed by default', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .expanded')).toHaveLength(0);
    	});
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
    	given('the user has chosen an event of interest', () => {
            AppWrapper = mount(<App />)
    	});

    	when('the user clicks on the chosen event', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate('click');
    	});

    	then('The events details are displayed', () => {
            expect(AppWrapper.find('.event .details')).toHaveLength(1);
    	});
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
    	given('the user has chosen and opened an event', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate('click');
    	});

    	when('the user clicks on the event', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate('click');
    	});

    	then('the event will collapse and hide the details', () => {
            expect(AppWrapper.find('.event .details')).toHaveLength(0);
    	});
    });
}); 