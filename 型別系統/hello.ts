//JASON

const jasonString =`{"x":10, "y":20}`
const parsedData = JSON.parse(jasonString);
console.log(parsedData);

const jsonString = '{"x":10,"y":20}'
const parsedData = JSON.parse(jsonString);

// 範例二
// 使用 fetch 取得資料，返回的資料類型為 any
async function fetchUserData(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json(); // data 是 any 類型
    return data;
  } catch (error) {
    console.error("取得資料時出錯:", error);
    return null;
  }
}

// 呼叫函式並處理返回的資料
async function handleUserData() {
  const url = 'https://api.example.com/user';
  const userData = await fetchUserData(url); // userData 是 any 類型
  if (userData) {
    console.log(userData); // 直接輸出取得的資料
  }
}

handleUserData();