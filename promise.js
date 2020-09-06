import axios from 'axios'

const getData = url =>{
    return axios.get(url)
    .then(({data}) =>{
        return data
    } )
}

module.exports ={
    getData
}