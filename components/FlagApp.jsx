"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

export function FlagApp() {
    const [countryState, setCountryState] = useState({
        loading: false,
        countries: [],
        errorMessage: "",
    });

    useEffect(()=> {
        const fetchData = async () => {
            try {
                // fetch spinner
                setCountryState({
                    ...countryState,
                    loading: true,
                });
                // fetch data
                
                const dataUrl = `https://restcountries.com/v3.1/all`
                const response = await axios.get(dataUrl);
                setCountryState({
                    ...countryState,
                    countries: response.data,
                    loading: false,
                })
            } catch (error) {
                setCountryState({
                    ...countryState,
                    loading: false,
                    errorMessage: 'sorry something went wrong',
                });
            }
        };
        fetchData();
    }, []);

    const {loading, errorMessage, countries} = countryState
        // console.log('loading', loading);
        // console.log('countries', countries);
        // console.log('errorMessage', errorMessage);
    
    const [selectedCountry, setSelectedCountry] = useState();
    console.log('selected country', selectedCountry)


  return (
        <section className='w-[80%]'>
            <div className=' bg-gray-light p-2 my-20  '>
            {/* header sections */}
                <div className=' h-[120px] flex justify-center items-center shadow'>
                    <p className=' uppercase font-bold text-lg text-center'>
                        Select country / <br/> auto flag and area code
                    </p>
                </div>
            {/* body section */}
                <div>
                    <div className=' flex flex-col justify-center mt-14'>
                        <div className=' w-full'>
                            <select
                                value={selectedCountry}
                                onClick={(e)=> setSelectedCountry(e.target.value)} 
                                className='w-full py-4 text-[18px] rounded-lg md:text-2xl'
                            >
                                {/* <option>--select country--</option> */}
                                {
                                    countries.map((item)=>{
                                        return (
                                            <option key={uuidv4()} value={item.name.common}>
                                                {item.name.common}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
  )
}
