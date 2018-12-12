import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Kartu extends Component {
  render() {
    return (
      <div>
        <div className="container" align="center">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
          <Card>
            <CardImg top width="100%" src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572" alt="Card image cap" />
            <CardBody>
              <CardTitle><strong>Online Tryout</strong></CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
          </Card>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
          <Card>
            <CardImg top width="100%" src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381" alt="Card image cap" />
            <CardBody>
            <CardTitle><strong>Akademik</strong></CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
          </Card>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
          <Card>
            <CardImg top width="100%" src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg" alt="Card image cap" />
            <CardBody>
            <CardTitle><strong>Online Tryout</strong></CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
          </Card>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
