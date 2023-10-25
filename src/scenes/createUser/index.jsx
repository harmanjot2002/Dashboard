import React from "react";
import Header from "../../components/Header";
import { Divider, TextField, Button, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { createLectures } from "../../lib/createLectures";

const colourOptions = [
  {
    id: 1,
    label: "DBMS",
    value: "DBMS",
  },
  {
    id: 2,
    label: "DSA",
    value: "DSA",
  },
  {
    id: 3,
    label: "WEB",
    value: "WEB",
  },
  {
    id: 4,
    label: "Android",
    value: "Android",
  },
  {
    id: 5,
    label: "Java",
    value: "Java",
  },
  {
    id: 6,
    label: "React Native",
    value: "React Native",
  },
  {
    id: 7,
    label: "React JS",
    value: "React JS",
  },
];
const lectureOptions = [
  {
    id: 1,
    label: "1",
    value: "1",
  },
  {
    id: 2,
    label: "2",
    value: "2",
  },
  {
    id: 3,
    label: "3",
    value: "3",
  },
  {
    id: 4,
    label: "4",
    value: "4",
  },
  {
    id: 5,
    label: "5",
    value: "5",
  },
  {
    id: 6,
    label: "6",
    value: "6",
  },
  {
    id: 7,
    label: "7",
    value: "7",
  },
  {
    id: 8,
    label: "8",
    value: "8",
  },
];

let groupOptions = [];

for (let i = 1; i < 25; i++) {
  groupOptions.push({ id: i, label: "G-" + i, value: "G-" + i });
}

const CreateUser = () => {
  const navigate = useNavigate();
  const { state, pathname } = useLocation();
  let pathState = false;
  if (pathname.includes("/update")) {
    pathState = true;
  } else {
    pathState = false;
  }
  const formik = useFormik({
    initialValues: {
      email: state?.email || "",
      name: state?.name || "",
      dob: state?.age || "",
      address: state?.address || "",
      subject: state?.subject || "",
      phoneNo: state?.phone || "",
      lectureNo: state?.lecture || "",
      groupNo: state?.group || "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email address").required("Required"),
      name: yup.string().required("Required"),
      dob: yup.string().required("Required"),
      address: yup.string().required("Required"),
      subject: yup.string().required("Required"),
      phoneNo: yup.string().required("Required"),
      lectureNo: yup.string().required("Required"),
      groupNo: yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const obj = {
        email: values.email,
        name: values.name,
        age: values.dob,
        subject: values.subject,
        phone: values.phoneNo,
        group: values.groupNo,
        lecture: values.lectureNo,
        id: pathState ? state?.id : new Date().getTime().toString(),
        review: pathState ? state?.review : [],
        address: values.address,
      };
      // console.log(obj);
      const password = values.email.split("@")[0] + values.dob;
      const obj2 = {
        email: values.email,
        name: values.name,
        phone: values.phoneNo,
        role: "user",
        password: password,
      };
      const groupArr = values.groupNo.split(",").map((item) => item.trim());
      const lectureArr = values.lectureNo.split(",").map((item) => item.trim());
      const subjectArr = values.subject.split(",").map((item) => item.trim());
      if (
        groupArr.length !== lectureArr.length ||
        groupArr.length !== subjectArr.length
      ) {
        alert("Please select same number of groups, lectures, and subjects");
        return;
      }
      createLectures(groupArr, lectureArr, subjectArr, obj);
      const data = JSON.parse(localStorage.getItem("team"));
      const users = JSON.parse(localStorage.getItem("users"));

      const filterTeacher = data.filter((teacher)=>teacher.email === values.email);
      
      if (pathState) {
        const index = data.findIndex((item) => item.id === state.id);
        data[index] = obj;
      } else {
        if(filterTeacher?.length === 1){
          alert("Teacher already found with this id!");
          return;
        }
        data.push(obj);
        users.push(obj2);
        alert(
          "User Added Successfully \nEmail: " +
            values.email +
            "\nPassword: " +
            password
        );
      }
      localStorage.setItem("team", JSON.stringify(data));
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/");
    },
  });

  const defaultLectureValues = [];
  const defaultGroupValues = [];
  const defaultSubjectValues = [];
  if (state?.lecture) {
    state?.lecture.split(",").map((item) => {
      return defaultLectureValues.push({ id: item, label: item, value: item });
    });
  }
  if (state?.group) {
    state?.group.split(",").map((item) => {
      return defaultGroupValues.push({ id: item, label: item, value: item });
    });
  }
  if (state?.subject) {
    state?.subject.split(",").map((item) => {
      return defaultSubjectValues.push({ id: item, label: item, value: item });
    });
  }
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="flex justify-center items-center flex-col w-[80%]">
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
          <Grid>
            <Grid item xs={2} md={6}>
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
                  label="Age"
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
                <label>Lecture No.</label>
                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  options={lectureOptions}
                  name="lectureNo"
                  id="lectureNo"
                  onBlur={formik.handleBlur}
                  onChange={(e) => {
                    let str = "";
                    e.map((item) => {
                      return (str += item.value + ", ");
                    });
                    formik.setFieldValue("lectureNo", str.slice(0, -2));
                  }}
                  error={!!formik.touched.lectureNo && !!formik.errors.lectureNo}
                  helperText={formik.touched.lectureNo && formik.errors.lectureNo}
                  defaultValue={defaultLectureValues}
                  styles={{
                    menu: (provided) => ({
                      ...provided,
                      zIndex: 9999,
                      color: "black",
                    }),
                  }}
                />
              </div>
              <div className="mb-5">
                <label>Subjects</label>
                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  options={colourOptions}
                  name="subject"
                  id="subject"
                  onBlur={formik.handleBlur}
                  onChange={(e) => {
                    let str = "";
                    e.map((item) => {
                      return (str += item.value + ", ");
                    });
                    formik.setFieldValue("subject", str.slice(0, -2));
                  }}
                  error={!!formik.touched.subject && !!formik.errors.subject}
                  helperText={formik.touched.subject && formik.errors.subject}
                  defaultValue={defaultSubjectValues}
                  styles={{
                    menu: (provided) => ({
                      ...provided,
                      zIndex: 9999,
                      color: "black",
                    }),
                  }}
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
              <div className="mb-5">
                <label>Group No.</label>
                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  options={groupOptions}
                  name="groupNo"
                  id="groupNo"
                  onBlur={formik.handleBlur}
                  onChange={(e) => {
                    let str = "";
                    e.map((item) => {
                      return (str += item.value + ", ");
                    });
                    formik.setFieldValue("groupNo", str.slice(0, -2));
                  }}
                  error={!!formik.touched.groupNo && !!formik.errors.groupNo}
                  helperText={formik.touched.groupNo && formik.errors.groupNo}
                  defaultValue={defaultGroupValues}
                  styles={{
                    menu: (provided) => ({
                      ...provided,
                      zIndex: 9999,
                      color: "black",
                    }),
                  }}
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
              {pathState ? "Update Teacher" : "Add User"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
