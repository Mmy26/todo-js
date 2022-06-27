import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  console.log(inputText);

  // ulタグ作成
  const ul = document.createElement("ul");
  ul.className = "list-row";

  // liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);
    // 押されたボタンの親タグを削除し、完了リストに表示させる
    // TODO内容テキストを取得
    const text = completeTarget.firstElementChild.innerText;
    completeTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された親タグのボタンを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = backButton.parentNode.firstElementChild.innerText;
      // ulタグ作成
      const ul = document.createElement("ul");
      ul.className = "list-row";
      // liタグ作成
      const li = document.createElement("li");
      li.innerText = inputText;
      //button(完了)タグの生成
      const completeButton = document.createElement("button");
      completeButton.innerText = "完了";
      completeButton.addEventListener("click", () => {
        const completeTarget = completeButton.parentNode;
        document.getElementById("incomplete-list").removeChild(completeTarget);
        // 押されたボタンの親タグを削除し、完了リストに表示させる
        // TODO内容テキストを取得
        const text = completeTarget.firstElementChild.innerText;
        completeTarget.textContent = null;
        const li = document.createElement("li");
        li.innerText = text;
      });
      //button(削除)タグの生成
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "削除";
      deleteButton.addEventListener("click", () => {
        // 押されたボタンの親タグを削除
        const deleteTarget = deleteButton.parentNode;
        document.getElementById("incomplete-list").removeChild(deleteTarget);
      });
      // ulタグの子要素に各要素を設定
      ul.appendChild(li);
      ul.appendChild(completeButton);
      ul.appendChild(deleteButton);
      // 未完了リストに追加
      document.getElementById("incomplete-list").appendChild(ul);
    });
    ul.appendChild(li);
    ul.appendChild(backButton);
    document.getElementById("complete-list").appendChild(ul);
  });

  //button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押されたボタンの親タグを削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // ulタグの子要素に各要素を設定
  ul.appendChild(li);
  ul.appendChild(completeButton);
  ul.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(ul);
};

// 未完了リストに追加する
const createIncompleteList = (text) => {};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
