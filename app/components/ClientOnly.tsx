"use client";
import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

// NB this component is used to prevent having the hydration problem
// thus now we are ensuring that the components within this one
// will only be displayed once this one has been mounted to the DOM
// NB: We are also only wrapping our 'use client' components

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
