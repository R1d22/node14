// const addBtns = document.querySelectorAll('.btn-add');

// // addBtns.forEach((el) => {
// //     el.addEVentListener('click', (ev) => {
// //         const { id } = ev.target.dataset;
// //         localStorage.setItem('store', id);
// //     });
// // });

// addBtns.forEach((el) => {

//     el.addEventListener('click', (ev) => {
//         const { id } = ev.target.dataset;
//         const dataJson = localStorage.getItem('store', id) || '[]';
//         const data = JSON.parse(dataJson);
//         data.push({id: id});
//         const storeJson = JSON.stringify(data);
//         localStorage.setItem('store', storeJson);

//         console.log(data);
//     });

// });


const addBtns = document.querySelectorAll('.btn-add');

addBtns.forEach((el) => {

    el.addEventListener('click', (ev) => {

        const info = ev.target;
        const { id, name } = info.dataset;
    
        //console.log(run());
        //console.log(name, id);
        // const dataIdJson = localStorage.getItem('store', id) || '[]';
        // const dataNameJson = localStorage.getItem('store', name) || '[]';
        // const dataId = JSON.parse(dataIdJson);
        // const dataName = JSON.parse(dataNameJson);
        const dataJson = localStorage.getItem('store', id, name) || '[]';
       // console.log('data', dataJson);
        const data = JSON.parse(dataJson);
        
        data.push({id: id, name: name});
        //console.log('data', data)
        const storeJson = JSON.stringify(data);
        console.log('store:', storeJson);
        localStorage.setItem('store', storeJson);
        const run = () => {
            for (const item of data) {
                //console.log('item:', item);
                if(item.id = id) {
                    item.id * 2;
                    return
                }
                console.log('item:', item);
            }
        };
        run();

        //console.log('name:', dataName);
        // dataId.push({id: id});
        // dataName.push({name: name});
        //const data = JSON.parse(dataJson);
        // data.push({id: id});
        // const storeJson = JSON.stringify(data);
        // localStorage.setItem('store', storeJson);
        //setCard(id, name)
    });
});


// const setCard = (id, name) => {
//     let cardJson = localStorage.getItem('store') || '[]';
//     let card = JSON.parse(cardJson);

//     for(const item of card) {
//         console.log(item);
//         if(item.id === item) {
//             item.quantity = item.quantity +1;

//             cardJson = JSON.stringify(card);
//             localStorage.setItem('store', cardJson);
//             return
//         };
//     };
//     card.push({id: id, item: name, quantity: 1});
//     cardJson = JSON.stringify(card);
//     localStorage.setItem('store', cardJson);
// };