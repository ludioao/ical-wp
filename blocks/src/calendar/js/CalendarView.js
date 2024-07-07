import {useEffect, useRef} from "@wordpress/element";
import App from './App';

const CalendarView = ( {attributes} ) => {

	const calendarRef = useRef();

	// On calendar ref is read
	useEffect( () => {
		if ( !calendarRef.current ) {
			return;
		}

		App.init( calendarRef.current, attributes.feed )
	}, [] );

	return (
		<div>
			<div ref={calendarRef}></div>
		</div>
	);
}

export default CalendarView;