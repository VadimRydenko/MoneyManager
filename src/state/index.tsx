import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { Expense, UserData } from '../core/types';

interface AppContextData {
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
  addCurrentExpense: (data: Expense) => void;
  editCurrentExpense: (data: Expense) => void;
  deleteExpense: (id: string) => void;
  loadExpense: (id: SetStateAction<UserData>) => void;
}

interface StateProviderProps {
  children: React.ReactNode;
}

export const StateContext = createContext<AppContextData | null>(null);

export const StateProvider = ({ children }: StateProviderProps) => {
  const [userData, setUserData] = useState<UserData>({ userId: '', data: [] });

  const loadExpense = (userData: SetStateAction<UserData>) => {
    setUserData(userData);
  };

  const addCurrentExpense = (data: Expense) => {
    setUserData({
      ...userData,
      data: [...userData?.data, data],
    });
  };

  const editCurrentExpense = (data: Expense) => {
    const itemIndex = userData?.data.findIndex(item => item.id === data.id);
    setUserData({
      ...userData,
      ...(userData.data[itemIndex] = data),
    });
  };
  const deleteExpense = (id: string) => {
    const newData = userData.data.filter(item => id !== item.id);

    setUserData({
      ...userData,
      data: newData,
    });
  };

  return (
    <StateContext.Provider
      value={{
        userData,
        loadExpense,
        setUserData,
        addCurrentExpense,
        editCurrentExpense,
        deleteExpense,
      }}>
      {children}
    </StateContext.Provider>
  );
};
