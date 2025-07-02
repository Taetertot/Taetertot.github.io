 document.addEventListener('DOMContentLoaded', function () {
      var target = document.currentScript.parentElement;
      window.addEventListener('load', function () {
        calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0nxw-f8qrIcLH3oVHLmMwtr7Dsz7um2pP8TL8I36CczVeiz94qjv4DlhAzLdKer6T4VI3dxdRV?gv=true',
          label: "Schedule to meet",
          target,
        });
      });
    })();
