"use client";

import { useUser as useStackUser, useStackApp, StackClientApp } from "@stackframe/stack";

export { useStackApp };

// Re-export the useUser hook
export const useUser = useStackUser;

// Helper to check if user is authenticated
export function useIsAuthenticated() {
  const user = useStackUser();
  return user !== null;
}

// Helper to require authentication (redirects if not authenticated)
export function useRequireAuth() {
  return useStackUser({ or: "redirect" });
}
