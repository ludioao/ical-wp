<?php
namespace LudioLabs\GoogleCalendarSync\PostTypes;

class IcalFeed extends PostTypeBase {

	/**
	 * Post type name
	 * @var string
	 */
	protected $post_type = 'gcs_ical_feed';

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
				'menu_name' => 'GCS iCal Feeds'
			),
			'public' => true,
			'publicly_queryable' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'query_var' => true,
			'rewrite' => array( 'slug' => 'gcs_ical_feed' ),
			'capability_type' => 'post',
			'has_archive' => true,
			'hierarchical' => false,
			'supports' => array( 'title', ),
			'menu_position' => 5,
			'menu_icon' => 'dashicons-calendar-alt'
		);

		return $config;
	}

	public function get_meta_fields() {
		return array(
			'gcs_ical_url' => array(
				'label' => 'iCal URL',
				'type' => 'text',
				'description' => 'The URL of the iCal feed to sync with.'
			),
			'gcs_ical_secret' => array(
				'label' => 'Secret',
				'type' => 'text',
				'description' => 'The secret key to use when syncing the iCal feed.'
			),
			'gcs_sync_last_run' => array(
				'label' => 'Last Sync',
				'type' => 'text',
				'description' => 'The last time the iCal feed was synced.'
			),
			'gcs_sync_next_run' => array(
				'label' => 'Next Sync',
				'type' => 'text',
				'description' => 'The next time the iCal feed will be synced.'
			)
		);
	}

}
