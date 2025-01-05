import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TiStarOutline } from "react-icons/ti"
import Error from "../../pages/Error";
import { AiFillStar } from "react-icons/ai";

function AvgRating(props) {
    const courseId = props.courseId;
    const [rating, setRating] = useState(0);

    async function ratingFetch() {

        try {

            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/course/getAverageRating`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ courseId: courseId }),
                    credentials: "include"
                }
            );

            if (!Response.ok) {
                toast.error("Failed to load rating");

                return <Error />

            }
            const res = await Response.json();
            setRating(res.data)
            // console.log(rating);

        } catch (error) {
            console.error("Error",error);
        }
    }

    useEffect(function () {
        ratingFetch();
    }, []);

    return (
        <div>
            <div className="flex">
                {rating === 0 && <div className="flex items-center"><TiStarOutline ></TiStarOutline> <TiStarOutline ></TiStarOutline>
                    <TiStarOutline ></TiStarOutline> <TiStarOutline ></TiStarOutline> <TiStarOutline ></TiStarOutline><span className="text-yellow-100 text-sm px-1">{rating}</span>
                </div>}
            </div>
            <div className="flex">
                {rating === 1 && <div className="flex items-center"><AiFillStar className="text-yellow-100" /> <TiStarOutline />
                    <TiStarOutline /><TiStarOutline /> <TiStarOutline /><TiStarOutline /> <span className="text-yellow-100 text-sm px-1">{rating}</span>
                </div>}
            </div>
            <div className="flex">
                {rating === 2 && <div className="flex items-center"><AiFillStar className="text-yellow-100" /> <AiFillStar className="text-yellow-100" />
                    <TiStarOutline /><TiStarOutline /> <TiStarOutline /><span className="text-yellow-100 text-sm px-1">{rating}</span>
                </div>}
            </div>
            <div className="flex">
                {rating === 3 && <div className="flex items-center"><AiFillStar className="text-yellow-100" /> <AiFillStar className="text-yellow-100" /> <AiFillStar className="text-yellow-100" />
                    <TiStarOutline /><TiStarOutline /> <TiStarOutline /> <span className="text-yellow-100 text-sm px-1">{rating}</span>
                </div>}
            </div>
            <div className="flex">
                {rating === 4 && <div className="flex items-center"><AiFillStar className="text-yellow-100" /> <AiFillStar className="text-yellow-100" /> <AiFillStar className="text-yellow-100" /> <AiFillStar className="text-yellow-100" />
                    <TiStarOutline /><TiStarOutline /> <span className="text-yellow-100 text-sm px-1">{rating}</span>
                </div>}
            </div>
            <div className="flex">
                {rating === 5 && <div className="flex items-center text-yellow-100"><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                    <span className="text-yellow-100 text-sm px-1">{rating}</span> </div>}
            </div>
        </div>
    )
}
export default AvgRating;