<?php
/**
 * Page Options for the admin panel
 *
 * @package LudioLabs\IcalFeedSync
 */

namespace LudioLabs\IcalFeedSync\Admin;

/**
 * This class is responsible for the options page
 * in the admin panel
 */
class PageOptions {

	public const ICAL_URL_OPTION = 'ifs_ical_url';

	public const ICAL_SECRET_OPTION = 'ifs_ical_secret';


	/**
	 * Constructor
	 */
	public function __construct() {
	}

	/**
	 * Initialize the class
	 *
	 * @return void
	 */
	public function init() {
		// add_action('admin_menu', array($this, 'admin_menu'));
		// add_action('admin_init', array($this, 'admin_init'));
	}

	/**
	 * Register menu to the admin panel
	 *
	 * @return void
	 */
	public function admin_menu() {
		// add_options_page(
		// __('Google Calendar', 'ical-feed-sync'),
		// __('Google Calendar', 'ical-feed-sync'),
		// 'manage_options',
		// 'ical-feed-sync',
		// array($this, 'options_page')
		// );
	}

	/**
	 * Register settings
	 *
	 * @return void
	 */
	public function admin_init() {
	}

	/**
	 * Options page
	 *
	 * @return void
	 */
	public function options_page() {
		require_once IFS_PATH . 'includes/admin/views/connector.php';
	}
}
