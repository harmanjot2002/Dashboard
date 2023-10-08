import { Avatar, Typography } from "@mui/material";
import React from "react";
import web from "../../../assets/web.png"


const ProfileCard = () => {
    return (
        <div className="h-96 p-5 flex justify-between items-center gap-10 w-full bg-red-200">
            <div className="flex flex-1 gap-10">
                <div>
                    <Avatar sx={{ height: 200, width: 200 }}>YOO</Avatar>
                </div>
                <div>
                    <div className="flex gap-2">
                        <Typography variant="h3">Name : </Typography>
                        <Typography variant="h3">Harsh</Typography>
                    </div>
                    <div className="flex gap-2">
                        <Typography variant="h3">Age : </Typography>
                        <Typography variant="h3">20</Typography>
                    </div>
                    <div className="flex gap-2">
                        <Typography variant="h3">Groups : </Typography>
                        <Typography variant="h3">G23,G22</Typography>
                    </div>
                    <div className="flex gap-2">
                        <Typography variant="h3">Subject : </Typography>
                        <Typography variant="h3">Web Development</Typography>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img className="h-80 w-80 " src={web} alt="web" />
            </div>
        </div>
    );
};

export default ProfileCard;
