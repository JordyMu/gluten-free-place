
import { Suspense } from "react";
import { lazyWithRetry } from "@/lib/lazyWithRetry";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import SiteFooter from "@/components/layout/SiteFooter";

import { AuthProvider } from "@/contexts/AuthContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// Home page is bundled eagerly so the landing route can never fail on a stale chunk
import Index from "./pages/Index";

// Lazy load all other pages for code-splitting
const About = lazyWithRetry(() => import("./pages/About"));
const Contact = lazyWithRetry(() => import("./pages/Contact"));
const PrivacyPolicy = lazyWithRetry(() => import("./pages/PrivacyPolicy"));
const Terms = lazyWithRetry(() => import("./pages/Terms"));
const Countries = lazyWithRetry(() => import("./pages/Countries"));
const AllCountries = lazyWithRetry(() => import("./pages/AllCountries"));
const Italy = lazyWithRetry(() => import("./pages/Italy"));
const ItalyCityPage = lazyWithRetry(() => import("./pages/italy/ItalyCityPage"));
const ItalyRestaurantPage = lazyWithRetry(() => import("./pages/italy/ItalyRestaurantPage"));
const GlutenFreeRomeBest = lazyWithRetry(() => import("./pages/italy/GlutenFreeRomeBest"));
const ItalyBestPage = lazyWithRetry(() => import("./pages/italy/ItalyBestPage"));
const Spain = lazyWithRetry(() => import("./pages/Spain"));
const SpainCityPage = lazyWithRetry(() => import("./pages/spain/SpainCityPage"));
const SpainRestaurantPage = lazyWithRetry(() => import("./pages/spain/SpainRestaurantPage"));
const France = lazyWithRetry(() => import("./pages/France"));
const GlutenFreeParis = lazyWithRetry(() => import("./pages/france/GlutenFreeParis"));
const GlutenFreeParisBest = lazyWithRetry(() => import("./pages/france/GlutenFreeParisBest"));
const ParisCategoryPage = lazyWithRetry(() => import("./pages/france/ParisCategoryPage"));
const ItalyCategoryPage = lazyWithRetry(() => import("./pages/italy/ItalyCategoryPage"));
const GlutenFreeTorontoBest = lazyWithRetry(() => import("./pages/canada/GlutenFreeTorontoBest"));
const TorontoCategoryPage = lazyWithRetry(() => import("./pages/canada/TorontoCategoryPage"));
const GlutenFreeMontrealBest = lazyWithRetry(() => import("./pages/canada/GlutenFreeMontrealBest"));
const MontrealCategoryPage = lazyWithRetry(() => import("./pages/canada/MontrealCategoryPage"));
const GlutenFreeLyon = lazyWithRetry(() => import("./pages/france/GlutenFreeLyon"));
const LyonCategoryPage = lazyWithRetry(() => import("./pages/france/LyonCategoryPage"));
const GlutenFreeLyonBest = lazyWithRetry(() => import("./pages/france/GlutenFreeLyonBest"));
const GlutenFreeBordeaux = lazyWithRetry(() => import("./pages/france/GlutenFreeBordeaux"));
const GlutenFreeBordeauxBest = lazyWithRetry(() => import("./pages/france/GlutenFreeBordeauxBest"));
const BordeauxCategoryPage = lazyWithRetry(() => import("./pages/france/BordeauxCategoryPage"));
const GlutenFreeMarseille = lazyWithRetry(() => import("./pages/france/GlutenFreeMarseille"));
const GlutenFreeNice = lazyWithRetry(() => import("./pages/france/GlutenFreeNice"));
const GlutenFreeNiceBest = lazyWithRetry(() => import("./pages/france/GlutenFreeNiceBest"));
const GlutenFreeStrasbourg = lazyWithRetry(() => import("./pages/france/GlutenFreeStrasbourg"));
const ParisRestaurantPage = lazyWithRetry(() => import("./pages/france/ParisRestaurantPage"));
const LyonRestaurantPage = lazyWithRetry(() => import("./pages/france/LyonRestaurantPage"));
const BordeauxRestaurantPage = lazyWithRetry(() => import("./pages/france/BordeauxRestaurantPage"));
const MarseilleRestaurantPage = lazyWithRetry(() => import("./pages/france/MarseilleRestaurantPage"));
const NiceRestaurantPage = lazyWithRetry(() => import("./pages/france/NiceRestaurantPage"));
const NiceCategoryPage = lazyWithRetry(() => import("./pages/france/NiceCategoryPage"));
const StrasbourgRestaurantPage = lazyWithRetry(() => import("./pages/france/StrasbourgRestaurantPage"));
const Australia = lazyWithRetry(() => import("./pages/Australia"));
const GlutenFreeSydney = lazyWithRetry(() => import("./pages/australia/GlutenFreeSydney"));
const GlutenFreeMelbourne = lazyWithRetry(() => import("./pages/australia/GlutenFreeMelbourne"));
const GlutenFreeBrisbane = lazyWithRetry(() => import("./pages/australia/GlutenFreeBrisbane"));
const GlutenFreePerth = lazyWithRetry(() => import("./pages/australia/GlutenFreePerth"));
const SydneyRestaurantPage = lazyWithRetry(() => import("./pages/australia/SydneyRestaurantPage"));
const MelbourneRestaurantPage = lazyWithRetry(() => import("./pages/australia/MelbourneRestaurantPage"));
const BrisbaneRestaurantPage = lazyWithRetry(() => import("./pages/australia/BrisbaneRestaurantPage"));
const PerthRestaurantPage = lazyWithRetry(() => import("./pages/australia/PerthRestaurantPage"));

const UnitedKingdom = lazyWithRetry(() => import("./pages/UnitedKingdom"));
const GlutenFreeLondon = lazyWithRetry(() => import("./pages/uk/GlutenFreeLondon"));
const GlutenFreeEdinburgh = lazyWithRetry(() => import("./pages/uk/GlutenFreeEdinburgh"));
const GlutenFreeManchester = lazyWithRetry(() => import("./pages/uk/GlutenFreeManchester"));
const GlutenFreeBirmingham = lazyWithRetry(() => import("./pages/uk/GlutenFreeBirmingham"));
const LondonRestaurantPage = lazyWithRetry(() => import("./pages/uk/LondonRestaurantPage"));
const EdinburghRestaurantPage = lazyWithRetry(() => import("./pages/uk/EdinburghRestaurantPage"));
const ManchesterRestaurantPage = lazyWithRetry(() => import("./pages/uk/ManchesterRestaurantPage"));
const BirminghamRestaurantPage = lazyWithRetry(() => import("./pages/uk/BirminghamRestaurantPage"));
const Canada = lazyWithRetry(() => import("./pages/Canada"));
const GlutenFreeToronto = lazyWithRetry(() => import("./pages/canada/GlutenFreeToronto"));
const GlutenFreeVancouver = lazyWithRetry(() => import("./pages/canada/GlutenFreeVancouver"));
const GlutenFreeVancouverBest = lazyWithRetry(() => import("./pages/canada/GlutenFreeVancouverBest"));
const GlutenFreeMontreal = lazyWithRetry(() => import("./pages/canada/GlutenFreeMontreal"));
const GlutenFreeCalgary = lazyWithRetry(() => import("./pages/canada/GlutenFreeCalgary"));
const GlutenFreeCalgaryBest = lazyWithRetry(() => import("./pages/canada/GlutenFreeCalgaryBest"));
const TorontoRestaurantPage = lazyWithRetry(() => import("./pages/canada/TorontoRestaurantPage"));
const VancouverRestaurantPage = lazyWithRetry(() => import("./pages/canada/VancouverRestaurantPage"));
const VancouverCategoryPage = lazyWithRetry(() => import("./pages/canada/VancouverCategoryPage"));
const MontrealRestaurantPage = lazyWithRetry(() => import("./pages/canada/MontrealRestaurantPage"));
const CalgaryRestaurantPage = lazyWithRetry(() => import("./pages/canada/CalgaryRestaurantPage"));
const OtherCanadaRestaurantPage = lazyWithRetry(() => import("./pages/canada/OtherCanadaRestaurantPage"));
const Ireland = lazyWithRetry(() => import("./pages/Ireland"));
const GlutenFreeDublin = lazyWithRetry(() => import("./pages/ireland/GlutenFreeDublin"));
const DublinRestaurantPage = lazyWithRetry(() => import("./pages/ireland/DublinRestaurantPage"));
const GlutenFreeCork = lazyWithRetry(() => import("./pages/ireland/GlutenFreeCork"));
const CorkRestaurantPage = lazyWithRetry(() => import("./pages/ireland/CorkRestaurantPage"));
const GlutenFreeDublinBest = lazyWithRetry(() => import("./pages/ireland/GlutenFreeDublinBest"));
const GlutenFreeGalway = lazyWithRetry(() => import("./pages/ireland/GlutenFreeGalway"));
const GalwayRestaurantPage = lazyWithRetry(() => import("./pages/ireland/GalwayRestaurantPage"));
const GlutenFreeGalwayBest = lazyWithRetry(() => import("./pages/ireland/GlutenFreeGalwayBest"));
const GalwayCategoryPage = lazyWithRetry(() => import("./pages/ireland/GalwayCategoryPage"));
const DublinCategoryPage = lazyWithRetry(() => import("./pages/ireland/DublinCategoryPage"));
const GlutenFreeLimerick = lazyWithRetry(() => import("./pages/ireland/GlutenFreeLimerick"));
const LimerickRestaurantPage = lazyWithRetry(() => import("./pages/ireland/LimerickRestaurantPage"));
const Germany = lazyWithRetry(() => import("./pages/Germany"));
const GlutenFreeBerlin = lazyWithRetry(() => import("./pages/germany/GlutenFreeBerlin"));
const GlutenFreeMunich = lazyWithRetry(() => import("./pages/germany/GlutenFreeMunich"));
const NewZealand = lazyWithRetry(() => import("./pages/NewZealand"));
const GlutenFreeAuckland = lazyWithRetry(() => import("./pages/new-zealand/GlutenFreeAuckland"));
const GlutenFreeAucklandBest = lazyWithRetry(() => import("./pages/new-zealand/GlutenFreeAucklandBest"));
const AucklandCategoryPage = lazyWithRetry(() => import("./pages/new-zealand/AucklandCategoryPage"));
const NZCityCategoryPage = lazyWithRetry(() => import("./pages/new-zealand/NZCityCategoryPage"));
const NewZealandRestaurantPage = lazyWithRetry(() => import("./pages/new-zealand/NewZealandRestaurantPage"));
const GlutenFreeWellington = lazyWithRetry(() => import("./pages/new-zealand/GlutenFreeWellington"));
const GlutenFreeWellingtonBest = lazyWithRetry(() => import("./pages/new-zealand/GlutenFreeWellingtonBest"));
const GlutenFreeQueenstownArrowtown = lazyWithRetry(() => import("./pages/new-zealand/GlutenFreeQueenstownArrowtown"));
const GlutenFreeQueenstownArrowtownBest = lazyWithRetry(() => import("./pages/new-zealand/GlutenFreeQueenstownArrowtownBest"));
const GlutenFreeChristchurch = lazyWithRetry(() => import("./pages/new-zealand/GlutenFreeChristchurch"));
const GlutenFreeChristchurchBest = lazyWithRetry(() => import("./pages/new-zealand/GlutenFreeChristchurchBest"));
const SouthAfrica = lazyWithRetry(() => import("./pages/SouthAfrica"));
const GlutenFreeCapeTown = lazyWithRetry(() => import("./pages/GlutenFreeCapeTown"));
const GlutenFreeJohannesburg = lazyWithRetry(() => import("./pages/GlutenFreeJohannesburg"));
const GlutenFreeJohannesburgBest = lazyWithRetry(() => import("./pages/johannesburg/GlutenFreeJohannesburgBest"));
const GlutenFreeDurban = lazyWithRetry(() => import("./pages/GlutenFreeDurban"));
const GlutenFreeDurbanBest = lazyWithRetry(() => import("./pages/durban/GlutenFreeDurbanBest"));
const GlutenFreePretoria = lazyWithRetry(() => import("./pages/GlutenFreePretoria"));
const GlutenFreePretoriaBest = lazyWithRetry(() => import("./pages/pretoria/GlutenFreePretoriaBest"));
const GlutenFreeStellenbosch = lazyWithRetry(() => import("./pages/GlutenFreeStellenbosch"));
const StellenboschRestaurantPage = lazyWithRetry(() => import("./pages/stellenbosch/StellenboschRestaurantPage"));
const GlutenFreeFranschhoek = lazyWithRetry(() => import("./pages/GlutenFreeFranschhoek"));
const CapeTownRestaurantPage = lazyWithRetry(() => import("./pages/cape-town/CapeTownRestaurantPage"));
const CapeTownStreetFood = lazyWithRetry(() => import("./pages/cape-town/CapeTownStreetFood"));
const CapeTownBakeries = lazyWithRetry(() => import("./pages/cape-town/CapeTownBakeries"));
const CapeTownGroceryStores = lazyWithRetry(() => import("./pages/cape-town/CapeTownGroceryStores"));
const CapeTownGFProducts = lazyWithRetry(() => import("./pages/cape-town/CapeTownGFProducts"));
const GlutenFreeCapeTownBest = lazyWithRetry(() => import("./pages/cape-town/GlutenFreeCapeTownBest"));
const GlutenFreeGrandBaie = lazyWithRetry(() => import("./pages/mauritius/GlutenFreeGrandBaie"));
const GlutenFreeGrandBaieBest = lazyWithRetry(() => import("./pages/mauritius/GlutenFreeGrandBaieBest"));
const GlutenFreePortLouis = lazyWithRetry(() => import("./pages/mauritius/GlutenFreePortLouis"));
const GlutenFreePortLouisBest = lazyWithRetry(() => import("./pages/mauritius/GlutenFreePortLouisBest"));
const GlutenFreeFlicEnFlac = lazyWithRetry(() => import("./pages/mauritius/GlutenFreeFlicEnFlac"));
const GlutenFreeFlicEnFlacBest = lazyWithRetry(() => import("./pages/mauritius/GlutenFreeFlicEnFlacBest"));
const GlutenFreeCurepipe = lazyWithRetry(() => import("./pages/mauritius/GlutenFreeCurepipe"));
const GlutenFreeCurepipeBest = lazyWithRetry(() => import("./pages/mauritius/GlutenFreeCurepipeBest"));
const GlutenFreeQuatreBornes = lazyWithRetry(() => import("./pages/mauritius/GlutenFreeQuatreBornes"));
const GlutenFreeMahebourg = lazyWithRetry(() => import("./pages/mauritius/GlutenFreeMahebourg"));
const QuatreBornesRestaurantPage = lazyWithRetry(() => import("./pages/mauritius/QuatreBornesRestaurantPage"));
const MahebourgRestaurantPage = lazyWithRetry(() => import("./pages/mauritius/MahebourgRestaurantPage"));
const GrandBaieRestaurantPage = lazyWithRetry(() => import("./pages/mauritius/GrandBaieRestaurantPage"));
const PortLouisRestaurantPage = lazyWithRetry(() => import("./pages/mauritius/PortLouisRestaurantPage"));
const FlicEnFlacRestaurantPage = lazyWithRetry(() => import("./pages/mauritius/FlicEnFlacRestaurantPage"));
const CurepipeRestaurantPage = lazyWithRetry(() => import("./pages/mauritius/CurepipeRestaurantPage"));
const JohannesburgRestaurantPage = lazyWithRetry(() => import("./pages/johannesburg/JohannesburgRestaurantPage"));
const DurbanRestaurantPage = lazyWithRetry(() => import("./pages/durban/DurbanRestaurantPage"));
const PretoriaRestaurantPage = lazyWithRetry(() => import("./pages/pretoria/PretoriaRestaurantPage"));
const Sweden = lazyWithRetry(() => import("./pages/Sweden"));
const SwedenCityPage = lazyWithRetry(() => import("./pages/sweden/SwedenCityPage"));
const MoroccoCityPage = lazyWithRetry(() => import("./pages/morocco/MoroccoCityPage"));
const MoroccoRestaurantPage = lazyWithRetry(() => import("./pages/morocco/MoroccoRestaurantPage"));
const MoroccoCategoryPage = lazyWithRetry(() => import("./pages/morocco/MoroccoCategoryPage"));
const MoroccoBestPage = lazyWithRetry(() => import("./pages/morocco/MoroccoBestPage"));
const SwedenRestaurantPage = lazyWithRetry(() => import("./pages/sweden/SwedenRestaurantPage"));
const Thailand = lazyWithRetry(() => import("./pages/Thailand"));
const Argentina = lazyWithRetry(() => import("./pages/Argentina"));
const Kenya = lazyWithRetry(() => import("./pages/Kenya"));
const GlutenFreeNairobi = lazyWithRetry(() => import("./pages/kenya/GlutenFreeNairobi"));
const GlutenFreeMombasa = lazyWithRetry(() => import("./pages/kenya/GlutenFreeMombasa"));
const GlutenFreeKisumu = lazyWithRetry(() => import("./pages/kenya/GlutenFreeKisumu"));
const GlutenFreeNakuru = lazyWithRetry(() => import("./pages/kenya/GlutenFreeNakuru"));
const NairobiRestaurantPage = lazyWithRetry(() => import("./pages/kenya/NairobiRestaurantPage"));
const MombasaRestaurantPage = lazyWithRetry(() => import("./pages/kenya/MombasaRestaurantPage"));
const KisumuRestaurantPage = lazyWithRetry(() => import("./pages/kenya/KisumuRestaurantPage"));
const NakuruRestaurantPage = lazyWithRetry(() => import("./pages/kenya/NakuruRestaurantPage"));
const Nigeria = lazyWithRetry(() => import("./pages/Nigeria"));
const Morocco = lazyWithRetry(() => import("./pages/Morocco"));
const USA = lazyWithRetry(() => import("./pages/USA"));
const Japan = lazyWithRetry(() => import("./pages/Japan"));
const Egypt = lazyWithRetry(() => import("./pages/Egypt"));
const GlutenFreeCairo = lazyWithRetry(() => import("./pages/egypt/GlutenFreeCairo"));
const GlutenFreeAlexandria = lazyWithRetry(() => import("./pages/egypt/GlutenFreeAlexandria"));
const GlutenFreeGiza = lazyWithRetry(() => import("./pages/egypt/GlutenFreeGiza"));
const GizaCategoryPage = lazyWithRetry(() => import("./pages/egypt/GizaCategoryPage"));
const GlutenFreeGizaBest = lazyWithRetry(() => import("./pages/egypt/GlutenFreeGizaBest"));
const GlutenFreeSharmElSheikh = lazyWithRetry(() => import("./pages/egypt/GlutenFreeSharmElSheikh"));
const SharmElSheikhCategoryPage = lazyWithRetry(() => import("./pages/egypt/SharmElSheikhCategoryPage"));
const GlutenFreeSharmElSheikhBest = lazyWithRetry(() => import("./pages/egypt/GlutenFreeSharmElSheikhBest"));
const CairoRestaurantPage = lazyWithRetry(() => import("./pages/egypt/CairoRestaurantPage"));
const CairoCategoryPage = lazyWithRetry(() => import("./pages/egypt/CairoCategoryPage"));
const GlutenFreeCairoBest = lazyWithRetry(() => import("./pages/egypt/GlutenFreeCairoBest"));
const AlexandriaRestaurantPage = lazyWithRetry(() => import("./pages/egypt/AlexandriaRestaurantPage"));
const GizaRestaurantPage = lazyWithRetry(() => import("./pages/egypt/GizaRestaurantPage"));
const SharmRestaurantPage = lazyWithRetry(() => import("./pages/egypt/SharmRestaurantPage"));
const Mauritius = lazyWithRetry(() => import("./pages/Mauritius"));
const Botswana = lazyWithRetry(() => import("./pages/Botswana"));
const Auth = lazyWithRetry(() => import("./pages/Auth"));
const JansanaGlutenFreeBakery = lazyWithRetry(() => import("./pages/JansanaGlutenFreeBakery"));
const ChokSagastaPasteleria = lazyWithRetry(() => import("./pages/ChokSagastaPasteleria"));
const ChokChocolateBar = lazyWithRetry(() => import("./pages/ChokChocolateBar"));
const MessieSinGlutenMuntaner = lazyWithRetry(() => import("./pages/MessieSinGlutenMuntaner"));
const LaNonnaCarmela = lazyWithRetry(() => import("./pages/LaNonnaCarmela"));
const Aruku = lazyWithRetry(() => import("./pages/Aruku"));
const GrossoNapoletanoSenzaGlutine = lazyWithRetry(() => import("./pages/spain/GrossoNapoletanoSenzaGlutinePage"));
const YummyHeladeria = lazyWithRetry(() => import("./pages/YummyHeladeria"));
const Coliaki = lazyWithRetry(() => import("./pages/Coliaki"));
const LaPapitaDeLecheTakeAway = lazyWithRetry(() => import("./pages/LaPapitaDeLecheTakeAway"));
const RestauranteEnVille = lazyWithRetry(() => import("./pages/RestauranteEnVille"));
const MessiePizzaGlutenFreeGracia = lazyWithRetry(() => import("./pages/MessiePizzaGlutenFreeGracia"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));
const Admin = lazyWithRetry(() => import("./pages/Admin"));

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
          <Suspense fallback={<PageLoader />}>
            <ScrollToTop />
            <GoogleAnalytics />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/countries" element={<Countries />} />
              <Route path="/all-countries" element={<AllCountries />} />
              <Route path="/italy" element={<Italy />} />
              <Route path="/gluten-free/italy/:slug" element={<ItalyCityPage />} />
              <Route path="/gluten-free/italy/rome/best" element={<GlutenFreeRomeBest />} />
              <Route path="/gluten-free/italy/rome/street-food" element={<ItalyCategoryPage citySlug="rome" category="street-food" />} />
              <Route path="/gluten-free/italy/rome/bakeries" element={<ItalyCategoryPage citySlug="rome" category="bakeries" />} />
              <Route path="/gluten-free/italy/rome/grocery-stores" element={<ItalyCategoryPage citySlug="rome" category="grocery-stores" />} />
              <Route path="/gluten-free/italy/rome/gluten-free-products" element={<ItalyCategoryPage citySlug="rome" category="gluten-free-products" />} />
              <Route path="/gluten-free/italy/florence/best-gluten-free-restaurants-in-florence" element={<ItalyBestPage citySlug="florence" />} />
              <Route path="/gluten-free/italy/florence/street-food" element={<ItalyCategoryPage citySlug="florence" category="street-food" />} />
              <Route path="/gluten-free/italy/florence/bakeries" element={<ItalyCategoryPage citySlug="florence" category="bakeries" />} />
              <Route path="/gluten-free/italy/florence/grocery-stores" element={<ItalyCategoryPage citySlug="florence" category="grocery-stores" />} />
              <Route path="/gluten-free/italy/florence/gluten-free-products" element={<ItalyCategoryPage citySlug="florence" category="gluten-free-products" />} />
              <Route path="/gluten-free/italy/milan/best-gluten-free-restaurants-in-milan" element={<ItalyBestPage citySlug="milan" />} />
              <Route path="/gluten-free/italy/milan/street-food" element={<ItalyCategoryPage citySlug="milan" category="street-food" />} />
              <Route path="/gluten-free/italy/milan/bakeries" element={<ItalyCategoryPage citySlug="milan" category="bakeries" />} />
              <Route path="/gluten-free/italy/milan/grocery-stores" element={<ItalyCategoryPage citySlug="milan" category="grocery-stores" />} />
              <Route path="/gluten-free/italy/milan/gluten-free-products" element={<ItalyCategoryPage citySlug="milan" category="gluten-free-products" />} />
              <Route path="/gluten-free/italy/venice/best-gluten-free-restaurants-in-venice" element={<ItalyBestPage citySlug="venice" />} />
              <Route path="/gluten-free/italy/venice/street-food" element={<ItalyCategoryPage citySlug="venice" category="street-food" />} />
              <Route path="/gluten-free/italy/venice/bakeries" element={<ItalyCategoryPage citySlug="venice" category="bakeries" />} />
              <Route path="/gluten-free/italy/venice/grocery-stores" element={<ItalyCategoryPage citySlug="venice" category="grocery-stores" />} />
              <Route path="/gluten-free/italy/venice/gluten-free-products" element={<ItalyCategoryPage citySlug="venice" category="gluten-free-products" />} />
              <Route path="/gluten-free/italy/:citySlug/:restaurantSlug" element={<ItalyRestaurantPage />} />
              <Route path="/spain" element={<Spain />} />
              <Route path="/france" element={<France />} />
              <Route path="/gluten-free/france" element={<France />} />
              <Route path="/gluten-free/france/paris" element={<GlutenFreeParis />} />
              <Route path="/gluten-free/france/paris/best" element={<GlutenFreeParisBest />} />
              <Route path="/gluten-free/france/paris/street-food" element={<ParisCategoryPage category="street-food" />} />
              <Route path="/gluten-free/france/paris/bakeries" element={<ParisCategoryPage category="bakeries" />} />
              <Route path="/gluten-free/france/paris/grocery-stores" element={<ParisCategoryPage category="grocery-stores" />} />
              <Route path="/gluten-free/france/paris/gluten-free-products" element={<ParisCategoryPage category="gluten-free-products" />} />
              <Route path="/gluten-free/france/paris/:slug" element={<ParisRestaurantPage />} />
              <Route path="/gluten-free/france/lyon" element={<GlutenFreeLyon />} />
              <Route path="/gluten-free/france/lyon/best" element={<GlutenFreeLyonBest />} />
              <Route path="/gluten-free/france/lyon/street-food" element={<LyonCategoryPage category="street-food" />} />
              <Route path="/gluten-free/france/lyon/bakeries" element={<LyonCategoryPage category="bakeries" />} />
              <Route path="/gluten-free/france/lyon/grocery-stores" element={<LyonCategoryPage category="grocery-stores" />} />
              <Route path="/gluten-free/france/lyon/gluten-free-products" element={<LyonCategoryPage category="gluten-free-products" />} />
              <Route path="/gluten-free/france/lyon/:slug" element={<LyonRestaurantPage />} />
              <Route path="/gluten-free/france/bordeaux" element={<GlutenFreeBordeaux />} />
              <Route path="/gluten-free/france/bordeaux/best" element={<GlutenFreeBordeauxBest />} />
              <Route path="/gluten-free/france/bordeaux/street-food" element={<BordeauxCategoryPage category="street-food" />} />
              <Route path="/gluten-free/france/bordeaux/bakeries" element={<BordeauxCategoryPage category="bakeries" />} />
              <Route path="/gluten-free/france/bordeaux/grocery-stores" element={<BordeauxCategoryPage category="grocery-stores" />} />
              <Route path="/gluten-free/france/bordeaux/gluten-free-products" element={<BordeauxCategoryPage category="gluten-free-products" />} />
              <Route path="/gluten-free/france/bordeaux/:slug" element={<BordeauxRestaurantPage />} />
              <Route path="/gluten-free/france/marseille" element={<GlutenFreeMarseille />} />
              <Route path="/gluten-free/france/marseille/:slug" element={<MarseilleRestaurantPage />} />
              <Route path="/gluten-free/france/nice" element={<GlutenFreeNice />} />
              <Route path="/gluten-free/france/nice/best-gluten-free-restaurant-in-nice" element={<GlutenFreeNiceBest />} />
              <Route path="/gluten-free/france/nice/street-food" element={<NiceCategoryPage category="street-food" />} />
              <Route path="/gluten-free/france/nice/bakeries" element={<NiceCategoryPage category="bakeries" />} />
              <Route path="/gluten-free/france/nice/grocery-stores" element={<NiceCategoryPage category="grocery-stores" />} />
              <Route path="/gluten-free/france/nice/gluten-free-products" element={<NiceCategoryPage category="gluten-free-products" />} />
              <Route path="/gluten-free/france/nice/:slug" element={<NiceRestaurantPage />} />
              <Route path="/gluten-free/france/strasbourg" element={<GlutenFreeStrasbourg />} />
              <Route path="/gluten-free/france/strasbourg/:slug" element={<StrasbourgRestaurantPage />} />
              <Route path="/australia" element={<Australia />} />
              <Route path="/gluten-free/australia/sydney" element={<GlutenFreeSydney />} />
              <Route path="/gluten-free/australia/sydney/:slug" element={<SydneyRestaurantPage />} />
              <Route path="/gluten-free/australia/melbourne" element={<GlutenFreeMelbourne />} />
              <Route path="/gluten-free/australia/melbourne/:slug" element={<MelbourneRestaurantPage />} />
              <Route path="/gluten-free/australia/brisbane" element={<GlutenFreeBrisbane />} />
              <Route path="/gluten-free/australia/brisbane/:slug" element={<BrisbaneRestaurantPage />} />
              <Route path="/gluten-free/australia/perth" element={<GlutenFreePerth />} />
              <Route path="/gluten-free/australia/perth/:slug" element={<PerthRestaurantPage />} />

              <Route path="/gluten-free/united-kingdom" element={<UnitedKingdom />} />
              <Route path="/united-kingdom" element={<UnitedKingdom />} />
              <Route path="/gluten-free/united-kingdom/london" element={<GlutenFreeLondon />} />
              <Route path="/gluten-free/united-kingdom/london/:slug" element={<LondonRestaurantPage />} />
              <Route path="/gluten-free/united-kingdom/edinburgh" element={<GlutenFreeEdinburgh />} />
              <Route path="/gluten-free/united-kingdom/edinburgh/:slug" element={<EdinburghRestaurantPage />} />
              <Route path="/gluten-free/united-kingdom/manchester" element={<GlutenFreeManchester />} />
              <Route path="/gluten-free/united-kingdom/manchester/:slug" element={<ManchesterRestaurantPage />} />
              <Route path="/gluten-free/united-kingdom/birmingham" element={<GlutenFreeBirmingham />} />
              <Route path="/gluten-free/united-kingdom/birmingham/:slug" element={<BirminghamRestaurantPage />} />
              <Route path="/gluten-free/canada" element={<Canada />} />
              <Route path="/canada" element={<Canada />} />
              <Route path="/gluten-free/canada/toronto" element={<GlutenFreeToronto />} />
              <Route path="/gluten-free/canada/toronto/best-gluten-free-restaurants-in-toronto" element={<GlutenFreeTorontoBest />} />
              <Route path="/gluten-free/canada/toronto/street-food" element={<TorontoCategoryPage category="street-food" />} />
              <Route path="/gluten-free/canada/toronto/bakeries" element={<TorontoCategoryPage category="bakeries" />} />
              <Route path="/gluten-free/canada/toronto/grocery-stores" element={<TorontoCategoryPage category="grocery-stores" />} />
              <Route path="/gluten-free/canada/toronto/gluten-free-products" element={<TorontoCategoryPage category="gluten-free-products" />} />
              <Route path="/gluten-free/canada/toronto/:slug" element={<TorontoRestaurantPage />} />
              <Route path="/gluten-free/canada/vancouver" element={<GlutenFreeVancouver />} />
              <Route path="/gluten-free/canada/vancouver/best-gluten-free-restaurants-in-vancouver" element={<GlutenFreeVancouverBest />} />
              <Route path="/gluten-free/canada/vancouver/street-food" element={<VancouverCategoryPage category="street-food" />} />
              <Route path="/gluten-free/canada/vancouver/bakeries" element={<VancouverCategoryPage category="bakeries" />} />
              <Route path="/gluten-free/canada/vancouver/grocery-stores" element={<VancouverCategoryPage category="grocery-stores" />} />
              <Route path="/gluten-free/canada/vancouver/gluten-free-products" element={<VancouverCategoryPage category="gluten-free-products" />} />
              <Route path="/gluten-free/canada/vancouver/:slug" element={<VancouverRestaurantPage />} />
              <Route path="/gluten-free/canada/montreal" element={<GlutenFreeMontreal />} />
              <Route path="/gluten-free/canada/montreal/best-gluten-free-restaurants-in-montreal" element={<GlutenFreeMontrealBest />} />
              <Route path="/gluten-free/canada/montreal/street-food" element={<MontrealCategoryPage category="street-food" />} />
              <Route path="/gluten-free/canada/montreal/bakeries" element={<MontrealCategoryPage category="bakeries" />} />
              <Route path="/gluten-free/canada/montreal/grocery-stores" element={<MontrealCategoryPage category="grocery-stores" />} />
              <Route path="/gluten-free/canada/montreal/gluten-free-products" element={<MontrealCategoryPage category="gluten-free-products" />} />
              <Route path="/gluten-free/canada/montreal/:slug" element={<MontrealRestaurantPage />} />
              <Route path="/gluten-free/canada/calgary" element={<GlutenFreeCalgary />} />
              <Route path="/gluten-free/canada/calgary/best-gluten-free-restaurants-in-calgary" element={<GlutenFreeCalgaryBest />} />
              <Route path="/gluten-free/canada/calgary/:slug" element={<CalgaryRestaurantPage />} />
              <Route path="/gluten-free/canada/other/:slug" element={<OtherCanadaRestaurantPage />} />
              <Route path="/ireland" element={<Ireland />} />
              <Route path="/gluten-free/ireland" element={<Navigate to="/ireland" replace />} />
              <Route path="/gluten-free/ireland/dublin" element={<GlutenFreeDublin />} />
              <Route path="/gluten-free/ireland/dublin/best-gluten-free-restaurants-in-dublin" element={<GlutenFreeDublinBest />} />
              <Route path="/gluten-free/ireland/dublin/street-food" element={<DublinCategoryPage category="street-food" />} />
              <Route path="/gluten-free/ireland/dublin/bakeries" element={<DublinCategoryPage category="bakeries" />} />
              <Route path="/gluten-free/ireland/dublin/grocery-stores" element={<DublinCategoryPage category="grocery-stores" />} />
              <Route path="/gluten-free/ireland/dublin/gluten-free-products" element={<DublinCategoryPage category="gluten-free-products" />} />
              <Route path="/gluten-free/ireland/dublin/:slug" element={<DublinRestaurantPage />} />
              <Route path="/gluten-free/ireland/cork" element={<GlutenFreeCork />} />
              <Route path="/gluten-free/ireland/cork/:slug" element={<CorkRestaurantPage />} />
              <Route path="/gluten-free/ireland/galway" element={<GlutenFreeGalway />} />
              <Route path="/gluten-free/ireland/galway/best-gluten-free-restaurants-in-galway" element={<GlutenFreeGalwayBest />} />
              <Route path="/gluten-free/ireland/galway/street-food" element={<GalwayCategoryPage category="street-food" />} />
              <Route path="/gluten-free/ireland/galway/bakeries" element={<GalwayCategoryPage category="bakeries" />} />
              <Route path="/gluten-free/ireland/galway/grocery-stores" element={<GalwayCategoryPage category="grocery-stores" />} />
              <Route path="/gluten-free/ireland/galway/gluten-free-products" element={<GalwayCategoryPage category="gluten-free-products" />} />
              <Route path="/gluten-free/ireland/galway/:slug" element={<GalwayRestaurantPage />} />
              <Route path="/gluten-free/ireland/limerick" element={<GlutenFreeLimerick />} />
              <Route path="/gluten-free/ireland/limerick/:slug" element={<LimerickRestaurantPage />} />
              <Route path="/germany" element={<Germany />} />
              <Route path="/gluten-free/germany/berlin" element={<GlutenFreeBerlin />} />
              <Route path="/gluten-free/germany/munich" element={<GlutenFreeMunich />} />
              <Route path="/new-zealand" element={<NewZealand />} />
              <Route path="/gluten-free/new-zealand/auckland" element={<GlutenFreeAuckland />} />
              <Route path="/gluten-free/new-zealand/auckland/best-gluten-free-restaurants-in-auckland" element={<GlutenFreeAucklandBest />} />
              <Route path="/gluten-free/new-zealand/auckland/street-food" element={<AucklandCategoryPage category="street-food" />} />
              <Route path="/gluten-free/new-zealand/auckland/bakeries" element={<AucklandCategoryPage category="bakeries" />} />
              <Route path="/gluten-free/new-zealand/auckland/grocery-stores" element={<AucklandCategoryPage category="grocery-stores" />} />
              <Route path="/gluten-free/new-zealand/auckland/gluten-free-products" element={<AucklandCategoryPage category="gluten-free-products" />} />
              <Route path="/gluten-free/new-zealand/wellington" element={<GlutenFreeWellington />} />
              <Route path="/gluten-free/new-zealand/wellington/best-gluten-free-restaurants-in-wellington" element={<GlutenFreeWellingtonBest />} />
              <Route path="/gluten-free/new-zealand/wellington/street-food" element={<NZCityCategoryPage citySlug="wellington" category="street-food" />} />
              <Route path="/gluten-free/new-zealand/wellington/bakeries" element={<NZCityCategoryPage citySlug="wellington" category="bakeries" />} />
              <Route path="/gluten-free/new-zealand/wellington/grocery-stores" element={<NZCityCategoryPage citySlug="wellington" category="grocery-stores" />} />
              <Route path="/gluten-free/new-zealand/wellington/gluten-free-products" element={<NZCityCategoryPage citySlug="wellington" category="gluten-free-products" />} />
              <Route path="/gluten-free/new-zealand/queenstown-arrowtown" element={<GlutenFreeQueenstownArrowtown />} />
              <Route path="/gluten-free/new-zealand/queenstown-arrowtown/best-gluten-free-restaurants-in-queenstown-arrowtown" element={<GlutenFreeQueenstownArrowtownBest />} />
              <Route path="/gluten-free/new-zealand/queenstown-arrowtown/street-food" element={<NZCityCategoryPage citySlug="queenstown-arrowtown" category="street-food" />} />
              <Route path="/gluten-free/new-zealand/queenstown-arrowtown/bakeries" element={<NZCityCategoryPage citySlug="queenstown-arrowtown" category="bakeries" />} />
              <Route path="/gluten-free/new-zealand/queenstown-arrowtown/grocery-stores" element={<NZCityCategoryPage citySlug="queenstown-arrowtown" category="grocery-stores" />} />
              <Route path="/gluten-free/new-zealand/queenstown-arrowtown/gluten-free-products" element={<NZCityCategoryPage citySlug="queenstown-arrowtown" category="gluten-free-products" />} />
              <Route path="/gluten-free/new-zealand/christchurch" element={<GlutenFreeChristchurch />} />
              <Route path="/gluten-free/new-zealand/christchurch/best-gluten-free-restaurants-in-christchurch" element={<GlutenFreeChristchurchBest />} />
              <Route path="/gluten-free/new-zealand/christchurch/street-food" element={<NZCityCategoryPage citySlug="christchurch" category="street-food" />} />
              <Route path="/gluten-free/new-zealand/christchurch/bakeries" element={<NZCityCategoryPage citySlug="christchurch" category="bakeries" />} />
              <Route path="/gluten-free/new-zealand/christchurch/grocery-stores" element={<NZCityCategoryPage citySlug="christchurch" category="grocery-stores" />} />
              <Route path="/gluten-free/new-zealand/christchurch/gluten-free-products" element={<NZCityCategoryPage citySlug="christchurch" category="gluten-free-products" />} />
              <Route path="/gluten-free/new-zealand/:city/:slug" element={<NewZealandRestaurantPage />} />
              <Route path="/gluten-free/south-africa" element={<SouthAfrica />} />
              <Route path="/gluten-free/south-africa/cape-town" element={<GlutenFreeCapeTown />} />
              <Route path="/gluten-free/south-africa/cape-town/best-gluten-free-restaurants-in-cape-town" element={<GlutenFreeCapeTownBest />} />
              <Route path="/gluten-free/south-africa/cape-town/:slug" element={<CapeTownRestaurantPage />} />
              <Route path="/gluten-free/south-africa/johannesburg" element={<GlutenFreeJohannesburg />} />
              <Route path="/gluten-free/south-africa/johannesburg/best-gluten-free-restaurants-in-johannesburg" element={<GlutenFreeJohannesburgBest />} />
              <Route path="/gluten-free/south-africa/johannesburg/:slug" element={<JohannesburgRestaurantPage />} />
              <Route path="/gluten-free/south-africa/durban" element={<GlutenFreeDurban />} />
              <Route path="/gluten-free/south-africa/durban/best-gluten-free-restaurants-in-durban" element={<GlutenFreeDurbanBest />} />
              <Route path="/gluten-free/south-africa/durban/:slug" element={<DurbanRestaurantPage />} />
              <Route path="/gluten-free/south-africa/pretoria" element={<GlutenFreePretoria />} />
              <Route path="/gluten-free/south-africa/pretoria/best-gluten-free-restaurants-in-pretoria" element={<GlutenFreePretoriaBest />} />
              <Route path="/gluten-free/south-africa/pretoria/:slug" element={<PretoriaRestaurantPage />} />
              <Route path="/gluten-free/south-africa/cape-town/stellenbosch" element={<GlutenFreeStellenbosch />} />
              <Route path="/gluten-free/south-africa/cape-town/stellenbosch/:slug" element={<StellenboschRestaurantPage />} />
              <Route path="/gluten-free/south-africa/cape-town/franschhoek" element={<GlutenFreeFranschhoek />} />
              <Route path="/gluten-free/south-africa/cape-town/street-food" element={<CapeTownStreetFood />} />
              <Route path="/gluten-free/south-africa/cape-town/bakeries" element={<CapeTownBakeries />} />
              <Route path="/gluten-free/south-africa/cape-town/grocery-stores" element={<CapeTownGroceryStores />} />
              <Route path="/gluten-free/south-africa/cape-town/gluten-free-products" element={<CapeTownGFProducts />} />
              <Route path="/sweden" element={<Sweden />} />
              <Route path="/gluten-free/sweden" element={<Navigate to="/sweden" replace />} />
              <Route path="/gluten-free/sweden/:citySlug" element={<SwedenCityPage />} />
              <Route path="/gluten-free/sweden/:citySlug/:slug" element={<SwedenRestaurantPage />} />
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
              <Route path="/gluten-free/nigeria" element={<Nigeria />} />
              <Route path="/gluten-free/morocco" element={<Morocco />} />
              <Route path="/gluten-free/morocco/:citySlug" element={<MoroccoCityPage />} />
              <Route path="/gluten-free/morocco/:citySlug/street-food" element={<MoroccoCategoryPage category="street-food" />} />
              <Route path="/gluten-free/morocco/:citySlug/bakeries" element={<MoroccoCategoryPage category="bakeries" />} />
              <Route path="/gluten-free/morocco/:citySlug/grocery-stores" element={<MoroccoCategoryPage category="grocery-stores" />} />
              <Route path="/gluten-free/morocco/:citySlug/gluten-free-products" element={<MoroccoCategoryPage category="gluten-free-products" />} />
              <Route path="/gluten-free/morocco/:citySlug/best-gluten-free-restaurants" element={<MoroccoBestPage />} />
              <Route path="/gluten-free/morocco/:citySlug/:slug" element={<MoroccoRestaurantPage />} />
              <Route path="/usa" element={<USA />} />
              <Route path="/japan" element={<Japan />} />
              <Route path="/gluten-free/egypt" element={<Egypt />} />
              <Route path="/gluten-free/egypt/cairo" element={<GlutenFreeCairo />} />
              <Route path="/gluten-free/egypt/alexandria" element={<GlutenFreeAlexandria />} />
              <Route path="/gluten-free/egypt/giza" element={<GlutenFreeGiza />} />
              <Route path="/gluten-free/egypt/giza/best-gluten-free-restaurants-in-giza" element={<GlutenFreeGizaBest />} />
              <Route path="/gluten-free/egypt/giza/street-food" element={<GizaCategoryPage category="street-food" />} />
              <Route path="/gluten-free/egypt/giza/bakeries" element={<GizaCategoryPage category="bakeries" />} />
              <Route path="/gluten-free/egypt/giza/grocery-stores" element={<GizaCategoryPage category="grocery-stores" />} />
              <Route path="/gluten-free/egypt/giza/gluten-free-products" element={<GizaCategoryPage category="gluten-free-products" />} />
              <Route path="/gluten-free/egypt/sharm-el-sheikh" element={<GlutenFreeSharmElSheikh />} />
              <Route path="/gluten-free/egypt/sharm-el-sheikh/best-gluten-free-restaurants-in-sharm-el-sheikh" element={<GlutenFreeSharmElSheikhBest />} />
              <Route path="/gluten-free/egypt/sharm-el-sheikh/street-food" element={<SharmElSheikhCategoryPage category="street-food" />} />
              <Route path="/gluten-free/egypt/sharm-el-sheikh/bakeries" element={<SharmElSheikhCategoryPage category="bakeries" />} />
              <Route path="/gluten-free/egypt/sharm-el-sheikh/grocery-stores" element={<SharmElSheikhCategoryPage category="grocery-stores" />} />
              <Route path="/gluten-free/egypt/sharm-el-sheikh/gluten-free-products" element={<SharmElSheikhCategoryPage category="gluten-free-products" />} />
              <Route path="/gluten-free/egypt/cairo/best-gluten-free-restaurants-in-cairo" element={<GlutenFreeCairoBest />} />
              <Route path="/gluten-free/egypt/cairo/street-food" element={<CairoCategoryPage category="street-food" />} />
              <Route path="/gluten-free/egypt/cairo/bakeries" element={<CairoCategoryPage category="bakeries" />} />
              <Route path="/gluten-free/egypt/cairo/grocery-stores" element={<CairoCategoryPage category="grocery-stores" />} />
              <Route path="/gluten-free/egypt/cairo/gluten-free-products" element={<CairoCategoryPage category="gluten-free-products" />} />
              <Route path="/gluten-free/egypt/cairo/:slug" element={<CairoRestaurantPage />} />
              <Route path="/gluten-free/egypt/alexandria/:slug" element={<AlexandriaRestaurantPage />} />
              <Route path="/gluten-free/egypt/giza/:slug" element={<GizaRestaurantPage />} />
              <Route path="/gluten-free/egypt/sharm-el-sheikh/:slug" element={<SharmRestaurantPage />} />
              <Route path="/gluten-free/mauritius" element={<Mauritius />} />
              <Route path="/gluten-free/mauritius/grand-baie" element={<GlutenFreeGrandBaie />} />
              <Route path="/gluten-free/mauritius/grand-baie/best-gluten-free-restaurants-in-grand-baie" element={<GlutenFreeGrandBaieBest />} />
              <Route path="/gluten-free/mauritius/grand-baie/:slug" element={<GrandBaieRestaurantPage />} />
              <Route path="/gluten-free/mauritius/port-louis" element={<GlutenFreePortLouis />} />
              <Route path="/gluten-free/mauritius/port-louis/best-gluten-free-restaurants-in-port-louis" element={<GlutenFreePortLouisBest />} />
              <Route path="/gluten-free/mauritius/port-louis/:slug" element={<PortLouisRestaurantPage />} />
              <Route path="/gluten-free/mauritius/flic-en-flac" element={<GlutenFreeFlicEnFlac />} />
              <Route path="/gluten-free/mauritius/flic-en-flac/best-gluten-free-restaurants-in-flic-en-flac" element={<GlutenFreeFlicEnFlacBest />} />
              <Route path="/gluten-free/mauritius/flic-en-flac/:slug" element={<FlicEnFlacRestaurantPage />} />
              <Route path="/gluten-free/mauritius/curepipe" element={<GlutenFreeCurepipe />} />
              <Route path="/gluten-free/mauritius/curepipe/best-gluten-free-restaurants-in-curepipe" element={<GlutenFreeCurepipeBest />} />
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
              <Route path="/spain/restaurant/:slug" element={<SpainRestaurantPage />} />
              <Route path="/spain/:slug" element={<SpainCityPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <SiteFooter />
          </Suspense>

      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
