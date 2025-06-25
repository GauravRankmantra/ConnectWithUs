// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormsSection from "./pages/FormsSection"; // Assuming you place the component here
import MinisterCredentialForm from "./pages/MinisterCredentialForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form-section" element={<FormsSection />} />
      <Route path="/minister-credential" element={<MinisterCredentialForm />} />
    </Routes>
  );
}

export default App;
