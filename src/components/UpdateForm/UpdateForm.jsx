import { useEffect, useRef } from "react";
//import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useExpenseMutation } from "../../hooks/mutation/useExpenseMutation";
import { useGetExpense } from "../../hooks/query/useExpenseQuery";
import {
  BackButton,
  Container,
  DeleteButton,
  UpdateButton,
  UpdateComponent,
  UpdateInput,
} from "./UpdateForm.styled";

const UpdateForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const userInfoFromState = { ...location.state };
  const { isPending, error } = useGetExpense();
  const { editMutation, deleteMutation } = useExpenseMutation();

  // const {
  //   data: userInfo,
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["expenses", id],
  //   queryFn: getExpense,
  // });

  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const expenseRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (
      userInfoFromState &&
      dateRef.current &&
      itemRef.current &&
      expenseRef.current &&
      contentRef.current
    ) {
      dateRef.current.value = userInfoFromState.date || "";
      itemRef.current.value = userInfoFromState.item || "";
      expenseRef.current.value = userInfoFromState.expense || "";
      contentRef.current.value = userInfoFromState.content || "";
    }
  }, [userInfoFromState]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    deleteMutation.mutate(id);
    alert("삭제가 완료되었습니다.");
  };

  // const mutationEdit = useMutation({
  //   mutationFn: putExpense,
  //   onSuccess: () => {
  //     navigate("/");
  //     queryClient.invalidateQueries(["expense"]);
  //   },
  // });

  const handleUpdate = () => {
    const date = dateRef.current.value;
    const item = itemRef.current.value;
    const expense = expenseRef.current.value;
    const content = contentRef.current.value;

    // 유효성 검사
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      alert("날짜를 YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    }
    if (!item || parseFloat(expense) <= 0) {
      alert("유효한 항목과 금액을 입력해주세요.");
      return;
    }
    const updatedData = {
      id: id,
      date: date,
      item: item,
      expense: expense,
      content: content,
    };
    editMutation.mutate(updatedData);
    alert("수정이 완료되었습니다.");
  };

  // const mutationDelete = useMutation({
  //   mutationFn: deleteExpense,
  //   onSuccess: () => {
  //     navigate("/");
  //     queryClient.invalidateQueries(["expense"]);
  //   },
  // });

  // 데이터를 로딩 중일 때 표시할 내용
  if (isPending) return <div>Loading...</div>;

  // 에러가 발생했을 때 표시할 내용
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <UpdateComponent>
        <label htmlFor="inputDate">날짜 </label>
        <UpdateInput type="text" id="inputDate" ref={dateRef} />
        <label htmlFor="inputItem"> 항목 </label>
        <UpdateInput type="text" id="inputItem" ref={itemRef} />
        <label htmlFor="inputExpense"> 금액 </label>
        <UpdateInput type="text" id="inputExpense" ref={expenseRef} />
        <label htmlFor="inputContent"> 내용 </label>
        <UpdateInput type="text" id="inputContent" ref={contentRef} />
        <UpdateButton type="button" onClick={handleUpdate}>
          수정
        </UpdateButton>
        <DeleteButton type="button" onClick={handleDelete}>
          삭제
        </DeleteButton>
        <BackButton type="button" onClick={handleBack}>
          뒤로 가기
        </BackButton>
      </UpdateComponent>
    </Container>
  );
};

export default UpdateForm;
