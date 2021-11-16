import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
      >
      <div className="container" >
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" id="aboutUs" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  Who are we?  
                  </h3>
                <p className="m-0  tk-parisine-std-compress">
                Explaining “who we are” might now be as smooth as telling you “what we do,” if you feel what I’, puttin’ down. Some of us rock. Some of us roll. The one thing you can be sure of though is that we all have a lot of soul. When you mint one of us, you can be absolutely sure you will get a hand designed, algorithmically generated, certified fine NFT who lives on the Binance Smart Chain. Minting one of us is guaranteeing you’ll have that jazz in your life and a little swing in your stride. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Duke.PNG')}
                  alt="Features split 01"
                  style={{width:200}}/>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                 
                  </div>
                <h3 className="mt-0 mb-12">
                  Why mint us?
                  </h3>
                <p className="m-0  tk-parisine-std-compress">
                  Well, isn’t it obvious, sweetie? When was the last time you’ve had a piano playing kitty in your wallet? Animal Phunks not only mixes complex, sophisticated styling with fun personality, but each Mint algorithmically generates a complete back-story to help you understand where your Animal Phunk has been and where he or she is going. Ever watch one of those music documentaries of your favorite band? Us too, and that’s why we are scratching that itch, honey! 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Whitney.PNG')}
                  alt="Features split 02"
                  style={{width:200}}/>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  Tech Specs
                  </h3>
                <p className="m-0  tk-parisine-std-compress">
                  Well, I figure since we’re going to be minting 4,600 of these musical critters, that ought to be enough ensure the world is full of music. Now, to be sure this is all, fair-n-all, we will ensure that there will be equal and fair distribution of this NFT set. To make sure we aren’t getting a bit rowdy, you’ll be limited to X mints at once. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Waylon.PNG')}
                  alt="Features split 03"
                  style={{width:200}}/>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                
                  </div>
                <h3 className="mt-0 mb-12">
                  To do list 
                  </h3>
                <p className="m-0  tk-parisine-std-compress">
                    When I’m off the mic, what I’ve got in sight, is the to-do-list to get your mind right. So, sit on back, and let your mind relax, because we got the map that will print some stacks.
                  <br/>
                  <br/> - Secure various <b>rarity tool</b> listings
                  <br/> - Develop a Phunky NFT Marketplace 
                  <br/> - Utility with future <b>Phunk Labs</b> projects

                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/BIG.PNG')}
                  alt="Features split 03"
                  style={{width:200}}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;