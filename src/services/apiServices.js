import axios from 'axios';
import * as qs from "qs";
const BASE_URL="http://localhost:3004/api/"
export const BASE_URL_Image="http://localhost:3004/"
class apiServices{
    login(data){
        // console.log(data)
        return  axios.post(BASE_URL+"user/login",data)
    }
    register(data){
        return axios.post(BASE_URL+"student/add", data)
    }
    dashboard(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.get(BASE_URL+"dashboard",{headers:header})
      }
      addCourse(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"course/add",data,{headers:header})
      }
      allCourse(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"course/all",data,{headers:header})
      }
      updateCourse(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"course/update",data,{headers:header})
      }
      changeStatusCourse(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"course/changeStatus",qs.stringify(data),{headers:header})
      }
      singleCourse(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"course/single",qs.stringify(data),{headers:header})
      }
      addBranch(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"branch/add",qs.stringify(data),{headers:header})
      }
      allBranch(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"branch/all",qs.stringify(data),{headers:header})
      }
      updateBranch(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"branch/update",data,{headers:header})
      }
      changeStatusBranch(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"branch/changeStatus",qs.stringify(data),{headers:header})
      }
      singleBranch(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"branch/single",qs.stringify(data),{headers:header})
      }
      addQuiz(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"quiz/add",qs.stringify(data),{headers:header})
      }
      allQuiz(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"quiz/all",qs.stringify(data),{headers:header})
      }
      updateQuiz(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"quiz/update",data,{headers:header})
      }
      changeStatusQuiz(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"quiz/changeStatus",qs.stringify(data),{headers:header})
      }
      singleQuiz(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"quiz/single",data,{headers:header})
      }
      addQues(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"question/add",qs.stringify(data),{headers:header})
      }
      allQues(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"question/all",qs.stringify(data),{headers:header})
      }
      updateQues(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"question/update",data,{headers:header})
      }
      changeStatusQues(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"question/changeStatus",qs.stringify(data),{headers:header})
      }
      singleQues(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"question/single",qs.stringify(data),{headers:header})
      }
      addMaterial(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"material/add",data,{headers:header})
      }
      allMaterial(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"material/all",qs.stringify(data),{headers:header})
      }
      updateMaterial(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"material/update",data,{headers:header})
      }
      changeStatusMaterial(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"material/changeStatus",qs.stringify(data),{headers:header})
      }
      singleMaterial(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"material/single",qs.stringify(data),{headers:header})
      }
      submitQuiz(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"submission/add",qs.stringify(data),{headers:header})
      }
      allSubmission(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"submission/all",qs.stringify(data),{headers:header})
      }
      updateProfile(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"student/update",qs.stringify(data),{headers:header})
      }
      singleStudent(data)
      {
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"student/single",qs.stringify(data),{headers:header})
      }
      allStudent(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"student/all",qs.stringify(data),{headers:header})
      }
      changeStatusStudent(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"student/changeStatus",qs.stringify(data),{headers:header})
      }
      updateSubmission(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"submission/update",qs.stringify(data),{headers:header})
      }
      singleSubmission(data){
        let header={
          Authorization:sessionStorage.getItem("token")
        }
        return axios.post(BASE_URL+"submission/single",qs.stringify(data),{headers:header})
      }
}
export default new apiServices