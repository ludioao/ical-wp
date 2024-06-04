<?php
/**
 * Plugin Name: Google Calendar Sync
 * Description: Syncs events from a Google Calendar to a WordPress site.
 * Version: 1.0
 * Author: Lúdio Oliveira
 * Author URI: https://ludio.me
 */

if ( ! defined( 'ABSPATH') ) {
	exit;
}


define( 'GCS_PATH', plugin_dir_path( __FILE__ ) . '/' );
define( 'GCS_PATH_URL', plugin_dir_url( __FILE__ ) );

// Providers
require_once GCS_PATH . '/vendor/autoload.php';
use LudioLabs\GoogleCalendarSync\Admin\PageOptions;
use LudioLabs\GoogleCalendarSync\Plugin;

/**
 * Load the plugin
 * @return void
 */
function gcs_load_plugin() {
	// Load the text domain
	load_plugin_textdomain( 'google-calendar-sync', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );

	// Initialize the plugin
	// 1. Page Options / Admin side.
	$page_options = new PageOptions();
	$page_options->init();

	// 2. Plugin
	$plugin = new Plugin();
	$plugin->init();
}

add_action( 'init', 'gcs_load_plugin' );

