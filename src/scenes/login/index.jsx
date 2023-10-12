import React from "react";
import Header from "../../components/Header";
import { Divider, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./loginStyles.css";

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .email("Invalid email address")
                .required("Required"),
            password: yup.string().required("Required"),
        }),
        onSubmit: (values) => {
            const { email, password } = values;
            const userData = JSON.parse(localStorage.getItem("users")) || [];
            const user = userData.find((user) => user.email === email);
            if (user) {
                if (user.password === password) {
                    localStorage.setItem("token", JSON.stringify(user));
                    if (user.role === "admin") navigate("/dashboard");
                    else if (user.role === "user") navigate("/");
                } else {
                    alert("Incorrect Password");
                }
            } else {
                alert("User not found");
            }
        },
    });

    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <div className="flex justify-center items-center flex-col w-[400px] login-body">
                <div className="flex justify-center items-center">
                    <Header
                        title="Login"
                        subtitle="Welcome to EduCrafter"
                        className={"flex flex-col justify-center items-center"}
                    />
                    <Divider />
                </div>
                <form
                    onSubmit={formik.handleSubmit}
                    action=""
                    className="w-full flex flex-col gap-5"
                >
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Email"
                        id="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        name="email"
                        error={!!formik.touched.email && !!formik.errors.email}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="password"
                        label="Password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        name="password"
                        id="password"
                        error={
                            !!formik.touched.password &&
                            !!formik.errors.password
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                    />
                    <div
                        display="flex"
                        mt="20px"
                        className="flex justify-center items-center"
                    >
                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
