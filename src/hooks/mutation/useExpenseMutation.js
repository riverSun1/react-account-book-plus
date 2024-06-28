import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteExpense, postExpense, putExpense } from "../../api/expense";

export const useExpenseMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const addMutation = useMutation({
    mutationFn: postExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]); // 쿼리캐시삭제
      navigate(0);
    },
  });

  const editMutation = useMutation({
    mutationFn: putExpense,
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries(["expense"]);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries(["expense"]);
    },
  });

  return { addMutation, editMutation, deleteMutation };
};
