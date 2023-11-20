// "use client"
// import React, { createContext, useState, useCallback } from 'react';

// export const BlogContext = createContext();

// export const BlogProvider = ({ children }) => {
//   const [shouldReload, setShouldReload] = useState(false);

//   const triggerReload = useCallback(() => {
//     setShouldReload(true);
//   }, []);

//   const resetReload = useCallback(() => {
//     setShouldReload(false);
//   }, []);

//   return (
//     <BlogContext.Provider value={{ shouldReload, triggerReload, resetReload }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };
