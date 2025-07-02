window.addEventListener('load', function () {
  const target = document.getElementById('schedule-button-container');
  
  if (window.calendar && calendar.schedulingButton && typeof calendar.schedulingButton.load === 'function') {
    calendar.schedulingButton.load({
      url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0nxw-f8qrIcLH3oVHLmMwtr7Dsz7um2pP8TL8I36CczVeiz94qjv4DlhAzLdKer6T4VI3dxdRV?gv=true',
      color: '#0B8043',
      label: 'Schedule to meet',
      target: target,
    });
  } else {
    console.error('Google Calendar scheduling button script is not ready.');
  }
});
