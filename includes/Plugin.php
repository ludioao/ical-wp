<?php

namespace LudioLabs\GoogleCalendarSync;

use LudioLabs\GoogleCalendarSync\PostTypes\Event;
use LudioLabs\GoogleCalendarSync\PostTypes\IcalFeed;
use LudioLabs\GoogleCalendarSync\PostTypes\PostTypeRegistrar;

final class Plugin {

	/**
	 * Initialize the plugin
	 * @return void
	 */
	public static function init() {
		static::post_type_registrar();
	}

	public static function post_type_registrar() {
		$post_type_registrar = new PostTypeRegistrar();
		$post_type_registrar->add_item( new Event() );
		$post_type_registrar->add_item( new IcalFeed() );
		$post_type_registrar->register();
	}
}