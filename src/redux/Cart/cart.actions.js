const addCourse=course=>({
    type:"ADD_COURSE",
    course
});

export const removeCourse=remove=>({
    type:"REMOVE_COURSE",
    remove
})

export default addCourse;