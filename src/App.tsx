import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { ChakraProvider } from "@chakra-ui/react";

import { AuthProvider } from "./context/AuthContext";
import { ApplicationRoutes } from "./routes";
import Home from "./pages/Home";
import ApplicationLayout from "./layouts/ApplicationLayout";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurTeam from "./pages/OurTeam";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import ForgotPassword from "./pages/auth/ForgotPassword";
import OrderProject from "./pages/OrderProject";
import ProtectedRoutes from "./pages/ProtectedRoutes";

const queryClient = new QueryClient();

function App() {
  const [_, i18n] = useTranslation();

  // set theme
  // useEffect(
  //   () => {
  //     const link = document.createElement("link")
  //     link.rel = "stylesheet"
  //     link.href = import.meta.env.BASE_URL+"/themes/light.css"
  //     document.head.append(link)
  //   },
  //   []
  // )

  // set direction based on current languaglanguage
  // useEffect(
  //   () => {
  //     document.body.dir = i18n.dir(i18n.language)
  //   },
  //   [i18n.language]
  // )

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Routes>
            <Route element={<ApplicationLayout />}>
              <Route path={ApplicationRoutes.pages.home} element={<Home />} />
              <Route
                path={ApplicationRoutes.pages.blog.blog}
                element={<Blog />}
              />
              <Route
                path={`${ApplicationRoutes.pages.blog.blog}/:id`}
                element={<BlogDetail />}
              />
              <Route
                path={ApplicationRoutes.pages.contact}
                element={<ContactUs />}
              />
              <Route
                path={ApplicationRoutes.pages.company["about-us"]}
                element={<AboutUs />}
              />
              <Route
                path={ApplicationRoutes.pages.company["our-team"]}
                element={<OurTeam />}
              />
              <Route
                path={ApplicationRoutes.pages.company.services}
                element={<Services />}
              />
              <Route
                path={ApplicationRoutes.pages.work.project}
                element={<Projects />}
              />
              <Route
                path={ApplicationRoutes.pages.work["project-details"]}
                element={<ProjectDetails />}
              />

              {/* Auth Routes */}
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoutes />}>
                <Route path="/order-project" element={<OrderProject />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ChakraProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
