import React from 'react';
import Menu from '../../components/Header/Menu';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import styles from './Vtutor.css';
import fisikaPoster from '../../assets/fisika.jpg';
import reactPoster from '../../assets/react.png';

import videoFisika from  '../../assets/v1.MP4';

class Vtutor extends React.Component {
    render() {

        return (
            <div>
                <div>
                    <Menu />
                    <div className="container" align="center">
                        <br />
                        <h2>GOLearn <font color="red"><strong>Video Tutor</strong></font></h2>
                        <br />
                        <div className={styles.component}>
                            <ul className={styles.videoList}>
                                <li className={styles.videoListItem}>
                                    <Video
                                        ref="video1"
                                        onPlay={() => {
                                            this.refs.video2.videoEl.pause();
                                        }}
                                        poster={fisikaPoster}>
                                        <source src="http://localhost:3000/assets/v1.MP4" type="video/mp4" />
                                    </Video>
                                </li>
                                <li className={styles.videoListItem}>
                                    <Video
                                        ref="video2"
                                        onPlay={() => {
                                            this.refs.video1.videoEl.pause();
                                        }}
                                        src={videoFisika}
                                        poster={reactPoster}>
                                    </Video>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }

  export default Vtutor;