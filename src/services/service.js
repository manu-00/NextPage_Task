import axios from 'axios';

const getCourses=()=>axios.get("https://60c96aa6772a760017203766.mockapi.io/courses").then(res=>res.data)

export default getCourses;