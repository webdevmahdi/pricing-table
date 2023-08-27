import React from 'react'
import PriceOption from './PriceOption/PriceOption'

function Pricing() {
    let priceTags = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                '10 project',
                '24/7 support',
                'limited deals',
                'Slow project delevary',
                'No rivision'
            ]
        },
        {
            id: 2, name: 'Regular', price: 100, benefits: [
                '20 project',
                '24/7 support',
                'limited deals',
                'Fast project delevary',
                '10 rivision'
            ]
        },
        {
            id: 3, name: 'Premium', price: 150, benefits: [
                '30 project',
                '24/7 support',
                'limited deals',
                'Fast project delevary',
                '20 rivision'
            ]
        },
        {
            id: 4, name: 'Enterprise', price: 200, benefits: [
                '50 project',
                '24/7 support',
                'Unlimited deals',
                'Fast project delevary',
                'Unlimited rivision'
            ]
        }
    ]
    return (
        <div className='grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-slate-400 mt-16 p-4'>
            {
                priceTags.map(priceTag => <PriceOption
                    key={priceTag.id}
                    priceDetails={priceTag}
                >
                </PriceOption>)
            }
        </div>
    )
}

export default Pricing