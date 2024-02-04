import React from "react";
import axios from "axios";
import { Puff } from 'react-loader-spinner';


export default function Weather(props) {
	function handleResponse(response) {
		alert(
			`The weather in ${response.data.name} is ${response.data.main.temp}°F`
		);
	}
	let apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

	axios.get(apiUrl).then(handleResponse);
  return (
    <Puff
      visible={true}
      height={80}
      width={80}
      color="#4fa94d"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
		  wrapperClass=""
	  />
	);
}
