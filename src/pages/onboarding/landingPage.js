import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { NonAuthRoutes } from "../../url";
import { ReactComponent as ExploreNow } from "../../assets/svg/explore-now-icon.svg";
import Footer from "../../components/footer/footer";
import LandingPageNav from "../../components/navigation/landingPageNav";
import landingPagePhoto1 from "../../assets/img/landing-page-photo1.png";
import landingPagePhoto2 from "../../assets/img/landing-page-photo2.png";
import landingPagePhoto3 from "../../assets/img/landing-page-photo3.png";
import landingPagePhoto4 from "../../assets/img/landing-page-photo4.png";
import landingPagePhoto5 from "../../assets/img/landing-page-photo5.png";
import landingPagePhoto6 from "../../assets/img/landing-page-photo6.png";
import landingPageIcon1 from "../../assets/svg/landing-page-icon1.svg";
import landingPageIcon2 from "../../assets/svg/landing-page-icon2.svg";
import landingPageIcon2Max from "../../assets/svg/landing-page-icon2Max.svg";
import landingPageIcon2Mike from "../../assets/svg/landing-page-icon2Mike.svg";
import landingPageIcon3 from "../../assets/svg/landing-page-icon3.svg";
import landingPageIcon4 from "../../assets/svg/landing-page-icon4.svg";
import landingPageIcon5 from "../../assets/svg/landing-page-icon5.svg";

import { ReactComponent as CloseModalIcon } from "../../assets/svg/close-modal-icon.svg";
import "../../App.css";

function App() {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const ac = new AbortController();
    document.title = "Landing Page - Squazzle";

    // navigate(NonAuthRoutes.login);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div className="relative font-sans">
      <LandingPageNav openModal={openModal} />
      <div className="hidden md:flex flex-col gap-y-20">
        <div
          className="flex font-sans"
          style={{ justifyContent: "space-between" }}
        >
          <section className="px-[60px] mt-[168px] min-[1280px]:mt-[208px] min-[1280px]:px-[80px] max-[908px]:px-[40px]">
            <h1 className="text-[54px] leading-[73px] font-bold max-w-[595px] max-[1150px]:text-5xl max-[1150px]:leading-[63px] max-[908px]:text-4xl">
              The easiest way to find the property of your choice
            </h1>
            <p className="text-base font-normal text-squazzle-text-deep-grey1-color max-w-[445px] mt-5 max-[908px]:text-sm">
              We provide various property models for you at affordable prices
              and the best quality
            </p>
            <div className="flex flex-row gap-[9px] items-center mt-[60px]">
              <button
                type="button"
                onClick={() => navigate(NonAuthRoutes.signUp)}
              >
                <p className="text-lg font-bold text-[#018388] max-[908px]:text-base">
                  Explore our properties Now
                </p>
              </button>
              <button
                type="button"
                onClick={() => navigate(NonAuthRoutes.signUp)}
              >
                <ExploreNow />
              </button>
            </div>
          </section>
          <img
            src={`${landingPagePhoto1}`}
            alt="a beautiful home with a pool"
            className="max-[1150px]:w-[480px] max-[1150px]:h-[701.914px] max-[1010px]:w-[470px] max-[1010px]:h-[687.29px] max-[908px]:w-[400px] max-[908px]:h-[584.9287px]"
          />
        </div>

        <section className="flex items-center justify-center bg-squazzle-button-bg-deep-green-color h-[659px] font-sans">
          <div className="relative flex flex-row items-center justify-center gap-8 text-squazzle-profileCard-background-white-color w-full">
            <div className="flex-[0.7]">
              <img
                src={landingPagePhoto2}
                alt="a nice home"
                className="h-[507px] w-[385px] mx-auto relative z-[1]"
              />
              <div className="flex flex-col gap-8 absolute left-[-100px] top-[40%] max-[1030px]:top-[25%]">
                <div className="bg-squazzle-landingPage-bar-orange-color h-[42px] w-[400px] max-lg:w-[250px] -rotate-[40deg]" />
                <div className="bg-squazzle-landingPage-bar-black-color h-[42px] w-[400px] max-lg:w-[250px] -rotate-[40deg]" />
              </div>
            </div>
            <div className="flex flex-col w-full max-w-[533px]">
              <h1 className="font-bold text-[2.5rem] leading-[50px]">
                What makes us different from others
              </h1>
              <p className="font-normal text-lg leading-[26px] mt-8">
                We have more than five years of experience to provide suitable
                housing for you to live in later, we also ensure that all the
                housing we provide a conducive environment with basic housing
                facilities that have met the standards, so you&apos;ll feel
                satisfied when you use squazzle.
              </p>
              <div className="flex flex-row items-center justify-between w-full max-w-[504px] gap-5 mt-8">
                <div className="flex flex-col w-[88px]">
                  <h2 className="font-semibold text-4xl leading-[45px]">5</h2>
                  <p className="font-normal text-base leading-6">
                    Years of experience
                  </p>
                </div>
                <div className="flex flex-col w-[88px]">
                  <h2 className="font-semibold text-4xl leading-[45px]">250</h2>
                  <p className="font-normal text-base leading-6">
                    Apartments listed
                  </p>
                </div>
                <div className="flex flex-col w-[88px]">
                  <h2 className="font-semibold text-4xl leading-[45px]">10+</h2>
                  <p className="font-normal text-base leading-6">
                    Awards gained
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-row items-center justify-between gap-x-6 w-full px-[60px] min-[1280px]:px-[80px] max-[908px]:px-[40px]">
          <div className="flex flex-col w-full max-w-[600px] flex-1">
            <h1 className="font-bold text-4xl text-squazzle-text-black-color leading-[45px]">
              The most trusted Real Estate website
            </h1>
            <p className="font-normal text-lg leading-[26px] text-squazzle-terms-policy-grey-color mt-9 mb-[3.375rem] max-w-[499px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis.
            </p>
            <button
              type="button"
              onClick={() => navigate(NonAuthRoutes.signUp)}
              className="bg-squazzle-button-bg-deep-green-color text-squazzle-button-bg-light-green-color font-bold text-xl w-full max-w-[178px] py-[20px] rounded-xl"
            >
              Explore Now
            </button>
          </div>
          <div className="flex-1 flex flex-row gap-x-6">
            <img
              src={landingPagePhoto6}
              alt="a nice apartment"
              className="self-end h-[400px] flex-[0.05]"
              style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
            />
            <div
              style={{
                backgroundImage: `url(${landingPagePhoto3})`,
                backgroundSize: "cover",
                height: "571px",
                width: "100%",
                position: "relative",
                flex: "1",
              }}
            >
              <img
                src={landingPageIcon1}
                alt="testimonies"
                className="absolute bottom-[20px] right-[-70px] max-[1115px]:right-[-60px] max-[940px]:right-[-40px] h-[78px]"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-row h-[488px] px-[60px] min-[1280px]:px-[80px] max-[908px]:px-[40px]">
          <div
            className="rounded-tl-[8px] rounded-bl-[8px]"
            style={{
              backgroundImage: `url(${landingPagePhoto5})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100%",
              flex: "1",
            }}
          />
          <div className="flex-1 flex items-center justify-center rounded-tr-[8px] rounded-br-[8px] bg-squazzle-text-deep-green-color px-10 py-5">
            <div className="flex flex-col justify-start text-squazzle-profileCard-background-white-color">
              <h1 className="font-bold text-[2.5rem] leading-[50px] max-w-[432px] text-squazzle-background-white-color">
                List your properties with us
              </h1>
              <p className="text-lg leading-[26px] font-normal max-w-[400px] text-squazzle-background-white-color mb-8 mt-2">
                Space sharing earns you extra income and opens up new
                opportunities
              </p>
              <button
                type="button"
                className="bg-squazzle-button-bg-deep-green-color text-squazzle-button-bg-light-green-colors font-bold text-base w-full max-w-[154px] py-[18px] rounded-xl"
                onClick={() => navigate(NonAuthRoutes.signUp)}
              >
                Learn more
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center w-full max-w-[890px] min-h-[683px] mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center mt-[-100px]">
            <h1 className="font-bold text-4xl leading-[45px] text-squazzle-text-black-color">
              Word from our customers
            </h1>
            <p className="font-normal text-lg leading-[26px] text-squazzle-text-deep-grey1-color mt-2">
              Our users have plenty to say about our success with Squazzle!
            </p>
          </div>
          <div className="flex flex-row gap-x-6 mt-[54px]">
            <div
              style={{ boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col justify-between bg-squazzle-profileCard-background-white-color h-[318px] w-full p-4 rounded-[4px]"
            >
              <p className="font-normal text-base text-squazzle-text-deep-grey1-color mx-auto w-full max-w-[305px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per incept
              </p>
              <div className="flex flex-col gap-y-5">
                <div className="flex items-center justify-between w-full max-w-[282px] h-[34px] mx-auto">
                  <h2>
                    Julia
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-squazzle-landingPage-twitter-blue-color align-middle ml-2"
                    />
                  </h2>
                  <img
                    src={landingPageIcon3}
                    alt="avatar"
                    className="w-[34px] h-[34px] self-end"
                  />
                </div>
                <div className="w-full max-w-[282px] mx-auto">
                  <img
                    src={landingPageIcon2}
                    alt="rating"
                    className="w-[92px] h-[20px]"
                  />
                </div>
              </div>
            </div>
            <div
              style={{ boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col justify-between bg-squazzle-profileCard-background-white-color h-[318px] w-full p-4 rounded-[4px]"
            >
              <p className="font-normal text-base text-squazzle-text-deep-grey1-color mx-auto w-full max-w-[305px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per incept
              </p>
              <div className="flex flex-col gap-y-5">
                <div className="flex items-center justify-between w-full max-w-[282px] h-[34px] mx-auto">
                  <h2>
                    Max
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-squazzle-landingPage-twitter-blue-color align-middle ml-2"
                    />
                  </h2>
                  <img
                    src={landingPageIcon4}
                    alt="avatar"
                    className="w-[34px] h-[34px] self-end"
                  />
                </div>
                <div className="w-full max-w-[282px] mx-auto">
                  <img
                    src={landingPageIcon2Max}
                    alt="rating"
                    className="w-[92px] h-[20px]"
                  />
                </div>
              </div>
            </div>
            <div
              style={{ boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col justify-between bg-squazzle-profileCard-background-white-color h-[318px] w-full p-4 rounded-[4px]"
            >
              <p className="font-normal text-base text-squazzle-text-deep-grey1-color mx-auto w-full max-w-[305px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per incept
              </p>
              <div className="flex flex-col gap-y-5">
                <div className="flex items-center justify-between w-full max-w-[282px] h-[34px] mx-auto">
                  <h2>
                    Mike
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-squazzle-landingPage-twitter-blue-color align-middle ml-2"
                    />
                  </h2>
                  <img
                    src={landingPageIcon5}
                    alt="avatar"
                    className="w-[34px] h-[34px] self-end"
                  />
                </div>
                <div className="w-full max-w-[282px] mx-auto">
                  <img
                    src={landingPageIcon2Mike}
                    alt="rating"
                    className="w-[92px] h-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* MOBILE VIEW */}
      <div className="flex justify-center md:hidden mt-[141px] font-sans">
        <main className="">
          <div className="flex flex-col items-center px-5">
            <h1 className="text-[36px] font-bold leading-[45px] max-w-[349px]">
              The easiest way to find the property of your choice
            </h1>
            <p className="text-squazzle-text-deep-grey1-color text-base max-w-[334px] mt-5">
              We provide various property models for you at affordable prices
              and the best quality
            </p>
            <div className="flex flex-row gap-[9px] items-center mt-[30px] mb-10">
              <button
                type="button"
                onClick={() => navigate(NonAuthRoutes.signUp)}
              >
                <p className="font-bold text-[#018388] text-base">
                  Explore our properties Now
                </p>
              </button>
              <button
                type="button"
                onClick={() => navigate(NonAuthRoutes.signUp)}
              >
                <ExploreNow />
              </button>
            </div>
            <img
              src={`${landingPagePhoto1}`}
              alt="a beautiful home with a pool"
              className="h-[513px] w-[351px] mb-[34px] rounded-[4px]"
              style={{ boxShadow: "0px, 4px, rgba(0, 0, 0, 0.25)" }}
            />
          </div>

          <section className="flex items-center justify-center min-h-screen bg-squazzle-button-bg-deep-green-color text-squazzle-profileCard-background-white-color">
            <div className="flex flex-col items-center gap-5 px-5 py-8 text-center">
              <h1 className="font-bold text-[32px]">
                What makes us different from others
              </h1>
              <p className="font-normal text-[16px] leading-[35px]">
                We have more than five years of experience to provide suitable
                housing for you to live in later, we also ensure that all the
                housing we provide a conducive environment with basic housing
                facilities that have met the standards, so you&apos;ll feel
                satisfied when you use squazzle.
              </p>
              <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col items-center justify-center w-[88px]">
                  <h2 className="font-semibold text-[32px]">5</h2>
                  <p className="font-normal text-[16px]">Years of experience</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[88px] text-center">
                  <h2 className="font-semibold text-[32px]">250</h2>
                  <p className="font-normal text-[16px]">Apartments listed</p>
                </div>
                <div className="flex flex-col items-center justify-center w-[88px] text-center">
                  <h2 className="font-semibold text-[32px]">10+</h2>
                  <p className="font-normal text-[16px]">Awards gained</p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center gap-5 px-5 py-8 w-[350px]">
              <div className="flex flex-col">
                <h1 className="font-bold text-[32px] text-squazzle-text-black-color leading-[42px]">
                  The most trusted Real Estate website
                </h1>
                <p className="font-normal text-base text-squazzle-terms-policy-grey-color mt-5">
                  We ensure that what you see is what you get. Our displayed
                  property have been reviewed and verified
                </p>
              </div>
              <div className="relative flex flex-col items-center justify-between h-[692px] gap w-full">
                <div
                  style={{
                    backgroundImage: `url(${landingPagePhoto3})`,
                    backgroundSize: "cover",
                    height: "571px",
                    width: "100%",
                  }}
                >
                  <img
                    src={landingPagePhoto4}
                    alt="a nice apartment"
                    className="border-t-2 border-l-2 rounded-br-lg"
                  />
                </div>
                <img
                  src={landingPageIcon1}
                  alt="testimonies"
                  className="absolute bottom-[80px] right-0"
                />
                <button
                  type="button"
                  onClick={() => navigate(NonAuthRoutes.signUp)}
                  className="bg-squazzle-button-bg-deep-green-color text-squazzle-profileCard-background-white-color font-bold text-xl w-full py-[16px] rounded-xl"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center min-h-[640px] px-5 w-full">
            <div className="flex flex-col w-full">
              <div
                className="rounded-tl-[20px] rounded-tr-[20px]"
                style={{
                  backgroundImage: `url(${landingPagePhoto5})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "253px",
                  width: "100%",
                }}
              />
              <div className="flex-1 flex items-center justify-center rounded-bl-[20px] rounded-br-[20px] bg-squazzle-text-deep-green-color p-5">
                <div className="flex flex-col gap-4 text-squazzle-profileCard-background-white-color">
                  <h1 className="font-bold text-[32px]">
                    List your properties with us
                  </h1>
                  <p className="text-base font-normal">
                    Space sharing earns you extra income and opens up new
                    opportunities
                  </p>
                  <button
                    type="button"
                    className="bg-squazzle-button-bg-deep-green-color text-squazzle-profileCard-background-white-color font-bold text-xl mx-auto w-full max-w-[154px] py-[16px] rounded-xl"
                    onClick={() => navigate(NonAuthRoutes.signUp)}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center min-h-screen px-5 w-full">
            <div className="flex flex-col gap-y-8 h-[1208px] w-full max-w-[361px]">
              <div className="flex flex-col text-center w-full">
                <h1 className="font-bold text-[28px] text-squazzle-text-black-color">
                  Word from our customers
                </h1>
                <p className="font-normal text-base text-squazzle-terms-policy-grey-color mx-auto w-[334px]">
                  Our users have plenty to say about our success with Squazzle!
                </p>
              </div>
              <div className="flex flex-col gap-y-6">
                <div
                  style={{ boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.1)" }}
                  className="flex flex-col justify-between bg-squazzle-profileCard-background-white-color h-[318px] w-full py-3 rounded-[4px]"
                >
                  <p className="font-normal text-base text-squazzle-text-deep-grey1-color mx-auto w-full max-w-[305px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per incept
                  </p>
                  <div className="flex flex-col gap-y-8">
                    <div className="flex items-center justify-between w-full max-w-[282px] h-[34px] mx-auto">
                      <h2>
                        Julia
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="text-squazzle-landingPage-twitter-blue-color align-middle ml-2"
                        />
                      </h2>
                      <img
                        src={landingPageIcon3}
                        alt="avatar"
                        className="w-[34px] h-[34px] self-end"
                      />
                    </div>
                    <div className="w-full max-w-[282px] mx-auto">
                      <img
                        src={landingPageIcon2}
                        alt="rating"
                        className="w-[92px] h-[20px]"
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{ boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.1)" }}
                  className="flex flex-col justify-between bg-squazzle-profileCard-background-white-color h-[318px] w-full py-3 rounded-[4px]"
                >
                  <p className="font-normal text-base text-squazzle-text-deep-grey1-color mx-auto w-full max-w-[305px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per incept
                  </p>
                  <div className="flex flex-col gap-y-8">
                    <div className="flex items-center justify-between w-full max-w-[282px] h-[34px] mx-auto">
                      <h2>
                        Max
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="text-squazzle-landingPage-twitter-blue-color align-middle ml-2"
                        />
                      </h2>
                      <img
                        src={landingPageIcon4}
                        alt="avatar"
                        className="w-[34px] h-[34px] self-end"
                      />
                    </div>
                    <div className="w-full max-w-[282px] mx-auto">
                      <img
                        src={landingPageIcon2Max}
                        alt="rating"
                        className="w-[92px] h-[20px]"
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{ boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.1)" }}
                  className="flex flex-col justify-between bg-squazzle-profileCard-background-white-color h-[318px] w-full py-3 rounded-[4px]"
                >
                  <p className="font-normal text-base text-squazzle-text-deep-grey1-color mx-auto w-full max-w-[305px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per incept
                  </p>
                  <div className="flex flex-col gap-y-8">
                    <div className="flex items-center justify-between w-full max-w-[282px] h-[34px] mx-auto">
                      <h2>
                        Mike
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="text-squazzle-landingPage-twitter-blue-color align-middle ml-2"
                        />
                      </h2>
                      <img
                        src={landingPageIcon5}
                        alt="avatar"
                        className="w-[34px] h-[34px] self-end"
                      />
                    </div>
                    <div className="w-full max-w-[282px] mx-auto">
                      <img
                        src={landingPageIcon2Mike}
                        alt="rating"
                        className="w-[92px] h-[20px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
      {modalIsOpen ? (
        <ul className="fixed bg-white flex flex-col gap-6 font-normal text-base max-[1030px]:text-sm text-squazzle-text-deep-grey2-color top-0 right-0 left-0 bottom-0 px-5 z-20">
          <button type="button" onClick={() => setModalIsOpen(false)}>
            <div className="flex justify-end mt-6">
              <CloseModalIcon />
            </div>
          </button>
          <li className="mt-6">
            <button type="button">About us</button>
          </li>
          <li>
            <button type="button">FAQ</button>
          </li>
          <li className="">
            <button
              type="button"
              className="text-white bg-[#002C2D] text-base font-normal py-[6px] px-[17px] rounded-[6px]"
              onClick={() => navigate(NonAuthRoutes.login)}
            >
              Sign in
            </button>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
