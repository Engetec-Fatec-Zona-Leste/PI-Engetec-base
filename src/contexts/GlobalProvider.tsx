'use client';

import React, { createContext, useContext, useState } from 'react';

export interface loginI {
	login(user: string, pass: string): Promise<boolean>;
}
interface GloblalContextData {
	logged?: boolean;
	setLogged(logged: boolean): void;
	login(user: string, pass: string): Promise<boolean>;
}

interface GlobalProviderProps {
	children: React.ReactNode;
}

export const GloblalContext = createContext<GloblalContextData>(
	{} as GloblalContextData
);

const GlobalProvider = ({ children }: GlobalProviderProps) => {
	const [logged, setLogged] = useState(false);

	async function login(user: string, password: string): Promise<boolean> {
		const res = await fetch('https://...');
        
		if (!res.ok) {
			alert('Usuário não autorizado!');
			setLogged(false);
			return false;
		} else {
            setLogged(true);
            return true;
        }
	}

	return (
		<GloblalContext.Provider
			value={{
				login,
				logged,
				setLogged,
			}}
		>
			{children}
		</GloblalContext.Provider>
	);
};

function useGlobalState() {
    const context = useContext(GloblalContext);
  
    if (!context) {
      throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
  
    return context;
  }
  

export default useGlobalState;
