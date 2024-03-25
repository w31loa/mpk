import React, { FC, useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { instance } from "../../api/axios.api";



export interface IServiceSelector {
    name: string,
    id: number
}



const {data} = await instance.get('/service')
const Selector:FC<any> = ({selectedService, setSelectedService}) => {

    // const[category , setCategory] = useState<ICategory[]>()
    // const getCategoryData = async()=>{
    //     const {data}= await instance.get(`service-category`)
    //     setCategory(data)
    // }
    console.log(data)
    const services: IServiceSelector[] = data.map((el:any)=>{
        return {
         name: el.title,
         id: +el.id
        }
    })

    services.unshift({name: "Нет услуги" , id:0})


    const selectedCountryTemplate = (option: IServiceSelector, props) => {
        if (option) {
            return (
                <div className="flex align-items-center bg-white">
                    <div >{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option: IServiceSelector) => {
        return (
            <div className="flex align-items-center bg-white">
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="p-2 rounded-md mb-1 flex justify-content-center">
            <Dropdown value={selectedService} onChange={(e: DropdownChangeEvent) => setSelectedService(e.value)} options={services} optionLabel="name" placeholder="Выберите услугу" 
                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full rounded-md" />
        </div>    
    )
}

export default Selector