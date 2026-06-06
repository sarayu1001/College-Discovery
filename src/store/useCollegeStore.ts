"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CollegeStore {
  saved: string[];
  addCollege: (id: string) => void;
  removeCollege: (id: string) => void;
  isSaved: (id: string) => boolean;
}

export const useCollegeStore = create<CollegeStore>()(
  persist(
    (set, get) => ({
      saved: [],

      addCollege: (id) =>
        set((state) => ({
          saved: [...state.saved, id],
        })),

      removeCollege: (id) =>
        set((state) => ({
          saved: state.saved.filter(
            (collegeId) => collegeId !== id
          ),
        })),

      isSaved: (id) => get().saved.includes(id),
    }),
    {
      name: "college-storage",
    }
  )
);