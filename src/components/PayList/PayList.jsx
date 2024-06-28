import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetExpense } from "../../hooks/query/useExpenseQuery";
import {
  ListItem,
  NoListItem,
  PayListComponent,
  StyleText,
} from "./PayList.styled";

const PayList = () => {
  const navigate = useNavigate();
  // const datas = useSelector((state) => state.account.datas);
  const selectedMonth = useSelector((state) => state.month.selectedMonth);

  // const {
  //   data: expenses = [],
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["expenses"],
  //   queryFn: getExpenses,
  // });
  const { expenses, isPending, error } = useGetExpense();

  // 데이터를 로딩 중일 때 표시할 내용
  if (isPending) return <div>Loading...</div>;

  // 에러가 발생했을 때 표시할 내용
  if (error) return <div>Error: {error.message}</div>;

  //console.log(expenses);

  const handleUpdatePost = (data) => {
    navigate(`/update/${data.id}`, {
      state: {
        id: data.id,
        date: data.date,
        item: data.item,
        content: data.content,
        expense: data.expense,
      },
    });
  };

  const filteredData = expenses.filter((expense) => {
    const dataMonth = expense.date.split("-")[1];
    const zeroSelectedMonth =
      selectedMonth < 10 ? `0${selectedMonth}` : selectedMonth;
    return dataMonth === zeroSelectedMonth;
  });

  return (
    <PayListComponent>
      {filteredData.length > 0 ? (
        filteredData.map((data) => (
          <ListItem key={data.id} onClick={() => handleUpdatePost(data)}>
            <p>{data.date}</p>
            <p>
              {data.item} - {data.content}
            </p>
            <StyleText>{data.expense}원</StyleText>
          </ListItem>
        ))
      ) : (
        <NoListItem>지출이 없습니다.</NoListItem>
      )}
    </PayListComponent>
  );
};

export default PayList;
