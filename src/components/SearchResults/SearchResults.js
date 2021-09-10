import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Typography,Row, Col, Space } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import { VideoPreviewItem } from '../../components';

import styles from './SearchResults.module.css';

const numFormatter = new Intl.NumberFormat('ru');
const SearchResults = () => {
  const search = useSelector((store) => store.youtubeSearch);
  const videoList = useSelector((store) => store.youtubeSearch.videos);
  console.log('videolist',videoList);
  const [view, setView] = useState('list');
  return (
    <div className={styles.container}>

      {/* filter panel:
      1)title,query,count;
      2)switches:list and grid;
      */}
      <Row className={styles.searchInfoContainer}>
        <Col flex='auto'>
          <Typography.Text
            className={styles.queryTitle}
          >
            Видео по запросу
          </Typography.Text>

          <Typography.Text
            className={styles.queryTitle}
            strong
          >
            {`«${search.query}»`}
          </Typography.Text>

          <Typography.Text
            className={styles.videosCount}
            style={{ color: 'rgba(23, 23, 25, 0.3)' }}
          >
            {numFormatter.format(search.totalCount)}
          </Typography.Text>
        </Col>

        <Col flex='60px'>
          <Space>
            <UnorderedListOutlined
              style={{
                fontSize: 24,
                color:view === 'list' ? '#000000' : 'rgba(23, 23, 25, 0.3)',
              }}
              disabled={view === 'list'}
              onClick = {() => setView('list')}
            />

            <AppstoreOutlined
              style={{
                fontSize: 24,
                color: view === 'cards' ? '#000000' : 'rgba(23, 23, 25, 0.3)',
              }}
              disabled={view === 'cards'}
              onClick = {() => setView('cards')}/>

          </Space>
        </Col>
      </Row>

      {/* list||grid */}

      {<ul className={view==='list'?styles.videoList:styles.videoCards}>
        {videoList.map((video) => {
          return (
            < VideoPreviewItem
              style={{ display:'flex',justifyContent:'spaceBetween' }}
              key = {video.thumbnail.thumbnail}
              video={video}
            />
          );
        })
        }
      </ul>
      }
    </div>
  );

};
export default SearchResults;
