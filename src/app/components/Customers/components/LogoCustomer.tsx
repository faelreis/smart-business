'use client'
import Image from 'next/image';

import { WrapperLogoCustomer } from './LogoCustomer.style';

type LogoCustomerProps = {
    customerLogo: string;
    customerName: string;
}

export function LogoCustomer( {customerLogo, customerName}: LogoCustomerProps ){
    return (
        <WrapperLogoCustomer>
            <Image src={customerLogo} alt={customerName} />
        </WrapperLogoCustomer>
    )
}