import { create } from "zustand";

interface CollegeStore {
  saved: string[];

  addSaved: (id: string) => void;

  removeSaved: (id: string) => void;
}

export const useCollegeStore = create<CollegeStore>((set) => ({
  saved: [],

  addSaved: (id) =>
    set((state) => ({
      saved: [...state.saved, id],
    })),

  removeSaved: (id) =>
    set((state) => ({
      saved: state.saved.filter(
        (item) => item !== id
      ),
    })),
}));