import { FILTER } from "../actions/actions";
const initialState = {
    filters : [{key: 'marca', value: 'Fiat'}, 
               {key: 'asientos', value: '4'}
              ]
}

export default function filterReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER: 
        const filtrados = []
        // el payload va a ser {key, value}  
        state.filters.map(filter => {
            if (filter.key === action.payload.key) {
                let valor = action.payload.value
                let key = action.payload.key
                filtrados.push({key, valor})
            }
            filtrados.push({filter})
        })
        

        return {
            ...state,
            filters: filtrados
        }
        default:
            return { ...state };
    }  


} 