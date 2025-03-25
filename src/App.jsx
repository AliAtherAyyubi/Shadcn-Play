import './App.css'
// import { Calendar } from "@/components/ui/calendar"
import { IconCloudDemo } from './components/iconcloud'
import { LensDemo } from './components/lens'
// import { Globe } from "@/components/magicui/globe";
function App() {
  
  return (
    <>
    <div className='text-4xl text-center font-bold text-pink-400 '>
      Shadcn Practice
     </div>
    <div className='flex justify-center'>
    <IconCloudDemo/>

    </div>

    <LensDemo/>
     
     
    {/* <GlobeDemo/> */}
    {/* <Calendar
      mode="single"
      className="rounded-md border w-2xs"
    /> */}
    </>
  )
}

export default App
