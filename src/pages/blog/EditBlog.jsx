import React from 'react'
import axios from 'axios'
import Form from './components/Form'
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const editBlog = async (data) => {
        try {
            const response = await axios.patch(
                `https://react30.onrender.com/api/user/blog/${id}`, data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": localStorage.getItem("token")
                    }
                })
            if (response.status === 200) {
                navigate("/")
            }
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    };

    return (
        <div>
            <Form type='Edit' onSubmit={editBlog} />
        </div>
    )
}

export default EditBlog
