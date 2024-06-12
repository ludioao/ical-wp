<?php
/**
 * iCal Feed Sync
 *
 * @package LudioLabs\IcalFeedSync
 */

namespace LudioLabs\IcalFeedSync;

use LudioLabs\IcalFeedSync\PostTypes\Event;
use LudioLabs\IcalFeedSync\PostTypes\IcalFeed;
use LudioLabs\IcalFeedSync\PostTypes\PostTypeRegistrar;

/**
 * Plugin class
 */
final class Plugin {

	/**
	 * Initialize the plugin
	 *
	 * @return void
	 */
	public static function init() {
		self::post_type_registrar();
		self::register_block_types();
		self::setup_cronjob();
	}

	/**
	 * Setup the REST API
	 *
	 * @return void
	 */
	public static function setup_rest_api() {
		$events_controller = new Controllers\EventsController();
	}

	/**
	 * Setup the cron job
	 *
	 * @return void
	 */
	public static function setup_cronjob() {
		CronJob\Setup::setup();
	}

	/**
	 * Register post types
	 *
	 * @return void
	 */
	public static function post_type_registrar() {
		$post_type_registrar = new PostTypeRegistrar();
		$post_type_registrar->add_item( new Event() );
		$post_type_registrar->add_item( new IcalFeed() );
		$post_type_registrar->register();
	}

	/**
	 * Register all blocks types in the build directory
	 *
	 * @return void
	 */
	public static function register_block_types() {
		$build_dir = IFS_PATH . '/blocks/build';

		foreach ( scandir( $build_dir ) as $result ) {
			$block_location = $build_dir . '/' . $result;

			if ( ! is_dir( $block_location ) || '.' === $result || '..' === $result ) {
				continue;
			}

			register_block_type( $block_location );
		}
	}
}
