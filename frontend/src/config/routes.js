import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import ListPatients from '../pages/ListPatients';
import NewPatient from '../pages/NewPatient';
import Problems from '../pages/Problems';
import NewProblem from '../pages/NewProblem';
import UpdateProblem from '../pages/UpdateProblem';
import Advices from '../pages/Advices';
import PatientDetail from '../pages/PatientDetail';

const RoutePath = () => {

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Problems />} />
            <Route path="advices" element={<Advices />} />
            
            <Route path="problems" element={<Problems />} />
            <Route path="newproblem" element={<NewProblem />} />
            <Route path="updateproblem/:id" element={<UpdateProblem />} />
                       
          </Routes>
        </BrowserRouter>
    );
};

export default RoutePath;