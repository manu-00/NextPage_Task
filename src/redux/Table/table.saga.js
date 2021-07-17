import { call,put,takeLatest } from "@redux-saga/core/effects";
import { getCoursesSuccess } from "./table.actions";
import getCourses from "../../services/service";

function* callGetCoursesApi(){
    const data=yield call(getCourses);
    yield put(getCoursesSuccess(data))
}

function* watchGetAllCourses(){
    yield takeLatest("GET_COURSES",callGetCoursesApi)
}

export default watchGetAllCourses;