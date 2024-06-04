<?php
/**
 * Plugin Name: iCal Feed Sync
 * Description: Sync iCal feeds to WordPress
 * Version: 1.0
 * Author: Lúdio Oliveira
 * Author URI: https://ludio.me
 * Text Domain: ical-feed-sync
 * Domain Path: /languages
 *
 * @package GoogleCalendarSync
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


define( 'IFS_PATH', plugin_dir_path( __FILE__ ) . '/' );
define( 'IFS_PATH_URL', plugin_dir_url( __FILE__ ) );

// Providers
require_once IFS_PATH . '/vendor/autoload.php';
use LudioLabs\IcalFeedSync\Plugin;

/**
 * Load the plugin
 *
 * @return void
 */
function ifs_load_plugin() {
	// Load the text domain
	load_plugin_textdomain( 'ical-feed-sync', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );

	// Plugin
	$plugin = new Plugin();
	$plugin->init();
}

add_action( 'init', 'ifs_load_plugin' );
