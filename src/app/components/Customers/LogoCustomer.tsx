import Image from 'next/image';

type LogoCustomerProps = {
    customerLogo: string;
    customerName: string;
}

export function LogoCustomer( {customerLogo, customerName}: LogoCustomerProps ){
    return <Image src={customerLogo} alt={customerName} />
}