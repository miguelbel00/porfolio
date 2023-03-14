import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Routes, Route,BrowserRouter as Router} from "react-router-dom";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Cv = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    
    return (
        <div className='min-h-screen min-w-screen bg-white'>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js" >
                <div className="min-h-screen min-w-screen">  
                    <Viewer
                        fileUrl={`https://porfolio-liard.vercel.app/cv.pdf`}
                        plugins={[
                            defaultLayoutPluginInstance,
                        ]}
                    />
                </div>
            </Worker>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route exact path='/cv' element={<Cv/>}/>
            <Route path='*' element={<App/>}/>
        </Routes>
    </Router>,
)


