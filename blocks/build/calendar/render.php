<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$block_attributes = wp_parse_args(
  $attributes,
  [
    'feed' => '',
    'hidePastEvents' => false,
  ]
);

if ( empty ( $block_attributes['feed'] ) ) {
  return;
}

$data_ics_settings = [
  'feed_id' => $block_attributes['feed'],
  'hidePastEvents' => $block_attributes['hidePastEvents'],
];
?>

<div class="ics-calendar" data-ics-settings="<?php echo esc_attr( json_encode( $data_ics_settings ) ); ?>">
</div>