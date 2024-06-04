<?php

namespace LudioLabs\GoogleCalendarSync\PostTypes;

if ( !defined( 'ABSPATH' ) ) exit;

class Event extends PostTypeBase {

	/**
	 * Post type name
	 * @var string
	 */
	protected $post_type = 'gcs_event';

	public function __construct() {
		parent::__construct( $this->post_type, $this->args );
	}

	/**
	 * Get the post type configuration
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
				'menu_name' => 'GCS Events'
			),
			'public' => true,
			'publicly_queryable' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'query_var' => true,
			'rewrite' => array( 'slug' => 'gcs_event' ),
			'capability_type' => 'post',
			'has_archive' => true,
			'hierarchical' => false,
			'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
			'menu_position' => 5,
			'menu_icon' => 'dashicons-calendar-alt'
		);

		// Apply Filters?
		$config = apply_filters( 'gcs_event_post_type_config', $config );

		return $config;
	}

	/**
	 * Get the meta fields for the post type
	 * @return array[]
	 */
	public function get_meta_fields() {
		return array(
			'gcs_event_id' => array(
				'label' => 'Event ID',
				'type' => 'text',
				'placeholder' => 'Event ID',
				'description' => 'The Google Calendar Event ID',
				'required' => true
			),
			'gcs_event_start' => array(
				'label' => 'Event Start',
				'type' => 'datetime',
				'placeholder' => 'Event Start',
				'description' => 'The start date and time of the event',
				'required' => true
			),
			'gcs_event_end' => array(
				'label' => 'Event End',
				'type' => 'datetime',
				'placeholder' => 'Event End',
				'description' => 'The end date and time of the event',
				'required' => true
			),
			'gcs_event_location' => array(
				'label' => 'Event Location',
				'type' => 'text',
				'placeholder' => 'Event Location',
				'description' => 'The location of the event',
				'required' => false
			),
			'gcs_event_description' => array(
				'label' => 'Event Description',
				'type' => 'textarea',
				'placeholder' => 'Event Description',
				'description' => 'The description of the event',
				'required' => false
			),
			'gcs_event_url' => array(
				'label' => 'Event URL',
				'type' => 'text',
				'placeholder' => 'Event URL',
				'description' => 'The URL of the event',
				'required' => false
			),
			'gcs_event_organizer' => array(
				'label' => 'Event Organizer',
				'type' => 'text',
				'placeholder' => 'Event Organizer',
				'description' => 'The organizer of the event',
				'required' => false
			),
			'gcs_event_organizer_email' => array(
				'label' => 'Event Organizer Email',
				'type' => 'text',
				'placeholder' => 'Event Organizer Email',
				'description' => 'The email of the organizer of the event',
				'required' => false
			),
		);
	}

}