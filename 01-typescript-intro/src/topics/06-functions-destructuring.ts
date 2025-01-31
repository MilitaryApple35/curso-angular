
export interface Product {
    description: string;
    price: number;
}

const phone: Product = { 
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

export interface TaxCalculationsOptions {
    tax: number;
    products: Product[];
}

const {description:descPhone, price:pricePhone    } = phone
const {description:descTablet, price:priceTablet     } = tablet

export function taxCalculation(options: TaxCalculationsOptions ): [number, number]{
    const {tax, products    } = options


    let total = 0;

products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax];

}


const shoppingCart = [phone, tablet];
const tax = 0.15;


const [ total , impuesto ] = taxCalculation({
    products: shoppingCart,
    tax: tax,

});




console.log('total', total);
console.log('total tax', impuesto);

console.log('description phone', descPhone);
console.log('price phone', pricePhone);

console.log('description tablet', descTablet);
console.log('price tablet', priceTablet);

