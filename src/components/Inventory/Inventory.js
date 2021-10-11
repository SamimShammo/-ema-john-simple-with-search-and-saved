import React from 'react';
import './Inventory.css'
import { useForm } from "react-hook-form";
import useAuth from '../../useAuth/useAuth';

const Inventory = () => {
    const {user} = useAuth() 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
     
    return (
        <div>
          
    <form onSubmit={handleSubmit(onSubmit)} className="shipping-form">
      <input defaultValue={user.displayName} {...register("name")} />
      <input  defaultValue={user.email} placeholder="Email" {...register("email", { required: true })} />
      <input  placeholder="City" {...register("address", { required: true })} />
      <input  placeholder="Location" {...register("location", { required: true })} />
      {errors.email && <span className="error">This field is required</span>}
      <input type="submit" />
    </form>
        </div>
    );
};

export default Inventory;