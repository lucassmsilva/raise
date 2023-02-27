// --- A generic list hook, a by a dev newbie on typescript
// --- Lucas Silva

import { useState } from "react";

type ActionsProps = {
  addItem: (item: any, index?: number) => void;
  removeItem: (index: number) => void;
  pushItem: (item: any) => void;
  clear: () => void;
};

export const useList = (
  initialValue: Array<any>
): [list: Array<any>, actions: ActionsProps] => {
  const [list, setList] = useState<Array<any>>([...initialValue]);

  const addItem = (item: any, index: number = 0) => {
    setList(prevState => {
      prevState.splice(index, 0, item);
      return [...prevState];
    });
  };

  const removeItem = (index: number) => {
    setList(prevState => {
      prevState.splice(index, 1);
      return [...prevState];
    });
  };

  const pushItem = (item: any) => {
    setList(prevState => [...prevState, item]);
  };

  const clear = () => setList([]);

  const actions = {
    pushItem,
    addItem,
    removeItem,
    clear
  };

  return [list, actions];
};
