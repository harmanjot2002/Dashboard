import React from "react";
import Header from "../../components/Header";
import { Divider, TextField, Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      dob: "",
      address: "",
      subject: "",
      phoneNo: "",
      lectureNo: "",
      groupNo: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email address").required("Required"),
      password: yup.string().required("Required"),
      name: yup.string().required("Required"),
      dob: yup.string().required("Required"),
      address: yup.string().required("Required"),
      subject: yup.string().required("Required"),
      phoneNo: yup.string().required("Required"),
      lectureNo: yup.string().required("Required"),
      groupNo: yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/");
    },
  });

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="flex justify-center items-center flex-col w-[800px]">
        <div className="flex justify-center items-center">
          <Header
            title="Create User"
            subtitle="Add new trainer"
            className={"flex flex-col justify-center items-center"}
          />
          <Divider />
        </div>
        <form
          onSubmit={formik.handleSubmit}
          action=""
          className="w-full flex flex-col gap-5"
        >
          <Grid container spacing={2}>
            <Grid item xs={8} md={6}>
              <div className="mb-5">
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
              </div>

              <div className="mb-5">
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Name"
                  id="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  name="name"
                  error={!!formik.touched.name && !!formik.errors.name}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </div>

              <div className="mb-5">
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Date of Birth"
                  id="dob"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.dob}
                  name="dob"
                  error={!!formik.touched.dob && !!formik.errors.dob}
                  helperText={formik.touched.dob && formik.errors.dob}
                />
              </div>

              <div className="mb-5">
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address"
                  id="address"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  name="address"
                  error={!!formik.touched.address && !!formik.errors.address}
                  helperText={formik.touched.address && formik.errors.address}
                />
              </div>
            </Grid>
            <Grid item xs={8} md={6}>
              <div className="mb-5">
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Subject"
                  id="subject"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  name="subject"
                  error={!!formik.touched.subject && !!formik.errors.subject}
                  helperText={formik.touched.subject && formik.errors.subject}
                />
              </div>

              <div className="mb-5">
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Phone No."
                  id="phoneNo"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phoneNo}
                  name="phoneNo"
                  error={!!formik.touched.phoneNo && !!formik.errors.phoneNo}
                  helperText={formik.touched.phoneNo && formik.errors.phoneNo}
                />
              </div>

              <div className="mb-5">
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Lecture No."
                  id="lectureNo"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.lectureNo}
                  name="lectureNo"
                  error={!!formik.touched.lectureNo && !!formik.errors.lectureNo}
                  helperText={formik.touched.lectureNo && formik.errors.lectureNo}
                />
              </div>

              <div className="mb-5">
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Group No."
                  id="groupNo"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.groupNo}
                  name="groupNo"
                  error={!!formik.touched.groupNo && !!formik.errors.groupNo}
                  helperText={formik.touched.groupNo && formik.errors.groupNo}
                />
              </div>
            </Grid>
          </Grid>

          <div
            display="flex"
            mt="20px"
            className="flex justify-center items-center"
          >
            <Button type="submit" color="secondary" variant="contained">
              Add User
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
