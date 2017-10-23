<?php

namespace CarBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Car
 *
 * @ORM\Table(name="car")
 * @ORM\Entity(repositoryClass="CarBundle\Repository\CarRepository")
 */
class Car
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var Make
     *
     * @ORM\ManyToOne(targetEntity="CarBundle\Entity\Make", inversedBy="cars")
     */
    private $make;
	
	/**
	 * @var string
	 *
	 * @ORM\Column(name="description", type="text", nullable=true)
	 */
    private $description;
	
	/**
	 * @var integer
	 *
	 * @ORM\Column(name="price", type="integer", nullable=true)
	 */
    private $price;
    
	/**
	 * @var integer
	 *
	 * @ORM\Column(name="year", type="integer", nullable=true)
	 */
    private $year;
	
	/**
	 * @var integer
	 *
	 * @ORM\Column(name="promote", type="boolean", nullable=true)
	 */
    private $promote;
	
	/**
	 * @return string
	 */
	public function getDescription(){
		
		return $this->description;
	}
	
	/**
	 * @param string $description
	 */
	public function setDescription( string $description ){
		
		$this->description = $description;
	}

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Car
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set make
     *
     * @param string $make
     *
     * @return Car
     */
    public function setMake($make)
    {
        $this->make = $make;

        return $this;
    }

    /**
     * Get make
     *
     * @return string
     */
    public function getMake()
    {
        return $this->make;
    }

    /**
     * Set price
     *
     * @param integer $price
     *
     * @return Car
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price
     *
     * @return integer
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set year
     *
     * @param integer $year
     *
     * @return Car
     */
    public function setYear($year)
    {
        $this->year = $year;

        return $this;
    }

    /**
     * Get year
     *
     * @return integer
     */
    public function getYear()
    {
        return $this->year;
    }

    /**
     * Set promote
     *
     * @param boolean $promote
     *
     * @return Car
     */
    public function setPromote($promote)
    {
        $this->promote = $promote;

        return $this;
    }

    /**
     * Get promote
     *
     * @return boolean
     */
    public function getPromote()
    {
        return $this->promote;
    }
}
