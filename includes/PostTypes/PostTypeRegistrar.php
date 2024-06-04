<?php
/**
 * Post type registrar
 *
 * @package LudioLabs\IcalFeedSync
 */

namespace LudioLabs\IcalFeedSync\PostTypes;

/**
 * Post type registrar
 */
class PostTypeRegistrar {

	/**
	 * Post types
	 *
	 * @var array
	 */
	protected $items = [];

	/**
	 * Constructor
	 *
	 * @param array $items Items to register.
	 */
	public function __construct( $items = array() ) {
		$this->items = $items;
	}

	/**
	 * Add an item
	 *
	 * @param PostTypeBase $item Item to add.
	 */
	public function add_item( PostTypeBase $item ) {
		$this->items[] = $item;
	}

	/**
	 * Register post types
	 *
	 * @return void
	 * @throws \Exception If class does not exist.
	 */
	public function register_post_types() {
		foreach ( $this->items as $item ) {
			$post_type = new $item();
			$post_type->register_post_type();
		}
	}

	/**
	 * Register
	 *
	 * @return void
	 * @throws \Exception If class does not exist.
	 */
	public function register() {
		$this->register_post_types();
	}
}
