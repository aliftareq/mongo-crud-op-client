import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateUser = () => {
    const data = useLoaderData()
    const user = data.data
    console.log(user);
    //handlers
    const handleSubmit = (e) => {
        e.preventDefault()
        const SingleUser = {
            fname: e.target.fname.value,
            lname: e.target.lname.value,
            email: e.target.email.value,
            address: e.target.address.value,
            city: e.target.city.value,
            state: e.target.state.value,
            zip: e.target.zip.value,
        }
        fetch(`https://mongo-crud-server.vercel.app/user/${user._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(SingleUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.data.modifiedCount > 0) {
                    toast.success('Your data Updated Successfully')
                }
                else {
                    toast.error('Somthing went wrong')
                }
            })
        console.log(SingleUser);
    }
    return (
        <div>
            <h1 className='text-5xl text-center text-yellow-400 border-2 border-emerald-400 w-2/3  mx-auto my-5 px-4 py-3'>This page is for update user info</h1>
            <div className='w-4/5 mx-auto p-5 border-2 border-red-500'>
                <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                    <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900 text-white">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">Personal Inormation</p>
                                <p className="text-xs">Please give us your valid information so that we can save your data in our database and help you in Authentication</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="firstname" className="text-sm">First name</label>
                                    <input id="firstname" defaultValue={user.fname} type="text" name='fname' placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 ring-violet-400 border-gray-700 text-gray-900 px-3" required />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="lastname" className="text-sm">Last name</label>
                                    <input id="lastname" defaultValue={user.lname} type="text" name='lname' placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 ring-violet-400 border-gray-700 text-gray-900 px-3" required />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm">Email</label>
                                    <input id="email" defaultValue={user.email} type="email" name='email' placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 px-3" data-temp-mail-org="0" required />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="address" className="text-sm">Address</label>
                                    <input id="address" defaultValue={user.address} type="text" name='address' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 px-3" required />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="city" className="text-sm">City</label>
                                    <input id="city" defaultValue={user.city} type="text" name='city' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 px-3" required />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="state" className="text-sm">State / Province</label>
                                    <input id="state" defaultValue={user.state} type="text" name='state' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 px-3" required />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                    <input id="zip" defaultValue={user.zip} type="text" name='zip' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 ring-violet-400 border-gray-700 text-gray-900 px-3" required />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <button type='submit' className='btn text-white'>Submit</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default UpdateUser;