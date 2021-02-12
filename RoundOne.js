const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rlWithPromise = (question) => {
  return new Promise((resolve, reject) => {
    rl.question("", (data) => {
      resolve(data);
    });
  });
};

const main = async () => {
  let inputText = await rlWithPromise("");
  let inputTextLength = inputText.length;
  let midText = parseInt(inputTextLength / 2);
  for (let i = 0; i < inputTextLength; i++) {
    let text = "";
    for (let j = i; j < inputTextLength - 1; j++) {
      text = text + "  ";
    }
    for (let l = -1, k = midText; l < i; l++) {
        let flag = 0;
      if (k < inputTextLength - 1 || k < midText) {
        text += inputText[k] + " ";
        // k++;
      } if (k == inputTextLength - 1) {
          flag = 1
        text += inputText[k] + " ";
        k = 0;
      }
      if(flag == 0) k++
    }
    console.log(text);
  }
  rl.close();
};

main();
