<?php
	/**
	 * Created by PhpStorm.
	 * User: francesco
	 * Date: 22/10/2017
	 * Time: 23:02
	 */
	
	namespace CarBundle\Service;
	
	
	use CarBundle\Entity\Car;
	use Doctrine\ORM\EntityManager;
	
	class DataChecker {
		
		protected $requireImagesToCheck;
		
		/**
		 * @var EntityManager
		 */
		protected $em;
		
		/**
		 * DataChecker constructor.
		 *
		 * @param $requireImagesToCheck
		 */
		public function __construct( $em, $requireImagesToCheck ){
			
			$this->requireImagesToCheck = $requireImagesToCheck;
			$this->em                   = $em;
			
		}
		
		public function checkCar( Car $car ){
			
			$car->setPromote($this->requireImagesToCheck ? 0 : 1);
			$this->em->persist($car);
			$this->em->flush();
			
			if ( $this->requireImagesToCheck ) {
				
				return [ 'type' => 'danger', 'message' => "Car {$car->getMake()} {$car->getName()} is NOT checked, images required." ];
				
			}
			
			return [ 'type' => 'success', 'message' => "Car {$car->getMake()} {$car->getName()} is checked" ];
			
		}
		
	}