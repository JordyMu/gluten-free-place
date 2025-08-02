
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Countries from "./pages/Countries";
import AllCountries from "./pages/AllCountries";
import Italy from "./pages/Italy";
import Spain from "./pages/Spain";
import France from "./pages/France";
import Australia from "./pages/Australia";
import UnitedKingdom from "./pages/UnitedKingdom";
import Canada from "./pages/Canada";
import Ireland from "./pages/Ireland";
import Germany from "./pages/Germany";
import NewZealand from "./pages/NewZealand";
import Sweden from "./pages/Sweden";
import Thailand from "./pages/Thailand";
import Argentina from "./pages/Argentina";
import JansanaGlutenFreeBakery from "./pages/JansanaGlutenFreeBakery";
import ChokSagastaPasteleria from "./pages/ChokSagastaPasteleria";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/all-countries" element={<AllCountries />} />
          <Route path="/italy" element={<Italy />} />
          <Route path="/spain" element={<Spain />} />
          <Route path="/france" element={<France />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/united-kingdom" element={<UnitedKingdom />} />
          <Route path="/canada" element={<Canada />} />
          <Route path="/ireland" element={<Ireland />} />
          <Route path="/germany" element={<Germany />} />
          <Route path="/new-zealand" element={<NewZealand />} />
          <Route path="/sweden" element={<Sweden />} />
          <Route path="/thailand" element={<Thailand />} />
          <Route path="/argentina" element={<Argentina />} />
          <Route path="/spain/jansana-gluten-free-bakery" element={<JansanaGlutenFreeBakery />} />
          <Route path="/spain/chok-sagasta-pasteleria" element={<ChokSagastaPasteleria />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
