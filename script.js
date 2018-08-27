function wikiCrawl() {
  //SEARCH FUNCTION USING FORM
  var searchT = document.getElementById("searchT");
  var terms = searchT.value;
  var url =
    "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" +
    terms;

  $.get(url, function(data) {
    var array = data.valueOf();
    var titles = array.valueOf();

    var userNum = document.getElementById("select").value;

    function titleLoop(total) {
      $("#display").html("");
      for (var i = 0; i < total; i++) {
        var htmlT = titles[1][i];
        var htmlC = titles[2][i];
        var links = titles[3][i];

        $("<div/>", {
          id: "div" + i,
          class: "title",
          html: "<h3>" + htmlT + "</h3>"
        }).appendTo("#display");
        //^ appends title to div display ^
        $("<div/>", {
          id: "div" + i,
          class: "content",
          html: htmlC
        }).appendTo("#div" + i);
        //^ appends content to div titles ^

        if (htmlT == null && links == null) {
          div.hide();
        }

        $("#div" + i).wrap('<a href="' + links + '" />');
      }
    }
    titleLoop(userNum);
  });
} //end crawl

function random(){ 
  window.location="https://en.wikipedia.org/wiki/Special:Random"
}


