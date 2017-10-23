<?php
	
	namespace CarBundle\Command;
	
	use Doctrine\ORM\EntityManager;
	use Symfony\Component\Console\Command\Command;
	use Symfony\Component\Console\Helper\ProgressBar;
	use Symfony\Component\Console\Input\InputArgument;
	use Symfony\Component\Console\Input\InputInterface;
	use Symfony\Component\Console\Input\InputOption;
	use Symfony\Component\Console\Output\OutputInterface;
	
	class CarCheckCarsCommand extends Command {
		
		/**
		 * @var EntityManager
		 */
		protected $em;
		
		public function __construct( EntityManager $em ){
			$this->em = $em;
			parent::__construct(NULL);
		}
		
		protected function configure(){
			
			$this->setName('car:check-cars')->setDescription('Display all cars')->addArgument('format', InputArgument::OPTIONAL, 'Progress bar format')->addOption('option', NULL, InputOption::VALUE_NONE, 'Option description');
		}
		
		protected function execute( InputInterface $input, OutputInterface $output ){
			
			$carRepo = $this->em->getRepository('CarBundle:Car');
			
			$cars = $carRepo->findBy([], [ 'make' => 'ASC', 'name' => 'ASC' ]);
			
			$format = $input->getArgument('format');
			
			$bar = new ProgressBar($output, count($cars));
			$bar->setFormat($format);
			$bar->start();
			
			$res = "";
			foreach ( $cars as $car ){
				$res .= $car->getMake() . "-" . $car->getName() . " ";
				sleep(1);
				$bar->advance();
			}
			
			$bar->finish();
			$output->writeln('');
			$output->writeln($res);
			
		}
		
	}
