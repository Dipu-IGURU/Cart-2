// JavaScript for interactive elements on the Cart Overview page

document.addEventListener('DOMContentLoaded', function () {
    // Add-ons state
    const designCheck = document.getElementById('design-check');
    const securedDelivery = document.getElementById('secured-delivery');
    const ecoSupport = document.getElementById('eco-support');

    // Overview values
    const premiumCheckRow = document.querySelector('.overview-premium-artwork');
    const deliveryRow = document.querySelector('.overview-delivery');
    const subtotalRow = document.querySelector('.overview-subtotal');
    const totalRow = document.querySelector('.overview-total');

    // Price values
    const baseArticle = 43.34;
    const designCheckPrice = 7.13;
    const securedDeliveryPrice = 1.52;
    const ecoSupportPrice = 1.11;
    const deliveryPrice = 3.99;

    function updateOverview() {
        let subtotal = baseArticle;
        let premium = 0;
        let delivery = deliveryPrice;
        let eco = 0;

        if (designCheck.checked) premium += designCheckPrice;
        if (securedDelivery.checked) subtotal += securedDeliveryPrice;
        if (ecoSupport.checked) subtotal += ecoSupportPrice;
        subtotal += premium + delivery;

        // Update DOM
        document.querySelectorAll('.overview-premium-artwork span:last-child').forEach(e => e.textContent = designCheck.checked ? `£${designCheckPrice.toFixed(2)}` : '£0.00');
        document.querySelectorAll('.overview-delivery span:last-child').forEach(e => e.textContent = `£${deliveryPrice.toFixed(2)}`);
        document.querySelectorAll('.overview-subtotal span:last-child').forEach(e => e.textContent = `£${subtotal.toFixed(2)}`);
        document.querySelectorAll('.overview-total span:last-child').forEach(e => e.textContent = `£${subtotal.toFixed(2)}`);
    }

    // Add event listeners
    [designCheck, securedDelivery, ecoSupport].forEach(el => {
        el.addEventListener('change', updateOverview);
    });

    // Initial update
    updateOverview();
});
