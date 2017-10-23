<?php
	/**
	 * Created by PhpStorm.
	 * User: francesco
	 * Date: 23/10/2017
	 * Time: 16:49
	 */
	
	namespace CarBundle\Service;
	
	use Doctrine\ORM\EntityManager;
	use PHPUnit\Framework\TestCase;
	
	class DataCheckerTest extends TestCase {
		
		/**
		 * @var EntityManager|\PHPUnit_Framework_MockObject_MockObject
		 */
		protected $em;
		
		public function setUp(){
			
			$this->em = $this->getMockBuilder('Doctrine\ORM\EntityManager')
							 ->disableOriginalConstructor()
							 ->getMock();
			
		}
		
		public function testCheckCarWithRequiredPhotosWillReturnFalse(){
			
			$subject        = new DataChecker($this->em, TRUE);
			$expectedResult = 'danger';
			
			$car = $this->getMockBuilder('CarBundle\Entity\Car')
						->getMock();
			
			$car->expects($this->once())
				->method('setPromote')
				->with(FALSE);
			
			$this->em->expects($this->once())
					 ->method('persist')
					 ->with($car);
			
			$this->em->expects($this->once())
					 ->method('flush');
			
			$result = $subject->checkCar($car);
			
			$this->assertEquals($expectedResult, $result[ 'type' ]);
			
		}
		
	}
