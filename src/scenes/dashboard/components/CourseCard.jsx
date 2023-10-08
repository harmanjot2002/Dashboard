import { Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../../theme";

const CourseCard = ({ img,title }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <div className="w-80 flex flex-col p-5 gap-5 justify-center items-center bg-slate-400 min-h-28 rounded-lg">
            <img className="w-20" src={img} alt="dev" />
            <Typography variant="h5" color={colors.redAccent[800]}>
                {title}
            </Typography>
        </div>
    );
};

export default CourseCard;
