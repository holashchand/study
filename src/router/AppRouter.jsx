import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CoursePage from '../pages/CoursePage'
import ChapterPage from '../pages/ChapterPage'

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/:courseSlug" element={<CoursePage />} />
        <Route path="/courses/:courseSlug/chapter/:num" element={<ChapterPage />} />
      </Routes>
    </HashRouter>
  )
}
