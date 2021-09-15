import { Card,Image,Typography } from 'antd';

import styles from './VideoPreviewItem.module.css';

const numFormatter = new Intl.NumberFormat('ru');

const VideoPreviewItem=({ video })=>{

  return(
    <div>
      <Card
        bodyStyle={{
          padding: 0,
        }}
        style={{
          width: 245,
          backgroundColor: 'transparent',
          border: 'none',
        }}
        cover={
          <Typography.Link
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target='_blank'
          >
            <Image
              preview={false}
              width={245}
              height={138}
              fallback='../../image/NoPreview.svg'
              src={video.thumbnail.thumbnail}
              alt='Video preview'
            />
          </Typography.Link>
        }
      >
        <Card.Meta
          description={
            <>
              <Typography.Paragraph
                ellipsis={{ rows: 2, expandable: false }}
                style={{ marginBottom: 8 }}
              >
                <Typography.Link
                  className={styles.videoLink}
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target='_blank'
                >
                  {video.title} | {video.description}
                </Typography.Link>
              </Typography.Paragraph>
              <Typography.Text
                className={styles.viewsCount}
                style={{ color: 'rgba(23, 23, 25, 0.3)' }}
              >
                <Typography.Link
                  className={styles.channelLink}
                  href={`https://www.youtube.com/channel/${video.channelId}`}
                  target='_blank'
                  style={{ color: 'rgba(23, 23, 25, 0.3)' }}
                >
                  {video.channelTitle}
                </Typography.Link>
                <br />
                {Number(video.viewCount) / 1000 >= 1 ?
                  `${numFormatter.format(Math.round(Number(video.viewCount) / 1000))} тыс. просмотров` :
                  `${video.viewCount} просмотров`}
              </Typography.Text>

            </>
          }
        />
      </Card>
    </div>
  );
};
export default VideoPreviewItem;
