import { QueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { postExpense } from "../../api/expense";
import {
  InformButton,
  InformComponent,
  InfromInput,
  LabelComponent,
} from "./AddDataForm.styled";

const AddDataForm = () => {
  const navigate = useNavigate();
  const queryClient = new QueryClient();
  const mutation = useMutation({
    mutationFn: postExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]); // 쿼리캐시삭제
      navigate(0);
    },
  });

  const [date, setDate] = useState(`2024-01-01`);
  const [item, setItem] = useState("");
  const [expense, setExpense] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    // 날짜 유효성 검사
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      alert("날짜를 YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    }
    // 항목, 금액 유효성 검사
    const parsedAmount = parseInt(expense, 10);
    if (!item || parsedAmount <= 0) {
      alert("유효한 항목과 금액을 입력해주세요.");
      return;
    }

    const newExpense = {
      id: uuidv4(),
      date: date,
      item: item,
      expense: expense,
      content: content,
    };
    mutation.mutate(newExpense);

    setDate("");
    setItem("");
    setExpense("");
    setContent("");

    alert("저장되었습니다.");
  };

  return (
    <div>
      <InformComponent>
        <LabelComponent>
          <label htmlFor="inputDate">날짜 </label>
          <InfromInput
            type="text"
            id="inputDate"
            placeholder="지출 날짜"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </LabelComponent>
        <LabelComponent>
          <label htmlFor="inputItem"> 항목 </label>
          <InfromInput
            type="text"
            id="inputItem"
            placeholder="지출 항목"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </LabelComponent>
        <LabelComponent>
          <label htmlFor="inputExpense"> 금액 </label>
          <InfromInput
            type="text"
            id="inputExpense"
            placeholder="지출 금액"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
        </LabelComponent>
        <LabelComponent>
          <label htmlFor="inputContent"> 내용 </label>
          <InfromInput
            type="text"
            id="inputContent"
            placeholder="지출 내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </LabelComponent>
        <InformButton type="button" onClick={handleSubmit}>
          저장
        </InformButton>
      </InformComponent>
      {/* {console.log(datas)} */}
    </div>
  );
};

export default AddDataForm;
