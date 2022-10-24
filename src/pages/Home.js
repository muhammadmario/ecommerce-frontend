import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosJWT from "../app/api/axiosJWT";
import Banner from "../components/Banner";
import CardProduct from "../components/CardProduct";
import CarouselsHome from "../components/CarouselsHome";
import HeroCard from "../components/HeroCard";
import clothes from "../assets/img/clothes.jpg";
import kemeja from "../assets/img/kemeja.jpg";
import jaket from "../assets/img/jaket.jpg";
import kaos from "../assets/img/kaos.jpg";
import hat1 from "../assets/img/hat1.jpg";
import hat2 from "../assets/img/hat2.jpg";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  return (
    <section className="w-full min-h-screen md:px-16 flex flex-col mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <Banner />
        <CarouselsHome />
        <HeroCard />
        {/* <div className="bg-red-500 rounded-2xl shadow-xl min-h-[50px] col-span-2"></div>
        <div className="bg-blue-500 rounded-2xl shadow-xl min-h-[50px] row-span-3"></div>
        <div className="bg-green-500 rounded-2xl shadow-xl min-h-[50px] col-span-2"></div> */}
      </div>

      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
        <CardProduct
          image={clothes}
          title="green goblin"
          desc="loremana mada soasa lowqw asasa"
          price="800.000"
        />
        <CardProduct
          image={kemeja}
          title="Kemeja bitu"
          desc="loremana mada soasa lowqw asasa"
          price="1.800.000"
        />
        <CardProduct
          image={kaos}
          title="kaos pwedie"
          desc="loremana mada soasa lowqw asasa"
          price="500.000"
        />
        <CardProduct
          image={jaket}
          title="jaket pwedie"
          desc="loremana mada soasa lowqw asasa"
          price="1.200.000"
        />
        <CardProduct
          image={hat1}
          title="Kemeja bitu"
          desc="loremana mada soasa lowqw asasa"
          price="1.800.000"
        />
        <CardProduct
          image={kaos}
          title="kaos pwedie"
          desc="loremana mada soasa lowqw asasa"
          price="500.000"
        />
        <CardProduct
          image={jaket}
          title="jaket pwedie"
          desc="loremana mada soasa lowqw asasa"
          price="1.200.000"
        />
        <CardProduct
          image={jaket}
          title="jaket pwedie"
          desc="loremana mada soasa lowqw asasa"
          price="1.200.000"
        />
        <CardProduct
          image={hat2}
          title="Kemeja bitu"
          desc="loremana mada soasa lowqw asasa"
          price="1.800.000"
        />
        <CardProduct
          image={jaket}
          title="jaket pwedie"
          desc="loremana mada soasa lowqw asasa"
          price="1.200.000"
        />
        <CardProduct
          image={kemeja}
          title="Kemeja bitu"
          desc="loremana mada soasa lowqw asasa"
          price="1.800.000"
        />
      </div>
    </section>
  );
}

export default Home;
