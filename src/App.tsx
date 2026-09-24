import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Article } from './pages/Article'
import { Blog } from './pages/Blog'
import { Catalog } from './pages/Catalog'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { ResolvePage } from './pages/ResolvePage'
import { Imprint, Privacy } from './pages/Legal'
import { Sitemap } from './pages/Sitemap'
import { SystemStart } from './pages/SystemStart'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="system-start" element={<SystemStart />} />
          <Route path="ueber-mich" element={<About />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="katalog" element={<Catalog />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<Article />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route path="impressum" element={<Imprint />} />
          <Route path="datenschutz" element={<Privacy />} />
          <Route path=":slug" element={<ResolvePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
