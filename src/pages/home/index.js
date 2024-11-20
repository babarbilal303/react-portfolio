import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import JavaScript from "../../assets/skills/javascript.png";
import TypeScript from "../../assets/skills/typescript.png";
import ReactJS from "../../assets/skills/reactjs.png";
import Nodejs from "../../assets/skills/nodejs.png";
import Nextjs from "../../assets/skills/nextjs.jpg";
import MongoDB from "../../assets/skills/mongodb.png";
import MySQL from "../../assets/skills/mysql.png";
import ReactNative from "../../assets/skills/reactnative.png";
import PHP from "../../assets/skills/php.png";
import Laravel from "../../assets/skills/laravel.png";
import AWS from "../../assets/skills/aws.png";
import Azure from "../../assets/skills/azure.png";
import Gatsby from "../../assets/skills/gatsby.png";
import Angular from "../../assets/skills/angulario.png";
import NestJS from "../../assets/skills/nestjs.png";
import VueJS from "../../assets/skills/vuejs.png";
const CurrentTechs = [
  {
    src: JavaScript,
  },
  {
    src: TypeScript,
  },
  {
    src: ReactJS,
  },
  {
    src: Nextjs,
  },
  {
    src: VueJS,

  },
  {
    src: Nodejs,
  },
  {
    src: MongoDB,
  },
  {
    src: MySQL,
  },
  {
    src: ReactNative,
  },
  {
    src: PHP,

  },
  {
    src: Laravel,

  },
 
  {
    src: AWS,

  }
];
export const Home = () => {
  const logo = require('../../assets/logo.png');

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 d-lg-flex align-items-center justify-content-center order-lg-2 h-100 "
          // style={{ backgroundImage: url('../../assets/pic.jpg') }}
          >

            <img src={logo} />

          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div>
                {CurrentTechs.map((tech) => (
              <div
               className="d-inline-flex p-2 bd-highlight"
              >
              <img  src={tech.src}  width={50}
                  height={50}/>

              </div>
            ))}
          
            </div>
            <br/>
            <br/>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
