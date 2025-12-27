import { BookOpen, Instagram, Twitter } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SecondeFooter() {
    const navigate = useNavigate();
  return (
    <footer className="relative z-10 mt-16 border-t border-white/10">
       <div className="container mx-auto px-4 sm:px-6 py-10">
         <div className="max-w-5xl mx-auto">
           <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="space-y-3 text-center md:text-left">
               <h3 className="text-xl font-bold text-white">LB Consulting</h3>
               <p className="text-sm text-gray-400 leading-relaxed">
                 LB Consulting is an online marketing agency that becomes your marketing department on-demand.
               </p>
               <button
                 onClick={() => navigate("/")}
                 className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
               >
                 CEO – L.BENYAHIA
               </button>
             </div>


             <div className="flex flex-col items-center md:items-end space-y-3">
               <p className="text-sm text-gray-400 font-medium">Connect With Us</p>
               <div className="flex gap-3">
                 <button
                   onClick={() => navigate("/blog")}
                   className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
                 >
                   <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                 </button>
                 <a
                   href="https://x.com/lbbenyahia"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
                 >
                   <Twitter className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                 </a>
                 <a
                   href="https://www.instagram.com/lb_consulting_/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
                 >
                   <Instagram className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                 </a>
               </div>
             </div>
           </div>


           <div className="mt-8 pt-6 border-t border-white/5 text-center">
             <p className="text-xs text-gray-500">
               © 2025 LB Consulting. All rights reserved.
             </p>
           </div>
         </div>
       </div>
     </footer>
  )
}
