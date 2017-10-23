<?php
	/**
	 * Created by PhpStorm.
	 * User: francesco
	 * Date: 23/10/2017
	 * Time: 17:17
	 */
	
	namespace CarBundle\DataFixtures\ORM;
	
	use CarBundle\Entity\Car;
	use Doctrine\Common\DataFixtures\AbstractFixture;
	use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
	use Doctrine\Common\Persistence\ObjectManager;
	
	class LoadCars extends AbstractFixture implements OrderedFixtureInterface {
		
		public function load( ObjectManager $manager ){
			
			$car = new Car();
			$car->setName('LaFerrari')
				->setMake($this->getReference('Ferrari'))
				->setYear(2015)
				->setPrice(240000);
			
			$car2 = new Car();
			$car2->setName('RS7')
				->setMake($this->getReference('Audi'))
				->setYear(2012)
				->setPrice(80000);
			
			$manager->persist($car);
			$manager->persist($car2);
			$manager->flush();
			
		}
		
		public function getOrder(){
			return 2;
		}
		
	}