
import axios from 'axios';
import toast from 'react-hot-toast';
// const jwt_decode = require('jwt-decode');

// axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL ;


export async function wakeupServer() { 
    try {
        return await axios.get('/');
    } catch (err) {
        return { status: "waking up" }
    }
}
export async function cosplayRegister(userData) {
    try {
        const { data, status } = await axios.post('/api/cosplayregister', userData);
        if (status === 201) {
            return Promise.resolve({ data });
        }
        return Promise.reject(status);
    } catch (err) {
        return Promise.reject({ error: err });
    }
}

export async function cosplayVerify() {
    try {
        const token = localStorage.getItem('token');
        const { data, status, result } = await axios.get('/api/cosplayverify', { headers: { "Authorization": `Bearer ${token}` } });
        // console.log(data,"helper");
        return Promise.resolve({ data, status, result })
    } catch (error) {
        return Promise.reject({ error: "Couldn't Register" })
    }
}
export async function cosplayGetData() {
    try {
        const token = localStorage.getItem('token');
        const { data, status } = await axios.get('/api/cosplaygetdata', { headers: { "Authorization": `Bearer ${token}` } });
        // console.log(data,"helper");
        return Promise.resolve({ data, status })
    } catch (error) {
        return Promise.reject({ error: "Couldn't Register" })
    }
}
export async function sonaRegister(userData) {
    try {
        const { data, status } = await axios.post('/api/sonaregister', userData);
        if (status === 201) {
            return Promise.resolve({ data });
        }
        return Promise.reject(status);
    } catch (err) {
        return Promise.reject({ error: err });
    }
}

export async function sonaVerify() {
    try {
        const token = localStorage.getItem('token');
        const { data, status, result } = await axios.get('/api/sonaverify', { headers: { "Authorization": `Bearer ${token}` } });
        // console.log(data,"helper");
        return Promise.resolve({ data, status, result })
    } catch (error) {
        return Promise.reject({ error: "Couldn't Register" })
    }
}
export async function sonaGetData() {
    try {
        const token = localStorage.getItem('token');
        const { data, status } = await axios.get('/api/sonagetdata', { headers: { "Authorization": `Bearer ${token}` } });
        // console.log(data,"helper");
        return Promise.resolve({ data, status })
    } catch (error) {
        return Promise.reject({ error: "Couldn't Register" })
    }
}


export async function authenticate(id) {
    try {
        return await axios.post('/api/auth', { id })
    } catch (error) {
        return { error: "id doesn't exist...!" }
    }
}

export async function userNotExist({ email }) {
    try {
        const { status } = await axios.get('/api/findUser', { params: { email } })
        if (status === 201) {
            return { status };
        }
        return { status };
    } catch (err) {
        return { err, msg: "errorC" };
    }
}


export async function registerUser(credentials) {
    try {
        const { status, data } = await axios.post('/api/register', credentials);
        if (status === 201) {
            return Promise.resolve({ status, data });
        }
    } catch (error) {
        return Promise.reject({ error })
    }
}



/** login function */
export async function loginUser({ email, password }) {
    try {
        if (email && password) {
            const { status, data } = await axios.post('/api/login', { email, password })
            if (status === 201) {
                return Promise.resolve({ data });
            }
            return Promise.reject();
        }
    } catch (error) {
        return Promise.reject({ error: "Password doesn't Match...!" })
    }
}

export async function getUserCount({club}) {
    try {
        const { status, data } = await axios.get(`/api/club/${club}`);
        if (status === 201) {
            return Promise.resolve({ data: data });
        } else
            return Promise.reject({ status });
    } catch (err) {
        return Promise.reject({ error: err });
    }

}


/** update user event */
export async function updateEvent(response) {
    try {

        const token = localStorage.getItem('token');
        const { data, status } = await axios.put('/api/updateEvent', response, { headers: { "Authorization": `Bearer ${token}` } });
        return Promise.resolve({ data, status })
    } catch (error) {
        return Promise.reject({ error: "Couldn't Register" })
    }
}

export async function deletEvent(response) {
    try {

        const token = localStorage.getItem('token');
        const { data, status } = await axios.put('/api/deleteEvent', response, { headers: { "Authorization": `Bearer ${token}` } });
        return Promise.resolve({ data, status })
    } catch (error) {
        return Promise.reject({ error: "Error" })
    }
}



/** generate OTP */
export async function generateOTP(email, name) {
    try {
        const { data: { code }, status } = await axios.get('/api/generateOTP');
        if (status === 201) {
            let text = `Your OTP is ${code}. Verify your Account`;
            await axios.post('/api/registerMail', { name, userEmail: email, text, code, subject: "verification OTP" })
        }
        return Promise.resolve(code);
    } catch (error) {
        return Promise.reject({ error });
    }
}

export async function otpRegister({ email }) {
    const { status } = await axios.post('/api/otpregister', { email });
    console.log(status)
    if (status === 201) {
        return Promise.resolve(status);
    }
    else {
        return Promise.reject(status);
    }
}

export async function otpReset({ email }) {
    console.log(email);
    const { status } = await axios.post('/api/otpreset', { email });
    if (status === 201) {
        return Promise.resolve(status);
    }
    else {
        return Promise.reject(status);
    }
}

/** verify OTP */
export async function verifyOTP({ code }) {
    try {
        const { data, status } = await axios.get('/api/verifyOTP', { params: { code } })
        return { data, status }
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function verifyUserEmail({ email }) {
    try {
        const { status, data: { name } } = await axios.get('/api/userExist', { params: { email } })
        return Promise.resolve({ status, name });
    } catch (err) {
        return Promise.reject({ error: err });
    }
}

/** reset password */
export async function resetPassword({ email, password }) {
    try {
        const { status } = await axios.put('/api/resetPassword', { email, password });
        return Promise.resolve(status)
    } catch (error) {
        return Promise.reject(error)
    }
}

export async function verifyToken(token) {
    try {

        const { status } = await axios.get(`/api/token/${token}`);
        if (status === 201) {
            localStorage.setItem('loggedin', true);
        } else if (status === 401) {
            toast.error("session expired")
            localStorage.clear();
        }
    } catch (err) {
        toast.error("session expired")
        localStorage.clear();
    }
}
export async function getUserEvents(token) {
    try {

        const { status, data } = await axios.get(`/api/events/${token}`);
        if (status === 201) {
            localStorage.setItem('loggedin', true);
            return Promise.resolve({ data });
        } else if (status === 401) {
            toast.error("session expired")
            localStorage.clear();
        }
    } catch (err) {
        toast.error("session expired")
        localStorage.clear();
    }
}
// mods
export async function modLogin({clubName, secretKey}){
    try{
        const {status, data } = await axios.post('/api/mod/verify',{clubName,secretKey});
        // console.log(data,"helper");
        if(status===201){
            return Promise.resolve(data);
        }
        return Promise.reject();
    }catch(err){
        return Promise.reject(err);
    }
}

export async function modGetEvents(){
    try{
        const token = localStorage.getItem("token");
        const { data } = await axios.get('/api/mod/club', { headers: { "Authorization": `Bearer ${token}` } });
        return Promise.resolve({ data });
    }catch(err){
        return Promise.reject(err);
    }
}
export async function modGetUsers({event}){
    try{
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`/api/mod/club/${event}`, { headers: { "Authorization": `Bearer ${token}` } });
        return Promise.resolve({ data });
    }catch(err){
        return Promise.reject(err);
    }
}

export async function modAllUser() {
    try {
        const token = localStorage.getItem('token');

        const { data } = await axios.get('/api/mod/alluser', { headers: { "Authorization": `Bearer ${token}` } });

        return Promise.resolve({ data });
    } catch (err) {
        return Promise.reject({ error: err });
    }
}


// admin
export async function adminLogin({ email, password }) {
    try {
        const { status, data } = await axios.post('/api/admin/login', { email, password });
        if (status === 201) {
            return Promise.resolve({ data });
        }
        return Promise.reject();
    } catch (err) {
        return Promise.reject(err);
    }
}
// admin

export async function adminGetClubs() {
    try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('/api/admin', { headers: { "Authorization": `Bearer ${token}` } });
        return Promise.resolve({ data });
    } catch (err) {
        return Promise.reject(err);
    }
}
export async function adminGetEvents(club) {
    try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get(`/api/admin/${club}`, { headers: { "Authorization": `Bearer ${token}` } });
        return Promise.resolve({ data });
    } catch (err) {
        return Promise.reject(err);
    }
}
export async function adminGetUsers({ club, event }) {
    try {
        const token = localStorage.getItem('token');

        const { data } = await axios.get(`/api/admin/${club}/${event}`, { headers: { "Authorization": `Bearer ${token}` } });

        return Promise.resolve({ data });
    } catch (err) {
        return Promise.reject(err);
    }
}
export async function adminUserDetails({ email }) {
    try {
        const token = localStorage.getItem('token');

        const { data } = await axios.post('/api/admin/user', { body: { email }, headers: { "Authorization": `Bearer ${token}` } });

        return Promise.resolve({ data });
    } catch (err) {
        return Promise.reject(err);
    }
}
export async function adminAllUser() {
    try {
        const token = localStorage.getItem('token');

        const { data } = await axios.get('/api/admin/userall', { headers: { "Authorization": `Bearer ${token}` } });

        return Promise.resolve({ data });
    } catch (err) {
        return Promise.reject({ error: err });
    }
}
export function logOutAll() {
    localStorage.clear();
    toast.success("Logout successfully")
}
