import { Box } from "@mui/material";
import Header from "../../components/Header";
import CourseCard from "./components/CourseCard";
import web from "../../assets/web.png";
import app from "../../assets/app.png";
import dsa from "../../assets/dsa.png";
import js from "../../assets/js.png";
import cloud from "../../assets/cloud.png";

const courses = [
    {
        img: web,
        title: "Web Development",
        id: 1,
    },
    {
        img: app,
        title: ",App Development",
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
            </Box>
            <Box display="flex" flexDirection={"column"}>
                <Header title="Teachers" />
                <div className="flex gap-5 min-h-20  justify-center overflow-scroll max-w-full scrollHidden">
                    <CourseCard img={web} title={"wb"} />
                    <CourseCard img={web} title={"wb"} />
                    <CourseCard img={web} title={"wb"} />
                    <CourseCard img={web} title={"wb"} />
                    <CourseCard img={web} title={"wb"} />
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
                <Header title="Lectures" />
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
        </Box>
    );
};
export default Dashboard;
