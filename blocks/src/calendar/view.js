/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

import Calendar from '@event-calendar/core';
import TimeGrid from '@event-calendar/time-grid';


const ics_calendar = {

	fetch_events: ( feedUrl ) => {

		return fetch( feedUrl )
			.then( response => {
				if ( !response.ok ) {
					throw new Error( 'Network response was not ok' );
				}

				return response.json();
			} )
			.catch( error => {
				console.error( 'There has been a problem with your fetch operation:', error );
			} );
	},

	init: ( el ) => {
		// Get the calendar options from dataset.
		const calendarData = JSON.parse( el.getAttribute( 'data-ics-settings' ) );

		// Create a new calendar
		new Calendar( {
			target: el,
			props: {
				plugins: [TimeGrid],
				options: {
					initialView: 'timeGridWeek',
					eventSources: [
						{
							events: async () => {
								const response = await ics_calendar.fetch_events(calendarData.restUrl)

								console.log( 'response', response )

								return response
							}
						}
					],
				}
			}
		} );
	}
}

document.addEventListener( 'DOMContentLoaded', function () {
	// Parse all the calendars
	const calendars = document.querySelectorAll( '.ics-calendar' );

	// Loop through each calendar
	Array.from( calendars ).forEach( function ( calendar ) {
		ics_calendar.init( calendar )
	} )
} )
