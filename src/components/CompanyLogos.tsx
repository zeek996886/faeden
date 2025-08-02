@@ .. @@
 import React from 'react';

 const CompanyLogos = () => {
-  const companies = [
-    { name: 'Perrier', logo: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
-    { name: 'American Express', logo: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
-    { name: 'Bosch', logo: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
-    { name: 'Uber', logo: 'https://images.pexels.com/photos/1006211/pexels-photo-1006211.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
-    { name: 'eBay', logo: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
-    { name: 'Lufthansa', logo: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
-    { name: 'Porsche', logo: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
-    { name: 'Vodafone', logo: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' },
-    { name: 'Sixt', logo: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop' }
+  const companies = [
+    { name: 'AMD', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-AMD.png' },
+    { name: 'American Express', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-American-Express.png' },
+    { name: 'Bosch', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654ba70_Client-Bosch.png' },
+    { name: 'Uber', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654ba70_Client-Uber.png' },
+    { name: 'eBay', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654ba70_Client-ebay.png' },
+    { name: 'Lufthansa', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654ba70_Client-Lufthansa.png' },
+    { name: 'Porsche', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Porsche.png' },
+    { name: 'Personio', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Personio.png' },
+    { name: 'Vodafone', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Vodafone.png' },
+    { name: 'Sixt', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Sixt.png' },
+    { name: 'RedBull', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Redbull.png' },
+    { name: 'Tommy Hilfiger', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Tommy-Hilfiger.png' },
+    { name: 'Babbel', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Babbel.png' },
+    { name: 'Seiko', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Seiko.png' },
+    { name: 'Perrier', logo: 'https://cdn.prod.website-files.com/6364e4e0baec60a3a1eff938/654a11e6_Client-Pierriere.png' }
   ];

+  // Duplicate the array for seamless infinite scroll
+  const duplicatedCompanies = [...companies, ...companies];
+
   return (
     <div className="bg-white py-16">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <p className="text-center text-gray-600 mb-12 text-lg">
           Used by the world largest 1,000 companies
         </p>
         
-        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center opacity-60">
-          {companies.map((company, index) => (
-            <div key={index} className="flex justify-center">
-              <div className="w-20 h-12 bg-gray-200 rounded flex items-center justify-center">
-                <span className="text-xs font-semibold text-gray-600">{company.name}</span>
+        <div className="relative overflow-hidden">
+          <div className="flex animate-scroll space-x-12 items-center">
+            {duplicatedCompanies.map((company, index) => (
+              <div key={index} className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
+                <img
+                  src={company.logo}
+                  alt={`${company.name} logo`}
+                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
+                  onError={(e) => {
+                    const target = e.target as HTMLImageElement;
+                    target.style.display = 'none';
+                    const fallback = target.nextElementSibling as HTMLElement;
+                    if (fallback) fallback.style.display = 'flex';
+                  }}
+                />
+                <div className="hidden w-20 h-12 bg-gray-200 rounded items-center justify-center">
+                  <span className="text-xs font-semibold text-gray-600">{company.name}</span>
+                </div>
               </div>
-            </div>
-          ))}
+            ))}
+          </div>
         </div>
       </div>
+      
+      <style jsx>{`
+        @keyframes scroll {
+          0% {
+            transform: translateX(0);
+          }
+          100% {
+            transform: translateX(-50%);
+          }
+        }
+        
+        .animate-scroll {
+          animation: scroll 30s linear infinite;
+        }
+        
+        .animate-scroll:hover {
+          animation-play-state: paused;
+        }
+      `}</style>
     </div>
   );
 };