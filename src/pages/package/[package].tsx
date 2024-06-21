
import "../../app/globals.css"
import Header from "@/components/Header";
import DepartureSection from "@/components/ItineraryDetail/Departure&Booking/DepartureSection";
import ItineraryPricingCard from "@/components/ItineraryDetail/Departure&Booking/ItineraryPricingCard";
import ItineraryHeroSection from "@/components/ItineraryDetail/ItineraryHeroSection";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import Itinerary from '@/components/ItineraryDetail/Itinerarypackage/Itinerary';
import ItineraryTourDetails from '@/components/ItineraryDetail/Itinerarypackage/ItineraryTourDetails';
import ItineraryPaymentTerms from '@/components/ItineraryDetail/Itinerarypackage/ItineraryPaymentTerms';
import ItinerarySideCard from '@/components/ItineraryDetail/Itinerarypackage/ItinerarySideCard';
import Itinerarymap from '@/components/ItineraryDetail/Itinerarypackage/Itinerarymap';
import ReviewsCard from '@/components/ReviewsCard';
import PrimaryCard from '@/components/primaryCard';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import BottomLink from '@/components/ItineraryDetail/BottomLink';
import CustomiseTour from "@/components/ItineraryDetail/CustomiseTour";
import Breadcrumbs from "@/components/Breadcrumbs";
import Caraousel from "@/components/ItineraryDetail/caraousel";
import Reviews from "@/components/Reviews";
import Addguest from "@/components/addguest";
import TestingCard from "@/components/ItineraryDetail/TestingCard";











const fetchPackage = async (packageUrl) => {
    const response = await fetch(`/api/public/package/${packageUrl}`, { method: 'GET' });
    const data = await response.json();
    return data;
};

export default function TourPackage() {
    const router = useRouter();

    const packageUrl = router.query.package?.replace("-tour-package", "");
    const [selectedPackage, setSelectedPackage] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (packageUrl) {
                    const selectedPackageData = await fetchPackage(packageUrl);
                    setSelectedPackage(selectedPackageData);

                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [packageUrl]);


    function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray", borderRadius: "20px" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray", borderRadius: "20px" }}
                onClick={onClick}
            />
        );
    }

    const settings = {


        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },

        ]
    };





    return (
        <div>
            <div className=" container-wrapper">
                {/* <Reviews /> */}
                <TestingCard/>
            </div>
            <div className="">
                <Header />
            </div>
            {/* <Caraousel /> */}
            <Breadcrumbs />
            <ItineraryHeroSection tourPackage={selectedPackage} />
            {/* departure city */}
            <div className="bg-gray-100 mt-[20px] pb-10">
                <div className="container-wrapper mb-4">
                    <div className="mb-[20px] pt-[40px]">
                        <h1 className="text-lg font-medium text-graytext">Select departure city, dates & add guest to book your tour</h1>
                        <p className="italic  text-sm">As seats fill, prices increase! So book today!</p>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-[2fr,1fr] gap-x-3 ">
                        {/*Select departure city */}
                        <div>
                            <DepartureSection tourAboutHighlight={selectedPackage} />
                        </div>
                        {/* Pricing */}
                        <div className="">
                            <ItineraryPricingCard pricingPackage={selectedPackage} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Departure city End */}
            <div className="">
                <div id="ItinerarySection" className="bg-white py-1 shadow-md sticky top-0 z-40">
                    <div className="container-wrapper gap-3  md:gap-12 xs:pb-5 md:pb-0  flex justity-start overflow-x-auto ">
                        <div>
                            <ScrollLink
                                to="ItinerarySubSection"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <p className=" text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">Itinerary</p>
                            </ScrollLink>
                        </div>
                        <div>
                            <ScrollLink
                                to="TourDetailsSection"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">Tour Details</p>
                            </ScrollLink>
                        </div>
                        <div>
                            <ScrollLink
                                to="TourInformationSection"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">Inclusion</p>
                            </ScrollLink>
                        </div>
                        <div>
                            <ScrollLink
                                to="NeedToKnowSection"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">Exclusion</p>
                            </ScrollLink>
                        </div>
                        <div>
                            <ScrollLink
                                to="Policy&TermsSection"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800"> Policy</p>
                            </ScrollLink>
                        </div>
                        <div>
                            <ScrollLink
                                to="UpgradesSection"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2  border-amber-600 py-2 hover:text-orange-800">Need to Know</p>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
                <div className="container-wrapper  grid grid-cols-1 xl:grid-cols-[2fr,1fr]">
                    <div>
                        <div id='ItinerarySubSection' className="flex  justify-between my-5">
                            <p className="text-lg font-semibold text-graytext">Itinerary <span
                                className="text-[13px] italic text-slate-600 ">(Day Wise)</span></p>
                        </div>
                        <div>
                            <p className='text-para leading-relaxed' >{selectedPackage?.dayWiseInformation}</p>
                        </div>
                        {/* <Itinerary/>    */}
                        <Itinerary faqData={selectedPackage} />
                        {/* Itinerary map */}
                        <Itinerarymap />
                        {/* <!- TOUR DETAILS IS HERE --> */}
                        <ItineraryTourDetails />
                        {/* Privacy policy Terms */}
                        <div id='Policy&TermsSection' className='pt-12'>
                            <ItineraryPaymentTerms />
                        </div>
                    </div>
                    <div className="hidden xl:block mt-10">
                        <div className='sticky top-[220px] z-20'>
                            <div className="flex gap-1 items-center  justify-end ">
                                <div className="items-center flex flex-col p-2 text-center">
                                    <img className="w-4" src="https://www.svgrepo.com/show/475692/whatsapp-color.svg" alt="" />
                                    <p className="text-[12px]">Send Itinerary</p>
                                </div>
                                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                                    <img className="w-4" src="https://www.svgrepo.com/show/522439/printer.svg" alt="" />
                                    <p className="text-[12px]">Print Itinerary</p>
                                </div>
                                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                                    <img className="w-4" src="https://www.svgrepo.com/show/522399/envelope-closed.svg" alt="" />
                                    <p className="text-[12px]">Email Itinerary</p>
                                </div>
                            </div>
                            {/* card is here */}
                            <ItinerarySideCard />
                        </div>
                    </div>
                </div>
            </div>
            {/* review card */}
            <ReviewsCard />
            <div className='container-wrapper pt-10'>
                <div>
                    <h2 className='text-2xl'>Similar Tour Packages</h2>
                    <h2 className='text-md italic'>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                </div>
            </div>
            <div className=" container-wrapper p-6 ">
                
                <Slider {...settings}>
                    <div className='px-1'>
                        <PrimaryCard />
                    </div>
                    <div className='px-1'>
                        <PrimaryCard />
                    </div>
                    <div className='px-1'>
                        <PrimaryCard />
                    </div>
                </Slider>
            </div>
            {/* bottom link */}
            <BottomLink />
            <div className="z-[999]  sticky bottom-0 bg-white border-t-2 border-primary">
                <div className=" container-wrapper grid grid-cols-[1fr,2fr]">
                    <div className="flex items-center">
                        <p className=" text-xl font-semibold">Lucknow Tour Package</p>
                        <div>
                            <span></span>
                        </div>

                    </div>
                    <div className=" flex gap-1 justify-end">
                        <div className="text-right flex flex-col items-end justify-center ">
                            <p className="text-base leading-5 text-green-600 font-semibold uppercase">best deal price</p>
                            {/* <div className='flex gap-1 items-end'> */}
                                {/* <p className='text-sm line-through'>₹20,000</p> */}
                                {/* <button className='uppercase text-xxs text-white bg-navyblack px-1 py-1 rounded-sm text-center'>37% Off</button> */}
                            {/* </div> */}
                            <p className="text-sm leading-5">Starts From <span className="text-lg text-graytext font-medium">₹
                                5454</span>
                            </p>
                            <p className="text-xxs leading-5">per person on twin sharing</p>

                        </div>
                        <div className="flex flex-col align-middle my-auto pl-2 gap-2 py-2">
                            <Addguest >
                                <p className="cursor-pointer bg-primary px-5 py-1 rounded-md text-white text-center text-para"><span>Book Now</span></p>
                            </Addguest>
                            <CustomiseTour>
                                <p className="border px-5 py-1 rounded-md text-center text-para"><span>Customise</span></p>
                            </CustomiseTour>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
