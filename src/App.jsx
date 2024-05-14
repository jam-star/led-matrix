import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { lazy } from 'react'
import Led from './Led.jsx'
function App() {
  const Led = lazy(()=> delayForDemo(import('./Led.jsx')) )
  const LazyLoading = lazy(() => delayForDemo(import('./LazyLoading.jsx')));
  const [count, setCount] = useState(0)

  return (
    <>
    <Suspense fallback={
<div className="skeleton w-full h-96"></div>

}>
  <Led></Led>
  {/* <LazyLoading></LazyLoading> */}
</Suspense>


    </>
  )
}

export default App

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 5000);
  }).then(() => promise);
}