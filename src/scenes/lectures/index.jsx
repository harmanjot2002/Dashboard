import React from "react";

import web from "../../assets/web.png";
import app from "../../assets/app.png";
import dsa from "../../assets/dsa.png";
import js from "../../assets/js.png";
import cloud from "../../assets/cloud.png";
import LecturesCard from "../dashboard/components/LecturesCard";

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

const Lectures = () => {
    return (
        <div className="py-20">
            <div className="flex gap-5 justify-center flex-wrap">
                {lectures.map((lecture) => (
                    <LecturesCard
                        img={lecture.img}
                        id={lecture.id}
                        title={lecture.title}
                        trainer={lecture.trainer}
                        group={lecture.group}
                        key={lecture.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Lectures;
