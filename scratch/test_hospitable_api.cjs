const https = require('https');

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTYyNGRmMC0xMmYxLTQ0OGUtYjg4NC00MzY3ODBhNWQzY2QiLCJqdGkiOiI5ZWQwMjY2NzQzYTU2NzFmYzQ0OTBjMjFmMGQxMDBlMWQ1ZWI0YmI0MjZkMTczYmJlMWM2ZDc4OTBlNGI3NmFiNDdmOGQ4ZTBkMDBjZDA5YSIsImlhdCI6MTc2NjY2MTM4OC43MTM1MTIsIm5iZiI6MTc2NjY2MTM4OC43MTM1MTQsImV4cCI6MTc5ODE5NzM4OC43MDkwNjgsInN1YiI6IjIyNTA1NCIsInNjb3BlcyI6WyJwYXQ6cmVhZCIsInBhdDp3cml0ZSJdfQ.K77bDXEhF9J9f00Zs_0-hQphdJAQoE0PX6N9MPQ4SYIUa-nbYYXaCzCtLIL_B2GbTqtAYWFg_1W_SnJfytpq6fFJ_xUTc_-5c0fiZkrfTFmtSvGj7MDWRSM_XYqXa5YRY48NXaZIM0nlxXGplt7yLTeaURi5qQDkBHpG4UoxV7iEtxqQ24pjWzTlD9TT4Z4GvvHO8ru6Y66U_YEaH9oDTvKiH2VF6zNrRSA3vL4zK3pxjFQ0bqBeZgmrWAJmg7hq07nTe-z8HnrNp2VQy0iFRlodlTrMGxIibPtjstC5bQJWiZYWnbB9JcchTgAKCUlBkFQbnsDHDv8F3mlB6C_gNgkce_36rVIQB1gJgnX_9kVB0qNV3YjEblRff2cFfuV_DQoYrzTlF5rsQ_w9T0Na3Rxu9LAINknJbrR-GD8ZRdAYk3bJAp_IlQ-rd6dzJryPxyMXZxmVaqxCOnRQ3Cnu12vClPRhvCTUrO1ERLOzK69qrGDSL29tRyPD3uP3HJl6WTlcdqaTpmwGH7gjva-fsy_yFltlAK4hk2kBnhnd2Q_cldTRWaRFFsWe1a1g0d-T1aH9Q4s4W6B8e_H9Ji5YK0tawNFjOd3XEpXhFEb4X7v1ZLMou-YS5aqP1Uaq6mczZiCBM4oQieg-1EW--8NSpT3BGK8Vq--Pf4ELayfziqs";

const today = new Date().toISOString().split('T')[0];
const endDate = new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0];

const url = `https://public.api.hospitable.com/v2/properties/search?start_date=${today}&end_date=${endDate}&adults=2`;

const options = {
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    }
};

https.get(url, options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log('Status:', res.statusCode);
        console.log('Data:', data);
    });
});
