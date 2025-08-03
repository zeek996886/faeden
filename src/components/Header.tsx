@@ .. @@
           <nav className="hidden md:flex space-x-8">
             <div className="relative group">
               <button 
+                onMouseEnter={() => setIsProductsOpen(true)}
+                onMouseLeave={() => setIsProductsOpen(false)}
                 className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
               >
                 Products
-                onMouseEnter={() => setIsProductsOpen(true)}
-                onMouseLeave={() => setIsProductsOpen(false)}
                 <ChevronDown className="ml-1 h-4 w-4" />
               </button>
               {isProductsOpen && (
@@ .. @@
                   onMouseLeave={() => setIsProductsOpen(false)}
                 >
                   <a href="#ads-manager" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
-                    <div className="font-medium">Ads Manager</div>
-                    <div className="text-xs text-gray-500">Launch and manage DOOH campaigns</div>
-                  </a>
-                  >
                     <div className="font-semibold text-gray-900 mb-1">Ads Manager</div>
                     <div className="text-xs text-gray-500">Launch and manage DOOH campaigns with precision targeting</div>
                   </a>
@@ .. @@
             </div>
             <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
-              href="/pricing"
+              Pricing
             </a>
             <div className="relative group">
               <button className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
@@ .. @@
               <div className="space-y-1">
                 <div className="px-3 py-2 text-base font-medium text-gray-700">Products</div>
                 <a
-                  href="/ads-manager"
+                  href="#ads-manager"
                   className="block px-6 py-2 text-sm text-gray-600 hover:text-gray-900"
                 >
-                  Screen Manager
+                  Ads Manager
+                </a>
+                <a
+                  href="#screen-manager"
+                  className="block px-6 py-2 text-sm text-gray-600 hover:text-gray-900"
+                >
+                  Screen Manager
                 </a>
               </div>
-              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
-                Products
-              </a>
               <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
-                href="/pricing"
-              </a>
-              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                 Pricing
               </a>
               <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900">