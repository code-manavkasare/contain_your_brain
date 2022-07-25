import React, {useContext} from 'react';

export const DataContext = React.createContext({});

export const DataProvider = ({children}) => {
  const contextValue = {};

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
