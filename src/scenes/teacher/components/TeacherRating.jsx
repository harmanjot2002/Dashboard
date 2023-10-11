import React, { useState } from 'react';
import { Typography, TextField, Grid, Button, Rating } from '@mui/material';
import Header from "../../../components/Header";

const TeacherRating = ({ teacher }) => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0); 
    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
    };

    const handleSubmit = () => {
        console.log('Review:', review);
        console.log('Rating:', rating);
    };

    return (
        <div className="py-20">
            <Header title="Rating" />
            <div className="flex gap-5 justify-center flex-wrap">
                <div className="h-90 p-5 flex justify-between items-center w-full bg-slate-400 rounded-lg hover-effect">
                    <Grid container spacing={2} className="w-full h-full">
                        <Grid item xs={6} className="p-4 pl-8">
                            <div>
                                <Typography variant="h2" sx={{ marginBottom: '8px' }}>
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
                                    <Typography variant="h2" sx={{ marginBottom: '8px' }}>
                                        Rating
                                    </Typography>
                                    <Rating
                                        name="rating"
                                        value={rating}
                                        precision={1}
                                        onChange={handleRatingChange} 
                                        sx={{
                                            fontSize: '2.5rem',
                                        }}
                                    />
                                </div>
                                <div>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        sx={{ marginLeft: '18px', marginBottom: '18px' }}
                                        onClick={handleSubmit} 
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default TeacherRating;
