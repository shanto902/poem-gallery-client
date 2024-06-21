import { useState, useEffect, useCallback } from "react";

const usePoets = () => {
  const [poets, setPoets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPoets = useCallback(async () => {
    setLoading(true);
    setError(null); // Clear any previous errors
    try {
      const response = await fetch(`${import.meta.env.VITE_url}/poets`);
      if (!response.ok) {
        throw new Error("Failed to fetch poets");
      }
      const data = await response.json();
      setPoets(data); // Update poets state with fetched data
    } catch (error) {
      setError(error); // Set error state if fetch fails
    } finally {
      setLoading(false); // Always set loading state to false after fetch completes
    }
  }, []);

  useEffect(() => {
    fetchPoets();
  }, [fetchPoets]); // Ensure useEffect triggers when fetchPoets function reference changes

  const refetch = () => {
    fetchPoets(); // Function to manually trigger data refetch
  };

  return { poets, loading, error, refetch };
};

export default usePoets;
