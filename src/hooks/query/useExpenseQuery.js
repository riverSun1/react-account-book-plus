import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../../api/expense";

export const useGetExpense = () => {
  const {
    data: expenses = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });

  return { expenses, isPending, error };
};
