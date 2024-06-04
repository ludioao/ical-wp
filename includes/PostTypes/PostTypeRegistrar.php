<?php

namespace LudioLabs\GoogleCalendarSync\PostTypes;

if ( !defined( 'ABSPATH' ) ) exit;

/**
 * Post type registrar
 */
class PostTypeRegistrar {

	/**
	 * Post types
	 * @var array
	 */
	protected $items = [];

	/**
	 * Constructor
	 */
	public function __construct( $items = array() ) {
		$this->items = $items;
	}

	/**
	 * Add an item
	 * @param Post_Type_Base $item
	 */
	public function add_item( PostTypeBase $item ) {
		$this->items[] = $item;
	}

	/**
	 * Register post types
	 * @return void
	 * @throws \Exception
	 */
	public function register_post_types() {
		foreach ( $this->items as $item ) {
			$post_type = new $item();
			$post_type->register_post_type();
		}
	}

	/**
	 * Register
	 * @return void
	 */
	public function register() {
		$this->register_post_types();
	}

}