import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import ListPatients from '../pages/ListPatients';
import NewPatient from '../pages/NewPatient';
import PatientDetail from '../pages/PatientDetail';

const RoutePath = () => {

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<ListPatients />} />
            <Route path="/createpost" element={<NewPatient />} />
            <Route path="/post/:postId" element={<PatientDetail />} />
          </Routes>
        </BrowserRouter>
    );
};

export default RoutePath;