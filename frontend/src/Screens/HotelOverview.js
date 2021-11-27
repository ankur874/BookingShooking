import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listHotels } from "../actions/hotelActions";
import { listRestaurants } from "../actions/restaurantActions";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import Review from "../components/Review";
import ProductReviewCard from "../components/ProductReview";
import { useParams } from "react-router";

const HotelOverview = () => {
    const handleToken = async (token, addresses) => {
        const response = await axios.post(
            "/checkout",
            { token }
        );

        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }
  
    const dispatch = useDispatch();
    const data1 = useSelector((state) => state.restaurantList);
  
    const { hotels, loading } = data;
    console.log(hotels);
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo, error } = userLogin;
    console.log(userInfo, "vdfvdfv");
    useEffect(() => {
      dispatch(listHotels());
      dispatch(listRestaurants());
    }, [dispatch]);

    // windows.location.href
    // find a hotel from the hotels array and match it using id (windows.location.href);
    // extract all its reviews here
    const {id}=useParams();
    
    return (
        <>

            <div className="flex flex-row justify-between ml-5 mt-2 mb-2">
                <div>
                    <h1
                        className="
                            lg:text-4xl
                            text-2xl
                            font-semibold
                            lg:leading-6
                            leading-7
                            text-gray-800
                            mt-6
                            pl-6
                        "
                    >
                        Balenciaga Signature Sweatshirt
                    </h1>
                    <p className="mx-6 mt-6 color-gray-200">Address eghfvvhvvbhurvbubvfbqhjevbjhbhrvjbhrb</p>
                </div>
                <div className="mr-20 mt-5 px-5 py-3 border border-green-600 rounded">
                    <p className=" fa fa-star text-4xl bg-green">&nbsp;4.0</p>
                </div>
            </div>
            <div className="md:flex items-star py-3 2xl:px-20 md:px-6 px-2">
                <div className="relative xl:w-1/2 lg:w-1/2 flex-row ml-5 w-80 flex flex-row md:block hidden">

                    <img className="w-full rounded" alt="img of a girl posing" src="https://pix8.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768" />
                    <img className="mt-2 w-full rounded" alt="img of a girl posing" src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/images/offers/offer-primary-desktop/all-in-getaway.jpg" />
                </div>
                <div className="xl:w-3/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="mt-4 pb-2">
                        <h1
                            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-1
						"
                        >
                            Description
                        </h1>
                    </div>
                    <div>
                        <p className="xl:pr-20 text-base leading-normal mt-4 text-gray-600 mt-3" style={{ alignSelf: 'flex-end' }}>Depth 5.1 inches dcbKBCBHBJV BLBwbvbvkv bwhbqhjfqhfl hbqfhbfhrfbhr hfbhwbfwhfblf hwbfjlbwbfhbwfbf lbve ejrqbrb erblqrjbkqber brqejkbjkre jrebgrjkegbjk jbregbjkbejrkkrgk ljrgkgerlbjerg jrgberjgergb grgbjerlbjreg lhfwbhjfjhbfhwefb whbfbhrfbhbfhbw hwrlbfhbrhfblrhfb hfbwhefelfwbeb hrwbhrehhrbwhfbheb bhjqwkbefjjf hjwfqblhbfb lweqfhbfh lhwqbfhbfhbwqhf hfqhbbfhhwebfhb whbhwbefhbwf hwbfhwbfbwlfbwebf wbfkwbfwbfbfwfb whbfhbwfhwfhf hfhbwfhbewhbfheb hwfbhebfhbrhbefwbf fwbewekbfkbe hefwbhfebwbfewb fhewbfhewbhfbewhfb</p>
                    </div>
                    <div className="pb-2 mt-12">
                        <h1
                            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-19
						"
                        >
                            Facilities
                        </h1>
                    </div>
                    <div className="flex flex-row justify-between mt-4 p-1">
                        <div className="border border-gray-600 px-6">
                            <i className="p-2 fas fa-tv text-4xl px-11"></i>
                            <p className="ml-2 text-base leading-6 font-normal text-gray-600 lg:w-full md:w-9/12 w-full">TV</p>
                        </div>
                        <div className="border border-gray-600 px-6">
                            <i className="p-2 fas fa-fan text-4xl px-11"></i>
                            <p className="ml-2 text-base leading-6 font-normal text-gray-600 lg:w-full md:w-9/12 w-full">AC</p>
                        </div>
                        <div className="border border-gray-600 px-6 mr-20">
                            <i className="p-2 fas fa-wifi text-4xl px-11"></i>
                            <p className="ml-2 text-base leading-6 font-normal text-gray-600 lg:w-full md:w-9/12 w-full">Free WiFi</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between p-1">
                        <div className="border border-gray-600 px-6">
                            <i className="p-2 fas fa-hot-tub text-4xl px-12"></i>
                            <p className="ml-2 text-base leading-6 font-normal text-gray-600 lg:w-full md:w-9/12 w-full">Geyser</p>
                        </div>

                        <div className="border border-gray-600 px-6 ">
                            <i className="p-2 fas fa-parking text-4xl px-12"></i>
                            <p className="ml-2 text-base leading-6 font-normal text-gray-600 lg:w-full md:w-9/12 w-full">Parking</p>
                        </div>
                        <div className="border border-gray-600 px-6 mr-20">
                            <i className="p-2 fas fa-glass-martini-alt text-4xl px-12"></i>
                            <p className="ml-2 text-base leading-6 font-normal text-gray-600 lg:w-full md:w-9/12 w-full">Kitchen</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between p-1">
                        <div className="border border-gray-600 px-6">
                            <i className="p-2 fas fa-car-battery text-4xl px-12"></i>
                            <p className="ml-2 text-base leading-6 font-normal text-gray-600 lg:w-full md:w-9/12 w-full">Backup</p>
                        </div>
                        <div className="border border-gray-600 px-6">
                            <i className="p-2 fas fa-video text-4xl px-11"></i>
                            <p className="ml-2 text-base leading-6 font-normal text-gray-600 lg:w-full md:w-9/12 w-full">CCTV</p>
                        </div>
                        <div className="border border-gray-600 px-6 mr-20">
                            <i className="p-2 fas fa-credit-card text-4xl px-11"></i>
                            <p className="ml-2 text-base leading-6 font-normal text-gray-600 lg:w-full md:w-9/12 w-full">Card</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <button
                    className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-2/3
						py-4
						hover:bg-gray-700
                        m-4
                        rounded
					"
                >
                    <svg className="mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.66699 4.83333V4.84166" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.333 11.5V11.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Check On Map
                </button>
                <div
                    className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-2/3
						py-4
						hover:bg-gray-700
                        m-4
                        rounded
					"
                >
                   Book Now
                </div>

            </div>

            <Review  />{/* type = "hotel" id = {id} */}

            {/* adding the reviews extracted before */}
            <div class="grid grid-cols-1 md:grid-cols-6 m-10 gap-4">
                <div class="col-span-2"><ProductReviewCard  /></div>
                <div class="col-span-2"><ProductReviewCard /></div>
                <div class="col-span-2"><ProductReviewCard /></div>
            </div>

        </>
    );
};




export default HotelOverview;