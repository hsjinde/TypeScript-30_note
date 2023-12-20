// 範例一：聯合型別
function getSentence(words) {
    //return words.length; // 會出錯
    return words.length; // 型別斷言寫法一
    // return (words as string).length //型別斷言寫法二
}
//範例二：DOM 取得
var txt = document.querySelector(".taskName");
console.log(txt.value);
