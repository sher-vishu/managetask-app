import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskDashboard from '../components/TaskDashboard'
import history from "./History";

const AppRouter = () => (
    <Router history={history}>
        <React.Fragment>
            <Routes>
                <Route path="/" element={<TaskDashboard />} />
            </Routes>
        </React.Fragment>
    </Router >
);

export default AppRouter;