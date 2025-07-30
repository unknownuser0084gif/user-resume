const GetDataFromDataBase = async (func , path) => {
       const domain = "https://mbahri.ir/Api-PHP-Resume/" + path;
       await fetch(domain).then(e => {
              e.json().then(func)
       })
}

export default GetDataFromDataBase ;