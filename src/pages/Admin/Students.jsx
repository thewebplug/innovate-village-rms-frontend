import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { getStudents } from "../../apis/admin/students";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const Students = () => {
  const auth = useSelector((state) => state.auth);
const [students, setStudents] = useState([])

  const handleGetStudents = async () => {
    const response = await getStudents(1, auth?.token);
    setStudents(response?.data)
  }

  useEffect(() => {
    handleGetStudents()
  }, [])
  return (
    <div className="students">
      <Sidebar />
      <div className="main">
        <div className="title">Students</div>
        <div className="subtitle">
          {" "}
          <span>Total Students</span>: {students?.length}
        </div>
        <div className="subtitle">
          <span>Session</span>: 2023/2024
        </div>
        <Link to="/register-student">
        <button className="register">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M6 12H18M12 6V18"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          Register Student
        </button>
        </Link>
        <TableContainer className="student_table">
          <Table>
            <TableHead className="student_table-head">
              <TableRow className="student_table-head">
                <TableCell className="table_row">S/N</TableCell>
                <TableCell className="table_row">Name</TableCell>
                <TableCell className="table_row">Student ID</TableCell>
                <TableCell className="table_row">Level</TableCell>
                <TableCell className="table_row">Class</TableCell>
                <TableCell className="table_row">Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table_body">
              {students?.map((student, index) => 
              <TableRow>
                <TableCell className="table_row">{index}</TableCell>
                <TableCell className="table_row">{student?.name}</TableCell>
                <TableCell className="table_row active">{student?.studentId}</TableCell>
                <TableCell className="table_row">{student?.level}</TableCell>
                <TableCell className="table_row">{student?.studentClass}</TableCell>
                <TableCell className="table_row active">View image</TableCell>
              </TableRow>)}
              
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Students;
