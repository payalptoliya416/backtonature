
// Expose popup helper functions to window for onclick handlers
window.toggleGuestPopup = toggleGuestPopup;
window.closeGuestPopup = closeGuestPopup;
window.updateGuestSummary = updateGuestSummary;
window.updateCount = updateCount;

function toggleGuestPopup() {
    const popup = document.getElementById("guestPopup");
    if (popup) popup.classList.toggle("d-none");
}

function closeGuestPopup() {
    const popup = document.getElementById("guestPopup");
    if (popup) popup.classList.add("d-none");
    updateGuestSummary();
}

function updateGuestSummary() {
    const adultsEl = document.getElementById("adults");
    const childrenEl = document.getElementById("children");
    const infantsEl = document.getElementById("infants");
    const petsEl = document.getElementById("pets");
    const summaryEl = document.getElementById("guestSummary");

    if (!adultsEl || !summaryEl) return;

    let adults = parseInt(adultsEl.value) || 0;
    let children = childrenEl ? (parseInt(childrenEl.value) || 0) : 0;
    let infants = infantsEl ? (parseInt(infantsEl.value) || 0) : 0;
    let pets = petsEl ? (parseInt(petsEl.value) || 0) : 0;

    let summary = adults + " adult" + (adults > 1 ? "s" : "");
    if (children > 0) summary += ", " + children + " child" + (children > 1 ? "ren" : "");
    if (infants > 0) summary += ", " + infants + " infant" + (infants > 1 ? "s" : "");
    if (pets > 0) summary += ", " + pets + " pet" + (pets > 1 ? "s" : "");

    summaryEl.innerText = summary;
}

function updateCount(id, change) {
    const el = document.getElementById(id);
    if (!el) return;
    let value = parseInt(el.value) || 0;

    if (id === "adults" && value + change < 1) return;
    if (id === "pets" && change > 0 && value >= 1) return;

    if (id === "adults" || id === "children") {
        const adultsVal = parseInt(document.getElementById("adults")?.value || 0);
        const childrenVal = parseInt(document.getElementById("children")?.value || 0);
        let total = adultsVal + childrenVal;
        if (change > 0 && total >= 6) return;
    }

    value += change;
    if (value < 0) value = 0;
    el.value = value;

    updateGuestSummary();
    
    // Dispatch change event to trigger API update
    const event = new Event('change', { bubbles: true });
    el.dispatchEvent(event);
}

document.addEventListener("click", function (event) {
    const popup = document.getElementById("guestPopup");
    const summary = document.getElementById("guestSummary");
    if (!popup || !summary) return;
    const trigger = summary.parentElement;
    if (trigger && !popup.contains(event.target) && !trigger.contains(event.target)) {
        popup.classList.add("d-none");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("bookingForm")) return;

    let checkOutDates = [];
    let NewAllDates = [];
    let calendar = null;
    let uuids = [];
    const checkOutDatesByUUID = {};

    const numericFields = ['adults', 'children', 'infants', 'pets'];

    numericFields.forEach(function (fieldId) {
        const inputField = document.getElementById(fieldId);
        if (!inputField) return;

        inputField.addEventListener('input', function (e) {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });

        inputField.addEventListener('blur', function (e) {
            if (e.target.value === '') {
                e.target.value = '0';
            }
        });
    });

    function getEndDate90DaysFromToday() {
        const today = new Date();
        today.setDate(today.getDate() + 90);
        return today.toISOString().split('T')[0];
    }

    function updateUUIDs(totalGuests) {
        if (totalGuests <= 4) {
            return [
                "f866b203-6ea3-4340-ac15-3f4a5f2aad08",
                "65286804-3990-4916-a8a7-c110062a50fd",
                "93a66030-841c-4ec4-be4f-750236629ec1"
            ];
        } else {
            return [
                "65286804-3990-4916-a8a7-c110062a50fd",
                "93a66030-841c-4ec4-be4f-750236629ec1"
            ];
        }
    }

    function fetchProperties(totalGuests) {
        const today = new Date();
        const formattedToday = today.toISOString().split('T')[0];
        const formattedEndDate = getEndDate90DaysFromToday();

        const previousUUIDs = [...uuids];
        uuids = updateUUIDs(totalGuests);

        // console.log('UUID Change:', {
        //     previousUUIDs,
        //     newUUIDs: uuids,
        //     totalGuests,
        //     reason: totalGuests > 4 ? 'More than 4 guests' : '4 or fewer guests'
        // });

        // console.log('Fetching properties with UUIDs:', uuids);
        // console.log('Total guests:', totalGuests);
        // console.log('Date range:', { start: formattedToday, end: formattedEndDate });

        const url = `https://public.api.hospitable.com/v2/properties/search?start_date=${formattedToday}&end_date=${formattedEndDate}&adults=${totalGuests}`;

        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTYyNGRmMC0xMmYxLTQ0OGUtYjg4NC00MzY3ODBhNWQzY2QiLCJqdGkiOiI5ZWQwMjY2NzQzYTU2NzFmYzQ0OTBjMjFmMGQxMDBlMWQ1ZWI0YmI0MjZkMTczYmJlMWM2ZDc4OTBlNGI3NmFiNDdmOGQ4ZTBkMDBjZDA5YSIsImlhdCI6MTc2NjY2MTM4OC43MTM1MTIsIm5iZiI6MTc2NjY2MTM4OC43MTM1MTQsImV4cCI6MTc5ODE5NzM4OC43MDkwNjgsInN1YiI6IjIyNTA1NCIsInNjb3BlcyI6WyJwYXQ6cmVhZCIsInBhdDp3cml0ZSJdfQ.K77bDXEhF9J9f00Zs_0-hQphdJAQoE0PX6N9MPQ4SYIUa-nbYYXaCzCtLIL_B2GbTqtAYWFg_1W_SnJfytpq6fFJ_xUTc_-5c0fiZkrfTFmtSvGj7MDWRSM_XYqXa5YRY48NXaZIM0nlxXGplt7yLTeaURi5qQDkBHpG4UoxV7iEtxqQ24pjWzTlD9TT4Z4GvvHO8ru6Y66U_YEaH9oDTvKiH2VF6zNrRSA3vL4zK3pxjFQ0bqBeZgmrWAJmg7hq07nTe-z8HnrNp2VQy0iFRlodlTrMGxIibPtjstC5bQJWiZYWnbB9JcchTgAKCUlBkFQbnsDHDv8F3mlB6C_gNgkce_36rVIQB1gJgnX_9kVB0qNV3YjEblRff2cFfuV_DQoYrzTlF5rsQ_w9T0Na3Rxu9LAINknJbrR-GD8ZRdAYk3bJAp_IlQ-rd6dzJryPxyMXZxmVaqxCOnRQ3Cnu12vClPRhvCTUrO1ERLOzK69qrGDSL29tRyPD3uP3HJl6WTlcdqaTpmwGH7gjva-fsy_yFltlAK4hk2kBnhnd2Q_cldTRWaRFFsWe1a1g0d-T1aH9Q4s4W6B8e_H9Ji5YK0tawNFjOd3XEpXhFEb4X7v1ZLMou-YS5aqP1Uaq6mczZiCBM4oQieg-1EW--8NSpT3BGK8Vq--Pf4ELayfziqs"
            }
        })
            .then(response => response.json())
            .then(data => {
                let availabilityDates = [];
                // console.log('Properties API Response:', data);

                if (Array.isArray(data.data)) {
                    data.data.forEach(item => {
                        if (item.property && uuids.includes(item.property.id)) {
                            // console.log('Processing property:', {
                            //     id: item.property.id,
                            //     name: item.property.name,
                            //     isInUUIDs: uuids.includes(item.property.id)
                            // });
                            if (item.availability && Array.isArray(item.availability.details)) {
                                const propertyDates = item.availability.details.map(detail => {
                                    return new Date(detail.date).toISOString().split('T')[0];
                                });
                                // console.log('Property availability dates:', {
                                //     propertyId: item.property.id,
                                //     dates: propertyDates
                                // });
                                availabilityDates = [...availabilityDates, ...propertyDates];
                            }
                        }
                    });
                }

                availabilityDates = [...new Set(availabilityDates)];
                // console.log('Combined unique availability dates:', availabilityDates);
                fetchCalendarDates(uuids, formattedToday, formattedEndDate, availabilityDates);
            })
            .catch(error => {
                console.error("Error fetching properties data:", error);
            });
    }

    function fetchCalendarDates(uuids, formattedStartDate, formattedEndDate, availabilityDates) {
        // console.log('Fetching calendar dates for UUIDs:', uuids);

        const apiRequests = uuids.map(uuid => {
            const apiUrl = `https://public.api.hospitable.com/v2/properties/${uuid}/calendar?start_date=${formattedStartDate}&end_date=${formattedEndDate}`;
            return fetch(apiUrl, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTYyNGRmMC0xMmYxLTQ0OGUtYjg4NC00MzY3ODBhNWQzY2QiLCJqdGkiOiI5ZWQwMjY2NzQzYTU2NzFmYzQ0OTBjMjFmMGQxMDBlMWQ1ZWI0YmI0MjZkMTczYmJlMWM2ZDc4OTBlNGI3NmFiNDdmOGQ4ZTBkMDBjZDA5YSIsImlhdCI6MTc2NjY2MTM4OC43MTM1MTIsIm5iZiI6MTc2NjY2MTM4OC43MTM1MTQsImV4cCI6MTc5ODE5NzM4OC43MDkwNjgsInN1YiI6IjIyNTA1NCIsInNjb3BlcyI6WyJwYXQ6cmVhZCIsInBhdDp3cml0ZSJdfQ.K77bDXEhF9J9f00Zs_0-hQphdJAQoE0PX6N9MPQ4SYIUa-nbYYXaCzCtLIL_B2GbTqtAYWFg_1W_SnJfytpq6fFJ_xUTc_-5c0fiZkrfTFmtSvGj7MDWRSM_XYqXa5YRY48NXaZIM0nlxXGplt7yLTeaURi5qQDkBHpG4UoxV7iEtxqQ24pjWzTlD9TT4Z4GvvHO8ru6Y66U_YEaH9oDTvKiH2VF6zNrRSA3vL4zK3pxjFQ0bqBeZgmrWAJmg7hq07nTe-z8HnrNp2VQy0iFRlodlTrMGxIibPtjstC5bQJWiZYWnbB9JcchTgAKCUlBkFQbnsDHDv8F3mlB6C_gNgkce_36rVIQB1gJgnX_9kVB0qNV3YjEblRff2cFfuV_DQoYrzTlF5rsQ_w9T0Na3Rxu9LAINknJbrR-GD8ZRdAYk3bJAp_IlQ-rd6dzJryPxyMXZxmVaqxCOnRQ3Cnu12vClPRhvCTUrO1ERLOzK69qrGDSL29tRyPD3uP3HJl6WTlcdqaTpmwGH7gjva-fsy_yFltlAK4hk2kBnhnd2Q_cldTRWaRFFsWe1a1g0d-T1aH9Q4s4W6B8e_H9Ji5YK0tawNFjOd3XEpXhFEb4X7v1ZLMou-YS5aqP1Uaq6mczZiCBM4oQieg-1EW--8NSpT3BGK8Vq--Pf4ELayfziqs"
                }
            })
                .then(response => response.json())
                .then(data => ({ uuid, data }));
        });

        Promise.all(apiRequests)
            .then(responses => {
                responses.forEach(({ uuid, data }) => {
                    checkOutDatesByUUID[uuid] = [];

                    if (data && data.data && Array.isArray(data.data.days)) {
                        const calendarDays = data.data.days;

                        availabilityDates.forEach(date => {
                            const currentDay = calendarDays.find(day => day.date === date);
                            const previousDay = calendarDays.find(day => day.date === getPreviousDay(date));

                            if (
                                currentDay &&
                                previousDay &&
                                previousDay.status && previousDay.status.reason === "AVAILABLE" &&
                                (currentDay.status.reason === "RESERVED" || currentDay.status.reason === "BLOCKED")
                            ) {
                                checkOutDatesByUUID[uuid].push(date);
                            }
                        });

                        checkOutDatesByUUID[uuid].sort((a, b) => new Date(a) - new Date(b));

                        checkOutDatesByUUID[uuid] = [...new Set(checkOutDatesByUUID[uuid])];
                    }
                });

                for (const uuid in checkOutDatesByUUID) {
                    // console.log(`Checkout dates for UUID ${uuid}:`);
                    checkOutDatesByUUID[uuid].forEach((date, index) => {
                        // console.log(`${index + 1}. ${date}`);
                    });
                }

                NewAllDates[0] = Object.entries(checkOutDatesByUUID)
                    .map(([uuid, dates]) => `${uuid}: ${dates.join(", ")}`)
                    .join(" | ");

                setTimeout(() => {
                    document.querySelector('.space-container').classList.add('d-none');
                    document.getElementById("loader").classList.add("d-none");
                    document.getElementById("calendar-container").classList.remove("disabled");
                    initializeCalendar();
                }, 3000);
            })
            .catch(error => console.error("Error fetching calendar data:", error));
    }


    function getPreviousDay(dateStr) {
        const date = new Date(dateStr);
        date.setDate(date.getDate() - 1);
        return date.toISOString().split('T')[0];
    }

    function getNextDay(dateStr) {
        const date = new Date(dateStr);
        date.setDate(date.getDate() + 1);
        return date.toISOString().split('T')[0];
    }

    const adultsInput = document.getElementById("adults");
    const childrenInput = document.getElementById("children");

    function updateGuestCount() {
        const adults = parseInt(adultsInput.value) || 0;
        const children = parseInt(childrenInput.value) || 0;
        const totalGuests = adults + children;

        if (totalGuests < 4) {
            if (calendar && typeof calendar.clear === 'function') calendar.clear();
            NewAllDates = [];

            const priceContainer = document.getElementById("priceContainer");
            const clearBtn = document.getElementById("clear-btn");

            if (priceContainer) {
                priceContainer.classList.add("d-none");
            }
            if (clearBtn) {
                clearBtn.classList.add("d-none");
            }
        }

        if (totalGuests > 4) {
            if (calendar && typeof calendar.clear === 'function') calendar.clear();
            NewAllDates = [];

            const priceContainer = document.getElementById("priceContainer");
            const clearBtn = document.getElementById("clear-btn");

            if (priceContainer) {
                priceContainer.classList.add("d-none");
            }
            if (clearBtn) {
                clearBtn.classList.add("d-none");
            }
        }
    }

    if (adultsInput && childrenInput) {
        adultsInput.addEventListener("change", function () {
            // console.log('Adults count changed:', {
            //     oldValue: this.defaultValue,
            //     newValue: this.value,
            //     totalGuests: parseInt(this.value) + parseInt(childrenInput.value)
            // });
            updateGuestCount();
            updateGuestCountAndFetchProperties();
        });
        childrenInput.addEventListener("change", function () {
            // console.log('Children count changed:', {
            //     oldValue: this.defaultValue,
            //     newValue: this.value,
            //     totalGuests: parseInt(adultsInput.value) + parseInt(this.value)
            // });
            updateGuestCount();
            updateGuestCountAndFetchProperties();
        });
    }

    function updateGuestCountAndFetchProperties() {
        checkOutDates = [];

        document.getElementById("loader").classList.remove("d-none");
        document.getElementById("calendar-container").classList.add("disabled");

        const adults = parseInt(document.getElementById("adults").value) || 0;
        const children = parseInt(document.getElementById("children").value) || 0;
        const totalGuests = adults + children;

        // console.log('Guest count changed:', {
        //     adults,
        //     children,
        //     totalGuests,
        //     previousUUIDs: [...uuids]
        // });

        fetchProperties(totalGuests);
    }



    updateGuestCountAndFetchProperties();

    let availableDates = [];
    const clearDatesButton = document.querySelector(".text-center p");
    if (clearDatesButton) {
        clearDatesButton.addEventListener("click", function () {
            if (calendar && typeof calendar.clear === 'function') {
                calendar.clear();

                // Reset UI elements
                const priceContainer = document.getElementById("priceContainer");
                const clearBtn = document.getElementById("clear-btn");

                if (priceContainer) {
                    priceContainer.classList.add("d-none");
                }
                if (clearBtn) {
                    clearBtn.classList.add("d-none");
                }

                const priceElements = priceContainer ? priceContainer.querySelectorAll("p.mb-0") : [];
                priceElements.forEach(element => {
                    if (element.textContent.includes("€")) {
                        element.textContent = "€0.00";
                    }
                });

                const additionalFee = document.getElementById("additionalFee");
                if (additionalFee) {
                    additionalFee.classList.add("d-none");
                }

                setTimeout(() => {
                    if (calendar && typeof calendar.set === 'function') {
                        calendar.set('enable', []);
                        calendar.redraw();
                        // console.log('Checkout dates disabled after clearing calendar');

                        const currentDate = new Date();
                        const { start_date, end_date } = getMonthDateRange(currentDate.getFullYear(), currentDate.getMonth());
                        const hardcodedDates = ['2025-09-05', '2025-09-19'];
                        fetchApiData(start_date, end_date, uuids, (data) => {
                            updateCalendarWithAPIResponse(data, hardcodedDates);
                        });
                    }
                }, 100);

                validateForm();
            }
        });
    }

    function disablePastDates() {
        if (!calendar || typeof calendar.set !== 'function') return;
        const today = new Date();
        const formattedToday = formatDate(today);
        calendar.set("minDate", formattedToday);
    }

    function removePriceError() {
        const priceErrorElement = document.getElementById("price-error");
        if (priceErrorElement) {
            priceErrorElement.classList.add("d-none");
            priceErrorElement.textContent = "";
        }
    }

    document.getElementById("adults").addEventListener("input", function () {
        removePriceError();
        validateForm();
    });

    document.getElementById("children").addEventListener("input", function () {
        removePriceError();
        validateForm();
    });

    function validateForm() {
        const adultsInput = document.getElementById("adults");
        const childrenInput = document.getElementById("children");
        const infants = document.getElementById("infants") ? document.getElementById("infants").value : 0;
        const pets = document.getElementById("pets") ? document.getElementById("pets").value : 0;
        const selectedDates = (calendar && calendar.selectedDates) ? calendar.selectedDates : [];

        let adults = parseInt(adultsInput ? adultsInput.value : 0) || 0;
        let children = parseInt(childrenInput ? childrenInput.value : 0) || 0;

        if (adults + children > 6) {
            const excess = adults + children - 6;
            if (adults > children) {
                adults -= excess;
            } else {
                children -= excess;
            }
        }

        if (adultsInput) adultsInput.value = adults;
        if (childrenInput) childrenInput.value = children;

        const isValidAdults = adults >= 0;
        const isValidChildren = children >= 0;
        const isValidInfants = infants && parseInt(infants) >= 0;
        const isValidPets = pets && parseInt(pets) >= 0;

        const isValidForm = isValidAdults && isValidChildren && isValidInfants && isValidPets && selectedDates.length === 2;

        const submitBtn = document.getElementById("submitButton");
        if (submitBtn) submitBtn.disabled = !isValidForm;
    }

    function calculateTotalPrice() {
        const adults = parseInt(document.getElementById("adults")?.value || 0);
        const children = parseInt(document.getElementById("children")?.value || 0);
        const totalGuests = adults + children;
        const additionalGuestFeePerNight = calculateAdditionalGuestFee(totalGuests);

        const selectedDates = (calendar && calendar.selectedDates) ? calendar.selectedDates : [];
        let totalPrice = 0;
        let nights = 0;

        if (selectedDates.length === 2) {
            const [startDate, endDate] = selectedDates;

            nights = (endDate - startDate) / (1000 * 60 * 60 * 24);

            const uuids = updateUUIDs(totalGuests);

            if (uuids) {
                const uuid = document.getElementById('uuid');
                uuid.value = uuids;
            }

            fetchApiData(startDate, endDate, uuids, (data) => {
                if (data && data[uuids[0]] && data[uuids[0]].data && data[uuids[0]].data.days) {
                    const selectedDatesInRange = data[uuids[0]].data.days.filter((day) => {
                        const currentDate = new Date(day.date);
                        return currentDate >= startDate && currentDate <= endDate;
                    });

                    if (totalGuests > 4) {
                        const allDatesAvailable = selectedDatesInRange.every(day => day.status.reason === "AVAILABLE");

                        if (!allDatesAvailable) {
                            const bookingMessage = document.getElementById("price-error");
                            bookingMessage.textContent = `Booking is not available for ${totalGuests} Person.`;
                            bookingMessage.classList.remove("d-none");

                            const priceContainer = document.getElementById("priceContainer");
                            priceContainer.classList.add("d-none");

                            const submitButton = document.getElementById("submitButton");
                            submitButton.disabled = true;
                            return;
                        }
                    }

                    const allDatesAvailable = selectedDatesInRange.every(day => day.status.reason === "AVAILABLE");

                    if (!allDatesAvailable && totalGuests <= 4) {
                        const alternateUuid = totalGuests > 4 ? "f866b203-6ea3-4340-ac15-3f4a5f2aad08" : "93a66030-841c-4ec4-be4f-750236629ec1";
                        fetchApiData(startDate, endDate, [alternateUuid], (alternateData) => {
                            if (alternateData && alternateData[alternateUuid] && alternateData[alternateUuid].data && alternateData[alternateUuid].data.days) {
                                const alternateDatesInRange = alternateData[alternateUuid].data.days.filter((day) => {
                                    const currentDate = new Date(day.date);
                                    return currentDate >= startDate && currentDate <= endDate;
                                });

                                totalPrice = alternateDatesInRange.reduce((total, day) => {
                                    if (day.price && day.price.amount) {
                                        return total + (day.price.amount / 100);
                                    }
                                    return total;
                                }, 0);

                                if (alternateUuid) {
                                    const uuid = document.getElementById('uuid');
                                    uuid.value = alternateUuid;
                                }

                                const totalAdditionalGuestFee = additionalGuestFeePerNight * nights;
                                const finalPrice = totalPrice + totalAdditionalGuestFee;
                                const totalPriceFormatted = finalPrice.toFixed(2);

                                const uuidInputField = document.getElementById('price');
                                uuidInputField.value = totalPriceFormatted;

                                document.getElementById("loader").classList.remove("d-none");
                                document.getElementById("calendar-container").classList.add("disabled");

                                document.querySelector(".price-container .d-flex.justify-content-between.mb-3 p.mb-0:last-child").textContent = `€${totalPriceFormatted}`;

                                const additionalFeeElement = document.getElementById("additionalFee");

                                if ([4, 5, 6].includes(totalGuests)) {
                                    additionalFeeElement.classList.remove("d-none");
                                    additionalFeeElement.querySelector("p.mb-0:last-child").textContent = `€${totalAdditionalGuestFee.toFixed(2)}`;
                                } else {
                                    additionalFeeElement.classList.add("d-none");
                                }

                                const priceContainer = document.getElementById("priceContainer");
                                priceContainer.classList.add("d-none");

                                if (nights > 0) {
                                    document.querySelector(".price-container .d-flex.justify-content-between:nth-of-type(2) p.mb-0:first-child").textContent = `€${(totalPrice / nights).toFixed(2)} x ${nights} nights`;
                                    document.querySelector(".price-container .d-flex.justify-content-between:nth-of-type(2) p.mb-0:last-child").textContent = `€${totalPrice.toFixed(2)}`;
                                } else {
                                    document.querySelector(".price-container .d-flex.justify-content-between:nth-of-type(2) p.mb-0:first-child").textContent = `€0.00 x 0 nights`;
                                    document.querySelector(".price-container .d-flex.justify-content-between:nth-of-type(2) p.mb-0:last-child").textContent = "€0.00";
                                }
                            } else {
                                console.error("No pricing data found for selected dates with alternate UUID.");
                            }
                        });
                    } else {
                        totalPrice = selectedDatesInRange.reduce((total, day) => {
                            if (day.price && day.price.amount) {
                                return total + (day.price.amount / 100);
                            }
                            return total;
                        }, 0);

                        const totalAdditionalGuestFee = additionalGuestFeePerNight * nights;
                        const finalPrice = totalPrice + totalAdditionalGuestFee;
                        const totalPriceFormatted = finalPrice.toFixed(2);

                        const uuidInputField = document.getElementById('price');
                        uuidInputField.value = totalPriceFormatted;

                        document.getElementById("loader").classList.remove("d-none");
                        document.getElementById("calendar-container").classList.add("disabled");

                        document.querySelector(".price-container .d-flex.justify-content-between.mb-3 p.mb-0:last-child").textContent = `€${totalPriceFormatted}`;

                        const additionalFeeElement = document.getElementById("additionalFee");

                        if ([4, 5, 6].includes(totalGuests)) {
                            additionalFeeElement.classList.remove("d-none");
                            additionalFeeElement.querySelector("p.mb-0:last-child").textContent = `€${totalAdditionalGuestFee.toFixed(2)}`;
                        } else {
                            additionalFeeElement.classList.add("d-none");
                        }

                        const priceContainer = document.getElementById("priceContainer");
                        priceContainer.classList.add("d-none");

                        if (nights > 0) {
                            document.querySelector(".price-container .d-flex.justify-content-between:nth-of-type(2) p.mb-0:first-child").textContent = `€${(totalPrice / nights).toFixed(2)} x ${nights} nights`;
                            document.querySelector(".price-container .d-flex.justify-content-between:nth-of-type(2) p.mb-0:last-child").textContent = `€${totalPrice.toFixed(2)}`;
                        } else {
                            document.querySelector(".price-container .d-flex.justify-content-between:nth-of-type(2) p.mb-0:first-child").textContent = `€0.00 x 0 nights`;
                            document.querySelector(".price-container .d-flex.justify-content-between:nth-of-type(2) p.mb-0:last-child").textContent = "€0.00";
                        }
                    }
                } else {
                    console.error("No pricing data found for selected dates.");
                }
            });
        }
    }

    function calculateAdditionalGuestFee(totalGuests) {
        switch (totalGuests) {
            case 4:
                return 23;
            case 5:
                return 46;
            case 6:
                return 69;
            default:
                return 0;
        }
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function fetchApiData(startDate, endDate, uuids, callback) {
        startDate = new Date(startDate);
        endDate = new Date(endDate);

        const formattedStartDate = formatDate(startDate);
        const formattedEndDate = formatDate(endDate);

        // console.log("Fetching API data:", {
        //     startDate: formattedStartDate,
        //     endDate: formattedEndDate,
        //     uuids: uuids
        // });

        const adults = parseInt(document.getElementById("adults").value) || 0;
        const children = parseInt(document.getElementById("children").value) || 0;
        const totalGuests = adults + children;

        uuids = updateUUIDs(totalGuests);

        const apiRequests = uuids.map(uuid => {
            const apiUrl = `https://public.api.hospitable.com/v2/properties/${uuid}/calendar?start_date=${formattedStartDate}&end_date=${formattedEndDate}`;

            return fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTYyNGRmMC0xMmYxLTQ0OGUtYjg4NC00MzY3ODBhNWQzY2QiLCJqdGkiOiI5ZWQwMjY2NzQzYTU2NzFmYzQ0OTBjMjFmMGQxMDBlMWQ1ZWI0YmI0MjZkMTczYmJlMWM2ZDc4OTBlNGI3NmFiNDdmOGQ4ZTBkMDBjZDA5YSIsImlhdCI6MTc2NjY2MTM4OC43MTM1MTIsIm5iZiI6MTc2NjY2MTM4OC43MTM1MTQsImV4cCI6MTc5ODE5NzM4OC43MDkwNjgsInN1YiI6IjIyNTA1NCIsInNjb3BlcyI6WyJwYXQ6cmVhZCIsInBhdDp3cml0ZSJdfQ.K77bDXEhF9J9f00Zs_0-hQphdJAQoE0PX6N9MPQ4SYIUa-nbYYXaCzCtLIL_B2GbTqtAYWFg_1W_SnJfytpq6fFJ_xUTc_-5c0fiZkrfTFmtSvGj7MDWRSM_XYqXa5YRY48NXaZIM0nlxXGplt7yLTeaURi5qQDkBHpG4UoxV7iEtxqQ24pjWzTlD9TT4Z4GvvHO8ru6Y66U_YEaH9oDTvKiH2VF6zNrRSA3vL4zK3pxjFQ0bqBeZgmrWAJmg7hq07nTe-z8HnrNp2VQy0iFRlodlTrMGxIibPtjstC5bQJWiZYWnbB9JcchTgAKCUlBkFQbnsDHDv8F3mlB6C_gNgkce_36rVIQB1gJgnX_9kVB0qNV3YjEblRff2cFfuV_DQoYrzTlF5rsQ_w9T0Na3Rxu9LAINknJbrR-GD8ZRdAYk3bJAp_IlQ-rd6dzJryPxyMXZxmVaqxCOnRQ3Cnu12vClPRhvCTUrO1ERLOzK69qrGDSL29tRyPD3uP3HJl6WTlcdqaTpmwGH7gjva-fsy_yFltlAK4hk2kBnhnd2Q_cldTRWaRFFsWe1a1g0d-T1aH9Q4s4W6B8e_H9Ji5YK0tawNFjOd3XEpXhFEb4X7v1ZLMou-YS5aqP1Uaq6mczZiCBM4oQieg-1EW--8NSpT3BGK8Vq--Pf4ELayfziqs"
                }
            })
                .then(response => response.json())
                .then(data => {
                    return { uuid, data };
                })
                .catch(error => {
                    console.error("Error fetching API:", error);
                    return { uuid, error: error.message };
                });
        });

        Promise.all(apiRequests).then(results => {
            const combinedData = results.reduce((acc, { uuid, data, error }) => {
                acc[uuid] = error ? { error } : data;
                return acc;
            }, {});

            // console.log("Combined API data:", {
            //     uuids: Object.keys(combinedData),
            //     hasErrors: Object.values(combinedData).some(data => data.error)
            // });

            callback(combinedData);
        });
    }

    function getMonthDateRange(year, month) {
        const start_date = new Date(year, month, 1);
        const end_date = new Date(year, month + 1, 0);

        const formatDate = (date) => {
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        };

        return {
            start_date: formatDate(start_date),
            end_date: formatDate(end_date),
        };
    }

    function getUUID() {
        const adults = parseInt(document.getElementById("adults").value) || 0;
        const children = parseInt(document.getElementById("children").value) || 0;
        const totalGuests = adults + children;
        return updateUUIDs(totalGuests);
    }

    const currentDate = new Date();
    const { start_date, end_date } = getMonthDateRange(currentDate.getFullYear(), currentDate.getMonth());

    let unavailableDatesCache = [];

    const adults = parseInt(document.getElementById("adults").value) || 0;
    const children = parseInt(document.getElementById("children").value) || 0;
    const totalGuests = adults + children;
    const dateRange = getMonthDateRange(currentDate.getFullYear(), currentDate.getMonth());
    const month_start_date = dateRange.start_date;
    const month_end_date = dateRange.end_date;

    function initializeCalendar() {
        // Destroy existing calendar instance if it exists
        if (calendar && typeof calendar.destroy === 'function') {
            calendar.destroy();
        }
        const asYMD = (d) => {
            const y = d.getFullYear();
            const m = String(d.getMonth() + 1).padStart(2, "0");
            const day = String(d.getDate()).padStart(2, "0");
            return `${y}-${m}-${day}`;
        };
        const parseYMD = (s) => {
            const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
            if (!m) return null;
            const y = +m[1], mo = +m[2] - 1, d = +m[3];
            const dt = new Date(y, mo, d, 12, 0, 0, 0);
            return isNaN(dt) ? null : dt;
        };
        const sameDay = (a, b) =>
            a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate();

        const cmpDay = (a, b) => {
            if (sameDay(a, b)) return 0;
            return a < new Date(b.getFullYear(), b.getMonth(), b.getDate(), 12) ? -1 : 1;
        };

        const checkoutDatesByUUID = checkOutDatesByUUID;

        if (!calendar || !calendar._apiDates) {
            calendar = { _apiDates: [] };
        }

        calendar = flatpickr("#calendar", {
            inline: true,
            dateFormat: "Y-m-d",
            mode: "range",
            locale: {
                firstDayOfWeek: 1,
                monthSelectorType: "static"
            },
            minDate: "today",
            showMonths: 1,
            monthSelectorType: "static",
            static: true,

            onReady: function (selectedDates, dateStr, instance) {
                // console.log('Calendar onReady event triggered');
                
                // Use the instance parameter instead of the global calendar variable
                // to ensure we're using the correct flatpickr instance
                if (instance && typeof instance.set === 'function') {
                    const hardcodedDates = ['2025-09-05', '2025-09-19'];
                    // console.log('Hardcoded enabled dates:', hardcodedDates);
                    
                    instance.set('enable', hardcodedDates);
                    instance.redraw();
                    // console.log('Hardcoded dates enabled on calendar ready:', hardcodedDates);
                }
                
                const currentDate = new Date();
                const { start_date, end_date } = getMonthDateRange(currentDate.getFullYear(), currentDate.getMonth());
                const adults = parseInt(document.getElementById("adults").value) || 0;
                const children = parseInt(document.getElementById("children").value) || 0;
                const totalGuests = adults + children;
                
                fetchApiData(start_date, end_date, uuids, (data) => {
                    updateCalendarWithAPIResponse(data, ['2025-09-05', '2025-09-19']);
                });
            },

            onMonthChange: function (selectedDates, dateStr, instance) {
                // console.log('Calendar onMonthChange event triggered');
                const { start_date, end_date } = getMonthDateRange(instance.currentYear, instance.currentMonth);
                const adults = parseInt(document.getElementById("adults").value) || 0;
                const children = parseInt(document.getElementById("children").value) || 0;
                const totalGuests = adults + children;

                const hardcodedDates = ['2025-09-05', '2025-09-19'];
                // console.log('Hardcoded enabled dates on month change:', hardcodedDates);

                if (instance && typeof instance.set === 'function') {
                    instance.set('enable', hardcodedDates);
                    instance.redraw();
                    // console.log('Hardcoded dates enabled on month change:', hardcodedDates);
                }

                fetchApiData(start_date, end_date, uuids, (data) => {
                    updateCalendarWithAPIResponse(data, hardcodedDates);
                });
            },

            onDayCreate: function (dObj, dStr, fp, dayElem) {
                const date = dayElem.dateObj;
                const formatted = asYMD(date);

                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (date < today) {
                    dayElem.classList.add("disabled");
                    return;
                }
            },

            onChange: async function (selectedDates) {
                const clearBtn = document.getElementById("clear-btn");
                const priceContainer = document.getElementById("priceContainer");
                const discounts = document.getElementById("discounts");
                const additionalFee = document.getElementById("additionalFee");
                const loader = document.getElementById("loader");
                const calendarContainer = document.getElementById("calendar-container");
                const startDateInput = document.getElementById('start_date');
                const endDateInput = document.getElementById('end_date');

                if (selectedDates.length === 0) {
                    [clearBtn, priceContainer, discounts, additionalFee].forEach(el => el && el.classList.add("d-none"));
                    startDateInput.value = '';
                    endDateInput.value = '';

                    const uuidTextbox = document.getElementById('uuid');
                    if (uuidTextbox) uuidTextbox.value = '';

                    if (calendar && typeof calendar.set === 'function') {
                        calendar.set('enable', []);
                        calendar.redraw();
                    }
                    validateForm();
                    return;
                }

                if (
                    selectedDates.length === 2 &&
                    asYMD(selectedDates[0]) === asYMD(selectedDates[1])
                ) {
                    calendar.clear();
                    return;
                }

                if (clearBtn) clearBtn.classList.remove("d-none");
                if (loader) loader.classList.remove("d-none");
                if (calendarContainer) calendarContainer.classList.add("disabled");

                if (selectedDates.length === 1) {
                    const start = selectedDates[0];
                    const startYMD = asYMD(start);

                    startDateInput.value = startYMD;

                    const adults = parseInt(document.getElementById("adults").value) || 0;
                    const children = parseInt(document.getElementById("children").value) || 0;
                    const totalGuests = adults + children;
                    // console.log(`Total guests: ${totalGuests}`);

                    const relevantUUIDs = updateUUIDs(totalGuests);

                    let maxCheckoutDate = null;
                    let allPropertyCheckouts = [];

                    async function validateConsecutiveAvailability(uuid, startDate, checkoutDate) {
                        try {
                            const formattedStart = asYMD(startDate);
                            const formattedCheckout = asYMD(checkoutDate);

                            const apiUrl = `https://public.api.hospitable.com/v2/properties/${uuid}/calendar?start_date=${formattedStart}&end_date=${formattedCheckout}`;
                            const response = await fetch(apiUrl, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTYyNGRmMC0xMmYxLTQ0OGUtYjg4NC00MzY3ODBhNWQzY2QiLCJqdGkiOiI5ZWQwMjY2NzQzYTU2NzFmYzQ0OTBjMjFmMGQxMDBlMWQ1ZWI0YmI0MjZkMTczYmJlMWM2ZDc4OTBlNGI3NmFiNDdmOGQ4ZTBkMDBjZDA5YSIsImlhdCI6MTc2NjY2MTM4OC43MTM1MTIsIm5iZiI6MTc2NjY2MTM4OC43MTM1MTQsImV4cCI6MTc5ODE5NzM4OC43MDkwNjgsInN1YiI6IjIyNTA1NCIsInNjb3BlcyI6WyJwYXQ6cmVhZCIsInBhdDp3cml0ZSJdfQ.K77bDXEhF9J9f00Zs_0-hQphdJAQoE0PX6N9MPQ4SYIUa-nbYYXaCzCtLIL_B2GbTqtAYWFg_1W_SnJfytpq6fFJ_xUTc_-5c0fiZkrfTFmtSvGj7MDWRSM_XYqXa5YRY48NXaZIM0nlxXGplt7yLTeaURi5qQDkBHpG4UoxV7iEtxqQ24pjWzTlD9TT4Z4GvvHO8ru6Y66U_YEaH9oDTvKiH2VF6zNrRSA3vL4zK3pxjFQ0bqBeZgmrWAJmg7hq07nTe-z8HnrNp2VQy0iFRlodlTrMGxIibPtjstC5bQJWiZYWnbB9JcchTgAKCUlBkFQbnsDHDv8F3mlB6C_gNgkce_36rVIQB1gJgnX_9kVB0qNV3YjEblRff2cFfuV_DQoYrzTlF5rsQ_w9T0Na3Rxu9LAINknJbrR-GD8ZRdAYk3bJAp_IlQ-rd6dzJryPxyMXZxmVaqxCOnRQ3Cnu12vClPRhvCTUrO1ERLOzK69qrGDSL29tRyPD3uP3HJl6WTlcdqaTpmwGH7gjva-fsy_yFltlAK4hk2kBnhnd2Q_cldTRWaRFFsWe1a1g0d-T1aH9Q4s4W6B8e_H9Ji5YK0tawNFjOd3XEpXhFEb4X7v1ZLMou-YS5aqP1Uaq6mczZiCBM4oQieg-1EW--8NSpT3BGK8Vq--Pf4ELayfziqs"
                                }
                            });
                            const data = await response.json();

                            if (!data.data || !data.data.days) {
                                return false;
                            }

                            const checkoutDates = checkOutDatesByUUID[uuid] || [];

                            const daysToCheck = data.data.days.filter(day => {
                                const dayDate = new Date(day.date);
                                return dayDate >= startDate && dayDate <= checkoutDate;
                            });

                            // console.log(`Validating consecutive availability for UUID ${uuid}:`, {
                            //     startDate: asYMD(startDate),
                            //     checkoutDate: asYMD(checkoutDate),
                            //     daysToCheck: daysToCheck.map(d => ({ date: d.date, status: d.status.reason }))
                            // });

                            const allAvailable = daysToCheck.every(day => {
                                const dayDate = new Date(day.date);

                                if (cmpDay(dayDate, checkoutDate) === 0 && checkoutDates.includes(day.date)) {
                                    // console.log(`Day ${day.date} is checkout date and allowed`);
                                    return true;
                                }

                                if (day.status.reason === "AVAILABLE") {
                                    // console.log(`Day ${day.date} is AVAILABLE`);
                                    return true;
                                }

                                if ((day.status.reason === "RESERVED" || day.status.reason === "BLOCKED") &&
                                    checkoutDates.includes(day.date) && cmpDay(dayDate, checkoutDate) !== 0) {
                                    // console.log(`Day ${day.date} is ${day.status.reason} but allowed as checkout date`);
                                    return true;
                                }

                                // console.log(`Day ${day.date} is ${day.status.reason} and NOT available`);
                                return false;
                            });

                            return allAvailable;
                        } catch (error) {
                            console.error(`Error validating availability for UUID ${uuid}:`, error);
                            return false;
                        }
                    }

                    const validationPromises = relevantUUIDs.map(async (uuid) => {
                        const propertyCheckoutDates = checkOutDatesByUUID[uuid] || [];

                        // console.log(`Checking UUID ${uuid}:`, {
                        //     checkoutDates: propertyCheckoutDates,
                        //     startDate: asYMD(start),
                        //     propertyName: uuid === "f866b203-6ea3-4340-ac15-3f4a5f2aad08" ? "Lemon House" :
                        //         uuid === "65286804-3990-4916-a8a7-c110062a50fd" ? "Mandarin House" :
                        //             uuid === "93a66030-841c-4ec4-be4f-750236629ec1" ? "Orange House" : "Unknown",
                        //     validCheckoutDates: propertyCheckoutDates.filter(dateStr => {
                        //         const date = parseYMD(dateStr);
                        //         return date && cmpDay(date, start) === 1;
                        //     })
                        // });

                        const validCheckoutDates = propertyCheckoutDates
                            .map(dateStr => parseYMD(dateStr))
                            .filter(date => date && cmpDay(date, start) === 1)
                            .sort((a, b) => a - b);

                        if (validCheckoutDates.length === 0) {
                            // console.log(`UUID ${uuid} has no valid checkout dates after start date`);
                            return null;
                        }

                        for (const checkoutDate of validCheckoutDates) {
                            const isAvailable = await validateConsecutiveAvailability(uuid, start, checkoutDate);

                            if (isAvailable) {
                                // console.log(`UUID ${uuid} has valid consecutive availability until checkout: ${asYMD(checkoutDate)}`);
                                return {
                                    uuid: uuid,
                                    checkoutDate: checkoutDate
                                };
                            } else {
                                // console.log(`UUID ${uuid} does not have consecutive availability until ${asYMD(checkoutDate)}`);
                            }
                        }

                        // console.log(`UUID ${uuid} has no valid consecutive checkout dates`);
                        return null;
                    });

                    const validationResults = await Promise.all(validationPromises);
                    const validProperties = validationResults.filter(result => result !== null);

                    allPropertyCheckouts.push(...validProperties);

                    if (allPropertyCheckouts.length > 0) {
                        // console.log('Properties with valid checkout dates:', allPropertyCheckouts.map(p => ({
                        //     uuid: p.uuid,
                        //     checkoutDate: asYMD(p.checkoutDate),
                        //     propertyName: p.uuid === "f866b203-6ea3-4340-ac15-3f4a5f2aad08" ? "Lemon House" :
                        //         p.uuid === "65286804-3990-4916-a8a7-c110062a50fd" ? "Mandarin House" :
                        //             p.uuid === "93a66030-841c-4ec4-be4f-750236629ec1" ? "Orange House" : "Unknown"
                        // })));

                        maxCheckoutDate = allPropertyCheckouts.reduce((max, property) => {
                            return !max || cmpDay(property.checkoutDate, max) === 1 ? property.checkoutDate : max;
                        }, null);

                        // console.log('Maximum checkout date selected:', asYMD(maxCheckoutDate));
                    } else {
                        // console.log('No properties found with consecutive availability, checking individual date availability...');

                        const allPossibleCheckouts = [];
                        relevantUUIDs.forEach(uuid => {
                            const propertyCheckoutDates = checkOutDatesByUUID[uuid] || [];
                            const validDates = propertyCheckoutDates
                                .map(dateStr => parseYMD(dateStr))
                                .filter(date => date && cmpDay(date, start) === 1);

                            if (validDates.length > 0) {
                                const maxDate = validDates.reduce((max, date) => {
                                    return !max || cmpDay(date, max) === 1 ? date : max;
                                }, null);

                                if (maxDate) {
                                    allPossibleCheckouts.push({
                                        uuid: uuid,
                                        checkoutDate: maxDate
                                    });
                                }
                            }
                        });

                        if (allPossibleCheckouts.length > 0) {
                            maxCheckoutDate = allPossibleCheckouts.reduce((max, property) => {
                                return !max || cmpDay(property.checkoutDate, max) === 1 ? property.checkoutDate : max;
                            }, null);

                            // console.log('Using maximum possible checkout date (without consecutive validation):', asYMD(maxCheckoutDate));
                            allPropertyCheckouts.push(...allPossibleCheckouts);
                        }
                    }

                    const uuidTextbox = document.getElementById('uuid');
                    if (allPropertyCheckouts.length > 0 && uuidTextbox) {
                        const propertyPriority = totalGuests <= 4 ? [
                            "f866b203-6ea3-4340-ac15-3f4a5f2aad08",
                            "65286804-3990-4916-a8a7-c110062a50fd",
                            "93a66030-841c-4ec4-be4f-750236629ec1"
                        ] : [
                            "65286804-3990-4916-a8a7-c110062a50fd",
                            "93a66030-841c-4ec4-be4f-750236629ec1"
                        ];

                        let selectedProperty = null;
                        for (const priorityUUID of propertyPriority) {
                            const property = allPropertyCheckouts.find(p => p.uuid === priorityUUID);
                            if (property) {
                                selectedProperty = property;
                                break;
                            }
                        }

                        if (selectedProperty) {
                            uuidTextbox.value = selectedProperty.uuid;
                            const propertyName = selectedProperty.uuid === "f866b203-6ea3-4340-ac15-3f4a5f2aad08" ? "Lemon House" :
                                selectedProperty.uuid === "65286804-3990-4916-a8a7-c110062a50fd" ? "Mandarin House" :
                                    selectedProperty.uuid === "93a66030-841c-4ec4-be4f-750236629ec1" ? "Orange House" : "Unknown";
                            // console.log(`Start date selected: ${startYMD}, Default property UUID: ${selectedProperty.uuid} (${propertyName})`);
                        } else {
                            allPropertyCheckouts.sort((a, b) => a.checkoutDate - b.checkoutDate);
                            uuidTextbox.value = allPropertyCheckouts[0].uuid;
                            // console.log(`Start date selected: ${startYMD}, Fallback property UUID: ${allPropertyCheckouts[0].uuid}`);
                        }
                    } else if (uuidTextbox) {
                        uuidTextbox.value = 'No property available';
                        // console.log(`Start date selected: ${startYMD}, No available property found`);
                    }

                    if (maxCheckoutDate) {
                        const enabledDates = [];
                        let currentDate = new Date(start);

                        while (cmpDay(currentDate, maxCheckoutDate) <= 0) {
                            enabledDates.push(asYMD(currentDate));
                            currentDate.setDate(currentDate.getDate() + 1);
                        }

                        // console.log('Enabling dates from', asYMD(start), 'to', asYMD(maxCheckoutDate));
                        // console.log('Total enabled dates:', enabledDates.length);
                        // console.log('Enabled dates list:', enabledDates);

                        if (enabledDates.length > 0) {
                            if (calendar && typeof calendar.set === 'function') {
                                calendar.set('enable', enabledDates);
                                calendar.redraw();
                            }
                        }
                    } else {
                        const enabledDates = [];
                        let currentDate = new Date(start);
                        const maxDate = new Date(start);
                        maxDate.setDate(maxDate.getDate() + 90);

                        while (cmpDay(currentDate, maxDate) <= 0) {
                            enabledDates.push(asYMD(currentDate));
                            currentDate.setDate(currentDate.getDate() + 1);
                        }

                        // console.log('No specific checkout date found, enabling 90 days from start date');
                        // console.log('Fallback enabled dates:', enabledDates.length, 'dates');

                        if (enabledDates.length > 0) {
                            if (calendar && typeof calendar.set === 'function') {
                                calendar.set('enable', enabledDates);
                                calendar.redraw();
                            }
                        }
                    }

                    const { start_date: monthStartDate, end_date: monthEndDate } =
                        getMonthDateRange(start.getFullYear(), start.getMonth());

                    const currentEnabledDates = maxCheckoutDate ? (() => {
                        const dates = [];
                        let currentDate = new Date(start);
                        while (cmpDay(currentDate, maxCheckoutDate) <= 0) {
                            dates.push(asYMD(currentDate));
                            currentDate.setDate(currentDate.getDate() + 1);
                        }
                        return dates;
                    })() : (() => {
                        const dates = [];
                        let currentDate = new Date(start);
                        const maxDate = new Date(start);
                        maxDate.setDate(maxDate.getDate() + 90);
                        while (cmpDay(currentDate, maxDate) <= 0) {
                            dates.push(asYMD(currentDate));
                            currentDate.setDate(currentDate.getDate() + 1);
                        }
                        return dates;
                    })();

                    fetchAPIDataNew(startYMD, monthEndDate, totalGuests, selectedDates)
                        .then(() => {
                            if (currentEnabledDates && Array.isArray(currentEnabledDates) && currentEnabledDates.length > 0) {
                                // console.log('Restoring enabled dates after fetchAPIDataNew:', currentEnabledDates.length, 'dates');
                                calendar.set('enable', currentEnabledDates);
                                calendar.redraw();
                            }

                            if (loader) loader.classList.add("d-none");
                            if (calendarContainer) calendarContainer.classList.remove("disabled");
                        });
                } else if (selectedDates.length === 2) {
                    const s0 = selectedDates[0];
                    const s1 = selectedDates[1];

                    const startYMD = asYMD(s0);
                    const endYMD = asYMD(s1);

                    startDateInput.value = startYMD;
                    endDateInput.value = endYMD;

                    const adults = parseInt(document.getElementById("adults").value) || 0;
                    const children = parseInt(document.getElementById("children").value) || 0;
                    const totalGuests = adults + children;

                    const relevantUUIDs = updateUUIDs(totalGuests);
                    let selectedPropertyUUID = null;

                    const viableProperties = [];

                    relevantUUIDs.forEach(uuid => {
                        const propertyCheckoutDates = checkOutDatesByUUID[uuid] || [];
                        const nextCheckout = propertyCheckoutDates
                            .map(dateStr => parseYMD(dateStr))
                            .filter(date => date && cmpDay(date, s0) === 1)
                            .sort((a, b) => a - b)[0];

                        if (nextCheckout && (cmpDay(s1, nextCheckout) <= 0)) {
                            viableProperties.push({
                                uuid: uuid,
                                checkoutDate: nextCheckout,
                                propertyName: uuid === "f866b203-6ea3-4340-ac15-3f4a5f2aad08" ? "Lemon House" :
                                    uuid === "65286804-3990-4916-a8a7-c110062a50fd" ? "Mandarin House" :
                                        uuid === "93a66030-841c-4ec4-be4f-750236629ec1" ? "Orange House" : "Unknown"
                            });
                        }
                    });

                    if (viableProperties.length > 0) {
                        const propertyPriority = totalGuests <= 4 ? [
                            "f866b203-6ea3-4340-ac15-3f4a5f2aad08",
                            "65286804-3990-4916-a8a7-c110062a50fd",
                            "93a66030-841c-4ec4-be4f-750236629ec1"
                        ] : [
                            "65286804-3990-4916-a8a7-c110062a50fd",
                            "93a66030-841c-4ec4-be4f-750236629ec1"
                        ];

                        for (const priorityUUID of propertyPriority) {
                            const viableProperty = viableProperties.find(p => p.uuid === priorityUUID);
                            if (viableProperty) {
                                selectedPropertyUUID = viableProperty.uuid;
                                // console.log(`Selected property: ${viableProperty.propertyName} (${viableProperty.uuid}) for checkout date ${asYMD(viableProperty.checkoutDate)}`);
                                break;
                            }
                        }

                        // console.log('Viable properties for date range:', viableProperties.map(p => ({
                        //     uuid: p.uuid,
                        //     propertyName: p.propertyName,
                        //     checkoutDate: asYMD(p.checkoutDate)
                        // })));
                    }

                    const uuidTextbox = document.getElementById('uuid');
                    if (selectedPropertyUUID && uuidTextbox) {
                        uuidTextbox.value = selectedPropertyUUID;
                        // console.log(`Date range selected: ${startYMD} to ${endYMD}, Assigned to UUID: ${selectedPropertyUUID}`);
                    } else {
                        // console.log(`No viable property found for date range: ${startYMD} to ${endYMD}`);
                    }

                    processBookingQuote(s0, s1);
                }

                validateForm();
            },

            onValueUpdate: function (selectedDates) {
                if (
                    selectedDates.length === 2 &&
                    asYMD(selectedDates[0]) === asYMD(selectedDates[1])
                ) {
                    calendar.clear();
                }
            }
        });
    }

    function processBookingQuote(startDate, endDate) {
        const adults = parseInt(document.getElementById("adults").value) || 0;
        const children = parseInt(document.getElementById("children").value) || 0;
        const totalGuests = adults + children;

        const propertySequence = totalGuests <= 4 ? [
            { uuid: "f866b203-6ea3-4340-ac15-3f4a5f2aad08", property_id: "1522856" },
            { uuid: "65286804-3990-4916-a8a7-c110062a50fd", property_id: "1522854" },
            { uuid: "93a66030-841c-4ec4-be4f-750236629ec1", property_id: "1729952" }
        ] : [
            { uuid: "65286804-3990-4916-a8a7-c110062a50fd", property_id: "1522854" },
            { uuid: "93a66030-841c-4ec4-be4f-750236629ec1", property_id: "1729952" }
        ];

        // console.log('Checking availability for dates:', {
        //     startDate: formatDate(startDate),
        //     endDate: formatDate(endDate),
        //     totalGuests
        // });

        function checkAvailability(uuid) {
            const apiUrl = `https://public.api.hospitable.com/v2/properties/${uuid}/calendar?start_date=${formatDate(startDate)}&end_date=${formatDate(endDate)}`;

            return fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTYyNGRmMC0xMmYxLTQ0OGUtYjg4NC00MzY3ODBhNWQzY2QiLCJqdGkiOiI5ZWQwMjY2NzQzYTU2NzFmYzQ0OTBjMjFmMGQxMDBlMWQ1ZWI0YmI0MjZkMTczYmJlMWM2ZDc4OTBlNGI3NmFiNDdmOGQ4ZTBkMDBjZDA5YSIsImlhdCI6MTc2NjY2MTM4OC43MTM1MTIsIm5iZiI6MTc2NjY2MTM4OC43MTM1MTQsImV4cCI6MTc5ODE5NzM4OC43MDkwNjgsInN1YiI6IjIyNTA1NCIsInNjb3BlcyI6WyJwYXQ6cmVhZCIsInBhdDp3cml0ZSJdfQ.K77bDXEhF9J9f00Zs_0-hQphdJAQoE0PX6N9MPQ4SYIUa-nbYYXaCzCtLIL_B2GbTqtAYWFg_1W_SnJfytpq6fFJ_xUTc_-5c0fiZkrfTFmtSvGj7MDWRSM_XYqXa5YRY48NXaZIM0nlxXGplt7yLTeaURi5qQDkBHpG4UoxV7iEtxqQ24pjWzTlD9TT4Z4GvvHO8ru6Y66U_YEaH9oDTvKiH2VF6zNrRSA3vL4zK3pxjFQ0bqBeZgmrWAJmg7hq07nTe-z8HnrNp2VQy0iFRlodlTrMGxIibPtjstC5bQJWiZYWnbB9JcchTgAKCUlBkFQbnsDHDv8F3mlB6C_gNgkce_36rVIQB1gJgnX_9kVB0qNV3YjEblRff2cFfuV_DQoYrzTlF5rsQ_w9T0Na3Rxu9LAINknJbrR-GD8ZRdAYk3bJAp_IlQ-rd6dzJryPxyMXZxmVaqxCOnRQ3Cnu12vClPRhvCTUrO1ERLOzK69qrGDSL29tRyPD3uP3HJl6WTlcdqaTpmwGH7gjva-fsy_yFltlAK4hk2kBnhnd2Q_cldTRWaRFFsWe1a1g0d-T1aH9Q4s4W6B8e_H9Ji5YK0tawNFjOd3XEpXhFEb4X7v1ZLMou-YS5aqP1Uaq6mczZiCBM4oQieg-1EW--8NSpT3BGK8Vq--Pf4ELayfziqs"
                }
            })
                .then(response => response.json())
                .then(data => {
                    const selectedDays = data.data.days.filter(day => {
                        const dayDate = new Date(day.date);
                        return dayDate >= startDate && dayDate < endDate;
                    });

                    const checkOutDates = checkOutDatesByUUID[uuid] || [];

                    // console.log(`Checking availability for UUID ${uuid} from ${formatDate(startDate)} to ${formatDate(endDate)}:`, {
                    //     selectedDays: selectedDays.map(d => ({ date: d.date, status: d.status.reason })),
                    //     checkOutDates: checkOutDates
                    // });

                    const isAvailable = selectedDays.every(day => {
                        if (day.status.reason === "AVAILABLE") {
                            // console.log(`Day ${day.date} is AVAILABLE`);
                            return true;
                        }
                        if (day.status.reason === "RESERVED" && checkOutDates.includes(day.date)) {
                            // console.log(`Day ${day.date} is reserved but treated as available due to checkout dates.`);
                            return true;
                        }
                        if (day.status.reason === "BLOCKED" && checkOutDates.includes(day.date)) {
                            // console.log(`Day ${day.date} is blocked but treated as available due to checkout dates.`);
                            return true;
                        }
                        // console.log(`Day ${day.date} with status ${day.status.reason} is NOT available (not in checkout dates: ${checkOutDates.join(', ')})`);
                        return false;
                    });

                    // console.log(`Availability check for UUID ${uuid}:`, {
                    //     uuid,
                    //     selectedDays: selectedDays.map(day => ({
                    //         date: day.date,
                    //         status: day.status.reason,
                    //         treatedAs: (
                    //             day.status.reason === "AVAILABLE" ||
                    //             ((day.status.reason === "RESERVED" || day.status.reason === "BLOCKED") && checkOutDates.includes(day.date))
                    //         ) ? "AVAILABLE" : "UNAVAILABLE"
                    //     })),
                    //     isAvailable
                    // });

                    return {
                        uuid,
                        isAvailable,
                        selectedDays
                    };
                });
        }

        function processQuoteForUUID(uuid, property_id) {
            document.getElementById('property_id').value = property_id;
            document.getElementById('uuid').value = uuid;

            const baseUrl = `https://api.hospitable.com/bookings/api/properties/${property_id}/quote`;
            const headers = {
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTYyNGRmMC0xMmYxLTQ0OGUtYjg4NC00MzY3ODBhNWQzY2QiLCJqdGkiOiI5ZWQwMjY2NzQzYTU2NzFmYzQ0OTBjMjFmMGQxMDBlMWQ1ZWI0YmI0MjZkMTczYmJlMWM2ZDc4OTBlNGI3NmFiNDdmOGQ4ZTBkMDBjZDA5YSIsImlhdCI6MTc2NjY2MTM4OC43MTM1MTIsIm5iZiI6MTc2NjY2MTM4OC43MTM1MTQsImV4cCI6MTc5ODE5NzM4OC43MDkwNjgsInN1YiI6IjIyNTA1NCIsInNjb3BlcyI6WyJwYXQ6cmVhZCIsInBhdDp3cml0ZSJdfQ.K77bDXEhF9J9f00Zs_0-hQphdJAQoE0PX6N9MPQ4SYIUa-nbYYXaCzCtLIL_B2GbTqtAYWFg_1W_SnJfytpq6fFJ_xUTc_-5c0fiZkrfTFmtSvGj7MDWRSM_XYqXa5YRY48NXaZIM0nlxXGplt7yLTeaURi5qQDkBHpG4UoxV7iEtxqQ24pjWzTlD9TT4Z4GvvHO8ru6Y66U_YEaH9oDTvKiH2VF6zNrRSA3vL4zK3pxjFQ0bqBeZgmrWAJmg7hq07nTe-z8HnrNp2VQy0iFRlodlTrMGxIibPtjstC5bQJWiZYWnbB9JcchTgAKCUlBkFQbnsDHDv8F3mlB6C_gNgkce_36rVIQB1gJgnX_9kVB0qNV3YjEblRff2cFfuV_DQoYrzTlF5rsQ_w9T0Na3Rxu9LAINknJbrR-GD8ZRdAYk3bJAp_IlQ-rd6dzJryPxyMXZxmVaqxCOnRQ3Cnu12vClPRhvCTUrO1ERLOzK69qrGDSL29tRyPD3uP3HJl6WTlcdqaTpmwGH7gjva-fsy_yFltlAK4hk2kBnhnd2Q_cldTRWaRFFsWe1a1g0d-T1aH9Q4s4W6B8e_H9Ji5YK0tawNFjOd3XEpXhFEb4X7v1ZLMou-YS5aqP1Uaq6mczZiCBM4oQieg-1EW--8NSpT3BGK8Vq--Pf4ELayfziqs"
            };

            const data = {
                checkin: formatDate(startDate),
                checkout: formatDate(endDate),
                num_guests: {
                    adults: parseInt(document.getElementById("adults").value) || 0,
                    children: parseInt(document.getElementById("children").value) || 0,
                    infants: parseInt(document.getElementById("infants").value) || 0,
                    pets: parseInt(document.getElementById("pets").value) || 0
                },
                site_id: uuid
            };

            return fetch(baseUrl, {
                method: 'POST',
                headers,
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.error) {
                        throw new Error(data.error);
                    }
                    return data;
                });
        }

        async function checkPropertiesSequentially() {
            const adults = parseInt(document.getElementById("adults").value) || 0;
            const children = parseInt(document.getElementById("children").value) || 0;
            const totalGuests = adults + children;

            const parseYMD = (s) => {
                const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
                if (!m) return null;
                const y = +m[1], mo = +m[2] - 1, d = +m[3];
                const dt = new Date(y, mo, d, 12, 0, 0, 0);
                return isNaN(dt) ? null : dt;
            };

            const cmpDay = (a, b) => {
                const sameDay = (a, b) =>
                    a.getFullYear() === b.getFullYear() &&
                    a.getMonth() === b.getMonth() &&
                    a.getDate() === b.getDate();

                if (sameDay(a, b)) return 0;
                return a < new Date(b.getFullYear(), b.getMonth(), b.getDate(), 12) ? -1 : 1;
            };

            const propertiesToCheck = totalGuests <= 4 ? [
                {
                    uuid: "f866b203-6ea3-4340-ac15-3f4a5f2aad08",
                    property_id: "1522856",
                    name: "Lemon House"
                },
                {
                    uuid: "65286804-3990-4916-a8a7-c110062a50fd",
                    property_id: "1522854",
                    name: "Mandarin House"
                },
                {
                    uuid: "93a66030-841c-4ec4-be4f-750236629ec1",
                    property_id: "1729952",
                    name: "Orange House"
                }
            ] : [
                {
                    uuid: "65286804-3990-4916-a8a7-c110062a50fd",
                    property_id: "1522854",
                    name: "Mandarin House"
                },
                {
                    uuid: "93a66030-841c-4ec4-be4f-750236629ec1",
                    property_id: "1729952",
                    name: "Orange House"
                }
            ];

            // console.log('Checking properties in sequence for dates:', {
            //     startDate: formatDate(startDate),
            //     endDate: formatDate(endDate),
            //     totalGuests,
            //     properties: propertiesToCheck.map(p => p.name)
            // });

            const viableProperties = [];

            for (const property of propertiesToCheck) {
                const propertyCheckoutDates = checkOutDatesByUUID[property.uuid] || [];

                const nextCheckout = propertyCheckoutDates
                    .map(dateStr => parseYMD(dateStr))
                    .filter(date => date && cmpDay(date, startDate) === 1)
                    .sort((a, b) => a - b)[0];

                if (nextCheckout && (cmpDay(endDate, nextCheckout) <= 0)) {
                    viableProperties.push({
                        ...property,
                        checkoutDate: nextCheckout
                    });
                    // console.log(`${property.name} can accommodate checkout until ${formatDate(nextCheckout)}`);
                }
            }

            // console.log('Viable properties for selected dates:', viableProperties.map(p => ({
            //     name: p.name,
            //     uuid: p.uuid,
            //     checkoutDate: formatDate(p.checkoutDate)
            // })));

            for (const property of propertiesToCheck) {
                try {
                    // console.log(`Checking availability for ${property.name} (${property.uuid})...`);
                    const availabilityResult = await checkAvailability(property.uuid);
                    // console.log('Availability result:', {
                    //     property: property.name,
                    //     available: availabilityResult.isAvailable,
                    //     days: availabilityResult.selectedDays.map(d => ({
                    //         date: d.date,
                    //         status: d.status.reason
                    //     }))
                    // });

                    if (availabilityResult.isAvailable) {
                        try {
                            // console.log(`Getting quote for ${property.name}...`);
                            const quoteData = await processQuoteForUUID(property.uuid, property.property_id);
                            if (!quoteData || !quoteData.data) {
                                throw new Error("Invalid quote data received");
                            }

                            // console.log('Quote successful:', {
                            //     property: property.name,
                            //     quote_id: quoteData.data.quote_id,
                            //     total: quoteData.data.total?.formatted_string
                            // });

                            document.getElementById('quote_id').value = quoteData.data.quote_id;
                            document.getElementById('property_id').value = property.property_id;
                            document.getElementById('uuid').value = property.uuid;

                            const priceContainer = document.getElementById("priceContainer");
                            if (priceContainer) {
                                priceContainer.classList.remove("d-none");

                                const totalPriceElement = document.querySelector(".price-container .d-flex.justify-content-between.mb-3 p.mb-0:last-child");
                                if (totalPriceElement) {
                                    totalPriceElement.textContent = quoteData.data.total?.formatted_string || "€0.00";
                                }

                                const subTotalElement = document.querySelector(".price-container .d-flex.justify-content-between:nth-of-type(2) p.mb-0:first-child");
                                const subTotalValueElement = document.querySelector(".price-container .d-flex.justify-content-between:nth-of-type(2) p.mb-0:last-child");

                                if (subTotalElement && subTotalValueElement) {
                                    subTotalElement.textContent = quoteData.data.sub_total?.title || "Subtotal";
                                    subTotalValueElement.textContent = quoteData.data.sub_total?.value?.formatted_string || "€0.00";
                                }

                                const discountsContainer = document.getElementById("discounts");
                                if (discountsContainer) {
                                    if (quoteData.data.discounts && Object.keys(quoteData.data.discounts).length > 0) {
                                        discountsContainer.classList.remove("d-none");

                                        if (quoteData.data.discounts.weekly_discount) {
                                            const discountElement = document.querySelector(".price-container .d-flex.justify-content-between:nth-of-type(4) p.mb-0:first-child");
                                            const discountValueElement = document.querySelector(".price-container .d-flex.justify-content-between:nth-of-type(4) p.mb-0:last-child");

                                            if (discountElement && discountValueElement) {
                                                discountElement.textContent = quoteData.data.discounts.weekly_discount.title;
                                                discountValueElement.textContent = quoteData.data.discounts.weekly_discount.value.formatted_string;
                                            }
                                        } else if (quoteData.data.discounts.monthly_discount) {
                                            const discountElement = document.querySelector(".price-container .d-flex.justify-content-between:nth-of-type(4) p.mb-0:first-child");
                                            const discountValueElement = document.querySelector(".price-container .d-flex.justify-content-between:nth-of-type(4) p.mb-0:last-child");

                                            if (discountElement && discountValueElement) {
                                                discountElement.textContent = quoteData.data.discounts.monthly_discount.title;
                                                discountValueElement.textContent = quoteData.data.discounts.monthly_discount.value.formatted_string;
                                            }
                                        }
                                    } else {
                                        discountsContainer.classList.add("d-none");
                                    }
                                }

                                const taxesContainer = document.getElementById('taxes');
                                if (taxesContainer) {
                                    // console.log('Taxes data:', quoteData.data.taxes);
                                    const taxValue = quoteData.data.taxes && quoteData.data.taxes.length > 0
                                        ? quoteData.data.taxes[0].value.formatted_string
                                        : "€0.00";
                                    
                                    // Only show taxes container if tax value is not €0.00
                                    if (taxValue !== "€0.00") {
                                        taxesContainer.classList.remove('d-none');
                                    } else {
                                        taxesContainer.classList.add('d-none');
                                    }
                                    
                                    const taxValueElement = taxesContainer.querySelectorAll('p.mb-0')[1];
                                    if (taxValueElement) {
                                        taxValueElement.textContent = taxValue;
                                        // console.log('Estimated taxes value:', taxValueElement.textContent);
                                    }
                                }

                                const feesContainer = document.getElementById('fees');
                                if (feesContainer && quoteData?.data?.fees) {
                                    const fees = quoteData.data.fees;
                                    feesContainer.innerHTML = '';

                                    Object.keys(fees).forEach(key => {
                                        const fee = fees[key];
                                        if (fee?.title && fee?.value?.formatted_string) {
                                            const row = document.createElement('div');
                                            row.className = "d-flex justify-content-between mb-1";

                                            const name = document.createElement('p');
                                            name.className = "mb-0";
                                            name.textContent = fee.title;

                                            const value = document.createElement('p');
                                            value.className = "mb-0";
                                            value.textContent = fee.value.formatted_string;

                                            row.appendChild(name);
                                            row.appendChild(value);
                                            feesContainer.appendChild(row);
                                        }
                                    });

                                    if (feesContainer.children.length > 0) {
                                        feesContainer.classList.remove('d-none');
                                    }
                                }
                            }

                            document.getElementById("loader").classList.add("d-none");
                            document.getElementById("calendar-container").classList.remove("disabled");

                            return;

                        } catch (quoteError) {
                            console.error(`Quote failed for ${property.name}:`, quoteError.message);
                            continue;
                        }
                    }
                } catch (error) {
                    console.error(`Availability check failed for ${property.name}:`, error.message);
                    continue;
                }
            }

            // console.log('No available properties found for the selected dates');

            const bookingMessage = document.getElementById("price-error");
            if (bookingMessage) {
                bookingMessage.textContent = "No properties available for the selected dates.";
                bookingMessage.classList.remove("d-none");
            } else {
                console.error("Could not find price-error element");
            }

            document.getElementById("loader").classList.add("d-none");
            document.getElementById("calendar-container").classList.remove("disabled");
        }

        checkPropertiesSequentially();
    }

    const style = document.createElement('style');
    style.innerHTML = `
        .checkout-disabled {
            opacity: 0.9;
            position: relative;
        }

        .checkout-disabled[data-tooltip]:hover::after {
            content: attr(data-tooltip);
            position: absolute;
            background: #333;
            color: #fff;
            padding: 5px 10px;
            border-radius: 4px;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
            z-index: 1000;
            font-size: 12px;
        }

        .custom-hover {
            position: relative;
            cursor: pointer;
        }

        .custom-hover::after {
            content: attr(title);
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: #333;
            color: #fff;
            padding: 5px;
            border-radius: 5px;
            white-space: nowrap;
            display: none;
            z-index: 10;
        }

        .custom-hover:hover::after {
            display: block;
        }

        .checkout-only {
            color: #856404;
            position: relative;
            cursor: pointer;
        }

        .checkout-only[data-tooltip]:hover::after {
            content: attr(data-tooltip);
            position: absolute;
            background: #333;
            color: #fff;
            padding: 5px 10px;
            border-radius: 4px;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
            z-index: 1000;
            font-size: 12px;
            display: block;
            pointer-events: none;
        }

        .flatpickr-months {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5rem 0;
        }
        .flatpickr-month {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 34px;
        }
        .flatpickr-current-month {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            font-size: 1rem;
            font-weight: 500;
        }
        .flatpickr-monthDropdown-months {
            display: none !important;
        }
        .flatpickr-months .flatpickr-prev-month,
        .flatpickr-months .flatpickr-next-month {
            padding: 0;
            height: 34px;
            width: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .flatpickr-months .flatpickr-prev-month svg,
        .flatpickr-months .flatpickr-next-month svg {
            width: 16px;
            height: 16px;
            margin-top : 15px;
        }
        .flatpickr-current-month .cur-month {
            display: inline-block !important;
            margin-right: 0.5rem;
            pointer-events: none;
            cursor: default;
        }
        .flatpickr-current-month .cur-year {
            display: inline-block;
            font-weight: 500;
            pointer-events: none;
            cursor: default;
        }
        .flatpickr-current-month .cur-year:hover {
            background: transparent;
        }
        .flatpickr-current-month .cur-year:focus {
            outline: none;
        }
        .numInputWrapper {
            pointer-events: none;
        }
        .numInputWrapper .arrowUp,
        .numInputWrapper .arrowDown {
            display: none !important;
        }
        .numInputWrapper .numInput {
            pointer-events: none;
            cursor: default;
        }
    `;
    document.head.appendChild(style);

    if (calendar) {
        disablePastDates();
    }

    const initialDateRange = getMonthDateRange(currentDate.getFullYear(), currentDate.getMonth());
    fetchApiData(initialDateRange.start_date, initialDateRange.end_date, uuids, (data) => {
        updateCalendarWithAPIResponse(data);
        calculateTotalPrice();
    });

    document.querySelectorAll("#bookingForm input").forEach((input) => {
        input.addEventListener("input", function () {
            validateForm();

            const cYear = calendar ? calendar.currentYear : currentDate.getFullYear();
            const cMonth = calendar ? calendar.currentMonth : currentDate.getMonth();
            const { start_date, end_date } = getMonthDateRange(cYear, cMonth);

            fetchApiData(start_date, end_date, uuids, (data) => {
                updateCalendarWithAPIResponse(data);
                calculateTotalPrice();
            });
        });
    });

    validateForm();

    function updateCalendarWithAPIResponse(data, hardcodedDates = []) {
        if (!data || typeof data !== "object") {
            console.error("Invalid data parameter:", data);
            return;
        }

        let allDatesFromAllProperties;
        try {
            allDatesFromAllProperties = Object.values(data).flatMap(item =>
                item.data.days.map(day => ({
                    date: day.date,
                    status: day.status.reason,
                    price: day.price || {},
                }))
            );

            // console.log("Processing API dates:", {
            //     totalDates: allDatesFromAllProperties.length,
            //     sampleDates: allDatesFromAllProperties.slice(0, 3)
            // });
        } catch (error) {
            console.error("Error processing available dates:", error);
            return;
        }

        if (calendar && typeof calendar.set === 'function') {
            // Create a map to track the status of each date
            // If any property has a date as "AVAILABLE", the date should be enabled
            const dateStatusMap = new Map();

            // Process all dates from all properties
            allDatesFromAllProperties.forEach(day => {
                const currentDate = dateStatusMap.get(day.date);
                
                // If this date is not in the map yet, or if the current status is not "AVAILABLE" but the new status is "AVAILABLE"
                // We prioritize "AVAILABLE" status over "RESERVED" or "BLOCKED"
                if (!currentDate || (currentDate.status !== "AVAILABLE" && day.status === "AVAILABLE")) {
                    dateStatusMap.set(day.date, day);
                }
            });

            // Get all dates that are available from any property
            const allAvailableDates = Array.from(dateStatusMap.values())
                .filter(day => day.status === "AVAILABLE")
                .map(day => day.date)
                .sort();

            // Also get all dates that are reserved/blocked from all properties
            const allReservedDates = Array.from(dateStatusMap.values())
                .filter(day => day.status === "RESERVED" || day.status === "BLOCKED")
                .map(day => day.date);

            // Update calendar's API dates
            calendar._apiDates = Array.from(dateStatusMap.values());

            // console.log("Calendar API dates updated:", {
            //     totalDates: calendar._apiDates.length,
            //     sampleDates: calendar._apiDates.slice(0, 3)
            // });

            const allCheckoutDates = [];
            Object.values(checkOutDatesByUUID).forEach(dates => {
                allCheckoutDates.push(...dates);
            });
            const uniqueCheckoutDates = [...new Set(allCheckoutDates)];

            // console.log("All available dates from UUIDs:", {
            //     availableDates: allAvailableDates.length,
            //     checkoutDates: uniqueCheckoutDates.length,
            //     sampleAvailable: allAvailableDates.slice(0, 5),
            //     sampleCheckout: uniqueCheckoutDates.slice(0, 5)
            // });

            const datesToEnable = [...new Set([...allAvailableDates, ...hardcodedDates])].sort();

            // console.log("Enabling dates on calendar load:", {
            //     totalDates: datesToEnable.length,
            //     hardcodedDates: hardcodedDates,
            //     dateRange: datesToEnable.length > 0 ? `${datesToEnable[0]} to ${datesToEnable[datesToEnable.length - 1]}` : 'none',
            //     firstFewDates: datesToEnable.slice(0, 10)
            // });

            if (datesToEnable.length > 0) {
                if (calendar && typeof calendar.set === 'function') {
                    calendar.set('enable', datesToEnable);
                    calendar.redraw();
                }
                // console.log('Calendar enabled with', datesToEnable.length, 'dates (including hardcoded dates:', hardcodedDates, ')');
            }

            const datesToDisable = allReservedDates.filter(date => !uniqueCheckoutDates.includes(date));

            if (datesToDisable.length > 0) {
                // console.log('Disabling reserved dates that are not checkout dates:', datesToDisable.length);
                if (calendar && typeof calendar.set === 'function') {
                    calendar.set('disable', datesToDisable);
                    calendar.redraw();
                }
            }
        } else {
            console.error("Calendar instance not found or not properly initialized");
        }
    }

    async function fetchAPIDataNew(month_start_date, month_end_date, totalGuests, selectedDates) {
        const month_first = month_start_date;
        const month_last = month_end_date;

        const today = new Date();
        const startDate = new Date(month_start_date);

        if (startDate < today) {
            month_start_date = today.toISOString().split('T')[0];
        }

        const CheckOutDatesLoad = NewAllDates.join(", ");

        let uuids = updateUUIDs(totalGuests);

        try {
            const url = `https://public.api.hospitable.com/v2/properties/search?start_date=${month_start_date}&end_date=${month_end_date}&adults=${totalGuests}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTYyNGRmMC0xMmYxLTQ0OGUtYjg4NC00MzY3ODBhNWQzY2QiLCJqdGkiOiI5ZWQwMjY2NzQzYTU2NzFmYzQ0OTBjMjFmMGQxMDBlMWQ1ZWI0YmI0MjZkMTczYmJlMWM2ZDc4OTBlNGI3NmFiNDdmOGQ4ZTBkMDBjZDA5YSIsImlhdCI6MTc2NjY2MTM4OC43MTM1MTIsIm5iZiI6MTc2NjY2MTM4OC43MTM1MTQsImV4cCI6MTc5ODE5NzM4OC43MDkwNjgsInN1YiI6IjIyNTA1NCIsInNjb3BlcyI6WyJwYXQ6cmVhZCIsInBhdDp3cml0ZSJdfQ.K77bDXEhF9J9f00Zs_0-hQphdJAQoE0PX6N9MPQ4SYIUa-nbYYXaCzCtLIL_B2GbTqtAYWFg_1W_SnJfytpq6fFJ_xUTc_-5c0fiZkrfTFmtSvGj7MDWRSM_XYqXa5YRY48NXaZIM0nlxXGplt7yLTeaURi5qQDkBHpG4UoxV7iEtxqQ24pjWzTlD9TT4Z4GvvHO8ru6Y66U_YEaH9oDTvKiH2VF6zNrRSA3vL4zK3pxjFQ0bqBeZgmrWAJmg7hq07nTe-z8HnrNp2VQy0iFRlodlTrMGxIibPtjstC5bQJWiZYWnbB9JcchTgAKCUlBkFQbnsDHDv8F3mlB6C_gNgkce_36rVIQB1gJgnX_9kVB0qNV3YjEblRff2cFfuV_DQoYrzTlF5rsQ_w9T0Na3Rxu9LAINknJbrR-GD8ZRdAYk3bJAp_IlQ-rd6dzJryPxyMXZxmVaqxCOnRQ3Cnu12vClPRhvCTUrO1ERLOzK69qrGDSL29tRyPD3uP3HJl6WTlcdqaTpmwGH7gjva-fsy_yFltlAK4hk2kBnhnd2Q_cldTRWaRFFsWe1a1g0d-T1aH9Q4s4W6B8e_H9Ji5YK0tawNFjOd3XEpXhFEb4X7v1ZLMou-YS5aqP1Uaq6mczZiCBM4oQieg-1EW--8NSpT3BGK8Vq--Pf4ELayfziqs"
                }
            });
            const data = await response.json();

            const filteredAvailability = data.data.filter(item => uuids.includes(item.property.id));

            const allUnavailableDates = filteredAvailability
                .filter(item => item.availability.available === false)
                .map(item => {
                    return item.availability.details.map(detail => ({
                        date: new Date(detail.date).toISOString().split('T')[0],
                        status: detail.status,
                        propertyName: item.property.name
                    }));
                })
                .flat();

            const apiRequests = uuids.map(uuid => {
                const apiUrl = `https://public.api.hospitable.com/v2/properties/${uuid}/calendar?start_date=${month_start_date}&end_date=${month_end_date}`;

                return fetch(apiUrl, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTYyNGRmMC0xMmYxLTQ0OGUtYjg4NC00MzY3ODBhNWQzY2QiLCJqdGkiOiI5ZWQwMjY2NzQzYTU2NzFmYzQ0OTBjMjFmMGQxMDBlMWQ1ZWI0YmI0MjZkMTczYmJlMWM2ZDc4OTBlNGI3NmFiNDdmOGQ4ZTBkMDBjZDA5YSIsImlhdCI6MTc2NjY2MTM4OC43MTM1MTIsIm5iZiI6MTc2NjY2MTM4OC43MTM1MTQsImV4cCI6MTc5ODE5NzM4OC43MDkwNjgsInN1YiI6IjIyNTA1NCIsInNjb3BlcyI6WyJwYXQ6cmVhZCIsInBhdDp3cml0ZSJdfQ.K77bDXEhF9J9f00Zs_0-hQphdJAQoE0PX6N9MPQ4SYIUa-nbYYXaCzCtLIL_B2GbTqtAYWFg_1W_SnJfytpq6fFJ_xUTc_-5c0fiZkrfTFmtSvGj7MDWRSM_XYqXa5YRY48NXaZIM0nlxXGplt7yLTeaURi5qQDkBHpG4UoxV7iEtxqQ24pjWzTlD9TT4Z4GvvHO8ru6Y66U_YEaH9oDTvKiH2VF6zNrRSA3vL4zK3pxjFQ0bqBeZgmrWAJmg7hq07nTe-z8HnrNp2VQy0iFRlodlTrMGxIibPtjstC5bQJWiZYWnbB9JcchTgAKCUlBkFQbnsDHDv8F3mlB6C_gNgkce_36rVIQB1gJgnX_9kVB0qNV3YjEblRff2cFfuV_DQoYrzTlF5rsQ_w9T0Na3Rxu9LAINknJbrR-GD8ZRdAYk3bJAp_IlQ-rd6dzJryPxyMXZxmVaqxCOnRQ3Cnu12vClPRhvCTUrO1ERLOzK69qrGDSL29tRyPD3uP3HJl6WTlcdqaTpmwGH7gjva-fsy_yFltlAK4hk2kBnhnd2Q_cldTRWaRFFsWe1a1g0d-T1aH9Q4s4W6B8e_H9Ji5YK0tawNFjOd3XEpXhFEb4X7v1ZLMou-YS5aqP1Uaq6mczZiCBM4oQieg-1EW--8NSpT3BGK8Vq--Pf4ELayfziqs"
                    }
                })
                    .then(response => response.json())
                    .then(calendarData => ({
                        uuid,
                        calendarData: calendarData.data
                    }));
            });

            const calendarDataResponses = await Promise.all(apiRequests);

            let isIn = 0;

            calendarDataResponses.forEach(response => {
                const calendarData = response.calendarData;

                allUnavailableDates.forEach(unavailableDate => {
                    const nextDateIndex = calendarData.days.findIndex(item => item.date === unavailableDate.date);

                    if (nextDateIndex !== -1 && calendarData.days[nextDateIndex + 1]) {
                        const nextDate = calendarData.days[nextDateIndex + 1];

                        if (unavailableDate && isIn !== 1 && new Date(unavailableDate.date) > new Date(month_start_date)) {
                            isIn = 1;

                            let currentDate = new Date(month_start_date);
                            let enabledDates = [];
                            while (currentDate <= new Date(unavailableDate.date)) {
                                enabledDates.push(currentDate.toISOString().split('T')[0]);
                                currentDate.setDate(currentDate.getDate() + 1);
                            }

                            if (isFullMonth(month_first, month_last)) {
                                // console.log("This is a full month");
                            } else {
                                if (calendar && typeof calendar.set === 'function') {
                                    calendar.set('enable', enabledDates);
                                    calendar.redraw();
                                } else {
                                    console.error("Calendar object is not properly initialized or does not have a 'set' method.");
                                }
                            }
                        }
                        unavailableDate.hoverMessage = "Check-out only";
                    }
                });
            });

            if (selectedDates && selectedDates.length === 1) {
                document.querySelectorAll('.checkout-only, .checkout-disabled').forEach(element => {
                    element.classList.remove('checkout-only', 'checkout-disabled');
                });
            } else if (selectedDates && selectedDates.length === 2) {
                document.querySelectorAll('.checkout-only, .checkout-disabled').forEach(element => {
                    element.classList.remove('checkout-only', 'checkout-disabled');
                });
            }

            return allUnavailableDates;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function isFullMonth(start_date, end_date) {
        const start = new Date(start_date);
        const end = new Date(end_date);

        const startMonth = start.getMonth();
        const startYear = start.getFullYear();
        const endMonth = end.getMonth();
        const endYear = end.getFullYear();

        const firstDayOfMonth = new Date(startYear, startMonth, 1);
        const lastDayOfMonth = new Date(endYear, endMonth + 1, 0);

        const isStartFirstDay = start.getDate() === 1;

        const isEndLastDay = end.getDate() === lastDayOfMonth.getDate();

        if (isStartFirstDay && isEndLastDay) {
            return true;
        } else {
            return false;
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
  const submitBtn = document.getElementById("submitButton");
  if (submitBtn) submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("loader").classList.remove("d-none");
    document.getElementById("calendar-container").classList.add("disabled");

    document.getElementById("submitButton").textContent = "Redirecting...";
    document.getElementById("submitButton").disabled = true;

    const site_id = document.getElementById('uuid').value;
    const property_id = document.getElementById('property_id').value;
    const quoteId = document.getElementById('quote_id').value;

    const baseUrlRedirect = `https://booking.hospitable.com/book/${site_id}/${property_id}/${quoteId}`;
    window.location.href = baseUrlRedirect;

    document.getElementById("loader").classList.add("d-none");
    document.getElementById("calendar-container").classList.remove("disabled");

    document.getElementById("submitButton").textContent = "Request To Book";
    document.getElementById("submitButton").disabled = false;
});
  });
