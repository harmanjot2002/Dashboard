import React, { useEffect, useState } from "react";

import web from "../../assets/web.png";
import app from "../../assets/app.png";
import dsa from "../../assets/dsa.png";
import js from "../../assets/js.png";
import cloud from "../../assets/cloud.png";
import LecturesCard from "../dashboard/components/LecturesCard";

const Lectures = () => {
    const [teacherLectures, setTeacherLecures] = useState([]);

    useEffect(() => {
        const teacherLectures =
            JSON.parse(localStorage.getItem("teacherLectures")) || [];
        setTeacherLecures(teacherLectures);
    }, []);

    return (
        <div className="py-20">
            {teacherLectures.length > 0 ? (
                <div className="flex gap-5 justify-center flex-wrap">
                    {teacherLectures.map((lecture) => (
                        <LecturesCard
                            img={web}
                            lecture={lecture.lecture}
                            subject={lecture.subject}
                            trainer={lecture.teacherName}
                            group={lecture.group}
                            key={lecture.id}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center min-h-[50vh]">
                    <h1 className="text-5xl">No lectures available</h1>
                </div>
            )}
        </div>
    );
};

export default Lectures;
