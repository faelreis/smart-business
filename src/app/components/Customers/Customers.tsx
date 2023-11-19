'use client'

import { SectionCustomers, WrapperCustomers } from './Customers.style';

import { LogoCustomer } from './components/LogoCustomer';
import { Container } from "../Container";

import Google from '../../../assets/logo/customer/google.svg';
import Spotify from '../../../assets/logo/customer/spotify.svg';
import GitHub from '../../../assets/logo/customer/github.svg';
import Microsoft from '../../../assets/logo/customer/microsoft.svg';
import Digg from '../../../assets/logo/customer/digg.svg';
import Hostgator from '../../../assets/logo/customer/hostgator.svg';

export function Customers(){
    return(
        <SectionCustomers>
            <Container>
                <WrapperCustomers>
                    <LogoCustomer customerLogo={Google} customerName={'Google'} />
                    <LogoCustomer customerLogo={Spotify} customerName={'Spotify'} />
                    <LogoCustomer customerLogo={GitHub} customerName={'GitHub'} />
                    <LogoCustomer customerLogo={Microsoft} customerName={'Microsoft'} />
                    <LogoCustomer customerLogo={Digg} customerName={'Digg'} />
                    <LogoCustomer customerLogo={Hostgator} customerName={'Hostgator'} />
                </WrapperCustomers>
            </Container>
        </SectionCustomers>
    )
}