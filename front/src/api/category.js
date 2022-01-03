import axios from 'axios';

const BASE_URL = 'http://localhost/tp-symfony-vue/back/public/index.php/api/categories'

async function getCategories () {
    return await axios.get(BASE_URL,
    {
        headers: {
            'Authorization': `Bearer ` + localStorage.getItem('usertoken')
        }
    })
}

async function getCategory (id) {
    return await axios.get(BASE_URL+'/'+id,
        {
            headers: {
                'Authorization': `Bearer ` + localStorage.getItem('usertoken')
            }
        })
}

async function postCategory (data) {
    return await axios.post(BASE_URL, data,
        {
            headers: {
                'Authorization': `Bearer ` + localStorage.getItem('usertoken')
            }
        })
}

async function putCategory (data, id) {
    return await axios.put(BASE_URL+'/'+id, data,
        {
            headers: {
                'Authorization': `Bearer ` + localStorage.getItem('usertoken')
            }
        })
}

async function deleteCategory (id) {
    return await axios.delete(BASE_URL+'/'+id, {
        headers: {
            'Authorization': `Bearer ` + localStorage.getItem('usertoken')
        }
    })
}

export {getCategories, getCategory, postCategory, putCategory, deleteCategory}