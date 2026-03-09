
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// Lazy load all pages for code-splitting
const Index = lazy(() => import("./pages/Index"));
const Countries = lazy(() => import("./pages/Countries"));
const AllCountries = lazy(() => import("./pages/AllCountries"));
const Italy = lazy(() => import("./pages/Italy"));
const Spain = lazy(() => import("./pages/Spain"));
const France = lazy(() => import("./pages/France"));
const Australia = lazy(() => import("./pages/Australia"));
const UnitedKingdom = lazy(() => import("./pages/UnitedKingdom"));
const Canada = lazy(() => import("./pages/Canada"));
const Ireland = lazy(() => import("./pages/Ireland"));
const Germany = lazy(() => import("./pages/Germany"));
const NewZealand = lazy(() => import("./pages/NewZealand"));
const SouthAfrica = lazy(() => import("./pages/SouthAfrica"));
const GlutenFreeCapeTown = lazy(() => import("./pages/GlutenFreeCapeTown"));
const GlutenFreeJohannesburg = lazy(() => import("./pages/GlutenFreeJohannesburg"));
const GlutenFreeDurban = lazy(() => import("./pages/GlutenFreeDurban"));
const GlutenFreePretoria = lazy(() => import("./pages/GlutenFreePretoria"));
const GlutenFreeStellenbosch = lazy(() => import("./pages/GlutenFreeStellenbosch"));
const GlutenFreeFranschhoek = lazy(() => import("./pages/GlutenFreeFranschhoek"));
const CapeTownRestaurantPage = lazy(() => import("./pages/cape-town/CapeTownRestaurantPage"));
const CapeTownStreetFood = lazy(() => import("./pages/cape-town/CapeTownStreetFood"));
const CapeTownBakeries = lazy(() => import("./pages/cape-town/CapeTownBakeries"));
const CapeTownGroceryStores = lazy(() => import("./pages/cape-town/CapeTownGroceryStores"));
const CapeTownGFProducts = lazy(() => import("./pages/cape-town/CapeTownGFProducts"));
const GlutenFreeGrandBaie = lazy(() => import("./pages/mauritius/GlutenFreeGrandBaie"));
const GlutenFreePortLouis = lazy(() => import("./pages/mauritius/GlutenFreePortLouis"));
const GlutenFreeFlicEnFlac = lazy(() => import("./pages/mauritius/GlutenFreeFlicEnFlac"));
const GlutenFreeCurepipe = lazy(() => import("./pages/mauritius/GlutenFreeCurepipe"));
const GlutenFreeQuatreBornes = lazy(() => import("./pages/mauritius/GlutenFreeQuatreBornes"));
const JohannesburgRestaurantPage = lazy(() => import("./pages/johannesburg/JohannesburgRestaurantPage"));
const DurbanRestaurantPage = lazy(() => import("./pages/durban/DurbanRestaurantPage"));
const PretoriaRestaurantPage = lazy(() => import("./pages/pretoria/PretoriaRestaurantPage"));
const Sweden = lazy(() => import("./pages/Sweden"));
const Thailand = lazy(() => import("./pages/Thailand"));
const Argentina = lazy(() => import("./pages/Argentina"));
const Kenya = lazy(() => import("./pages/Kenya"));
const Nigeria = lazy(() => import("./pages/Nigeria"));
const Morocco = lazy(() => import("./pages/Morocco"));
const USA = lazy(() => import("./pages/USA"));
const Japan = lazy(() => import("./pages/Japan"));
const Egypt = lazy(() => import("./pages/Egypt"));
const Mauritius = lazy(() => import("./pages/Mauritius"));
const Botswana = lazy(() => import("./pages/Botswana"));
const Auth = lazy(() => import("./pages/Auth"));
const JansanaGlutenFreeBakery = lazy(() => import("./pages/JansanaGlutenFreeBakery"));
const ChokSagastaPasteleria = lazy(() => import("./pages/ChokSagastaPasteleria"));
const ChokChocolateBar = lazy(() => import("./pages/ChokChocolateBar"));
const MessieSinGlutenMuntaner = lazy(() => import("./pages/MessieSinGlutenMuntaner"));
const LaNonnaCarmela = lazy(() => import("./pages/LaNonnaCarmela"));
const Aruku = lazy(() => import("./pages/Aruku"));
const GrossoNapoletanoSenzaGlutine = lazy(() => import("./pages/GrossoNapoletanoSenzaGlutine"));
const YummyHeladeria = lazy(() => import("./pages/YummyHeladeria"));
const Coliaki = lazy(() => import("./pages/Coliaki"));
const LaPapitaDeLecheTakeAway = lazy(() => import("./pages/LaPapitaDeLecheTakeAway"));
const RestauranteEnVille = lazy(() => import("./pages/RestauranteEnVille"));
const MessiePizzaGlutenFreeGracia = lazy(() => import("./pages/MessiePizzaGlutenFreeGracia"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <GoogleAnalytics />
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
              <Route path="/gluten-free/south-africa/pretoria/:slug" element={<PretoriaRestaurantPage />} />
              <Route path="/gluten-free/south-africa/cape-town/stellenbosch" element={<GlutenFreeStellenbosch />} />
              <Route path="/gluten-free/south-africa/cape-town/franschhoek" element={<GlutenFreeFranschhoek />} />
              <Route path="/gluten-free/south-africa/cape-town/street-food" element={<CapeTownStreetFood />} />
              <Route path="/gluten-free/south-africa/cape-town/bakeries" element={<CapeTownBakeries />} />
              <Route path="/gluten-free/south-africa/cape-town/grocery-stores" element={<CapeTownGroceryStores />} />
              <Route path="/gluten-free/south-africa/cape-town/gluten-free-products" element={<CapeTownGFProducts />} />
              <Route path="/sweden" element={<Sweden />} />
              <Route path="/thailand" element={<Thailand />} />
              <Route path="/argentina" element={<Argentina />} />
              <Route path="/gluten-free/kenya" element={<Kenya />} />
              <Route path="/gluten-free/nigeria" element={<Nigeria />} />
              <Route path="/gluten-free/morocco" element={<Morocco />} />
              <Route path="/usa" element={<USA />} />
              <Route path="/japan" element={<Japan />} />
              <Route path="/gluten-free/egypt" element={<Egypt />} />
              <Route path="/gluten-free/mauritius" element={<Mauritius />} />
              <Route path="/gluten-free/mauritius/grand-baie" element={<GlutenFreeGrandBaie />} />
              <Route path="/gluten-free/mauritius/port-louis" element={<GlutenFreePortLouis />} />
              <Route path="/gluten-free/mauritius/flic-en-flac" element={<GlutenFreeFlicEnFlac />} />
              <Route path="/gluten-free/mauritius/curepipe" element={<GlutenFreeCurepipe />} />
              <Route path="/gluten-free/botswana" element={<Botswana />} />
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
