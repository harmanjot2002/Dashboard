import { Box, useTheme, Button } from "@mui/material";
import Header from "../../components/Header";
import CourseCard from "./components/CourseCard";
import LecturesCard from "./components/LecturesCard";
import TeacherCard from "./components/TeacherCard";
import Delete from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import web from "../../assets/web.png";
import app from "../../assets/app.png";
import dsa from "../../assets/dsa.png";
import js from "../../assets/js.png";
import cloud from "../../assets/cloud.png";
import { tokens } from "../../theme";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteModal from "../../components/DeleteModal";

const courses = [
    {
        img: web,
        title: "Web Development",
        id: 1,
    },
    {
        img: app,
        title: "App Development",
        id: 2,
    },
    {
        img: dsa,
        title: "DSA",
        id: 3,
    },
    {
        img: js,
        title: "Javascript",
        id: 4,
    },
    {
        img: cloud,
        title: "Cloud Computing",
        id: 5,
    },
];

const Dashboard = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const token = localStorage.getItem("token");
    const [isDelOpen, setIsDelOpen] = useState(false);
    const [delId, setDelId] = useState(null);
    const handleClose = () => {
        setIsDelOpen(false);
        setRefresh((prevValue) => !prevValue);
    };
    const [refresh, setRefresh] = useState(false);
    const handleOpen = (e) => {
        setIsDelOpen(true);
        setDelId(e.id);
    };
    const [teacher, setTeacher] = useState([]);
    const [teacherLectures, setTeacherLectures] = useState([]);
    useEffect(() => {
        const mockData = JSON.parse(localStorage.getItem("team"));
        const mockLectures = JSON.parse(
            localStorage.getItem("teacherLectures")
        );
        console.log("mock Data", mockData);
        setTeacher(mockData.reverse().splice(0, 5));
        setTeacherLectures(mockLectures.reverse().splice(0, 5));
    }, [refresh]);

    if (!token) {
        return <Navigate to={"/login"} />;
    }
    return (
        <Box m="20px" className="flex flex-col gap-5">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Header
                    title="DASHBOARD"
                    subtitle="Welcome to your dashboard"
                />
                <Button type="submit" color="secondary" variant="contained">
                    <Link to={"/createuser"}>Add New Teacher</Link>
                </Button>
            </Box>
            <Box display="flex" flexDirection={"column"}>
                <div className="flex justify-between items-center">
                    <Header title="Teachers" />
                    <Button type="submit" color="secondary" variant="contained">
                        <Link to={"/team"}>View All</Link>
                    </Button>
                </div>
                <div className="flex gap-5 justify-center flex-wrap">
                    {teacher.map((teacher) => (
                        <TeacherCard
                            icon={
                                <Box
                                    display="flex"
                                    gap="1.2rem"
                                    justifyContent="space-around"
                                    className="z-10"
                                >
                                    <Delete
                                        onClick={() => {
                                            handleOpen(teacher);
                                        }}
                                        style={{ color: colors.redAccent[600] }}
                                    />
                                    <ModeIcon
                                        onClick={() => {
                                            navigate(
                                                "/update/teacher/" + teacher.id,
                                                { state: teacher }
                                            );
                                        }}
                                        style={{
                                            color: colors.greenAccent[700],
                                        }}
                                    />
                                </Box>
                            }
                            img={teacher.img}
                            subject={teacher.subject}
                            trainer={teacher.name}
                            group={teacher.group}
                            key={teacher.id}
                            lecture={teacher.lecture}
                            all={teacher}
                        />
                    ))}
                </div>
            </Box>
            <Box display="flex" flexDirection={"column"}>
                <Header title="Courses Offered" />
                <div className="flex gap-5 justify-center flex-wrap">
                    {courses.map((course) => (
                        <CourseCard
                            img={course.img}
                            title={course.title}
                            key={course.id}
                        />
                    ))}
                </div>
            </Box>
            <Box display="flex" flexDirection={"column"}>
                <div className="flex justify-between items-center">
                    <Header title="Lectures" />
                    <Button type="submit" color="secondary" variant="contained">
                        <Link to={"/lectures"}>View all</Link>
                    </Button>
                </div>
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
            </Box>
            <DeleteModal
                delId={delId}
                open={isDelOpen}
                handleClose={handleClose}
            />
        </Box>
    );
};
export default Dashboard;
