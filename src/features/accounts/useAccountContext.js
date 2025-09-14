import { useContext } from 'react';
import { AccountContext } from './AccountContext';

export const useAccountContext = () => {
    return useContext(AccountContext);
};
