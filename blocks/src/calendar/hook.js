/**
 * External dependencies
 * @param search
 * @returns {*}
 */
import {useSelect} from '@wordpress/data';

export function useFeeds( search, attributes ) {
	return useSelect( ( select ) => {

		const { getEntityRecords, isResolving, hasFinishedResolution } = select( 'core' );

		const query = {
			per_page: 100,
			order: "asc",
			order_by: "menu_order",
		}

		if ( search ) {
			query.search = search;
		}
		const queryParams = [
			'postType',
			'ifs_ical_feed',
			query
		]

		return {
			data: getEntityRecords( ...queryParams ),
			isResolvingData: isResolving( 'getEntityRecords', queryParams ),
			hasResolvedData: hasFinishedResolution( 'getEntityRecords', queryParams ),
		};
	}, [search] )
}