import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Tests = lazy(() => import("./pages/Tests"));
const Packages = lazy(() => import("./pages/Packages"));
const PackageDetail = lazy(() => import("./pages/PackageDetail"));
const TestDetail = lazy(() => import("./pages/TestDetail"));

const LoadingScreen = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="h-20 w-20 animate-spin rounded-full border-b-2 border-[#4B2E4B]" />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:slug" element={<PackageDetail />} />
          <Route path="/tests/:slug" element={<TestDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
