import './App.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './Components/About';
import Courses from './Components/Courses';
import Contact from './Components/Contact';
import Index from './Components/Index';
import Master from './Components/Master';
import Login from './auth/Login';
import Register from './auth/Register';
import Adminmaster from './admin/Adminmaster';
import Adminhome from './admin/Adminhome';
import AddBranch from './admin/branches/AddBranch';
import AddCourse from './admin/courses/AddCourse';
import ViewCourse from './admin/courses/ViewCourse';
import ViewBranch from './admin/branches/ViewBranch';
import UpdateCourse from './admin/courses/UpdateCourse';
import UpdateBranch from './admin/branches/UpdateBranch';
import AddQuiz from './admin/quizes/AddQuiz';
import ViewQuiz from './admin/quizes/ViewQuiz';
import UpdateQuiz from './admin/quizes/UpdateQuiz';
import AddQues from './admin/questions/AddQues';
import ViewQues from './admin/questions/ViewQues';
import UpdateQues from './admin/questions/UpdateQues';
import AddMaterial from './students/materials/AddMaterial';
import ViewMaterial from './admin/materials/ViewMaterial';
import UpdateMaterial from './admin/materials/UpdateMaterial';
import ViewMaterialUser from './students/views/ViewMaterialUser';
import ManageMaterial from './students/materials/ManageMaterial';
import ViewCourseUser from './students/views/ViewCourseUser';
import ViewUploadedContent from './students/views/ViewUploadedContent';
import SingleContent from './students/views/SingleContent';
import ViewQuizUser from './students/views/ViewQuizUser';
import PlayQuiz from './students/views/PlayQuiz';
import QuizResult from './students/views/QuizResult';
import UpdateProfile from './students/UpdateProfile';
import ViewAllUser from './admin/users/ViewAllUser';
import ViewSubmission from './admin/submissions/ViewSubmission';
import UpdateSubmission from './admin/submissions/UpdateSubmission';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"element={<Master/>}>
            <Route path="/"element={<Index/>}/>
            <Route path="/About"element={<About/>}/>
            <Route path="/Contact"element={<Contact/>}/>
            <Route path="/Login"element={<Login/>}/>
            <Route path="/Register"element={<Register/>}/>
            <Route path="/add_material" element={<AddMaterial/>}/>
            <Route path="/manage_material" element={<ManageMaterial/>}/>
            <Route path="/update_material/:id" element={<UpdateMaterial/>}/>
            <Route path="/view_material_type" element={<ViewMaterialUser/>}/>
            <Route path="/uploaded_content/:type" element={<ViewUploadedContent/>}/>
            <Route path="/view_single_content/:id" element={<SingleContent/>}/>
            <Route path="/courses" element={<ViewCourseUser/>}/>
            <Route path="/view_quiz_user" element={<ViewQuizUser/>}/>
            <Route path="/play_quiz/:id" element={<PlayQuiz/>}/>
            <Route path="/view_quiz_result" element={<QuizResult/>}/ >
              <Route path="/update_profile" element={<UpdateProfile/>}/>
          </Route>
          <Route path="/admin"element={<Adminmaster/>}>
          <Route path="/admin"element={<Adminhome/>}/>
          <Route path="/admin/add_branch"element={<AddBranch/>}/>
          <Route path="/admin/add_course"element={<AddCourse/>}/>
          <Route path="/admin/view_branch"element={<ViewBranch/>}/>
          <Route path="/admin/view_course"element={<ViewCourse/>}/>
          <Route path="/admin/update_course/:id"element={<UpdateCourse/>}/>
          <Route path="/admin/update_branch/:id"element={<UpdateBranch/>}/>
          <Route path='/admin/add_quiz' element={<AddQuiz/>}/>
          <Route path="/admin/view_quiz" element={<ViewQuiz/>}/>
          <Route path="/admin/update_quiz/:id" element={<UpdateQuiz/>}/>
          <Route path="/admin/view_quiz_ques/:id" element={<ViewQues/>}/>
          <Route path='/admin/add_ques' element={<AddQues/>}/>
          <Route path="/admin/view_ques" element={<ViewQues/>}/>
          <Route path="/admin/update_ques/:id" element={<UpdateQues/>}/>
          <Route path="/admin/view_material" element={<ViewMaterial/>}/>
            <Route path="/admin/update_material/:id" element={<UpdateMaterial/>}/>
            <Route path="/admin/view_users" element={<ViewAllUser/>}/>
            <Route path="/admin/view_submission" element={<ViewSubmission/>}/>
            <Route path="/admin/update_result/:id" element={<UpdateSubmission/>}/>
          </Route>
        </Routes>
    

      </Router>
    </div>
  );
}

export default App;
