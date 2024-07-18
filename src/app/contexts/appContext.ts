import { createContext } from "react";

interface ProviderContextType{
  valueInput: any;
  setValueInput: React.Dispatch<React.SetStateAction<any>>;
  itemList: any;
  setItemList: React.Dispatch<React.SetStateAction<any>>;
  itemHandler: any;
  id: any;
  setId: React.Dispatch<React.SetStateAction<any>>;
}

const AppContext = createContext<ProviderContextType | any>(undefined);

export default AppContext;
