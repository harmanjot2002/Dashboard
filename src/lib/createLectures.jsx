

export const createLectures = (groupArr,lectureArr,subjectArr,obj) => {
    const teacherLectures = JSON.parse(localStorage.getItem("teacherLectures")) || [];
    const teacherArray = teacherLectures.filter((item) => item.teacherId !== obj.id) || [];
    for(let i = 0;i<groupArr.length;i++){
        console.log(groupArr[i],lectureArr[i],subjectArr[i]);
        const lectureObj = {
            lecture: lectureArr[i],
            group: groupArr[i],
            subject: subjectArr[i],
            teacherId: obj.id,
            teacherName: obj.name,
            teacherEmail: obj.email,
        };
        teacherArray.push(lectureObj);
    }
    localStorage.setItem("teacherLectures",JSON.stringify(teacherArray));
}