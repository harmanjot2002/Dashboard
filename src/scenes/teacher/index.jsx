import React from "react";
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

const lectures = [
    {
        img: web,
        title: "Web Development",
        id: 1,
        trainer: "Raj Shankar",
        group: "G-12",
    },
    {
        img: app,
        title: "App Development",
        id: 2,
        trainer: "John Mark",
        group: "G-13",
    },
    {
        img: dsa,
        title: "DSA",
        id: 3,
        trainer: "Amit Kumar",
        group: "G-17",
    },
    {
        img: js,
        title: "Javascript",
        id: 4,
        trainer: "Reshab Kumar",
        group: "G-23",
    },
    {
        img: cloud,
        title: "Cloud Computing",
        id: 5,
        trainer: "Anupinder Singh",
        group: "G-03",
    },
];

const TeacherProfile = () => {
    const { state } = useLocation();
    return (
        <div className="p-5">
            <Header title={"Profile"} />
            <ProfileCard teacher={state} />
            <TeacherRating />
            <TeacherLecure lectures={lectures} /> 
        </div>
    );
};

export default TeacherProfile;
