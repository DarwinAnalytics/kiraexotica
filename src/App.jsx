import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Footer from './components/Footer';
import HairCourses from './components/NavbarContent/HairCourses';
import { aesthetic, beautyWellnessCourses, bridalAndProfessionalCourses, hairCourses, nailArtAndExtensionsCourses } from './components/NavbarContent/CourseData';
import HairCare from './components/NavbarContent/HairCare';
import { hairTreatments } from './components/NavbarContent/HairCareData';
import { skinCare } from './components/NavbarContent/SkinCareData';
import { slimming } from './components/NavbarContent/SlimmingData';
import { medtreatment } from './components/NavbarContent/MedicalTreatmentData';
import { laserTreatment } from './components/NavbarContent/LaserData';
import SalonFranchiseApp from './components/SalonFranchiseApp';
import AboutUs from './components/AboutUs';
import SalonPackageBooking from './Pages/SalonPackageBooking';
import BeautyServicesBooking from './Pages/BeautyServicesBooking';
import Appointment from './Pages/Appointment';
function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/academy/haircourses" element={<HairCourses heading="Kira's Hair Styling Courses" description=" Explore our professional hair styling courses designed to elevate your skills" hairCourses={hairCourses}/>} />
      <Route exact path="/academy/aesthetic" element={<HairCourses heading=" Kira's Aesthetic Courses" description=" Explore our professional Aesthetic courses designed to elevate your skills" hairCourses={aesthetic}/>} />
      <Route exact path="/academy/beautycourses" element={<HairCourses heading="Kira's Beauty Courses" description=" Premier training in innovative beauty techniques for aspiring professionals.."  hairCourses={beautyWellnessCourses}/>} />
      <Route exact path="/academy/makeup" element={<HairCourses heading="Kira's Make-Up Courses" description=" Elite instruction in cutting-edge make-up skills for career success" hairCourses={beautyWellnessCourses}/>} />
      <Route exact path="/academy/bridal" element={<HairCourses heading="Kira's Bridal Courses" description=" Top-tier training in sophisticated bridal beauty skills for professional excellence." hairCourses={bridalAndProfessionalCourses}/>} />
      <Route exact path="/academy/nail" element={<HairCourses heading="Kira's Nail Art Courses" description=" Premier instruction in innovative nail art skills for career excellence."  hairCourses={nailArtAndExtensionsCourses}/>} />
    

    {/* Hair care navbar */}
    <Route exact path="/haircare/cuts" element={<HairCare hairCourses={hairTreatments}/>} />
    <Route exact path="/haircare/styling" element={<HairCare hairCourses={hairTreatments}/>} />
    <Route exact path="/haircare/color" element={<HairCare hairCourses={hairTreatments}/>} />
    <Route exact path="/haircare/spa" element={<HairCare hairCourses={hairTreatments}/>} />
    <Route exact path="/haircare/kerasmooth" element={<HairCare hairCourses={hairTreatments}/>} />
    <Route exact path="/haircare/kerabond" element={<HairCare hairCourses={hairTreatments}/>} />
    <Route exact path="/haircare/botox" element={<HairCare hairCourses={hairTreatments}/>} />
    <Route exact path="/haircare/nanoplastiatreatment" element={<HairCare hairCourses={hairTreatments}/>} />
    <Route exact path="/haircare/hairpatch" element={<HairCare hairCourses={hairTreatments}/>} />
    <Route exact path="/haircare/hairextention" element={<HairCare hairCourses={hairTreatments}/>} />

     {/* Hair care navbar */}
     <Route exact path="/skincare/facial" element={<HairCare hairCourses={skinCare}/>} />
     <Route path="/skincare/hydratingfacial" element={<HairCare hairCourses={skinCare} />} />
  <Route path="/skincare/detan" element={<HairCare hairCourses={skinCare} />} />
  <Route path="/skincare/Spa" element={<HairCare hairCourses={skinCare} />} />
  <Route path="/skincare/antiaging" element={<HairCare hairCourses={skinCare} />} />
  <Route path="/skincare/SkinTightning" element={<HairCare hairCourses={skinCare} />} />
  <Route path="skincare/pigmentation" element={<HairCare hairCourses={skinCare} />} />
  <Route path="/skincare/brightening" element={<HairCare hairCourses={skinCare} />} />

  {/* slimming data */}

  <Route path="/slimming/bodycontouring" element={<HairCare hairCourses={slimming} />} />
  <Route path="/slimming/fatreduction" element={<HairCare hairCourses={slimming} />} />
  <Route path="/slimming/cellulitetreatment" element={<HairCare hairCourses={slimming} />} />
  <Route path="/slimming/weightlossprogram" element={<HairCare hairCourses={slimming} />} />
  <Route path="/slimming/bodywraps" element={<HairCare hairCourses={slimming} />} />
  <Route path="/slimming/skintightening" element={<HairCare hairCourses={slimming} />} />
  <Route path="/slimming/slimmingconsultation" element={<HairCare hairCourses={slimming} />} />

          {/* Medical Treatment Routes */}
          <Route path="/medicaltreatment/chemicalpeels" element={<HairCare hairCourses={medtreatment} />} />
        <Route path="/medicaltreatment/acne" element={<HairCare hairCourses={medtreatment} />} />
        <Route path="/medicaltreatment/antiage" element={<HairCare hairCourses={medtreatment} />} />
        <Route path="/medicaltreatment/pigmentation" element={<HairCare hairCourses={medtreatment} />} />
        <Route path="/medicaltreatment/hyperpigmentation" element={<HairCare hairCourses={medtreatment} />} />
        <Route path="/medicaltreatment/medicatedfacial" element={<HairCare hairCourses={medtreatment} />} />
        <Route path="/medicaltreatment/carbontretment" element={<HairCare hairCourses={medtreatment} />} />
        <Route path="/medicaltreatment/skinrejuvenation" element={<HairCare hairCourses={medtreatment} />} />
        <Route path="/medicaltreatment/vaginaltightening" element={<HairCare hairCourses={medtreatment} />} />

        {/* Laser Treatment Routes */}
        <Route path="/laser/laserhairremoval" element={<HairCare hairCourses={laserTreatment} />} />
        <Route path="/laser/laserskinrejuvenation" element={<HairCare hairCourses={laserTreatment} />} />
        <Route path="/laser/laserpigmentation" element={<HairCare hairCourses={laserTreatment} />} />
        <Route path="/laser/laserscaremoval" element={<HairCare hairCourses={laserTreatment} />} />
        <Route path="/laser/lasertattoremoval" element={<HairCare hairCourses={laserTreatment} />} />
        <Route path="/laser/fractionalco2laser" element={<HairCare hairCourses={laserTreatment} />} />


        {/* franchise  component*/}
        <Route path="/franchise" element={<SalonFranchiseApp/>} />


        {/* about us  component*/}
        <Route path="/aboutus" element={<AboutUs/>} />

        {/* package payment token  */}
        <Route path="/package" element={<SalonPackageBooking/>} />

         {/* service booking payment option  */}
         <Route path="/customizepackage" element={<BeautyServicesBooking/>} />
         <Route path="/appointment" element={<Appointment/>} />

        


    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
