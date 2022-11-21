import React from 'react';
import style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box, Typography} from "@mui/material";
import {info} from "../../info/Info";
import {Link} from "react-router-dom";


export default function Home() {
   return (
      <Box
          component={'main'}
          display={'flex'}
          flexDirection={{xs: 'column', md: 'row'}}
          alignItems={'center'}
          justifyContent={'center'}
          minHeight={'calc(100vh - 175px)'}
      >
         <Box
             className={classNames(style.shadowed)}
             alt={'Image'}
             style={{background: info.gradient}}
             component={'img'}
             src={me}
             width={{xs: '30vh', md: '35vh'}}
             height={{xs: '30vh', md: '35vh'}}
             borderRadius={'50%'}
             p={'0.75rem'}
             mb={{xs: '1rem', sm: 0}}
             mr={{xs: 0, md: '2rem'}}
         />
         <Box className={style.intro}>
            <h1>Hi, I'm
                <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                    {" "}
                    {info.firstName}
                </span>
                {" "}
                <span className={style.hand}>
                    🤚
                </span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
                <a href="/documents/cv.pdf" download>
                    <Typography style={{fontWeight: "600", fontSize: "20px", marginBottom: "10px", marginTop: "10px"}}>
                        <i style={{color: "#2C7FECFF"}} className="fa fa-cloud-download" aria-hidden="true" />
                        {" "}
                        Download my CV
                    </Typography>
                </a>
            </Box>
            <Box
                display={'flex'}
                gap={'1.5rem'}
                justifyContent={'center'}
                fontSize={{xs: '2rem', md: '2.5rem'}}
            >
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}