import Calendar from "@event-calendar/core";
import TimeGrid from "@event-calendar/time-grid";
import { formatDate } from "./Utils";
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';


const App = {

	fetch_events: ( feedId, params = {} ) => {
		return apiFetch(
			{ path: addQueryArgs( `/ical-wp/v1/events/${feedId}`, params ) }
		).then( response => {
			if ( !response ) {
				return []
			}

			return response.map( event => {
				return {
					id: event.id,
					title: event.title,
					start: formatDate(event.start),
					end: formatDate(event.end),
				}
			} )
		}).catch( error => {
			console.error( 'There has been a problem with your fetch operation:', error );
		})
	},

	init: ( el, feedId = null ) => {
		// Get the calendar options from dataset.

		const calendarData = JSON.parse( el.getAttribute( 'data-ics-settings' ) );
		if ( !feedId ) {
			feedId = calendarData.feed_id;
		}

		// Create a new calendar
		new Calendar( {
			target: el,
			props: {
				plugins: [TimeGrid],
				options: {
					initialView: 'timeGridWeek',
					eventSources: [
						{
							events: async  (fetchInfo, successCallback, failureCallback)  => {
								try {
									const { startStr, endStr } = fetchInfo;
									const response = await App.fetch_events(feedId, {
										start: startStr,
										end: endStr,
									})
									return response;
								}
								catch ( error ) {
									failureCallback( error );
								}
							}
						}
					],
				}
			}
		} );
	}
}

export default App;