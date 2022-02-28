import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
const About = lazy(() => import('./pages/about'));
const SearchCollection = lazy(() => import('./pages/search'));
const Browse = lazy(() => import('./pages/browse'));
const NotFound = lazy(() => import('./pages/notfound'));
const EmbeddedBook = lazy(() => import('./pages/embedded-book'));
const ViewerMirador = lazy(() => import('./pages/viewer-mirador'));

export default function App(props) {
  return (
    <>
     <Routes>
       <Route path="/" element={<Layout label={props.label} />}>
         <Route index element={<Home />} />
         <Route
           path="/about"
           element={
             <Suspense fallback={<>...</>}>
               <About />
             </Suspense>
           }
         />
         <Route
           path="/browse"
           element={
             <Suspense fallback={<>...</>}>
               <Browse />
             </Suspense>
           }
         />
         <Route
           path="/search"
           element={
             <Suspense fallback={<>...</>}>
               <SearchCollection />
             </Suspense>
           }
         />
         <Route
           path="books/:identifier"
           element={
             <Suspense fallback={<>...</>}>
               <EmbeddedBook />
             </Suspense>
           }
         />
         <Route
          path="viewer/mirador/:identifier"
          element={
            <Suspense fallback={<>...</>}>
              <ViewerMirador />
            </Suspense>
          }
        />
         <Route
           path="*" element={
             <Suspense fallback={<>...</>}>
               <NotFound />
             </Suspense>
           }
         />
       </Route>
     </Routes>
    </>
  );
}
