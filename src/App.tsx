/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import VirtualTryOn from './pages/VirtualTryOn';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import PrescriptionUpload from './pages/PrescriptionUpload';
import TrackOrder from './pages/TrackOrder';
import FindStore from './pages/FindStore';
import FAQ from './pages/FAQ';
import Shipping from './pages/Shipping';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/upload-prescription" element={<PrescriptionUpload />} />
          <Route path="/try-on" element={<VirtualTryOn />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/find-store" element={<FindStore />} />
          <Route path="/stores" element={<FindStore />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}


