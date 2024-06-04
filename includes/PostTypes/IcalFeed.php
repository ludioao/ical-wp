<?php
/**
 * iCal Feed post type
 *
 * @package LudioLabs\IcalFeedSync
 */

namespace LudioLabs\IcalFeedSync\PostTypes;

/**
 * iCal Feed post type
 */
class IcalFeed extends PostTypeBase {

	/**
	 * Post type name
	 *
	 * @var string
	 */
	protected $post_type = 'ifs_ical_feed';

	/**
	 * Post type configuration
	 *
	 * @return array
	 */
	protected function config() {
		$config = array(
			'labels' => array(
				'name' => 'GCS iCal Feeds',
				'singular_name' => 'GCS iCal Feed',
				'add_new' => 'Add New',
				'add_new_item' => 'Add New GCS iCal Feed',
				'edit_item' => 'Edit GCS iCal Feed',
				'new_item' => 'New GCS iCal Feed',
				'all_items' => 'All GCS iCal Feeds',
				'view_item' => 'View GCS iCal Feed',
				'search_items' => 'Search GCS iCal Feeds',
				'not_found' => 'No GCS iCal Feeds found',
				'not_found_in_trash' => 'No GCS iCal Feeds found in Trash',
				'parent_item_colon' => '',
				'menu_name' => 'GCS iCal Feeds',
			),
			'public' => true,
			'publicly_queryable' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'query_var' => true,
			'rewrite' => array( 'slug' => 'ifs_ical_feed' ),
			'capability_type' => 'post',
			'has_archive' => true,
			'hierarchical' => false,
			'supports' => array( 'title' ),
			'menu_position' => 5,
			'menu_icon' => 'dashicons-calendar-alt',
			'show_in_rest' => true,
		);

		return $config;
	}

	/**
	 * Get the meta fields for this post type
	 *
	 * @return array[]
	 */
	public static function get_meta_fields(): array {
		return array(
			'ifs_ical_url' => array(
				'label' => 'iCal URL',
				'type' => 'text',
				'description' => 'The URL of the iCal feed to sync with.',
				'validation' => 'url',
			),
			'ifs_sync_last_run' => array(
				'label' => 'Last Sync',
				'type' => 'text',
				'description' => 'The last time the iCal feed was synced.',
				'readonly' => true,
			),
		);
	}

	/**
	 * Get the iCal URL for a post
	 *
	 * @param int $post_id Post ID
	 * @return string
	 */
	public static function get_ical_url( $post_id ) {
		return get_post_meta( $post_id, 'ifs_ical_url', true );
	}

	/**
	 * Get the last sync time for a post
	 *
	 * @param int $post_id Post ID
	 * @return string
	 */
	public static function get_last_sync( $post_id ) {
		return get_post_meta( $post_id, 'ifs_sync_last_run', true );
	}

}
