import mixitup from 'mixitup';
import mixitupPagination from '../vendor/mixitup-pagination';

mixitup.use(mixitupPagination);

const containerEl = document.querySelector('.container');
const mixer = mixitup(containerEl, {
    pagination: {
        limit: 4
    }
});

console.log(mixer);