import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = async (search) => {
    setLoading(true);
    const { contents } = await fetchDataFromApi(`search/?q=${search}`);
    setSearchResults(contents);
    setLoading(false);
  };

  return (
    <AppContext.Provider value={{ loading,setSelectedCategory,selectedCategory, setLoading, searchResults }}>
      {children}
    </AppContext.Provider>
  );
};

const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, GlobalContext };
