
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
const GlutenFreeMahebourg = lazy(() => import("./pages/mauritius/GlutenFreeMahebourg"));
const QuatreBornesRestaurantPage = lazy(() => import("./pages/mauritius/QuatreBornesRestaurantPage"));
const MahebourgRestaurantPage = lazy(() => import("./pages/mauritius/MahebourgRestaurantPage"));
const GrandBaieRestaurantPage = lazy(() => import("./pages/mauritius/GrandBaieRestaurantPage"));
const PortLouisRestaurantPage = lazy(() => import("./pages/mauritius/PortLouisRestaurantPage"));
const FlicEnFlacRestaurantPage = lazy(() => import("./pages/mauritius/FlicEnFlacRestaurantPage"));
const CurepipeRestaurantPage = lazy(() => import("./pages/mauritius/CurepipeRestaurantPage"));
const JohannesburgRestaurantPage = lazy(() => import("./pages/johannesburg/JohannesburgRestaurantPage"));
const DurbanRestaurantPage = lazy(() => import("./pages/durban/DurbanRestaurantPage"));
const PretoriaRestaurantPage = lazy(() => import("./pages/pretoria/PretoriaRestaurantPage"));
const Sweden = lazy(() => import("./pages/Sweden"));
const Thailand = lazy(() => import("./pages/Thailand"));
const Argentina = lazy(() => import("./pages/Argentina"));
const Kenya = lazy(() => import("./pages/Kenya"));
const GlutenFreeNairobi = lazy(() => import("./pages/kenya/GlutenFreeNairobi"));
const GlutenFreeMombasa = lazy(() => import("./pages/kenya/GlutenFreeMombasa"));
const GlutenFreeKisumu = lazy(() => import("./pages/kenya/GlutenFreeKisumu"));
const GlutenFreeNakuru = lazy(() => import("./pages/kenya/GlutenFreeNakuru"));
const NairobiRestaurantPage = lazy(() => import("./pages/kenya/NairobiRestaurantPage"));
const MombasaRestaurantPage = lazy(() => import("./pages/kenya/MombasaRestaurantPage"));
const KisumuRestaurantPage = lazy(() => import("./pages/kenya/KisumuRestaurantPage"));
const NakuruRestaurantPage = lazy(() => import("./pages/kenya/NakuruRestaurantPage"));
const Nigeria = lazy(() => import("./pages/Nigeria"));
const Morocco = lazy(() => import("./pages/Morocco"));
const USA = lazy(() => import("./pages/USA"));
const Japan = lazy(() => import("./pages/Japan"));
const Egypt = lazy(() => import("./pages/Egypt"));
const GlutenFreeCairo = lazy(() => import("./pages/egypt/GlutenFreeCairo"));
const GlutenFreeAlexandria = lazy(() => import("./pages/egypt/GlutenFreeAlexandria"));
const GlutenFreeGiza = lazy(() => import("./pages/egypt/GlutenFreeGiza"));
const GlutenFreeSharmElSheikh = lazy(() => import("./pages/egypt/GlutenFreeSharmElSheikh"));
const GlutenFreeHurghada = lazy(() => import("./pages/egypt/GlutenFreeHurghada"));
const GlutenFreeLuxor = lazy(() => import("./pages/egypt/GlutenFreeLuxor"));
const CairoRestaurantPage = lazy(() => import("./pages/egypt/CairoRestaurantPage"));
const AlexandriaRestaurantPage = lazy(() => import("./pages/egypt/AlexandriaRestaurantPage"));
const GizaRestaurantPage = lazy(() => import("./pages/egypt/GizaRestaurantPage"));
const SharmRestaurantPage = lazy(() => import("./pages/egypt/SharmRestaurantPage"));
const HurghadaRestaurantPage = lazy(() => import("./pages/egypt/HurghadaRestaurantPage"));
const LuxorRestaurantPage = lazy(() => import("./pages/egypt/LuxorRestaurantPage"));
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
              <Route path="/gluten-free/kenya/nairobi" element={<GlutenFreeNairobi />} />
              <Route path="/gluten-free/kenya/nairobi/:slug" element={<NairobiRestaurantPage />} />
              <Route path="/gluten-free/kenya/mombasa" element={<GlutenFreeMombasa />} />
              <Route path="/gluten-free/kenya/mombasa/:slug" element={<MombasaRestaurantPage />} />
              <Route path="/gluten-free/kenya/kisumu" element={<GlutenFreeKisumu />} />
              <Route path="/gluten-free/kenya/kisumu/:slug" element={<KisumuRestaurantPage />} />
              <Route path="/gluten-free/kenya/nakuru" element={<GlutenFreeNakuru />} />
              <Route path="/gluten-free/kenya/nakuru/:slug" element={<NakuruRestaurantPage />} />
              <Route path="/gluten-free/morocco" element={<Morocco />} />
              <Route path="/usa" element={<USA />} />
              <Route path="/japan" element={<Japan />} />
              <Route path="/gluten-free/egypt" element={<Egypt />} />
              <Route path="/gluten-free/egypt/cairo" element={<GlutenFreeCairo />} />
              <Route path="/gluten-free/egypt/alexandria" element={<GlutenFreeAlexandria />} />
              <Route path="/gluten-free/egypt/giza" element={<GlutenFreeGiza />} />
              <Route path="/gluten-free/egypt/sharm-el-sheikh" element={<GlutenFreeSharmElSheikh />} />
              <Route path="/gluten-free/egypt/hurghada" element={<GlutenFreeHurghada />} />
              <Route path="/gluten-free/egypt/luxor" element={<GlutenFreeLuxor />} />
              <Route path="/gluten-free/egypt/cairo/:slug" element={<CairoRestaurantPage />} />
              <Route path="/gluten-free/egypt/alexandria/:slug" element={<AlexandriaRestaurantPage />} />
              <Route path="/gluten-free/egypt/giza/:slug" element={<GizaRestaurantPage />} />
              <Route path="/gluten-free/egypt/sharm-el-sheikh/:slug" element={<SharmRestaurantPage />} />
              <Route path="/gluten-free/egypt/hurghada/:slug" element={<HurghadaRestaurantPage />} />
              <Route path="/gluten-free/egypt/luxor/:slug" element={<LuxorRestaurantPage />} />
              <Route path="/gluten-free/mauritius" element={<Mauritius />} />
              <Route path="/gluten-free/mauritius/grand-baie" element={<GlutenFreeGrandBaie />} />
              <Route path="/gluten-free/mauritius/grand-baie/:slug" element={<GrandBaieRestaurantPage />} />
              <Route path="/gluten-free/mauritius/port-louis" element={<GlutenFreePortLouis />} />
              <Route path="/gluten-free/mauritius/port-louis/:slug" element={<PortLouisRestaurantPage />} />
              <Route path="/gluten-free/mauritius/flic-en-flac" element={<GlutenFreeFlicEnFlac />} />
              <Route path="/gluten-free/mauritius/flic-en-flac/:slug" element={<FlicEnFlacRestaurantPage />} />
              <Route path="/gluten-free/mauritius/curepipe" element={<GlutenFreeCurepipe />} />
              <Route path="/gluten-free/mauritius/curepipe/:slug" element={<CurepipeRestaurantPage />} />
              <Route path="/gluten-free/mauritius/quatre-bornes" element={<GlutenFreeQuatreBornes />} />
              <Route path="/gluten-free/mauritius/quatre-bornes/:slug" element={<QuatreBornesRestaurantPage />} />
              <Route path="/gluten-free/mauritius/mahebourg" element={<GlutenFreeMahebourg />} />
              <Route path="/gluten-free/mauritius/mahebourg/:slug" element={<MahebourgRestaurantPage />} />
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
