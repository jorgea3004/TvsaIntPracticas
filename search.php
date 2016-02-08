<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="../librarys/jquery-1.11.0.min.js"></script>
<style type="text/css">
.searchField {
    width: 200px;
}
#results {
    display: none;
    position: absolute;
    width: 200px;
    background-color: lightyellow; 
    z-index: 10;
}
#results div {
    position: absolute;
    width: 200px; 
    height: 20px;
    background-color: lightblue; 
    cursor: pointer;
}
#results div span {
    color: red;
    font-weight: bold;
}
</style>
<body>
<form id="theForm">
Search for: <input name="search" class="searchField" autocomplete="off"/>
</form>
Here is some text.<br/>
Here is some text.<br/>
Here is some text.<br/>
Here is some text.<br/>
Here is some text.<br/>

<div id="results"></div>

<script type="text/javascript">
(
  function()
  {

      var lookFor = '';
      var urlmenu = 'http://localhost/televisainternacional/public/uploads/actors/actors.js';
      $.getJSON( urlmenu, function( data ) {
        lookFor=data;
      });
      var form = document.getElementById("theForm");
      var resultsDiv = document.getElementById("results");
      var searchField = form.search;

      // first, position the results:
      var node = searchField;
      var x = 0;
      var y = 0;
      while ( node != null )
      {
          x += node.offsetLeft;
          y += node.offsetTop;
          node = node.offsetParent;
      }
      resultsDiv.style.left = x + "px";
      resultsDiv.style.top  = (y + 20) + "px";
      
      // now, attach the keyup handler to the search field:
      searchField.onkeyup = function()
      {
          var txt = this.value.toLowerCase();
          if ( txt.length == 0 ) return;
          var txtRE = new RegExp( "(" + txt + ")", "ig" );
          // now...do we have any matches?
          var top = 0;
          for ( var s = 0; s < lookFor.length; ++s )
          {
              var srch = lookFor[s];
              if ( srch.toLowerCase().indexOf(txt) >= 0 )
              {
                  srch = srch.replace( txtRE, "<span>$1</span>" );
                  var div = document.createElement("div");
                  div.innerHTML = srch;
                  div.onclick = function() {
                      searchField.value = this.innerHTML.replace(/\<\/?span\>/ig,"");
                      resultsDiv.style.display = "none";
                  };
                  div.style.top = top + "px";
                  top += 20;
                  resultsDiv.appendChild(div);
                  resultsDiv.style.display = "block";
              }
          }
      }
      // and the keydown handler:
      searchField.onkeydown = function() 
      {
          while ( resultsDiv.firstChild != null )
          {
              resultsDiv.removeChild( resultsDiv.firstChild );          
          }
          resultsDiv.style.display = "none";
      }
     
  }
)();
</script>
</body>
</html>