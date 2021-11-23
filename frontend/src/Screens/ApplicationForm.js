import React, {useRef} from "react";
import { Link } from "react-router-dom";

const ApplicationFrom = () => {
    let form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form_data = new FormData(form.current);
        let payload = {};
        form_data.forEach(function (value, key) {
            payload[key] = value;
        });
        
    };
    return (
        <form id="login" onSubmit={handleSubmit}>
            <div className="dark:bg-gray-800 pb-3 bg-gray-700" >
                <div className="container pt-4 my-auto mx-auto dark:bg-gray-800 rounded">
                    <div className="container mx-auto bg-white dark:bg-gray-800 rounded px-4">
                        <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 dark:bg-gray-800">
                            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                                <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Booking Shooking Application Form</p>
                            </div>
                        </div>
                        <div className="xl:w-full border-gray-300 dark:border-gray-700 py-5">
                            <div className="rounded relative h-56">
                                <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form1.jpg" alt className="w-full h-full object-cover rounded absolute shadow" />
                                <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded" />
                                <div className="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                                    <p className="text-xs text-gray-100">Change Cover Photo</p>
                                    <div className="ml-2 text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                            <line x1={16} y1={5} x2={19} y2={8} />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                                    <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg" alt className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0" />
                                    <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                                    <div className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                            <line x1={16} y1={5} x2={19} y2={8} />
                                        </svg>
                                        <p className="text-xs text-gray-100">Edit Picture</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container mx-auto flex flex-row">
                                <div className="mt-16 xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pr-4">
                                    <label htmlFor="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                        Restaurant Name
                                    </label>
                                    <input type="text" id="Rname" name="rname" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                </div>
                                <div className="mt-16 xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pl-4">
                                    <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                        Street Address
                                    </label>
                                    <input type="text" id="SAddress" name="sAddress" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                </div>
                                <div className="mt-16 xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pl-4">
                                    <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                        Latitude
                                    </label>
                                    <input type="text" id="SAddress" name="sAddress" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                </div>
                                <div className="mt-16 xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pl-4">
                                    <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                        Longitude
                                    </label>
                                    <input type="text" id="SAddress" name="sAddress" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                </div>
                            </div>
                            <div className="mt-5 flex flex-col w-full">
                                <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Description
                                </label>
                                <textarea id="about" name="about" required className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Let the world know who you are" rows={5} defaultValue={""} />
                                <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">Character Limit: 200</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-auto mx-auto bg-white dark:bg-gray-800 mt-3 rounded px-4">
                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Owner's Information</p>
                        </div>
                    </div>
                    <div className="mx-auto pt-4">
                        <div className="container mx-auto flex flex-row">
                            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pr-4">
                                <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    First Name
                                </label>
                                <input type="text" id="FirstName" name="firstName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                            </div>
                            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pl-4">
                                <label htmlFor="LastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Last Name
                                </label>
                                <input type="text" id="LastName" name="lastName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                            </div>
                        </div>
                        <div className="container mx-auto flex flex-row">
                            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pr-4">
                                <label htmlFor="Email" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Email
                                </label>
                                <div className="border border-gray-300 shadow-sm rounded flex">
                                    <div className="px-4 py-3 dark:text-gray-100 flex items-center border-r border-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <rect x={3} y={5} width={18} height={14} rx={2} />
                                            <polyline points="3 7 12 13 21 7" />
                                        </svg>
                                    </div>
                                    <input type="text" id="Email" name="email" required className="pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="example@gmail.com" />
                                </div>
                            </div>
                            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pl-4">
                                <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Street Address
                                </label>
                                <input type="text" id="StreetAddress" name="streetAddress" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                            </div>
                        </div>
                        <div className="container mx-auto flex flex-row">
                            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pr-4">
                                <label htmlFor="City" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    City
                                </label>
                                <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex">
                                    <input type="text" id="City" name="city" required className="pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Los Angeles" />
                                </div>
                            </div>
                            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pl-4">
                                <label htmlFor="State/Province" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    State/Province
                                </label>
                                <input type="text" id="State/Province" name="state" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="California" />
                            </div>
                        </div>
                        <div className="container mx-auto flex flex-row">
                            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pr-4">
                                <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Country
                                </label>
                                <input type="text" id="Country" name="country" required className="border bg-transparent border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="United States" />
                            </div>
                            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pl-4">
                                <div className="flex items-center pb-2">
                                    <label htmlFor="ZIP" className="text-sm font-bold text-gray-800 dark:text-gray-100">
                                        ZIP/Postal Code
                                    </label>
                                </div>
                                <input type="text" name="zip" required id="ZIP" className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder={86745} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto w-11/12 xl:w-full">
                    <div className="rounded w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
                        <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4">Cancel</button>
                        <Link to='/tableselector'>
                        <button className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white mr-4 px-8 py-2 text-sm" type="submit">
                            Next
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default ApplicationFrom;
