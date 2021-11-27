import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Review = () => {

    const [state,setState] = useState("");
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, userInfo, error } = userLogin;

    async function handleClick(){
        await axios.post('/api/restraunts/update/619f68361d46631ba27b82ca',{userid:userInfo._id,review:state});
        console.log(userInfo);
        console.log(state);
        setState("");
    }

    return(
        <div class="grid grid-cols-9 gap-4 m-4" >
            <div class="sm:grid-cols-0 col-start-1 col-end-3"></div>

            <div class="col-start-3 col-end-7 ">
                <form>
                    <div class="md:flex md:items-center mb-6">
                        {/* <div class="md:w-1/3"> */}
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Description
                        </label>
                        {/* </div> */}
                        {/* <div class="md:w-2/3"> */}
                            <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 ml-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" onInput={(e) => setState(e.target.value)} rows="9" />
                        {/* </div> */}
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                        <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-20" type="button" onClick={handleClick} >
                            Submit
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        
            <div class="sm:grid-cols-0 col-start-7 col-end-10"></div>
        </div>
    );
}


export default Review;