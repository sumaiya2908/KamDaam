const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('user')}`, "Content-Type": "multipart/form-data" }
}

export default config