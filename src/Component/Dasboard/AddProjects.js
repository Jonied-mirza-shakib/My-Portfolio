import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProjects.module.css'

const AddProjects = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageApi = '19bf4cd9f8fbd132a1a0e00b0808ce6a';

    const onSubmit = async data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageApi}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                const img = result.data.url;
                if (result.success) {
                    const portfolioData = {
                        name: data.projectTitle,
                        projectType: data.projectType,
                        liveLink: data.liveLink,
                        serverSideCode: data.serverSideCode,
                        clientSideCode: data.clientSideCode,
                        technologyUsed: data.technologyUsed,
                        img: img,
                    }
                    fetch('http://localhost:5000/projects', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(portfolioData),
                    })
                        .then(response => response.json())
                        .then(result => {
                            if (result.insertedId) {
                                alert('Added doctor successfully');
                                reset()
                            } else {
                                alert('Field to added doctor')
                            }
                        })
                }
            })
    }

    return (
        <div className='mt-5 mb-5 w-75'>
            <div className="card shadow-lg">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Project Title</span>
                            </label>
                            <input
                                type="text" placeholder="Project Title" className="w-50"
                                {...register("projectTitle", {
                                    required: {
                                        value: true,
                                        message: 'Project Title is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.projectTitle?.type === 'required' && <span className="label-text-alt text-red-500">{errors.projectTitle.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Project Type</span>
                            </label>
                            <input
                                type="text" placeholder="Project Type" className="w-50"
                                {...register("projectType", {
                                    required: {
                                        value: true,
                                        message: 'Project Type is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.projectType?.type === 'required' && <span className="label-text-alt text-red-500">{errors.projectType.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo</span>
                            </label>
                            <input
                                type="file" className="w-50"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'image is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Project Description</span>
                            </label>
                            <input
                                type="text" placeholder="Project Type" className="w-50"
                                {...register("projectDescription", {
                                    required: {
                                        value: true,
                                        message: 'project Description is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.projectDescription?.type === 'required' && <span className="label-text-alt text-red-500">{errors.projectDescription.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">live link</span>
                            </label>
                            <input
                                type="text" placeholder="Project Type" className="w-50"
                                {...register("liveLink", {
                                    required: {
                                        value: true,
                                        message: 'Live Link is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.liveLink?.type === 'required' && <span className="label-text-alt text-red-500">{errors.liveLink.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">client side code</span>
                            </label>
                            <input
                                type="text" placeholder="client side code" className="w-50"
                                {...register("clientSideCode", {
                                    required: {
                                        value: true,
                                        message: 'client side code is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.clientSideCode?.type === 'required' && <span className="label-text-alt text-red-500">{errors.clientSideCode.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">client side code</span>
                            </label>
                            <input
                                type="text" placeholder="server side code" className="w-50"
                                {...register("serverSideCode", {
                                    required: {
                                        value: true,
                                        message: 'server side code is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.clientSideCode?.type === 'required' && <span className="label-text-alt text-red-500">{errors.clientSideCode.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Technology used</span>
                            </label>
                            <input
                                type="text" placeholder="Technology used" className="w-50"
                                {...register("technologyUsed", {
                                    required: {
                                        value: true,
                                        message: 'Technology used is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.technologyUsed?.type === 'required' && <span className="label-text-alt text-red-500">{errors.technologyUsed.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-primary w-100' type="submit" value='ADD' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProjects;