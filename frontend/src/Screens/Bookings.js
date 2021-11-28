import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import SideBar from "./SideBar";

function Bookings() {
  const [people, setPeople] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    getName();
  }, []);
  const getName = async () => {
    const data = await axios.get(`/api/users/${userInfo._id}`);
    const curr = data.data.restaurants;
    for (let i = 0; i < curr.length; i++) {
      const temp = await axios.get(`/api/restraunts/${curr[i]}`);
      // console.log(temp.data.data.restraunt.name,"name");
      // people.push({
      //   restaurantName: temp.data.data.name,
      //   address: temp.data.data.location,
      //   dateBooked: 1
      // })
      setPeople((prev) => [
        ...prev,
        {
          restaurantName: temp.data.data.name,
          address: temp.data.data.location,
          dateBooked: 1,
        },
      ]);
      console.log(people, "people");
    }
  };

  if (people.length <= 1) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <img height="200" src="loading.gif" alt="some" />
      </div>
    );
  } else {
    return (
      <div className="flex flex-wrap">
        <div className="h-screen w-52">
          {" "}
          <SideBar />
        </div>

        <div className="container bg-gray-700 py-20 h-64 md:w-4/5 w-11/12 px-6">
          <h1 className="text-white font-bold text-3xl inline-block">
            YOUR BOOKINGS
          </h1>
          <span className="text-3xl m-2">🎉</span>
          <div className="flex flex-col">
            <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          active/in-active
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Tables Booked
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {people.map((person) => (
                        <tr key={person.ownerName}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-0">
                                <div className="text-sm font-medium text-gray-900">
                                  {person.restaurantName}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 items-center">
                              {person.address}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {person.dateBooked}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookings;
