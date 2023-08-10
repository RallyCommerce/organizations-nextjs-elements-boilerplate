import React from 'react'

interface ContextShape {
    rally: any;
    // setRally: React.Dispatch<React.SetStateAction<any | null>>;

}

export const Context = React.createContext<ContextShape>({
    rally: null
})
