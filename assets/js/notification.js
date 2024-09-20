 // Show notification count
 let notificationCount = 2;
 const notificationBtn = document.getElementById('notification-btn');
 const notificationBadge = document.getElementById('notification-count');

 // Click event to toggle offcanvas
 notificationBtn.addEventListener('click', () => {
   const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvas-notifications'));
   offcanvas.show();
 });

 // Update notification count dynamically if needed
 if (notificationCount > 0) {
   notificationBadge.innerText = notificationCount;
 } else {
   notificationBadge.style.display = 'none';
 }