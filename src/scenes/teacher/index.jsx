import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProfileCard from "./components/ProfileCard";
import { useLocation } from "react-router-dom";
import web from "../../assets/web.png";
import app from "../../assets/app.png";
import dsa from "../../assets/dsa.png";
import js from "../../assets/js.png";
import cloud from "../../assets/cloud.png";
import TeacherLecure from "./components/TeacherLecure";
import TeacherRating from "./components/TeacherRating";



const TeacherProfile = () => {
    const { state } = useLocation();
    const [teacherLectures, setTeacherLectures] = useState([]);

    useEffect(()=>{
        const teacherLectures2 = JSON.parse(localStorage.getItem("teacherLectures")) || [];
        const teacherLecturesData = teacherLectures2.filter((item) => item.teacherId === state.id) || [];
        setTeacherLectures(teacherLecturesData);
    },[state.id])

    return (
        <div className="p-5">
            <Header title={"Profile"} />
            <ProfileCard teacher={state} />
            <TeacherRating teacher={state}/>
            <TeacherLecure teacherLectures={teacherLectures} /> 
        </div>
    );
};

export default TeacherProfile;
