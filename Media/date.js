// this script will determine the date and write it on the #date ID 
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const d = new Date();
      const currentMonth = months[d.getMonth()];
      const currentDay = days[d.getDay()];
      const currentDate = d.getDate();
      const currentYear = d.getFullYear();
      document.getElementById("date").innerHTML = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;