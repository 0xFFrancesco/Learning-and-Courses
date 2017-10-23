<?php
	
	namespace CarBundle\Controller;
	
	use Symfony\Component\HttpFoundation\Request;
	use Symfony\Component\Form\Extension\Core\Type\SubmitType;
	use Symfony\Component\Form\Extension\Core\Type\TextType;
	use Symfony\Bundle\FrameworkBundle\Controller\Controller;
	use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
	
	class DefaultController extends Controller {
		
		/**
		 * @Route("/our-cars", name="offer")
		 */
		public function indexAction(Request $request){
			
			$carRepo = $this->getDoctrine()->getRepository('CarBundle:Car');
			//CUSTOM QUERY CREATED WITH QUERY-BUILDER IN THE CARS DOCTRINE REPOSITORY
			
			//FORM BUILDER TO BUILD A FORM
			$form = $this->createFormBuilder()
				 ->setMethod('GET')
				 ->add('search', TextType::class, ['required' => FALSE])
				 ->getForm();
			
			$form->handleRequest($request);
			if($form->isSubmitted()){
				$cars = $carRepo->findCarsWithDetails($form->get('search')->getData());
			} else {
				$cars = $carRepo->findCarsWithDetails();
			}
			
			return $this->render('CarBundle:Default:index.html.twig', [ 'cars' => $cars, 'form' => $form->createView() ]);
			
		}
		
		/**
		 * @Route("/our-cars/{id}", name="car-detail")
		 */
		public function showAction( $id ){
			
			$carRepo = $this->getDoctrine()->getRepository('CarBundle:Car');
			$car     = $carRepo->findCarWithDetailsByID($id);
			
			return $this->render('CarBundle:Default:detail.html.twig', [ 'car' => $car ]);
			
		}
		
	}
