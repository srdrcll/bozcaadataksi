// Bozcaada Taksi - Client Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('Bozcaada Taksi website initialized.');

    // Track button clicks (e.g. for potential analytics)
    const callButtons = document.querySelectorAll('.btn-call, .header-phone, .routes-phone-link, #bar-call-btn');
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp, #bar-whatsapp-btn');

    callButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Track call event if needed
            console.log('Call button clicked: +90 546 656 60 77');
        });
    });

    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Track whatsapp event if needed
            console.log('WhatsApp button clicked');
        });
    });
    // Modal Logic
    const plateContainer = document.getElementById('plate-container-btn');
    const modal = document.getElementById('vehicle-modal');
    const closeModal = document.getElementById('close-modal');

    if (plateContainer && modal && closeModal) {
        const openModal = () => {
            modal.classList.add('show');
            document.body.classList.add('modal-open');
        };

        const closeModalFunc = () => {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
        };

        plateContainer.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });

        closeModal.addEventListener('click', (e) => {
            e.stopPropagation();
            closeModalFunc();
        });

        // Close if click outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
    }
});
