import React, { useState } from "react";
import Header from "../../components/Header";
import { Divider, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();


    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });
    const { email, password } = loginInfo;

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
            console.log(values);
            navigate("/");
        },
    });

    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <div className="flex justify-center items-center flex-col w-[300px]">
                <div className="flex justify-center items-center">
                    <Header
                        title="Login"
                        subtitle="Welcome to your dashboard"
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
                        error={
                            !!formik.touched.email &&
                            !!formik.errors.email
                        }
                        helperText={
                            formik.touched.email && formik.errors.email
                        }
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
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
