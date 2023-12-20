// 範例一：聯合型別
function getSentence(words: string | number): number {
    //return words.length; // 會出錯
     return (<string>words).length; // 型別斷言寫法一
    // return (words as string).length //型別斷言寫法二
}

//範例二：DOM 取得
const txt = document.querySelector(".taskName") as HTMLInputElement;
console.log(txt.value)