fetch("https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json").then((data) => {
    return data.json();
}).then((objectData) => {
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values) => {
        tableData+= `<tr>

        <td>${values.type}</td>
         <td>${values.amount}</td>
         <td>${values.representative}</td>
         <td>${values.district}</td>
         <td>${values.ptr_link}</td>
       </tr>`;
    });

    document.getElementById("table-body").
    innerHTML = tableData;
}).catch((err)=> {
    console.log(err);
})






