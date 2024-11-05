document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');

        // Check if the current item is active
        if (faqItem.classList.contains('active')) {
            faqAnswer.style.maxHeight = null; // Slide up (hide)
            //faqAnswer.style.padding = '0 15px'; // Reduce padding
        } else {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px'; // Slide down (show)
            faqAnswer.style.padding = '0 15px'; // Add padding
        }

        // Toggle active class
        faqItem.classList.toggle('active');

        // Close other opened faq-items
        document.querySelectorAll('.faq-item').forEach(i => {
            if (i !== faqItem) {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null; // Slide up (hide)
                //i.querySelector('.faq-answer').style.padding = '0 15px'; // Reduce padding
            }
        });
    });
});