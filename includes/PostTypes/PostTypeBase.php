<?php

namespace LudioLabs\GoogleCalendarSync\PostTypes;

use \add_meta_box;

abstract class PostTypeBase {

	/**
	 * Post type name
	 * @var string

	 */
	protected $post_type;

	/**
	 * Post type arguments - see https://developer.wordpress.org/reference/functions/register_post_type/
	 * @var array
	 */
	protected $args;

	/**
	 * Meta fields
	 * @var array
	 */
	protected $meta_fields = array();

	/**
	 * Constructor
	 * @param string $post_type
	 * @param array $args
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_post_type' ) );
	}

	/**
	 * Post type configuration
	 * @return array
	 */
	abstract protected function config();

	/**
	 * Register the post type
	 * @return void
	 */
	public function register_post_type() {

		$this->args = wp_parse_args( $this->config(), $this->args );

		// apply filters for post type if needed
		$this->args = apply_filters( $this->post_type . '_post_type_args', $this->args );

		register_post_type( $this->post_type, $this->args );

		add_action( 'add_meta_boxes', array( $this, 'setup_meta_fields' ) );
	}

	/**
	 * Render meta field
	 * @param WP_Post $post
	 * @param array $field
	 * @return mixed|null
	 */
	public function render_meta_field( $post, $field ) {
		if ( ! isset( $field['id'] ) ) {
			return null;
		}

		$output = '';

		$value = get_post_meta( $post->ID, $field['id'], true );

		if ( !isset( $field['type'] ) ) {
			$field['type'] = 'text';
		}

		if ( $field['type'] == 'text' ) {
			$output = '<input type="text" id="gcs_field_'. $field['id'] .'" class="widefat" name="' . $field['id'] . '" value="' . esc_attr( $value ) . '" />';
		}

		if ( $field['type'] == 'textarea' ) {
			$output = '<textarea name="' . $field['id'] . '">' . esc_textarea( $value ) . '</textarea>';
		}

		if ( $field['type'] == 'select' ) {
			$output = '<select name="' . $field['id'] . '">';
			foreach ( $field['options'] as $option ) {
				$output .= '<option value="' . $option['value'] . '" ' . selected( $value, $option['value'], false ) . '>' . $option['label'] . '</option>';
			}
			$output .= '</select>';
		}

		if ( $field['type'] == 'checkbox' ) {
			$output = '<input type="checkbox" name="' . $field['id'] . '" value="1" ' . checked( $value, 1, false ) . ' />';
		}

		if ( $field['type'] == 'datetime' ) {
			$output = '<input type="datetime-local" name="' . $field['id'] . '" value="' . esc_attr( $value ) . '" />';
		}

		$help_description = '';
		if ( isset( $field['description'] ) && !empty( $field['description'] ) ) {
			$help_description = sprintf( '<p class="description">%s</p>', $field['description'] );
		}

		// Encapsulate the output in a div and label.
		$output = '<div><label for="gcs_field_'. $field['id'] . '">' . $field['label'] . '</label>' . $output . $help_description .'  </div>';

		return $output;
	}

	/**
	 * Render meta field
	 * @return mixed|null
	 */
	abstract public function get_meta_fields();

	/**
	 * Render meta field
	 * @param WP_Post $post
	 * @param array $field
	 * @return mixed|null
	 */
	public function setup_meta_fields() {
		// override in child class
		$meta_fields = $this->get_meta_fields();

		$meta_fields = 	apply_filters(
			sprintf("%s_meta_fields", $this->post_type),
			$meta_fields
		);

		$fields_output = [];

		global $post;

		foreach ( $meta_fields as $field_id => $field ) {
			$field['id'] = $field_id;
			$field['post_type'] = $this->post_type;
			$field['context'] = 'normal';
			$field['priority'] = 'default';
			$fields_output[] = $this->render_meta_field( $post, $field );
		}

		\add_meta_box( sprintf(  __("%s Settings") , $this->post_type ), __("Settings"), function() use ($fields_output) {
			echo implode( $fields_output );
		}, $this->post_type, 'side', 'default' );
	}

}