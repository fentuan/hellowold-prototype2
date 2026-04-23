import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WatchHome from './pages/WatchHome'
import AgeSelection from './pages/AgeSelection'
import Home from './pages/Home'
import Learning from './pages/Learning'
import WordDetail from './pages/WordDetail'
import Practice from './pages/Practice'
import PracticeLevel from './pages/PracticeLevel'
import PracticePath from './pages/PracticePath'
import PracticeStage from './pages/PracticeStage'
import PracticeUnit from './pages/PracticeUnit'
import Story from './pages/Story'
import StoryScene from './pages/StoryScene'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <WatchHome />,
  },
  {
    path: '/age-selection',
    element: <AgeSelection />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/learning',
    element: <Learning />,
  },
  {
    path: '/learning/word/:id',
    element: <WordDetail />,
  },
  {
    path: '/practice',
    element: <Practice />,
  },
  {
    path: '/practice/level/:level',
    element: <PracticeLevel />,
  },
  {
    path: '/practice/:theme',
    element: <PracticePath />,
  },
  {
    path: '/practice/:theme/stage/:stageId',
    element: <PracticeStage />,
  },
  {
    path: '/practice/:theme/stage/:stageId/unit/:unitId',
    element: <PracticeUnit />,
  },
  {
    path: '/story',
    element: <Story />,
  },
  {
    path: '/story/:scene',
    element: <StoryScene />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App