import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Users } from 'pages/Users';
import { Navbar } from 'widgets/Navbar';
import { Home } from 'pages/Home';

export const App = () => (
  <BrowserRouter>
    <div className="mt-3 max-w-4xl m-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/users/create" element={<Users />} />
      </Routes>
    </div>
  </BrowserRouter>
);
