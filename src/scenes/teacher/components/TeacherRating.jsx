import React, { useEffect, useState } from "react";
import { Typography, TextField, Grid, Button, Rating } from "@mui/material";
import Header from "../../../components/Header";

const TeacherRating = ({ teacher }) => {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
    };

    const handleSubmit = () => {
        const team = JSON.parse(localStorage.getItem("team"));
        const obj = {
            text: review,
            rating: rating,
            createdAt: new Date(),
        };
        const foundIndex = team.findIndex((t) => t.id === teacher.id);
        team[foundIndex].review.push(obj);
        localStorage.setItem("team", JSON.stringify(team));
        setReview("");
        setRating(0);
        setRefresh(!refresh);
    };

    useEffect(() => {
        const team = JSON.parse(localStorage.getItem("team"));
        const foundIndex = team.findIndex((t) => t.id === teacher.id);
        setReviews(team[foundIndex].review);
    }, [refresh, teacher.id]);

    const token = JSON.parse(localStorage.getItem("token"));

    return (
        <div className="py-20">
            { token?.role === 'admin' &&  <Header title="Rating" />}
            <div className="flex flex-col gap-5 justify-center flex-wrap">
                { token?.role === 'admin' && <div className="h-90 p-5 flex justify-between items-center w-full bg-slate-400 rounded-lg hover-effect">
                    <Grid container spacing={2} className="w-full h-full">
                        <Grid item xs={6} className="p-4 pl-8">
                            <div>
                                <Typography
                                    variant="h2"
                                    sx={{ marginBottom: "8px" }}
                                >
                                    Enter your review
                                </Typography>
                                <TextField
                                    label="Write your review here"
                                    multiline
                                    rows={7}
                                    fullWidth
                                    variant="outlined"
                                    className="w-full mt-1"
                                    value={review}
                                    onChange={handleReviewChange}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={6} className="p-4">
                            <div className="flex flex-col h-full justify-between">
                                <div className="mb-4">
                                    <Typography
                                        variant="h2"
                                        sx={{ marginBottom: "8px" }}
                                    >
                                        Rating
                                    </Typography>
                                    <Rating
                                        name="rating"
                                        value={rating}
                                        precision={1}
                                        onChange={handleRatingChange}
                                        sx={{
                                            fontSize: "2.5rem",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        sx={{
                                            marginLeft: "18px",
                                            marginBottom: "18px",
                                        }}
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>}
                <div>
                    <Typography variant="h2" sx={{ marginBottom: "8px" }}>
                        Your review
                    </Typography>
                </div>
                <div className="">
                    {reviews.length === 0 ? (
                        <Typography variant="h2" sx={{ marginBottom: "8px",display:'flex',justifyContent:'center',alignItems:'center',minHeight:'20vh' }}>
                            No reviews yet
                        </Typography>
                    ) : (
                        <div className="w-full max-h-[600px] overflow-y-scroll">
                            {reviews?.map((r, index) => (
                                <div
                                    className="flex gap-5 items-center w-[98%] bg-slate-400 rounded-lg hover-effect mb-5"
                                    key={index}
                                >
                                    <div className="p-5">
                                        <div className="flex flex-col gap-7 justify-center">
                                            <Typography
                                                variant="h2"
                                                sx={{ marginBottom: "8px" }}
                                            >
                                                {r.text}
                                            </Typography>
                                            <Typography
                                                variant="h4"
                                                sx={{ marginBottom: "8px" }}
                                            >
                                                {r?.createdAt.slice(0, 10)}
                                            </Typography>
                                        </div>
                                        <Rating
                                            name="rating"
                                            value={r.rating}
                                            precision={1}
                                            readOnly
                                            sx={{
                                                fontSize: "2.5rem",
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeacherRating;
