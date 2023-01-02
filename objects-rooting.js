const judgeVegetable = function (vegetables, metric) {
  let result = "";
  let score = 0;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > score) {
      result = vegetables[i]["submitter"];
      score = vegetables[i][metric];
    }
  }
  return result;
};

