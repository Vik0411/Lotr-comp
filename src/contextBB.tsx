import React, { useState, ReactNode, Dispatch, SetStateAction } from "react";

interface BBNameObject {
  boonName: string;
  burdenName: string;
}

export interface BBContextInterface {
  bBNameObject: BBNameObject;
  setBBNameObject: Dispatch<SetStateAction<BBNameObject>>;
}

const defaultBB: BBContextInterface = {
  bBNameObject: { boonName: "", burdenName: "" },
  setBBNameObject: () => {},
};

const BBContext = React.createContext(defaultBB);

type LotrProviderProps = {
  children: ReactNode;
};

function BBProvider({ children }: LotrProviderProps) {
  const [bBNameObject, setBBNameObject] = useState(defaultBB.bBNameObject);

  return (
    <BBContext.Provider value={{ bBNameObject, setBBNameObject }}>
      {children}
    </BBContext.Provider>
  );
}

export { BBContext, BBProvider };
