
function openTab(evt, tabName) {
  // Hide all tab content
  var tabContent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove 'active' class from all tabs
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }

  // Show the selected tab content
  document.getElementById(tabName).style.display = "table-row";

  // Add 'active' class to the clicked tab
  evt.currentTarget.className += " active";
}

// Show the first tab by default
document.getElementById("tab1").style.display = "table-row";

