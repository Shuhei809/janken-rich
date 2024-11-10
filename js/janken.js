

// グーチョキパーの選択肢を定義します
var hands = ["✊", "✌️", "✋"];

//--------------------------------------------------------------------------

// プレイヤー1のスロットを回転させる関数
function startSlot1() {

    // スロットIDを取得
    const slot = document.getElementById("slot1");

    // 選択肢が次々に表示されるアニメーション
    interval1 = setInterval(() => {
        slot.textContent = hands[Math.floor(Math.random() * hands.length)];
    }, 100);
}

// プレーヤー1のスロットを止めて、選択結果を保存する関数
function stopSlot1() {
    clearInterval(interval1);
    player1Choice = document.getElementById("slot1").textContent;
    console.log(player1Choice);
}

//--------------------------------------------------------------------------

// プレイヤー2のスロットを回転させる関数
function startSlot2() {

    // スロットIDを取得
    const slot = document.getElementById("slot2");

    // 選択肢が次々に表示されるアニメーション
    interval2 = setInterval(() => {
        slot.textContent = hands[Math.floor(Math.random() * hands.length)];
    }, 100);
}

// プレーヤー1のスロットを止めて、選択結果を保存する関数
function stopSlot2() {
    clearInterval(interval2);
    player2Choice = document.getElementById("slot2").textContent;
    console.log(player2Choice);

    // プレイヤー2のスロットが止まった後に勝敗を判定
    determineWinner();
}

//--------------------------------------------------------------------------

// 勝敗

function determineWinner() {
    if (player1Choice === player2Choice) {
        $('.result').text('引き分け')
    } else if (
        (player1Choice === "✊" && player2Choice === "✋") ||
        (player1Choice === "✌️" && player2Choice === "✊") ||
        (player1Choice === "✋" && player2Choice === "✌️")
    ) {
        $('.result').text('負け')
    } else {
        $('.result').text('勝ち')
    }
    
    
    // 勝負回数取得
    let count = localStorage.getItem("matchCount");
    if (count === null) {
        count = 0;
    } else {
        count = parseInt(count); //整数にする
    }


     // カウントをインクリメント
    count += 1;

     // key Valueを定義
    const key = `勝負${count}回目`;
    const value = $(".result").text();

    localStorage.setItem(key, value);
    
    const html = `
      <li>
        <p>${key}</p>
        <p>${value}</p>
      </li>
      `;
    $("#list").append(html);

    localStorage.setItem("matchCount", count);
}