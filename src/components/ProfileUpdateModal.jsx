import { Avatar, Box, Modal, Button, TextField, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import { deepPurple } from "@mui/material/colors";
import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import CloudPage from "../scenes/CloudPage";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#1F2A40",
    // bgcolor:"background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const ProfileUpdateModal = ({ nameV, emailV, open, handleClose }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [img, setImg] = useState(null);
    // const colorMode = useContext(ColorModeContext);
    const [refresh, setRefresh] = useState(false);
    console.log(nameV, emailV);
    const formik = useFormik({
        initialValues: {
            email: emailV,
            name: nameV,
        },
        onSubmit: (values) => {
            if (values.email === "" || values.name === "") {
                alert("Please fill all the fields");
            }
            const loginUser = JSON.parse(localStorage.getItem("token"));
            const allUsers = JSON.parse(localStorage.getItem("users"));
            const index = allUsers.findIndex(
                (user) => user.email === loginUser.email
            );
            allUsers[index].name = values.name;
            allUsers[index].email = values.email;
            localStorage.setItem("users", JSON.stringify(allUsers));
            localStorage.setItem("token", JSON.stringify(allUsers[index]));
            alert("Profile Updated");
            handleClose();
            values.email = "";
            values.name = "";
        },
    });
    const handleRefresh = () => {
        setRefresh(!refresh);
    };
    useEffect(() => {
        const fetchUser = () => {
            const loginUser = JSON.parse(localStorage.getItem("token"));
            setImg(loginUser?.image);
        };
        fetchUser();
    }, [refresh, formik.values]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={style}
                className={"flex flex-col gap-5 justify-center items-center"}
            >
                <div className="relative">
                    {img === "" ? (
                        <Avatar
                            sx={{
                                bgcolor: deepPurple[500],
                                height: 80,
                                width: 80,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {formik.values?.name.slice(0, 1)}
                        </Avatar>
                    ) : (
                        <img
                            className="h-20 w-20 rounded-full"
                            src={img}
                            alt="profile"
                        />
                    )}
                </div>
                <CloudPage
                    localObject={"users"}
                    handleRefresh={handleRefresh}
                />
                <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col w-full gap-5"
                >
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Email"
                        id="email"
                        sx={{
                            backgroundColor: colors.primary[400],
                            borderRadius: "3px",
                        }}
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
                        type="text"
                        label="Name"
                        id="name"
                        sx={{
                            backgroundColor: colors.primary[400],
                            borderRadius: "3px",
                        }}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        name="name"
                        error={!!formik.touched.name && !!formik.errors.name}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <Box className="flex gap-10" justifyContent="center">
                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                        >
                            Save
                        </Button>
                        <Button
                            onClick={handleClose}
                            color="secondary"
                            variant="contained"
                        >
                            Cancel
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default ProfileUpdateModal;
