<?php
	/**
	 * Created by PhpStorm.
	 * User: francesco
	 * Date: 23/10/2017
	 * Time: 17:17
	 */
	
	namespace CarBundle\DataFixtures\ORM;
	
	use CarBundle\Entity\Make;
	use Doctrine\Common\DataFixtures\AbstractFixture;
	use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
	use Doctrine\Common\Persistence\ObjectManager;
	
	class LoadDictionary extends AbstractFixture implements OrderedFixtureInterface {
		
		public function load( ObjectManager $manager ){
			
			$make = new Make();
			$make->setName('Audi');
			
			$make2 = new Make();
			$make2->setName('Ferrari');
			
			$manager->persist($make);
			$manager->persist($make2);
			$manager->flush();
			
			$this->addReference('Audi',$make);
			$this->addReference('Ferrari',$make2);
			
		}
		
		public function getOrder(){
			return 1;
		}
		
	}