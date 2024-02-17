
  document.addEventListener("DOMContentLoaded", function() {
    var rows = document.querySelectorAll('.clickable-row');
    rows.forEach(function(row) {
      row.addEventListener('click', function() {
        var target = row.getAttribute('data-target');
        var infoRow = document.getElementById(target);
        infoRow.classList.toggle('hidden');
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var rows = document.querySelectorAll('.clickable-row');
    var searchInput = document.getElementById('searchInput');
    var openedRow = null;

    // Function to handle search input
    function handleSearch() {
      var searchTerm = searchInput.value.toLowerCase();
      rows.forEach(function(row) {
        var command = row.querySelector('td').textContent.toLowerCase();
        var infoRow = document.getElementById(row.getAttribute('data-target'));
        if (command.includes(searchTerm)) {
          row.style.display = '';
          infoRow.style.display = '';
        } else {
          row.style.display = 'none';
          infoRow.style.display = 'none';
        }
      });
    }

    // Event listener for search input
    searchInput.addEventListener('input', handleSearch);
    
    // Event listener for toggling command info
    document.addEventListener('click', function(event) {
      var target = event.target;
      if (target.classList.contains('clickable-row')) {
        var infoRow = document.getElementById(target.getAttribute('data-target'));
        if (openedRow && openedRow !== infoRow) {
          openedRow.classList.add('hidden');
        }
        openedRow = infoRow;
        infoRow.classList.toggle('hidden');
      }
    });
  });