import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl,author,date } = this.props
        return (
            <div>

                <div className="my-3">
                    <div className="card" >
                        <img className="card-img-top" src={!imageUrl ? "https://i.insider.com/658a1050ab6f2ebb11f6ca0c?width=1200&format=jpeg" : imageUrl} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text" >{description}...</p>
                            <p class="card-text"> By {author?author:"Unknown"} on {new Date(date).toGMTString()}</p>
                            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
