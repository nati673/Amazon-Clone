import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import { useState, useEffect } from "react";
function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const bannerImages = [
    "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="home">
      <div className="homePage__container">
        <div className="image-container">
          <img
            className="homePage__img"
            src={bannerImages[currentImageIndex]}
            alt=""
          />{" "}
          <button className="prev-button" onClick={prevImage}>
            &lt;
          </button>
          <button className="next-button" onClick={nextImage}>
            &gt;
          </button>
        </div>

        <div className="home_row">
          <Product
            id="2012890"
            title="Learn JavaScript Quickly: A Complete Beginner’s Guide to Learning JavaScript, 
            Even If You’re New to Programming "
            price={11.96}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/41BhGsAx7lL._SX384_BO1,204,203,200_.jpg"
            }
          />
          <Product
            id="3023760"
            title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 
            256GB, 8K Camera, Brightest Display Screen, 
            S Pen"
            price={799}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/41Te8HXFyjL._AC_UF226,226_FMjpg_.jpg"
            }
          />
        </div>
        <div className="home_row">
          <Product
            id="406790"
            title="Flyseago Chocolate Fountains Commercial 5 Tiers 9Lbs Large Chocolate 
            Waterfall Machine"
            price={499.99}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/71+druKZnSL._AC_SX569_.jpg"
            }
          />
          <Product
            id="779080"
            title="Elite Gourmet ECT-3100 Long Slot 4 Slice Toaster, Reheat, 
            6 Toast Settings"
            price={33.99}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/81Go5X4RJgL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
            }
          />
          <Product
            id="439470"
            title="Moyidea Car Windshield Sun Shade - Foldable Umbrella 
            "
            price={54.96}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/71Kx+-9l3aL._AC_SX466_.jpg"
            }
          />
        </div>
        <div className="home_row">
          <Product
            id="674900"
            title="Acer EI491CR Sbmiiiphx 49 1800R Curved DFHD (3840x1080) Gaming Monitor | AMD FreeSync Premium Pro 32:9 | Up to 144Hz | 4ms | 90% DCI-P3 | DisplayHDR400 | 1xDisplay Port 1.2"
            price={750.08}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/71FdF2MhJeL._AC_SX679_.jpg"
            }
          />
        </div>
        <div className="home_row">
          <Product
            id="406700"
            title="Mongoose Flatrock Youth/Adult Hardtail Mountain Bike"
            price={78.99}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/81eVzlMwsKS._AC_SX679_.jpg"
            }
          />
          <Product
            id="779000"
            title="LG 65-Inch Class UQ7570 Series 4K Smart TV, AI-Powered 4K, Cloud Gaming (65UQ7570PUJ, 2022), Black"
            price={476.99}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/617vU4mYcAL._AC_SX466_.jpg"
            }
          />
          <Product
            id="439400"
            title="Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display
            "
            price={1187.01}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/81Fm0tRFdHL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
            }
          />
        </div>
        <div className="home_row">
          <Product
            id="40670021"
            title="Audio-Technica ATH-M20X Professional Studio Monitor Headphones, Black"
            price={24.94}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/71HlB-gf46L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            }
          />
          <Product
            id="779000"
            title="Gunnar - Premium Premium Gaming and Computer Glasses"
            price={12.43}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/819UY1hKm5L._AC_UX569_.jpg"
            }
          />
          <Product
            id="439400"
            title="TORC Unisex-Adult T1 Retro Full Face Motorcycle Helmet"
            price={269.99}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/618cbI6w-6L._AC_UX569_.jpg"
            }
          />
        </div>

        <div className="home_row">
          <Product
            id="2012890"
            title="Fitbit Versa 3 Health & Fitness Smartwatch with GPS, 24/7 Heart Rate"
            price={56.63}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/61ZXwnqqOuS._AC_SX679_.jpg"
            }
          />
          <Product
            id="3023760"
            title="Microsoft Surface Pro 8 Tablet, 13 Touchscreen, Intel i5 Evo Platform, 8GB RAM, 128GB SSD, Windows 11 Surface Laptop"
            price={1299.99}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/61Xeh5TNfNL._AC_SX679_.jpg"
            }
          />
        </div>
        <div className="home_row">
          <Product
            id="674900"
            title="SOLE Fitness E35, E25, E20, E55, E95, E98 2020 Model Elliptical Machine, Elliptical Machines for Home Use, Home Exercise Equipment for Cardio Training, Work from Home Fitness Stepper Machine…"
            price={950.08}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/51NmmPh0JDL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
