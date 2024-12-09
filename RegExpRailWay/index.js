//Parse regular expression; 
//example: re = /foo|(ba+rz{22,88}[^aeiou])/;
re = /foo|(ba+rz{22,88}[^aeiou])/;
function parseRegularExpression(string) {
  let i = 0; // record the position;
  let groupI = 1; //record the index of the captured group; 

  let branches = parseBranches();
  return {
    type: 'RegularExpression', 
    start: 0, 
    end: i,
    raw: '', 
    branches, 
  }



  function parseOnePart() {
    if (string[i] === '[') {
      // parse a character class; 
      return parseCharClass();
    } else if (string[i] === '?' || string[i] === '*' || string[i] === '+' || string[i] === '{') {
      //parse quantifiers: ? * + {2,} 
      return parseQuantifier();
    } else if (string[i] === '(') {
      // parse captured group or zero assertion etc: (xxx) (?=xxx)
      return parseCapturedGroup();
    } else if (string[i] === '\\') {
      // parse escape identifier
      return parseEscape();
    } else {
      // parse a single character;
      return parseChar();
    }
  }

  function parseCapturedGroup() {
    // (xxx) (?=xx) (?!xx) (?<xx) (?<!xx) (?<xxx>) (?:)
    // captured group / non-captured group / zero assertion / group name 

    let node = {
      type: 'CapturedGroup', 
      start: i, 
      end: 0,
      raw: '', 
      groups: [], // put all the branches into the group, even there is only one branch.
      groupName: '', 
      groupIndex: groupI,
      capture: true, // is it a captured group? 
      zeroWidthAssertion: false, // is it a zero width assertion?
      positive: false, // is it positive or negative? 
      lookahead: false, // is it forward or backward? 
    }

    i++; //Anyway! skip the open clurly brace: '('
    if (string[i] === '?') {
      i++; // skip the question mark: '?'
      if (string[i] === ':') {
        node.capture = false;
        i++; // skip the colon: ':'
      } else if (string[i] === '=') {
        // (?=xxx)
        node.zeroWidthAssertion = true;
        node.positive = true;
        node.lookahead = true;
      } else if (string[i] === '!') {
        // (?!xxx)
        node.zeroWidthAssertion = true;
        node.positive = false;
        node.lookahead = true;
      } else if (string[i] === '<') {
        // (?<xxx>) (?<!xxx) (?<=xxx)
        i++; // Anyway, skip the angle bracket: '<'
        if (string[i] === '=') {
          // (?<=xxx)
          node.zeroWidthAssertion = true; 
          node.positive = true; 
          node.lookahead = false; 
          i++; // skip the equal sign: '='
        } else if (string[i] === '!') {
          // (?<!xxx)
          node.zeroWidthAssertion = true; 
          node.positive = false; 
          node.lookahead = false;
          i++; // skip the exclamation mark: '!'
        } else {
          // (?<xxx>)
          let groupName = parseName();
          node.groupName = groupName; 
          i++; // skip the close angle bracket: '>'
        }
        function parseName() {
          let name = '';
          let start = i; 
          while (string[i] !== '>') i++;
          name = string.slice(start, i);
          return name; 
        }
      } 
    } 

    node.groups = parseBranches();
    i++; //skip the close parentheses : ')';

    node.end = i; 
    node.raw = string.slice(node.start, node.end); 
    return node;
  }
  function parseBranch() {
    // parse one branch
    // (xxxxxxx|yyyyyyy) (zzzzzzz)
    //  i ->   i          i ->   i
    let node = {
      type: 'Branch',
      start: i, 
      end: 0, 
      raw: '',
      
    }

  }

  function parseBranches() {

  }

  function parseChar() {
    // only parse one single character; 
    let node = {
      type: 'Char', 
      start: i, 
      end: 0, 
      raw: '', 
      char: '',
    } 
    i++;
    node.end = i; 
    node.raw = string.slice(node.start, node.end);
    return node;
  }

  function parseEscape() {
    // re = /abc\d/;
    let node = {
      type: 'Escape', 
      start: i, 
      end: 0, 
      raw: '',
      escapeChar: '',
    }
    i++; //skip the backslash: '\';
    // only care about one character after the backslash;
    node.end = i; 
    node.raw = string.slice(node.start, node.end);
    return node;
  }
}