import { fetchUtils } from "react-admin";
import { stringify } from "query-string";
import axios from "axios";


const apiUrl = process.env.REACT_APP_REACTADMIN_REQ ? process.env.REACT_APP_REACTADMIN_REQ : 'http://localhost:3001';
const httpClient = fetchUtils.fetchJson;

export const dataProvider= {
    getList: (resource, params) => {  

// resource = vehicles, 
// params = field, order, page...

        const { page, perPage } = params.pagination;
        
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }
        
        ));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: async (resource, params) =>
       {
        
   console.log(params.data.photo)
         if(params.data.photo.rawFile){
            const imageData = new FormData()
            imageData.append("file", params.data.photo.rawFile)
            imageData.append("upload_preset", "DriveIn_users")
            await axios.post("https://api.cloudinary.com/v1_1/dbmhbouib/upload", imageData)
            .then(response => { params.data.photo = response.data.secure_url})
        
            
            
            .then( res => httpClient(`${apiUrl}/${resource}/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify(params.data),
            
            })).then(( {json} ) => ( {data: json})  )
         }else{
            httpClient(`${apiUrl}/${resource}/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify(params.data),
             
            }).then(( {json} ) => ( {data: json})  )
         }
        

    },

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        })),

    delete: (resource, params) => {
        
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json }))
        
    },
   
    

    deleteMany: (resource, params) => {

        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        console.log(stringify(query))
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json }));
    }
};