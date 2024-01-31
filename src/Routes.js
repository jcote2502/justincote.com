import { Route, Routes as RTS } from 'react-router-dom';
import Home from './Pages/Home.js';
import Experience from './Pages/Experience.js';
import {Information, SelectFile, ViewFile} from './Pages/Information.js';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import About from './Pages/About.js';
import { Project } from './Pages/Project.js';

// AUTHOR : JUSTIN COTE

const Routes = () => (
        <RTS>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/downloads' element={<Information/>}>
                <Route path='/downloads/viewfile' element={<ViewFile/>}/>
                <Route path='/downloads/selectfile' element={<SelectFile/>}/>
            </Route>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/projects/:pName' element={<Project/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
        </RTS>
);

export default Routes;