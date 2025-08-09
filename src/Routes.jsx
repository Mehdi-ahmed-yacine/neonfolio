import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import InnovationPlayground from './pages/innovation-playground';
import ProjectShowcase from './pages/project-showcase';
import HeroExperience from './pages/hero-experience';
import SkillsMatrix from './pages/skills-matrix';
import DigitalResume from './pages/digital-resume';
import ProfessionalStory from './pages/professional-story';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<DigitalResume />} />
        <Route path="/innovation-playground" element={<InnovationPlayground />} />
        <Route path="/project-showcase" element={<ProjectShowcase />} />
        <Route path="/hero-experience" element={<HeroExperience />} />
        <Route path="/skills-matrix" element={<SkillsMatrix />} />
        <Route path="/digital-resume" element={<DigitalResume />} />
        <Route path="/professional-story" element={<ProfessionalStory />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
