import { useState, createContext, useContext } from "react";

const GitContext = createContext();

export const GitProvider = ({children}) => {
    const [git, setGit] = useState([]);

 

    return <GitContext.Provider value={{git, setGit}}>
      {children}
    </GitContext.Provider>
}

export const useGitContext = () => {
    return useContext(GitContext);
}