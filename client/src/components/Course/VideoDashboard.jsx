import React, { useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import VideoSidebar from "./VideoSidebar";
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import { AiFillPlayCircle } from "react-icons/ai";

function VideoDashboard() {

    const { courseName, videoId, courseId } = useParams();
    let location = useLocation();
    // console.log("Location", location);
    const lectures = location?.state?.data || [];

    const videoData = lectures?.find(lecture => lecture._id === videoId);
    // console.log("VideoData",videoData);


    return (
        <div className='relative flex min-h-[calc(100vh-3.5rem)] bg-richblack-900'>
            <VideoSidebar lectures={lectures} courseName={courseName} courseId={courseId} videoId={videoId} />

            <div className=' w-full bg-richblack-900 overflow-hidden text-richblack-5'>

                {
                    !videoData ? (<div>
                        No Data Found
                    </div>)
                        : (
                            <Player
                                // ref = {playerRef}
                                aspectRatio="14:6"
                                playsInline
                                // onEnded={() => setVideoEnded(true)}
                                src={videoData?.videoUrl}
                                controls
                            >


                            </Player>
                        )
                }

                <div className="p-4">
                    <p className="text-lg font-semibold">
                        {videoData?.title}
                    </p>
                    <p className="text-sm text-richblack-50">
                        {videoData?.description}
                    </p>
                </div>

            </div>
        </div>
    )
}
export default VideoDashboard;