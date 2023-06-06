import { Route, Routes } from 'react-router-dom';

import ContactInfo from './components/dashboard/admin/ContactInfo';
import BasicInfo from './components/dashboard/admin/BasicInfo';
import AllBlogs from './components/dashboard/admin/AllBlogs';
import ShowBlog from './components/dashboard/admin/ShowBlog';
import Category from './components/dashboard/admin/Category';
import AddBlog from './components/dashboard/admin/AddBlog';
import Dashboard from './components/dashboard/Dashboard';
import Users from './components/dashboard/admin/Users';
import Navbar from "./components/navigations/Navbar"
import Footer from './components/navigations/Footer';
import Contact from './pages/Contact';
import Authors from './pages/Authors';
import Home from './pages/Home';
import Faq from './pages/Faq';
import BlogInfo from './pages/blog/BlogInfo';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {
  return (
    <div className="mx-auto max-w-7xl md:py-3 md:px-1">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-details/:id" element={<BlogInfo />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={<BasicInfo />} />
          <Route path="basic-info" element={<BasicInfo />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path='blogs' element={<AllBlogs />} />
          <Route path='show-blog' element={<ShowBlog />} />
          <Route path='categories' element={<Category />} />
          <Route path='users' element={<Users />} />
          <Route path='messages' element={<ContactInfo />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  )
}

export default App