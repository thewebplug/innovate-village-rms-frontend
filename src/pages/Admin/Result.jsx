import { Select, MenuItem } from "@mui/material";
import React, {useState } from "react";
import Sidebar from "../../components/Sidebar";
import { searchStudent } from "../../apis/admin/students";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { uploadResult } from "../../apis/admin/result";


const subjects = [
  "Basic Science",
  "Basic Technology",
  "Mathematics",
  "English",
  "Civic Education",
  "Social Studies",
];
const grades = ["A+", "A", "B", "C", "D", "E", "F"];



const Result = () => {
  const auth = useSelector((state) => state.auth);
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [result, setResult] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const handleAddItem = () => {
    if(!subject) {
      alert('please select a subject')
    }
    else if(!grade) {
      alert('please select a grade')
    }else {
      let temp = result
      temp.push({subject, grade})
      setResult([...temp])
      setSubject("")
      setGrade("")
    }
  }

  const handleSearchStudent = async (e) => {
    setLoading(true);
    e.preventDefault();
    if(!studentId) {
      alert("Please input the student's ID")
    }else {
      const response = await searchStudent(studentId, auth?.token)
      console.log('response', response);
      if (response?.status === 200) {
        
      }else {
        if (response?.data?.message) {
          toast.error(response?.data?.message);
        } else {
          toast.error(response?.statusText);
        }
      }
      setDisplayName(response?.data?.name)
    }
    setLoading(false);
  }
  const handleUploadResult = async (e) => {
    setLoading(true);
    e.preventDefault();
    if(!displayName) {
      alert("Please input the student's ID")
    }else if(result?.length < 1) {
      alert("Please input student's result")
    }
    else {
      const response = await uploadResult(studentId, result, auth?.token)
      console.log('response', response);
      if (response?.status === 200) {
        toast.success(response?.data?.message);
      }else {
        if (response?.data?.message) {
          toast.error(response?.data?.message);
        } else {
          toast.error(response?.statusText);
        }
      }
      setResult([])
      setDisplayName("")
      setStudentId("")
    }
    setLoading(false);
  }

  return (
    <div className="adminContainer reg">
      <Sidebar />

      <div className="adminContainer__main">
        <h1>Upload Result</h1>

        <div
        className="form"
        // onSubmit={handleVersionUpdate}
        >
          <div className="studentForm__flex">
            <div>
              <label>Search Student</label>
              <form className="searchStudent" onSubmit={handleSearchStudent}>
                <input
                  required
                  type="text"
                  placeholder="Enter student ID"
                  className="uppercase"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />

                <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Search'}</button>
              </form>
            </div>
            <div>
              <div>
                <label>Student</label>
                <input
                  required
                  type="text"
                  disabled
                  value={displayName}
                  // onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          
          {result?.map((item, index) => (
            <div className="studentForm__flex">
              <div>
                <div>
                  <label>Subject</label>
                  <Select
                    required
                    className="studentForm__flex-select"
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    disabled
                    value={result[index]?.subject}
                  >
                      <MenuItem value={result[index]?.subject} sx={{ fontSize: "1.6rem" }}>
                      {result[index]?.subject}
                      </MenuItem>
                  </Select>
                </div>
              </div>
              <div>
                <div>
                  <label>Grade</label>
                  <Select
                    required
                    className="studentForm__flex-select"
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    disabled
                    value={result[index]?.grade}
                  >
                    
                      <MenuItem value={result[index]?.grade} sx={{ fontSize: "1.6rem" }}>
                      {result[index]?.grade}
                      </MenuItem>
                  </Select>
                </div>
              </div>
            </div>
          ))}
          <div className="studentForm__flex">
              <div>
                <div>
                  <label>Subject</label>
                  <Select
                    required
                    className="studentForm__flex-select"
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    {subjects?.length < 1 && <MenuItem value=""></MenuItem>}
                    {subjects?.map((subject) => (
                      <MenuItem value={subject} sx={{ fontSize: "1.6rem" }}>
                        {subject}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div>
                <div>
                  <label>Grade</label>
                  <Select
                    required
                    className="studentForm__flex-select"
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    {grades?.length < 1 && <MenuItem value=""></MenuItem>}
                    {grades?.map((grade) => (
                      <MenuItem value={grade} sx={{ fontSize: "1.6rem" }}>
                        {grade}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
            <button className="studentForm__add-subject" onClick={handleAddItem}>Add Item</button>
         
          <button className="largeButton" disabled={loading} onClick={handleUploadResult}>
            {loading ? 'Loading...' : 'Register'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
