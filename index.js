var arr = [];
console.log(arr)
const fatchDataContainer = document.getElementById("child-container");
fatchDataContainer.innerHTML="   No Data"
//  x.style.margin="60px"
const fetchLondon = () => {
  let createDataObj = {
    city: "",
    description: "",
    temp: "",
    pressure: "",
    humidity: "",
  };
  document.getElementById('london').classList.add('border')
  const city_name = document
    .getElementById("london")
    .getAttribute("data-value");
    let equalData = find(city_name);
    // console.log(equalData)
    if(equalData == city_name){
      let id = `update${equalData}`
      document.getElementById(id).classList.add('bg-highlight')
    console.log(id)
    }else{
  fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city_name}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      createDataObj.city =`${city_name}`;
      createDataObj.description =  res.description;
      createDataObj.temp = res.temp_in_celsius;
      createDataObj.pressure = res.pressure_in_hPa;
      createDataObj.humidity = res.humidity_in_percent;
      arr.push(createDataObj);
    });
  }
};

const FatchData = () => {
  let createDataObj = {
    city: "",
    description: "",
    temp: "",
    pressure: "",
    humidity: "",
  };
  document.getElementById('new-york').classList.add('border')
  const city_name = document
    .getElementById("new-york")
    .getAttribute("data-value");
    let equalData = find(city_name);
    if(equalData >= 0){
      console.log(equalData)
      let id = `update${equalData}`
      document.getElementById(id).classList.add('bg-highlight')
    
    }else{
  fetch(
    `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city_name}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      createDataObj.city =`${city_name}`;
      createDataObj.description =  res.description;
      createDataObj.temp = res.temp_in_celsius;
      createDataObj.pressure = res.pressure_in_hPa;
      createDataObj.humidity = res.humidity_in_percent;
      arr.push(createDataObj);
    });
  }
};

const fetchLosAngeles = () => {
  let createDataObj = {
    city: "",
    description: "",
    temp: "",
    pressure: "",
    humidity: "",
  };
  document.getElementById('los-angeles').classList.add('border')
  const city_name = document
    .getElementById("los-angeles")
    .getAttribute("data-value");
    let equalData = find(city_name);
    if(equalData >= 0){
      let id = `update${equalData}`
      document.getElementById(id).classList.add('bg-highlight')
    
    }else{
  fetch(
    `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city_name}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      createDataObj.city =`${city_name}`;
      createDataObj.description =  res.description;
      createDataObj.temp = res.temp_in_celsius;
      createDataObj.pressure = res.pressure_in_hPa;
      createDataObj.humidity = res.humidity_in_percent;
      arr.push(createDataObj);
    });
  }
};

const fetchLesVegas = () => {
  let createDataObj = {
    city: "",
    description: "",
    temp: "",
    pressure: "",
    humidity: "",
  };
  document.getElementById('las-vegas').classList.add('border')
  const city_name = document
    .getElementById("las-vegas")
    .getAttribute("data-value");
    let equalData = find(city_name);
    if(equalData >= 0){
      console.log(equalData)
      let id = `update${equalData}`
      document.getElementById(id).classList.add('bg-highlight')
    
    }else{
  fetch(
    `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city_name}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      createDataObj.city =`${city_name}`;
      createDataObj.description =  res.description;
      createDataObj.temp = res.temp_in_celsius;
      createDataObj.pressure = res.pressure_in_hPa;
      createDataObj.humidity = res.humidity_in_percent;


      arr.push(createDataObj);
    });
  }
};

let findValue;
function find(val){
  for(let i=0; i<arr.length; i++){
    console.log(i);
  if(arr[i].city == val){
 findValue = i;
 console.log(findValue);
 return i;
  } 
}
}

function handleSearch(){
  let createDataObj = {
    city: "",
    description: "",
    temp: "",
    pressure: "",
    humidity: "",
  };
  const city_name = document.getElementById('input').value;
  let equalData = find(city_name);

  if(equalData >= 0){
    console.log(equalData)
    let id = `update${equalData}`
    document.getElementById(id).classList.add('bg-highlight')
  }
  else{
  fetch(
    `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city_name}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      createDataObj.city =`${city_name}`;
      createDataObj.description =  res.description;
      createDataObj.temp = res.temp_in_celsius;
      createDataObj.pressure = res.pressure_in_hPa;
      createDataObj.humidity = res.humidity_in_percent;
    })

      arr.push(createDataObj);
    }
}


function showData() {
  arr.map((createDataObj, idx) => {
    let parent = document.createElement("div");
    parent.className = "parent";
    parent.id=`update${idx}`
    let city = document.createElement("div");
    city.innerHTML = createDataObj.city;

    let description = document.createElement("div");
    description.innerHTML = createDataObj.description;

    let temp = document.createElement("div");
    temp.innerHTML = createDataObj.temp;

    let pressure = document.createElement("div");
    pressure.innerHTML = createDataObj.pressure;

    let humidity = document.createElement("div");
    humidity.innerHTML = createDataObj.humidity;

    let empty = document.createElement("div");
    let input = document.createElement("input");
    input.type = "submit";
    input.id=idx;
    input.value = "delete";
    input.style.all = "unset";
    input.style.textDecoration = "underline";
    input.style.color = "blue";
    input.style.cursor = "pointer";
    input.addEventListener('click',(e)=>{
    let index = e.target.id;
    arr.splice(index,1)
    document.getElementById("child-container").innerHTML = "";
    showData();
    })
    empty.appendChild(input);

    parent.appendChild(city);
    parent.appendChild(description);
    parent.appendChild(temp);
    parent.appendChild(pressure);
    parent.appendChild(humidity);
    parent.appendChild(empty);
    fatchDataContainer.appendChild(parent);
  });
}

document.getElementById("london").addEventListener("click", () => {
  fetchLondon();
  if(findValue == undefined){
  setTimeout(() => {
    if (arr.length !== 0) {
      document.getElementById("child-container").innerHTML = "";
    }
    showData();
  }, 1000);
}
findValue = undefined;
});

document.getElementById("new-york").addEventListener("click", () => {
  FatchData();
  if(findValue == undefined){
  setTimeout(() => {
    document.getElementById("child-container").innerHTML = "";
    showData();
  }, 1000);
}
findValue = undefined;
});

document.getElementById('los-angeles').addEventListener("click", ()=>{
fetchLosAngeles()
if(findValue == undefined){
setTimeout(()=>{
  document.getElementById("child-container").innerHTML = "";
  showData();
},1000)
}
findValue = undefined;
});

document.getElementById('las-vegas').addEventListener("click", ()=>{
  fetchLesVegas();
  if(findValue == undefined){
  setTimeout(()=>{
    document.getElementById("child-container").innerHTML = "";
    showData();
  },1000)
}
findValue = undefined;
  });
  document.getElementById('btn').addEventListener("click", ()=>{
    handleSearch();
    if(findValue == undefined){
      setTimeout(()=>{
        document.getElementById("child-container").innerHTML = "";
        showData();
      },1000)
    }
    findValue = undefined;
    
    });
    document.getElementById('getbtn').addEventListener("click", ()=>{
      fetchLondon();
      if(findValue == undefined){
        setTimeout(()=>{
          document.getElementById("child-container").innerHTML = "";
          showData();
        },1000)
      }
      findValue = undefined;
      
      });

   
