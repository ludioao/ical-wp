<?php

use PHPUnit\Framework\TestCase;

class iCalFeedTest extends TestCase {

	public function test_if_ical_feed_is_readable() {
        $url = 'https://www.gov.mo/en/public-holidays/ical/';
        $ical_feed = new \LudioLabs\IcalFeedSync\Providers\ICal( $url );
        $events = $ical_feed->get_events();
        $this->assertNotEmpty( $events );
	}

    public function test_if_ical_feed_is_transformed() {
        $url = 'https://www.gov.mo/en/public-holidays/ical/';
        $ical_feed = new \LudioLabs\IcalFeedSync\Providers\ICal( $url );
        $events = $ical_feed->get_events();
        $this->assertNotEmpty( $events );

        $this->assertArrayHasKey( 'ifs_event_start', $events[0] );
        $this->assertArrayHasKey( 'ifs_event_end', $events[0] );
        $this->assertArrayHasKey( 'title', $events[0] );
        $this->assertArrayHasKey( 'post_content', $events[0] );
        $this->assertArrayHasKey( 'ifs_event_location', $events[0] );
    }

}
