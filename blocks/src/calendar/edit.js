/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {useBlockProps, InspectorControls} from '@wordpress/block-editor';
import {useSelect} from '@wordpress/data';
import {useMemo, useEffect, useRef, useState} from '@wordpress/element';
import {ComboboxControl, PanelBody, SelectControl, Spinner} from "@wordpress/components";
import { useDebounce } from '@wordpress/compose';
import {useFeeds} from "./hook";
import ServerSideRender from "@wordpress/server-side-render";

import './editor.scss';
import CalendarView from "./js/CalendarView";

/**
 * Edit -- the block editor
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Edit( props ) {
	const {attributes, setAttributes} = props;
	const [search, setSearch] = useState( '' );

	const {data: feeds} = useFeeds( search, attributes );

	const options = useMemo(() => {
		if ( !feeds ) {
			return [];
		}

		return feeds.map( ( feed ) => {
			return {
				value: feed.id,
				label: feed.title.rendered || feed.title.raw,
			};
		} );
	}, [feeds])

	const debouncedSearch = useDebounce( ( value ) => {
		setSearch( value );
	}, 500 )

	return (
		<>
			<div {...useBlockProps()}>
				<CalendarView attributes={attributes} />
			</div>

			<InspectorControls>
				<PanelBody title={__( 'Calendar Settings' )}>

					<ComboboxControl
						value={attributes.feed}
						options={options}
						onChange={( value ) => setAttributes( {feed: value} )}
						onFilterValueChange={( value ) => {
							debouncedSearch( value );
						}}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
