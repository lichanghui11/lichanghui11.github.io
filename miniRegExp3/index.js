/*
1, woker计算正则 (包括分组， 零宽断言)
2, 将正则高亮
3, 还原光标位置
4, 调整title位置
*/




// 取得元素DOM;
let testBtn = document.querySelector('.run'); //测试按钮；
let inputReg = document.querySelector('#inputReg');//正则输入；
let output = document.querySelector('.result'); //字符串输入与输出；
let flagInput = document.querySelector('.flags'); // 拿到标志位的容器;
let state = document.querySelector('div.input span.state'); //拿到状态span标签；

//--------事件监听区域--
testBtn.addEventListener('click', run); //监听TEST按钮； 


//--------辅助函数区域---
function run() {
  let flags = getFlags();
  let string = output.textContent;
  let re = new RegExp(inputReg.value, flags)
  getMatchesFromWorker(re, string, (matches) => {
    state.id = 'done', state.textContent = 'Done'; // 更新状态；

    let html = '';
    let lastLastIndex = 0;
    let matchIndex = 0; 
    for (let match of matches) {
      html += string.slice(lastLastIndex, match.index);
      html += highLightMatch(match, matchIndex);
      lastLastIndex = match.index + match.length;
      matchIndex++;
    }
    html += string.slice(lastLastIndex);
  }, () => {
    setTimeout(() => {
      state.id = 'timeout', state.textContent = 'Timeout!'; // 更新状态；
    }, 2000);
  })
}

function highLightMatch(match, matchIndex) {
  //该函数将匹配的分组高亮；
  let info;
  if (match[0].length === 0) {
    info = [
      `Match ${matchIndex}`,
      `------`,
      `Group 0: empty string`,
      `Pos: ${match.index}-${match.index}`
    ].join('\n');
    return `<b id="zero-width-assertion" data-title="${info}"></b>`
  }
  let helper = new Array(match[0].length + 1).fill('');
  for (let index of match.indices) {
    let i = index[0] - match[0].length; 
    let j = index[1] - match[0].length;
    helper[i] += '<b>';
    helper[j] = '</b>' + helper[j];
  }
  let res = '';
  for (let i = 0; i < match[0].length; i++) {
    res += helper[i]; 
    res += match[0][i];
  }
  res += helper[helper.length - 1];
  return res;
}

let flags = ['g', 'i', 'm', 'd', 'x', 's', 'u']
function getFlags() {
  let res = '';
  let flags = flagInput.getElementsByTagName('input');
  flags = Array.from(flags);
  flags.filter((item) => {
    if (item.checked) res += item.name;
  });
  return res;
}

function getMatchesFromWorker(re, string, successFunc, failedFunc) {
  let worker = new Worker('./worker.js');
  let data;
  setTimeout(() => {
    state.id = 'processing', state.textContent = 'Processing...'; // 更新状态；
  }, 500);

  let received = false; //是否成功接收来自worker的消息； 
  worker.postMessage({
    re: re,
    string: string
  });
  worker.addEventListener('message', e => {
    received = true;
    worker.terminate();
  })
  if (received) {
    successFunc(data);
  } else {
    failedFunc(data);
  }
}
