/**
 * External dependencies
 * @param search
 * @returns {*}
 */
import {useSelect} from '@wordpress/data';
import {useMemo} from '@wordpress/element';


export function useCalendar( search, attributes ) {

	const { feed } = attributes;

	const feeds =  useSelect( ( select ) => {
		const query =  {
			per_page: 100,
			order: "asc",
			order_by: "menu_order",
		}

		if ( search ) {
			query.search = search;
		}

		const currentFeed = select( 'core' ).getEntityRecord( 'postType', 'gcs_ical_feed', {
			id: feed,
		} );

		return {
			feeds: select( 'core' ).getEntityRecords( 'postType', 'gcs_ical_feed', query ),
			currentFeed
		};
	}, [ search ] )

	const options = useMemo( () => {
		if ( !feeds ) {
			return [];
		}

		return feeds.map( ( feed ) => {
			return {
				value: feed.id,
				label: feed.title.rendered || feed.title.raw,
			}
		} )
	}, [feeds] )

	return options;
}