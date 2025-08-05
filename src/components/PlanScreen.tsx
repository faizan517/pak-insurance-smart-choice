// import React, { useState } from 'react';
// import { ChevronDown, Info, ArrowLeft } from 'lucide-react';

// export default function PlanScreen() {
//   const [activeTab, setActiveTab] = useState('Medical Benefits');
//   const [selectedSIT, setSelectedSIT] = useState('3 SIT');
//   const [selectedDaycare, setSelectedDaycare] = useState('49 Daycare');
//   const [selectedHospitals, setSelectedHospitals] = useState('290 Hospitals');
//   const [maternityChecked, setMaternityChecked] = useState(false);

//   const tabs = ['Medical Benefits', 'Policy Documents', 'Claim Process', 'More Features'];

//   return (
//     <div className="min-h-screen bg-gray-100 p-2 sm:p-4 lg:p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-3 sm:mb-4">
//           <button className="flex items-center text-gray-600 hover:text-gray-800 bg-white px-2 sm:px-3 py-1 rounded border text-xs sm:text-sm">
//             <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
//             Back to plans
//           </button>
//         </div>

//         {/* Main Content */}
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//           {/* Plan Header */}
//           <div className="bg-blue-50 p-3 sm:p-4 lg:p-6">
//             <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-4 xl:gap-6">
//               {/* Left Section */}
//               <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 lg:gap-6 flex-1">
//                 {/* Logo */}
//                 <div className="bg-white p-2 rounded-lg shadow-sm flex-shrink-0 mx-auto sm:mx-0">
//                   <div className="w-16 h-16 sm:w-18 lg:w-20 lg:h-20 bg-teal-600 rounded-full flex flex-col items-center justify-center text-white">
//                     <div className="text-sm sm:text-lg lg:text-xl font-bold">EFU</div>
//                     <div className="text-xs font-medium">LIFE</div>
//                   </div>
//                 </div>

//                 {/* Plan Details */}
//                 <div className="flex-1 w-full">
//                   <div className="text-xs sm:text-sm text-gray-600 mb-1 text-center sm:text-left">EFU Life</div>
//                   <div className="text-base sm:text-lg font-semibold text-gray-800 mb-4 lg:mb-6 text-center sm:text-left">Sehat Shield - Bronze</div>

//                   {/* Coverage Grid */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-4 lg:mb-6">
//                     {/* Column 1 */}
//                     <div className="space-y-3 sm:space-y-4">
//                       <div>
//                         <div className="flex items-center mb-1 justify-center sm:justify-start">
//                           <span className="text-xs sm:text-sm text-gray-700">Hospitalization Cover</span>
//                           <Info className="w-3 h-3 ml-1 text-gray-400" />
//                         </div>
//                         <div className="font-medium text-gray-800 text-sm sm:text-base text-center sm:text-left">Rs. 1.5 lac per person</div>
//                       </div>
                      
//                       <div>
//                         <div className="text-xs sm:text-sm text-gray-700 mb-1 text-center sm:text-left">Special Investigation Tests</div>
//                         <div className="relative">
//                           <select 
//                             value={selectedSIT}
//                             onChange={(e) => setSelectedSIT(e.target.value)}
//                             className="text-xs sm:text-sm font-medium bg-white border border-gray-300 rounded px-2 sm:px-3 py-1 pr-6 sm:pr-8 focus:outline-none focus:border-blue-400 w-full"
//                           >
//                             <option>3 SIT</option>
//                             <option>5 SIT</option>
//                             <option>7 SIT</option>
//                           </select>
//                           <ChevronDown className="w-3 h-3 absolute right-2 top-2 text-gray-400 pointer-events-none" />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Column 2 */}
//                     <div className="space-y-3 sm:space-y-4">
//                       <div>
//                         <div className="flex items-center mb-1 justify-center sm:justify-start">
//                           <span className="text-xs sm:text-sm text-gray-700">Daily Room & Board Limit</span>
//                           <Info className="w-3 h-3 ml-1 text-gray-400" />
//                         </div>
//                         <div className="font-medium text-gray-800 text-sm sm:text-base text-center sm:text-left">Semi-Pvt</div>
//                       </div>
                      
//                       <div>
//                         <div className="text-xs sm:text-sm text-gray-700 mb-1 text-center sm:text-left">Daycare Surgeries</div>
//                         <div className="relative">
//                           <select 
//                             value={selectedDaycare}
//                             onChange={(e) => setSelectedDaycare(e.target.value)}
//                             className="text-xs sm:text-sm font-medium bg-white border border-gray-300 rounded px-2 sm:px-3 py-1 pr-6 sm:pr-8 focus:outline-none focus:border-blue-400 w-full"
//                           >
//                             <option>49 Daycare</option>
//                             <option>35 Daycare</option>
//                             <option>60 Daycare</option>
//                           </select>
//                           <ChevronDown className="w-3 h-3 absolute right-2 top-2 text-gray-400 pointer-events-none" />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Column 3 */}
//                     <div className="sm:col-span-2 lg:col-span-1">
//                       <div className="flex items-center mb-1 justify-center sm:justify-start">
//                         <span className="text-xs sm:text-sm text-gray-700">Cashless Treatment at</span>
//                         <Info className="w-3 h-3 ml-1 text-gray-400" />
//                       </div>
//                       <div className="relative text-center sm:text-left">
//                         <select 
//                           value={selectedHospitals}
//                           onChange={(e) => setSelectedHospitals(e.target.value)}
//                           className="font-medium text-gray-800 text-sm sm:text-base bg-transparent border-none focus:outline-none appearance-none pr-6 cursor-pointer"
//                         >
//                           <option>290 Hospitals</option>
//                           <option>250 Hospitals</option>
//                           <option>300 Hospitals</option>
//                         </select>
//                         <ChevronDown className="w-3 h-3 absolute right-0 top-1 text-gray-600 pointer-events-none" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Maternity Option */}
//                   <div className="mt-3 sm:mt-4">
//                     <label className="flex items-center text-xs sm:text-sm text-gray-700 cursor-pointer justify-center sm:justify-start">
//                       <input 
//                         type="checkbox" 
//                         checked={maternityChecked}
//                         onChange={(e) => setMaternityChecked(e.target.checked)}
//                         className="mr-2 text-blue-600 focus:ring-blue-500 rounded"
//                       />
//                       Add Maternity Cover for Rs. 15600
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Section - Price */}
//               <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm text-center w-full sm:w-auto sm:min-w-[200px] xl:min-w-[220px]">
//                 <div className="flex items-center justify-center mb-2">
//                   <span className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Rs. 13,642</span>
//                   <Info className="w-4 h-4 ml-1 text-gray-400" />
//                 </div>
//                 <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Premium/Year</p>
//                 <div className="space-y-2 sm:space-y-3">
//                   <button className="w-full bg-blue-600 text-white py-2 px-3 sm:px-4 rounded font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base">
//                     Buy
//                   </button>
//                   <button className="w-full border border-blue-600 text-blue-600 py-2 px-3 sm:px-4 rounded font-medium hover:bg-blue-50 transition-colors text-sm sm:text-base">
//                     Enquire Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Tabs */}
//           <div className="border-b border-gray-200 bg-white overflow-x-auto">
//             <nav className="flex space-x-4 sm:space-x-6 lg:space-x-8 px-3 sm:px-4 lg:px-6 min-w-max sm:min-w-0">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
//                     activeTab === tab
//                       ? 'border-blue-500 text-blue-600'
//                       : 'border-transparent text-gray-500 hover:text-gray-700'
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           {/* Medical Benefits Content */}
//           <div className="p-3 sm:p-4 lg:p-6 bg-white">
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
//               {/* Left Column */}
//               <div className="space-y-3 sm:space-y-4">
//                 <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100">
//                   <div className="flex items-center mb-2">
//                     <h3 className="font-medium text-gray-800 text-sm sm:text-base">ICU / CCU</h3>
//                     <Info className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-gray-400" />
//                   </div>
//                   <p className="text-xs sm:text-sm font-medium text-gray-700">Covered</p>
//                 </div>

//                 <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100">
//                   <div className="flex items-center mb-2">
//                     <h3 className="font-medium text-gray-800 text-sm sm:text-base">Day Care Procedures</h3>
//                     <Info className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-gray-400" />
//                   </div>
//                   <p className="text-xs sm:text-sm font-medium text-gray-700">Covered</p>
//                 </div>

//                 <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100">
//                   <div className="flex items-center mb-2">
//                     <h3 className="font-medium text-gray-800 text-sm sm:text-base">Waiting Period</h3>
//                     <Info className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-gray-400" />
//                   </div>
//                   <p className="text-xs sm:text-sm font-medium text-gray-700">15 days</p>
//                 </div>
//               </div>

//               {/* Middle Column */}
//               <div className="space-y-3 sm:space-y-4">
//                 <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100">
//                   <div className="flex items-center mb-2">
//                     <h3 className="font-medium text-gray-800 text-sm sm:text-base">Ambulance Services Coverage</h3>
//                     <Info className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-gray-400" />
//                   </div>
//                   <p className="text-xs sm:text-sm font-medium text-gray-700">Covered</p>
//                 </div>

//                 <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100">
//                   <div className="flex items-center mb-2">
//                     <h3 className="font-medium text-gray-800 text-sm sm:text-base">Maternity</h3>
//                     <Info className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-gray-400" />
//                   </div>
//                   <p className="text-xs sm:text-sm text-gray-700">Pay additional Rs 15,800 and get covered for up to Rs 100,000</p>
//                 </div>
//               </div>

//               {/* Right Column */}
//               <div className="space-y-3 sm:space-y-4 md:col-span-2 xl:col-span-1">
//                 <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100">
//                   <div className="flex items-center mb-2">
//                     <h3 className="font-medium text-gray-800 text-sm sm:text-base">Additional Limits for Accidental Emergencies</h3>
//                     <Info className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-gray-400" />
//                   </div>
//                   <p className="text-xs sm:text-sm font-medium text-gray-700">Covered</p>
//                 </div>

//                 <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100">
//                   <div className="flex items-center mb-2">
//                     <h3 className="font-medium text-gray-800 text-sm sm:text-base">Freelook Period</h3>
//                     <Info className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-gray-400" />
//                   </div>
//                   <p className="text-xs sm:text-sm font-medium text-gray-700">14 days</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }