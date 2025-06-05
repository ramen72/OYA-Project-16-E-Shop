import React from 'react';
import Container from './commonLayouts/Container';

const OfferSection = () => {
    return (
        <>
            <div className="mt-20">
                <Container>
                    <div className="flex justify-between items-center">
                        <div>
                            <img src="images/offer-1.svg" alt="OfferImage" />
                        </div>
                        <div>
                            <img src="images/offer-2.svg" alt="OfferImage" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default OfferSection;