import React, { Component } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

class App extends React.Component {

  state = {
    users: [
      {
        "gender": "male",
        "name": {
        "title": "Mr",
        "first": "Juho",
        "last": "Haataja"
        },
        "location": {
        "street": {
        "number": 7247,
        "name": "Rautatienkatu"
        },
        "city": "Leppävirta",
        "state": "Åland",
        "country": "Finland",
        "postcode": 32874,
        "coordinates": {
        "latitude": "-8.5320",
        "longitude": "-162.7927"
        },
        "timezone": {
        "offset": "+5:45",
        "description": "Kathmandu"
        }
        },
        "email": "juho.haataja@example.com",
        "login": {
        "uuid": "61bba7f4-245e-4d89-8408-3e2dd78aed9e",
        "username": "beautifulleopard310",
        "password": "demons",
        "salt": "krx52FJb",
        "md5": "044c8a6b891bf489f319630157ee94f4",
        "sha1": "7343da2339cb30b7bc1edadf484931781e671f8a",
        "sha256": "f3544904e651eeb9513b006d146e5d164bf11c145f384e4e3495e809502f58a1"
        },
        "dob": {
        "date": "1994-05-29T08:50:09.140Z",
        "age": 27
        },
        "registered": {
        "date": "2005-01-20T16:00:02.482Z",
        "age": 16
        },
        "phone": "08-456-985",
        "cell": "048-734-07-98",
        "id": {
        "name": "HETU",
        "value": "NaNNA297undefined"
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/men/84.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/84.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/84.jpg"
        },
        "nat": "FI"
        },
        {
        "gender": "male",
        "name": {
        "title": "Mr",
        "first": "Howard",
        "last": "Wade"
        },
        "location": {
        "street": {
        "number": 478,
        "name": "Alexander Road"
        },
        "city": "Lichfield",
        "state": "Lancashire",
        "country": "United Kingdom",
        "postcode": "RS8Y 4WX",
        "coordinates": {
        "latitude": "44.3243",
        "longitude": "-43.6325"
        },
        "timezone": {
        "offset": "+1:00",
        "description": "Brussels, Copenhagen, Madrid, Paris"
        }
        },
        "email": "howard.wade@example.com",
        "login": {
        "uuid": "71bfd3fb-936e-4700-b873-6f68f52a43c5",
        "username": "crazyduck790",
        "password": "perfect1",
        "salt": "ly7AH9ti",
        "md5": "0666caabdf876daf4dd6026933896d7b",
        "sha1": "3d695917438c5544c080f61ac90e5f59ed21be99",
        "sha256": "96c57359d18f732c4e752769977772ea88b1c63ca2bab540d5df1e87949c6ecb"
        },
        "dob": {
        "date": "1964-08-15T11:02:39.773Z",
        "age": 57
        },
        "registered": {
        "date": "2012-05-18T07:38:27.382Z",
        "age": 9
        },
        "phone": "017683 63950",
        "cell": "0724-549-003",
        "id": {
        "name": "NINO",
        "value": "YB 61 73 63 Z"
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/men/27.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/27.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/27.jpg"
        },
        "nat": "GB"
        },
        {
        "gender": "female",
        "name": {
        "title": "Mrs",
        "first": "Mattie",
        "last": "Lawson"
        },
        "location": {
        "street": {
        "number": 4181,
        "name": "Northaven Rd"
        },
        "city": "Mackay",
        "state": "New South Wales",
        "country": "Australia",
        "postcode": 4640,
        "coordinates": {
        "latitude": "14.4120",
        "longitude": "-80.8669"
        },
        "timezone": {
        "offset": "-2:00",
        "description": "Mid-Atlantic"
        }
        },
        "email": "mattie.lawson@example.com",
        "login": {
        "uuid": "62985329-5973-40aa-b8d5-2ccb93c2da16",
        "username": "redfish722",
        "password": "1204",
        "salt": "VyQOCihu",
        "md5": "daaead03e1a3605a9f366b5213c9acc2",
        "sha1": "362a86c945ae1d352a5b531d16cd330dc64fb93c",
        "sha256": "8623e2b75b60c725e5116b6c543cc2a0dac0e8c128c6c8cbf2ac8c0b3dcd53a0"
        },
        "dob": {
        "date": "1981-05-15T01:17:47.519Z",
        "age": 40
        },
        "registered": {
        "date": "2007-02-03T08:25:23.946Z",
        "age": 14
        },
        "phone": "01-9926-4053",
        "cell": "0468-711-139",
        "id": {
        "name": "TFN",
        "value": "734878000"
        },
        "picture": {
        "large": "https://randomuser.me/api/portraits/women/96.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
        },
        "nat": "AU"
        }
    ]
  }

  render() {
  return (
    <div className="container">
      <Header />
      <Card users={this.state.users} />

    </div>
  );
  };
};

export default App;
