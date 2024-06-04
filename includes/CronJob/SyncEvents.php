<?php
/**
 * Sync events
 *
 * @package LudioLabs\IcalFeedSync
 */

namespace LudioLabs\IcalFeedSync\CronJob;

use LudioLabs\IcalFeedSync\PostTypes\Event;
use LudioLabs\IcalFeedSync\PostTypes\IcalFeed;

/**
 * Sync events
 * This class is responsible for syncing events with cron job
 */
class SyncEvents {

	/**
	 * @var array
	 */
	protected $post_args = array();

	/**
	 * @var array
	 */
	protected $attributes = array();

	/**
	 * Sync events
	 *
	 * @return void|\WP_Error
	 */
	public function sync( array $data ) {

		if ( empty( $data[ 'ifs_event_id' ] ) ) {
			return new \WP_Error( 'event_id_missing', 'Event ID missing' );
		}

		$event_id = $this->get_event_id( $data[ 'ifs_event_id' ] );

		$this->create( $data, $event_id );
	}


	/**
	 * Create event
	 *
	 * @param array $attributes Event attributes
	 * @return int|\WP_Error
	 */
	public function create( array $attributes, int $event_id = 0 ) {

		$this->set_attributes( $attributes );

		$this->set_post_args( $attributes );

		if ( ! $this->save( $event_id ) ) {
			return new \WP_Error( 'event_create_error', 'Error creating event' );
		}

		return true;
	}

	/**
	 * Set the post arguments
	 *
	 * @param array $args Post arguments
	 * @return void
	 */
	public function set_post_args( array $args ) {
		$this->post_args = wp_parse_args( $args, array (
			'title' => '',
			'post_excerpt' => '',
			'post_content' => '',
		) );;
	}

	/**
	 * Set the attributes for the event
	 *
	 * @param array $attributes Event attributes
	 * @return void
	 */
	public function set_attributes( array $attributes ) {
		// Get the array keys available for attributes.
		$keys = array_keys( Event::get_meta_fields() );

		// Filter the attributes to only include the keys available for this post type.
		$attributes = array_intersect_key( $attributes, array_flip( $keys ) );

		$this->attributes = $attributes;
	}

	/**
	 * Save the event
	 *
	 * @return int|\WP_Error
	 */
	public function save( $post_id = 0 ) {

		if ( empty( $post_id ) || ! is_numeric( $post_id ) ) {
			$post = wp_insert_post( array(
				'post_type' => 'ifs_event',
				'post_title' => $this->post_args['title'],
				'post_status' => 'publish',
				'post_content' => $this->post_args['post_content'],
			) );
		}
		else {
			// Update attributes for a specific post.
			$post = wp_update_post( array(
				'ID' => $post_id,
				'post_title' => $this->post_args['title'],
				// do not update post content?
			) );
		}

		if ( ! is_wp_error( $post ) ) {
			foreach ( $this->attributes as $key => $value ) {
				update_post_meta( $post, $key, $value );
			}
		}

		return $post;
	}

	/**
	 * Get the event ID
	 *
	 * @param string $event_id Event ID
	 * @return int
	 */
	public function get_event_id( string $event_id ) {
		$event = get_posts( array(
			'post_type' => 'ifs_event',
			'meta_key' => 'ifs_event_id',
			'meta_value' => $event_id,
			'posts_per_page' => 1,
		) );

		if ( ! empty( $event ) ) {
			return $event[0]->ID;
		}

		return 0;
	}

}
