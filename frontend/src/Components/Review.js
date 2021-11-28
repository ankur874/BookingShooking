import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Review = (props) => {
  const [state, setState] = useState("");
  const [title, setTitle] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;
  // console.log(props)
  async function handleClick() {
    // await axios.post('/api/' + {props[type]} + '/update/' + {props[id]}',{userid:userInfo._id,review:state});
    const data = await axios.post(`/api/restraunts/update/${props.id}`, {
      userid: userInfo._id,
      title: title,
      review: state,
    });
    console.log(data);
    setState("");
  }

  return (
    <div class="grid grid-cols-9 gap-4 m-4">
      <div class="sm:grid-cols-0 col-start-1 col-end-3"></div>

      <div class="col-start-3 col-end-7 ">
        <form>
          <div class="md:flex md:items-center mb-6">
            <div>
              <label for="input1" class="text-sm text-gray-800 block mb-1 font-medium">
                Title
              </label>
              <textarea

                rows="1"
                cols="50"
                type="password"
                name="input1"
                id="input1"
                value={title}
                class="bg-gray-100 rounded border border-gray-200 py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Enter Title"
                onInput={(e) => setTitle(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div>
              <label for="input1" class="text-sm text-gray-800 block mb-1 font-medium">
                Review
              </label>
              <textarea
                onInput={(e) => setState(e.target.value)}
                rows="4"
                cols="50"
                type="password"
                name="input1"
                id="input1"
                value={state}
                class="bg-gray-100 rounded border border-gray-200 py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Enter Description"
              ></textarea>
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button
                class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-20"
                type="button"
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="sm:grid-cols-0 col-start-7 col-end-10"></div>
    </div>
  );
};

export default Review;
