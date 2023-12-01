import axios from "axios";

const API = "http://localhost:8082/api/pokemon";
const pokemonapi = {
    async getPokemonList(qtd) {
        return await axios.get(`${API}?limit=${qtd}`);
    },

    async getPokemonCard(name){
        return await axios.get(`${API}/${name}`);
    }
}

export default pokemonapi;
