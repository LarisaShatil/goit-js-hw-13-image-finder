const BASE_URL = 'https://pixabay.com/api/';
const KEY = '23129630-9573c017c45744d32c0b55f39';


export default class fetchPictures {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.per_page = 12;
        this.type = 'photo';
        this.orientation = 'horizontal';
    }
    fetchPictures () {
        const url = `${BASE_URL}?image_type=${this.type}&orientation=${this.orientation}&q=${this.searchQuery}&key=${KEY}&page=${this.page}&per_page=${this.per_page}`;

        return fetch(url)
            .then(data => data.json())
            .then(({ hits }) => {
                this.incrementPage();
                return hits;
            });
};
    incrementPage() {
        this.page += 1;
    }
    
    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

    
};
