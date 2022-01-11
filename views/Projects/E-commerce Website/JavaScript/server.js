const http = require('http');

        const hostname = '127.0.0.1';
        const port = 3000;

        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopingzilla</title>
    <link rel="stylesheet" href="../CSS/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
    <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
</head>

<body>
    <header>
        <nav class="nav1">
            <div class="left">
                <span>Welcome to my E-shop </span>
                <a href="#">Register</a> OR
                <a href="#">Login</a>
            </div>
            <div class="right">
                <i class="fa fa-facebook"></i>
                <i class="fa fa-instagram"></i>
                <i class="fa fa-whatsapp"></i>
                <i class="fa fa-twitter"></i>
                <i class="fa fa-youtube"></i>
            </div>
        </nav>
        <!-- nav1 end -->

        <!-- nav2 start -->
        <nav class="nav2">
            <div class="nav2-left">
                <a href="#"><i class="fa fa-phone"> +91 7713752</i></a>
                <a href="#"><i class="fa fa-envelope"> sa55808@gmail.com</i></a>
            </div>
            <div class="nav2-center">
                <a href="main.html">
                    <h1>Shoping<span>zilla</span></h1><a>
                        <p>Everything for everyone</p>
            </div>
            <div class="nav2-right">
                <a href="#"><i class="fa fa-map"> Contact Us</i></a>
            </div>
        </nav>

        <!-- nav3 start -->
        <nav class="nav3">
            <ul>
                <li><a href="#"><i class="fa fa-home"></i>Home</a></li>
                <li><a href="#"><i class="fa fa-shopping-cart"></i>Grocery</a></li>
                <li><a href="#"><i class="fa fa-mobile"></i>Mobiles</a></li>
                <li><a href="#"><i class="fa fa-user"></i>Clothes</a></li>
                <li><a href="#"><i class="fa fa-laptop"></i>Laptops</a></li>
                <li><a href="#"><i class="fa fa-caret-down"></i>Category</a>

                    <ul>
                        <li><a href="#"><i class="fa fa-clipboard"></i>no Category</a></li>
                        <li><a href="#"><i class="fa fa-clipboard"></i>no Category</a></li>
                        <li><a href="#"><i class="fa fa-clipboard"></i>no Category</a></li>
                        <li><a href="#"><i class="fa fa-clipboard"></i>no Category</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        <!-- featured start -->
        <section class="featured">
            <div class="featured-text">
                <button>Coming soon</button>
                <h2>Our new design</h2>
            </div>
        </section>

    </header>


    <!-- latest start -->


    <section class="latest">
        <div class="product-intro">
            <h1>New <span>Arrivals</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio esse dolor minus.</p>
        </div>
        <div class="card-container">
            <div class="card">
                <div>
                    <img src="../IMG/s2.jpg" alt="check your internet connection">
                </div>
                <h1>Branded Shoes</h1>
                <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </span>
                <p>$500.00</p>
                <button>Add to cart</button>
            </div>
            <div class="card">
                <div>
                    <img src="../IMG/s3.jpg" alt="check your internet connection">
                </div>
                <h1>Branded Shoes</h1>
                <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </span>
                <p>$500.00</p>
                <button>Add to cart</button>
            </div>
            <div class="card">
                <div>
                    <img src="../IMG/s8.jpg" alt="check your internet connection">
                </div>
                <h1>Branded Shoes</h1>
                <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </span>
                <p>$500.00</p>
                <button>Add to cart</button>
            </div>
            <div class="card">
                <div>
                    <img src="../IMG/s2.jpg" alt="check your internet connection">
                </div>
                <h1>Branded Shoes</h1>
                <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </span>
                <p>$500.00</p>
                <button>Add to cart</button>
            </div>
        </div>

        <div class="card-container">
            <div class="card">
                <div>
                    <img src="../IMG/s2.jpg" alt="check your internet connection">
                </div>
                <h1>Branded Shoes</h1>
                <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </span>
                <p>$500.00</p>
                <button>Add to cart</button>
            </div>
            <div class="card">
                <div>
                    <img src="../IMG/s3.jpg" alt="check your internet connection">
                </div>
                <h1>Branded Shoes</h1>
                <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </span>
                <p>$500.00</p>
                <button>Add to cart</button>
            </div>
            <div class="card">
                <div>
                    <img src="../IMG/s8.jpg" alt="check your internet connection">
                </div>
                <h1>Branded Shoes</h1>
                <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </span>
                <p>$500.00</p>
                <button>Add to cart</button>
            </div>
            <div class="card">
                <div>
                    <img src="../IMG/s2.jpg" alt="check your internet connection">
                </div>
                <h1>Branded Shoes</h1>
                <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </span>
                <p>$500.00</p>
                <button>Add to cart</button>
            </div>
        </div>

    </section>

    <!-- popular product section -->

    <section class="latest">
        <div class="product-intro">
            <h1>Popular <span>Products</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio esse dolor minus.</p>
        </div>
        <div class="card-container">
            <div class="card">
                <div>
                    <img src="../IMG/bu1.jpg" alt="check your internet connection">
                </div>
                <h1>Makeup Brands</h1>
                <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </span>
                <p>$500.00</p>
                <button>Add to cart</button>
            </div>
            <div class="card">
                <div>
                    <img src="../IMG/bu2.jpg" alt="check your internet connection">
                </div>
                <h1>Makeup Brands</h1>
                <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>

                </span>
                <p>$500.00</p>
                <button>Add to cart</button>
            </div>
            <div class="card">
                <div>
                    <img src="../IMG/bu3.jpg" alt="check your internet connection">
                </div>
                <h1>Makeup Brands</h1>
                <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </span>
                <p>$500.00</p>
                <button>Add to cart</button>
            </div>
            <div class="card">
                <div>
                    <img src="../IMG/bu4.jpg" alt="check your internet connection">
                </div>
                <h1>Makeup Brands</h1>
                <span>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>

                </span>
                <p>$500.00</p>
                <button>Add to cart</button>
            </div>
        </div>
    </section>
    <section class="trends">
        <div class="product-intro">
            <h1>Top <span>Trends</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio esse dolor minus.</p>
        </div>

        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../IMG/headphone1.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../IMG/headphone2.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../IMG/headphone3.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../IMG/headphone1.png" alt="">
                </div>

                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>


    <footer>
        <div>
            <h1>Shoping<span>zilla</span></h1>
            <p>Everything for everyone</p>
        </div>
        <div>
            <i class="fa fa-facebook"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-whatsapp"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-pinterset"></i>
            <p class="text-sachin">Design by <span>Sachin Bhardwaj</span></p>
        </div>
        <div>
            <p>
                &copy;2021 All Rights Reserved
            </p>
        </div>
    </footer>`);
        });

        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });
