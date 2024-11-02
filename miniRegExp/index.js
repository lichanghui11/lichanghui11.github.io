let button = document.getElementById('submit');
let reInput = document.getElementById('reInput');
/*
reInput.addEventListener('keyup', function run() {
  let flag = getFlags();
  let reString = reInput.value;
  if (!reString) return;
  try {
    var re = new RegExp(reString, flag);
  } catch (e) {
    if (e instanceof TypeError) {
      var tips = document.getElementById('tips');
      tips.innerText = e.message;
      console.log(tips.innerText);
      return;
    } else {
      throw e;
    }
  }
  let testString = testInput.value;
  let html = '';
  let lastLastIndex = 0;
  while (match = re.exec(testString, flag)) {
    html += testString.slice(lastLastIndex, match.index);
    html += `<b>${match}</b>`;
    lastLastIndex = re.lastIndex;
    if (!match[0].length) re.lastIndex++;
    if (re.global === false) break;
  }
  html += testString.slice(lastLastIndex);

  let result = document.getElementById('result');
  result.innerHTML = html;
  tips.innerText = '这里是错误提示！'; 

})
  */
button.addEventListener('click', function run() {
  let flag = getFlags();
  let reString = reInput.value;
  if (!reString) return;
  try {
    var re = new RegExp(reString, flag);
  } catch (e) {
    if (e instanceof TypeError) {
      tips.innerText = e.message;
      return;
    } else {
      throw e;
    }
  }
  let testString = testInput.value;
  let html = '';
  let lastLastIndex = 0;
  var matchIndex = 0; 
  while (match = re.exec(testString, flag)) {
    debugger;
    html += testString.slice(lastLastIndex, match.index);
    html += hightLightMatch(match, matchIndex);
    lastLastIndex = re.lastIndex;
    if (!match[0].length) re.lastIndex++;
    if (re.global === false) break;
  }
  html += testString.slice(lastLastIndex);

  let result = document.getElementById('result');
  result.innerHTML = html;
  tips.innerText = '这里是错误提示！';
})

let flags = ['i', 'g', 'm', 'd', 's', 'y', 'u'];

function getFlags() {
  return flags.filter(item => {
    let flag = document.getElementById('flag-' + item);
    if (flag.checked) return true;
    else return false;
  }).join('');
}

let textarea = document.getElementById('testInput');
let result1 = document.getElementById('result');

textarea.addEventListener('scroll', function () {
  result1.scrollTop = textarea.scrollTop;
})



result1.addEventListener('scroll', function () {
  textarea.scrollTop = result1.scrollTop;
});


function hightLightMatch(match, matchIndex) {
  if (match[0].length === 0) {
    let info = [
      `Match ${matchIndex}`,
      `-----`,
      `Group 0: empty string`,
      `Pos: ${match.index}-${match.index}`
    ].join('\n');
    return `<b class="zero-width-assertion" title="${info}"></b>`;
  }
  let array = new Array(match[0].length + 1).fill('');
  let k = 0; 
  for (let item of match.indices) {
    let i = item[0] - match.index, j = item[1] - match.index;
    let info = [
      `Match: ${matchIndex}`,
      `-----`,
      `Group ${k}: ${match[i]}`,
      `Pos: ${i}-${j}`,
    ].join('\n');
    array[i] += `<b data-group-index="${k}" title="${info}">`; 
    array[j] = array[j] + `</b>`;
    k++
    matchIndex++;
  }
  let res = '';
  for (let i = 0; i < match[0].length; i++) {
    res += array[i]; 
    res += match[0][i];
  }
  res += array[array.length - 1];
  return res;
}