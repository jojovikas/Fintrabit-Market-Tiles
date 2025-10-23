import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadInstruments } from "../store/instrumentsSlice";
import type { RootState, AppDispatch } from "../store";

const FetchData = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error } = useSelector((state: RootState) => state.instruments);

  useEffect(() => {
    dispatch(loadInstruments());
  }, [dispatch]);

  if (loading) return <div>Loading instruments...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>data</h1>
    </div>
  );
};

export default FetchData;
