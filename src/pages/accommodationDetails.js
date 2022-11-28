import React from "react";
import { ReactComponent as RadioButtonCheckedIcon } from "../assets/svg/radio_button_checked_icon.svg";
import { ReactComponent as MoneyIcon } from "../assets/svg/money_icon.svg";
import { ReactComponent as LocationIcon } from "../assets/svg/location_pin_icon.svg";
import { ReactComponent as AccommodationRuleIcon } from "../assets/svg/accomodationrule_icon.svg";
import { ReactComponent as DateRangeIcon } from "../assets/svg/date_range_icon.svg";
import { ReactComponent as HouseIcon } from "../assets/svg/house_icon.svg";
import AccommodationImage from "../assets/img/accommodation-image.png";

const accommodationDetails = () => {
  return (
    <>
      <div className="hidden md:flex md:justify-center md:items-center h-screen">
        <h1 className="text-4xl">
          Desktop Screen is Underworks, Please toggle to Mobileview!!! Sankiu.
        </h1>
      </div>
      {/* Mobile Screen */}
      <div className="md:hidden font-sans">
        <div className="h-full ">
          <div className="flex flex-col px-5">
            <div className="flex flex-col gap-y-3 ">
              <div className="accommodation_content flex flex-col gap-y-3 overflow-x-scroll ">
                <div className="h-8 flex flex-row gap-x-3 text-xs font-semibold w-[573px] mb-4 ">
                  <div className="m-w-[97px] py-2 px-[10px] bg-[#F5F5F5] flex space-x-[9.33px] ">
                    <RadioButtonCheckedIcon className="self-center" />
                    <span>Available</span>
                  </div>
                  <div className="flex py-2 px-[10px] bg-[#F5F5F5] m-w-[169px] space-x-[9.33px]">
                    <MoneyIcon className="self-center" />
                    <span>NGN 65,000 per night</span>
                  </div>
                  <div className="flex py-2 px-[10px] bg-[#F5F5F5] m-w-[94px] space-x-[9.33px]">
                    <LocationIcon className="self-center" />
                    <span>Location</span>
                  </div>
                  <div className="flex py-2 px-[10px] bg-[#F5F5F5] m-w-[177px] space-x-[9.33px] ">
                    <AccommodationRuleIcon className="self-center" />
                    <span>Accomodation rules</span>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="mb-4"
              src={AccommodationImage}
              alt="accommodation__image"
            />
            <div
              className="flex flex-col gap-y-3 px-3 py-3 max-h-[609px] rounded-[10px] shadow-[#001A1B] mb-8"
              style={{ boxShadow: "0px 2px rgba(0, 26, 27, 0.1)" }}
            >
              <div className="px-3 py-3 flex flex-col gap-y-4 hover:bg-[#CCE6E7]">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px]">
                  Location
                </span>
                <hr className="border-[1px] border-solid border-[#D7D7D7] hover:border-[#F5F5F5]" />
                <span className="text-[#232323] text-[14px] leading-[22px] font-normal">
                  Federal Housing Estate, Number 49 East-End, Jos, Plateau
                  State, Nigeria.
                </span>
              </div>
              <div className="px-3 py-3 flex flex-col gap-y-4 hover:bg-[#CCE6E7] ">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px]">
                  Reason for listing this accommodation
                </span>
                <hr className="border-[1px] border-solid border-[#D7D7D7] hover:border-[#F5F5F5]" />
                <span className="text-[#232323] text-[14px] leading-[22px] font-normal">
                  To offer guests an interesting and enriching experience that
                  makes a holiday memorable for all the right reasons.
                </span>
              </div>
              <div className="px-3 py-3 flex flex-col gap-y-4 hover:bg-[#CCE6E7]">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px]">
                  Hosting duration
                </span>
                <hr className="border-[1px] border-solid border-[#D7D7D7] hover:border-[#F5F5F5]" />
                <span className="text-[#232323] text-[16px] leading-[24px] font-normal flex gap-x-[11px]">
                  <DateRangeIcon /> <span>Fri 18 Nov - Fri 16 Dec</span>
                </span>
              </div>
              <div className="px-3 py-3 flex flex-col gap-y-4 hover:bg-[#CCE6E7]">
                <span className="font-semibold text-[18px] text-[#232323] leading-[26px]">
                  Accommodation type
                </span>
                <hr className="border-[1px] border-solid border-[#D7D7D7] hover:border-[#F5F5F5]" />
                <span className="text-[#232323] text-[16px] leading-[24px] font-normal flex gap-x-[11px]">
                  <HouseIcon /> <span>Apartment</span>
                </span>
              </div>
            </div>
            <p className="text-[#232323] font-semibold text-[36px] mb-8">
              Primrose View
            </p>
            <div className="flex flex-col gap-y-4 mb-8">
              <p className="text-[24px] leading-[30px] font-normal text-[rgb(35,35,35)]">
                About this apartment
              </p>
              <p className="font-normal text-[14px] leading-[22px] h-[220px]">
                From the outside this house looks nice and traditional. It has
                windows that let in plenty of light. The house is equipped with
                a small kitchen and two bathrooms, it also has a cozy living
                room, two bedrooms, a roomy dining area, a playroom and a cozy
                garage.The building is fairly rounded in shape.The roof is low
                and v-shaped and is covered with grey ceramic tiles. The house
                itself is surrounded by a tranquil garden, with beautiful
                primrose flowers and various rock formations...
              </p>
              <p className="text-[16px] leading-[24px] text-[#8D173A]">
                Read more
              </p>
            </div>
            <hr className="border-[1px] border-solid border-[#D7D7D7] mb-8" />
            <div className="mb-[64px] flex flex-col gap-y-4">
              <span className="font-normal text-[24px] text-[#222222]">
                Accommodation rules
              </span>
              <div className="px-6 py-6 flex flex-col gap-y-6 bg-[#F5F5F5]">
                <div className="bg-[#FFFFFF] py-3 px-4 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[16px] ">
                    Damage to property
                  </span>
                  <span className="text-[14px] ">
                    Guests will be held responsible for any loss or damage to
                    the property caused by negligence either by themselves,
                    their guests or any person for whom they are responsible
                    for.
                  </span>
                </div>
                <div className="bg-[#FFFFFF] py-3 px-4 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[16px] ">Check-in</span>
                  <span className="text-[14px] ">
                    Check-in time is from 12:00 - 22:00
                  </span>
                </div>
                <div className="bg-[#FFFFFF] py-3 px-4 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[16px] ">Departure</span>
                  <span className="text-[14px] ">
                    Check-out time is from 12:00 - 13:00
                  </span>
                </div>
                <div className="bg-[#FFFFFF] py-3 px-4 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[16px] ">Pets</span>
                  <span className="text-[14px] ">
                    Pets are not allowed here. Special arrangements could be
                    made upon request.
                  </span>
                </div>
                <div className="bg-[#FFFFFF] py-3 px-4 flex flex-col gap-y-4 text-[#232323]">
                  <span className="font-semibold text-[16px] ">
                    Settlement of bills
                  </span>
                  <span className="text-[14px] ">
                    Bills can be paid through bank transfers or cash. Checks are
                    not allowed.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default accommodationDetails;