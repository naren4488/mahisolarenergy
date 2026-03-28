import { Routes, Route } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { HomePage } from "@/pages/HomePage";
import { SimplePage } from "@/pages/SimplePage";

export function App() {
  return (
    <div className="min-h-dvh">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<SimplePage title="About us" />} />
          <Route
            path="services"
            element={
              <SimplePage
                title="Services"
                description="Residential and industrial solar solutions — details coming soon."
              />
            }
          />
          <Route path="projects" element={<SimplePage title="Project gallery" />} />
          <Route path="contact" element={<SimplePage title="Contact us" />} />
          <Route path="terms" element={<SimplePage title="Terms and conditions" />} />
          <Route path="privacy" element={<SimplePage title="Privacy policy" />} />
          <Route path="return" element={<SimplePage title="Return policy" />} />
        </Route>
      </Routes>
    </div>
  );
}
