import { AdvancedVideo } from '@cloudinary/react'
import { auto, autoBest } from '@cloudinary/transformation-builder-sdk/qualifiers/quality'
import { CloudinaryVideo } from '@cloudinary/url-gen'
import { brightness } from '@cloudinary/url-gen/actions/adjust'
import { quality } from '@cloudinary/url-gen/actions/delivery'
import { scale } from '@cloudinary/url-gen/actions/resize'
import React from 'react'
import { isMobile } from 'react-device-detect'

const IntroductionSection: React.FC = () => {
  // Constants
  const videoId = 'v1697899631/pexels_videos_1851190_2160p_gu7jev'
  const newVideoId = 'v1704728827/video_2024-01-08_19-46-41_n3kiob'
  const videoDesktopInstanse = new CloudinaryVideo(newVideoId, { cloudName: 'dwy6v0hix' })
  const videoMobileInstanse = new CloudinaryVideo(newVideoId, { cloudName: 'dwy6v0hix' })

  const videoDesktopEdited = videoDesktopInstanse
    .resize(scale().width(1920))
    //.adjust(brightness(-10))
    .quality(auto())
    .delivery(quality(auto()))
  const videoMobileEdited = videoMobileInstanse
    .resize(scale().width(1100))
    .adjust(brightness(-10))
    .quality(autoBest())
    .delivery(quality(auto()))

  return (
    <div>
      <section className="introduction">
        <div className="container">
          <h1>Drive Business Impact with Bold Strategic Vision</h1>
        </div>

        <div className="introduction__animation">
          <AdvancedVideo
            style={{ overflow: 'hidden' }}
            cldVid={isMobile ? videoMobileEdited : videoDesktopEdited}
            cldPoster="auto"
            autoPlay
            loop
            muted
          />
        </div>
      </section>
    </div>
  )
}

export default IntroductionSection
