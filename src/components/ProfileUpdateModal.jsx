import { Avatar, Box, Modal,Button, TextField, useTheme} from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import { deepPurple } from "@mui/material/colors";
import { useFormik } from "formik";
import React,{useContext} from "react";
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

const ProfileUpdateModal = ({ open, handleClose }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
        },
        onSubmit: (values) => {
            // console.log(values);
        },
    });

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
                    <Avatar
                        sx={{ bgcolor: deepPurple[500], height: 80, width: 80 }}
                    >
                        OP
                    </Avatar>
                </div>
                <form action="" className="flex flex-col w-full gap-5">
                    <center>
                        <div className="bottom-0 right-0">
                            <input type="file" about="Change Profile Picture"/>
                        </div>
                    </center>
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Email"
                        id="email"
                        sx={{backgroundColor:colors.primary[400],borderRadius:"3px"}}
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
                        sx={{backgroundColor:colors.primary[400],borderRadius:"3px"}}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        name="name"
                        error={!!formik.touched.name && !!formik.errors.name}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <Box className="flex gap-10" justifyContent="center">
                        <Button type="submit" color="secondary" variant="contained">Save</Button>
                        <Button onClick={handleClose} color="secondary" variant="contained">Cancel</Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default ProfileUpdateModal;
