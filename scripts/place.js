/* =========================
   FOOTER INFORMATION
   ========================= */
document.getElementById('currentYear').textContent =
  new Date().getFullYear();

document.getElementById('LastModified').textContent =
  document.lastModified;


/* =========================
   WEATHER DATA (STATIC)
   ========================= */
const temperature = 12; // °C
const windSpeed = 11;   // km/h


/* =========================
   WIND CHILL FUNCTION
   ========================= */
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}


/* =========================
   WIND CHILL LOGIC
   ========================= */
let windChillMessage = 'N/A';

if (temperature <= 10 && windSpeed > 4.8) {
  windChillMessage = calculateWindChill(temperature, windSpeed) + ' °C';
}

document.getElementById('windChill').textContent = windChillMessage;
