import { Avatar, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import web from "../../../assets/web.png";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../../components/DeleteModal";

import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Mon",
        pv: 3,
        amt: 2400,
    },
    {
        name: "Tue",
        pv: 4,
        amt: 2210,
    },
    {
        name: "Wed",
        pv: 3.5,
        amt: 2290,
    },
    {
        name: "Thu",
        pv: 4.2,
        amt: 2000,
    },
    {
        name: "Fri",
        pv: 4.5,
        amt: 2181,
    },
    {
        name: "Sat",
        pv: 3.1,
        amt: 2500,
    },
];

const ProfileCard = ({ teacher }) => {
    const navigate = useNavigate();
    const [isDelOpen, setIsDelOpen] = useState(false);
    const [delId, setDelId] = useState(null);
    const handleClose = () => {
        setIsDelOpen(false);
    };
    const handleOpen = (e) => {
        setIsDelOpen(true);
        setDelId(e.id);
    };
    return (
        <div className="h-96 p-5 flex justify-between items-center gap-10 w-full bg-slate-400 rounded-lg hover-effect ">
            <div className="flex flex-1 gap-10">
                <div>
                    <Avatar sx={{ height: 200, width: 200 }}>
                        {teacher.name}
                    </Avatar>
                </div>
                <div>
                    <div className="flex gap-2">
                        <Typography variant="h3">Name : </Typography>
                        <Typography variant="h3">{teacher.name}</Typography>
                    </div>
                    <div className="flex gap-2">
                        <Typography variant="h3">Age : </Typography>
                        <Typography variant="h3">{teacher.age}</Typography>
                    </div>
                    <div className="flex gap-2">
                        <Typography variant="h3">Groups : </Typography>
                        <Typography variant="h3">{teacher.group}</Typography>
                    </div>
                    <div className="flex gap-2">
                        <Typography variant="h3">Subject : </Typography>
                        <Typography variant="h3">{teacher.subject}</Typography>
                    </div>
                    <div className="flex gap-2">
                        <Typography variant="h3">Lecture : </Typography>
                        <Typography variant="h3">{teacher.lecture}</Typography>
                    </div>
                    <div className="flex gap-5 my-5">
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={() => {
                                navigate("/update/teacher/" + teacher.id, {
                                    state: teacher,
                                });
                            }}
                        >
                            Update
                        </Button>
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={() => {
                                handleOpen(teacher);
                            }}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
                <DeleteModal
                    delId={delId}
                    open={isDelOpen}
                    handleClose={handleClose}
                    navigater={true}
                />
            </div>
            <div className="flex-1 flex justify-center items-center">
                {/* <img className="h-80 w-80 " src={web} alt="web" /> */}
                {/* <ResponsiveContainer width="100%" height="100%"> */}
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                    </BarChart>
                {/* </ResponsiveContainer> */}
            </div>
        </div>
    );
};

export default ProfileCard;
