function updateDateTime() {
  const now = new Date();
  const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: false 
  };
  document.getElementById('datetime').innerText = now.toLocaleString('en-US', options);
}

// Update the date and time immediately
updateDateTime();
// Update every second
setInterval(updateDateTime, 1000);
