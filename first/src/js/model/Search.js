import axios from 'axios';
import * as config from '../config';

export default class Search {

    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://api.edamam.com/search?q=${this.query}&app_id=${config.id}&app_key=${config.key}&to=100`);
            this.recipes = res.data.hits;
        } catch (error) {
            alert(error);
        }
    }

}