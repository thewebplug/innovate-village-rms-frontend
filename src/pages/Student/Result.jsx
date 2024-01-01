import {
  Box,
  Button,
  Table,
  TableBody,
  TableContainer,
  Checkbox,
  ListItemText,
  TableHead,
  FormControl,
  TableRow,
  Typograph,
  TableCell,
  Modal,
  Typography,
  Grid,
  Pagination,
  Tabs,
  Tab,
  MenuItem,
  Select,
  Badge,
} from "@mui/material";
import { useSelector } from "react-redux";
import Logo from "../../img/InnovateVillageArtboard-3.png";
import { getResult } from "../../apis/admin/result";
import { useEffect } from "react";
import { useState } from "react";

const Result = () => {
  const auth = useSelector((state) => state.auth);
  const [result, setResult] = useState(null)
  const [student, setStudent] = useState(null)

  const handleGetResult = async () => {
    const response = await getResult('658cb97b6624f79497163562', auth?.token);
    console.log('response ui', response);
    setResult(response?.data?.result)
    setStudent(response?.data?.student)
  } 

  useEffect(() => {
    handleGetResult()
  }, [])
  return (
    <div className="result">
      <div className="result__main">
        <div className="title-flex">
          <div className="title-flex__logo">
            <img src={Logo} alt="" />
          </div>
          <div className="title-flex__container">
            <div className="flex-container__title">{student?.name}</div>
            <div className="flex-container__subtitle flex-container__id">STUDENT ID: <span>{student?.studentId}</span></div>
            <div className="flex-container__subtitle">{student?.studentClass}</div>
            <div className="flex-container__subtitle flex-container__session">SESSION: 2023/2024</div>
          </div>
        </div>
        <TableContainer className="main__table">
          <Table>
            <TableHead className="main__table-head">
              <TableRow>
                <TableCell className="table__row">S/N</TableCell>
                <TableCell className="table__row">Subject</TableCell>
                <TableCell className="table__row">CA</TableCell>
                <TableCell className="table__row">Exam</TableCell>
                <TableCell className="table__row">Total</TableCell>
                <TableCell className="table__row">Grade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="main__table-body">
              {result?.map((item, index) => 
              <TableRow>
              <TableCell className="table__row">{index}</TableCell>
              <TableCell className="table__row">{item?.subject}</TableCell>
              <TableCell className="table__row">30</TableCell>
              <TableCell className="table__row">60</TableCell>
              <TableCell className="table__row">90</TableCell>
              <TableCell className="table__row grade grade_exc">{item?.grade}</TableCell>
            </TableRow>
              )}
              
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Result;
