import React from 'react'
import { Header } from '@/components/companyPage/Header/Header';
import { FirstScreen } from '@/components/companyPage/FirstScreen/FirstScreen';
import { SecondScreen } from '@/components/companyPage/SecondScreen/SecondScreen';
import { ThirdScreen } from '@/components/companyPage/ThirdScreen/ThirdScreen';
import { Footer } from '@/components/companyPage/Footer/Footer';


const CompanyPage = () => {
    return (
        <>
            <Header></Header>
            <main className="main">
                <FirstScreen></FirstScreen>
                <SecondScreen></SecondScreen>
                <ThirdScreen></ThirdScreen>
            </main>
            <Footer></Footer>
        </>
    )
}

export default CompanyPage