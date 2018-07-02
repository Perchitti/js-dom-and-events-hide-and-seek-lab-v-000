function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(){
  const rankedLists = document.querySelectorAll('.ranked-list.')
  for (let i = 0; i < rankedLists, i++){
    rankedLists[i].innerHTML = (i + 1).parseInt
  }
}
