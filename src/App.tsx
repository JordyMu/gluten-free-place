
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
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
import SouthAfrica from "./pages/SouthAfrica";
import GlutenFreeCapeTown from "./pages/GlutenFreeCapeTown";
import GlutenFreeJohannesburg from "./pages/GlutenFreeJohannesburg";
import GlutenFreeDurban from "./pages/GlutenFreeDurban";
import GlutenFreePretoria from "./pages/GlutenFreePretoria";
import GlutenFreeStellenbosch from "./pages/GlutenFreeStellenbosch";
import GlutenFreeFranschhoek from "./pages/GlutenFreeFranschhoek";
import CapeTownRestaurantPage from "./pages/cape-town/CapeTownRestaurantPage";
import CapeTownStreetFood from "./pages/cape-town/CapeTownStreetFood";
import CapeTownBakeries from "./pages/cape-town/CapeTownBakeries";
import CapeTownGroceryStores from "./pages/cape-town/CapeTownGroceryStores";
import JohannesburgRestaurantPage from "./pages/johannesburg/JohannesburgRestaurantPage";
import DurbanRestaurantPage from "./pages/durban/DurbanRestaurantPage";
import Sweden from "./pages/Sweden";
import Thailand from "./pages/Thailand";
import Argentina from "./pages/Argentina";
import USA from "./pages/USA";
import Japan from "./pages/Japan";
import Auth from "./pages/Auth";
import JansanaGlutenFreeBakery from "./pages/JansanaGlutenFreeBakery";
import ChokSagastaPasteleria from "./pages/ChokSagastaPasteleria";
import ChokChocolateBar from "./pages/ChokChocolateBar";
import MessieSinGlutenMuntaner from "./pages/MessieSinGlutenMuntaner";
import LaNonnaCarmela from "./pages/LaNonnaCarmela";
import Aruku from "./pages/Aruku";
import GrossoNapoletanoSenzaGlutine from "./pages/GrossoNapoletanoSenzaGlutine";
import YummyHeladeria from "./pages/YummyHeladeria";
import Coliaki from "./pages/Coliaki";
import LaPapitaDeLecheTakeAway from "./pages/LaPapitaDeLecheTakeAway";
import RestauranteEnVille from "./pages/RestauranteEnVille";
import MessiePizzaGlutenFreeGracia from "./pages/MessiePizzaGlutenFreeGracia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
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
            <Route path="/gluten-free/south-africa" element={<SouthAfrica />} />
            <Route path="/gluten-free/south-africa/cape-town" element={<GlutenFreeCapeTown />} />
            <Route path="/gluten-free/south-africa/cape-town/:slug" element={<CapeTownRestaurantPage />} />
            <Route path="/gluten-free/south-africa/johannesburg" element={<GlutenFreeJohannesburg />} />
            <Route path="/gluten-free/south-africa/johannesburg/:slug" element={<JohannesburgRestaurantPage />} />
            <Route path="/gluten-free/south-africa/durban" element={<GlutenFreeDurban />} />
            <Route path="/gluten-free/south-africa/durban/:slug" element={<DurbanRestaurantPage />} />
            <Route path="/gluten-free/south-africa/pretoria" element={<GlutenFreePretoria />} />
            <Route path="/gluten-free/south-africa/cape-town/stellenbosch" element={<GlutenFreeStellenbosch />} />
            <Route path="/gluten-free/south-africa/cape-town/franschhoek" element={<GlutenFreeFranschhoek />} />
            <Route path="/gluten-free/south-africa/cape-town/street-food" element={<CapeTownStreetFood />} />
            <Route path="/gluten-free/south-africa/cape-town/bakeries" element={<CapeTownBakeries />} />
            <Route path="/gluten-free/south-africa/cape-town/grocery-stores" element={<CapeTownGroceryStores />} />
            <Route path="/sweden" element={<Sweden />} />
            <Route path="/thailand" element={<Thailand />} />
            <Route path="/argentina" element={<Argentina />} />
            <Route path="/usa" element={<USA />} />
            <Route path="/japan" element={<Japan />} />
            <Route path="/spain/jansana-gluten-free-bakery" element={<JansanaGlutenFreeBakery />} />
            <Route path="/spain/chok-sagasta-pasteleria" element={<ChokSagastaPasteleria />} />
            <Route path="/spain/chok-chocolate-bar" element={<ChokChocolateBar />} />
            <Route path="/spain/messie-sin-gluten-muntaner" element={<MessieSinGlutenMuntaner />} />
            <Route path="/spain/la-nonna-carmela" element={<LaNonnaCarmela />} />
            <Route path="/spain/aruku" element={<Aruku />} />
            <Route path="/spain/grosso-napoletano-senza-glutine" element={<GrossoNapoletanoSenzaGlutine />} />
            <Route path="/spain/yummy-heladeria" element={<YummyHeladeria />} />
            <Route path="/spain/coliaki" element={<Coliaki />} />
            <Route path="/spain/la-papita-de-leche-take-away" element={<LaPapitaDeLecheTakeAway />} />
            <Route path="/spain/restaurante-en-ville" element={<RestauranteEnVille />} />
            <Route path="/spain/messie-pizza-gluten-free-gracia" element={<MessiePizzaGlutenFreeGracia />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
