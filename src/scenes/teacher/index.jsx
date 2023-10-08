import React from "react";
import Header from "../../components/Header";
import ProfileCard from "./components/ProfileCard";

const TeacherProfile = () => {
    return (
        <div className="p-5">
            <Header title={"Profile"} />
            <ProfileCard/>
        </div>
    );
};

export default TeacherProfile;
