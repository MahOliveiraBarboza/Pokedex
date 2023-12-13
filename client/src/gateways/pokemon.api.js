import axios from "axios";

const API = "http://localhost:8082/api/pokemon";
const pokemonapi = {
    async getPokemonList() {
        return await axios.get(API);
    },

    async getPokemonCard(name){
        return await axios.get(`${API}/${name}`);
    }
}

export default pokemonapi;
