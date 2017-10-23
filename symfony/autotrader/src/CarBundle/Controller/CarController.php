<?php

namespace CarBundle\Controller;

use CarBundle\Entity\Car;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Car controller.
 *
 * @Route("admin/car")
 */
class CarController extends Controller
{
    /**
     * Lists all car entities.
     *
     * @Route("/", name="car_index")
     * @Method("GET")
	 *
	 * THE TEMPLATE ANNOTATION WILL AUTOMATICALLY REDIRECT WHAT YOU RETURN
	 * BY YOUR CONTROLLER AS LIKE: $this->render('{thisBundle}/Resources/views/{controllerName}/{actionName}.html.twig', $returnedVal);
	 * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $cars = $em->getRepository('CarBundle:Car')->findAll();

        return array(
            'cars' => $cars,
        );
    }
	
	/**
	 * @param $id
	 * @Route("promote/{id}", name="car_promote")
	 *
	 */
    public function promoteAction($id){
	
		$dataChecker = $this->get('car.data_checker');
	
		$em  = $this->getDoctrine()->getEntityManager();
		$car = $em->getRepository('CarBundle:Car')->find($id);
	
		$res = $dataChecker->checkCar($car);
	
		$this->addFlash($res['type'],$res['message']);
		
		return $this->redirectToRoute('car_index');
  
	}

    /**
     * Creates a new car entity.
     *
     * @Route("/new", name="car_new")
     * @Method({"GET", "POST"})
	 * @Template()
     */
    public function newAction(Request $request)
    {
        $car = new Car();
        $form = $this->createForm('CarBundle\Form\CarType', $car);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($car);
            $em->flush();

            return $this->redirectToRoute('car_show', array('id' => $car->getId()));
        }

        return array(
            'car' => $car,
            'form' => $form->createView(),
        );
    }

    /**
     * Finds and displays a car entity.
     *
     * @Route("/{id}", name="car_show")
     * @Method("GET")
	 * @Template()
     */
    public function showAction(Car $car)
    {
        $deleteForm = $this->createDeleteForm($car);

        return array(
            'car' => $car,
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Displays a form to edit an existing car entity.
     *
     * @Route("/{id}/edit", name="car_edit")
     * @Method({"GET", "POST"})
	 * @Template()
     */
    public function editAction(Request $request, Car $car)
    {
        $deleteForm = $this->createDeleteForm($car);
        $editForm = $this->createForm('CarBundle\Form\CarType', $car);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('car_edit', array('id' => $car->getId()));
        }

        return array(
            'car' => $car,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Deletes a car entity.
     *
     * @Route("/{id}", name="car_delete")
     * @Method("DELETE")
	 *
     */
    public function deleteAction(Request $request, Car $car)
    {
        $form = $this->createDeleteForm($car);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($car);
            $em->flush();
        }

        return $this->redirectToRoute('car_index');
    }

    /**
     * Creates a form to delete a car entity.
     *
     * @param Car $car The car entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Car $car)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('car_delete', array('id' => $car->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
