import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProfileCard from "./components/ProfileCard";
import { useLocation, useNavigate } from "react-router-dom";
import web from "../../assets/web.png";
import app from "../../assets/app.png";
import dsa from "../../assets/dsa.png";
import js from "../../assets/js.png";
import cloud from "../../assets/cloud.png";
import TeacherLecure from "./components/TeacherLecure";
import TeacherRating from "./components/TeacherRating";
import { Button } from "@mui/material";

const OnlyTeacherProfile = ({ state }) => {
    const navigate = useNavigate();
    console.log(state);
    const [teacherLectures, setTeacherLectures] = useState([]);
    const token = JSON.parse(localStorage.getItem("token"));
    useEffect(() => {
        const teacherLectures2 =
            JSON.parse(localStorage.getItem("teacherLectures")) || [];
        const teacherLecturesData =
            teacherLectures2.filter((item) => item.teacherId === state.id) ||
            [];
        setTeacherLectures(teacherLecturesData);
    }, [state.id]);

    return (
        <div className="p-5">
            <div className="flex justify-between items-center">
                <Header title={"Profile"} />
                {token?.role === "user" && <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/login");
                    }}
                >
                    Logout
                </Button>}
            </div>
            <ProfileCard teacher={state} />
            <TeacherRating teacher={state} />
            <TeacherLecure teacherLectures={teacherLectures} />
        </div>
    );
};

export default OnlyTeacherProfile;
