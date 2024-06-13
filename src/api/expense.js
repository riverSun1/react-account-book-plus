import axios from "axios";

const JSON_SERVER_URL = import.meta.env.VITE_JSON_SERVER_URL;

export const getExpenses = async () => {
  try {
    const response = await axios.get(JSON_SERVER_URL + "/expenses");
    return response.data;
  } catch {
    alert("데이터 로드 실패");
  }
};

export const getExpense = async ({ queryKey }) => {
  // [_, id] = queryKey;
  try {
    const response = await axios.get(
      JSON_SERVER_URL + `/expenses/${queryKey[1]}`
    );
    return response.data;
  } catch {
    alert("데이터 로드 실패");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const response = await axios.post(
      JSON_SERVER_URL + "/expenses",
      newExpense
    );
    return response.data;
  } catch (err) {
    //console.log(err);
    alert("데이터 작성 실패");
  }
};

export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const response = await axios.put(JSON_SERVER_URL + `/expenses/${id}`, rest);
    return response.data;
  } catch (err) {
    //console.log(err);
    alert("데이터 수정 실패");
  }
};

export const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(JSON_SERVER_URL + `/expenses/${id}`);
    return response.data;
  } catch (err) {
    //console.log(err);
    alert("데이터 삭제 실패");
  }
};
