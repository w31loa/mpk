import React, { FC, useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';



export interface IServiceSelector {
    name: string,
    id: number
}

const Selector:FC<any> = ({selectedService, setSelectedService}) => {

    const countries: IServiceSelector[] = [
        { name: 'услуга 1', id: 1 },
    ];

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
            <Dropdown value={selectedService} onChange={(e: DropdownChangeEvent) => setSelectedService(e.value)} options={countries} optionLabel="name" placeholder="Выберите услугу" 
                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full rounded-md" />
        </div>    
    )
}

export default Selector