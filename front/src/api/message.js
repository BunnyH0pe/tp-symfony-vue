import axios from 'axios';

const BASE_URL = 'http://localhost/tp-symfony-vue/back/public/index.php/api/messages'

async function getMessages () {
    return await axios.get(BASE_URL,
        {
            headers: {
                'Authorization': `Bearer ` + localStorage.getItem('usertoken')
            }
        })
}

async function getMessage (id) {
    return await axios.get(BASE_URL+'/'+id,
        {
            headers: {
                'Authorization': `Bearer ` + localStorage.getItem('usertoken')
            }
        })
}

async function postMessage (data) {
    return await axios.post(BASE_URL, data,
        {
            headers: {
                'Authorization': `Bearer ` + localStorage.getItem('usertoken')
            }
        })
}

async function putMessage (data, id) {
    return await axios.put(BASE_URL+'/'+id, data,
        {
            headers: {
                'Authorization': `Bearer ` + localStorage.getItem('usertoken')
            }
        })
}

async function deleteMessage (id) {
    return await axios.delete(BASE_URL+'/'+id,
        {
            headers: {
                'Authorization': `Bearer ` + localStorage.getItem('usertoken')
            }
        })
}

export {getMessages, getMessage, postMessage, putMessage, deleteMessage}