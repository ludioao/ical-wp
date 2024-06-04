<?php
/**
 * This controller is responsible for the events endpoint
 *
 * @package LudioLabs\IcalFeedSync
 */

namespace LudioLabs\IcalFeedSync\Controllers;

/**
 * Events controller
 */
class EventsController {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
	}

	/**
	 * Register routes
	 *
	 * @return void
	 */
	public function register_routes() {
		register_rest_route(
			'ical-feed-sync/v1',
			'/events',
			array(
				'methods' => 'GET',
				'callback' => array( $this, 'get_events' ),
				'permission_callback' => '__return_true',
			)
		);
	}

	/**
	 * Get events
	 *
	 * @comment This method is not implemented yet
	 * @param \WP_REST_Request $request the WP_REST_Request object
	 * @return array
	 */
	public function get_events( $request ) {
		// @TODO: Implement this method
		$events = [];
		return $events;
	}
}
