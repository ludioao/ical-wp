<?php
/**
 * iCal Event Post Type
 *
 * @package LudioLabs\IcalFeedSync
 */

namespace LudioLabs\IcalFeedSync\PostTypes;

/**
 * Event Post Type Class
 *
 * This class is responsible for the Event post type
 */

class Event extends PostTypeBase {

	/**
	 * Post type name
	 *
	 * @var string
	 */
	protected $post_type = 'ifs_event';

	/**
	 * Get the post type configuration
	 *
	 * @return array|mixed|null
	 */
	public function config() {
		$config = array(
			'labels' => array(
				'name' => 'GCS Events',
				'singular_name' => 'GCS Event',
				'add_new' => 'Add New',
				'add_new_item' => 'Add New GCS Event',
				'edit_item' => 'Edit GCS Event',
				'new_item' => 'New GCS Event',
				'all_items' => 'All GCS Events',
				'view_item' => 'View GCS Event',
				'search_items' => 'Search GCS Events',
				'not_found' => 'No GCS Events found',
				'not_found_in_trash' => 'No GCS Events found in Trash',
				'parent_item_colon' => '',
				'menu_name' => 'GCS Events',
			),
			'public' => true,
			'publicly_queryable' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'query_var' => true,
			'rewrite' => array( 'slug' => 'ifs_event' ),
			'capability_type' => 'post',
			'has_archive' => true,
			'hierarchical' => false,
			'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
			'menu_position' => 5,
			'menu_icon' => 'dashicons-calendar-alt',
			'show_in_rest' => true,
		);

		// Apply Filters?
		$config = apply_filters( 'ifs_event_post_type_config', $config );

		return $config;
	}

	/**
	 * Get the meta fields for the post type
	 *
	 * @return array[]
	 */
	public static function get_meta_fields(): array {
		return array(
			'ifs_event_id' => array(
				'label' => 'Event ID',
				'type' => 'text',
				'placeholder' => 'Event ID',
				'description' => 'The Google Calendar Event ID',
				'required' => true,
			),
			'ifs_event_start' => array(
				'label' => 'Event Start',
				'type' => 'datetime',
				'placeholder' => 'Event Start',
				'description' => 'The start date and time of the event',
				'required' => true,
			),
			'ifs_event_end' => array(
				'label' => 'Event End',
				'type' => 'datetime',
				'placeholder' => 'Event End',
				'description' => 'The end date and time of the event',
				'required' => true,
			),
			'ifs_event_location' => array(
				'label' => 'Event Location',
				'type' => 'text',
				'placeholder' => 'Event Location',
				'description' => 'The location of the event',
				'required' => false,
			),
			'ifs_event_url' => array(
				'label' => 'Event URL',
				'type' => 'text',
				'placeholder' => 'Event URL',
				'description' => 'The URL of the event',
				'required' => false,
			),
			'ifs_event_organizer' => array(
				'label' => 'Event Organizer',
				'type' => 'text',
				'placeholder' => 'Event Organizer',
				'description' => 'The organizer of the event',
				'required' => false,
			),
			'ifs_event_organizer_email' => array(
				'label' => 'Event Organizer Email',
				'type' => 'text',
				'placeholder' => 'Event Organizer Email',
				'description' => 'The email of the organizer of the event',
				'required' => false,
			),
			'ifs_event_feed_id' => array(
				'label' => 'Feed ID',
				'type' => 'text',
				'placeholder' => 'Feed ID',
				'description' => 'The ID of the feed that the event was synced from',
				'required' => true,
			),
		);
	}

	/**
	 * Setup admin columns
	 *
	 * @return void
	 */
	public function admin_columns( $columns ) {
		$columns['ifs_event_start'] = 'Start';
		$columns['ifs_event_end'] = 'End';
		$columns['ifs_event_feed_id'] = 'Feed ID';

		return $columns;
	}

	/**
	 * Render the admin columns
	 *
	 * @param string $column  Column
	 * @param int    $post_id Post ID
	 */
	public function admin_columns_content( $column, $post_id ) {

		if ( ! in_array( $column, array( 'ifs_event_start', 'ifs_event_end', 'ifs_event_feed_id' ) ) ) {
			return;
		}

		if ( in_array( $column, [ 'ifs_event_start', 'ifs_event_end' ] ) ) {
			$time = get_post_meta( $post_id, $column, true );
			echo $time ? date( 'Y-m-d H:i ', strtotime( $time ) ) : '';
		}

		if ( 'ifs_event_feed_id' === $column ) {
			$feed_id = get_post_meta( $post_id, 'ifs_event_feed_id', true );
			echo $feed_id ? $feed_id : 'N/A';
		}

	}

	public static function get_by_feed_id( $feed_id ) {
		$posts = get_posts( array(
			'post_type' => 'ifs_event',
			'posts_per_page' => -1,
			'meta_query' => array(
				array(
					'key' => 'ifs_event_feed_id',
					'value' => $feed_id,
				),
			),
		) );

		return $posts;
	}

}
