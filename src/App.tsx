import React, {type FC} from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import BottomNavbar from './components/BottomNavbar';
import TopNavbar from './components/TopNavbar';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);

const App: FC = () => (
	<>
		<TopNavbar />
		<RouterProvider router={router} />
		<BottomNavbar />
	</>
);

export default App;
