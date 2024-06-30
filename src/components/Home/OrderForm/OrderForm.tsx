import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SendIcon from '../../../assets/media/icons/icons8-send-30.png'

interface Props {
  onSubmit: (data: OrderFormData) => void;
}

const schema = z.object({
  cusomerName: z
    .string()
    .min(3, { message: "Name must be three charcters or more" })
    .max(30),
  dishName: z.string().min(5, { message: "Field cannot be empty" }).max(50),
  numberOrder: z
    .number()
    .min(0.01, { message: "Number of order is cannot be left empty" }).max(100_00),
});

type OrderFormData = z.infer<typeof schema>;

const OrderForm = ({ onSubmit }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({ resolver: zodResolver(schema) });

  return (
    <aside className={`px-5  md-px-0 flex flex-col justify-center items-center bg-brandLightBrown py-10 md:py-16`}>
        <h1 className={`text-3xl md:text-4xl font-playFairBlack `}>Book a Table Now!</h1>
        <p className={`text-center pt-2 text-xs md:text-sm`}>
            {`Don't miss out on an exceptional dining experience.`}
            <br />
            {`Reserve your table today and indulge in our exquisite cuisine, warm ambiance, and top-notch service.`}
        </p>
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })} className={`w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center gap-2 py-10`}
    >
      <div className={`flex flex-col gap-1`}>
        <label htmlFor="cusomerName">Customer Name</label>
        <input type="text" id="customerName" className={`py-2 px-4 border-2 bg-gray-50 text-base outline-none`} {...register("cusomerName")} />
        {errors.cusomerName && <small className={`p-2 bg-red-300 text-red-800 font-bold text-xs`}>{errors.cusomerName.message}</small>}
      </div>
      <div className={`flex flex-col gap-1`}>
        <label htmlFor="dishName">Name of Dish</label>
        <input type="text" id="dishName" className={`py-2 px-4 border-2  bg-gray-50 text-base outline-none`} {...register("dishName")} />
        {errors.dishName && <small className={`p-2 bg-red-300 text-red-800 font-bold text-xs`}>{errors.dishName.message}</small>}
      </div>
      <div className={`flex flex-col gap-1`}>
        <label htmlFor="nomberOrder">Number of Order</label>
        <input type="number" id="nomberOrder" className={`py-2 px-4 border-2  bg-gray-50 text-base outline-none`} {...register("numberOrder",{valueAsNumber:true})} />
        {errors.numberOrder && <small className={`p-2 bg-red-300 text-red-800 font-bold text-xs`}>{errors.numberOrder.message}</small> }
      </div>
      <button className={` p-3 text-white bg-brandBrown rounded-lg my-4 mx-auto w-1/2 flex justify-center items-center gap-3`}>Send Order<img src={SendIcon} alt="" className={`w-6`}/> </button>
    </form>
    </aside>
  );
};

export default OrderForm;
