import React from 'react'
import "./newsItem.css";

const newsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "22rem"}}>
  <img src={!imageUrl?"https://rajendrahospital.org/img/no.png":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title title">{title}</h5>
    <p className="card-text desc">{description}</p>
    <span className="badge text-bg-success">{source}</span>
    <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toLocaleString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-warning btn-sm">Read More</a>
  </div>
</div>
      </div>
    );
}

export default newsItem
