import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NutritionPlanPage from './pages/NutritionPlanPage'
import MealPlansPage from './pages/MealPlansPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'nutrition-plan', element: <NutritionPlanPage /> },
      { path: 'meal-plans', element: <MealPlansPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
