import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CoursePage from '../pages/CoursePage'
import ChapterPage from '../pages/ChapterPage'
import TopQuestionsPage from '../pages/TopQuestionsPage'
import QuizPage from '../pages/QuizPage'
import ShortNotesPage from '../pages/ShortNotesPage'

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/:courseSlug" element={<CoursePage />} />
        <Route path="/courses/:courseSlug/chapter/:num" element={<ChapterPage />} />
        <Route path="/courses/:courseSlug/top-questions" element={<TopQuestionsPage />} />
        <Route path="/courses/:courseSlug/quiz" element={<QuizPage />} />
        <Route path="/courses/:courseSlug/short-notes" element={<ShortNotesPage />} />
        <Route path="/courses/:courseSlug/chapter/:num/top-questions" element={<TopQuestionsPage />} />
        <Route path="/courses/:courseSlug/chapter/:num/quiz" element={<QuizPage />} />
        <Route path="/courses/:courseSlug/chapter/:num/short-notes" element={<ShortNotesPage />} />
      </Routes>
    </HashRouter>
  )
}
