import { useState, useEffect, useCallback } from "react";

const usePoems = () => {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPoems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_url}/poems`);
      if (!response.ok) {
        throw new Error("Failed to fetch poems");
      }
      const data = await response.json();
      setPoems(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPoems();

    // Cleanup function if needed
    return () => {
      // Perform cleanup here if needed
    };
  }, [fetchPoems]);

  return { poems, loading, error, refetch: fetchPoems };
};

export default usePoems;
