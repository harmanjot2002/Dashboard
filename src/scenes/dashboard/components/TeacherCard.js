import { Avatar, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../../theme";
import "./CardsStyles.css";

const TeacherCard = ({ img, subject, trainer, group, icon }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <div className="w-80 relative flex py-10 gap-5 ps-5 pe-2 mt-1 items-center bg-slate-400 min-h-28 rounded-lg hover-effect">
            <div className="flex justify-center items-center">
                <Avatar sx={{height:60,width:60}}>{trainer.slice(0,1) || "O"}</Avatar>
            </div>
            <div className="flex flex-col col-span-1 ">
                <div className="absolute right-2 top-2 flex justify-end">
                    <div className="mr-0 mb-5">
                        <Typography variant="h5">{icon}</Typography>
                    </div>
                </div>
                <div className="flex flex-col pt-0">
                    <Typography
                        variant="h5"
                        color={colors.blueAccent[900]}
                        style={{ lineHeight: "2" }}
                    >
                        {`Trainer: ${trainer}`}
                    </Typography>
                    <Typography
                        variant="h5"
                        color={colors.blueAccent[900]}
                        style={{ lineHeight: "2" }}
                    >
                        {`Subject: ${subject}`}
                    </Typography>
                    <Typography
                        variant="h5"
                        color={colors.blueAccent[900]}
                        style={{ lineHeight: "2" }}
                    >
                        {`Group: ${group}`}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;
