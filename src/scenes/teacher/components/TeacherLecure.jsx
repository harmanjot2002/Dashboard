import React from "react";
import Header from "../../../components/Header";
import LecturesCard from "../../dashboard/components/LecturesCard";

const TeacherLecure = ({lectures}) => {
    return (
        <div>
            <div className="py-20">
                <Header title="Lectures" />
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
        </div>
    );
};

export default TeacherLecure;
