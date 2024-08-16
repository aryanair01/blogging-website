import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Show() {
  const [data, setData] = useState([]);
  const [change, setChange] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const genres = ['All', 'romance', 'sci-fi', 'tragedy', 'adventure', 'mystery', 'education'];

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3070/blog/display");
      setData(response.data);
      setChange(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const genreSelected = (genre) => {
    setSelectedGenre(genre);
    if (genre === 'All') {
      setChange(data);
    } else {
      const filteredData = data.filter(item => item.gen === genre);
      setChange(filteredData);
    }
  };

  const handleReadMore = (item) => {
    setSelectedItem(item);
  };

  const handleBack = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3" style={{ marginTop: "50px" }}>
          <ul className="list-group">
            {genres.map((genre, index) => (
              <li
                key={index}
                className={`list-group-item ${selectedGenre === genre ? 'active' : ''}`}
                onClick={() => genreSelected(genre)}
                style={{ cursor: 'pointer' }}
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-9">
          {selectedItem ? (
            <div className="card" style={{ margin: "30px" }}>
              <div className="card-body">
                <img style={{ height: "300px",width:"400px",marginLeft:"150px" }} src={selectedItem.imgUrl} className="card-img-top" alt={selectedItem.title} />
                <br />
                <p style={{ color: "grey", margin: "10px",textAlign:"center",textTransform:"uppercase" }}>{selectedItem.gen}</p>
                <h5 className="card-title" style={{textAlign:"center",fontWeight:"bolder",textTransform:"uppercase"}}><u>{selectedItem.title}</u></h5>      
                <p className="card-text">{selectedItem.des}</p>
                <p className="card-text" style={{textAlign:"center"}}>-BY {selectedItem.auth}</p>
                <button onClick={handleBack} className="btn btn-secondary">Back</button>
              </div>
            </div>
          ) : (
            <div className="row d-flex flex-wrap" style={{ marginLeft: "30px", marginTop: "30px" }}>
              {change.map((value, index) => (
                <div key={index} className="card" style={{ width: '18rem', margin: "20px" }}>
                  <div className="card-body">
                    <img style={{ height: "300px" }} src={value.imgUrl} className="card-img-top" alt={value.title} />
                    <br />
                    <p style={{ color: "grey", margin: "10px",textTransform:"uppercase" }}>{value.gen}</p>
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">-BY {value.auth}</p>
                    <button onClick={() => handleReadMore(value)} className="btn btn-primary">Read More</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

