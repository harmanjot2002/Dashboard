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
    useEffect(() => {
        const mockData = JSON.parse(localStorage.getItem("team"));
        console.log("mock Data", mockData);
        setTeacher(mockData.reverse().splice(0, 5));
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
                                        onClick={()=>{navigate("/update/teacher/"+teacher.id,{state:teacher})}}
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
