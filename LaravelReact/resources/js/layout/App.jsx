import { React } from 'react';
import { createRoot } from 'react-dom/client';
import  Login from '../components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

function App(){
	return(
		<BrowserRouter>
		   {/*<Login />*/}
			<Routes>
			   <Route exact path="/" element={<Login/>} />
				<Route exact path="/dashboard" element={<Dashboard/>} />
			</Routes>
		</BrowserRouter>
		);
}

if(document.getElementById('app')){
	createRoot(document.getElementById('app')).render(<App />)
}