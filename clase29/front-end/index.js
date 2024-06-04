fetch('http://localhost:8080/api/orders')
    .then(res => res.json())
    .then(json => {
        console.log(json);

        const box = document.getElementById('data')

        let html = ''
        for (let item of json.result) {
            html +=
        `<div class="card">
        <p>Orden número: ${item.number}</p>
        <p>Total de la orden: $${item.totalPrice}</p>
        <p>Estado: ${item.status}</p>
        </div>`;
        }
        box.innerHTML = html;
    })//.catch(error => console.error('Error:', error));

