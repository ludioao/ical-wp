<?php

namespace LudioLabs\GoogleCalendarSync\Admin;

/**
 * This class is responsible for the options page
 * in the admin panel
 */
class PageOptions {

	public const ICAL_URL_OPTION = 'gcs_ical_url';

	public const ICAL_SECRET_OPTION = 'gcs_ical_secret';


	/**
	 * Constructor
	 */
	public function __construct() {
	}

	/**
	 * Initialize the class
	 * @return void
	 */
	public function init() {
		add_action('admin_menu', array($this, 'admin_menu'));
		add_action('admin_init', array($this, 'admin_init'));
	}

	/**
	 * Register menu to the admin panel
	 * @return void
	 */
	public function admin_menu() {
		add_options_page(
			__('Google Calendar', 'google-calendar-sync'),
			__('Google Calendar', 'google-calendar-sync'),
			'manage_options',
			'google-calendar-sync',
			array($this, 'options_page')
		);
	}

	/**
	 * Register settings
	 * @return void
	 */
	public function admin_init() {
		register_setting('google-calendar-sync', self::ICAL_URL_OPTION, array( 'sanitize_callback' => 'esc_url', 'default' => '' ));
		register_setting('google-calendar-sync', self::ICAL_SECRET_OPTION, array( 'sanitize_callback' => 'sanitize_text_field', 'default' => '' ));

		add_settings_section(
			'google-calendar-sync',
			__('iCal Settings', 'google-calendar-sync'),
			function() {
				echo '<p>' . __('Enter the URL and secret for the iCal feed', 'google-calendar-sync') . '</p>';
			},
			'google-calendar-sync'
		);

		add_settings_field(
			self::ICAL_URL_OPTION,
			__('iCal URL', 'google-calendar-sync'),
			function() {
				$value = get_option(self::ICAL_URL_OPTION);
				echo '<input type="text" name="' . self::ICAL_URL_OPTION . '" value="' . esc_attr($value) . '" />';
			},
			'google-calendar-sync',
			'google-calendar-sync'
		);

		add_settings_field(
			self::ICAL_SECRET_OPTION,
			__('iCal Secret', 'google-calendar-sync'),
			function() {
				$value = get_option(self::ICAL_SECRET_OPTION);
				echo '<input type="text" name="' . self::ICAL_SECRET_OPTION . '" value="' . esc_attr($value) . '" />';
			},
			'google-calendar-sync',
			'google-calendar-sync'
		);
	}

	/**
	 * Options page
	 * @return void
	 */
	public function options_page() {
		require_once GCS_PATH . 'includes/admin/views/connector.php';
	}
}