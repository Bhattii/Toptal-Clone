/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.jsx';
import { Home } from './pages/Home.jsx';
import { Top } from './pages/Top.jsx';
import { Why } from './pages/Why.jsx';
import { WhyNavData } from './components/WhyNavData.jsx';
import { HowNavData } from './components/HowNavData.jsx';
import { Clients } from './pages/Clients.jsx';
import { Blog } from './pages/Blog.jsx';
import { About } from './pages/About.jsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/top',
		element: <Top />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/why',
		element: <Why />,

		children: [
			{
				path: 'why/:why',
				element: <WhyNavData />,
			},
			{
				path: 'why/:how',
				element: <HowNavData />,
			},
		],
	},
	{
		path: '/clients',
		element: <Clients />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/blog',
		element: <Blog />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/about-us',
		element: <About />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
