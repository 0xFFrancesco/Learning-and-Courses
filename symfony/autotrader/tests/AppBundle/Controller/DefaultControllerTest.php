<?php
	
	namespace Tests\AppBundle\Controller;
	
	use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
	
	class DefaultControllerTest extends WebTestCase {
		
		public function testIndex(){
			
			$client = static::createClient();
			
			$crawler = $client->request('GET', '/');
			
			$this->assertEquals(200, $client->getResponse()
											->getStatusCode());
			
			$this->assertContains('Welcome to Autotrader', $crawler->filter('h1')
																   ->text());
		}
		
		public function testOffer(){
			
			$client = static::createClient();
			
			$crawler = $client->request('GET', '/our-cars');
			
			$this->assertEquals(200, $client->getResponse()
											->getStatusCode());
			
			$this->assertContains('Our offer', $crawler->filter('h1')
													   ->text());
			
			$link=$crawler->filter('a:contains("open")')->eq(0)->link();
			$crawler = $client->click($link);
			$this->assertContains('Ferrari FXX', $crawler->filter('h1')->text());
			
		}
		
	}
