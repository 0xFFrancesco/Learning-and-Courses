<?php
	/**
	 * Created by PhpStorm.
	 * User: francesco
	 * Date: 22/10/2017
	 * Time: 11:47
	 */
	
	namespace AppBundle\Menu;
	
	
	use Knp\Menu\MenuFactory;
	
	class Builder {
		
		public function mainMenu( MenuFactory $factory, array $options ){
			
			$menu = $factory->createItem('root');
			$menu->setChildrenAttribute('class','navbar-nav');
			$menu->addChild('Home', [ 'route' => 'homepage' ]);
			$menu->addChild('Offer', [ 'route' => 'offer' ]);
			$menu->addChild('Manage', [ 'route' => 'car_index' ]);
			$menu['Home']->setLinkAttribute('class','nav-link' );
			$menu['Offer']->setLinkAttribute('class','nav-link' );
			$menu['Manage']->setLinkAttribute('class','nav-link' );
			
			return $menu;
			
		}
		
	}