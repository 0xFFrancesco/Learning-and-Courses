<?php
	
	namespace CarBundle\Repository;
	
	/**
	 * CarRepository
	 *
	 * This class was generated by the Doctrine ORM. Add your own custom
	 * repository methods below.
	 */
	class CarRepository extends \Doctrine\ORM\EntityRepository {
		
		//CUSTOM QUERY FOR PERFORMANCE IMPROVEMENTS
		//DOCTRINE WILL DO ONLY ONE QUERY TO GET ALL THE DATA
		//INSTEAD OF MANY QUERIES FOR LAZY-FETCH ALL THE
		//N-TO-X RELATED DATA WHEN ACCESSED
		public function findCarsWithDetails( $name_or_make_filter = FALSE){
			
			$qb = $this->createQueryBuilder('c');
			$qb->select('c, make');
			$qb->join('c.make', 'make');
			
			$name_or_make_filter && $qb->where('c.name LIKE :name OR make.name LIKE :name') && $qb->setParameter(':name', "%$name_or_make_filter%");
			
			return $qb->getQuery()->getResult();
			
		}
		
		public function findCarWithDetailsByID( $id ){
			
			$qb = $this->createQueryBuilder('c');
			$qb->select('c, make');
			$qb->join('c.make', 'make');
			$qb->where('c.id = :id');
			$qb->setParameter('id', $id);
			
			return $qb->getQuery()->getSingleResult();
			
		}
		
	}
