
import React, { useState , useEffect } from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBIcon, MDBTableBody,MDBTable,MDBTableHead, MDBBtn, MDBCol, MDBRow} from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import Layout from '../../components/Layout';

function ProcumentReqReport() {

    const [AllPeddingBooking,setAllPeddingBooking] = useState([]);

     useEffect(() => {
        axios.get("http://localhost:5000/stockReq/allreqests")
        .then(res => setAllPeddingBooking(res.data))
        .catch(error => console.log(error));
        },[])


     const [AllReject,setAllReject] = useState([]);
     useEffect(() => {
       axios.get("http://localhost:5000/stockReq/reqReject")
       .then(res => setAllReject(res.data))
       .catch(error => console.log(error));
     },[])
  
     const [AllAccept,setAllAccept] = useState([]);
     useEffect(() => {
       axios.get("http://localhost:5000/stockReq/reqAccept")
       .then(res => setAllAccept(res.data))
       .catch(error => console.log(error));
     },[])

    const [CompleteService,setallServiceComplete] = useState([]);
    useEffect(() => {
       axios.get("http://localhost:5000/stockReq/reqComplete")
       .then(res => setallServiceComplete(res.data))
       .catch(error => console.log(error));
     },[])
     
    return (
        <Layout>
    <div class="dashboard-main-wrapper" >
     
        <div class="dashboard-wrapper">
            <div  style={{paddingTop:'3%',paddingLeft:'2%', width:'98%'}}>
                <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{color:'black'}}><i class="fas fa-home"></i>Admin Dashboard</h4>
                <hr/>
                 <div className="container-fluid bg-white" style={{paddingLeft:'5%', paddingTop:'2%' ,paddingBottom:'2%', paddingRight:'5%'}} >
                     <center>
                          <h2 className="text-uppercase text-black">Requests Report</h2>
                     </center>
                     <div className="text-end mt-5">
                         <a href="bookDas">
                            <MDBBtn className='btn-sm' style={{ fontSize:'15px', fontWeight:'100',letterSpacing:'2px' }} color='dark'>
                                Back
                            </MDBBtn>
                        </a>&nbsp;&nbsp;&nbsp;
                     </div>
                    <MDBRow className="mt-4" id="summery">
                     <MDBCol sm='4'>
             
                         <MDBCard className=" square border-bottom border-5 border-dark alert-primary " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 h4 pl-2  pb-4 text-left ms-3 text-uppercase" >
                                <span> 
                                    
                                    <b style={{fontSize:'180%'}}>{AllPeddingBooking.length}</b>
                                    <br/>&nbsp;send Requests</span>
                            </MDBCardHeader>
                        </MDBCard>
  
                    </MDBCol>
                    <MDBCol sm='4'>
             
                         <MDBCard className=" square border-bottom border-5 border-dark alert-success " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            <MDBCardHeader className=" fw-bold mt-2 h4 pl-2  pb-4 text-left ms-3 text-uppercase" >
                                <span> 
                                    
                                    <b style={{fontSize:'180%'}}>{AllAccept.length}</b>
                                    <br/>&nbsp;Accepted Requests</span>
                            </MDBCardHeader>
                        </MDBCard>
  
                    </MDBCol>
                    <MDBCol sm='4'>
                 
                         <MDBCard className=" square border-bottom border-5 border-dark alert-warning " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            
                            <MDBCardHeader className=" fw-bold mt-2 h4 pl-2 pb-4 text-left ms-3 text-uppercase" >
                                <span>
                                    
                                    <b style={{fontSize:'180%'}}>{CompleteService.length}</b>
                                 
                               <br/>&nbsp;Completed Requests</span>
                            </MDBCardHeader>
                         </MDBCard>
                
                    </MDBCol>
                     <MDBCol sm='4'>
                 
                         <MDBCard className=" square border-bottom border-5 border-dark alert-danger " style={{boxShadow:'2px 3px 5px #BBBBBB'}}>
                            
                            <MDBCardHeader className=" fw-bold mt-2 h4 pl-2 pb-4 text-left ms-3 text-uppercase" >
                                <span>
                                    
                                    <b style={{fontSize:'180%'}}>{AllReject.length}</b>
                                 
                               <br/>&nbsp;Reject Requests</span>
                            </MDBCardHeader>
                         </MDBCard>
                
                    </MDBCol>
                 </MDBRow>

                 </div>
            </div>
        </div>
      </div>
      </Layout>
      )
};


export default ProcumentReqReport;