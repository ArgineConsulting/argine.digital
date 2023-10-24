import React, { FC } from 'react'
import { AdvancedVideo } from '@cloudinary/react'
import { CloudinaryVideo } from '@cloudinary/url-gen'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { brightness } from '@cloudinary/url-gen/actions/adjust'
import { auto, autoBest } from '@cloudinary/transformation-builder-sdk/qualifiers/quality'
import { isMobile } from 'react-device-detect'
import { quality } from '@cloudinary/url-gen/actions/delivery'

const IntroductionSection: FC = () => {
  // Constants
  const videoId = 'v1697899631/pexels_videos_1851190_2160p_gu7jev'
  const videoDesktopInstanse = new CloudinaryVideo(videoId, { cloudName: 'dwy6v0hix' })
  const videoMobileInstanse = new CloudinaryVideo(videoId, { cloudName: 'dwy6v0hix' })

  const videoDesktopEdited = videoDesktopInstanse
    .resize(scale().width(1920))
    .adjust(brightness(-10))
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
            style={{ height: '100vh', overflow: 'hidden' }}
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
