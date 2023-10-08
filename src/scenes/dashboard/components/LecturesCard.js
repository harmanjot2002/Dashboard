import { Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../../theme";
import './CardsStyles.css'


const LecturesCard = ({ img,id,title,trainer,group }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <div className="w-80 flex flex-col p-5 mt-1 gap-5 justify-center items-center bg-slate-400 min-h-28 rounded-lg hover-effect">
            <img className="w-20" src={img} alt="dev" />
            {/* <div className="flex-col justify-center hover-effect"> */}
                <Typography variant="h5" color={colors.redAccent[800]}>
                    {`Lecture: ${id}`}
                </Typography>
                <Typography variant="h5" color={colors.redAccent[800]}>
                    {`Subject: ${title}`}
                </Typography> 
                <Typography variant="h5" color={colors.redAccent[800]}>
                    {`Trainer: ${trainer}`}
                </Typography> 
                <Typography variant="h5" color={colors.redAccent[800]}>
                    {`Group: ${group}`}
                </Typography> 
            {/* </div> */}
        </div>
    );
};

export default LecturesCard;
