const http = require('http');

http.get('http://localhost:4321/glamping-resort-cyprus/', (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        console.log('Status code:', res.statusCode);
        console.log('Has bookingForm:', data.includes('id="bookingForm"'));
        console.log('Has calendar:', data.includes('id="calendar"'));
        console.log('Has guestPopup:', data.includes('id="guestPopup"'));
        console.log('Has priceContainer:', data.includes('id="priceContainer"'));
        console.log('Has submitButton:', data.includes('id="submitButton"'));
        console.log('Has Calender.css:', data.includes('Calender.css'));
        console.log('Has Calender.js:', data.includes('Calender.js'));
        console.log('Has Flatpickr:', data.includes('flatpickr'));
    });
}).on('error', (err) => {
    console.error('Fetch error:', err.message);
});
