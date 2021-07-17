const getAllCourses=()=>({
    type:"GET_COURSES"
});

export const getCoursesSuccess=courses=>({
    type:"GET_SUCCESS",
    courses
})

export default getAllCourses;