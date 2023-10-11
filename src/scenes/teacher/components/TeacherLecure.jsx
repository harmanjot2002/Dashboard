import React from "react";
import Header from "../../../components/Header";
import LecturesCard from "../../dashboard/components/LecturesCard";
import web from "../../../assets/web.png";

const TeacherLecure = ({teacherLectures}) => {
    return (
        <div>
            <div className="py-20">
                <Header title="Lectures" />
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
        </div>
    );
};

export default TeacherLecure;
