<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(ProductRepository $repoProduct): Response
    {
        $products = $repoProduct->findAll();
        $bestSellerProducts = $repoProduct->findByIsBestSeller(1);
        $newArrivalProducts = $repoProduct->findByIsNewArrival(1);
        $featuredProducts = $repoProduct->findByIsFeatured(1);
        $specialOfferProducts = $repoProduct->findByIsSpecialOffer(1);
        // dd($bestSellerProducts);

        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'products' => $products,
            'bestSellers' => $bestSellerProducts,
            'newArrivals' => $newArrivalProducts,
            'featured' => $featuredProducts,
            'specialOffer' => $specialOfferProducts
        ]);
    }
}
