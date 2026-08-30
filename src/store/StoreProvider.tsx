"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Provider, useDispatch } from "react-redux";
import { fetchColleges } from "./slices/collegeSlice";
import { makeStore, type AppDispatch, type AppStore } from "./store";

function CollegeDataLoader() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchColleges());
  }, [dispatch]);

  return null;
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [store] = useState<AppStore>(makeStore);

  return (
    <Provider store={store}>
      <CollegeDataLoader />
      {children}
    </Provider>
  );
}
