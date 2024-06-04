<?php
/**
 * Post type for iCal feeds
 *
 * @package LudioLabs\IcalFeedSync
 */

namespace LudioLabs\IcalFeedSync\PostTypes;

use function add_meta_box;

/**
 * Post type for iCal feeds
 */
abstract class PostTypeBase {

	/**
	 * Post type name
	 *
	 * @var string
	 */
	protected $post_type;

	/**
	 * Post type arguments - see https://developer.wordpress.org/reference/functions/register_post_type/
	 *
	 * @var array
	 */
	protected $args;

	/**
	 * Meta fields
	 *
	 * @var array
	 */
	protected $meta_fields = array();

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_post_type' ) );
	}

	/**
	 * Post type configuration
	 *
	 * @return array
	 */
	abstract protected function config();

	/**
	 * Register the post type
	 *
	 * @return void
	 */
	public function register_post_type() {

		$this->args = wp_parse_args( $this->config(), $this->args );

		// apply filters for post type if needed
		$this->args = apply_filters( $this->post_type . '_post_type_args', $this->args );

		register_post_type( $this->post_type, $this->args );

		add_action( 'add_meta_boxes', array( $this, 'setup_meta_fields' ) );

		add_action( 'save_post', array( $this, 'save_meta_fields' ) );

		// Check if has admin_columns method
		if ( method_exists( $this, 'admin_columns' ) ) {
			add_filter( 'manage_' . $this->post_type . '_posts_columns', array( $this, 'admin_columns' ) );
			add_action( 'manage_' . $this->post_type . '_posts_custom_column', array( $this, 'admin_columns_content' ), 10, 2 );
		}
	}

	/**
	 * Render meta field
	 *
	 * @param WP_Post $post  Post
	 * @param array   $field Field
	 * @return mixed|null    Field output
	 */
	public function render_meta_field( $post, $field ) {
		if ( ! isset( $field['id'] ) ) {
			return null;
		}

		$value = get_post_meta( $post->ID, $field['id'], true );

		$read_only = $field['readonly'] ?? false;

		$attr = wp_parse_args(
			$field,
			[
				'type' => 'text',
				'label' => '',
				'description' => '',
				'options' => [],
				'readonly' => false,
			]
		);

		$attr['field_id'] = 'ifs_field_' . $field['id'];

		$output = $this->get_render_input( $attr, $read_only, $value );

		$help_description = '';
		if ( ! empty( $attr['description'] ) ) {
			$help_description = sprintf( '<p class="description">%s</p>', $attr['description'] );
		}

		/** Output */
		return sprintf(
			'<div><label for="%s">%s</label>%s%s</div>',
			$attr['field_id'],
			$attr['label'],
			$output,
			$help_description
		);
	}

	/**
	 * Get the meta fields for the post type
	 *
	 * @return array[]
	 */
	abstract public static function get_meta_fields(): array;

	/**
	 * Setup meta fields
	 *
	 * @return void
	 */
	public function setup_meta_fields() {
		// override in child class
		$meta_fields = static::get_meta_fields();

		$meta_fields = apply_filters(
			sprintf( '%s_meta_fields', $this->post_type ),
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

		\add_meta_box(
			sprintf( __( '%s Settings' ), $this->post_type ),
			__( 'Settings' ),
			function () use ( $fields_output ) {
				echo implode( $fields_output ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			},
			$this->post_type,
			'normal',
			'default'
		);
	}

	/**
	 * Save meta fields
	 *
	 * @param int $post_id  Post ID
	 * @return void
	 */
	public function save_meta_fields( $post_id ) {
		$meta_fields = static::get_meta_fields();

		if ( ! count( $meta_fields ) ) {
			return;
		}

		foreach ( $meta_fields as $field_id => $field ) {
			if ( ! isset( $_POST[ $field_id ] ) ) {
				continue;
			}

			$value = sanitize_text_field( wp_unslash( $_POST[ $field_id ] ) );

			// If it is a URL, then url encode it if it is not already
			if ( 'url' === $field['validation'] ) {
				$value = esc_url( wp_unslash( $_POST[ $field_id ] ) );
			}

			update_post_meta( $post_id, $field_id, $value );
		}
	}

	/**
	 * Get the input field
	 *
	 * @param  array $attr      attributes
	 * @param  mixed $read_only is readonly?
	 * @param  mixed $value     value
	 *
	 * @return string
	 */
	public function get_render_input( array $attr, mixed $read_only, mixed $value ): string {
		if ( 'textarea' === $attr['type'] ) {
			$output = sprintf(
				'<textarea id="%s" class="widefat" name="%s" %s>%s</textarea>',
				$attr['field_id'],
				$attr['id'],
				$read_only ? 'readonly' : '',
				esc_textarea( $value )
			);
		} elseif ( 'select' === $attr['type'] ) {
			$output = sprintf(
				'<select id="%s" name="%s" %s>',
				$attr['field_id'],
				$attr['id'],
				$read_only ? 'readonly' : ''
			);

			foreach ( $attr['options'] as $option ) {
				$output .= sprintf(
					'<option value="%s" %s>%s</option>',
					$option['value'],
					selected( $value, $option['value'], false ),
					$option['label']
				);
			}

			$output .= '</select>';
		} elseif ( 'checkbox' === $attr['type'] ) {
			$output = sprintf(
				'<input type="checkbox" id="%s" name="%s" value="1" %s %s />',
				$attr['field_id'],
				$attr['id'],
				checked( $value, 1, false ),
				$read_only ? 'readonly' : ''
			);
		} elseif ( 'datetime' === $attr['type'] ) {
			$output = sprintf(
				'<input type="datetime-local" id="%s" name="%s" value="%s" %s />',
				$attr['field_id'],
				$attr['id'],
				esc_attr( $value ),
				$read_only ? 'readonly' : ''
			);
		} else {
			$output = sprintf(
				'<input type="%s" id="%s" class="widefat" name="%s" value="%s" %s />',
				$attr['type'],
				$attr['field_id'],
				$attr['id'],
				esc_attr( $value ),
				$read_only ? 'readonly' : ''
			);
		}

		return $output;
	}

}
