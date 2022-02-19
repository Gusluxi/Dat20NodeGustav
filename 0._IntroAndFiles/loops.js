const smartPhones = [
    { brand: "Samsung", price: 4500},
    { brand: "iPhone", price: 7200},
    { brand: "Sony", price: 3800}
];

const discountedPhones = smartPhones.map(phone => {
    phone.price -= 500;
    return phone;
});
console.log(smartPhones, discountedPhones);

const filteredPhones = smartPhones.filter(phone => phone.price <= 4000);
console.log(filteredPhones)